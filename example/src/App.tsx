import * as React from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Form, Field, Submit, WatchDisplay } from 'react-native-iforms';
import * as yup from 'yup';

const yupSchema = yup.object().shape({
  name: yup.string().min(2).max(10).required().default('Fechou'),
});

export default function App() {
  const handleSubmit = (submittingValues: object) => {
    Alert.alert(JSON.stringify(submittingValues, null, 2));
  };

  return (
    <View style={styles.container}>
      <Form onSubmit={handleSubmit} yupSchema={yupSchema}>
        <Field name="name">
          {({ field, fieldState }) => (
            <>
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
              <Text>{fieldState.error?.message}</Text>
            </>
          )}
        </Field>
        <WatchDisplay />
        <Submit>
          {(onSubmit) => <Button title="Salvar" onPress={onSubmit} />}
        </Submit>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstForm: {
    flex: 1,
  },
  secondForm: {
    flex: 1,
  },
});
