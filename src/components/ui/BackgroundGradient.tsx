import { COLORS } from '@/src/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export const BackgroundGradient = () => {
    const { height, width } = Dimensions.get('screen');
    return (
        <View style={[styles.container]}>
            <LinearGradient
                colors={[COLORS.darkBlue, COLORS.black]}
                style={{ height, width, position: 'absolute' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
