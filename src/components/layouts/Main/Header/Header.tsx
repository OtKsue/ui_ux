import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://cdn-icons-png.flaticon.com/512/1206/1206796.png"></Style.Img>
          <Style.Name>Movies for every day</Style.Name>
        </Style.Logo>
        <Button name="←" action={goBack} />
        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
