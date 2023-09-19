import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
  margin: 0 0 2rem 0;

`
export const PikachuImage = styled.img`
    width: 100%;
`
export const TitleH1Styled = styled.h1`
    font-weight: 800;
    font-size: 3rem;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;

    span {
        position: relative;
        z-index: -1;
        ::before {
            background: #FFDA55;
            content: '';
            position: absolute;
            height: 250px;
            width: 150px;
        }
    }
`

export const DivContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`