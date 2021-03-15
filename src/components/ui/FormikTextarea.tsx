import React, { FC } from 'react';
import { ErrorMessage, Field } from 'formik';
import { FormLabel } from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/textarea';
import TextError from './TextError';

interface Props {
  label: string;
  name: string;
}

const FormikTextarea: FC<Props> = ({ label, name, ...rest }) => {
  return (
    <>
      <FormLabel fontSize="sm" htmlFor={name}>
        {label}
      </FormLabel>
      <Field id={name} name={name} {...rest} as={CustomTextarea} />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

const CustomTextarea: FC = ({ ...rest }) => (
  <Textarea
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck="false"
    resize="none"
    {...rest}
  />
);

export default FormikTextarea;
