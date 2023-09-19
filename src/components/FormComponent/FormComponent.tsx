import { memo } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import { ColStyled, InputStyled, TextArea } from './style'
import { Container, Row, Col } from 'react-bootstrap'
import { FormType } from 'Types/FormTypes';

interface IBaseComponentProps {
  children?: React.ReactNode
}

const FormComponent: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = data => console.log(data);


  return(
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="d-flex justify-content-between">
          <ColStyled xs={12} sm={6}>
            <label htmlFor="name">Name</label>
            <InputStyled defaultValue="test" {...register("name")}
            type="text" id="name" />
          </ColStyled>
          <ColStyled xs={12} sm={6}>
            <label htmlFor="email">Email</label>
            <InputStyled {...register("email", { required: true })}
            type="email" id="email" />
          </ColStyled>
          <ColStyled xs={12}>
            <label htmlFor="subject">Subject</label>
            <InputStyled {...register("subject", { required: true })}
            type="text" id="subject" />
          </ColStyled>
          <ColStyled xs={12}>
            <label htmlFor="message">Message</label>
            <TextArea {...register("message", { required: true })}
            id="message" rows={10} cols={20} />
          </ColStyled>
        {errors.email && <span>This field is required</span>}
        <Col xs={12}>
          <input type="submit" />
        </Col>
        </Row>
    </form>

  </>

)}

export default memo(FormComponent)
