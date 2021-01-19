import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import Header from '../components/Header'

const Settings = ({
  theme,
  changeTheme,
  currency,
  changeCurrency,
  handleClick,
  dynamicStyles,
}) => {
  const {
    dynamicBackGround,
    dynamicBorderColor,
    dynamicTextColor,
  } = dynamicStyles
  return (
    <View style={[dynamicBackGround, { minHeight: '100%' }]}>
      <Header
        dynamicStyles={dynamicStyles}
        title="Settings"
        buttonTitle="Done"
        handleClick={handleClick}
      />
      <View style={[styles.conteiner, dynamicBackGround, dynamicBorderColor]}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, dynamicTextColor]}>Select currency:</Text>
          <View style={styles.butons}>
            <Button
              title="USD"
              color={currency === 'USD' && '#ff00ff'}
              onPress={() => changeCurrency('USD')}
            />
            <Button
              title="EUR"
              color={currency === 'EUR' && '#ff00ff'}
              onPress={() => changeCurrency('EUR')}
            />
            <Button
              title="RUB"
              color={currency === 'RUB' && '#ff00ff'}
              onPress={() => changeCurrency('RUB')}
            />
            <Button
              title="CNY"
              color={currency === 'CNY' && '#ff00ff'}
              onPress={() => changeCurrency('CNY')}
            />
          </View>
        </View>
      </View>
      <View style={[styles.conteiner, dynamicBackGround, dynamicBorderColor]}>
        <View style={styles.textContainer}>
          <Text style={[styles.warningText, dynamicTextColor]}>
            WARNING: All calculations are made on a dollar basis!
          </Text>
        </View>
      </View>
      <View style={[styles.conteiner, dynamicBackGround, dynamicBorderColor]}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, dynamicTextColor]}>Select theme:</Text>
          <View style={styles.butons}>
            <Button
              title="Light"
              color={theme === 'light' && '#ff00ff'}
              onPress={() => changeTheme('light')}
            />
            <Button
              title="Dark"
              color={theme === 'dark' && '#ff00ff'}
              onPress={() => changeTheme('dark')}
            />
          </View>
        </View>
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

    backgroundColor: '#fff',

    marginHorizontal: 5,
    marginVertical: 3,

    padding: 5,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
  warningText: {
    fontWeight: '600',
    fontSize: 22,
  },
  butons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 5,
  },
})

export default Settings
