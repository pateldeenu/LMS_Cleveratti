import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from '../../style/ReviewsScreenStyle';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconS from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
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
              <View style={Styles.reviewflex}>
                <Image style={Styles.setreviesstyleimage} resizeMode='cover'
                  source={require('../../image/profileimagesetup.png')} />
                <View style={Styles.textviewsetwhishlist}>
                  <View style={Styles.flexratingandtext}>
                    <Text style={{
                      fontSize: 16,
                      fontFamily: 'DMSans-Bold',
                      color: colorrdata,
                      width: '100%'
                    }}>April 4, 2023</Text>
                    <View style={Styles.iconview}>
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                    </View>
                  </View>
                  <Text style={Styles.dolardigittext}>Amber Valley</Text>
                </View>
              </View>
            </View>
            <Text style={Styles.setdollardtextset}>There’s no rule against only writing a handful of words in a review, but the more specific you can be, the more likely the review is to be useful. </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View style={Styles.reviewflex}>
                <Image style={Styles.setreviesstyleimage} resizeMode='cover'
                  source={require('../../image/profileimagesetup.png')} />
                <View style={Styles.textviewsetwhishlist}>
                  <View style={Styles.flexratingandtext}>
                    <Text style={{
                      fontSize: 16,
                      fontFamily: 'DMSans-Bold',
                      color: colorrdata,
                      width: '100%'
                    }}>Jun 18, 2023</Text>
                    <View style={Styles.iconview}>
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <Icon
                        size={15}
                        name="star"
                        style={Styles.unsetcolor}
                      />
                    </View>
                  </View>
                  <Text style={Styles.dolardigittext}>Hardik Soni</Text>
                </View>
              </View>
            </View>
            <Text style={Styles.setdollardtextset}>I have been looking at the following jquery script good Aplication. </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View style={Styles.reviewflex}>
                <Image style={Styles.setreviesstyleimage} resizeMode='cover'
                  source={require('../../image/profileimagesetup.png')} />
                <View style={Styles.textviewsetwhishlist}>
                  <View style={Styles.flexratingandtext}>
                    <Text style={{
                      fontSize: 16,
                      fontFamily: 'DMSans-Bold',
                      color: colorrdata,
                      width: '100%'
                    }}>February 2, 2022</Text>
                    <View style={Styles.iconview}>
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                    </View>
                  </View>
                  <Text style={Styles.dolardigittext}>Nikul Jadeja</Text>
                </View>
              </View>
            </View>
            <Text style={Styles.setdollardtextset}>There’s no rule against only writing a handful of words in a review, but the more specific you can be, the more likely the review is to be useful. </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
            () => navigation.navigate('ArtPhotographyScreen')
          }>
            <View style={Styles.flexDirectiwhilist}>
              <View style={Styles.reviewflex}>
                <Image style={Styles.setreviesstyleimage} resizeMode='cover'
                  source={require('../../image/profileimagesetup.png')} />
                <View style={Styles.textviewsetwhishlist}>
                  <View style={Styles.flexratingandtext}>
                    <Text style={{
                      fontSize: 16,
                      fontFamily: 'DMSans-Bold',
                      color: colorrdata,
                      width: '100%'
                    }}>December 12, 2022</Text>
                    <View style={Styles.iconview}>
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <IconS
                        size={15}
                        name="star"
                        style={Styles.chengecolorstyle}
                      />
                      <Icon
                        size={15}
                        name="star"
                        style={Styles.unsetcolor}
                      />
                    </View>
                  </View>
                  <Text style={Styles.dolardigittext}>Rakesh Soni</Text>
                </View>
              </View>
            </View>
            <Text style={Styles.setdollardtextset}>There’s no rule against only writing a handful of words in a review, but the more specific you can be, the more likely the review is to be useful. </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Container>
  );
}
export default LessonsTabScreen;





