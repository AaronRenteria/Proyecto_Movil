import React from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Platform
} from 'react-native';

export default function CrearCurso() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.step}>Paso 1 de 2</Text>
                    <Text style={styles.title}>Información del Curso</Text>
                    <Text style={styles.sub}>Ingresa los datos principales de tu curso.</Text>

                    <View style={styles.form}>
                        <Text style={styles.label}>Título del curso</Text>
                        <TextInput style={styles.input} placeholder="Ej. Curso de React Native" placeholderTextColor="#64748B" editable={false} />

                        <Text style={styles.label}>Categoría</Text>
                        <TextInput style={styles.input} placeholder="Ej. Frontend / Móvil" placeholderTextColor="#64748B" editable={false} />

                        <Text style={styles.label}>Descripción</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="¿Qué aprenderán los alumnos?"
                            placeholderTextColor="#64748B"
                            multiline
                            numberOfLines={4}
                            editable={false}
                        />

                        <Text style={styles.label}>Precio en Créditos</Text>
                        <TextInput style={styles.input} placeholder="Ej. 50" placeholderTextColor="#64748B" keyboardType="numeric" editable={false} />

                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Siguiente: Agregar Contenido</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0F172A' },
    content: { padding: 20, paddingTop: 40 },
    step: { fontSize: 12, color: '#818CF8', fontWeight: 'bold', marginBottom: 4 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
    sub: { fontSize: 14, color: '#94A3B8', marginBottom: 20 },
    form: { gap: 12 },
    label: { color: '#E2E8F0', fontSize: 14, fontWeight: '600' },
    input: { backgroundColor: '#1E293B', borderColor: '#334155', borderWidth: 1, borderRadius: 8, padding: 12, color: '#FFF' },
    textArea: { height: 90, textAlignVertical: 'top' },
    btn: { backgroundColor: '#4F46E5', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});