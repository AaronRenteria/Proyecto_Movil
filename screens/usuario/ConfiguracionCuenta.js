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
                        <TextInput style={styles.input} placeholder="Ej. Lucía Torres" placeholderTextColor="#9993A8" editable={false} />

                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput style={styles.input} placeholder="Ej. lucia.torres@email.com" placeholderTextColor="#9993A8" keyboardType="email-address" editable={false} />

                        <Text style={styles.label}>Nueva contraseña</Text>
                        <TextInput style={styles.input} placeholder="Mínimo 8 caracteres" placeholderTextColor="#9993A8" secureTextEntry editable={false} />

                        <Text style={styles.label}>Confirmar contraseña</Text>
                        <TextInput style={styles.input} placeholder="Repite tu contraseña" placeholderTextColor="#9993A8" secureTextEntry editable={false} />

                        {/* Preferencias con Switch (valor fijo porque solo es interfaz) */}
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Notificaciones</Text>
                            <Switch
                                trackColor={{ false: '#E8E5EF', true: '#704DE8' }}
                                thumbColor="#FFF"
                                value={true}
                                onValueChange={() => {}}
                            />
                        </View>
                        <View style={styles.switchRow}>
                            <Text style={styles.switchText}>Perfil visible para la comunidad</Text>
                            <Switch
                                trackColor={{ false: '#E8E5EF', true: '#704DE8' }}
                                thumbColor="#FFF"
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
    container: { flex: 1, backgroundColor: '#F8F7FC' },
    content: { padding: 20, paddingTop: 40 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#252238', marginBottom: 4 },
    sub: { fontSize: 14, color: '#898598', marginBottom: 20 },
    form: { gap: 12 },
    label: { color: '#393548', fontSize: 14, fontWeight: '600' },
    input: { backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 12, color: '#393548' },
    switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#E8E5EF', borderWidth: 1, borderRadius: 8, padding: 12 },
    switchText: { color: '#393548', fontSize: 14 },
    btn: { backgroundColor: '#704DE8', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    btnText: { color: '#FFF', fontWeight: 'bold' },
    btnOutline: { borderColor: '#D64545', borderWidth: 1, padding: 14, borderRadius: 8, alignItems: 'center' },
    btnOutlineText: { color: '#D64545', fontWeight: 'bold' },
});