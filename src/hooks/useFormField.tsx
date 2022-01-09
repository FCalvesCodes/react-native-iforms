import { useLayoutEffect } from 'react';
import { RegisterOptions, useController } from 'react-hook-form';
import useForm from './useForm';

const useFormField = (
  name: string,
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
) => {
  const context = useForm();
  const controller = useController({
    control: context.form.control,
    name,
    rules,
  });

  useLayoutEffect(() => {
    context.form?.register(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { controller, context };
};

export default useFormField;
