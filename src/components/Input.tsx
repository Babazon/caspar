import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC = () => {
  const [value, setValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (value) {
      setDisplayValue(getFizzBuzz(value));
    }
  }, [value]);

  const onChange = useCallback(
    (value: string) => {
      if (!isNaN(Number(value))) {
        setValue(value);
      }
    },
    [value],
  );

  const getFizzBuzz = (value: string): string => {
    const numberValue = Number(value);

    if (numberValue % 3 === 0 && numberValue % 5 === 0) {
      return 'FizzBuzz';
    }
    if (numberValue % 3 === 0) {
      return 'Fizz';
    }

    if (numberValue % 5 === 0) {
      return 'Buzz';
    }
    return value;
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={{ width: 100, height: 40, backgroundColor: 'whitesmoke' }}
      />
      <Text>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
