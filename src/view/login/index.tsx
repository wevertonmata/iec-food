import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

import styles from './styles';

type RootStackParamList = {
    Feed: undefined;
    App: undefined;
};

const Login: React.FC = ({ navigation }: any) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

function handleNavigateBack() {
    navigation.goBack();
}

return (
    <SafeAreaView style={styles.window}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={handleNavigateBack}>
                        <Icons name="chevron-left" size={60} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Login</Text>
                </View>

                <View style={styles.medium}>
                    <View style={styles.TextPadding}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email..."
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    <View style={styles.TextPadding}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Senha..."
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                    <View style={styles.TextPadding}>
                        <TouchableOpacity
                            style={styles.ButtomBlack}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={styles.ButtomTitleBlack}>Logar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AreaSubTitle}>
                        <TouchableOpacity
                            style={styles.SubTitle}
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={styles.TextSubTitle}>Não possui conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;