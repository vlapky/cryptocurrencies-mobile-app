import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Item = ({
  firstСurrency,
  firstСurrencyValue,
  secondCurrency,
  secondCurrencyValue,
  logo,
  dynamicStyles,
}) => {
  const {
    dynamicBackGround,
    dynamicBorderColor,
    dynamicTextColor,
  } = dynamicStyles
  return (
    <View style={[styles.conteiner, dynamicBackGround, dynamicBorderColor]}>
      <Image
        backgroundColor={
          dynamicBackGround.backgroundColor === '#000' && '#4e4e4e'
        }
        borderRadius={dynamicBackGround.backgroundColor === '#000' && '50%'}
        source={{
          uri: logo,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, dynamicTextColor]}
        >{`${firstСurrency} ${firstСurrencyValue}`}</Text>
        <Text
          style={[styles.text, dynamicTextColor]}
        >{`${secondCurrency} ${secondCurrencyValue}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    borderColor: '#292929',
    borderStyle: 'solid',
    borderWidth: 1.5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: '#fff',

    marginHorizontal: 5,
    marginVertical: 3,

    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: '#181917',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default Item
