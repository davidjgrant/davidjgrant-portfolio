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
    transition: 0.4s;

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

export const Card = styled.div`
    border-radius: 15px 15px 10px 10px;
    margin: 20px;
    background-color: #fff;

    h2 {
        margin: 1rem 0 1rem 2rem;
        color: #111;
    }

    a {
        text-decoration: none;
    }

    img {
        border-radius: 10px 10px 0 0;
    }
`

export const CardImageWrapper = styled.div`
    height: 225px;
    width: 350px;
    overflow: hidden;
    position: relative;
    border-radius: 10px 10px 0 0;

    @media ${props => props.theme.breakpoints.wide} {
        height: 400px;
        width: 500px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        height: 250px;
        width: 325px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        height: 200px;
        width: 280px;
    }
`