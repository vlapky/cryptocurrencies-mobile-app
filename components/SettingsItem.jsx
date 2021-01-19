import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SettingsItem = ({ children }) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 3,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    backgroundColor: '#fff0f5',

    marginHorizontal: 5,
    marginVertical: 3,

    padding: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: '#181917',
  },
})

export default SettingsItem
