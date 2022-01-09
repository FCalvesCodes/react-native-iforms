import { AnyObjectSchema, ObjectSchema } from 'yup';

export default class YupHelper {
  public static getMethods(schema: AnyObjectSchema) {
    return {
      isRequired: (name: string) => this.isRequired(schema, name),
      getLabel: (name: string) => this.getLabel(schema, name),
      getInitialValues: () => this.getInitialValues(schema),
    };
  }

  private static isRequired = (schema: AnyObjectSchema, name: string) => {
    if (!schema) {
      return false;
    }

    return schema.fields[name]?.spec.presence === 'required';
  };

  private static getLabel = (schema: AnyObjectSchema, name: string) => {
    if (!schema) {
      return null;
    }

    return schema.fields[name]?.spec.label;
  };

  private static getValueDefault = (
    field: ObjectSchema<any, any, any, any>
  ) => {
    if (field.spec.default) {
      return field.spec.default;
    }

    if (field.spec.nullable) {
      return null;
    }

    switch (field.type) {
      case 'string':
        return '';
      case 'number':
        return 0;
      case 'boolean':
        return false;
      case 'date':
        return new Date();
      case 'array':
        return [];
      case 'object':
        return {};
      default:
        return undefined;
    }
  };

  private static getInitialValues = (schema: AnyObjectSchema) => {
    if (!schema) {
      return {};
    }

    return Object.keys(schema?.fields).reduce((previos, next) => {
      return {
        ...previos,
        [next]: this.getValueDefault(schema?.fields[next]),
      };
    }, {});
  };
}
