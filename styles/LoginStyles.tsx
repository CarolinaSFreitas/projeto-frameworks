import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#f5f5f5',
    },
    logo: {
        width: 300,
        height: 300,
        marginTop: -50,
        marginBottom: 10,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    formContainer: {
        width: '100%',
        marginTop: -110,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        fontSize: 13,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    inputLabel: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
        fontFamily: 'poppins-medium',
    },
    buttonSignup: {
        fontFamily: 'poppins-medium',
        color: '#fff',
        fontSize: 16,
    },

    buttonContainer: {
        width: '100%',
        marginTop: 20,
        borderRadius: 8,
    },
    loginButton: {
        backgroundColor: '#36c9d1',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'poppins-medium',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
        fontFamily: 'poppins-light',
        textAlign: 'center',
    },
    customFontText: {
        fontFamily: 'poppins-bold',
        fontSize: 28,
        color: '#36c9d1',
        shadowColor: '#000',
        marginTop: -40,
        marginBottom: 150,
    },
    placeholderText: {
        fontSize: 14,
        fontFamily: 'poppins-extra-light',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    socialContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    orText: {
        fontSize: 16,
        color: '#333',
        marginTop: 20,
        marginBottom: 40,
        fontFamily: 'poppins-medium',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    iconButton: {
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default styles;
