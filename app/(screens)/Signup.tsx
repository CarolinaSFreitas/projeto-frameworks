import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles2 from '../../styles/SignupStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Signup = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const validateEmail = (input: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
            setEmailErrorMessage('Por favor, insira um e-mail válido.');
            setIsEmailValid(false);
        } else {
            setEmailErrorMessage('');
            setIsEmailValid(true);
        }
    };

    const validatePassword = (input: string) => {
        const hasMinimumLength = input.length >= 6;
        const hasNumber = /\d/.test(input);

        if (!hasMinimumLength) {
            setPasswordErrorMessage('A senha deve ter no mínimo 6 caracteres.');
        } else if (!hasNumber) {
            setPasswordErrorMessage('A senha deve conter pelo menos um número.');
        } else {
            setPasswordErrorMessage('');
        }

        setIsPasswordValid(hasMinimumLength && hasNumber);
    };

    return (
        <View style={styles2.container}>
            <TouchableOpacity
                style={styles2.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back" size={24} color="#3EE1EA" />
            </TouchableOpacity>

            <Image source={require('../../assets/images/logo.png')} style={styles2.logo} />

            <Text style={styles2.customFontText}>Crie sua conta</Text>

            <View style={styles2.formContainer}>
                {}
                <View style={styles2.inputContainer}>
                    <Text style={styles2.inputLabel}>E-mail:</Text>
                    <TextInput
                        placeholder="Escolha seu melhor E-mail"
                        style={styles2.input}
                        placeholderTextColor={styles2.placeholderText.color}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            validateEmail(text);
                        }}
                        inputMode="email"
                    />
                    {}
                    {emailErrorMessage ? <Text style={styles2.errorText}>{emailErrorMessage}</Text> : null}
                    </View>

                {}
                <View style={styles2.inputContainer}>
                    <Text style={styles2.inputLabel}>Senha:</Text>
                    <TextInput
                        placeholder="Escolha sua melhor Senha"
                        style={styles2.input}
                        secureTextEntry
                        placeholderTextColor={styles2.placeholderText.color}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            validatePassword(text); 
                        }}
                    />
                    {}
                    {passwordErrorMessage ? <Text style={styles2.errorText}>{passwordErrorMessage}</Text> : null}
                    </View>

                {}
                <View style={styles2.buttonContainer}>
                    <Pressable
                        style={styles2.submitButton}
                        onPress={() => navigation.navigate('Login' as never)}
                        disabled={!isEmailValid || !isPasswordValid} 
                    >
                        <Text style={styles2.buttonText}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles2.socialContainer2}>
                <Text style={styles2.orText}>OU</Text>
                <View style={styles2.socialIcons}>
                    <Pressable style={styles2.iconButton}>
                        <Image source={require('../../assets/images/facebook.png')} style={styles2.icon} />
                    </Pressable>
                    <Pressable style={styles2.iconButton}>
                        <Image source={require('../../assets/images/linkedin.png')} style={styles2.icon} />
                    </Pressable>
                    <Pressable style={styles2.iconButton}>
                        <Image source={require('../../assets/images/gmail.png')} style={styles2.icon} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Signup;