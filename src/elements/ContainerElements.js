import styled from 'styled-components'

export const ContainerWrapper = styled.main`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: calc(100vh - 80px) 1fr;

    @media ${props => props.theme.breakpoints.wide} {
        grid-template-columns: 1fr repeat(2, 4fr) 1fr;
        grid-template-rows: calc(100vh - 80px) 1fr;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: calc(100vh - 80px) 1fr;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: 4fr 6fr 1fr;
    }
`;