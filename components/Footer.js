import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

export default function Footer() {
    return (
        <View>
            <Text style={styles.author}>
                Author: Vivien Eckmaier
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    author: {
        fontSize: 12,
        marginTop: 30,
        alignSelf: 'center',
        fontWeight: '200',
        color: '#444',
      },
})