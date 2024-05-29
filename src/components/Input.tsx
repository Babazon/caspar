import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFizzBuzz } from '../hooks/useFizzBuzz';

export const Input: React.FC = () => {
  const { value, displayValue, onChange } = useFizzBuzz();

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChange} style={styles.input} placeholder="" />
      <Text>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  input: { width: 100, height: 40, backgroundColor: 'whitesmoke' },
});
