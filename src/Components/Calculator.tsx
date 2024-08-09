import React from 'react';
import { View, Button } from 'react-native';
import styles from '../Themes/AppThemes';

interface CalculatorProps {
  value1: string;
  value2: string;
  onCalculate: (result: string | number) => void;
}

const Calculator = ({ value1, value2, onCalculate }: CalculatorProps) => {
  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        onCalculate(num1 / num2);
      } else {
        onCalculate('Error: No existen las divisiones para cero');
      }
    } else {
      onCalculate('Por favor ingrese numeros validos');
    }
  };

  return (
    <View style={styles.BotonEnviar}>
      <Button title="Calcular" onPress={calculate} />
    </View>
  );
};

export default Calculator;
