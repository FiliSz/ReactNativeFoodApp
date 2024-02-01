import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({data}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{data}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer:{
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
    },
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',

    }
})