import {View,StyleSheet} from 'react-native'
import Cat from "./ui/Cat";
import IconButton from './ui/Icon';

function SubHeader(){
    return <View style={styles.container}>
        {/* <View style={styles.imageBackground}><IconButton name='apps' size={35} style={styles.imageButton}/></View> */}

    <Cat source='https://img.icons8.com/?size=30&id=HZ5SrBVYXYO0&format=png'/>
    <Cat source='https://img.icons8.com/?size=48&id=17379&format=png'/>
    <Cat source='https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png'/>
    <Cat/></View>
}

export default SubHeader;
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:6,
        margin:6
    },
    
})