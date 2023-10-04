const { View, TextInput,StyleSheet } = require("react-native");
const { default: IconButton } = require("./ui/Icon");

function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.textInput}>
                <TextInput placeholder="  Search"/>
                <View style={styles.icon}><IconButton name='search' size={25}/></View>
                
            </View>
            <View style={styles.icon}><IconButton name='filter' size={25}/></View>
            
        </View>
        
    )
}

export default Header;

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        margin:2,
        padding:4
    },
    textInput:{
        flexDirection:"row",
        justifyContent:'space-between',
        borderRadius:16,
        borderWidth:2,
        margin:6,
        flex:1
    },
    icon:{
        margin:6,
        padding:4
    }
})