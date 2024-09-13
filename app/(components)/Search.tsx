import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import stylesNurses from '../../styles/ProfStyles';
import nursesData from '../(data)/ProfData';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ProfList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  //filtra os dados com base na pesquisa
  const filteredData = nursesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderNurseItem = ({ item }: { item: any }) => (
    <View style={stylesNurses.card}>
      <View style={stylesNurses.headerContainer}>
        <Image source={{ uri: item.photo }} style={stylesNurses.photo} />
        <View style={stylesNurses.infoContainer}>
          <Text style={stylesNurses.name}>{item.name}</Text>
          <Text style={stylesNurses.formation}>{item.formation}</Text>
          {item.specialization && <Text style={stylesNurses.specialization}>Especialidade: {item.specialization}</Text>}
        </View>
      </View>
      <Text style={stylesNurses.description}>{item.description}</Text>
      <View style={stylesNurses.tagsContainer}>
        {item.tags.map((tag: string, index: number) => (
          <View key={index} style={stylesNurses.tag}>
            <Text style={stylesNurses.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={stylesNurses.buttonContainer}>
        <TouchableOpacity style={[stylesNurses.button, stylesNurses.buttonSaberMais]}>
          <Text style={stylesNurses.buttonText}>Saber mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[stylesNurses.button, stylesNurses.buttonContatar]}>
          <Text style={stylesNurses.buttonText}>Contatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar profissionais"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" 
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <FontAwesome5 name="search" size={20} color="#36c9d1" style={styles.searchIcon} />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderNurseItem}
        keyExtractor={item => item.id}
        contentContainerStyle={stylesNurses.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default ProfList;
