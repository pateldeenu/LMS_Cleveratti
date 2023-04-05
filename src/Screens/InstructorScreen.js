import React from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Image, } from 'react-native';
import Styles from '../style/DonHartScreenStyle';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const DonHartScreen = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Container>
      <View style={Styles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
          }}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
            <View style={Styles.keybordtopviewstyle}>
              <KeyboardAvoidingView enabled>
                <View style={Styles.minviewsigninscreen}>
                  <View style={Styles.imagcenter}>
                    <View>
                      <Image style={{ height: 100, width: 100, borderRadius: 100 }} resizeMode='cover' source={require('../image/homeslider7.png')} />
                      <Text style={Styles.allisonperry}>Don Hart</Text>
                    </View>
                  </View>
                  <View style={Styles.userdetailesview}>
                    <View style={Styles.bornandbirtdateviewtwo}>
                      <View style={Styles.widthsetalldetailes}>
                        <Text style={Styles.borntext}>Born</Text>
                      </View>
                      <View style={Styles.widthtwosetsevanty}>
                        <Text style={Styles.birthdatetext}>Nov 8th,1966</Text>
                      </View>
                    </View>
                    <View style={Styles.bordersetbottom}>
                      <View style={Styles.bornandbirtdateviewtwo}>
                        <View style={Styles.widthsetalldetailes}>
                          <Text style={Styles.borntext}>Country</Text>
                        </View>
                        <View style={Styles.widthtwosetsevanty}>
                          <Text style={Styles.birthdatetext}>Scotland</Text>
                        </View>
                      </View>
                    </View>
                    <View style={Styles.bornandbirtdateviewtwo}>
                      <View style={Styles.widthsetalldetailes}>
                        <Text style={Styles.borntext}>Style</Text>
                      </View>
                      <View style={Styles.widthtwosetsevanty}>
                        <Text style={Styles.birthdatetext}>French,ltalian,British</Text>
                      </View>
                    </View>
                    <View style={Styles.bordersetbottom}>
                      <View style={Styles.bornandbirtdateviewtwo}>
                        <View style={Styles.widthsetalldetailes}>
                          <Text style={Styles.borntext}>Rating</Text>
                        </View>
                        <View style={Styles.widthtwosetsevanty}>
                          <View style={Styles.stariconview}>
                            <Text style={Styles.onlydigittexttwo3}>4.0</Text>
                            <Icon
                              size={15}
                              name="star"
                              style={Styles.stariconstyle}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={Styles.bornandbirtdateviewtwo}>
                      <View style={Styles.widthsetalldetailes}>
                        <Text style={Styles.borntext}>Website</Text>
                      </View>
                      <View style={Styles.widthtwosetsevanty}>
                        <Text style={Styles.birthdatetext}>WWW.example.com</Text>
                      </View>
                    </View>
                    <View style={Styles.paregraphsettextview}>
                      <Text style={Styles.paregraphtextset}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Text>
                    </View>
                    <Text style={Styles.coursestitle}>Courses</Text>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('ArtPhotographyScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={{ width: 110, height: 110, marginRight: 10, borderRadius: 7, }} resizeMode='cover'
                            source={require('../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <Text style={Styles.designfonttext}>Alice Water</Text>
                          <Text style={Styles.paregraphtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                          <View style={Styles.stariconview}>
                            <Text style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: colorrdata,
                              marginTop: '3%',
                              marginRight: '3%'
                            }}>20 Video</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                      () => navigation.navigate('ArtPhotographyScreen')
                    }>
                      <View style={Styles.flexDirectiwhilist}>
                        <View>
                          <Image style={{ width: 110, height: 110, marginRight: 10, borderRadius: 7, }} resizeMode='cover'
                            source={require('../image/homeslider7.png')} />
                        </View>
                        <View style={Styles.textviewsetwhishlist}>
                          <Text style={Styles.designfonttext}>Gardon Ramsey</Text>
                          <Text style={Styles.paregraphtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                          <View style={Styles.stariconview}>
                            <Text style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: colorrdata,
                              marginTop: '3%',
                              marginRight: '3%'
                            }}>12 Video</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    </Container>
  );
};
export default DonHartScreen;
