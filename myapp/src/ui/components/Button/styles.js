import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    base: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    pressed:{
        opacity: 0.6,
    },
    primary:{
        backgroundColor: 'dodgerblue'
    },
    secondary:{
        backgroundColor: '#5f5f60ff'
    },
    danger:{
        backgroundColor: 'red'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    text: {
        color: 'white',
        fontZise: 16,
        fontWeight: '600'
    },
    disabled: {
        backgroundColor: '#5f5f60ff',
        opacity: 0.5
    }
});

export default styles;