import React, { useState } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, Pressable, } from "react-native";
import Styles from '../style/SignUpScreenStyle';
import IconG from 'react-native-vector-icons/Ionicons';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Style from '../style/CommonButtonStyle';
import Button from '../Components/Commonfile/Button';
import { useSelector } from "react-redux";

const SignUpScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { navigation } = props;
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
    useTogglePasswordVisibility();
  const [passwordtwo, setPasswordtwo] = useState('');

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');

  const [usernameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobilNoError, setMobileNoError] = useState(false);

  const saveAPIData = async () => {

    if (!username) {
      setUserNameError(true)
    } else {
      setUserNameError(false)
    }

    if (!mobileno) {
      setMobileNoError(true)
    } else {
      setMobileNoError(false)
    }

    if (!email) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }

    if (!username || !mobileno || !email) {
      return false
    }

    console.warn("next ");

    console.warn(username);
    console.warn(email);
    console.warn(mobileno);

    //api call
    const url = "http://api.cleverattiskills.com/api/User";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data)
      body: JSON.stringify({ username, email, mobileno })
    });
    // result = await result.json();
    result = await result.json();
    console.warn("response is :---" + result);
    // setData(result);
    if (result) {
      console.warn("Data added");
    }

  }




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
                  <View style={Style.setvaluximageview}>
                    <Image style={Style.valuxlogo} resizeMode="contain" source={require('../image/logo.png')} />
                  </View>
                  <Text style={{
                    fontSize: 30,
                    paddingBottom: 15,
                    paddingLeft: 5,
                    color: colorrdata,
                    fontFamily: 'DMSans-Bold',
                    textAlign: 'center'
                  }}>Sign Up</Text>
                  <TextInput
                    style={Styles.inputUnderLine}
                    // onChangeText={onChangeText}
                    onChangeText={(text) => setUserName(text)}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor={'black'}
                  />
                  {usernameError ? <Text style={Styles.erroText}>Please Enter Username</Text> : null}

                  <TextInput
                    style={Styles.inputUnderLine}
                    // onChangeText={onChangeText2}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                  />
                  {emailError ? <Text style={Styles.erroText}>Please Enter Email</Text> : null}

                  <TextInput
                    style={Styles.inputUnderLine}
                    // onChangeText={onChangeNumber}
                    onChangeText={(text) => setMobileNo(text)}
                    value={mobileno}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                  />
                  {mobilNoError ? <Text style={Styles.erroText}>Please Enter Phone Number</Text> : null}

                  {/* <View style={Styles.inputUnderLine}>
                    <View style={Styles.inputviewset}>
                      <TextInput
                        style={Styles.textpassworedsert}
                        name="Password"
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="newPassword"
                        secureTextEntry={passwordVisibility}
                        value={password}
                        enablesReturnKeyAutomatically
                        onChangeText={text => setPassword(text)}
                      />
                      <Pressable onPress={handlePasswordVisibility}>
                        <IconG name={rightIcon} size={25} style={Styles.eyeiconset} />
                      </Pressable>
                    </View>
                  </View>
                  <View style={Styles.inputUnderLine}>
                    <View style={Styles.inputviewset}>
                      <TextInput
                        style={Styles.textpassworedsert}
                        name="Password"
                        placeholder="Conform Password"
                        placeholderTextColor={'black'}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="newPassword"
                        secureTextEntry={passwordVisibilitytwo}
                        value={passwordtwo}
                        enablesReturnKeyAutomatically
                        onChangeText={text => setPasswordtwo(text)}
                      />
                      <Pressable onPress={handlePasswordVisibilitytwo}>
                        <IconG name={rightIcontwo} size={25} style={Styles.eyeiconset} />
                      </Pressable>
                    </View>
                  </View> */}

                  <View style={Styles.accountbutton}>
                    <Button title='Sign Up' onPress={saveAPIData} />
                    {/* <Button
                      title="Sign Up"
                      onPress={
                        () => navigation.navigate('RegistrationSuccessful')
                      }
                    /> */}
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
export default SignUpScreen;
