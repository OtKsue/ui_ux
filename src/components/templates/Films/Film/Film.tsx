import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Pic src={props.medium_cover_image} />
          <Style.TextArea>
            <Style.Name>{props.title}</Style.Name>
            <Style.Genres>
              {0 in props.genres ? (
                <Style.GenresText>
                  {props.genres[0]}
                </Style.GenresText>
              ) : (
                ""
              )}
              {1 in props.genres ? (
                <Style.GenresText>
                  {props.genres[1]}
                </Style.GenresText>
              ) : (
                ""
              )}
              {2 in props.genres ? (
                <Style.GenresText>
                  {props.genres[2]}
                </Style.GenresText>
              ) : (
                ""
              )}
            </Style.Genres>
            <Style.Text>{props.language} {props.year}</Style.Text>
          </Style.TextArea>
        </Style.Content>
        <Style.Details>Details</Style.Details>
        <Style.RatingCircle><Style.RatingText>
            {props.rating}
          </Style.RatingText>
        </Style.RatingCircle>
      </Link>
    </Style.Film>
  );
};

export default Film;
