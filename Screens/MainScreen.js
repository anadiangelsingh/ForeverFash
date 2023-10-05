import { Text, View,StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";

function MainScreen(){
    return (
        <SafeAreaView style={styles.screen}>
        <Header/>
     
        <SubHeader/></SafeAreaView>
    )
}

export default MainScreen;

const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1
    },
    screen:{

    }
})