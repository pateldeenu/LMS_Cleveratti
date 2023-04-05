import React from "react";
import {  View, ScrollView, KeyboardAvoidingView, } from "react-native";
import Styles from '../../style/HomeScreenStyle';
import Container from '../../Components/Commonfile/Container';;
import LinearGradient from 'react-native-linear-gradient';
import FirstSliderimageHomeScreen from '../SliderScreenAllfile/FirstSliderimageHomeScreen';
import TwoSliderimageHomeScreen from '../SliderScreenAllfile/TwoSliderimageHomeScreen';
import ThreeSliderImageHomeScreen from '../SliderScreenAllfile/ThreeSliderImageHomeScreen';
import FourImageSliderHomeScreen from '../SliderScreenAllfile/FourImageSliderHomeScreen';
import FiveImageSliderHomeScreen from '../SliderScreenAllfile/FiveImageSliderHomeScreen';

const WishlistScreen = () => {
  return (
    <>
      <Container>
        <View style={Styles.minstyleviewphotograpgy}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                width: '100%',
                height: 'auto',
              }}>
              <KeyboardAvoidingView enabled>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                  colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
                  <View style={Styles.minflexview}>
                    <View style={Styles.minviewsigninscreen}>
                      
                      <FirstSliderimageHomeScreen />
                      <TwoSliderimageHomeScreen />
                      <ThreeSliderImageHomeScreen />
                      <FourImageSliderHomeScreen />
                      <FiveImageSliderHomeScreen />

                    </View>
                  </View>
                </LinearGradient>
              </KeyboardAvoidingView>
            </ScrollView>
          </LinearGradient>
        </View>
      </Container>
    </>
  );
};
export default WishlistScreen;


