import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

export default function PerfilUsuario() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Foto (círculo con iniciales), nombre y estado */}
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>LT</Text>
                    </View>
                    <Text style={styles.name}>Lucía Torres</Text>
                    <Text style={styles.badge}>Disponible para intercambiar</Text>
                </View>

                {/* Saldo de créditos */}
                <View style={styles.creditCard}>
                    <Text style={styles.creditLabel}>Créditos disponibles</Text>
                    <Text style={styles.creditValue}>120 créditos</Text>
                </View>

                {/* Estadísticas */}
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>4.9</Text>
                        <Text style={styles.statLabel}>Calificación</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>24</Text>
                        <Text style={styles.statLabel}>Intercambios</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>2025</Text>
                        <Text style={styles.statLabel}>Miembro desde</Text>
                    </View>
                </View>

                {/* Habilidades */}
                <Text style={styles.section}>Mis habilidades</Text>
                <View style={styles.chips}>
                    <Text style={styles.chip}>JavaScript</Text>
                    <Text style={styles.chip}>Python</Text>
                    <Text style={styles.chip}>SQL</Text>
                    <Text style={styles.chip}>XAMPP</Text>
                </View>

                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Editar perfil</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40, gap: 16 },
    header: { alignItems: 'center', gap: 6 },
    avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#704DE8', alignItems: 'center', justifyContent: 'center' },
    avatarText: { color: '#FFF', fontSize: 32, fontWeight: 'bold' },
    name: { fontSize: 24, fontWeight: 'bold', color: '#252238' },
    badge: { color: '#1F9D6B', fontSize: 12, fontWeight: 'bold' },
    creditCard: { backgroundColor: '#704DE8', borderRadius: 8, padding: 20 },
    creditLabel: { color: '#EEE9FC', fontSize: 14 },
    creditValue: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginTop: 4 },
    statsRow: { flexDirection: 'row', gap: 10 },
    statBox: { flex: 1, backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 12, alignItems: 'center' },
    statValue: { color: '#252238', fontSize: 18, fontWeight: 'bold' },
    statLabel: { color: '#898598', fontSize: 11, marginTop: 2 },
    section: { color: '#252238', fontSize: 16, fontWeight: 'bold' },
    chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    chip: { backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, color: '#704DE8', fontWeight: '600', paddingVertical: 6, paddingHorizontal: 12 },
    btn: { backgroundColor: '#704DE8', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});