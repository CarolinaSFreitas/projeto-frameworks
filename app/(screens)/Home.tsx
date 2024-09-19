import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/HomeStyles';
import Wave from '../(components)/Wave';
import DepoimentosData from '../(data)/TestemonialData'; 

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Wave customStyles={styles.svgCurve} />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText2}>Bem-vindo(a) ao</Text>
        <Text style={styles.headerText}>Florence Care</Text>
        <Text style={styles.subText}>Conecte-se com profissionais de saúde no conforto da sua casa</Text>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle2}>Como Funciona</Text>
        <Text style={styles.sectionDescription}>
          Busque, selecione e contate o profissional ideal para ajudar você com a sua saúde.
        </Text>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorias de Profissionais</Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <Text>🩺</Text>
            <Text style={styles.iconText}>Enfermagem</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>🍏</Text>
            <Text style={styles.iconText}>Nutrição</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>🧠</Text>
            <Text style={styles.iconText}>Psicologia</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>👂</Text>
            <Text style={styles.iconText}>Fonoaudiologia</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profissionais' as never)} // Navegação para a tela NursesList
        >
          <Text style={styles.buttonText}>Ver Profissionais</Text>
        </TouchableOpacity>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dicas de Saúde</Text>
        <ScrollView horizontal style={styles.carousel}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Mantenha-se hidratado! Beba pelo menos 2 litros de água por dia.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Pratique atividades físicas regularmente para melhorar sua saúde mental.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Alimente-se de forma balanceada, incluindo frutas e vegetais em todas as refeições.</Text>
          </View>
        </ScrollView>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        <ScrollView horizontal style={styles.carousel}>
          {DepoimentosData.map((item, index) => (
            <View key={index} style={styles.testimonialCard}>
              <Image
                source={{ uri: item.photo }}
                style={styles.userImage}
              />
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userComment}>{item.comment}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {}
      <View style={styles.section}>
        <Text style={styles.supportText}>Dúvidas? Confira nossas FAQs.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fale Conosco</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
