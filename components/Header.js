import React from 'react';
import { Text, View} from 'react-native';
import styles from '../style/style';

export default function Header() {
    return (
        <View>
            <Text style={styles.header}>
                Alcometer
            </Text>
        </View>
    )
}