import { Col, Row } from "antd";
import {useForm } from "react-hook-form";
import { Button, Input, Label, TextArea } from "./StyleBlog";

type FormValues = {
  comment: string,
  name: string,
  email: string
}


const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const formSubmit = (data: any) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <Col style={{marginBottom: '20px'}}>
        <Label htmlFor="comment">Bình luận</Label>
        <TextArea {...register("comment")} />
      </Col>

      <Row style={{marginBottom: '30px'}} gutter={[30, 30]}>
        <Col span={12}>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Invalid name address",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </Col>
        <Col span={12}>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Col>
      </Row>
      <Button type="submit">Phản hồi</Button>
    </form>
  );
}

export default FormHook;
