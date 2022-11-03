import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

const Inputs = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [sun, setSun] = useState(0);

  const handleSun = () => {
    console.log('numero 1', n1)
    console.log('numero 2', n2)
    return setSun(Number(n1) + Number(n2));
  }
  
  return (
    <View style={styles.containerInputs}>
      <View style={styles.contentInputs}>
        <TextInput 
          style={styles.textInput}
          placeholder='digite numero'
          keyboardType='numeric'
          onChangeText={(value) => setN1(value)}
          defaultValue={n1}
          />

        <TextInput 
          style={styles.textInput}
          placeholder='digite numero'
          keyboardType='numeric'
          onChangeText={(value) => setN2(value)}
          defaultValue={setN2}
          />
      </View>

       <Button
       style={styles.buttonSun}
       title="Calcular"
       onPress={() => handleSun()}
       />
      <Text style={styles.result}>{sun}</Text>
    </View>
  )
}
export default Inputs;