import React from "react";
import {View,Text,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView} from "react-native";
import Styles from '../../style/MyCourseTabbarScreenStyle';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/AntDesign';
import IconS from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const MyCourseTabbarScreen = (props) => {
  const {navigation} = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  return (
    <>
      <View style={Styles.minstyleviewphotograpgy}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
          colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              width: '100%',
              height: 'auto',
            }}>
            <KeyboardAvoidingView enabled>
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
                <View style={Styles.minflexview}>
                  <View style={Styles.minviewsigninscreen}></View>
                  <View style={Styles.whilistminbody}>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Microsoft Azure Certifications</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$59</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Web Development & Design</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />

                            </View>
                            <Text style={Styles.dolardigittext}>$84</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Programming and Frameworks</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$74</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Jenking Beginner Course</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/20 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$59</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    {/* <View style={Styles.topspaceview}> */}
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Data Science with python</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$64</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Databases</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>4h 30m</Text>
                            </View>
                            <View>
                              <Text style={Styles.barbarvideo}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$64</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>App Devlopment</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>4h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>
                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$79</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('OverViewandLessonsTabScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={Styles.setimagestykle} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <View style={Styles.flexrowheart}>
                            <Text style={Styles.designfonttext}>Core Engineering</Text>
                            <IconF
                              size={25}
                              name="hearto"
                              style={Styles.setheart}
                            />
                          </View>
                          <View style={Styles.videoandtextsetup}>
                            <View style={Styles.settimevideo}>
                              <IconF
                                size={15}
                                name="clockcircleo"
                                style={Styles.clockimage}
                              />
                              <Text style={Styles.timevodeoset}>5h 30m</Text>
                            </View>
                            <View>
                              <Text style={{
                                fontSize: 14,
                                fontFamily: 'DMSans-Bold',
                                color: colorrdata,
                                width: '100%',
                                marginTop: '3%',
                              }}>20/12 Videos</Text>
                            </View>
                          </View>
                          <View style={Styles.flexrowheartsettwo}>

                            <View style={Styles.stariconview}>
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <Icon
                                size={15}
                                name="star"
                                style={Styles.stariconstyle}
                              />
                              <IconS
                                size={15}
                                name="star"
                                style={Styles.chengecolorstyle}
                              />
                            </View>
                            <Text style={Styles.dolardigittext}>$50</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </KeyboardAvoidingView>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};
export default MyCourseTabbarScreen;

