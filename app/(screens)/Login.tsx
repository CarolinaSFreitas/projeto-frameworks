import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/LoginStyles';
import styles2 from '../../styles/SignupStyles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../(types)/types';
import { useToast } from 'react-native-toast-notifications'; // Importando o hook de toast

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = ({ onLogin }: LoginProps) => {
    const navigation = useNavigation<LoginNavigationProp>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); 
    const toast = useToast(); // Inicializando o hook de toast

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        const checkLogin = async () => {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if (storedEmail) {
                onLogin(true); 
                navigation.navigate('Home');  
            }
        };

        checkLogin();
    }, []);

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

    const handleLogin = async () => {
        if (isFormValid) {
            try {
                const storedEmail = await AsyncStorage.getItem('userEmail');
                const storedPassword = await AsyncStorage.getItem('userPassword');
    
                if (!storedEmail) {
                    setErrorMessage('Usuário não existe ou senha incorreta.');
                } else if (storedEmail === username && storedPassword === password) {
                    toast.show('Login realizado com sucesso!', {
                        type: 'success',
                        duration: 1000,
                        placement: 'top',
                    });
                    onLogin(true);
                    navigation.navigate('Home');
                } else {
                    setErrorMessage('E-mail ou senha incorretos.');
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        } else {
            toast.show('Por favor, preencha corretamente os campos antes de continuar.', {
                type: 'warning',
                duration: 4000,
                placement: 'top',
            });
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
