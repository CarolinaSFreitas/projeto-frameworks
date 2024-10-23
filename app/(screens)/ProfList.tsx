import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import stylesProfessionals from '../../styles/ProfStyles';
import searchBarStyles from '../../styles/SearchStyles'; 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const ProfList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [professionalsData, setProfessionalsData] = useState<any[]>([]);

  //função para buscar os profissionais da API
  const fetchProfessionals = async () => {
    try {
      const response = await fetch('https://animated-memory-7grp4x96v52rjvv-3000.app.github.dev/professionals');
      const data = await response.json();
      setProfessionalsData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  

  useEffect(() => {
    fetchProfessionals();
  }, []);

  const filteredData = professionalsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderProfessionalItem = ({ item }: { item: any }) => (
    <View style={stylesProfessionals.card}>
      <View style={stylesProfessionals.headerContainer}>
        <Image source={{ uri: item.photo }} style={stylesProfessionals.photo} />
        <View style={stylesProfessionals.infoContainer}>
          <Text style={stylesProfessionals.name}>{item.name}</Text>
          <Text style={stylesProfessionals.formation}>{item.formation}</Text>
          {item.specialization && <Text style={stylesProfessionals.specialization}>Especialidade: {item.specialization}</Text>}
        </View>
      </View>
      <Text style={stylesProfessionals.description}>{item.description}</Text>
      <View style={stylesProfessionals.tagsContainer}>
        {item.tags.map((tag: string, index: number) => (
          <View key={index} style={stylesProfessionals.tag}>
            <Text style={stylesProfessionals.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={stylesProfessionals.buttonContainer}>
        <TouchableOpacity style={[stylesProfessionals.button, stylesProfessionals.buttonSaberMais]}>
          <Text style={stylesProfessionals.buttonText}>Saber mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[stylesProfessionals.button, stylesProfessionals.buttonContatar]}>
          <Text style={stylesProfessionals.buttonText}>Contatar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={searchBarStyles.searchBar}>
        <TextInput
          style={searchBarStyles.searchInput}
          placeholder="Buscar profissionais"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <FontAwesome5 name="search" size={20} color="#36c9d1" style={searchBarStyles.searchIcon} />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderProfessionalItem}
        keyExtractor={item => item.id}
        contentContainerStyle={stylesProfessionals.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
});

export default ProfList;