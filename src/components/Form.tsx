import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';
import { useForm } from 'react-hook-form';
import { IFormProps, IBaseContext } from '../interfaces';
import FormContext from '../context/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import YupHelper from '../helpers/YupHelper';
import ObjectHelper from '../helpers/ObjectHelper';

const Form: ForwardRefRenderFunction<IBaseContext, IFormProps> = (
  {
    children,
    yupSchema,
    initialValues = {},
    mode = 'onSubmit',
    criteriaMode = 'firstError',
    reValidateMode = 'onChange',
    onSubmit = (submittingValues: object) => submittingValues,
    onBeforeSubmit = (submittingValues: object) => submittingValues,
    onBeforeBinding = (values: object) => {
      if (ObjectHelper.IsNullOrEmpty(values) && yupSchema) {
        return YupHelper.getMethods(yupSchema).getInitialValues();
      }

      if (!ObjectHelper.IsNullOrEmpty(values) && yupSchema) {
        return {
          ...YupHelper.getMethods(yupSchema).getInitialValues(),
          ...values,
        };
      }

      return ObjectHelper.IsNullOrEmpty(values) ? {} : values;
    },
  },
  ref
) => {
  const form = useForm({
    defaultValues: onBeforeBinding(initialValues),
    mode,
    criteriaMode,
    reValidateMode,
    resolver: yupSchema ? yupResolver(yupSchema) : undefined,
  });

  const handleOnSubmit = (submittingValues: object) => {
    onSubmit(onBeforeSubmit(submittingValues));
  };

  const onSubmitForm = form?.handleSubmit(handleOnSubmit);

  useImperativeHandle(ref, () => ({
    form,
    onSubmit: onSubmitForm,
  }));

  return (
    <FormContext.Provider value={{ form, onSubmit: onSubmitForm, yupSchema }}>
      {typeof children === 'function'
        ? children({ form, onSubmit: onSubmitForm })
        : children}
    </FormContext.Provider>
  );
};

export default forwardRef(Form);
