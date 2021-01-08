import styled from 'styled-components'

export const ContainerWrapper = styled.main`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr repeat(2, 4fr) 1fr;
    grid-template-rows: calc(100vh - 80px) 1fr;

    
`;