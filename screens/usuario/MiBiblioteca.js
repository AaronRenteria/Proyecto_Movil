
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const cursos = [
    {
        id: '1',
        titulo: 'React desde cero',
        categoria: 'Programación',
        instructor: 'Carlos Méndez',
        progreso: '80%',
        lecciones: '4 de 5 lecciones'
    },
    {
        id: '2',
        titulo: 'Bases de datos MySQL',
        categoria: 'Bases de datos',
        instructor: 'Ana López',
        progreso: '45%',
        lecciones: '3 de 7 lecciones'
    },
    {
        id: '3',
        titulo: 'Python básico',
        categoria: 'Programación',
        instructor: 'Luis Torres',
        progreso: '20%',
        lecciones: '1 de 5 lecciones'
    }
];

export default function MiBiblioteca() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Mi biblioteca</Text>
                <Text style={styles.subtitle}>
                    Aquí encontrarás todos tus cursos inscritos.
                </Text>

                <View style={styles.summary}>
                    <Text style={styles.summaryNumber}>3</Text>
                    <Text style={styles.summaryLabel}>Cursos inscritos</Text>
                </View>

                <Text style={styles.section}>Mis cursos</Text>

                {cursos.map(item => (
                    <View key={item.id} style={styles.courseCard}>
                        <View style={styles.courseHeader}>
                            <Text style={styles.category}>{item.categoria}</Text>
                            <Text style={styles.status}>Inscrito</Text>
                        </View>

                        <Text style={styles.courseTitle}>{item.titulo}</Text>

                        <Text style={styles.instructor}>
                            Instructor: {item.instructor}
                        </Text>

                        <View style={styles.progressHeader}>
                            <Text style={styles.progressLabel}>Progreso</Text>
                            <Text style={styles.progressValue}>{item.progreso}</Text>
                        </View>

                        <View style={styles.progressBackground}>
                            <View
                                style={[
                                    styles.progressBar,
                                    { width: item.progreso }
                                ]}
                            />
                        </View>

                        <Text style={styles.lessons}>{item.lecciones}</Text>

                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Ver curso</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A'
    },
    content: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30
    },
    title: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 14,
        marginTop: 6,
        marginBottom: 20
    },
    summary: {
        backgroundColor: '#4F46E5',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center'
    },
    summaryNumber: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
    summaryLabel: {
        color: '#E2E8F0',
        fontSize: 13,
        marginTop: 4
    },
    section: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15
    },
    courseCard: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 15
    },
    courseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category: {
        color: '#818CF8',
        fontSize: 12,
        fontWeight: 'bold'
    },
    status: {
        color: '#34D399',
        fontSize: 11,
        fontWeight: 'bold'
    },
    courseTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12
    },
    instructor: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 6
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 8
    },
    progressLabel: {
        color: '#CBD5E1',
        fontSize: 12
    },
    progressValue: {
        color: '#34D399',
        fontSize: 12,
        fontWeight: 'bold'
    },
    progressBackground: {
        height: 8,
        backgroundColor: '#334155',
        borderRadius: 8,
        overflow: 'hidden'
    },
    progressBar: {
        height: 8,
        backgroundColor: '#4F46E5',
        borderRadius: 8
    },
    lessons: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 8
    },
    btn: {
        backgroundColor: '#4F46E5',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
