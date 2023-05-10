import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import GameScreens from './src/screens/GameScreens';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import colors from './src/Constants/colors';

export default function App() {

  const [loaded] = useFonts({
    "BebasNeue": require('./src/assets/fonts/BebasNeue-Regular.ttf')
  })

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGame onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreens />
  }
  if(!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={styles.headerTitle}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: colors.quinario,
    fontSize: 22,
    fontFamily: "BebasNeue",
  }
});
