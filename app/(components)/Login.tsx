import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/LoginStyles';

type LoginProps = {
    onLogin: (isLoggedIn: boolean) => void;
};

const Login = ({ onLogin }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setErrorMessage('Por favor, preencha todos os campos.');
        } else {
            setErrorMessage('');
            onLogin(true); //simula login
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.customFontText}>Florence Care</Text>

            <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>E-mail:</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    placeholderTextColor={styles.placeholderText.color}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Senha:</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor={styles.placeholderText.color}
                />
            </View>

            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
};

export default Login;
