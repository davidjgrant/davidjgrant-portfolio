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
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
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
`;

export const SocialIconLink = styled.a`
    text-decoration: none;
    margin: 0 1rem;
`;

export const LinkedIn = styled.img`
    background-color: lightblue;
    width: 40px;
    height: 40px;
`;

export const Dribbble = styled.img`
    background-color: pink;
    width: 40px;
    height: 40px;
`;

export const Github = styled.img`
    background-color: black;
    width: 40px;
    height: 40px;
`;

export const Medium = styled.img`
    background-color: black;
    width: 40px;
    height: 40px;
`;

export const Spotify = styled.img`
    background-color: lightgreen;
    width: 40px;
    height: 40px;
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