import React, { FC } from 'react';
import { ErrorMessage, Field } from 'formik';
import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import TextError from './TextError';

interface Props {
  label: string;
  name: string;
}

const FormikInput: FC<Props> = ({ label, name, ...rest }) => {
  return (
    <>
      <FormLabel fontSize="sm" htmlFor={name}>
        {label}
      </FormLabel>
      <Field id={name} name={name} {...rest} as={CustomInput} />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

const CustomInput: FC = ({ ...rest }) => (
  <Input
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck="false"
    {...rest}
  />
);

export default FormikInput;
