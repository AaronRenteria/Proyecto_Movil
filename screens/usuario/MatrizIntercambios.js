import React from 'react';
import { SafeAreaView, FlatList, View, Text, Pressable, StyleSheet } from 'react-native';

const intercambios = [
    { id: '1', usuario: 'Mateo Ruiz', miCurso: 'Mentoría de JavaScript', suCurso: 'Python: resuelve tus dudas', estado: 'En curso' },
    { id: '2', usuario: 'Diego Martín', miCurso: 'Configura tu entorno XAMPP', suCurso: 'Primeros pasos con C#', estado: 'Pendiente' },
    { id: '3', usuario: 'Ana López', miCurso: 'Revisión de SQL', suCurso: 'Fundamentos de C++', estado: 'En curso' },
];

export default function MatrizIntercambios() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={intercambios}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>Intercambios activos</Text>
                        <Text style={styles.sub}>Tus trueques de cursos con otros usuarios.</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardTop}>
                            <Text style={styles.user}>{item.usuario}</Text>
                            <Text style={item.estado === 'En curso' ? styles.badgeOk : styles.badgeWait}>{item.estado}</Text>
                        </View>
                        <Text style={styles.label}>Tú ofreces</Text>
                        <Text style={styles.course}>{item.miCurso}</Text>
                        <Text style={styles.label}>A cambio recibes</Text>
                        <Text style={styles.course}>{item.suCurso}</Text>
                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Ver seguimiento</Text>
                        </Pressable>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                ListEmptyComponent={<Text style={styles.empty}>Aún no tienes intercambios activos.</Text>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#252238', marginBottom: 4 },
    sub: { fontSize: 14, color: '#898598', marginBottom: 20 },
    card: { backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 14, gap: 4 },
    cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
    user: { color: '#252238', fontSize: 16, fontWeight: 'bold' },
    badgeOk: { color: '#1F9D6B', fontSize: 12, fontWeight: 'bold' },
    badgeWait: { color: '#D98A0B', fontSize: 12, fontWeight: 'bold' },
    label: { color: '#898598', fontSize: 12, marginTop: 4 },
    course: { color: '#393548', fontSize: 14, fontWeight: '600' },
    btn: { backgroundColor: '#704DE8', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
    empty: { color: '#898598', textAlign: 'center', marginTop: 30 },
});