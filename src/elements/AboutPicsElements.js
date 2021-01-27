import styled from "styled-components"

export const AboutPicsWrapper = styled.div`
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Pictures = styled.div`
    position: relative;
    width: 32rem;
    height: 40rem;
`

export const Picture1 = styled.div`
    width: 20rem;
    height: 25rem;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

export const Picture2 = styled.div`
    width: 20rem;
    height: 25rem;
    position: absolute;
    z-index: 2;
    top: 12rem;
    left: 12rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`