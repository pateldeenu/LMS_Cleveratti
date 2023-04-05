import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, ImageBackground, KeyboardAvoidingView, TextInput, TouchableHighlight, } from "react-native";
import Styles from '../style/CreaditCardStyle';
import Button from '../Components/Commonfile/Button';
import images from '../image';
import LinearGradient from 'react-native-linear-gradient';
import Alert from '../Components/Commonfile/SweetaelertModal';

const SaveCardScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [DisplayAlert, setDisplayAlert] = useState(0);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  return (
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
                <View style={Styles.minviewsigninscreen}>
                  <View style={Styles.setwidthimage}>
                    <Image source={images.Crideit_card} resizeMode='cover' style={Styles.creditcard} />
                  </View>
                  <View style={Styles.setstyleinputtext}>
                    <Text style={Styles.textstyle}>Name</Text>
                    <TextInput
                      placeholder="Devid Warner"
                      onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                      style={Styles.inputstyle}
                      placeholderTextColor={'gray'}
                    />
                  </View>
                  <Text></Text>
                  <View style={Styles.setstyleinputtext}>
                    <View style={Styles.flexrowsetcemera}>
                      <View>
                        <Text style={Styles.textstyle}>Card Number</Text>
                        <TextInput
                          placeholder="6878 6682 3045 6622"
                          keyboardType="numeric"
                          onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                          style={Styles.inputstyle}
                          placeholderTextColor={'gray'}
                          maxLength={16}
                        />                     
                      </View>
                    </View>
                  </View>
                  <View style={Styles.flexrowsetinput}>
                    <View style={Styles.setstyleinputtexttwo}>
                      <Text style={Styles.textstyle}>mm/yy</Text>
                      <TextInput
                        placeholder="08/24"
                        onChangeText={(text) => onChangeText(text, 'mobile')}
                        value={mobileNumber}
                        keyboardType="numeric"
                        style={Styles.inputstyle}
                        placeholderTextColor={'gray'}
                        maxLength={4}
                      />
                    </View>
                    <View style={Styles.setstyleinputtexttwo}>
                      <Text style={Styles.textstyle}>cvv</Text>
                      <TextInput
                        placeholder="502"
                        onChangeText={(text) => onChangeText(text, 'CvvNumber')}
                        value={CvvNumber}
                        keyboardType="numeric"
                        style={Styles.inputstyle}
                        placeholderTextColor={'gray'}
                        maxLength={3}
                      />
                    </View>
                  </View>
                  <View style={Styles.setbuttonstyle}>
                    <Button title="Conform" onPress={() => { setDisplayAlert(1) }} />
                  </View>
                  <View style={Styles.centeredView}>
                    {console.log(DisplayAlert, 'print')}
                    {DisplayAlert !== 0 ?
                      <Alert message='Payment Successful' link={'CongrejulationScreen'} />
                      :
                      null
                    }
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
export default SaveCardScreen;
