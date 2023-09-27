import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
  margin: 0 0 2rem 0;
`
export const PikachuImage = styled.img`
  max-width: 90%;
`
export const TitleH1Styled = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  position: relative;

  span {
    position: relative;

    &::before {
      background: #ffda55;
      content: '';
      position: absolute;
      height: 40%;
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`
export const ButtonStyled = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  color: white;
  background-color: #34ba9a;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    background-color: #278f76;
  }
`
export const DivContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`
