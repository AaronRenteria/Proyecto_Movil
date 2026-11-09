import React from 'react';
import { SafeAreaView, FlatList, View, Text, Pressable, StyleSheet } from 'react-native';

// Arreglo de datos de la lista (selected solo sirve para mostrar cómo se ve una opción elegida)
const intereses = [
    { id: '1', nombre: 'React', selected: true },
    { id: '2', nombre: 'JavaScript', selected: true },
    { id: '3', nombre: 'SQL', selected: false },
    { id: '4', nombre: 'Python', selected: false },
    { id: '5', nombre: 'Java', selected: false },
    { id: '6', nombre: 'C++', selected: false },
    { id: '7', nombre: 'C#', selected: false },
    { id: '8', nombre: 'XAMPP', selected: false },
];

export default function SeleccionIntereses() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={intereses}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.content}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.step}>Paso 1 de 1</Text>
                        <Text style={styles.title}>¿Qué quieres aprender?</Text>
                        <Text style={styles.sub}>Elige tus tecnologías de interés para mostrarte cursos a tu medida.</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable style={[styles.chip, item.selected && styles.chipSelected]}>
                        <Text style={[styles.chipText, item.selected && styles.chipTextSelected]}>{item.nombre}</Text>
                    </Pressable>
                )}
                ListFooterComponent={
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Continuar</Text>
                    </Pressable>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40 },
    step: { fontSize: 12, color: '#704DE8', fontWeight: 'bold', marginBottom: 4 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#252238', marginBottom: 4 },
    sub: { fontSize: 14, color: '#898598', marginBottom: 20 },
    chip: { flex: 1, margin: 6, paddingVertical: 22, backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, alignItems: 'center' },
    chipSelected: { backgroundColor: '#704DE8', borderColor: '#704DE8' },
    chipText: { color: '#393548', fontSize: 16, fontWeight: '600' },
    chipTextSelected: { color: '#FFF' },
    btn: { backgroundColor: '#704DE8', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 20 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
});