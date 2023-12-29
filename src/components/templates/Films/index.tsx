import { useFilmList } from "@/lib/hooks/useFilmList";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import Film from "./Film/Film";
import Loader from "@/components/common/Loader";
import * as Style from "./index.styled";
import Pagination from "../../common/Pagination/Pagination";
import axios from "axios";

const searchFilms = async (query: string, page: number, pageSize: number) => {
  try {
    const response = await axios.get(`/api/films?search=${query}&page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error("Error searching films:", error);
    return null;
  }
};

const Films = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const { filmList, isLoading, updateFilmList } = useFilmList(page.toString(), pageSize.toString());
  const [loading, setLoading] = useState<boolean>(false);
  const size = useWindowSize();
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (router.asPath !== router.route) {
      setPage(Number(router.query.current_page?.toString()) || 1);
    }
  }, [router]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const films = await searchFilms(searchQuery, 1, pageSize);
    if (films) {
      updateFilmList();
    }
    setLoading(false);
  };

  const handlePageChange = async (newPage: number) => {
    setLoading(true);
    setPage(newPage);
    setLoading(false);
  };

  const filteredFilms = filmList?.data.movies.filter((film) => {
    const filmTitle = film.title.toLowerCase();
    const searchQueryLowerCase = searchQuery.toLowerCase();
    return filmTitle.includes(searchQueryLowerCase);
  });

  const findTopRatedFilms = () => {
    if (filmList) {
      const sortedFilms = [...filmList.data.movies].sort((a, b) => b.rating - a.rating);
      const topRatedFilms = sortedFilms.slice(0, 3);
      return topRatedFilms;
    }
    return [];
  };

  const findMostDownloadedFilms = () => {
    if (filmList) {
      const sortedFilms = [...filmList.data.movies].sort((a, b) => b.download_count - a.download_count);
      const mostDownloadedFilms = sortedFilms.slice(0, 3);
      return mostDownloadedFilms;
    }
    return [];
  };

  const topRatedFilms = findTopRatedFilms();
  const topRatedFilmsComponents = topRatedFilms.map((film) => (
    <div key={film.id} style={{ marginBottom: '20px' }}>
      <Film {...film} />
    </div>
  ));

  const mostDownloadedFilms = findMostDownloadedFilms();
  const mostDownloadedFilmsComponents = mostDownloadedFilms.map((film) => (
    <div key={film.id} style={{ marginBottom: '20px' }}>
      <Film {...film} />
    </div>
  ));
  
  if (isLoading) {
    return (
      <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
        <Loader />
      </div>
    );
  }

  return (
    <Style.Films>
      <Style.Content>
        <Style.List>
          <Style.Section>
            <Style.SectionTitle>Top Rated Films on this page</Style.SectionTitle>
            <Style.SectionContent>{topRatedFilmsComponents}</Style.SectionContent>
          </Style.Section>
          <Style.Section>
            <Style.SectionTitle>Most Downloaded Films on this page</Style.SectionTitle>
            <Style.SectionContent>{mostDownloadedFilmsComponents}</Style.SectionContent>
          </Style.Section>
          <Style.Search>
            <form onSubmit={handleSearchSubmit} className="mt-4 lg:mt-8">
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search movies..."
                  className="xs:p-1 sm:p-2 border-2 rounded"
                />
              </div>
            </form>
          </Style.Search>
          <Style.Section>
            <Style.SectionTitle>All Films</Style.SectionTitle>
            {filteredFilms && filteredFilms.length > 0 ? (
              filteredFilms.map((film) => (
                <div key={film.id} style={{ marginBottom: '20px' }}>
                  <Film {...film} />
                </div>
              ))
            ) : (
              <div>No films found</div>
            )}
          </Style.Section>
        </Style.List>
      </Style.Content>
      <Pagination
        totalUsersCount={filmList?.data.movie_count ?? 0}
        currentPage={page}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </Style.Films>
  );
};

export default Films;