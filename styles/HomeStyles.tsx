import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerContainer: {
        marginTop: 10,
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

    //estilos para as novas seções
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
        marginTop: -25,
    },
    sectionTitle2: {
        fontSize: 22,
        fontFamily: 'poppins-medium',
        color: '#212121',
        marginBottom: 10,
        marginTop: -10,
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
        borderRadius: 10,
      },
      textContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor de fundo semi-transparente para o texto
        padding: 15,
        borderRadius: 10,
      },

    //estilo p ícones de categorias
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite quebrar linha
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
        borderRadius: 10,  // bordas arredondadas
        width: '30%',      // tamanho do card para ocupar 3 em cada linha
        aspectRatio: 1,    // manter o card quadrado
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,  // sombra no Android
      },

    //estilo do botão
    button: {
        marginTop: 20,
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

    //carrossel de dicas e depoimentos
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

    //cards de depoimentos
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
        elevation: 3,  // sombra no Android
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

    //seção de suporte
    supportText: {
        fontSize: 16,
        fontFamily: 'poppins-regular',
        color: '#C98EE7',
        marginTop: 30,
        textAlign: 'center',
    },
});

export default styles;
