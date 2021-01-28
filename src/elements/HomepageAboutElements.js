import styled from "styled-components"
import { Link } from "gatsby"

export const AboutWrapper = styled.div`
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

export const AboutItems = styled.div`
    text-align: center;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    @media ${props => props.theme.breakpoints.wide} {
        max-width: 30rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        max-width: 25rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        max-width: 18rem;
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
    line-height: 1.4;
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
    text-decoration: none;
    margin: 0 1rem;
    
    @media ${props => props.theme.breakpoints.mobile} {
        margin: 0.5rem;
    }

    svg {
        height: 2rem;
        width: 2rem;
        color: ${props => props.theme.colors.dark1};
    }
`;

export const ContactButtons = styled.div`
    display: flex;
    justify-content: center;
`;

export const CVButton = styled(Link)`
    margin-right: 2rem;
`;

export const ContactButton = styled(Link)`

`;