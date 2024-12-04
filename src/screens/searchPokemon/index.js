import  {  useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { PokeContext } from '../../context';

const SearchPokemons = () => {
    const navigation = useNavigation();
    const { 
        pokemon,
        loading,
        error,
        pokemonId,
        pokebola,
        novopoke,
        afterpoke,
        capture,
    } = useContext(PokeContext)

    // Se ainda estiver carregando, exibe um carregando
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  

  

  // Se houve erro
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Exibe o nome, altura, peso e a imagem do Pokémon quando os dados forem carregados
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../imagens/pk.png')}
        style={{ width: '300', height: '100', marginBottom: 65 }}
      />
      {pokemon && (
        <>
          <Text style={styles.title}>{pokemon.name}</Text>
          
          <Image
            style={styles.image}
            source={{ uri: pokemon.sprites.front_default }} // URL da imagem do Pokémon
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={styles.btn} onPress={afterpoke}>
              <Text>Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={novopoke}>
              <Text>Próximo</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={capture} style={styles.btncap}>
            <Text style={{ color: '#FFF' }}>
              Capturar Pokémon
            </Text>
          </TouchableOpacity>

         
          <View>
            <TouchableOpacity
            style={styles.btnpokedex}
             onPress={ () => navigation.navigate("Mypokedex")}>
                <Text>
                    Ver Pokedex
                    </Text>
                    </TouchableOpacity>
            
          </View>
        </>
      )}
    </View>
  );
};

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  btn: {
    borderWidth: 1,
    marginRight: 100,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#5F9EA0',
  },
  btn2: {
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#6495ED',
  },
  btncap: {
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
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
    width: 50,
    height: 50,
    marginRight: 10,
  },
  btnpokedex: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ADFF2F',
  }
});

export {SearchPokemons};
