import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { auth } from "../../config/firebase";
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
} from "../StyleAuthentication";
import { Image, Typography } from "antd";

const SignUp = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên."),
    email: yup.string().required("Vui lòng nhập email.").email("Email không hợp lệ."),
    password: yup
      .string()
      .matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Mật khẩu phải có ít nhất 6 ký tự, gồm 1 chữ hoa, 1 số và 1 ký tự đặc biệt"
      )
      .required("Vui lòng nhập mật khẩu.")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
      .max(40, "Mật khẩu không được vượt quá 40 ký tự."),
    confirmPassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu.")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  async function onSignup(data: {
    email: string;
    password: string;
    name: string;
  }) {
    console.log(data.name);
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, { displayName: data.name });
        navigate("/signin");
        console.log(user);
      });
    } catch (error) {
      console.log(error);
      alert("User created failed");
      alert(error);
    }
  }

  const { Paragraph, Link } = Typography;

  return (
    <>
      <PageAuthencation>
        <BoxAuthenCation>
          <FormAuthencation onSubmit={handleSubmit(onSignup)}>
            <TitleAuthenCation>ĐĂNG NHẬP</TitleAuthenCation>
            <FormGroup className="form-group">
              <InputItem
                type="text"
                placeholder="Tên"
                {...register("name")}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              <ErrorText className="invalid-feedback">
                {errors.name?.message}
              </ErrorText>
            </FormGroup>
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
            <FormGroup className="form-group">
              <InputItem
                type="password"
                placeholder="Nhập lại mật khẩu"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <ErrorText className="invalid-feedback">
                {errors.confirmPassword?.message}
              </ErrorText>
            </FormGroup>
            <FormGroup>
              <BtnLogin type="submit">ĐĂNG KÝ</BtnLogin>
            </FormGroup>
            <Paragraph className="text-sm text-white text-center">
              Bạn đã có tài khoản? <Link href="/signin">Đăng nhập</Link>
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
export default SignUp;
