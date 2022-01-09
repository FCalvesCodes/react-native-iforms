import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useForm from '../hooks/useForm';

const FormWatchDisplay: React.FC = () => {
  const { form } = useForm();
  const [values, setValues] = useState(form?.watch());

  useLayoutEffect(() => {
    const subscribe = form?.watch((data) => {
      setValues(data);
    });

    return () => {
      if (subscribe) {
        subscribe?.unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(values, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 5,
  },
  text: {
    color: '#4be847',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FormWatchDisplay;
