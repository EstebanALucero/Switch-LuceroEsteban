import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primario,
        height: 105,
        paddingTop: 35,
        paddingBottom: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.quinario,
        fontSize: 30,
    },
});

export default styles;