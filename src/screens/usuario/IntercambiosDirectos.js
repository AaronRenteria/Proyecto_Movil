
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

export default function IntercambiosDirectos() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.title}>Intercambios Directos</Text>
                <Text style={styles.sub}>Administra las solicitudes de intercambio de cursos.</Text>

                <Text style={styles.sectionTitle}>Solicitudes Recibidas</Text>

                <View style={styles.card}>
                    <Text style={styles.user}>Aaron Renteria</Text>
                    <Text style={styles.label}>Quiere intercambiar:</Text>
                    <Text style={styles.course}>Curso de JavaScript</Text>

                    <Text style={styles.label}>Ofrece a cambio:</Text>
                    <Text style={styles.course}>Curso de Diseño Web</Text>

                    <Text style={styles.status}>Estado: Pendiente</Text>

                    <View style={styles.buttons}>
                        <Pressable style={styles.accept}>
                            <Text style={styles.btnText}>Aceptar</Text>
                        </Pressable>

                        <Pressable style={styles.reject}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.user}>Jesus Lopez</Text>
                    <Text style={styles.label}>Quiere intercambiar:</Text>
                    <Text style={styles.course}>Curso de Python</Text>

                    <Text style={styles.label}>Ofrece a cambio:</Text>
                    <Text style={styles.course}>Curso de Bases de Datos</Text>

                    <Text style={styles.status}>Estado: Pendiente</Text>

                    <View style={styles.buttons}>
                        <Pressable style={styles.accept}>
                            <Text style={styles.btnText}>Aceptar</Text>
                        </Pressable>

                        <Pressable style={styles.reject}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.user}>Adrian</Text>
                    <Text style={styles.label}>Quiere intercambiar:</Text>
                    <Text style={styles.course}>Curso de React Native</Text>

                    <Text style={styles.label}>Ofrece a cambio:</Text>
                    <Text style={styles.course}>Curso de HTML y CSS</Text>

                    <Text style={styles.status}>Estado: Pendiente</Text>

                    <View style={styles.buttons}>
                        <Pressable style={styles.accept}>
                            <Text style={styles.btnText}>Aceptar</Text>
                        </Pressable>

                        <Pressable style={styles.reject}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </Pressable>
                    </View>
                </View>

                <Pressable style={styles.back}>
                    <Text style={styles.backText}>Regresar</Text>
                </Pressable>

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
        paddingTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5
    },
    sub: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 25
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15
    },
    card: {
        backgroundColor: '#1E293B',
        borderRadius: 10,
        padding: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#334155'
    },
    user: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#818CF8',
        marginBottom: 12
    },
    label: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 7
    },
    course: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 3
    },
    status: {
        color: '#FBBF24',
        fontSize: 13,
        marginTop: 15,
        fontWeight: 'bold'
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 15
    },
    accept: {
        flex: 1,
        backgroundColor: '#16A34A',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    reject: {
        flex: 1,
        backgroundColor: '#DC2626',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    back: {
        backgroundColor: '#334155',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    backText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});
