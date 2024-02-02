import {View, Text, StyleSheet} from "react-native";

const Setting= () => {
    return (
       <View style={styles.container}>
        <Text>Settings Screen</Text>
       </View>
    )
}
export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
})