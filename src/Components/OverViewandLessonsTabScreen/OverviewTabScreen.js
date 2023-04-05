import React, { useState } from "react";
import { Text, View, } from "react-native";
import Styles from '../../style/OverViewTabScreenStyle';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/Entypo';
import IconG from 'react-native-vector-icons/AntDesign';
import TwoSliderimageScreen from './TwoSliderimageScreen';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const OverviewTabScreen = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    return (
        <Container>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
                <View style={Styles.overviewtabminview}>
                    <Text style={{
                        color: colorrdata,
                        fontFamily: 'DMSans-Bold',
                        fontSize: 18,
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    <Text style={Styles.loremlongparegraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                    <View style={Styles.scetiontwoview}>
                        <Text style={{
                            color: colorrdata,
                            fontFamily: 'DMSans-Bold',
                            fontSize: 18,
                        }}>What you will get</Text>
                        <View style={Styles.flexrowiconandtextview}>
                            <Icon
                                size={25}
                                name="navicon"
                                style={Styles.marginrightset}
                            />
                            <Text style={Styles.textsetvideo}>15 Video Lessons</Text>
                        </View>
                        <View style={Styles.flexrowiconandtextview}>
                            <IconF
                                size={25}
                                name="star"
                                style={Styles.marginrightset}
                            />
                            <Text style={Styles.textsetvideo}>Exclusive Learning Materials</Text>
                        </View>
                        <View style={Styles.flexrowiconandtextview}>
                            <IconG
                                size={25}
                                name="check"
                                style={Styles.marginrightset}
                            />
                            <Text style={Styles.textsetvideo}>100% Guaranteed</Text>
                        </View>
                    </View>
                    <Text style={{
                        color: colorrdata,
                        fontFamily: 'DMSans-Bold',
                        fontSize: 18,
                    }}>What you will learn</Text>
                    <TwoSliderimageScreen />
                </View>
            </LinearGradient>
        </Container>
    );
}
export default OverviewTabScreen;





