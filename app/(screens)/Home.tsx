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
          source={{ uri: 'https://img.freepik.com/premium-photo/cheerful-positive-pretty-mature-lady-candid-face-portrait-happy-attractive-black-haired-middle-aged-woman-looking-away-with-toothy-smile-laughing-having-fun-facial-close-up_650366-7226.jpg' }}
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
            <Image source={{ uri: 'https://images.yourstory.com/cs/5/803961002d6d11e9aa979329348d4c3e/Take-1602002793875.png?fm=png&auto=format&blur=500' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Como melhorar sua saúde mental</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://scrippsamg.com/wp-content/uploads/2023/02/Immune_Boosting_Foods_5.jpg' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Alimentos que ajudam na imunidade</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/therapy_440305_nyrbrk.jpg' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Cuidados com Idosos com Alzheimer</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://img.freepik.com/free-vector/physiotherapy-rehabilitation-people-flat-icons-collection_1284-15880.jpg' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Como a Fisioterapia Traz Bons Resultados</Text>
          </View>
          <View style={styles.articleCard}>
            <Image source={{ uri: 'https://focus.belfasttelegraph.co.uk/thumbor/j9aTaGxQMYmhwq9RDUuen3QLYg0=/960x640/smart/prod-mh-ireland/c6fed4a4-968b-11ed-873a-0210609a3fe2.JPG' }} style={styles.articleImage} />
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