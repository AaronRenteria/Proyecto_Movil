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
                        <Text style={styles.step}>Plataforma Nexo</Text>
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
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                            renderItem={({ item }) => (
                                <Pressable style={styles.catChip}>
                                    <Text style={styles.catText}>{item.nombre}</Text>
                                </Pressable>
                            )}
                        />

                        <Text style={[styles.section, { marginTop: 25 }]}>Cursos disponibles</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable style={styles.card}>
                        <View style={styles.thumb}>
                            <Text style={styles.thumbText}>{item.sigla}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitle}>{item.titulo}</Text>
                            <Text style={styles.cardSub}>{item.instructor} • {item.duracion}</Text>
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
    creditCard: { 
        backgroundColor: '#1E293B', 
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8, 
        padding: 20, 
        marginBottom: 20 
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
    section: { 
        color: '#FFFFFF', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 12 
    },
    catChip: { 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        paddingVertical: 10, 
        paddingHorizontal: 16 
    },
    catText: { 
        color: '#818CF8', 
        fontWeight: '600' 
    },
    card: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 12, 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        padding: 15 
    },
    thumb: { 
        width: 48, 
        height: 48, 
        borderRadius: 8, 
        backgroundColor: '#4F46E5', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    thumbText: { 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    cardTitle: { 
        color: '#FFFFFF', 
        fontSize: 14, 
        fontWeight: '600' 
    },
    cardSub: { 
        color: '#94A3B8', 
        fontSize: 12, 
        marginTop: 4 
    },
    price: { 
        color: '#818CF8', 
        fontWeight: 'bold',
        fontSize: 14
    },
});