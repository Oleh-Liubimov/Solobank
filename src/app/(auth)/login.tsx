import { COLORS } from '@/src/constants/colors';
import { DefaultStyles } from '@/src/styles/DefaultStyles';
import { rem } from '@/src/utils/rem';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={[DefaultStyles.container, { marginTop: rem(140) }]}>
            <Text style={styles.headerText}>Login to proceed</Text>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" />
            </View>
            <Link
                href={'/(auth)/register'}
                replace
                asChild
                style={[DefaultStyles.linkText, { marginTop: rem(20) }]}
            >
                <Text>Not registered yet ? Register</Text>
            </Link>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: rem(30),
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: rem(80),
    },
    input: {
        paddingVertical: rem(10),
        paddingHorizontal: rem(10),
        borderColor: COLORS.border,
        borderWidth: rem(1),
        borderRadius: rem(16),
    },
    inputsContainer: {
        gap: rem(10),
    },
});
