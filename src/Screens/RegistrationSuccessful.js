import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, } from "react-native";
import Styles from '../style/SignUpScreenStyle';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Style from '../style/CommonButtonStyle';
import Button from '../Components/Commonfile/Button'

const RegistrationSuccessful = (props) => {
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
                    <View style={Style.setvaluximageview}>
                      <Image style={Style.valuxlogo} resizeMode="contain" source={require('../image/logo.png')} />
                    </View>
                    <View style={Styles.succefullimgviewtwo}>
                      <Image style={Styles.succefullyimg} resizeMode="contain" source={require('../image/awards.png')} />
                    </View>
                    <Text style={Styles.accounttext}>Account Created!</Text>
                    <Text style={Styles.accounttextsuccessfully}>Your Account has been Created Successfully</Text>
                    <View style={Styles.accountbutton}>
                      <Button
                        title="Get Started"
                        onPress={
                          () => navigation.navigate('HomeScsreen')
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
export default RegistrationSuccessful;
