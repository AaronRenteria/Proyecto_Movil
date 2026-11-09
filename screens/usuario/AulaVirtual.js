
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const lecciones = [
    { id: '1', titulo: 'Introducción a React', duracion: '10 min', estado: 'Completada' },
    { id: '2', titulo: 'Fundamentos de React', duracion: '20 min', estado: 'En curso' },
    { id: '3', titulo: 'Componentes y propiedades', duracion: '25 min', estado: 'Pendiente' },
    { id: '4', titulo: 'Estados y eventos', duracion: '30 min', estado: 'Pendiente' },
    { id: '5', titulo: 'Proyecto final', duracion: '35 min', estado: 'Pendiente' }
];

export default function AulaVirtual() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Aula virtual</Text>
                <Text style={styles.subtitle}>React desde cero</Text>

                <View style={styles.video}>
                    <View style={styles.playCircle}>
                        <Text style={styles.playIcon}>▶</Text>
                    </View>
                    <Text style={styles.videoText}>Reproductor de video</Text>
                    <View style={styles.videoControls}>
                        <Text style={styles.videoTime}>00:00</Text>
                        <View style={styles.videoProgress}>
                            <View style={styles.videoProgressBar} />
                        </View>
                        <Text style={styles.videoTime}>20:00</Text>
                    </View>
                </View>

                <View style={styles.lessonInfo}>
                    <Text style={styles.lessonLabel}>LECCIÓN 2</Text>
                    <Text style={styles.lessonTitle}>Fundamentos de React</Text>
                    <Text style={styles.description}>
                        Conoce los conceptos básicos de React y aprende cómo
                        funcionan sus componentes.
                    </Text>
                </View>

                <View style={styles.courseHeader}>
                    <Text style={styles.section}>Contenido del curso</Text>
                    <Text style={styles.totalLessons}>5 lecciones</Text>
                </View>

                {lecciones.map(item => (
                    <View key={item.id} style={styles.lessonCard}>
                        <View style={styles.lessonNumber}>
                            <Text style={styles.numberText}>{item.id}</Text>
                        </View>

                        <View style={styles.lessonDetails}>
                            <Text style={styles.lessonName}>{item.titulo}</Text>
                            <Text style={styles.duration}>{item.duracion}</Text>
                        </View>

                        <Text style={[
                            styles.status,
                            item.estado === 'Completada' && styles.completed,
                            item.estado === 'En curso' && styles.current
                        ]}>
                            {item.estado}
                        </Text>
                    </View>
                ))}

                <View style={styles.progressCard}>
                    <Text style={styles.progressLabel}>Progreso general</Text>
                    <Text style={styles.progressValue}>40%</Text>
                    <View style={styles.progressBackground}>
                        <View style={styles.progressBar} />
                    </View>
                    <Text style={styles.progressDescription}>
                        Has completado 2 de 5 lecciones.
                    </Text>
                </View>
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
        fontSize: 15,
        marginTop: 5,
        marginBottom: 20
    },
    video: {
        height: 210,
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    playCircle: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    playIcon: {
        color: '#FFFFFF',
        fontSize: 24,
        marginLeft: 4
    },
    videoText: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 12
    },
    videoControls: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 8,
        position: 'absolute',
        bottom: 15,
        paddingHorizontal: 12
    },
    videoTime: {
        color: '#CBD5E1',
        fontSize: 10
    },
    videoProgress: {
        flex: 1,
        height: 5,
        backgroundColor: '#334155',
        borderRadius: 5
    },
    videoProgressBar: {
        width: '35%',
        height: 5,
        backgroundColor: '#818CF8',
        borderRadius: 5
    },
    lessonInfo: {
        marginTop: 22
    },
    lessonLabel: {
        color: '#818CF8',
        fontSize: 11,
        fontWeight: 'bold'
    },
    lessonTitle: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 5
    },
    description: {
        color: '#94A3B8',
        fontSize: 13,
        lineHeight: 20,
        marginTop: 8
    },
    courseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 12
    },
    section: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    totalLessons: {
        color: '#94A3B8',
        fontSize: 12
    },
    lessonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 9,
        gap: 10
    },
    lessonNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#818CF8',
        fontWeight: 'bold'
    },
    lessonDetails: {
        flex: 1
    },
    lessonName: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600'
    },
    duration: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    status: {
        color: '#94A3B8',
        fontSize: 10,
        fontWeight: 'bold'
    },
    completed: {
        color: '#34D399'
    },
    current: {
        color: '#FBBF24'
    },
    progressCard: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginTop: 18
    },
    progressLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'
    },
    progressValue: {
        color: '#34D399',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8
    },
    progressBackground: {
        height: 8,
        backgroundColor: '#334155',
        borderRadius: 8,
        marginTop: 10,
        overflow: 'hidden'
    },
    progressBar: {
        width: '40%',
        height: 8,
        backgroundColor: '#4F46E5',
        borderRadius: 8
    },
    progressDescription: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 8
    }
});
