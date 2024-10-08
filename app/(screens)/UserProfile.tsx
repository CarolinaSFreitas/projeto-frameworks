import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { atendimentos } from '../(data)/AppointmentData';
import styles from '../../styles/UserStyles';

const UserProfile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const navigation = useNavigation();

  const handleItemPress = (item: any) => {
    setSelectedAppointment(item);
    setModalVisible(true);
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1307241503/photo/beautiful-senior-woman-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=povBZLzdhiaqBNO_HDIhWBxBZ0abitDMbNYYfIar7Lw=' }}
            style={styles.userIcon}
          />
          <Text style={styles.userName}>Maria da Silva</Text>
          <Text style={styles.userGeo}>Pelotas, RS</Text>

        </View>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfile' as never)}
      >
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
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserProfile;
