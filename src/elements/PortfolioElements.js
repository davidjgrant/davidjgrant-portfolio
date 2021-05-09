import styled from "styled-components"

export const PortfolioWrapper = styled.section`
    height: auto;
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    flex-flow: wrap;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 3;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2;
        grid-row: 1 span 2;
        gap: 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 2;
        gap: 1rem;
        margin: 1rem;
    }

`;

export const Card = styled.div`
    border-radius: 15px 15px 10px 10px;
    background-color: #fff;
    box-shadow: ${props => props.theme.shadows.shadow2};

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
    width: 300px;
    max-width: 350px;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.wide} {
        width: 500px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 200px;
    }
`