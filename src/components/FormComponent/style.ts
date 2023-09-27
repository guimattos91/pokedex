import { Col } from 'react-bootstrap'
import styled from 'styled-components'

export const InputStyled = styled.input`
  /* all: unset; */
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
`
export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
`

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 1rem;
`

export const ButtonStyled = styled.button`
  background-color: #0d6efd;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #1e5dba;
  }
`

export const LabelStyled = styled.label`
  margin-bottom: 0.5rem;
`

export const SpanRequired = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: red;
`
