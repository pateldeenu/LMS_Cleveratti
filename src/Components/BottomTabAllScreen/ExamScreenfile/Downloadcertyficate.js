import React, { useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, } from "react-native";
import Styles from '../../../style/SignUpScreenStyle';
import Container from '../../Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Button from "../../Commonfile/Button";

const Downloadcertyficate = (props) => {
    const {navigation} = props;

    return (
        <Container>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                <View style={Styles.minstyleviewphotograpgytwo}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <KeyboardAvoidingView enabled>
                            <View style={Styles.keybordtopviewstyle}>
                                <View style={Styles.minflexview}>
                                    <View style={Styles.minviewsigninscreen}>
                                        
                                        <View style={Styles.succefullimgviewsrtwo}>
                                            <Image style={Styles.succefullyimg} resizeMode="contain" source={require('../../../image/homeslider5.png')} />
                                        </View>
                                        <Text style={Styles.accounttext}>Congratulations!</Text>
                                        <Text style={Styles.accounttextsuccessfully}>You have received a course completion certificate.</Text>
                                        <View style={Styles.accountbutton}>
                                            <Button title="Download Certificate"
                                            onPress={
                                                () => navigation.navigate('ExamResultsScreen')
                                            } 
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </LinearGradient>
        </Container>
    );
};

export default Downloadcertyficate;
