import styled from 'styled-components';

export const GenreItem = styled.div`
    width:100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    font-size: ${props => props.theme.textSizeTextL};
    border-radius: 10px;
    background-color: ${props => props.theme.accentColor1};
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    color: white;
    font-weight: 500;
    padding: 0px 10px;
    line-height: 5px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;