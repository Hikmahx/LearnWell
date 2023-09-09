import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Profile/Header'
import tw from '../../lib/tailwind'
import Details from '../../components/Profile/Details'

const Profile = () => {
  return (
    <View style={[tw`bg-white`, {minHeight: '100%'}]}>
      <Header />
      <Details />
    </View>
  )
}

export default Profile