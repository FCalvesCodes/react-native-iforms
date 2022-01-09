import React from 'react';
import useFormField from '../hooks/useFormField';
import { IFieldProps } from '../interfaces';

const Field: React.FC<IFieldProps> = ({ children, name, rules }) => {
  const { controller } = useFormField(name, rules);

  if (typeof children === 'function') {
    return <>{children(controller)}</>;
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, controller);
  }

  return <>{children}</>;
};

export default Field;
