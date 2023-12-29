import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    // aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: row;
    // flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 1;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const RatingCircle = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: ${props=> props.theme.accentColor2};
    height: 40px;
    width: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    align-self: center;
    align-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.3sec;
`;

export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color:  ${props=> props.theme.accentColor1};
    font-size: ${props=> props.theme.textSizeTitle};
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    font-weight: 200;
    align-items: center;
    justify-content: center;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Genres = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const GenresText = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 200;
    font-size: 30px;
    margin-top: 10px;
    @media (max-width: 1920px) and (min-width: 768px)  {
        font-size: 30px;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 15px;
    }
    @media (max-width: 576px)  {
        font-size: 15px;
    }
`;

export const Details = styled.button`
    cursor: pointer;
    border: 0;
    width: 150px;
    margin: 10px;
    height: 60px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color:  ${props => props.theme.accentColor1};
    color: white;
  
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1920px) and (min-width: 768px)  {
        font-size: 30px;
        width: 150px;
        height: 60px;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 15px;
        width: 70px;
        height: 40px;
    }
    @media (max-width: 576px)  {
        font-size: 15px;
        width: 70px;
        height: 40px;
    }
`;

export const Film = styled.div`
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    width: 100%;
    min-width: 365px;
    // box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    overflow: visible;
    position: relative;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
        & ${RatingCircle} {
            transition: all 0.3sec;
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    // width: 100%;
    height: 150px;
    position: relative;
    margin-left: 5px;
    margin-right: 5px; 
    overflow: hidden;
    border-radius:10px;
    background-color: ${props => props.theme.iconColor};
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    // overflow: hidden;
`;

export const Pic = styled.img` 
    aspect-ratio: 1/1/5;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
`;

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: nowrap;
    // width: 100%;
    letter-spacing: 1px;
    // overflow: hidden;
    margin: 0px 0px 0px 0px;
    // padding: 0px 150px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    // white-space: nowrap;
    @media (max-width: 1920px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTitle900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 25px;
    }
    @media (max-width: 576px)  {
        font-size: 25px;
    }
`;

export const Text = styled.div`
    display:flex;
    flex: 0 0 auto;
    // overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: auto;
    font-size:20px;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;



