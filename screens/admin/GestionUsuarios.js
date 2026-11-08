import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const USUARIOS_MOCK = [
    { id: '1', nombre: 'Aarón Renteria', correo: 'aaron@correo.com', estado: 'Activo' },
    { id: '2', nombre: 'Omar Perez', correo: 'omar@correo.com', estado: 'Activo' },
    { id: '3', nombre: 'Jesus Gómez', correo: 'jesus@correo.com', estado: 'Suspendido' },
];

export default function GestionUsuarios() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.badge}>Módulo Admin</Text>
                <Text style={styles.title}>Gestión de Usuarios</Text>
                <Text style={styles.sub}>Administra y modera a los usuarios de la plataforma.</Text>

                <View style={styles.list}>
                    {USUARIOS_MOCK.map((item) => (
                        <View key={item.id} style={styles.card}>
                            <View style={styles.headerCard}>
                                <Text style={styles.nombre}>{item.nombre}</Text>
                                <Text style={[styles.estado, item.estado === 'Suspendido' && styles.suspendido]}>
                                    {item.estado}
                                </Text>
                            </View>
                            <Text style={styles.correo}>{item.correo}</Text>

                            <View style={styles.rowBtns}>
                                <Pressable style={styles.btnEditar}>
                                    <Text style={styles.btnText}>Editar</Text>
                                </Pressable>
                                <Pressable style={styles.btnBloquear}>
                                    <Text style={styles.btnTextBloquear}>Bloquear</Text>
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
    card: { backgroundColor: '#1E293B', padding: 14, borderRadius: 8, borderColor: '#334155', borderWidth: 1, gap: 4 },
    headerCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    nombre: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
    estado: { fontSize: 12, color: '#4ADE80', fontWeight: 'bold' },
    suspendido: { color: '#F87171' },
    correo: { fontSize: 13, color: '#94A3B8', marginBottom: 8 },
    rowBtns: { flexDirection: 'row', gap: 10 },
    btnEditar: { flex: 1, backgroundColor: '#334155', padding: 8, borderRadius: 6, alignItems: 'center' },
    btnText: { color: '#CBD5E1', fontSize: 12, fontWeight: 'bold' },
    btnBloquear: { flex: 1, backgroundColor: '#7F1D1D', padding: 8, borderRadius: 6, alignItems: 'center' },
    btnTextBloquear: { color: '#FECACA', fontSize: 12, fontWeight: 'bold' },
});