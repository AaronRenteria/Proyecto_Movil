import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const REPORTES_MOCK = [
    { id: '1', usuario: 'Juan Pérez', motivo: 'El video de la lección 3 no carga', curso: 'React Native Básicos' },
    { id: '2', usuario: 'María López', motivo: 'Contenido desactualizado', curso: 'JS ES6' },
    { id: '3', usuario: 'Pedro Gómez', motivo: 'No se me abonaron los créditos', curso: 'Soporte General' },
];

export default function Reportes() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.badge}>Módulo Admin</Text>
                <Text style={styles.title}>Reportes y Disputas</Text>
                <Text style={styles.sub}>Atiende las quejas e incidencias de los usuarios.</Text>

                <View style={styles.list}>
                    {REPORTES_MOCK.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <Text style={styles.usuario}>{item.usuario}</Text>
                            <Text style={styles.infoText}>Origen: <Text style={styles.highlight}>{item.curso}</Text></Text>
                            <Text style={styles.motivo}>"{item.motivo}"</Text>

                            <View style={styles.rowBtns}>
                                <Pressable style={styles.btnResolver}>
                                    <Text style={styles.btnTextResolver}>Resolver</Text>
                                </Pressable>
                                <Pressable style={styles.btnDescartar}>
                                    <Text style={styles.btnTextDescartar}>Descartar</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0F172A' },
    content: { padding: 20, paddingTop: 40 },
    badge: { color: '#818CF8', fontSize: 12, fontWeight: 'bold', marginBottom: 4 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
    sub: { fontSize: 14, color: '#94A3B8', marginBottom: 20 },
    list: { gap: 12 },
    card: { backgroundColor: '#1E293B', padding: 16, borderRadius: 8, borderColor: '#334155', borderWidth: 1, gap: 6 },
    usuario: { fontSize: 16, fontWeight: 'bold', color: '#818CF8', marginBottom: 2 },
    infoText: { fontSize: 12, color: '#94A3B8' },
    highlight: { color: '#CBD5E1', fontWeight: '600' },
    motivo: { fontSize: 13, color: '#E2E8F0', fontStyle: 'italic', marginVertical: 4 },
    rowBtns: { flexDirection: 'row', gap: 10, marginTop: 8 },
    btnResolver: { flex: 1, backgroundColor: '#4F46E5', padding: 10, borderRadius: 6, alignItems: 'center' },
    btnTextResolver: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
    btnDescartar: { flex: 1, backgroundColor: '#334155', padding: 10, borderRadius: 6, alignItems: 'center' },
    btnTextDescartar: { color: '#CBD5E1', fontWeight: 'bold', fontSize: 13 },
});