
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';

const categorias = [
    'Todos',
    'Programación',
    'Diseño',
    'Marketing',
    'Idiomas'
];

const cursos = [
    {
        id: '1',
        titulo: 'React desde cero',
        instructor: 'María González',
        categoria: 'Programación',
        creditos: '50 créditos',
        nivel: 'Principiante',
        calificacion: '4.8',
        inicial: 'R'
    },
    {
        id: '2',
        titulo: 'Diseño con Figma',
        instructor: 'Carlos Méndez',
        categoria: 'Diseño',
        creditos: '40 créditos',
        nivel: 'Intermedio',
        calificacion: '4.9',
        inicial: 'F'
    },
    {
        id: '3',
        titulo: 'JavaScript básico',
        instructor: 'Andrea López',
        categoria: 'Programación',
        creditos: '60 créditos',
        nivel: 'Principiante',
        calificacion: '4.7',
        inicial: 'J'
    },
    {
        id: '4',
        titulo: 'Marketing digital',
        instructor: 'Luis Ramírez',
        categoria: 'Marketing',
        creditos: '35 créditos',
        nivel: 'Principiante',
        calificacion: '4.6',
        inicial: 'M'
    }
];

export default function BusquedaFiltros() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Explorar cursos</Text>
                <Text style={styles.subtitle}>
                    Encuentra nuevas habilidades para aprender
                </Text>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>⌕</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar cursos..."
                        placeholderTextColor="#94A3B8"
                        editable={false}
                    />
                </View>

                <View style={styles.filterHeader}>
                    <Text style={styles.sectionTitle}>Categorías</Text>
                    <Text style={styles.clearText}>Limpiar filtros</Text>
                </View>

                <View style={styles.categories}>
                    {categorias.map((categoria, index) => (
                        <Pressable
                            key={categoria}
                            style={[
                                styles.categoryButton,
                                index === 0 && styles.categorySelected
                            ]}
                        >
                            <Text style={[
                                styles.categoryText,
                                index === 0 && styles.categorySelectedText
                            ]}>
                                {categoria}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                <View style={styles.filterRow}>
                    <View style={styles.filterBox}>
                        <Text style={styles.filterLabel}>Nivel</Text>
                        <Text style={styles.filterValue}>Todos los niveles</Text>
                    </View>

                    <View style={styles.filterBox}>
                        <Text style={styles.filterLabel}>Ordenar por</Text>
                        <Text style={styles.filterValue}>Más populares</Text>
                    </View>
                </View>

                <View style={styles.resultsHeader}>
                    <Text style={styles.sectionTitle}>Cursos disponibles</Text>
                    <Text style={styles.resultsCount}>4 resultados</Text>
                </View>

                {cursos.map(curso => (
                    <View key={curso.id} style={styles.courseCard}>
                        <View style={styles.courseTop}>
                            <View style={styles.courseImage}>
                                <Text style={styles.courseInitial}>
                                    {curso.inicial}
                                </Text>
                            </View>

                            <View style={styles.courseInfo}>
                                <Text style={styles.courseTitle}>
                                    {curso.titulo}
                                </Text>
                                <Text style={styles.instructor}>
                                    {curso.instructor}
                                </Text>
                                <Text style={styles.category}>
                                    {curso.categoria}
                                </Text>
                            </View>

                            <Text style={styles.rating}>★ {curso.calificacion}</Text>
                        </View>

                        <View style={styles.courseFooter}>
                            <Text style={styles.level}>{curso.nivel}</Text>
                            <Text style={styles.credits}>{curso.creditos}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A'
    },
    content: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 35
    },
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 6,
        marginBottom: 20
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 9,
        paddingHorizontal: 13,
        height: 48
    },
    searchIcon: {
        color: '#818CF8',
        fontSize: 23,
        marginRight: 10
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 13
    },
    filterHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    clearText: {
        color: '#818CF8',
        fontSize: 11
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    categoryButton: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 20,
        paddingVertical: 9,
        paddingHorizontal: 13
    },
    categorySelected: {
        backgroundColor: '#4F46E5',
        borderColor: '#4F46E5'
    },
    categoryText: {
        color: '#CBD5E1',
        fontSize: 11
    },
    categorySelectedText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    filterRow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 18
    },
    filterBox: {
        flex: 1,
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 8,
        padding: 12
    },
    filterLabel: {
        color: '#94A3B8',
        fontSize: 10
    },
    filterValue: {
        color: '#FFFFFF',
        fontSize: 11,
        marginTop: 7
    },
    resultsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 27,
        marginBottom: 13
    },
    resultsCount: {
        color: '#94A3B8',
        fontSize: 11
    },
    courseCard: {
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        padding: 14,
        marginBottom: 12
    },
    courseTop: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    courseImage: {
        width: 52,
        height: 52,
        borderRadius: 9,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseInitial: {
        color: '#818CF8',
        fontSize: 23,
        fontWeight: 'bold'
    },
    courseInfo: {
        flex: 1,
        marginLeft: 11
    },
    courseTitle: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold'
    },
    instructor: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    category: {
        color: '#818CF8',
        fontSize: 10,
        marginTop: 4
    },
    rating: {
        color: '#FBBF24',
        fontSize: 11,
        fontWeight: 'bold'
    },
    courseFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#334155',
        marginTop: 13,
        paddingTop: 11
    },
    level: {
        color: '#94A3B8',
        fontSize: 11
    },
    credits: {
        color: '#34D399',
        fontSize: 11,
        fontWeight: 'bold'
    }
});
