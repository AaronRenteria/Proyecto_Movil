
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

const preguntas = [
    {
        usuario: 'Carlos M.',
        tiempo: 'Hace 2 horas',
        pregunta: '¿Necesito conocimientos previos para tomar este curso?',
        respuesta: 'No, el curso comienza desde los conceptos básicos de React.',
        instructor: 'María González'
    },
    {
        usuario: 'Andrea L.',
        tiempo: 'Hace 5 horas',
        pregunta: '¿Los ejercicios se pueden descargar?',
        respuesta: 'Sí, encontrarás los materiales disponibles dentro del curso.',
        instructor: 'María González'
    },
    {
        usuario: 'Luis R.',
        tiempo: 'Ayer',
        pregunta: '¿Cuánto tiempo necesito para terminar el curso?',
        respuesta: 'Aproximadamente 2 horas, dependiendo de tu ritmo de aprendizaje.',
        instructor: 'María González'
    }
];

export default function PreguntasRespuestas() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Preguntas y respuestas</Text>
                <Text style={styles.subtitle}>Resuelve tus dudas sobre el curso</Text>

                <View style={styles.courseCard}>
                    <Text style={styles.courseLabel}>CURSO</Text>
                    <Text style={styles.courseTitle}>React desde cero</Text>
                    <Text style={styles.instructor}>Impartido por María González</Text>
                </View>

                <Text style={styles.sectionTitle}>Escribe tu pregunta</Text>

                <View style={styles.questionBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="¿Qué te gustaría saber?"
                        placeholderTextColor="#94A3B8"
                        multiline
                        editable={false}
                    />
                    <Pressable style={styles.sendButton}>
                        <Text style={styles.sendButtonText}>Enviar pregunta</Text>
                    </Pressable>
                </View>

                <View style={styles.questionsHeader}>
                    <Text style={styles.sectionTitle}>Preguntas recientes</Text>
                    <Text style={styles.counter}>3 preguntas</Text>
                </View>

                {preguntas.map((item, index) => (
                    <View key={index} style={styles.questionCard}>
                        <View style={styles.userRow}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>
                                    {item.usuario.charAt(0)}
                                </Text>
                            </View>
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>{item.usuario}</Text>
                                <Text style={styles.time}>{item.tiempo}</Text>
                            </View>
                        </View>

                        <Text style={styles.questionText}>{item.pregunta}</Text>

                        <View style={styles.answerContainer}>
                            <Text style={styles.answerLabel}>Respuesta del instructor</Text>
                            <Text style={styles.answerText}>{item.respuesta}</Text>
                            <Text style={styles.answerAuthor}>{item.instructor}</Text>
                        </View>
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
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 6,
        marginBottom: 20
    },
    courseCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 16,
        marginBottom: 24
    },
    courseLabel: {
        color: '#818CF8',
        fontSize: 11,
        fontWeight: 'bold'
    },
    courseTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 7
    },
    instructor: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 5
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    questionBox: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 12,
        marginTop: 12,
        marginBottom: 25
    },
    input: {
        color: '#FFFFFF',
        fontSize: 13,
        minHeight: 75,
        textAlignVertical: 'top'
    },
    sendButton: {
        backgroundColor: '#4F46E5',
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    },
    questionsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    counter: {
        color: '#94A3B8',
        fontSize: 11
    },
    questionCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 15,
        marginBottom: 12
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        color: '#818CF8',
        fontSize: 15,
        fontWeight: 'bold'
    },
    userInfo: {
        marginLeft: 10
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    time: {
        color: '#94A3B8',
        fontSize: 10,
        marginTop: 3
    },
    questionText: {
        color: '#E2E8F0',
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 14
    },
    answerContainer: {
        backgroundColor: '#0F172A',
        borderRadius: 8,
        padding: 12,
        borderLeftWidth: 3,
        borderLeftColor: '#818CF8'
    },
    answerLabel: {
        color: '#818CF8',
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 7
    },
    answerText: {
        color: '#CBD5E1',
        fontSize: 12,
        lineHeight: 19
    },
    answerAuthor: {
        color: '#94A3B8',
        fontSize: 10,
        marginTop: 8,
        textAlign: 'right'
    }
});
