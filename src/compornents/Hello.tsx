import { View, Text, StyleSheet } from 'react-native'

const Hello = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 16
  },
  container: {
    // flex: 1
  }
})

export default Hello
