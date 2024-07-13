import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
    contactContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    phone: { 
        fontSize: 10,
        color: '#767676',
        lineHeight: 1.5,
        marginLeft:5,
        paddingBottom: 5
    },
    email: {
        fontSize: 10,
        color: '#767676',
        lineHeight: 1.5,
        letterSpacing: -0.2,
        marginLeft:5,
        paddingBottom: 5
    },
    location : {
        fontSize: 10,
        color: '#767676',
        lineHeight: 1.5,
        letterSpacing: -0.2,
        marginLeft:5
    }
})