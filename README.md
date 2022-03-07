# react-native-iforms

iforms é uma biblioteca para fins didáticos, ela ajuda na criação de formulários usando contextos e validações 

## Installation

```sh
npm install react-native-iforms
```

or

```sh
yarn add react-native-iforms
```

## Usage

```js
import { Form, Field, Submit } from 'react-native-iforms';

const handleSubmit = (submittingValues) => {
  Alert.alert(JSON.stringify(submittingValues, null, 2));
};

return (
  <Form onSubmit={handleSubmit}>
    <Field name="firstName">
      {({ field, fieldState }) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    </Field>
    <Submit>{(onSubmit) => <Button title="Save" onPress={onSubmit} />}</Submit>
  </Form>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
