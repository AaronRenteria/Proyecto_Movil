import React from 'react';
import { SafeAreaView, FlatList, View, Text, Pressable, StyleSheet } from 'react-native';

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
    container: { 
        flex: 1, 
        backgroundColor: '#0F172A' // Fondo principal oscuro
    },
    content: { 
        padding: 20, 
        paddingTop: 40 
    },
    step: { 
        fontSize: 12, 
        color: '#818CF8', 
        fontWeight: 'bold', 
        marginBottom: 4 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#FFFFFF', 
        marginBottom: 4 
    },
    sub: { 
        fontSize: 14, 
        color: '#94A3B8', 
        marginBottom: 20 
    },
    chip: { 
        flex: 1, 
        margin: 6, 
        paddingVertical: 22, 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        alignItems: 'center' 
    },
    chipSelected: { 
        backgroundColor: '#4F46E5', 
        borderColor: '#4F46E5' 
    },
    chipText: { 
        color: '#E2E8F0', 
        fontSize: 16, 
        fontWeight: '600' 
    },
    chipTextSelected: { 
        color: '#FFFFFF' 
    },
    btn: { 
        backgroundColor: '#4F46E5', 
        padding: 14, 
        borderRadius: 8, 
        alignItems: 'center', 
        marginTop: 20 
    },
    btnText: { 
        color: '#FFFFFF', 
        fontWeight: 'bold' 
    },
});