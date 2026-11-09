import React from 'react';
import { SafeAreaView, FlatList, View, Text, Pressable, StyleSheet } from 'react-native';

const categorias = [
    { id: '1', nombre: 'Python' },
    { id: '2', nombre: 'JavaScript' },
    { id: '3', nombre: 'Java' },
    { id: '4', nombre: 'C++' },
    { id: '5', nombre: 'C#' },
    { id: '6', nombre: 'XAMPP' },
];

const cursos = [
    { id: '1', sigla: 'Py', titulo: 'Python: resuelve tus dudas', instructor: 'Mateo Ruiz', duracion: '60 min', creditos: 30 },
    { id: '2', sigla: 'Ja', titulo: 'Java: tu primer proyecto', instructor: 'Diego Martín', duracion: '90 min', creditos: 35 },
    { id: '3', sigla: 'JS', titulo: 'Mentoría de JavaScript', instructor: 'Ana López', duracion: '60 min', creditos: 25 },
    { id: '4', sigla: 'C#', titulo: 'Primeros pasos con C#', instructor: 'Diego Martín', duracion: '45 min', creditos: 30 },
];

export default function HomeCatalogo() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cursos}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>Hola, Lucía 👋</Text>
                        <Text style={styles.sub}>¿Qué quieres aprender hoy?</Text>

                        <View style={styles.creditCard}>
                            <Text style={styles.creditLabel}>Tus créditos disponibles</Text>
                            <Text style={styles.creditValue}>120 créditos</Text>
                        </View>

                        <Text style={styles.section}>Explora por categoría</Text>
                        <FlatList
                            data={categorias}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                            renderItem={({ item }) => (
                                <Pressable style={styles.catChip}>
                                    <Text style={styles.catText}>{item.nombre}</Text>
                                </Pressable>
                            )}
                        />

                        <Text style={[styles.section, { marginTop: 20 }]}>Cursos disponibles</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable style={styles.card}>
                        <View style={styles.thumb}>
                            <Text style={styles.thumbText}>{item.sigla}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitle}>{item.titulo}</Text>
                            <Text style={styles.cardSub}>{item.instructor} - {item.duracion}</Text>
                        </View>
                        <Text style={styles.price}>{item.creditos} cr.</Text>
                    </Pressable>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#252238', marginBottom: 4 },
    sub: { fontSize: 14, color: '#898598', marginBottom: 20 },
    creditCard: { backgroundColor: '#704DE8', borderRadius: 8, padding: 20, marginBottom: 20 },
    creditLabel: { color: '#EEE9FC', fontSize: 14 },
    creditValue: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginTop: 4 },
    section: { color: '#252238', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
    catChip: { backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 },
    catText: { color: '#704DE8', fontWeight: '600' },
    card: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 12 },
    thumb: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#704DE8', alignItems: 'center', justifyContent: 'center' },
    thumbText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    cardTitle: { color: '#252238', fontSize: 14, fontWeight: '600' },
    cardSub: { color: '#898598', fontSize: 12, marginTop: 2 },
    price: { color: '#704DE8', fontWeight: 'bold' },
});