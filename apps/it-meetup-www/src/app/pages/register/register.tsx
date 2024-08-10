import { z, ZodType } from 'zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormController } from '@it-meetup/ui';
import { Button, Form, Input, Modal } from 'antd';
import Password from 'antd/lib/input/Password';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../store/auth/auth.facade';
import { RegisterUserRequest } from '@it-meetup/dto';

export interface FormData extends RegisterUserRequest {
  confirmPassword: string;
}

export const UserSchema: ZodType<FormData> = z
  .object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password is too short' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of error
  });
export function Register() {
  const { registerUser } = useAuth();
  const { i18n, t } = useTranslation();

  const [modal, contextHolder] = Modal.useModal();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const submitForm: SubmitHandler<FormData> = (form: FormData) => {
    const formData = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      password: form.password,
    };
    registerUser(formData);
  };
  const onInvalidSubmit: SubmitErrorHandler<FormData> = (e) => {
    const config = {
      title: t('common.incorrect_form'),
      content: (
        <>
          <p>{e.email ? t('app.login.email_incorrect_error') : null}</p>
          <p>{e.password ? t('app.login.password_min_error') : null}</p>
          <p>
            {e.confirmPassword ? t('app.login.password_not_match_error') : null}
          </p>
        </>
      ),
    };
    modal.warning(config);
  };
  return (
    <div className={'w-full h-2/3 flex justify-center items-center'}>
      <div className={'w-96'}>
        <Form layout="vertical">
          <h1 className={'text-2xl font-bold text-center'}>Logowanie</h1>
          <FormController name="name" label="Name" control={control}>
            <Input />
          </FormController>
          <FormController name="phone" label="Phone" control={control}>
            <Input />
          </FormController>
          <FormController name="email" label="Email" control={control}>
            <Input />
          </FormController>
          <FormController name="password" label="Password" control={control}>
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
