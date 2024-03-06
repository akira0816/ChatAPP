import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang === true ? '!' : ''}
      </Text>
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
