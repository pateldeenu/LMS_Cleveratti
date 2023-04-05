import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, } from "react-native";
import Styles from '../style/SignUpScreenStyle';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Commonfile/Button';

const CongrejulationScreen = (props) => {
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
                                        <View style={Styles.succefullimgviewtwo}>
                                            <Image style={Styles.succefullyimg} resizeMode="contain" source={require('../image/homeslider5.png')} />
                                        </View>
                                        <Text style={Styles.accounttext}>Congratulations!</Text>
                                        <Text style={Styles.accounttextsuccessfully}>You have Successfully Completed the course!. We wish you new victoris, Partification and Success in all your endeavors!</Text>
                                        <View style={Styles.accountbutton}>
                                            <Button title="Leave Feedback"
                                                onPress={
                                                    () => navigation.navigate('ReviewsScreen')
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
export default CongrejulationScreen;
