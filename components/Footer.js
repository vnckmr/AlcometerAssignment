import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/style';

export default function Footer() {
    return (
        <View>
            <Text style={styles.footer}>
                Author: Vivien Eckmaier
            </Text>
        </View>
    )
}