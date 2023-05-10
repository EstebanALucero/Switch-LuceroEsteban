import { StyleSheet } from "react-native";
import colors from "../../Constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.terciario,
    },
    textColor: {
        color: colors.quinario,
    },
    buttoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    button: {
        height: 35,
        width: 100,
        backgroundColor: colors.disableColor,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: colors.quinario,
        fontSize: 20,
    }
});

export default styles;