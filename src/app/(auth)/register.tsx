import { DefaultStyles } from '@/src/styles/DefaultStyles';
import { rem } from '@/src/utils/rem';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RegisterScreen = () => {
    return (
        <View style={DefaultStyles.container}>
            <Text style={styles.headerText}>Register in out super-duper banking app</Text>
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: rem(30),
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: rem(80),
    },
});
