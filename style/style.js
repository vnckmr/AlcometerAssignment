import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
      },

      //header
      header: {
        fontSize: 35,
        marginBottom: 40,
        marginTop: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#2D728F',
      },

      //
      title: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 16,
      },

      //result
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

      //bottle dropdownpicker 
      picker: {
        alignSelf: 'center',
        marginBottom: 30,
        width: 335,
        borderColor: "#a8a8a8",
      },

      //weight input
      input: {
        borderColor: "#a8a8a8",
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: 30,
        padding: 10,
        borderRadius: 8,
        width: 335,
      },

      //calculate button
      button: {
        backgroundColor: '#2D728F',
        borderRadius: 8,
        padding: 5,
        alignSelf: 'center',
        width: 335,
      },

      //RadioButton
      radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        marginLeft: 21,
        justifyContent: 'space-between',
        marginRight: 20,
      },
      radioButton: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioButtonIcon: {
        height: 15,
        width: 15,
        borderRadius: 100,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
      },
      label: {
        fontSize: 14,
      },
      text: {
        lineHeight: 30,
        fontSize: 20,
        marginVertical: 5,
        
      },

      //footer
      footer: {
        fontSize: 12,
        marginTop: 30,
        alignSelf: 'center',
        fontWeight: '200',
        color: '#444',
      },
})