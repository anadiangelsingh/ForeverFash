import Icon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native'
function IconButton({name,color,size,style}){
    return <Icon name={name} color={color} size={size} style={style}/>
}

export default IconButton
