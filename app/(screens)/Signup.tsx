import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles2 from '../../styles/SignupStyles';

const Signup = () => {
    const navigation = useNavigation();

    return (
        <View style={styles2.container}>
            {/* Botão de voltar */}
            <Pressable 
                // style={styles2.backButton} 
                // onPress={() => navigation.navigate('Login' as never)}
            >
                <FontAwesome name="arrow-left" size={24} color="black" />
            </Pressable>

            <Image source={require('../../assets/images/logo.png')} style={styles2.logo} />

            <Text style={styles2.customFontText}>Crie sua conta</Text>

            <View style={styles2.formContainer}>
                <View style={styles2.inputContainer}>
                    <Text style={styles2.inputLabel}>E-mail:</Text>
                    <TextInput
                        placeholder="Escolha seu melhor E-mail"
                        style={styles2.input}
                        placeholderTextColor={styles2.placeholderText.color}
                        inputMode="email"
                    />
                </View>

                <View style={styles2.inputContainer}>
                    <Text style={styles2.inputLabel}>Senha:</Text>
                    <TextInput
                        placeholder="Escolha sua melhor Senha"
                        style={styles2.input}
                        secureTextEntry
                        placeholderTextColor={styles2.placeholderText.color}
                    />
                </View>
                
                <View style={styles2.buttonContainer}>
                    <Pressable 
                        style={styles2.submitButton}
                        onPress={() => navigation.navigate('Login' as never)}
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
