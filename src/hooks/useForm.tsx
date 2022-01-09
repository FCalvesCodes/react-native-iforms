import React from 'react';
import { IFormContext } from 'src/interfaces';
import FormContext from '../context/FormContext';

const useForm = () => {
  const context = React.useContext(FormContext);

  if (!context?.form) {
    throw 'not child Form';
  }

  return context as IFormContext;
};

export default useForm;
