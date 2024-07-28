import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormController } from '@it-meetup/ui';
import { Button, Form, Input, Modal } from 'antd';
import Password from 'antd/lib/input/Password';

export type FormData = {
  email: string;
  password: string;
};

export const UserSchema: ZodType<FormData> = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of error
  });
export function Register() {
  const [modal, contextHolder] = Modal.useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submitForm = (e) => {
    console.log(e);
  };
  const onInvalidSubmit = (e) => {
    const config = {
      title: 'Niepoprawne dane',
      content: (
        <>
          <p>{e.email ? 'Podano niepoprawny email' : null}</p>
          <p>{e.password ? 'Hasło powinno mieć minimu 8 znaków' : null}</p>
        </>
      ),
    };
    modal.error(config);
  };
  return (
    <div className={'w-full h-2/3 flex justify-center items-center'}>
      <div className={'w-96'}>
        <Form layout="vertical">
          <h1 className={'text-2xl font-bold text-center'}>Logowanie</h1>
          <FormController name="email" label="email" control={control}>
            <Input />
          </FormController>
          <FormController name="password" label="password" control={control}>
            <Password />
          </FormController>
          <FormController
            name="confirmPassword"
            label="confirmPassword"
            control={control}
          >
            <Password />
          </FormController>
          <Button onClick={handleSubmit(submitForm, onInvalidSubmit)}>
            Submit
          </Button>
        </Form>
        {contextHolder}
      </div>
    </div>
  );
}

export default Register;
