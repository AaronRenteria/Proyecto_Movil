import React from 'react';
import { SafeAreaView, SectionList, View, Text, StyleSheet } from 'react-native';

// Dos secciones: créditos ganados y créditos gastados
const movimientos = [
    {
        title: 'Créditos ganados',
        data: [
            { id: 'g1', titulo: 'Bono de bienvenida', fecha: '1 sep 2026', cantidad: 50, tipo: 'ganado' },
            { id: 'g2', titulo: 'Mentoría de JavaScript', fecha: '6 oct 2026', cantidad: 25, tipo: 'ganado' },
            { id: 'g3', titulo: 'Revisión de JavaScript', fecha: '29 sep 2026', cantidad: 40, tipo: 'ganado' },
            { id: 'g4', titulo: 'Configura tu entorno XAMPP', fecha: '2 oct 2026', cantidad: 35, tipo: 'ganado' },
        ],
    },
    {
        title: 'Créditos gastados',
        data: [
            { id: 's1', titulo: 'Python: resuelve tus dudas', fecha: '7 oct 2026', cantidad: 30, tipo: 'gastado' },
        ],
    },
];

export default function BilleteraCreditos() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={movimientos}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>Mi billetera</Text>
                        <Text style={styles.sub}>Consulta los créditos que ganaste y gastaste.</Text>
                        <View style={styles.balanceCard}>
                            <Text style={styles.balanceLabel}>Créditos disponibles</Text>
                            <Text style={styles.balanceValue}>120 créditos</Text>
                        </View>
                    </View>
                }
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                )}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.rowTitle}>{item.titulo}</Text>
                            <Text style={styles.rowDate}>{item.fecha}</Text>
                        </View>
                        <Text style={item.tipo === 'ganado' ? styles.plus : styles.minus}>
                            {item.tipo === 'ganado' ? '+' : '-'}{item.cantidad} cr.
                        </Text>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#252238', marginBottom: 4 },
    sub: { fontSize: 14, color: '#898598', marginBottom: 20 },
    balanceCard: { backgroundColor: '#704DE8', borderRadius: 8, padding: 20, marginBottom: 10 },
    balanceLabel: { color: '#EEE9FC', fontSize: 14 },
    balanceValue: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginTop: 4 },
    sectionTitle: { color: '#252238', fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 10 },
    row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 12 },
    rowTitle: { color: '#252238', fontSize: 14, fontWeight: '600' },
    rowDate: { color: '#898598', fontSize: 12, marginTop: 2 },
    plus: { color: '#1F9D6B', fontSize: 15, fontWeight: 'bold' },
    minus: { color: '#D64545', fontSize: 15, fontWeight: 'bold' },
});