import { Form } from 'antd';
import { Controller } from 'react-hook-form';
import { cloneElement } from 'react';

export const FormController = ({
  name,
  label,
  control,
  rules,
  errors,
  message,
  children,
  className,
  hasFeedback,
}: any) => {
  return (
    <Form.Item
      name={name}
      label={label}
      className={className}
      help={errors?.[name]?.message || message}
      hasFeedback={hasFeedback}
      validateStatus={errors?.[name] || message ? 'error' : 'success'}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => cloneElement(children, { ...field })}
      />
    </Form.Item>
  );
};
