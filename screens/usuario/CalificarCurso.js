
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';

export default function CalificarCurso() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Calificar curso</Text>
                <Text style={styles.subtitle}>
                    Comparte tu experiencia con otros estudiantes
                </Text>

                <View style={styles.courseCard}>
                    <View style={styles.courseImage}>
                        <Text style={styles.courseImageText}>R</Text>
                    </View>

                    <View style={styles.courseInfo}>
                        <Text style={styles.courseTitle}>React desde cero</Text>
                        <Text style={styles.instructor}>María González</Text>
                        <Text style={styles.category}>Desarrollo web</Text>
                    </View>
                </View>

                <View style={styles.ratingCard}>
                    <Text style={styles.sectionTitle}>
                        ¿Qué te pareció el curso?
                    </Text>

                    <View style={styles.stars}>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.star}>★</Text>
                        <Text style={styles.emptyStar}>★</Text>
                    </View>

                    <Text style={styles.ratingText}>4 de 5 estrellas</Text>
                    <Text style={styles.ratingDescription}>
                        Muy bueno
                    </Text>
                </View>

                <View style={styles.commentCard}>
                    <Text style={styles.sectionTitle}>
                        Escribe tu opinión
                    </Text>

                    <Text style={styles.label}>Comentario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cuéntanos qué aprendiste y qué te pareció..."
                        placeholderTextColor="#94A3B8"
                        multiline
                        editable={false}
                    />

                    <Text style={styles.helper}>
                        Tu opinión ayudará a otros estudiantes a elegir este curso.
                    </Text>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>Resumen de tu calificación</Text>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Calificación</Text>
                        <Text style={styles.summaryValue}>4 / 5</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Curso</Text>
                        <Text style={styles.summaryValue}>React desde cero</Text>
                    </View>
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Enviar calificación</Text>
                </Pressable>

                <Text style={styles.footer}>
                    Gracias por compartir tu experiencia.
                </Text>
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
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 6,
        marginBottom: 22
    },
    courseCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 15
    },
    courseImage: {
        width: 65,
        height: 65,
        borderRadius: 10,
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseImageText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    courseInfo: {
        flex: 1,
        marginLeft: 13
    },
    courseTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    instructor: {
        color: '#CBD5E1',
        fontSize: 12,
        marginTop: 5
    },
    category: {
        color: '#818CF8',
        fontSize: 11,
        marginTop: 5
    },
    ratingCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 18,
        alignItems: 'center',
        marginTop: 18
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    stars: {
        flexDirection: 'row',
        marginTop: 18,
        gap: 8
    },
    star: {
        color: '#FBBF24',
        fontSize: 35
    },
    emptyStar: {
        color: '#475569',
        fontSize: 35
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    ratingDescription: {
        color: '#34D399',
        fontSize: 12,
        marginTop: 5
    },
    commentCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 16,
        marginTop: 18
    },
    label: {
        color: '#CBD5E1',
        fontSize: 12,
        marginTop: 18,
        marginBottom: 8
    },
    input: {
        minHeight: 110,
        backgroundColor: '#0F172A',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 8,
        padding: 12,
        color: '#FFFFFF',
        fontSize: 13,
        textAlignVertical: 'top'
    },
    helper: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 10,
        lineHeight: 17
    },
    summaryCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 16,
        marginTop: 18
    },
    summaryTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    summaryLabel: {
        color: '#94A3B8',
        fontSize: 12
    },
    summaryValue: {
        color: '#E2E8F0',
        fontSize: 12,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#4F46E5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'
    },
    footer: {
        color: '#64748B',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 15
    }
});
