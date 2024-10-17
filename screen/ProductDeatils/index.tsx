import {View,Text} from "react-native";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function ProductDeatil(){

    const navigation = useNavigation();
    const route = useRoute();

    function handleOnPress(getId:any){
     
        // navigation.navigate("productDetails",{
        //     productId : getId,
        // });

        // log(route.params) // it return object

        // navigation.setOptions({headerRight : () => {return (<Button/>)}}) // just like headerLeft
    }

    return(
        <View>
            <Text>
            ProductDeatils
            </Text>
        </View>
    )
}