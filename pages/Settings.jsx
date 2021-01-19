import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'

import Header from '../components/Header'
import SettingsItem from '../components/SettingsItem'
const Settings = ({ handleClick }) => {
  return (
    <View style={{ backgroundColor: '#f8f8f8' }}>
      <Header title="Settings" buttonTitle="Done" handleClick={handleClick} />
      <SettingsItem children={<Text>Dalalau Lama</Text>} />
    </View>
  )
}

export default Settings
