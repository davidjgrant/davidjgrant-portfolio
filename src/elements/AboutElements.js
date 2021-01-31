import styled from "styled-components"

export const AboutInfoWrapper = styled.div`
    grid-column: 1;
    grid-row: span 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    padding: 0 2rem;

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 2;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 1;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 1;
        
    }
`

export const AboutInfo = styled.p`
    color: #111;
    line-height: 1.4;
    font-size: 1rem;
`

export const AboutPicsWrapper = styled.div`
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.light1};

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 2;
    }
`

export const Pictures = styled.div`
    position: relative;
    width: 35rem;
    height: 40rem;

    @media ${props => props.theme.breakpoints.tablet} {
        width: 24rem;
        height: 30rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 20rem;
        height: 22rem;
    }
`

export const Picture1 = styled.div`
    width: 20rem;
    height: auto;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    @media ${props => props.theme.breakpoints.tablet} {
        width: 14rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 10rem;
        top: 2rem;
        left: 2rem;
    }
`

export const Picture2 = styled.div`
    width: 20rem;
    height: auto;
    position: absolute;
    z-index: 2;
    top: 10rem;
    left: 15rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media ${props => props.theme.breakpoints.tablet} {
        top: 9rem;
        left: 10rem;
        width: 14rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 10rem;
        top: 5rem;
        left: 9rem;
    }
`