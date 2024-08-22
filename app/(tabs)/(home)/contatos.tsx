import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import contatos, { ModeloContato } from './contatosLista'; 
import styles from '../../../assets/styles/contactStyles';

const ContactCard = ({ contato, onPress }: { contato: ModeloContato, onPress: (contato: ModeloContato) => void }) => (
    <TouchableOpacity
        style={styles.card}
        onPress={() => onPress(contato)}
    >
        <FontAwesome name="user" size={40} color="black" />
        <View style={styles.details}>
            <Text style={styles.title}>{contato.nome}</Text>
            <Text style={styles.text}>{contato.numero}</Text>
        </View>
    </TouchableOpacity>
);

export default function ContactDetailsScreen() {
    const [selectedContact, setSelectedContact] = useState<ModeloContato | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleContactClick = (contato: ModeloContato) => {
        setSelectedContact(contato);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={contatos}
                keyExtractor={(item) => item.numero} 
                renderItem={({ item }) => <ContactCard contato={item} onPress={handleContactClick} />}
                contentContainerStyle={styles.list}
            />

            {/*modal com detalhes do contato*/}
            {selectedContact && (
                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>{selectedContact.nome}</Text>
                            <Text>Telefone: {selectedContact.numero}</Text>

                            <View style={styles.optionsContainer}>
                                <TouchableOpacity style={styles.optionButton}>
                                    <Ionicons name="call" size={24} color="#6a5acd" /> {}
                                    <Text>Ligar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.optionButton}>
                                    <Ionicons name="chatbubble" size={24} color="#6a5acd" /> {}
                                    <Text>Enviar mensagem</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)} 
                                style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}
