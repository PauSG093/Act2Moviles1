import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from '../Themes/AppThemes'
interface Props{
    placeholder:string,
    onChange: (text: string) => void;
}
const InPut = ({ placeholder,onChange}:Props) => {


  return (
    
        <TextInput
    placeholder= {placeholder}
    keyboardType= 'numeric'
    style={styles.inputText}
    onChangeText={onChange}
    />
    
  )
}

export default InPut
