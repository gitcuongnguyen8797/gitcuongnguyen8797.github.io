import { StyleSheet } from '@react-pdf/renderer';

export const main = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F6',
    },
    leftContainer: {
        display: 'flex',
        backgroundColor: 'white',
        width: '31.5%',
        padding: 10
    },
    rightContainer: {
        width: '67%',
    }
})

export const leftMenu = StyleSheet.create({

});


export const description = StyleSheet.create({
    view: {
        display: 'flex',
    },
});