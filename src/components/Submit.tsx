import React from 'react';
import useForm from '../hooks/useForm';
import { ISubmitProps } from '../interfaces';

const Submit: React.FC<ISubmitProps> = ({ children }) => {
  const { onSubmit } = useForm();
  return <>{children(onSubmit)}</>;
};

export default Submit;
