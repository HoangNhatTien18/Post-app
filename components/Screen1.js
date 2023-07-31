import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Screen1 = () => {
  const capture = async () => {
    const result = await launchCamera();
    
  }
  return (
    <View style={styles.container}>
      <Button title='abc' onPress={capture}/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
})