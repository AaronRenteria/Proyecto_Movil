import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';

const METRICAS_MOCK = [
  { id: '1', titulo: 'Usuarios Totales', valor: '1,240' },
  { id: '2', titulo: 'Cursos Activos', valor: '85' },
  { id: '3', titulo: 'Créditos Circulando', valor: '45,200' },
  { id: '4', titulo: 'Intercambios Hoy', valor: '32' },
];

export default function DashboardAdmin() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.badge}>Panel de Control</Text>
        <Text style={styles.title}>Dashboard Admin</Text>
        <Text style={styles.sub}>Resumen global del estado de la plataforma.</Text>

        <View style={styles.grid}>
          {METRICAS_MOCK.map((item) => (
            <View key={item.id} style={styles.metricCard}>
              <Text style={styles.metricTitle}>{item.titulo}</Text>
              <Text style={styles.metricValue}>{item.valor}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Actividad Reciente</Text>
        <View style={styles.activityBox}>
          <Text style={styles.activityText}>• Nuevo usuario registrado: Juan Pérez</Text>
          <Text style={styles.activityText}>• Curso enviado a revisión: React Native Avanzado</Text>
          <Text style={styles.activityText}>• Reporte resuelto: #104</Text>
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
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 24 },
  metricCard: { width: '48%', backgroundColor: '#1E293B', padding: 14, borderRadius: 8, borderColor: '#334155', borderWidth: 1 },
  metricTitle: { fontSize: 12, color: '#94A3B8', marginBottom: 6 },
  metricValue: { fontSize: 20, fontWeight: 'bold', color: '#818CF8' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 10 },
  activityBox: { backgroundColor: '#1E293B', padding: 14, borderRadius: 8, borderColor: '#334155', borderWidth: 1, gap: 8 },
  activityText: { color: '#CBD5E1', fontSize: 13 },
});