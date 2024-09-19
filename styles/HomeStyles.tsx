import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        position: 'relative',
    },
    userPhotoContainer: {
        position: 'absolute',
        top: 25,
        right: 18,
        width: 70,
        height: 70,
        borderRadius: 50,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    userPhoto: {
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        marginTop: 20,
        left: 15,
        marginHorizontal: 10
    },
    headerText: {
        fontSize: 24,
        fontFamily: 'poppins-bold',
        color: '#fff',
        textAlign: 'left',
        marginTop: 10
    },
    headerText2: {
        fontSize: 21,
        fontFamily: 'poppins-medium',
        color: '#fff',
        textAlign: 'left',
        marginTop: 10
    },
    subText: {
        fontSize: 15,
        fontFamily: 'poppins-light',
        color: '#fff',
        textAlign: 'left',
        marginTop: 8
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },

    section: {
        padding: 20,
        marginBottom: 10,
        marginTop: 25
    },
    section4: {
        padding: 20,
        marginBottom: -55,
        marginTop: 25
    },
    sectionTitle: {
        fontSize: 22,
        fontFamily: 'poppins-medium',
        color: '#212121',
        marginBottom: -6,
        marginTop: -65,
    },
    sectionTitle2: {
        fontSize: 22,
        fontFamily: 'poppins-medium',
        color: '#212121',
        marginBottom: 10,
        marginTop: -5,
    },
    sectionTitle3: {
        fontSize: 22,
        fontFamily: 'poppins-medium',
        color: '#212121',
        marginBottom: 5,
        marginTop: 10,
    },

    sectionDescription: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'poppins-light',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    textContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: 15,
        width: '100%',
        borderRadius: 10,
    },

    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
        marginTop: 20,
    },

    iconText: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
        fontFamily: 'poppins-regular',
        textAlign: 'center',
    },
    iconContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,  
        width: '30%',     
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },

    button: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#36c9d1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'poppins-medium',
    },
    carousel: {
        marginTop: 10,
        height: 290,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        textAlign: 'center',
        overflow: 'hidden',
        width: 250,
        height: 150,
    },
    cardText: {
        fontSize: 14,
        color: '#333',
    },
    articleCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        width: 250,
        height: 220,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        overflow: 'hidden',
    },
    articleImage: {
        width: 220,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    articleTitle: {
        fontSize: 16,
        fontFamily: 'poppins-medium',
        color: '#333',
        textAlign: 'center',
    },
    testimonialCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        width: 250,
        height: 280,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3, 
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },

    userName: {
        fontSize: 16,
        fontFamily: 'poppins-medium',
        color: '#333',
    },
    userComment: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    supportText: {
        fontSize: 16,
        fontFamily: 'poppins-regular',
        color: '#C98EE7',
        marginTop: 30,
        textAlign: 'center',
    },
});

export default styles;
