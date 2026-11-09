
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

export default function ConfirmacionIntercambio() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>↔</Text>
                </View>

                <Text style={styles.title}>Confirmar intercambio</Text>
                <Text style={styles.subtitle}>
                    Revisa los detalles antes de completar tu canje.
                </Text>

                <View style={styles.courseCard}>
                    <Text style={styles.label}>CURSO SELECCIONADO</Text>
                    <Text style={styles.courseTitle}>React desde cero</Text>
                    <Text style={styles.instructor}>Instructor: Carlos Méndez</Text>
                    <Text style={styles.category}>Programación</Text>
                </View>

                <Text style={styles.section}>Resumen de créditos</Text>

                <View style={styles.summaryCard}>
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Saldo actual</Text>
                        <Text style={styles.rowValue}>120 créditos</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Costo del curso</Text>
                        <Text style={styles.expense}>-50 créditos</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.row}>
                        <Text style={styles.totalLabel}>Saldo restante</Text>
                        <Text style={styles.totalValue}>70 créditos</Text>
                    </View>
                </View>

                <View style={styles.notice}>
                    <Text style={styles.noticeTitle}>Información importante</Text>
                    <Text style={styles.noticeText}>
                        Al realizar este intercambio, el curso se agregará
                        a tu biblioteca y podrás consultar su contenido.
                    </Text>
                </View>

                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Confirmar intercambio</Text>
                </Pressable>

                <Pressable style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>Cancelar</Text>
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
        paddingTop: 35,
        paddingBottom: 30
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#1E293B',
        borderWidth: 1,
        borderColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    icon: {
        color: '#818CF8',
        fontSize: 35,
        fontWeight: 'bold'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 18
    },
    subtitle: {
        color: '#94A3B8',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 25
    },
    courseCard: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 18
    },
    label: {
        color: '#818CF8',
        fontSize: 11,
        fontWeight: 'bold'
    },
    courseTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    instructor: {
        color: '#94A3B8',
        fontSize: 13,
        marginTop: 7
    },
    category: {
        color: '#CBD5E1',
        fontSize: 12,
        marginTop: 12
    },
    section: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 12
    },
    summaryCard: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 18
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    rowLabel: {
        color: '#94A3B8',
        fontSize: 14
    },
    rowValue: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600'
    },
    expense: {
        color: '#F87171',
        fontSize: 14,
        fontWeight: 'bold'
    },
    divider: {
        height: 1,
        backgroundColor: '#334155',
        marginBottom: 15
    },
    totalLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'
    },
    totalValue: {
        color: '#34D399',
        fontSize: 17,
        fontWeight: 'bold'
    },
    notice: {
        backgroundColor: '#1E293B',
        borderLeftWidth: 4,
        borderLeftColor: '#818CF8',
        borderRadius: 8,
        padding: 15,
        marginTop: 20
    },
    noticeTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6
    },
    noticeText: {
        color: '#94A3B8',
        fontSize: 13,
        lineHeight: 20
    },
    btn: {
        backgroundColor: '#4F46E5',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 25
    },
    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14
    },
    cancelBtn: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    cancelText: {
        color: '#F87171',
        fontWeight: 'bold'
    }
});
