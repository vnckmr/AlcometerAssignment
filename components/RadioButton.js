import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

/**
 * @param genders
 * @param onPress
 */
    
export default function RadioButton({genders, onPress}) {
  const [value, setValue] = useState('male');

  /**
   * @param selected
   */

  function handlePress(selected) {
    setValue(selected);
    onPress(selected);
  }

  return(
    <>
      {genders.map((item) => (
        <View key={item.value} style={styles.radioButtonContainer}>
          <Text style={styles.label}>{item.label}</Text>
          <Pressable style={styles.radioButton} onPress={() => handlePress(item.value)}>
            {value === item.value && <View style={styles.radioButtonIcon}/>}
          </Pressable>
        </View>
      ))}
    </>
  )
}


const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        marginLeft: 20,
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
})