import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
    return data.map((listData)=> (
            <View key={listData} style={styles.listContainer}>
                <Text style={styles.listText}>{listData}</Text>
            </View>
        ))

}

export default List

const styles = StyleSheet.create({
    listContainer:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    listText:{
        color: '#351401',
        textAlign:'center',
    }
})