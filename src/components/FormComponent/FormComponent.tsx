import { memo } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import { ButtonStyled, ColStyled, InputStyled, LabelStyled, SpanRequired, TextArea } from './style'
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
            <LabelStyled htmlFor="name">Name</LabelStyled>
            <InputStyled defaultValue="test" {...register("name", { required: true })}
            type="text" id="name" className="form-control" />
            {errors.name && <SpanRequired>This field is required</SpanRequired>}
          </ColStyled>

          <ColStyled xs={12} sm={6}>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputStyled {...register("email", { required: true })}
            type="email" id="email" className="form-control"/>
            {errors.email && <SpanRequired>This field is required</SpanRequired>}
          </ColStyled>

          <ColStyled xs={12}>
            <LabelStyled htmlFor="subject">Subject</LabelStyled>
            <InputStyled {...register("subject", { required: true })}
            type="text" id="subject" className="form-control" />
            {errors.subject && <SpanRequired>This field is required</SpanRequired>}
          </ColStyled>

          <ColStyled xs={12}>
            <LabelStyled htmlFor="message">Message</LabelStyled>
            <TextArea {...register("message", { required: true })}
            id="message" rows={7} cols={15} className="form-control" />
            {errors.message && <SpanRequired>This field is required</SpanRequired>}
          </ColStyled>

          <Col xs={12}>
            <ButtonStyled type="submit">Submit</ButtonStyled>
          </Col>
        </Row>
    </form>

  </>

)}

export default memo(FormComponent)
