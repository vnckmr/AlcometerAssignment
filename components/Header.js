import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>
                Alcometer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        marginBottom: 40,
        marginTop: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#2D728F',
      },
})