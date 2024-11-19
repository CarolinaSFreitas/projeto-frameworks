import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Modal, TextInput } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atendimentos } from '../(data)/AppointmentData';
import styles from '../../styles/UserStyles';

const UserProfile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [confirmLogoutVisible, setConfirmLogoutVisible] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [userName, setUserName] = useState('Maria da Silva');
  const [userCity, setUserCity] = useState('Pelotas, RS');
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem('userName');
        const storedUserCity = await AsyncStorage.getItem('userCity');
        if (storedUserName) {
          setUserName(storedUserName);
        }
        if (storedUserCity) {
          setUserCity(storedUserCity);
        }
      } catch (error) {
        console.error('Erro ao carregar o perfil', error);
      }
    };

    loadUserProfile();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userEmail');
    await AsyncStorage.removeItem('userPassword');
    setConfirmLogoutVisible(false);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };

  const handleItemPress = (item: any) => {
    setSelectedAppointment(item);
    setModalVisible(true);
  };

  const handleSaveProfile = async () => {
    try {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('userCity', userCity);
    } catch (error) {
      console.error('Erro ao salvar o perfil', error);
    }
    setEditProfileVisible(false);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.attendanceItem}>
      <Text style={styles.attendanceDate}>{item.data}</Text>
      <Text style={styles.attendanceProfessional}>{item.profissional} ({item.tipo})</Text>
      <Text style={styles.attendanceSubject}>{item.assunto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.banner}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-photo/cheerful-positive-pretty-mature-lady-candid-face-portrait-happy-attractive-black-haired-middle-aged-woman-looking-away-with-toothy-smile-laughing-having-fun-facial-close-up_650366-7226.jpg',
            }}
            style={styles.userIcon}
          />
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userGeo}>{userCity}</Text>

          <TouchableOpacity onPress={() => setConfirmLogoutVisible(true)} style={styles.logoutButton}>
            <Icon name="logout" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => setEditProfileVisible(true)}>
        <Icon name="edit" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.attendanceContainer}>
        <Text style={styles.attendanceTitle}>Histórico de Atendimentos</Text>
        <FlatList
          data={atendimentos}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes do Atendimento</Text>
            {selectedAppointment && (
              <>
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalLabel}>Data: </Text>
                  <Text style={styles.modalValue}>{selectedAppointment.data}</Text>
                </View>
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalLabel}>Profissional: </Text>
                  <Text style={styles.modalValue}>{selectedAppointment.profissional} ({selectedAppointment.tipo})</Text>
                </View>
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalLabel}>Assunto: </Text>
                  <Text style={styles.modalValue}>{selectedAppointment.assunto}</Text>
                </View>
                <View style={styles.modalTextContainer}>
                  <Text style={styles.modalLabel}>Anotações do Profissional:</Text>
                  <Text style={styles.modalValueBelow}>{selectedAppointment.anotacoes}</Text>
                </View>
              </>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={confirmLogoutVisible}
        onRequestClose={() => setConfirmLogoutVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deseja realmente sair?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setConfirmLogoutVisible(false)}>
                <Text style={styles.closeButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={handleLogout}>
                <Text style={styles.closeButtonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={editProfileVisible}
        onRequestClose={() => setEditProfileVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalLabel}>Nome: </Text>
              <TextInput style={styles.modalInput} value={userName} onChangeText={setUserName} />
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalLabel}>Cidade: </Text>
              <TextInput style={styles.modalInput} value={userCity} onChangeText={setUserCity} />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setEditProfileVisible(false)}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserProfile;