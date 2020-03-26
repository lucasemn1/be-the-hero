import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import style from './style';
import logoImage from '../../assets/logo.png';

export default function Incidents() {
    const navegation = useNavigation();
    const incident = useRoute().params.incident;
    const message = `Olá, ${incident.name}. Visualizei o caso "${incident.title}" que você cadastrou no Be The Hero e gostaria de ajudar.`;
    const ongWhatsappNumber = '+5584981662842';

    function navegateToIncidents() {
        navegation.goBack();
    }

    async function sendEmail() {
        await MailComposer.composeAsync({
            subject: `Contato de ajuda para o caso ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message
        });
    }

    async function sendWhatsAppMessage() {
        //Funciona através de deeplinkin
        Linking.openURL(`whatsapp://send?phone=${ongWhatsappNumber}&text=${message}`);
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImage} />
                <Feather
                    name="arrow-left"
                    size={28}
                    color="#e02041"
                    onPress={navegateToIncidents}
                />
            </View>

            <View style={style.incident}>
                <Text style={style.incidentProperty}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name}, {incident.city} - {incident.uf}</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.title}</Text>

                <Text style={style.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={style.incidentValue}>{incident.description}</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={[style.incidentValue, { marginBottom: 0 }]}>{incident.value}</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={ sendWhatsAppMessage }>
                        <Text style={ style.actionText }> Whatsapp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={ sendEmail }>
                        <Text style={ style.actionText }> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}