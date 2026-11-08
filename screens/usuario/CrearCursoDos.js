
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

export default function CrearCursoDos() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.step}>Paso 2 de 2</Text>
                <Text style={styles.title}>Contenido del Curso</Text>
                <Text style={styles.sub}>Agrega los videos y lecciones de tu curso.</Text>

                <View style={styles.form}>
                    <Text style={styles.label}>Título de la lección</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej. Introducción a React Native"
                        placeholderTextColor="#64748B"
                        editable={false}
                    />

                    <Text style={styles.label}>Descripción de la lección</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describe brevemente esta lección..."
                        placeholderTextColor="#64748B"
                        multiline
                        numberOfLines={4}
                        editable={false}
                    />

                    <Text style={styles.label}>Video de la lección</Text>
                    <Pressable style={styles.upload}>
                        <Text style={styles.uploadIcon}>+</Text>
                        <Text style={styles.uploadText}>Seleccionar video</Text>
                    </Pressable>

                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>+ Agregar lección</Text>
                    </Pressable>
                </View>

                <Text style={styles.sectionTitle}>Lecciones agregadas</Text>

                <View style={styles.lesson}>
                    <Text style={styles.lessonTitle}>Lección 1: Introducción</Text>
                    <Text style={styles.lessonSub}>Video pendiente de agregar</Text>
                </View>

                <View style={styles.lesson}>
                    <Text style={styles.lessonTitle}>Lección 2: Conceptos básicos</Text>
                    <Text style={styles.lessonSub}>Video pendiente de agregar</Text>
                </View>

                <Pressable style={styles.finish}>
                    <Text style={styles.btnText}>Finalizar curso</Text>
                </Pressable>

                <Pressable style={styles.back}>
                    <Text style={styles.backText}>Regresar al paso 1</Text>
                </Pressable>

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
        paddingTop: 40
    },
    step: {
        fontSize: 12,
        color: '#818CF8',
        fontWeight: 'bold',
        marginBottom: 4
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 4
    },
    sub: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 20
    },
    form: {
        gap: 12
    },
    label: {
        color: '#E2E8F0',
        fontSize: 14,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        color: '#FFF'
    },
    textArea: {
        height: 90,
        textAlignVertical: 'top'
    },
    upload: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#475569',
        borderStyle: 'dashed',
        borderRadius: 8,
        padding: 25,
        alignItems: 'center'
    },
    uploadIcon: {
        fontSize: 30,
        color: '#818CF8'
    },
    uploadText: {
        color: '#CBD5E1',
        marginTop: 5
    },
    btn: {
        backgroundColor: '#334155',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 25,
        marginBottom: 12
    },
    lesson: {
        backgroundColor: '#1E293B',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10
    },
    lessonTitle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold'
    },
    lessonSub: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 5
    },
    finish: {
        backgroundColor: '#4F46E5',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15
    },
    back: {
        padding: 14,
        alignItems: 'center',
        marginTop: 5
    },
    backText: {
        color: '#818CF8',
        fontWeight: 'bold'
    }
});
