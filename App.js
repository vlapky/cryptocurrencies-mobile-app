import React from 'react'
import { StatusBar, SafeAreaView, View, Text } from 'react-native'
import { useState, useEffect } from 'react'

import Main from './pages/Main'
import Settings from './pages/Settings'

export default function App() {
  const [page, changePage] = useState('main')
  const [data, changeData] = useState([])
  const [currency, changeCurrency] = useState('USD')
  const [theme, changeTheme] = useState('light')

  useEffect(
    () => {
      fetch('https://api.coincap.io/v2/assets')
        .then((res) => res.json())
        .then((result) => {
          changeData(result.data)
        })
    },
    (error) => {
      changePage('error')
    }
  )

  const dynamicStyles = {
    dynamicBackGround: {
      backgroundColor: theme === 'light' ? '#fff' : '#000',
    },
    dynamicBorderColor: {
      borderColor: theme === 'light' ? '#000' : '#fff',
    },
    dynamicTextColor: {
      color: theme === 'light' ? '#181917' : '#fff',
    },
  }

  return (
    <SafeAreaView>
      <StatusBar translucent barStyle="dark-content" />

      {page === 'main' && (
        <Main
          dynamicStyles={dynamicStyles}
          currency={currency}
          data={data}
          handleClick={() => changePage('settings')}
        />
      )}
      {page === 'settings' && (
        <Settings
          dynamicStyles={dynamicStyles}
          theme={theme}
          changeTheme={changeTheme}
          currency={currency}
          changeCurrency={changeCurrency}
          handleClick={() => changePage('main')}
        />
      )}
      {page === 'error' && (
        <View>
          <Text>ERROR: Data download error!</Text>
        </View>
      )}
    </SafeAreaView>
  )
}
