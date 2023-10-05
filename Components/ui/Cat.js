import {View,StyleSheet,Image,Text} from 'react-native'
import IconButton from './Icon'
function Cat({source,text}){
    return (<View style={style.container}>
    
    <View style={style.imageBackground}>
    <Image style={style.imageButton}
     source={{uri:source}}/>
    </View>
    <Text style={style.text}>{text}</Text>
    
    </View>)
}
export default Cat;

const style=StyleSheet.create({
    imageButton:{
        height:50,
        width:50,
        resizeMode:'stretch'
    },
    imageBackground:{
        backgroundColor:'#ffffff',
        borderRadius:25,
        padding:6,
        margin:8
    },
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        fontWeight:'700',
        
        color:'black',
    }
})