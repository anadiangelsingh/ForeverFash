import {View,StyleSheet,Image,Text} from 'react-native'
import IconButton from './Icon'
function Cat({source}){
    return (<View>
    
    <View style={style.imageBackground}>
    <Image style={style.imageButton}
     source={{uri:source}}/>
    </View>
    
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
        backgroundColor:'#e6dfdf',
        borderRadius:20,
        padding:6,
        margin:8
    }
})