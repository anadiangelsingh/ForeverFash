import { View,Pressable,Text,StyleSheet} from 'react-native'
function Gender({onPress,children}){
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Gender;

const styles=StyleSheet.create({
    container:{
        borderRadius:12,
        borderColor:'#424040',
        borderWidth:2,
        padding:6,
        // paddingHorizontal:20
        flex:1/2.2,
        alignItems:'center'
    },
    text:{
        fontSize:26,
        color:'black',
        fontWeight:'500'

        
    },
    
})