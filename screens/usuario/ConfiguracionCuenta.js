
import React from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    Switch,
    StyleSheet,
    Platform
} from 'react-native';

export default function ConfiguracionCuenta() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.content}>

                    <Text style={styles.title}>Configuración de cuenta</Text>
                    <Text style={styles.sub}>Edita tus datos personales.</Text>

                    <View style={styles.form}>

                        <Text style={styles.label}>Nombre completo</Text>
<<<<<<< HEAD
                        <TextInput style={styles.input} placeholder="Ej. Lucía Torres" placeholderTextColor="#64748B" editable={false} />

                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput style={styles.input} placeholder="Ej. lucia.torres@email.com" placeholderTextColor="#64748B" keyboardType="email-address" editable={false} />

                        <Text style={styles.label}>Nueva contraseña</Text>
                        <TextInput style={styles.input} placeholder="Mínimo 8 caracteres" placeholderTextColor="#64748B" secureTextEntry editable={false} />

                        <Text style={styles.label}>Confirmar contraseña</Text>
                        <TextInput style={styles.input} placeholder="Repite tu contraseña" placeholderTextColor="#64748B" secureTextEntry editable={false} />

                        {/* Preferencias con Switch */}
=======
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. Lucía Torres"
                            placeholderTextColor="#94A3B8"
                            editable={false}
                        />

                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. lucia.torres@email.com"
                            placeholderTextColor="#94A3B8"
                            keyboardType="email-address"
                            editable={false}
                        />

                        <Text style={styles.label}>Nueva contraseña</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mínimo 8 caracteres"
                            placeholderTextColor="#94A3B8"
                            secureTextEntry
                            editable={false}
                        />

                        <Text style={styles.label}>Confirmar contraseña</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Repite tu contraseña"
                            placeholderTextColor="#94A3B8"
                            secureTextEntry
                            editable={false}
                        />

>>>>>>> 422d5aa (Proyecto acabado)
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Notificaciones</Text>
                            <Switch
                                trackColor={{ false: '#334155', true: '#4F46E5' }}
                                thumbColor="#FFFFFF"
                                value={true}
                                onValueChange={() => {}}
                            />
                        </View>

                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Perfil visible para la comunidad</Text>
                            <Switch
                                trackColor={{ false: '#334155', true: '#4F46E5' }}
                                thumbColor="#FFFFFF"
                                value={false}
                                onValueChange={() => {}}
                            />
                        </View>

                        <Pressable style={styles.btn}>
                            <Text style={styles.btnText}>Guardar cambios</Text>
                        </Pressable>

                        <Pressable style={styles.btnOutline}>
                            <Text style={styles.btnOutlineText}>Cerrar sesión</Text>
                        </Pressable>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: { 
        flex: 1, 
        backgroundColor: '#0F172A' // Fondo principal oscuro
    },
    content: { 
        padding: 20, 
        paddingTop: 40 
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
    form: { 
        gap: 12 
    },
    label: { 
        color: '#E2E8F0', 
        fontSize: 14, 
        fontWeight: '600' 
    },
    input: { 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        padding: 12, 
        color: '#FFFFFF' 
    },
    switchRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#1E293B', 
        borderColor: '#334155', 
        borderWidth: 1, 
        borderRadius: 8, 
        padding: 12 
    },
    switchText: { 
        color: '#E2E8F0', 
        fontSize: 14 
    },
    btn: { 
        backgroundColor: '#4F46E5', 
        padding: 14, 
        borderRadius: 8, 
        alignItems: 'center', 
        marginTop: 10 
    },
    btnText: { 
        color: '#FFFFFF', 
        fontWeight: 'bold' 
    },
    btnOutline: { 
        borderColor: '#EF4444', // Rojo adaptado para modo oscuro
        borderWidth: 1, 
        padding: 14, 
        borderRadius: 8, 
        alignItems: 'center' 
    },
    btnOutlineText: { 
        color: '#EF4444', 
        fontWeight: 'bold' 
    },
});
=======

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
        color: '#FFFFFF',
        marginBottom: 4
    },

    sub: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 20
    },

    form: {
        gap: 12
    },

    label: {
        color: '#E2E8F0',
        fontSize: 14,
        fontWeight: '600'
    },

    input: {
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        color: '#FFFFFF'
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        borderColor: '#334155',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12
    },

    switchText: {
        color: '#E2E8F0',
        fontSize: 14
    },

    btn: {
        backgroundColor: '#4F46E5',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },

    btnText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    btnOutline: {
        borderColor: '#F87171',
        borderWidth: 1,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },

    btnOutlineText: {
        color: '#F87171',
        fontWeight: 'bold'
    }

});
>>>>>>> 422d5aa (Proyecto acabado)
