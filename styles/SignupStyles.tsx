import { StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
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
        marginTop: -80,
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
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        borderRadius: 8,
    },
    submitButton: {
        backgroundColor: '#C98EE7', 
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        color: '#fff',
        top: 20,
      },
    buttonText: {
        color: '#fff',
        fontFamily: 'poppins-medium',
        fontSize: 16,
    },
    customFontText: {
        fontFamily: 'poppins-bold',
        fontSize: 28,
        color: '#3EE1EA',
        shadowColor: '#000',
        marginTop: -45,
        marginBottom: 150,
    },
    placeholderText: {
        fontSize: 14,
        fontFamily: 'poppins-extra-light',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    socialContainer2: {
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 40,
    },
    orText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 10,
        fontFamily: 'poppins-medium',
    },
    errorText: {
        color: 'red',
        fontFamily: 'poppins-light',
        fontSize: 14,
        marginTop: 5,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width: '100%',
        marginTop: 40,

    },
    iconButton: {
        marginHorizontal: 25,
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default styles2;
