
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

export default function PerfilUsuario() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>LT</Text>
                    </View>
                    <Text style={styles.name}>Lucía Torres</Text>
                    <Text style={styles.badge}>Disponible para intercambiar</Text>
                </View>

                <View style={styles.creditCard}>
                    <Text style={styles.creditLabel}>Créditos disponibles</Text>
                    <Text style={styles.creditValue}>120 créditos</Text>
                </View>

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
<<<<<<< HEAD
    container: { 
        flex: 1, 
        backgroundColor: '#0F172A' // Fondo principal oscuro
    },
    content: { 
        padding: 20, 
        paddingTop: 40, 
        gap: 16 
    },
    header: { 
        alignItems: 'center', 
        gap: 6 
    },
    avatar: { 
        width: 96, 
        height: 96, 
        borderRadius: 48, 
        backgroundColor: '#4F46E5', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    avatarText: { 
        color: '#FFFFFF', 
        fontSize: 32, 
        fontWeight: 'bold' 
    },
    name: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#FFFFFF' 
    },
    badge: { 
        color: '#10B981', // Verde esmeralda adaptado para modo oscuro
        fontSize: 12, 
        fontWeight: 'bold' 
    },
    creditCard: { 
        backgroundColor: '#1E293B', 
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8, 
        padding: 20 
    },
    creditLabel: { 
        color: '#94A3B8', 
        fontSize: 14 
    },
    creditValue: { 
        color: '#818CF8', 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginTop: 4 
    },
    statsRow: { 
        flexDirection: 'row', 
        gap: 10 
    },
    statBox: { 
        flex: 1, 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        padding: 12, 
        alignItems: 'center' 
    },
    statValue: { 
        color: '#FFFFFF', 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    statLabel: { 
        color: '#94A3B8', 
        fontSize: 11, 
        marginTop: 2 
    },
    section: { 
        color: '#FFFFFF', 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    chips: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 8 
    },
    chip: { 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        color: '#818CF8', 
        fontWeight: '600', 
        paddingVertical: 8, 
        paddingHorizontal: 14 
    },
    btn: { 
        backgroundColor: '#4F46E5', 
        padding: 14, 
        borderRadius: 8, 
        alignItems: 'center', 
        marginTop: 10 
    },
    btnText: { 
        color: '#FFFFFF', 
        fontWeight: 'bold' 
    },
});
=======
    container: {
        flex: 1,
        backgroundColor: '#0F172A'
    },
    content: {
        padding: 20,
        paddingTop: 40,
        gap: 16
    },
    header: {
        alignItems: 'center',
        gap: 6
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    badge: {
        color: '#34D399',
        fontSize: 12,
        fontWeight: 'bold'
    },
    creditCard: {
        backgroundColor: '#4F46E5',
        borderRadius: 8,
        padding: 20
    },
    creditLabel: {
        color: '#E2E8F0',
        fontSize: 14
    },
    creditValue: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 4
    },
    statsRow: {
        flexDirection: 'row',
        gap: 10
    },
    statBox: {
        flex: 1,
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        alignItems: 'center'
    },
    statValue: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    statLabel: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 2
    },
    section: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    chips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    chip: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        color: '#818CF8',
        fontWeight: '600',
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    btn: {
        backgroundColor: '#4F46E5',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
>>>>>>> 422d5aa (Proyecto acabado)
