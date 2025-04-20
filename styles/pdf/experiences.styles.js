import {StyleSheet} from '@react-pdf/renderer';
export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    companyContainer: {
        width: '100%',
        textAlign: 'left',
        paddingBottom: 15
    },
    projectsContainer: {
        width: '100%',
        textAlign: 'left'
    },
    tagSkillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 3,
        rowGap: 3,
        marginTop: 5
    },
    projectContent: {
        fontSize: 11,
        color: '#767676',
        paddingBottom: 5,
        fontWeight: 'bold'
    }
})