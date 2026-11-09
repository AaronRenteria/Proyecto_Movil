
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
        nombre: 'React desde cero',
        categoria: 'Desarrollo web',
        estudiantes: 48,
        calificacion: '4.8',
        estado: 'Publicado'
    },
    {
        id: '2',
        nombre: 'JavaScript básico',
        categoria: 'Programación',
        estudiantes: 32,
        calificacion: '4.6',
        estado: 'Publicado'
    },
    {
        id: '3',
        nombre: 'Diseño con Figma',
        categoria: 'Diseño',
        estudiantes: 15,
        calificacion: '4.9',
        estado: 'En revisión'
    }
];

const actividades = [
    {
        id: '1',
        inicial: 'A',
        nombre: 'Andrea López',
        descripcion: 'Se inscribió en React desde cero',
        tiempo: 'Hace 10 minutos'
    },
    {
        id: '2',
        inicial: 'C',
        nombre: 'Carlos Méndez',
        descripcion: 'Calificó JavaScript básico',
        tiempo: 'Hace 2 horas'
    },
    {
        id: '3',
        inicial: 'L',
        nombre: 'Luis Ramírez',
        descripcion: 'Completó una lección',
        tiempo: 'Ayer'
    }
];

export default function DashboardInstructor() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Panel del instructor</Text>
                        <Text style={styles.name}>María González</Text>
                    </View>

                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>MG</Text>
                    </View>
                </View>

                <Text style={styles.subtitle}>
                    Resumen general de tu actividad
                </Text>

                <View style={styles.statsGrid}>
                    <View style={styles.statCard}>
                        <Text style={styles.statIcon}>▣</Text>
                        <Text style={styles.statValue}>95</Text>
                        <Text style={styles.statLabel}>Estudiantes</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statIcon}>▤</Text>
                        <Text style={styles.statValue}>3</Text>
                        <Text style={styles.statLabel}>Cursos</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statIcon}>★</Text>
                        <Text style={styles.statValue}>4.8</Text>
                        <Text style={styles.statLabel}>Calificación</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={styles.statIcon}>◈</Text>
                        <Text style={styles.statValue}>250</Text>
                        <Text style={styles.statLabel}>Créditos ganados</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Mis cursos</Text>
                    <Text style={styles.sectionLink}>3 cursos</Text>
                </View>

                {cursos.map(curso => (
                    <View key={curso.id} style={styles.courseCard}>
                        <View style={styles.courseTop}>
                            <View style={styles.courseIcon}>
                                <Text style={styles.courseIconText}>
                                    {curso.nombre.charAt(0)}
                                </Text>
                            </View>

                            <View style={styles.courseInfo}>
                                <Text style={styles.courseName}>
                                    {curso.nombre}
                                </Text>
                                <Text style={styles.courseCategory}>
                                    {curso.categoria}
                                </Text>
                            </View>

                            <Text style={[
                                styles.courseStatus,
                                curso.estado === 'Publicado'
                                    ? styles.published
                                    : styles.review
                            ]}>
                                {curso.estado}
                            </Text>
                        </View>

                        <View style={styles.courseFooter}>
                            <Text style={styles.courseDetail}>
                                {curso.estudiantes} estudiantes
                            </Text>
                            <Text style={styles.courseRating}>
                                ★ {curso.calificacion}
                            </Text>
                        </View>
                    </View>
                ))}

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Actividad reciente</Text>
                </View>

                <View style={styles.activityCard}>
                    {actividades.map((actividad, index) => (
                        <View key={actividad.id} style={[
                            styles.activityItem,
                            index !== actividades.length - 1 && styles.activityBorder
                        ]}>
                            <View style={styles.activityAvatar}>
                                <Text style={styles.activityAvatarText}>
                                    {actividad.inicial}
                                </Text>
                            </View>

                            <View style={styles.activityInfo}>
                                <Text style={styles.activityName}>
                                    {actividad.nombre}
                                </Text>
                                <Text style={styles.activityDescription}>
                                    {actividad.descripcion}
                                </Text>
                                <Text style={styles.activityTime}>
                                    {actividad.tiempo}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.creditsCard}>
                    <Text style={styles.creditsTitle}>Créditos obtenidos</Text>
                    <Text style={styles.creditsValue}>250 créditos</Text>
                    <Text style={styles.creditsDescription}>
                        Ganancias acumuladas por tus cursos y actividades.
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
        paddingBottom: 35
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    greeting: {
        color: '#94A3B8',
        fontSize: 13
    },
    name: {
        color: '#FFFFFF',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 5
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 8,
        marginBottom: 22
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10
    },
    statCard: {
        width: '48%',
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 15
    },
    statIcon: {
        color: '#818CF8',
        fontSize: 20
    },
    statValue: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8
    },
    statLabel: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 27,
        marginBottom: 13
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    sectionLink: {
        color: '#818CF8',
        fontSize: 12
    },
    courseCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 14,
        marginBottom: 10
    },
    courseTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    courseIcon: {
        width: 42,
        height: 42,
        borderRadius: 9,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseIconText: {
        color: '#818CF8',
        fontSize: 19,
        fontWeight: 'bold'
    },
    courseInfo: {
        flex: 1,
        marginLeft: 10
    },
    courseName: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    },
    courseCategory: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    courseStatus: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    published: {
        color: '#34D399'
    },
    review: {
        color: '#FBBF24'
    },
    courseFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#334155',
        marginTop: 13,
        paddingTop: 10
    },
    courseDetail: {
        color: '#94A3B8',
        fontSize: 11
    },
    courseRating: {
        color: '#FBBF24',
        fontSize: 11,
        fontWeight: 'bold'
    },
    activityCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        paddingHorizontal: 14
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14
    },
    activityBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#334155'
    },
    activityAvatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityAvatarText: {
        color: '#818CF8',
        fontWeight: 'bold'
    },
    activityInfo: {
        flex: 1,
        marginLeft: 11
    },
    activityName: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    activityDescription: {
        color: '#CBD5E1',
        fontSize: 11,
        marginTop: 4
    },
    activityTime: {
        color: '#64748B',
        fontSize: 10,
        marginTop: 4
    },
    creditsCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 17,
        marginTop: 18
    },
    creditsTitle: {
        color: '#CBD5E1',
        fontSize: 13
    },
    creditsValue: {
        color: '#34D399',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8
    },
    creditsDescription: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 6,
        lineHeight: 17
    }
});
