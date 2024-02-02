import {View, Text, StyleSheet, Button} from "react-native";

const DashBoard= ({navigation}) => {
    return (
       <View style={styles.container}>
        <Text style={styles.text}>DashBoard Screen</Text>
        <Button title="Aktivera drawer" onPress={() => navigation.toggleDrawer()} />
        <Button title="Setting" onPress={() => navigation.jumpTo("Setting")} />
       </View>
    )
}
export default DashBoard;

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