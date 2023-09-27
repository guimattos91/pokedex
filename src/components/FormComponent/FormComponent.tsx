import { memo } from 'react'

import { Row, Col } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormType } from 'Types/FormTypes'

import {
  ButtonStyled,
  ColStyled,
  InputStyled,
  LabelStyled,
  SpanRequired,
  TextArea,
} from './style'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBaseComponentProps {
  children?: React.ReactNode
}

const FormComponent: React.FC<IBaseComponentProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()
  const onSubmit: SubmitHandler<FormType> = (data) =>
    // eslint-disable-next-line no-restricted-globals, no-alert
    confirm(`${data.name}, ${data.email}, ${data.subject}, ${data.message}}`)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className="d-flex justify-content-between">
        <ColStyled xs={12} sm={6}>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', { required: true })}
            type="text"
            id="name"
            className="form-control"
          />
          {errors.name && <SpanRequired>This field is required</SpanRequired>}
        </ColStyled>

        <ColStyled xs={12} sm={6}>
          <LabelStyled htmlFor="email">Email</LabelStyled>
          <InputStyled
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', { required: true })}
            type="email"
            id="email"
            className="form-control"
          />
          {errors.email && <SpanRequired>This field is required</SpanRequired>}
        </ColStyled>

        <ColStyled xs={12}>
          <LabelStyled htmlFor="subject">Subject</LabelStyled>
          <InputStyled
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('subject', { required: true })}
            type="text"
            id="subject"
            className="form-control"
          />
          {errors.subject && (
            <SpanRequired>This field is required</SpanRequired>
          )}
        </ColStyled>

        <ColStyled xs={12}>
          <LabelStyled htmlFor="message">Message</LabelStyled>
          <TextArea
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('message', { required: true })}
            id="message"
            rows={7}
            cols={15}
            className="form-control"
          />
          {errors.message && (
            <SpanRequired>This field is required</SpanRequired>
          )}
        </ColStyled>

        <Col xs={12}>
          <ButtonStyled type="submit">Submit</ButtonStyled>
        </Col>
      </Row>
    </form>
  )
}

export default memo(FormComponent)
