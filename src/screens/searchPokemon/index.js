import  { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'

const SearchPokemons = () => {
    const navigation = useNavigation();
  // Estado para armazenar os dados do Pokémon
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);  // Estado para mostrar carregando
  const [error, setError] = useState(null);      // Estado para possíveis erros
  const [pokemonId, setPokemonId] = useState(1);  // Estado para armazenar o ID do Pokémon
  const [pokebola, setPokebola] = useState([]); // Pokémons capturados

  // Função para pegar dados de um Pokémon específico
  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      setPokemon(response.data);  // Armazena os dados do Pokémon
      setLoading(false);           // Altera o estado de carregamento
    } catch (error) {
      setError('Erro ao carregar Pokémon');
      setLoading(false);
    }
  };

  // Função para incrementar o ID do Pokémon
  const novopoke = () => {
    setPokemonId(prevId => prevId + 1);  // Incrementa o ID de forma correta
  };

  // Função para voltar o ID do Pokémon
  const afterpoke = () => {
    if (pokemonId > 1) {
      setPokemonId(prevId => prevId - 1); 
    } else {
      alert('Você está vendo o primeiro Pokémon da lista');
    }
  };

  // Função para capturar o Pokémon
  const capture = () => {
    if (pokemon) {
      // Adiciona o Pokémon à Pokébola, armazenando o nome e a imagem
      setPokebola((prevPokes) => [...prevPokes, { name: pokemon.name, image: pokemon.sprites.front_default }]);
      console.log('Pokémon adicionado');
    }
  };

  // UseEffect para chamar a função quando o ID mudar
  useEffect(() => {
    fetchPokemon(); // Recarrega o Pokémon toda vez que o ID mudar
  }, [pokemonId]); // O useEffect depende do pokemonId

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

          {/* Exibindo Pokémon capturados */}
          <View style={styles.pokebolaContainer}>
            <Text style={styles.pokebolaTitle}>Pokémons Capturados:</Text>
            {pokebola.length > 0 ? (
              <View style={styles.pokebolaList}>
                {pokebola.map((poke, index) => (
                  <View key={index} style={styles.pokebolaItem}>
                    <Image style={styles.pokebolaImage} source={{ uri: poke.image }} />
                    <Text>{poke.name}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text>Você ainda não capturou nenhum Pokémon.</Text>
            )}
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
});

export {SearchPokemons};
