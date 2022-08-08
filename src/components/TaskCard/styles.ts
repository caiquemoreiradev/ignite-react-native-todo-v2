import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#333333',
        padding: 24,

        borderRadius: 8,
        marginBottom: 12,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    taskName: {

        color: '#F2F2F2',
        fontSize: 16
    },

    taskMarker: {
        height: 16,
        width: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#B2B2B2',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    taskMarkerDone: {
        height: 16,
        width: 16,
        borderRadius: 4,
        backgroundColor: '#5E60CE',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskTextDone: {
        color: '#5E60CE',
        textDecorationLine: 'line-through',
        fontSize: 16
    },
});