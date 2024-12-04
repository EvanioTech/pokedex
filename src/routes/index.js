
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { SearchPokemons } from '../screens/searchPokemon';
import { Mypokedex } from '../screens/myPokedex';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
    
          <Stack.Screen
            name="SearchPokemons"
            component={SearchPokemons}
            options={{
              headerTitle: 'Pokemons'
            }}
          />
          <Stack.Screen
            name="Mypokedex"
            component={Mypokedex}
            options={{
              headerTitle: 'Meus Pokémons'
            }}
          />
        </Stack.Navigator>
      )
    }

export {Routes};