import styled from "styled-components"

export const PortfolioWrapper = styled.div`
    height: 100%;
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? props.color : "red"};

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 3;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2;
        grid-row: 1 span 2;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 2;
    }
`;

export const PortfolioCard = styled.div`
    background-color: #ffffff;
    padding-bottom: 10px;
    border-radius: 15px 15px 10px 10px;
    margin: 20px;

    h2 {
        margin-left: 2rem;
    }

    img {
        border-radius: 10px 10px 0 0;
    }

    a:nth-child(1) {
        
    }
`