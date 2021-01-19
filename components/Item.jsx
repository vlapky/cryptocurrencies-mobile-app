import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Item = ({
  firstСurrency,
  firstСurrencyValue,
  secondCurrency,
  secondCurrencyValue,
  logo,
}) => {
  return (
    <View style={styles.conteiner}>
      <Image
        source={{
          uri: logo,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text
          style={styles.text}
        >{`${firstСurrency} ${firstСurrencyValue}`}</Text>
        <Text
          style={styles.text}
        >{`${secondCurrency} ${secondCurrencyValue}`}</Text>
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
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#181917',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default Item
