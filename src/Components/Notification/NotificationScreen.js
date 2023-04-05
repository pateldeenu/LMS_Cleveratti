import React from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import Styles from '../../style/NotificationScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import Container from '../../Components/Commonfile/Container';
import { useSelector } from "react-redux";

const NotificationScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
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
              <View style={Styles.keybordtopviewstyle}>
                <View style={Styles.minflexview}>
                  <View style={Styles.minviewsigninscreen}>
                    <TouchableOpacity style={Styles.whiteboxwhishlist}>
                      <View style={Styles.flexDirectiwhilist}>
                        <View style={{
                          backgroundColor: colorrdata,
                          width: 80,
                          height: 80,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 100,
                        }}>
                          <Image style={{ height: 25, width: 25, tintColor: 'white' }} resizeMode='cover' source={require('../../image/belliocnset.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <Text style={Styles.designfonttext}>Bigest Sale Of The Year</Text>
                          <Text style={Styles.dolardigittext}>Biggest Sale Of the year started now only on Learn pro.browser courses and start learning now....</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} >
                      <View style={Styles.flexDirectiwhilist}>
                        <View style={{
                          backgroundColor: colorrdata,
                          width: 80,
                          height: 80,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 100,
                        }}>
                          <Image style={{ height: 25, width: 25, tintColor: 'white' }} resizeMode='cover' source={require('../../image/belliocnset.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <Text style={Styles.designfonttext}>Bigest Offer on New Co...</Text>
                          <Text style={Styles.dolardigittext}>Top New Courses at Lowest Price.Avail 10% instarnt Discount* on HDFC Cards.only ...</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
export default NotificationScreen;
