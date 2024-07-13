import {StyleSheet} from '@react-pdf/renderer';
export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    companyContainer: {
        width: '31%',
        textAlign: 'left'
    },
    projectsContainer: {
        width: '69%',
        paddingLeft: 25,
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
        paddingBottom: 5
    }
})