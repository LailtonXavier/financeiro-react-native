import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerInputs: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 14,
    marginRight: 14,
  },
  contentInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 14,
    marginRight: 14,
  },
  textInput: {
    color: '#2ecc71',
    paddingLeft: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 100,
  },
  buttonSun: {
    backgroundColor: '#8000ff',
  },
  result: {
    textAlign: 'center',
   fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  }

})
