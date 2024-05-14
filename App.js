import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');

  const pressionaNumero = (number) => {
    setDisplay(prev => prev + number);
  };

  const pressionaOperador = (operator) => {
    setDisplay(prev => prev + operator);
  };

  const pressionaIgual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (e) {
      setDisplay("Error");
    }
  };

  const limpaCampo = () => {
    setDisplay('');
  };

  const pressionaPorcentagem = () => {
    ////
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaOperador('*')}>
          <Text>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaOperador('-')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaOperador('+')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => pressionaNumero('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaOperador('.')}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pressionaPorcentagem}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressionaOperador('/')}>
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={limpaCampo}>
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pressionaIgual}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: '#ccc',
  },
});
