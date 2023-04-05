import React, { useEffect } from 'react';
import { View, StatusBar, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style/SplashScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../src/redux/action/CommonAction";

StatusBar.setBackgroundColor('rgba(254,238,245,1)');
const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Swiperscreen' : 'SignInScreen'
        ),
      );
    }, 2500);
    dispatch(color_picker_set_action('#0055a6'))
  }, []);

  return (
    <View style={Styles.minstyleviewphotograpgy}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: '100%',
          }}>
          <View style={Styles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={Styles.minviewsigninscreen}>
                <View>
                  <Image style={Styles.valuxlogoimg} resizeMode="contain" source={require('./image/main-logos.png')} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
export default SplashScreen;
