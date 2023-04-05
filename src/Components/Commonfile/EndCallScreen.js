import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { View, Text, Image, KeyboardAvoidingView, StatusBar, Platform, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import images from '../../image';
import Button from '../Commonfile/Button'
import Styles from '../../style/Endcall';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from "react-redux";

const EndCall = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
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
                <View style={Styles.setflexview}>
                  <View>
                    <Image source={images.videocall_two_img}
                      style={Styles.seimagstyleendcall}
                      resizeMode={'cover'} />
                  </View>
                  <View style={Styles.leftimage}>
                    <Image source={images.videocall_one_img}
                      style={Styles.seimagstyleendcall}
                      resizeMode={'cover'} />
                  </View>
                </View>
                <View style={Styles.flexcentertext}>
                  <Text style={{
                    color:colorrdata,
                    textAlign:'center',
                    fontFamily: 'DMSans-Medium',
                    fontSize:17,
                  }}>Call Ended</Text>
                  <Text style={{
                      color:colorrdata,
                      textAlign:'center',
                      fontFamily: 'DMSans-Medium',
                      fontSize:17,
                  }}>13:43</Text>
                </View>
                <Button onPress={
                      () => navigation.navigate('ReviewsScreen')
                    }  buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }} title="Ok"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </LinearGradient>


  );
}
export default EndCall;