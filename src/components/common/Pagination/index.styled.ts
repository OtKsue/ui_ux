import styled from 'styled-components';

export const Pagination = styled.div`
  // position: fixed;
  right: 0;
  top: 50%;
  // display: flex; 
  width: 50px;
  height: 5%;
  min-height: 30px;
  flex: 0 0 auto;
  justify-content: space-between;
  background-color: ${props => props.theme.bachgroundColor};
  transition: 0.1s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  // width: 100%;
  height: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-shrink: 1;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.iconColor};
  font-weight: 500; 
  font-size: ${props => props.theme.textSizeTextM};
  height: 30px;
  max-widht: 40px;
  border-radius: 5px;
  aspect-ratio: 1/1;
  // padding: 0px 10px;
  box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    color: white;
    background-color:${props => props.theme.accentColor1};
   
  }
  // margin: 0px 10px 0px 0px;

`;

export const ActiveItem = styled(Item)`
  color: white;
  background-color:${props => props.theme.accentColor1};
`;