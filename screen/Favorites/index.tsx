// import {View,Text} from "react-native";
// export default function Favorites(){
//     return(
//         <View>
//             <Text>
//             Favorites
//             </Text>
//         </View>
//     )
// }

import Favorites from "@/screen/Favorites";
import ProductDeatil from "@/screen/ProductDeatils";
import ProductList from "@/screen/ProductListing";
import { useEffect, useState } from "react";
import { Text, View,StyleSheet ,ScrollView,FlatList, TextInput, ActivityIndicator} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import  {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function Index() {

  const [data,setData] = useState<any>([])
  const [loading,setLoading] = useState<any>(false);

  const handleInput = (getEnteredData:any) => {
    console.log(getEnteredData);    
  }

  const Stack = createNativeStackNavigator();



  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
      .then(res => res.json())  // Parse the JSON data
      .then(data => {
        setData(data.products);  // Access 'products' and set it
      })
      .catch(error => {
        console.error('Error fetching data:', error);  // Handle any errors
      });
      setLoading(false)
  }, []);
  
  
  console.log(data);
  const handleChange = () => {
    alert('hello')
  }

  if(loading){
    return (
      <ActivityIndicator color={"white"} size={"large"}/>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black",height:100
      }}
    >
      {/* <ScrollView>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text onPress={handleChange} style={styles.container} ></Text>
      
      <FlatList
      data={data}
      renderItem={(itemData)=>(
        <Text key={itemData.index}>{itemData.item.id}</Text>
      )}
      >
      </FlatList>
      <TextInput style={{width:200,height:30,backgroundColor:"green",color:"red"}} onChangeText={handleInput} placeholder="enter name" value="" />
      </ScrollView>
     <View>
      <Favorites/>
      <ProductDeatil/>
      <ProductList/>


     </View>
       */}
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="productListing" component={ProductList} />
          <Stack.Screen name="productDeatails" component={ProductDeatil} />
          <Stack.Screen name="favorites" component={Favorites} />
          </Stack.Navigator> 
       </NavigationContainer>
 </View>
  );
}

const styles = StyleSheet.create({
  container : {
    color : 'white',
    backgroundColor : 'black',
    borderColor : 'green',
    borderRadius : 50,
    borderWidth : 1 ,
    height :50,
    width : 50
  }
})
