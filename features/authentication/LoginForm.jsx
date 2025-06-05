import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    login(
      {
        email: data?.email,
        password: data?.password,
      },
      {
        onError: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "This field is required.",
            minLength: {
              value: 8,
              message: "Password must be a minimum of 8 characters.",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
