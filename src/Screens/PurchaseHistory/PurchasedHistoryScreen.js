import React, { useState } from "react";
import { Text, View, ScrollView, Image, KeyboardAvoidingView, FlatList, } from "react-native";
import Styles from '../../style/PurchasedHistoryStyle';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import images from '../../image';
import Button from '../../Components/Commonfile/Button';

const PurchasedHistoryScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const [courcesdata] = useState([
    {
      "id": 1,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_five} />,
      "text": "Learn Singing",
      "usertext": "Sun, 22 - Jun - 2022",
      "timetextset": "Date :",
      "totalprice": "Total Price :",
      "dolardprice": "$ 80.00",
      "paymenttypetext": "Payment Type :",
      "googlepay": "Google Pay",
      "buttonset": <Button buttonStyle={Styles.buttonheight} title="Invoice" buttonTextStyle={Styles.buttontextset} />
    },
    {
      "id": 2,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_four} />,
      "text": "App Devlopment",
      "usertext": "Tue, 12 - Aug - 2022",
      "timetextset": "Date :",
      "totalprice": "Total Price :",
      "dolardprice": "$ 120.00",
      "paymenttypetext": "Payment Type :",
      "googlepay": "Paypal",
      "buttonset": <Button title="Invoice" buttonStyle={Styles.buttonheight} buttonTextStyle={Styles.buttontextset} />
    },
    {
      "id": 3,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_three} />,
      "text": "Jenkins Beginner Course",
      "usertext": "Mon, 20 - Feb - 2022",
      "timetextset": "Date :",
      "totalprice": "Total Price :",
      "dolardprice": "$ 60.00",
      "paymenttypetext": "Payment Type :",
      "googlepay": "Paytm",
      "buttonset": <Button title="Invoice" buttonStyle={Styles.buttonheight} buttonTextStyle={Styles.buttontextset} />
    },
    {
      "id": 4,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_two} />,
      "text": "Python Programming Masterclass",
      "usertext": "Tue, 29 - Fri - 2022",
      "timetextset": "Date :",
      "totalprice": "Total Price :",
      "dolardprice": "$ 125.00",
      "paymenttypetext": "Payment Type :",
      "googlepay": "Google Pay",
      "buttonset": <Button title="Invoice" buttonStyle={Styles.buttonheight} buttonTextStyle={Styles.buttontextset} />
    },
    {
      "id": 5,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Data Science With Python",
      "usertext": "Sat, 19 - Jan - 2022",
      "timetextset": "Date :",
      "totalprice": "Total Price :",
      "dolardprice": "$ 138.00",
      "paymenttypetext": "Payment Type :",
      "googlepay": "Paypal",
      "buttonset": <Button title="Invoice" buttonStyle={Styles.buttonheight} buttonTextStyle={Styles.buttontextset} />
    }
  ])
  const courcesdataitem = (item, index) => {
    return (
      <View style={Styles.whiteboxwhishlist} onPress={() => navigation.navigate('ArtPhotographyScreen')}>
        <View style={Styles.flexDirectiwhilist}>
          <View>
            {item.image}
          </View>
          <View style={Styles.textviewsetwhishlist}>
            <Text style={{
              fontSize: 18,
              fontFamily: 'DMSans-Bold',
              color: colorrdata,
              fontWeight: '700',
              width: '100%'
            }}>{item.text}</Text>
            <View style={Styles.flexrowsetusericon}>
              <Text style={{
                fontSize: 16,
                fontFamily: 'DMSans-Bold',
                color: colorrdata,
                fontWeight: '700',
              }}>{item.timetextset}</Text>
              <Text style={Styles.settextusert}>{item.usertext}</Text>
            </View>
            <View style={Styles.flexrowsetusericon}>
              <Text style={{
                fontSize: 15,
                fontFamily: 'DMSans-Bold',
                color: colorrdata,
                fontWeight: '700',
              }}>{item.totalprice}</Text>
              <Text style={Styles.settextusert}>{item.dolardprice}</Text>
            </View>
          </View>
        </View>
        <View style={Styles.minviewsetpaymenttype}>
          <View style={Styles.flexrowsetrpayment}>
            <Text style={{
              fontSize: 15,
              fontFamily: 'DMSans-Bold',
              color: colorrdata,
              fontWeight: '700',
            }}>{item.paymenttypetext}</Text>
            <Text style={Styles.settextusert}>{item.googlepay}</Text>
          </View>
          <View style={Styles.serftbuttonwidth}>
            {item.buttonset}
          </View>
        </View>
      </View>
    );
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
                  <View>
                    <FlatList
                      data={courcesdata}
                      renderItem={({ item, index }) => courcesdataitem(item, index)}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      style={Styles.setflex}
                    />
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
export default PurchasedHistoryScreen;
