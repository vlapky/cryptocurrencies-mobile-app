import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Header = ({ dynamicStyles, title, buttonTitle, handleClick }) => {
  const {
    dynamicBackGround,
    dynamicBorderColor,
    dynamicTextColor,
  } = dynamicStyles
  return (
    <View style={[styles.container, dynamicBackGround, dynamicBorderColor]}>
      <Text style={[styles.text, dynamicTextColor]}>{title}</Text>
      <Button title={buttonTitle} onPress={handleClick} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,

    backgroundColor: '#fff',

    marginHorizontal: 5,
    marginBottom: 3,
    marginTop: 6,

    paddingHorizontal: 10,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    marginRight: 'auto',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#181917',
  },
})

export default Header
