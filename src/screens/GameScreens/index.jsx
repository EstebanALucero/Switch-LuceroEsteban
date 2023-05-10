import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../../components/Card'
import styles from './styles'

const GameScreens = () => {

    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>La suposicion del oponente es:</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card>
        <View style={styles.buttoContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Menor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Mayor</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  )
}

export default GameScreens