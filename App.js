import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import calculator, { initialState } from './utils/calculator';
import Row from './components/Row';
import Button from './components/Button';

export default function App() {
  const [state, setState] = useState(initialState);

  const handleClick = (type, value) => {
    setState((state) => calculator(type, value, state));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>

        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleClick('clear')}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleClick('pos-neg')}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleClick('percent')}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleClick('operator', '/')}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleClick('number', 7)} />
          <Button text="8" onPress={() => handleClick('number', 8)} />
          <Button text="9" onPress={() => handleClick('number', 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => handleClick('operator', 'X')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleClick('number', 4)} />
          <Button text="5" onPress={() => handleClick('number', 5)} />
          <Button text="6" onPress={() => handleClick('number', 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleClick('operator', '-')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleClick('number', 1)} />
          <Button text="2" onPress={() => handleClick('number', 2)} />
          <Button text="3" onPress={() => handleClick('number', 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleClick('operator', '+')}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => handleClick('number', 0)} />
          <Button text="." onPress={() => handleClick('number', '.')} />
          <Button
            text="="
            theme="primary"
            onPress={() => handleClick('equal', '=')}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    flex: 1,
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 42,
    marginBottom: 10,
    marginRight: 20,
    textAlign: 'right',
  },
});
