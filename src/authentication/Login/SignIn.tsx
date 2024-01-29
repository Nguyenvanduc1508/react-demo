import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase/index.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Image, Typography } from "antd";
import {
  BoxAuthenCation,
  BtnLogin,
  ErrorText,
  FormAuthencation,
  FormGroup,
  IllustrationWrapper,
  InputItem,
  PageAuthencation,
  TitleAuthenCation,
} from "../StyleAuthentication.js";

const SignIn = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập email.").email("Email không hợp lệ."),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải trên 6 ký tự.")
      .max(40, "Mật khẩu không quá 40 ký tự"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onLogin = (data: { email: string; password: string }) => {
    if (!data) return;
    return signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Wrong account or password");
        console.log(errorCode, errorMessage);
      });
  };

  const { Paragraph } = Typography;
  return (
    <>
      <PageAuthencation>
        <BoxAuthenCation>
          <FormAuthencation onSubmit={handleSubmit(onLogin)}>
            <TitleAuthenCation>ĐĂNG NHẬP</TitleAuthenCation>
            <FormGroup className="form-group">
              <InputItem
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <ErrorText className="invalid-feedback">
                {errors.email?.message}
              </ErrorText>
            </FormGroup>
            <FormGroup className="form-group">
              <InputItem
                type="password"
                placeholder="Mật khẩu"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <ErrorText className="invalid-feedback">
                {errors.password?.message}
              </ErrorText>
            </FormGroup>
            <Checkbox style={{ marginBottom: 20 }}>Lưu tài khoản</Checkbox>
            <FormGroup>
              <BtnLogin>ĐĂNG NHẬP</BtnLogin>
            </FormGroup>
            <Paragraph className="text-sm text-white text-center">
              Bạn chưa có tài khoản? <NavLink to="/signup">Đăng ký</NavLink>
            </Paragraph>
          </FormAuthencation>
          <IllustrationWrapper>
            <Image
              preview={false}
              src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
              alt="Login"
            />
          </IllustrationWrapper>
        </BoxAuthenCation>
      </PageAuthencation>
    </>
  );
};
export default SignIn;
