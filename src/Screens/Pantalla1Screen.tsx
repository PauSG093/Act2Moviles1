import React from 'react'
import { Button, Text, View } from 'react-native'
import StackNavegator from '../Navegator/StackNavegator'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { CommonActions, useNavigation } from '@react-navigation/native'
import styles from '../Themes/AppThemes'
import { Image } from 'react-native';


const Pantalla1Screen = () => {
    const navigation = useNavigation();
    return (

        <View>npx react-native start --reset-cache

            <Text style={styles.title}>¡ Bienvenidos !</Text>
            <View style={styles.primerboton}>
                <Button
                    title='Comenzar'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}
                />
                <Image
                source={require('../../assets/apli.jpg')}
                style={styles.imagen}
                resizeMode='center'
            />
            </View>
        </View>
    )
}

export default Pantalla1Screen
