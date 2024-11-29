import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const index = () => {
  const [display, setDisplay] = useState('0');

  const handlePress = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay((preDisplay) => preDisplay + value);
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleCalculations = () => {
    const result = eval(display);

    setDisplay(result.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{display}</Text>
      <View style={styles.rows}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('/')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('*')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('%')}
        >
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('1')}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('2')}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('4')}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('5')}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('6')}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('7')}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('8')}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('9')}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonEqual}
          onPress={handleCalculations}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rows}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handlePress('0')}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handlePress('.')}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 100,

    marginBottom: 10,
  },
  rows: { flexDirection: 'row' },
  buttonText: { fontSize: 50 },
  button: {
    backgroundColor: '#f09a36',
    width: 100,
    height: 100,
    margin: 5,
    flex: 1,
    borderRadius: 10,
    padding: 20,
    bottom: 10,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEqual: {
    backgroundColor: '#f09a36',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    bottom: 10,
  },
  button1: {
    backgroundColor: '#f09a36',
    width: 190,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    bottom: 10,
  },
});

export default index;
