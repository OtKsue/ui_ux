import styled from 'styled-components';

export const StatisticItem = styled.div`
    aspect-ratio: 1/1;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    // box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius: 10px;
`;

export const Icon = styled.div`
    color: ${props => props.theme.accentColor1};
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;