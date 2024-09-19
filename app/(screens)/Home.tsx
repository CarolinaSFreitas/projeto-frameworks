import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/HomeStyles';
import Wave from '../(components)/Banner';
import DepoimentosData from '../(data)/TestemonialData';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Wave customStyles={styles.svgCurve} />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText2}>Bem-vindo(a) ao</Text>
        <Text style={styles.headerText}>Florence Care</Text>
      </View>

      <TouchableOpacity
        style={styles.userPhotoContainer}
        onPress={() => navigation.navigate('Perfil' as never)}
      >
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1307241503/photo/beautiful-senior-woman-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=povBZLzdhiaqBNO_HDIhWBxBZ0abitDMbNYYfIar7Lw=' }} // URL do ícone da foto do usuário
          style={styles.userPhoto}
        />
      </TouchableOpacity>

      { }
      <View style={styles.section}>
        <ImageBackground
          source={{ uri: 'https://img.freepik.com/free-photo/doctor-helping-senior-patient_23-2148962321.jpg' }}
          style={styles.backgroundImage}
        >
          <View style={styles.textContainer}>
            <Text style={styles.sectionDescription}>
              Busque, encontre e contate o profissional ideal para ajudar você com a sua saúde.
            </Text>
          </View>
        </ImageBackground>
      </View>

      { }
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorias de Profissionais</Text>
        <View style={styles.gridContainer}>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>🩺</Text>
            <Text style={styles.iconText}>Enfermagem</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>🍎</Text>
            <Text style={styles.iconText}>Nutrição</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>🧠</Text>
            <Text style={styles.iconText}>Psicologia</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>💪</Text>
            <Text style={styles.iconText}>Fisioterapia</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>🧩</Text>
            <Text style={styles.iconText}>Terapia Ocupacional</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={[styles.iconEmoji, { fontSize: 40 }]}>👵</Text>
            <Text style={styles.iconText}>Cuidador(a) de Idosos</Text>
          </View>

        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profissionais' as never)}
        >
          <Text style={styles.buttonText}>Ver Profissionais</Text>
        </TouchableOpacity>
      </View>

      { }
      <View style={styles.section4}>
        <Text style={styles.sectionTitle}>Artigos Recomendados</Text>
        <ScrollView horizontal style={styles.carousel} showsHorizontalScrollIndicator={false}>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://st2.depositphotos.com/1594308/5996/i/450/depositphotos_59965493-stock-photo-psychiatrist-hands-holding-palm-of.jpg' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Como melhorar sua saúde mental</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Alimentos que ajudam na imunidade</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://media.istockphoto.com/id/1396691293/pt/foto/medical-worker-helping-his-patient-to-move-around-the-apartment.jpg?s=612x612&w=0&k=20&c=3r8hUUfAznNmAJQp_sd55oDuoHhS8H-HfeWawpV_RM8=' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Cuidados com Idosos com Alzheimer</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://media.istockphoto.com/id/1428417112/photo/physiotherapy-doctor-senior-patient-and-leg-surgery-physical-therapy-and-orthopedic-healing.jpg?s=612x612&w=0&k=20&c=NK5v7uZ6xzcZiyPeEh9gfFrcOY7KWh4jMcsAsYSl8kc=' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Como a Fisioterapia Traz Bons Resultados</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://st2.depositphotos.com/1518767/11492/i/450/depositphotos_114923368-stock-photo-therapist-performing-reiki-on-woman.jpg' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Benefícios do Reiki e Redução de Estresse</Text>
          </View>
        </ScrollView>
      </View>

      { }
      <View style={styles.section4}>
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        <ScrollView horizontal style={styles.carousel} showsHorizontalScrollIndicator={false}>
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

      { }
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