import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import style from './style';
import logoImage from '../../assets/logo.png';

import api from '../../services/api';

const Incidents = () => {
    const navegation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        loadIncidents();
    }, []);

    async function loadIncidents() {
        if( loading ){
            return;
        }

        if( totalItems > 0 && incidents.length === totalItems ){
            return;
        }

        setLoading(true);
        const response = await api.get(`incidents?page=${page}`);
        setTotalItems(response.headers['X-Total-Count']);
        setIncidents([...incidents, ...response.data.incidents]);
        setPage(page+1);
        setLoading(false);
    }

    function navegateToDetail(incident) {
        navegation.navigate('Detail', { incident });
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImage} />
                <Text style={style.headerText}>
                    <Text>
                        Total de <Text style={style.headerTextBold}>{totalItems} { totalItems > 1 ? 'casos': 'caso'}</Text>
                    </Text>
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList
                style={style.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id.toString())}
                showsVerticalScrollIndicator={false} //Barrinha de rolagem
                onEndReached={ loadIncidents } //Evento a ser carregador ao chegar ao fim
                onEndReachedThreshold={0.4} //Porcentagem de rolagem para acionar o onEndReached
                renderItem={({ item: incident }) => (
                    <View style={style.incident}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProperty}>CASO:</Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={style.incidentValue}>{incident.description}</Text>

                        <Text style={style.incidentProperty}>VALOR:</Text>
                        <Text style={style.incidentValue}>{ Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => navegateToDetail(incident) }
                        >
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02051" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
};

export default Incidents;