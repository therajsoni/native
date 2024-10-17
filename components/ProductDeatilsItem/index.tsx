import {View,ActivityIndicator,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDeatil from '@/screen/ProductDeatils';
import ProductList from '@/screen/ProductListing';
import Favorites from '@/screen/Favorites';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import BioProvider from '@/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        title : "okay", // override
        headerShown : false
      }} name="Favorites" component={Favorites} />
      <Tab.Screen name="ProductListing" component={ProductDeatil} />
      </Tab.Navigator>
  )
}

const App = () => {
  return (
    <BioProvider>
  <View style={{
    backgroundColor : "green",
    flex:1
  }}>
    <Pressable
onPress={BottomTabs}
onPressIn={BottomTabs}
style={{
  
}}
>

</Pressable>
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="BottomDeatils" component={BottomTabs} />
        <Stack.Screen name="ProductDetails" component={ProductList} />  {/* Corrected names */}
       
      </Stack.Navigator> 
    </NavigationContainer>
    </View>
    </BioProvider>
  );
};

export default App;