import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";

const styles = StyleSheet.create({
    container: {
        width: 300,
        maxWidth: "80%",
        padding: 20,
        margin: 15,
        alignItems: "center",
        shadowOffset: { width: 0, height: 2},
        shadowColor: colors.quinario,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: colors.secundario,
    },
});

export default styles;