import React, { useState } from "react";
import { Text, View, ScrollView, Image, KeyboardAvoidingView, FlatList, } from "react-native";
import Styles from '../../style/MeetingDeatailesStyle';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import images from '../../image';
import Button from '../../Components/Commonfile/Button';

const MeetingsListData = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const [mittingiddata] = useState([
    {
      "id": 1,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Morning Class",
      "setbutton": <Button title="Join" onPress={() => navigation.navigate('VideoCallScreen')} buttonStyle={{ height: 38 }} />,
      "Datetext": "Date :",
      "Date": "23/07/2022",
      "starttime": "Start Time :",
      "settime": "09:24 PM",
      "simpleline": "|",
    },
    {
      "id": 2,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Extra Session",
      "setbutton": <Button buttonStyle={{ backgroundColor: 'white', borderColor: 'red', height: 38 }} buttonTextStyle={{ color: 'red' }} title="Ended" />,
      "Datetext": "Date :",
      "Date": "01/06/2022",
    },
    {
      "id": 2,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Yoga Session",
      "setbutton": <Button title="Join" onPress={() => navigation.navigate('VideoCallScreen')} buttonStyle={{ height: 38 }} />,
      "Datetext": "Date :",
      "Date": "28/02/2022",
      "starttime": "Start Time :",
      "settime": "08:24 AM",
      "simpleline": "|",
    },
    {
      "id": 3,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "General Class",
      "setbutton": <Button buttonStyle={{ backgroundColor: 'white', borderColor: 'red', height: 38 }} buttonTextStyle={{ color: 'red' }} title="Ended" />,
      "Datetext": "Date :",
      "Date": "12/05/2022",
    },
    {
      "id": 4,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Virtual Meeting",
      "setbutton": <Button buttonStyle={{ backgroundColor: 'white', borderColor: 'red', height: 38 }} buttonTextStyle={{ color: 'red' }} title="Ended" />,
      "Datetext": "Date :",
      "Date": "21/04/2022",
    },
    {
      "id": 5,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Extra Session",
      "setbutton": <Button title="Join" onPress={() => navigation.navigate('VideoCallScreen')} buttonStyle={{ height: 38 }} />,
      "Datetext": "Date :",
      "Date": "26/10/2022",
      "starttime": "Start Time :",
      "settime": "11:24 PM",
      "simpleline": "|",
    },
  ])
  const Meetingiddata = (item, index) => {
    return (
      <View style={Styles.bgcolorwhiteset}>
        <View style={Styles.flexrowsettextandbutton}>
          <View style={Styles.textwidth}>
            <Text style={{
              fontSize: 18,
              color: colorrdata,
              fontWeight: '700'
            }}>{item.text}</Text>
          </View>
          <View style={Styles.setbuttonwidthstyle}>
            {item.setbutton}
          </View>
        </View>
        <View style={Styles.flexrowsettextandbuttontwoset}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              fontSize: 14,
              color: colorrdata,
              fontWeight: '700'
            }}>{item.Datetext} </Text>
            <Text style={{
              fontSize: 14,
              color: colorrdata,
              fontWeight: '700'
            }}>{item.Date}</Text>
          </View>
          <View>
            <Text>{item.simpleline}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              fontSize: 14,
              color: colorrdata,
              fontWeight: '700'
            }}>{item.starttime} </Text>
            <Text style={{
              fontSize: 14,
              color: colorrdata,
              fontWeight: '700'
            }}> {item.settime}</Text>
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
                  <FlatList
                    data={mittingiddata}
                    renderItem={({ item, index }) => Meetingiddata(item, index)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={Styles.setflex}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </LinearGradient>
    </Container>
  );
};
export default MeetingsListData;
