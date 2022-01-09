import React from 'react';
import { IFormContext } from 'src/interfaces';

const FormContext = React.createContext<IFormContext>({} as IFormContext);

export default FormContext;
