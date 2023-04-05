import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import Styles from '../../style/ChartScreen';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import images from '../../image';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';

const ChartScreenset = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
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
                  <View style={Styles.marginbottomsetspace}>
                    <View style={Styles.flexrowjucentertwo}>
                      <View style={Styles.leftimage}>
                        <Image source={images.videocall_four_img} style={Styles.seimagstyleendcall} resizeMode={'cover'} />
                      </View>
                      <View style={Styles.messageminviewowner}>
                        <Text style={Styles.textcolormessage}>Hello Sir, Good Morning.</Text>
                        <Text style={Styles.textcolormessagetwoset}>03:16</Text>
                      </View>
                    </View>
                    <Text style={Styles.datesndtimecolor}>10 Feb,2022</Text>
                  </View>
                  <View style={Styles.marginbottomsetspace}>
                    <View style={Styles.flexrowjucenter}>
                      <View style={{
                        backgroundColor: colorrdata,
                        paddingTop: 5,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        width: '70%',
                        borderBottomLeftRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}>
                        <Text style={Styles.textcolormessage}>Good morning Alex.</Text>
                        <View style={Styles.flexcheckset}>
                          <View>
                            <Text style={Styles.textcolormessagetwosettwo}>03:18</Text>
                          </View>
                          <View style={Styles.setrighticonviewstyle}>
                            <IconL color="white" name="check" />
                            <IconL color="white" style={Styles.seticonpotion} name="check" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.marginbottomsetspace}>
                    <View style={Styles.flexrowjucentertwo}>
                      <View style={Styles.leftimage}>
                        <Image source={images.videocall_four_img} style={Styles.seimagstyleendcall} resizeMode={'cover'} />
                      </View>
                      <View style={Styles.messageminviewowner}>
                        <Text style={Styles.textcolormessage}>Can you please allow me two extra hours to submit my assignment?</Text>
                        <Text style={Styles.textcolormessagetwoset}>03:19</Text>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.marginbottomsetspace}>
                    <View style={Styles.flexrowjucenter}>
                      <View style={{
                        backgroundColor: colorrdata,
                        paddingTop: 10,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        width: '70%',
                        borderBottomLeftRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}>
                        <Text style={Styles.textcolormessage}>Sure, I'm allowing you 2 more hours. Try to be on time next time.</Text>
                        <View style={Styles.flexcheckset}>
                          <View>
                            <Text style={Styles.textcolormessagetwosettwo}>03:19</Text>
                          </View>
                          <View style={Styles.setrighticonviewstyle}>
                            <IconL color="white" name="check" />
                            <IconL color="white" style={Styles.seticonpotion} name="check" />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.marginbottomsetspace}>
                    <View style={Styles.flexrowjucentertwo}>
                      <View style={Styles.leftimage}>
                        <Image source={images.videocall_four_img} style={Styles.seimagstyleendcall} resizeMode={'cover'} />
                      </View>
                      <View style={Styles.messageminviewowner}>
                        <Text style={Styles.textcolormessage}>Thank you so much sir.  I'll try my best. </Text>
                        <Text style={Styles.textcolormessagetwoset}>03:20</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={Styles.flexrowjucentertwo}>
                      <View style={Styles.leftimage}>
                        <Image source={images.videocall_four_img} style={Styles.seimagstyleendcall} resizeMode={'cover'} />
                      </View>
                      <View style={Styles.leftimagelike}>
                        <IconL name="like1" color={'#ffcc5b'} size={35} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
          <View style={Styles.postionabsoluteview}>
            <View style={Styles.textmessageview}>
              <View style={Styles.flexrowsetsendmesasagew}>
                <View>
                  <TextInput
                    style={Styles.textinputborderbottom}
                    placeholder="Write a reply..."
                    placeholderTextColor={'gray'}
                  />
                </View>
                <View style={Styles.flexrowimaginations}>
                  <TouchableOpacity>
                    <IconP name="grin" size={25} />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.setmarginrightlikeicon}>
                    <IconO name="send" color={colorrdata} size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Container>
  );
};
export default ChartScreenset;
