import React, { useState } from "react";
import { SF, SW, SH, } from '../Components/Commonfile/Dimensions';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, Pressable, Modal, } from "react-native";
import Styles from '../style/OtpVeryfyScreenStyle';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import IconF from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Container from '../Components/Commonfile/Container';
import Style from '../style/CommonButtonStyle';
import Button from '../Components/Commonfile/Button';
import { useSelector } from "react-redux";

const OtpverfyScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  return (
    <Container>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
        <View style={Styles.minstyleviewphotograpgy}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              width: '100%',
              height: 'auto',
            }}>
            <KeyboardAvoidingView enabled>
              <View style={Styles.minflexview}>
                <View style={Styles.minviewsigninscreen}>
                  <View style={Style.setvaluximageview}>
                    <Image style={Style.valuxlogo} resizeMode="contain" source={require('../image/logo.png')} />
                  </View>
                  <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    paddingBottom: 15,
                    color: colorrdata,
                    fontFamily: 'DMSans-Bold',
                  }}>Enter  6  Digit OTP</Text>
                  <Text style={Styles.paregraph}>Enter the OTP code from the phone we just sent you.</Text>
                  <OTPInputView
                    style={{ width: '100%', height: 100 }}
                    pinCount={6}
                    autoFocusOnLoad
                    codeInputFieldStyle={{
                      width: SW(50),
                      height: SH(61),
                      borderWidth: 2.5,
                      borderColor: colorrdata,
                      color: colorrdata,
                      fontSize: SF(28),
                      fontWeight: '700',
                      borderRadius: SH(7),
                    }}
                    codeInputHighlightStyle={{
                      borderWidth: 2.5,
                      borderColor: colorrdata,
                      color: colorrdata,
                      fontSize: SF(28),
                      fontWeight: '700',
                      borderRadius: SH(7),
                    }}
                  />
                  <View style={Styles.flexrowsettext}>
                    <Text style={Styles.paregraphotpbottom}>Didn't receive OTP Code!</Text>
                    <Pressable onPress={() => setModalVisibleTwo(true)} >
                      <Text style={Styles.resendtextbold}>Resend</Text>
                    </Pressable>
                  </View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleTwo}
                    onRequestClose={() => {
                    }}
                  >
                    <View style={Styles.centeredView}>
                      <View style={Styles.modalView}>
                        <View style={Styles.setshadowstylemodaltwo}>
                          <LinearGradient
                            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                            colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                            <View style={Styles.setiallpaddingmodal}>
                              <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                                <IconF
                                  size={27}
                                  name="close"
                                  color={colorrdata}
                                  style={Styles.icomcloseset}
                                />
                              </TouchableOpacity>
                              <View style={Styles.flexrowjusticenter}>
                                <View style={{
                                  borderWidth: 2,
                                  borderRadius: 222,
                                  borderColor: colorrdata,
                                  height: 80,
                                  width: 80,
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                  <IconF
                                    size={40}
                                    name="check"
                                    color={colorrdata}
                                  />
                                </View>
                              </View>
                              <Text style={Styles.otpsuccessfulltextmodal}>OTP sent successfully</Text>
                              <View style={Styles.buttonsetmoddletwobutton}>
                                <View>
                                  <Button
                                    title="Okay"
                                    onPress={
                                      () => navigation.navigate('RegistrationSuccessful')
                                    }
                                  />
                                </View>
                              </View>
                            </View>
                          </LinearGradient>
                        </View>
                      </View>
                    </View>
                  </Modal>
                  <View style={Styles.buttonstylviewset}>
                    <View style={Styles.accountbutton}>
                      <Button
                        title="Submit"
                        onPress={
                          () => navigation.navigate('RegistrationSuccessful')
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
export default OtpverfyScreen;
