import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },

    title: {
        color: '#fdfcfe',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },

    subtitle: {
        color: '#6b6b6b',
        fontSize: 16
    },

    form: {
        width: '100%',
        marginTop: 24, 
        marginBottom: 48,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 8,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 16,

        flex: 1
    },

    addButton: {
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#1E6F9F',

        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 24
    },

    topContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32
    },

    tasksCreatedCount: {

        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 18
    },

    finishedTasksCount: {

        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 18
    },

    listEmpty: {

       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',

       marginTop: 32
    },

    listEmptyText: {

        color: '#fff',
        fontSize: 18,

        textAlign: 'center'
    }
});