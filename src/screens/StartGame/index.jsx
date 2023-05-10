import { View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import React, { useState } from 'react'
import styles from './styles'
import Card from '../../components/Card'
import Input from '../../components/Input'

const StartGame = ({ onStartGame }) => {

    const [value, setValue] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [numero, setNumero] = useState("");

    const handleInput = text => {
        setValue(text.replace(/[^0-9]/g, ""))
    };
    const handleResetInput = () => {
        setValue("");
        setConfirm(false);
    };
    const handleConfirmation = () => {
        const newValue = parseInt(value);
        if (isNaN(newValue) || newValue <=0 || newValue > 99) return;
        setConfirm(true)
        setNumero(newValue)
        setValue("")
    }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Card>
                    <Text style={styles.textColor}>Elije el numero</Text>
                    <Input 
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="Selec. Numero"
                        value={value}
                        onChangeText={handleInput}
                    />
                    <View style={styles.buttoContainer}>
                        <TouchableOpacity style={styles.cleanButton} onPress={handleResetInput}>
                            <Text style={styles.textButton}>Borrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
                            <Text style={styles.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {confirm &&(
                    <Card>
                        <Text style={styles.textColor}>Tu numero es:</Text>
                        <Text style={styles.textColor}>{numero}</Text>
                        <View>
                            <TouchableOpacity style={styles.confirmButton} onPress={() => onStartGame(numero)}>
                                <Text style={styles.textButton}>Empezar</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default StartGame