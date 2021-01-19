import React from 'react'
import { ScrollView } from 'react-native'
import Item from '../components/Item'
import Header from '../components/Header'

const Main = ({ data, handleClick }) => {
  return (
    <ScrollView style={{ backgroundColor: '#badbad' }}>
      <Header
        title="Cryptocurrencies"
        buttonTitle="Settings"
        handleClick={handleClick}
      />
      {data.map(({ id, rank, symbol, priceUsd }) => {
        let logoLink = `https://cryptologos.cc/logos/${id}-${symbol.toLowerCase()}-logo.png?v=009`

        switch (id) {
          case 'polkadot':
            logoLink = `https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=009`
            break
          case 'terra-luna':
            logoLink = `https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png`
            break
          case 'horizen':
            logoLink = `https://s2.coinmarketcap.com/static/img/coins/64x64/1698.png`
            break
          case 'paxos-standard-token':
            logoLink = `https://s2.coinmarketcap.com/static/img/coins/64x64/3330.png`
            break
          case 'nxm':
            logoLink = `https://s2.coinmarketcap.com/static/img/coins/64x64/5830.png`
            break
        }
        return (
          <Item
            key={rank}
            logo={logoLink}
            firstСurrency={symbol}
            firstСurrencyValue="1"
            secondCurrency="USD"
            secondCurrencyValue={Number(priceUsd).toFixed(2)}
          />
        )
      })}
    </ScrollView>
  )
}

export default Main
