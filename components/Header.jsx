import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Header = ({ title, buttonTitle, handleClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Button title={buttonTitle} color="#d07b97" onPress={handleClick} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 3,

    backgroundColor: '#fff0f5',

    marginHorizontal: 5,
    marginBottom: 3,
    marginTop: 6,

    padding: 5,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#181917',
    textAlign: 'center',
  },
})

export default Header
