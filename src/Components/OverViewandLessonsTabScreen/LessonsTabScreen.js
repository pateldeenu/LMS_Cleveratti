import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from '../../style/LessonsTabScreenStyle';
import Icon from 'react-native-vector-icons/EvilIcons';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const LessonsTabScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  return (
    <Container>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
        <View style={Styles.overviewtabminview}>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View>
                <Image style={Styles.setimageborser} resizeMode='cover'
                  source={require('../../image/homeslider7.png')} />
              </View>
              <View style={Styles.textviewsetwhishlist}>
                <Text style={Styles.designfonttext}>AWS Monitoring and Logging</Text>
                <Text style={Styles.dolardigittext}> simply dummy text  typesetting industry.</Text>
                <View style={Styles.stariconview}>
                  <Icon
                    size={30}
                    name="unlock"
                    style={{
                      color: colorrdata,
                    }}
                  />
                  <Text style={{
                    color: colorrdata,
                    paddingTop: 6,
                    fontFamily: 'DMSans-Bold',
                  }}>Unlocked</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlistTwo} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View>
                <Image style={Styles.setimageborser} resizeMode='cover'
                  source={require('../../image/homeslider7.png')} />
              </View>
              <View style={Styles.textviewsetwhishlist}>
                <Text style={Styles.designfonttext}>Docker Beginner Course</Text>
                <Text style={Styles.dolardigittext}>simply dummy text of the printing and typesetting industry.</Text>
                <View style={Styles.stariconview}>
                  <Icon
                    size={30}
                    name="lock"
                    style={{
                      color: colorrdata,

                    }}
                  />
                  <Text style={{
                    color: colorrdata,
                    paddingTop: 6,
                    fontFamily: 'DMSans-Bold',
                  }}>Locked</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View>
                <Image style={Styles.setimageborser} resizeMode='cover'
                  source={require('../../image/homeslider7.png')} />
              </View>
              <View style={Styles.textviewsetwhishlist}>
                <Text style={Styles.designfonttext}>Jenkins Beginner Course</Text>
                <Text style={Styles.dolardigittext}>Lorem Ipsum is printing and typesettings industry</Text>
                <View style={Styles.stariconview}>
                  <Icon
                    size={30}
                    name="lock"
                    style={{
                      color: colorrdata,
                    }}
                  />
                  <Text style={{
                    color: colorrdata,
                    paddingTop: 6,
                    fontFamily: 'DMSans-Bold',
                  }}>Locked</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlistTwo} onPress={
            () => navigation.navigate('OverViewandLessonsTabScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View>
                <Image style={Styles.setimageborser} resizeMode='cover'
                  source={require('../../image/homeslider7.png')} />
              </View>
              <View style={Styles.textviewsetwhishlist}>
                <Text style={Styles.designfonttext}>Data Science with Python</Text>
                <Text style={Styles.dolardigittext}>Lorem Ipsum is simply dummy text of the printing and typesettings industry</Text>
                <View style={Styles.stariconview}>
                  <Icon
                    size={30}
                    name="lock"
                    style={{
                      color: colorrdata,
                    }}
                  />
                  <Text style={{
                    color: colorrdata,
                    paddingTop: 6,
                    fontFamily: 'DMSans-Bold',
                  }}>Locked</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View>
                <Image style={Styles.setimageborser} resizeMode='cover'
                  source={require('../../image/homeslider7.png')} />
              </View>
              <View style={Styles.textviewsetwhishlist}>
                <Text style={Styles.designfonttext}>Java Certification Training Course</Text>
                <Text style={Styles.dolardigittext}>Java Certification Training Course</Text>
                <View style={Styles.stariconview}>
                  <Icon
                    size={30}
                    name="lock"
                    style={{
                      color: colorrdata,
                    }}
                  />
                  <Text style={{
                    color: colorrdata,
                    paddingTop: 6,
                    fontFamily: 'DMSans-Bold',
                  }}>Locked</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Container>
  );
}
export default LessonsTabScreen;





