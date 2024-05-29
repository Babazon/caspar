import { StyleSheet, Text, View } from 'react-native';
import { Input } from './components/Input';

export const App = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

/*
Fizzbuzz

display an input field (that's validated)
onchange handler for validation and running the function
function to determine fixx or buzz
local state to keep it fizz or buzz
display the fizz or buzz

component that displays the input field
compnent that displasy the result
parent coponent with state of fizz or buzz, error state (o number)
useEffect to decide fi orr buzz (and set state)

*/
