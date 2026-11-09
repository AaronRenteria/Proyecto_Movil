
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

const lecciones = [
    { id: '1', titulo: 'Introducción al curso', duracion: '10 min' },
    { id: '2', titulo: 'Fundamentos de React', duracion: '20 min' },
    { id: '3', titulo: 'Componentes y propiedades', duracion: '25 min' },
    { id: '4', titulo: 'Estados y eventos', duracion: '30 min' },
    { id: '5', titulo: 'Proyecto final', duracion: '35 min' }
];

export default function FichaCurso() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.category}>PROGRAMACIÓN</Text>
                    <Text style={styles.title}>React desde cero</Text>
                    <Text style={styles.subtitle}>
                        Aprende a crear aplicaciones utilizando React paso a paso.
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>4.9</Text>
                        <Text style={styles.infoLabel}>Calificación</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>24</Text>
                        <Text style={styles.infoLabel}>Estudiantes</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoValue}>5</Text>
                        <Text style={styles.infoLabel}>Lecciones</Text>
                    </View>
                </View>

                <Text style={styles.section}>Sobre este curso</Text>
                <Text style={styles.description}>
                    Aprende los fundamentos de React, crea componentes,
                    administra estados y desarrolla tus primeras aplicaciones.
                    No necesitas experiencia avanzada para comenzar.
                </Text>

                <Text style={styles.section}>Instructor</Text>
                <View style={styles.instructorCard}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>CM</Text>
                    </View>

                    <View>
                        <Text style={styles.instructorName}>Carlos Méndez</Text>
                        <Text style={styles.instructorRole}>Instructor</Text>
                    </View>
                </View>

                <Text style={styles.section}>Temario del curso</Text>

                {lecciones.map(item => (
                    <View key={item.id} style={styles.lesson}>
                        <View style={styles.lessonNumber}>
                            <Text style={styles.numberText}>{item.id}</Text>
                        </View>

                        <View style={styles.lessonInfo}>
                            <Text style={styles.lessonTitle}>{item.titulo}</Text>
                            <Text style={styles.lessonDuration}>{item.duracion}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.priceCard}>
                    <Text style={styles.priceLabel}>Precio del curso</Text>
                    <Text style={styles.price}>50 créditos</Text>

                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Canjear curso</Text>
                    </Pressable>
                </View>
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
        paddingBottom: 30
    },
    header: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 20
    },
    category: {
        color: '#818CF8',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 14,
        marginTop: 8,
        lineHeight: 21
    },
    infoCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginTop: 16
    },
    infoItem: {
        alignItems: 'center'
    },
    infoValue: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoLabel: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    section: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 12
    },
    description: {
        color: '#CBD5E1',
        fontSize: 14,
        lineHeight: 22
    },
    instructorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 14,
        gap: 12
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    instructorName: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    instructorRole: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 3
    },
    lesson: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        gap: 12
    },
    lessonNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#818CF8',
        fontWeight: 'bold'
    },
    lessonInfo: {
        flex: 1
    },
    lessonTitle: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600'
    },
    lessonDuration: {
        color: '#94A3B8',
        fontSize: 11,
        marginTop: 4
    },
    priceCard: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 18,
        marginTop: 24
    },
    priceLabel: {
        color: '#94A3B8',
        fontSize: 13
    },
    price: {
        color: '#34D399',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5
    },
    btn: {
        backgroundColor: '#4F46E5',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
