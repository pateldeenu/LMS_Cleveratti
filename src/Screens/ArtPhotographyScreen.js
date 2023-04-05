import React from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import Styles from '../style/Art&PhotographyScreenStyle';
import Icon from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

const ArtPhotographyScreen = (props) => {
  const {navigation} = props;
  return (
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
          <View style={Styles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={Styles.minviewsigninscreen}>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>GIT and GIT Hub Complete Course</Text>
                      <Text style={Styles.setreviewstext}>4.3k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$89</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Complete C# Masterclass</Text>
                      <Text style={Styles.setreviewstext}>4.8k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$73</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Python programming Masterclass</Text>
                      <Text style={Styles.setreviewstext}>4.6k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$71</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Java Certification Training Course</Text>
                      <Text style={Styles.setreviewstext}>4.5k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$85</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Docker Beginner Course</Text>
                      <Text style={Styles.setreviewstext}>4.1k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>

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
                        <View>
                          <Text style={Styles.dolardigittext}>$59</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Jenkins Beginner Course</Text>
                      <Text style={Styles.setreviewstext}>4.2k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$64</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                  () => navigation.navigate('OverViewandLessonsTabScreen')
                }>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Tableau Certification training</Text>
                      <Text style={Styles.setreviewstext}>4.9k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>

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
                        <View>
                          <Text style={Styles.dolardigittext}>$76</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.whiteboxwhishlist}>
                  <View style={Styles.flexDirectiwhilist}>
                    <View>
                      <Image style={Styles.imagesetios} resizeMode='cover'
                        source={require('../image/homeslider7.png')} />
                    </View>
                    <View style={Styles.textviewsetwhishlist}>
                      <Text style={Styles.designfonttext}>Data Science with Python</Text>
                      <Text style={Styles.setreviewstext}>4.5k (Reviews)</Text>
                      <View style={Styles.setstartanddolardtext}>
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
                        <View>
                          <Text style={Styles.dolardigittext}>$99</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ArtPhotographyScreen;
