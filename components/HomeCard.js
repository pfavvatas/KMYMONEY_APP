import { Text, View, Image } from 'react-native'
import React from 'react'
import { HomeCardStyle as styles } from './../styles'
import tw from 'twrnc'

const HomeCard = ({...props}) => {

    const { key, data } = props

    const {
      children, title
    } = data

    return (
        <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {children()}
         </View>
      </View>
    )
}

export default HomeCard