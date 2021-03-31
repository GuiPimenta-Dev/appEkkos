import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

export default function Inbox({ navigation }) {

    const activitys = [
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "A @user17387827981 está em live agora!",
            live: true
        },
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "started following you",
            live: false
        },
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "started following you",
            live: false
        },
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "started following you",
            live: false
        },
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "started following you",
            live: false
        },
        {
            img: require('../../assets/EkkosLogo.png'),
            user: "TikTok",
            message: "started following you",
            live: false
        },
    ]

    return (
        <Container>
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <View style={{ marginVertical: 10 }}><Text style={{ color: '#444' }}>This month</Text></View>
                {activitys.map((activity, key) => (
                    <TouchableOpacity style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }} key={key}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderColor: '#333',
                                borderWidth: StyleSheet.hairlineWidth,
                                backgroundColor: '#000'
                            }}
                            source={activity.img} />
                        <View style={{
                            width: '50%'
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>{activity.user}</Text>
                            <Text style={{ color: '#333' }}>{activity.message}</Text>
                        </View>
                        {activity.live ? (
                            <View style={{
                                width: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <FontAwesomeIcon icon={faChevronRight} size={20} color="#E5E5E5" />
                            </View>
                        ) : (
                                <View style={{
                                    width: '25%',
                                    padding: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#E5E5E5'
                                }}>
                                    <Text style={{ color: '#010101' }}>Friends</Text>
                                </View>
                            )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Container>
    )
}