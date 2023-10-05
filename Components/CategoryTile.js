import { View,Pressable,Text,StyleSheet} from 'react-native'
import Cat from './ui/Cat'
import IconButton from './ui/Icon'

function CategoryTile({source,name,onPress}){
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Cat
        source={source}
        catName={name}
        iconBackground={styles.background}
        flex={styles.flex}
        text={styles.text}
      />
      <IconButton name='arrow-forward-circle-sharp' color='black' size={30} style={styles.icon}/>
      
        </Pressable>
    )
}

export default CategoryTile
const styles=StyleSheet.create({
    background:{
        backgroundColor:'#f5ebf1',
    },
    flex:{
        flexDirection:'row',
        padding:10
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        borderRadius:20,
        margin:20
    },
    text:{
        fontSize:25
    },
    icon:{
        marginTop:30,
        paddingRight:8
        // verticalAlign:'middle'
    }
})