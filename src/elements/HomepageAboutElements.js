import styled from "styled-components"
import { Link } from "gatsby"

export const AboutWrapper = styled.section`
    height: 100%;
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.breakpoints.wide} {
        grid-column: 2;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1;
        grid-row: 1;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 1;
        grid-row: 1;
    }
`;

export const AboutItems = styled.article`
    width: 30rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    @media ${props => props.theme.breakpoints.wide} {
        width: 30rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 20rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 20rem;
    }
`;

export const ProfileImg = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
`;

export const Logo = styled.img`
    height: auto;
    width: 300px;
    margin-bottom: 20px;
`;

export const Info = styled.p`
    line-height: 1.5;
    letter-spacing: .25px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;

    @media ${props => props.theme.breakpoints.mobile} {
        margin: 0.5rem;
    }
    
`;

export const SocialIconLink = styled.a`
    margin: 0 1rem;
    
    @media ${props => props.theme.breakpoints.mobile} {
        margin: 0.5rem;
    }

    svg {
        height: 2rem;
        width: 2rem;
        color: ${props => props.theme.colors.dark2};
    }
`;

export const ContactButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`;

export const CVButton = styled.a`
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    box-shadow: ${props => props.theme.shadows.shadow1};

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 1rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: .5rem;
        color: ${props => props.theme.colors.dark2};
    }

    span {
        color: ${props => props.theme.colors.dark2};
    }

    
`;

export const ContactButton = styled(Link)`
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    box-shadow: ${props => props.theme.shadows.shadow1};

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 1rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: .5rem;
        color: ${props => props.theme.colors.dark2};
    }

    span {
        color: ${props => props.theme.colors.dark2};
    }

    
`;