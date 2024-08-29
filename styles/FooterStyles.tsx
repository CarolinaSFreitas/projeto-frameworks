import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', //icones em linha horizontal
    justifyContent: 'space-around', //distribuicao dos icones no nav bottom
    alignItems: 'center', //centralização dos icones verticalmente
    paddingVertical: 10, //espaço vertical
    backgroundColor: '#f8f8f8', //cor de fundo do nav bottom
    borderTopWidth: 1, //borda superior
    borderTopColor: '#ddd', //cor da borda superior
  },
  iconContainer: {
    alignItems: 'center', //centralizando os icones horizontalmente
  },
  icon: {
    marginHorizontal: 10, //espaçamento horizontal dos icones
  }
});

export default styles;
