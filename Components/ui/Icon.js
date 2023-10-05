import Icon from 'react-native-vector-icons/Ionicons'
import { Pressable } from 'react-native'
function IconButton({name,color,size,style,onPress}){
    return <Pressable onPress={onPress} style={style}><Icon name={name} color={color} size={size} style={style}/></Pressable>
}

export default IconButton


