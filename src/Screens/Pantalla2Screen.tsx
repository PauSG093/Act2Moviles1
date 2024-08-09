import { Text, View } from 'react-native'
import BodyComponent from '../Components/BodyComponent';
import Titulo from '../Components/Titulo';
import InPut from '../Components/InPut';
import styles from '../Themes/AppThemes';
import Calcular from '../Components/Calculator';
import { useState } from 'react';

const Pantalla2Screen = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState<null | number | string>(null);
    const handleCalculate = (result: string | number) => {
        setResult(result);
    };
    return (
        <View>
            <BodyComponent>
                <Titulo title='FORMULARIO: ' />
                <View style={styles.ContentInput}>
                    <InPut placeholder='Ingrese un numero' onChange={setValue1} />
                    <InPut placeholder='Ingrese un numero' onChange={setValue2} />
                </View>
                <View>
                    <Calcular value1={value1} value2={value2} onCalculate={handleCalculate} />
                    {result !== null && <Text >Resultado: {result}</Text>}
                </View>
                <View></View>
            </BodyComponent>
        </View>
    )
}

export default Pantalla2Screen
