import { Text, View,StyleSheet,ScrollView } from "react-native";
import {useLayoutEffect} from 'react'
import IconButton from "../Components/ui/Icon";
import Gender from "../Components/Gender";
import CategoryTile from "../Components/CategoryTile";

function CategoriesScreen({navigation,route}){

    function onPressHandler(name){
        switch (name) {
            case 'cart':
                navigation.navigate('Cart')
                break;
            case 'clothing':
                navigation.navigate('Clothing')
            case 'accessories':
                navigation.navigate('Accesories')
            default:
                break;
        }
        // navigation.navigate('Cart')
        
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <IconButton
                    name='cart' 
                    size={30} 
                    color={"black"} 
                    onPress={onPressHandler.bind(this,'cart')}/>
                );
            }
        })
    },[navigation,onPressHandler]);
    return (
        <View style={styles.container}>
            <View style={styles.gender}>
                <Gender>Male</Gender>
                <Gender>Female</Gender>
            </View>
            <View>
                <CategoryTile name={'Clothing'} source={"https://img.icons8.com/?size=48&id=17379&format=png"}/>
                <CategoryTile name={'Accessories'} source={"https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png"}/>
                <CategoryTile name={'Bags'} source={"https://img.icons8.com/?size=48&id=164W4QT7pxij&format=png"}/>
                <CategoryTile name={'Footwear'} source={"https://img.icons8.com/?size=48&id=16616&format=png"}/>
                <CategoryTile name={'Sports'} source={"https://img.icons8.com/?size=48&id=16595&format=png"}/>
                
            </View>
        </View>

    )
}

export default CategoriesScreen;

const styles=StyleSheet.create({
    gender:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        margin:16,
    },
    container:{
        flex:1
    }
})