import React, { FC } from 'react';
import FormikInput from './FormikInput';
import FormikTextarea from './FormikTextarea';

type Control = 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';

interface Props {
  control: Control;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  isInvalid?: boolean;
}

const FormikFormControl: FC<Props> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <FormikInput {...rest} />;
    case 'textarea':
      return <FormikTextarea {...rest} />;
    case 'select':
    case 'radio':
    case 'checkbox':
    default:
      return null;
  }
};

export default FormikFormControl;
