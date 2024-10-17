import {View,Text,Pressable} from "react-native";
import { BioContext } from "@/context";
import { useContext } from "react";


export default function ProductList(){

    const {products}:any = useContext(BioContext);
    const randomColor = () => {
        let letters = `0123456789ABCDEF`;
        let randomColor = `#`
        for(let i = 0;i<6;i++){
        randomColor += letters.split("")[i];
        }
        return randomColor;
    }

    return(
        <View
        >

            <Text>
            ProductListItem
            </Text>
        </View>
    )
}