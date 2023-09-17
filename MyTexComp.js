import { View, Text, Button, StyleSheet } from "react-native"

const MyTextComp = (props) => {
    return (<View>
        <Text style={StyleSheet.create({
            fontSize: 45,
            color: '#de6870'
        })}>{props.textprops}</Text>
  

    </View>);
}
export default MyTextComp;