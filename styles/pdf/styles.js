import { StyleSheet } from '@react-pdf/renderer';

export const main = StyleSheet.create({
    // Page flows vertically (column); paddingTop applies to every page incl. continuations
    page: {
        flexDirection: 'column',
        backgroundColor: '#F0F0F6',
    },
    // Full-width top header banner
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a2e',
        padding: '18 22',
    },
    // All sections stack vertically below the header
    content: {
        flex: 1,
        flexDirection: 'column',
        gap: 8,
        padding: '10 12',
    },
    // White card — matches the section style used by ProfessionalSummary & WorkExperiencesSection
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '14 14',
    },
})

export const leftMenu = StyleSheet.create({

});


export const description = StyleSheet.create({
    view: {
        display: 'flex',
    },
});