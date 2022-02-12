import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
      },
      title: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 16,
      },
      result: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#99D9BC',
        marginBottom: 40,
        marginTop: 30,
      },
      resultGreen: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#BDE4A8',
        marginBottom: 40,
        marginTop: 30,
      },
      resultYellow: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F9DB6D',
        marginBottom: 40,
        marginTop: 30,
      },
      resultRed: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 40,
        marginTop: 30,
      },
      picker: {
        marginLeft: 20,
        marginBottom: 30,
        width: 335,
        borderColor: "#a8a8a8",
      },
      input: {
        borderColor: "#a8a8a8",
        borderWidth: 1,
        marginLeft: 20,
        marginBottom: 30,
        marginRight: 20,
        padding: 10,
        borderRadius: 8,
      },
      button: {
        backgroundColor: '#2D728F',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        padding: 5,
      },
      statusbar: {
        color: '#000'
      },
})