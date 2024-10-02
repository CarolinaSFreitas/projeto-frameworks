import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
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
    const [isTouched, setIsTouched] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); 

    const navigation = useNavigation();

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (isTouched) {
            if (!username || !password) {
                setErrorMessage('Por favor, preencha todos os campos.');
                setIsFormValid(false); 
            } else if (!validateEmail(username)) {
                setErrorMessage('Por favor, insira um e-mail válido.');
                setIsFormValid(false); 
            } else {
                setErrorMessage('');  
                setIsFormValid(true);  
            }
        }
    }, [username, password, isTouched]);

    const handleLogin = () => {
        if (isFormValid) {
            onLogin(true);  
        } else {
            alert('Por favor, preencha corretamente os campos antes de continuar.');  // Alerta simples
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
                        onChangeText={(text) => {
                            setUsername(text);
                            setIsTouched(true);
                        }}
                        style={styles.input}
                        placeholderTextColor={styles.placeholderText.color}
                        inputMode="email"
                        onFocus={() => setIsTouched(true)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Senha:</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            setIsTouched(true);
                        }}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor={styles.placeholderText.color}
                        onFocus={() => setIsTouched(true)}
                    />
                </View>

                {isTouched && errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                <View style={styles.buttonContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.loginButton,
                            { opacity: pressed ? 0.7 : 1 },
                            !isFormValid && { opacity: 0.5 },  
                        ]}
                        onPress={handleLogin}
                        disabled={!isFormValid}  
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