import axios from "../axios";

export type MovieList = {
  id: number;
  url: string;
  title: string;
  title_english: string;
  title_long: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  language: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  download_count: number;
  like_count: number;
  torrents: {
    url: string;
    quality: string;
    type: string;
    is_repack: string;
    video_codec: string;
    bit_depth: string;
    audio_channels: string;
    size: string;
    size_bytes: number;
    date_uploaded: string;
  }[];
};

export const filmListQuery = async (currentPage: string, pageSize: string) => {
  const response = await axios.get<{
    data: {
      movie_count: number;
      limit: number;
      page_count: number;
      movies: MovieList[];
    };
  }>(`list_movies.json?page=${currentPage}&limit=${pageSize}`);
  return response.data;
};

export const filmRetrieveQuery = async (id: string) => {
  const response = await axios.get<{
    data: {
      movie: MovieList;
    };
  }>(`movie_details.json?movie_id=${id}`);
  return response.data;
};
