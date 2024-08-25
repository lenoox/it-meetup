import { Button, Form, Input, Modal } from 'antd';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Password from 'antd/lib/input/Password';
import { FormController } from '@it-meetup/ui';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../store/auth/auth.facade';

export type FormData = {
  email: string;
  password: string;
};

export function Login() {
  const { t } = useTranslation();
  const { loginUser } = useAuth();

  const UserSchema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: t('app.login.password_min_error') }),
  });

  const [modal, contextHolder] = Modal.useModal();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitForm: SubmitHandler<FormData> = (form) => {
    loginUser(form);
  };
  const onInvalidSubmit: SubmitErrorHandler<FormData> = (e) => {
    const config = {
      title: t('common.incorrect_form'),
      content: (
        <>
          <p>{e.email ? t('app.login.email_incorrect_error') : null}</p>
          <p>{e.password ? t('app.login.password_min_error') : null}</p>
        </>
      ),
    };
    modal.warning(config);
  };

  return (
    <div className={'w-full h-2/3 flex justify-center items-center'}>
      <div className={'w-96'}>
        <Form layout="vertical">
          <h1 className={'text-2xl font-bold text-center'}>
            {t('app.login.heading')}
          </h1>
          <FormController name="email" label="email" control={control}>
            <Input />
          </FormController>
          <FormController name="password" label="password" control={control}>
            <Password />
          </FormController>
          <Button onClick={handleSubmit(submitForm, onInvalidSubmit)}>
            {t('app.login.login_button')}
          </Button>
        </Form>
        {contextHolder}
      </div>
    </div>
  );
}

export default Login;
