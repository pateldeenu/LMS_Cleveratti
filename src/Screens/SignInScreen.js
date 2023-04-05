import React, { useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, Pressable, TextInput, } from "react-native";
import Styles from '../style/SignInScreenstyle';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Commonfile/Button';
import images from '../image/index';
import style from '../style/CommonButtonStyle';
import { useDispatch, useSelector } from "react-redux";
import { userLoginApiHit } from "../Network/AllContentAction";


const SignInScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  // const [userName, setUserName] = useState("abc@gmail.com");
  // const [password, setPassword] = useState("12345");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const loginApi = async () => {

    console.warn("call");

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!email || !password) {
      return false
    }

  }


  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();


  const dispatch = useDispatch();

  const getData = async () => {

    let loginRes = await dispatch(userLoginApiHit(userName, password));
    console.log('rrrr', loginRes)

    // if (loginRes.status == 200) {
    //   console.log('rrrr',JSON.stringify(loginRes))
    // }

  };


  return (
    <Container>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
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
                  <View style={style.setvaluximageview}>
                    <Image style={style.valuxlogo} resizeMode="contain" source={require('../image/logo.png')} />
                  </View>

                  <Text style={Styles.signintextset, {
                    color: colorrdata, fontSize: 30,
                    paddingBottom: 15,
                    paddingLeft: 5,
                    fontFamily: 'DMSans-Bold',
                    textAlign: 'center'
                  }}>Sign in</Text>

                  <View style={Styles.textinputview}>
                    <TextInput
                      style={Styles.inputUnderLine}
                      // onChangeText={onChangeText}
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                      placeholder="Email"
                      placeholderTextColor={'black'}
                    />

                    {emailError ? <Text style={Styles.erroText}>Please Enter Email.</Text> : null}

                    <View style={Styles.spaceview}>
                      <View style={Styles.inputUnderLine}>
                        <View style={Styles.inputviewset}>
                          <TextInput
                            style={Styles.textpassworedsert}
                            name="password"
                            placeholder="Password"
                            placeholderTextColor={'black'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="newPassword"
                            secureTextEntry={passwordVisibility}
                            value={password}
                            enablesReturnKeyAutomatically
                            // onChangeText={text => setPassword(text)}
                            onChangeText={(text) => setPassword(text)}
                          />
                          <Pressable onPress={handlePasswordVisibility}>
                            <IconG name={rightIcon} size={25} style={Styles.eyeiconset} />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    {passwordError ? <Text style={Styles.erroText}>Please Enter Password.</Text> : null}
                  </View>

                  <View style={Styles.signuptextview}>

                    <Text style={Styles.signuptext}>Don’t have account? <Text onPress={
                      () => navigation.navigate('SignUpScreen')
                    } style={Styles.signupbold, { color: colorrdata }}>Sign Up</Text></Text>

                  </View>
                  <View style={Styles.minviewallsetus}>
                    <Button
                      title="Sign In"
                      buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}

                      // onPress={
                      //   () => getData()
                      // }

                      onPress={() => loginApi()}

                    />
                    <View style={Styles.loginwithfacbookminview}>
                      <View style={Styles.settwobuttonwidth}>
                        <Button
                          title="Facebook"
                          iconname="sc-facebook"
                          size={40}
                          buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
                          onPress={
                            () => navigation.navigate('OtpverfyScreen')
                          }
                        />
                      </View>
                      <View style={Styles.settwobuttonwidth}>
                        <Button
                          title="Google"
                          buttonStyle={Styles.googlebuttonmstyleset}
                          buttonTextStyle={{ color: colorrdata, }}
                          onPress={
                            () => navigation.navigate('SignUpScreen')
                          }
                          imagesource={images.google_img}
                        />
                      </View>
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

export default SignInScreen;
