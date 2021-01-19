import React from 'react'
import { StatusBar, SafeAreaView, View, Text } from 'react-native'
import { useState, useEffect } from 'react'

import Main from './pages/Main'
import Settings from './pages/Settings'

export default function App() {
  const [page, changePage] = useState('main')
  const [data, changeData] = useState([])

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
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {page === 'main' && (
        <Main data={data} handleClick={() => changePage('settings')} />
      )}
      {page === 'settings' && (
        <Settings handleClick={() => changePage('main')} />
      )}
      {page === 'error' && (
        <View>
          <Text>Error</Text>
        </View>
      )}
    </SafeAreaView>
  )
}
