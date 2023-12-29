import React from "react";
import * as Style from "./index.styled";

type GenreType = {
  text: string;
};
const GenreItem: React.FC<GenreType> = (props) => {
  return (
    <Style.GenreItem>
      <Style.Text>{props.text}</Style.Text>
    </Style.GenreItem>
  );
};

export default GenreItem;
