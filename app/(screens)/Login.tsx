import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import styles from '../../styles/LoginStyles';
import styles2 from '../../styles/SignupStyles';
import { useNavigation } from '@react-navigation/native';

type LoginProps = {
    onLogin: (isLoggedIn: boolean) => void;
};

const Login = ({ onLogin }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username || !password) {
            setErrorMessage('Por favor, preencha todos os campos.');
        } else if (!emailRegex.test(username)) {
            setErrorMessage('Por favor, insira um e-mail válido.');
        } else {
            setErrorMessage('');
            onLogin(true);
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
                        inputMode="email"
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
                    <Pressable 
                        style={({ pressed }) => [
                            styles.loginButton,
                            { opacity: pressed ? 0.7 : 1 }
                        ]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                </View>

                <View style={styles.socialContainer}>
                    <Text style={styles.orText}>OU</Text>
                    <View style={styles.socialIcons}>
                        <Pressable style={styles.iconButton}>
                            <Image source={require('../../assets/images/facebook.png')} style={styles.icon} />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <Image source={require('../../assets/images/linkedin.png')} style={styles.icon} />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <Image source={require('../../assets/images/gmail.png')} style={styles.icon} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable 
                        style={({ pressed }) => [
                            styles2.submitButton,
                            { opacity: pressed ? 0.7 : 1 }
                        ]}
                        onPress={() => navigation.navigate('Signup' as never)}
                    >
                        <Text style={styles.buttonSignup}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Login;
