import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, } from 'react-native';
import Style from '../style/PaymentscreenStyle';
import Styles from '../style/PaymentscreenStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import Alert from '../Components/Commonfile/SweetaelertModal';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const PaymentScreen = (props) => {
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);
  const { navigation } = props;

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
      <View style={Styles.setbgcolor}>
        <StatusBar barStyle="light-content" backgroundColor="#046665" />
        <View style={Styles.container}>
          <View style={Styles.setviewstyle}>
            <View style={Styles.setminviewwidth}>
              <View style={Styles.chideContainer}>
                <View style={Styles.sectionView}>
                  <Text style={Styles.leblaStyle}><Text style={{
                    width: '100%',
                    fontFamily: 'DMSans-Medium',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    color: colorrdata,
                    fontSize: 17,
                    textAlign: 'left',
                    paddingLeft: 15,
                    paddingBottom: 10,
                  }}>Data Science With Python</Text> </Text>
                </View>
                <View style={Styles.sectionView}>
                  <Image source={require('../image/icon_point.png')} style={Styles.iconStyle} resizeMode={'stretch'} />
                  <Text style={Styles.leblaStyle}>Your Course  Price  <Text style={{
                    width: '100%',
                    fontFamily: 'DMSans-Medium',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    color: colorrdata,
                    fontSize: 17,
                    textAlign: 'left',
                    paddingLeft: 15,
                    paddingBottom: 10,
                  }}>$ 220.09</Text></Text>
                </View>
              </View>
              <Text style={{
                width: '100%',
                fontFamily: 'DMSans-Medium',
                fontStyle: 'normal',
                fontWeight: '700',
                color: colorrdata,
                fontSize: 17,
                textAlign: 'left',
                paddingLeft: 0,
                paddingTop: 20,
                paddingBottom: 10,
              }}>Pay With</Text>
              <View style={Styles.whitebgcolor}>
                <View style={Styles.setnormalborderview}>
                  <TouchableOpacity style={Styles.flexrowsetnew} onPress={() => { setDisplayAlert(1) }}>
                    <View style={Styles.flexrowsimpleimagtext}>
                      <View style={Styles.setimagewidth}>
                        <Image source={require('../image/icon_gpay.png')} style={Styles.app_icon} />
                      </View>
                      <Text style={Styles.upi_label}>GPay</Text>
                    </View>
                    <View>
                      <Icon name="right" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Styles.setnormalborderview}>
                  <TouchableOpacity style={Styles.flexrowsetnew} onPress={() => { setDisplayAlert(1) }}>
                    <View style={Styles.flexrowsimpleimagtext}>
                      <View style={Styles.setimagewidth}>
                        <Image source={require('../image/paypallogo.png')} style={Styles.app_icontwo} />
                      </View>
                      <Text style={Styles.upi_label}>PayPal</Text>
                    </View>
                    <View>
                      <Icon name="right" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={Styles.setnormalborderview}>
                  <TouchableOpacity style={Styles.flexrowsetnew} onPress={() => navigation.navigate('CreditCardScreen')}>
                    <View style={Styles.flexrowsimpleimagtext}>
                      <View style={Styles.setimagewidth}>
                        <Icon name="creditcard" style={Styles.app_iconthree} size={25}></Icon>
                      </View>
                      <Text style={Styles.upi_label}>Credit Card</Text>
                    </View>
                    <View>
                      <Icon name="right" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={Style.centeredView}>
            {console.log(DisplayAlert, 'print')}
            {DisplayAlert !== 0 ?
              <Alert message='Payment Successful' link={'CongrejulationScreen'} />
              :
              null
            }
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
export default PaymentScreen;
