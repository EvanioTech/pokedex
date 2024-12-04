
import { Home } from "./src/screens/home";
import { Routes } from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
import { PokeProvider } from "./src/context";
import 'react-native-gesture-handler';




const App = () => {
  return (
    <NavigationContainer>
      <PokeProvider>
      <Routes/>
      </PokeProvider>
      
    </NavigationContainer>
    
  )
}


export default App