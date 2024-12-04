import React from "react";
import  {  useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';


import { PokeContext } from '../../context';

const Mypokedex = () => {
   
    const { 
        pokemon,
        loading,
        error,
        pokemonId,
        pokebola,
        novopoke,
        afterpoke,
        capture,
        deleted
    } = useContext(PokeContext)
    return (
        
        <ScrollView>
  <View style={styles.pokebolaContainer}>
    <Text style={styles.pokebolaTitle}>Pokémons Capturados:</Text>
    {pokebola.length > 0 ? (
      <View style={styles.pokebolaList}>
        {pokebola.map((poke) => (
          <View key={poke.id} style={styles.pokebolaItem}>
            <Image style={styles.pokebolaImage} source={{ uri: poke.image }} />
            <Text>{poke.name}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => deleted(poke.id)} // Passando o id do Pokémon
            >
              <Text style={{ color: 'white' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    ) : (
      <Text>Você ainda não capturou nenhum Pokémon.</Text>
    )}
  </View>
</ScrollView>


    );

};

// Estilos básicos
const styles = StyleSheet.create({
  
  pokebolaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  pokebolaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pokebolaList: {
    marginTop: 10,
  },
  pokebolaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pokebolaImage: {
    width: 120,
    height: 100,
    marginRight: 10,
  },
  btn : {
    marginLeft: 10,
    borderWidth:1,
    padding:2,
    borderRadius:8,
    backgroundColor: 'red'
  }
});


export {Mypokedex};