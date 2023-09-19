import styled from 'styled-components'
import { Col } from 'react-bootstrap'

export const InputStyled = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 0.25rem 1rem;
    border: 1px solid #ced4da;
    margin-bottom: 2rem;

    :focus{
        border-color: 'red';
    }
`
export const TextArea = styled.textarea`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 2 5px;
    border: 2px solid #ced4da;
    margin-bottom: 2rem;
`

export const ColStyled = styled(Col)`
    display: flex;
    flex-direction: column;
    max-width: 100%;
`

export const ButtonStyled = styled.button`
    display: flex;
    flex-direction: column;
    max-width: 100%;
`