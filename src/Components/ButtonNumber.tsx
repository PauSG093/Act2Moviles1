import { View, Text, TouchableOpacity  } from 'react-native';
import styles from '../Themes/AppThemes';
interface Props{
    TextButtont:string,
}
const ButtonNumber = ({TextButtont}:Props) => {
  return (
   <View>
    <TouchableOpacity>
        <Text style={styles.TextButton} >{TextButtont}</Text>
    </TouchableOpacity>
   </View>
  )
}

export default ButtonNumber