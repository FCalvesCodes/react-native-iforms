import { BaseSyntheticEvent, ReactNode } from 'react';
import {
  CriteriaMode,
  Mode,
  RegisterOptions,
  UseControllerReturn,
  UseFormReturn,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export interface IBaseContext {
  form: UseFormReturn;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export interface IFormProps {
  children?: ReactNode | ((context: IBaseContext) => ReactNode);
  onSubmit?: (submittingValues: object) => void;
  onBeforeSubmit?: (submittingValues: object) => object;
  onBeforeBinding?: (initialValues: object) => object;
  initialValues?: object;
  mode?: Mode;
  reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
  criteriaMode?: CriteriaMode;
  yupSchema?: AnyObjectSchema;
}

export interface IFieldProps {
  children: (
    methods: UseControllerReturn
  ) => React.ReactNode | React.ReactElement;
  name: string;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export interface IFormContext extends IBaseContext {
  yupSchema?: AnyObjectSchema;
}

export interface ISubmitProps {
  children: (
    onSubmit: (
      e?: BaseSyntheticEvent<object, any, any> | undefined
    ) => Promise<void>
  ) => React.ReactNode;
}
