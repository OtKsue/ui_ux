import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentItem from "./Comments/Comments";
import { CommentProps } from "./Comments/Comments";
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useFilmList } from "@/lib/hooks/useFilmList";
import Film from "@/components/templates/Films/Film/Film";
import { MdFavoriteBorder, MdMovieFilter, MdTimelapse } from "react-icons/md";



const Details = () => {
  
  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }

  const[comments, setComments] = useState<CommentProps[]> (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
  });

  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, pageKey]);

  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  const [page, setPage] = useState();
  const pageSize = 45;
  const { filmList } = useFilmList(String(page), String(pageSize));
  
  const currentMovieGenres = filmRetrieve?.data.movie.genres || [];
  
  const relatedMoviesByGenre = filmList?.data.movies.filter((film) => {    
    const movieGenres = film.genres || [];    
    const isSameMovie = film.id === filmRetrieve?.data.movie.id;

    return !isSameMovie && movieGenres.some((genre) =>
      currentMovieGenres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
    );
  });
  
  const relatedFilmsList = relatedMoviesByGenre?.slice(0, 5).map((film) => (
    <Film key={film.id} {...film}></Film>
  ));
  
  const noRelatedMoviesMessage = relatedFilmsList && relatedFilmsList.length === 0 ? (
    <Style.SorryText>
      Sorry, no similar movies found.
    </Style.SorryText>
  ) : null;

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });
  
  function commentsList(){
    // Функция для добавления нового комментария
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim().length != 0 && commentText.trim().length != 0)  {
        const newComment: CommentProps = {
          id: comments.length + 1,
          userName: "User: " + userName,
          commentText: commentText
        };
        setComments([...comments, newComment]);
        setUserName('');
        setCommentText('');
      }      
    }

    //Функция для удаления комментария
    // Обработчик изменения поля ввода имени пользователя
    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {

        setUserName(event.target.value);
    }
    // Обработчик изменения поля ввода текста комментария
    function handleCommentTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {

        setCommentText(event.target.value);
      

    }

    // Создаем массив элементов React, каждый из которых представляет отдельный комментарий
    const commentItems = comments.map((comment) => (
      <CommentItem
        key = {comment.id}
        id = {comment.id}
        userName = {comment.userName}
        commentText = {comment.commentText}
        comments={comments}
        setComments={setComments}
      />
    ));


    return (
       <div className="comment_block"> 
        {/* Форма для добавления нового комментария */}
        <form onSubmit={addComment}>
          <Style.YourNameLabel>Your Name:</Style.YourNameLabel>
          <input className="nameFormControl" type="text" value={userName} onChange={handleUserNameChange} />
          <Style.CommentTextLabel>Your Comment:</Style.CommentTextLabel>
          <textarea className="comment_form_control" value={commentText} onChange={(e) => handleCommentTextChange(e)}/>
          <Button className="rounded-square" variant="info" type="submit">Add comment</Button>
        </form>

        {/* Список комментариев */}
         <div style={{ fontSize: 'smaller' }}> 
         {commentItems.length == 0 ? <h1>No comments</h1> : 
        commentItems }
      </div> 
      </div>
    );
  }

  return (
    <Style.Details>
      <Style.Content>
        <Style.ContentTitle onClick={() => router.back()}>{filmRetrieve?.data.movie.title}</Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Buttons>
            {/* <Style.OtherMoviesText>You might also like</Style.OtherMoviesText>
        
            <Style.RelatedMovies>{relatedFilmsList}{noRelatedMoviesMessage}</Style.RelatedMovies> */}
            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>
            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Image>
          <Style.Description>
          <Style.Year>
            {`Year of Release: ${filmRetrieve?.data?.movie?.year}`} <br/>
            {`Language: ${filmRetrieve?.data?.movie?.language}`}
          </Style.Year>
          <Style.Genres>{genresList}</Style.Genres>
            
            <Style.Statistic>
              <StatisticItem
                caption="Rating"
                icon={<MdMovieFilter />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                caption="Likes"
                icon={<MdFavoriteBorder/>}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                caption="Duration"
                icon={<MdTimelapse/>}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
            </Style.Statistic>
            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full || 'There is no description for this film. We are working on it...'}
            </Style.DescriptionFull>
            <Style.CommentsTitle>You can leave a review about the movie!</Style.CommentsTitle>
            <Style.CommentItem>{commentsList()}</Style.CommentItem>

          </Style.Description>
        </Style.Data>
        
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
