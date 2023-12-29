import styled from 'styled-components';

export const CommentItem = styled.div`
    border-radius: 10px;
    display: block;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
    height: 100px; /* Set a fixed height */
    background-color: ${props => props.theme.iconColor};
    box-shadow: 3px 10px 3px ${props => props.theme.shadowColor};
`;

export const CommentText = styled.div`
    display: flex;
    height: 30px;
    color: black;
    font-family: 'cursive';
    font-style: italic;
    font-size: ${props => props.theme.textSizeTextM};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const CommentContent = styled.div`
    display: flex;
    justify-content: space-between;   
    padding: 10px;
`;

export const UserName = styled.div`
  display: flex;
  height: 30px;
  widht: 10px;
  outline: none;
  color: black;
  font-family: 'cursive';
  font-size: ${props => props.theme.textSizeTextM};
  align-items: center;
  @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const deleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    padding: 5px;
    background-color: #e02b40;
    border: none;
    border-radius: 8px;
`;