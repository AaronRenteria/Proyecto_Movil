import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const CURSOS_PENDIENTES_MOCK = [
    { id: '1', titulo: 'Curso de React Native Avanzado', autor: 'Carlos Gómez', categoria: 'Móvil' },
    { id: '2', titulo: 'Introducción a Docker y Containers', autor: 'Sofía Castro', categoria: 'DevOps' },
    { id: '3', titulo: 'Diseño de Interfaces en Figma', autor: 'Diego Ruiz', categoria: 'Diseño' },
];

export default function ModeracionCursos() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.badge}>Módulo Admin</Text>
                <Text style={styles.title}>Moderación de Cursos</Text>
                <Text style={styles.sub}>Revisa y aprueba los cursos publicados por la comunidad.</Text>

                <View style={styles.list}>
                    {CURSOS_PENDIENTES_MOCK.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <Text style={styles.cursoTitulo}>{item.titulo}</Text>
                            <Text style={styles.infoText}>Autor: <Text style={styles.highlight}>{item.autor}</Text></Text>
                            <Text style={styles.infoText}>Categoría: <Text style={styles.highlight}>{item.categoria}</Text></Text>

                            <View style={styles.rowBtns}>
                                <Pressable style={styles.btnAprobar}>
                                    <Text style={styles.btnTextAprobar}>Aprobar</Text>
                                </Pressable>
                                <Pressable style={styles.btnRechazar}>
                                    <Text style={styles.btnTextRechazar}>Rechazar</Text>
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
    cursoTitulo: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
    infoText: { fontSize: 13, color: '#94A3B8' },
    highlight: { color: '#CBD5E1', fontWeight: '600' },
    rowBtns: { flexDirection: 'row', gap: 10, marginTop: 10 },
    btnAprobar: { flex: 1, backgroundColor: '#4F46E5', padding: 10, borderRadius: 6, alignItems: 'center' },
    btnTextAprobar: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
    btnRechazar: { flex: 1, backgroundColor: '#334155', padding: 10, borderRadius: 6, alignItems: 'center' },
    btnTextRechazar: { color: '#F87171', fontWeight: 'bold', fontSize: 13 },
});