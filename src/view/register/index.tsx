import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Feather';
import styles from './styles';


const Register: React.FC = ({ navigation }: any) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [checked, setChecked] = useState<'first' | 'second'>('first');


    function validPhone(phone: string): boolean {
        const regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
        return regex.test(phone);
    }

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNext() {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.window}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={handleNavigateBack}>
                        <Icons name="chevron-left" size={60} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Registro</Text>
                </View>

                <View style={styles.medium}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Nome..."
                        onChangeText={setName}
                        value={name}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email..."
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="(31) 98858-8787"
                        onChangeText={setNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Senha..."
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Confirmação Senha..."
                        secureTextEntry={true}
                        onChangeText={setPasswordConfirm}
                        value={passwordConfirm}
                    />
                    <View style={styles.radio}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color="black"
                        />
                        <Text style={styles.TextRadio}>Cliente</Text>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color="black"
                        />
                        <Text style={styles.TextRadio}>Admin</Text>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.ButtomBlack} onPress={handleNext}>
                        <Text style={styles.ButtomTitleBlack}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Register;