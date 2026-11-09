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

export default function ConfiguracionTokens() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.badge}>Módulo Admin</Text>
                    <Text style={styles.title}>Configuración de Créditos</Text>
                    <Text style={styles.sub}>Ajusta los parámetros del sistema de economía P2P.</Text>

                    <View style={styles.form}>
                        <Text style={styles.label}>Bono por registro (Créditos)</Text>
                        <TextInput style={styles.input} placeholder="100" placeholderTextColor="#64748B" keyboardType="numeric" editable={false} />

                        <Text style={styles.label}>Recompensa por subir curso</Text>
                        <TextInput style={styles.input} placeholder="50" placeholderTextColor="#64748B" keyboardType="numeric" editable={false} />

                        <Text style={styles.label}>Comisión por transacción (%)</Text>
                        <TextInput style={styles.input} placeholder="5" placeholderTextColor="#64748B" keyboardType="numeric" editable={false} />

                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Guardar Reglas</Text>
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
    badge: { color: '#818CF8', fontSize: 12, fontWeight: 'bold', marginBottom: 4 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
    sub: { fontSize: 14, color: '#94A3B8', marginBottom: 20 },
    form: { gap: 12 },
    label: { color: '#E2E8F0', fontSize: 14, fontWeight: '600' },
    input: { backgroundColor: '#1E293B', borderColor: '#334155', borderWidth: 1, borderRadius: 8, padding: 12, color: '#FFF' },
    btn: { backgroundColor: '#4F46E5', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});