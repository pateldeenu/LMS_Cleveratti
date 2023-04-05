import React, { useState } from "react";
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, } from "react-native";
import Styles from '../../style/InstructorsProfileStyle';
import { useNavigation } from '@react-navigation/native';
import Container from '../../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import IconO from 'react-native-vector-icons/Octicons';
import images from '../../image';
import { Rating } from 'react-native-ratings';

const InstructorsProfileScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();

  const [profileimageandtext] = useState([
    {
      "id": 1,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_one_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
      "text": "James Kong",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.9}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Teacher",
    },
    {
      "id": 2,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_two_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
      "text": "Ricky Ponting",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "PM Expert",
    },
    {
      "id": 3,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_three_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
      "text": "Melissa Ponzio",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Python Expert",
    },
    {
      "id": 4,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_four_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
      "text": "Haley Web",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.8}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Web Design Expert",
    },
    {
      "id": 5,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_six_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
      "text": "Cameron Green",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Yoga Teacher",
    },
    {
      "id": 6,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_saven_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'red'} />,
      "text": "Jack Leach",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.9}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "App Design Expert",
    },
    {
      "id": 7,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_aeight_img} />,
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
      "text": "Rebecca Ferguson",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.9}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Maths Expert",
    },
    {
      "id": 8,
      "image": <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_aeight_img_two} />,
      "icon": <IconO name="dot-fill" size={40} color={'#40d375'} />,
      "text": "James Anderson",
      "rating": <Rating
        type='custom'
        ratingColor='hsl(27.7, 73.8%, 62.5%)'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={20}
        startingValue={4.5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "jobtextset": "Web Developer",
    },
  ])
  const profiledatafunctions = (item, index) => {
    return (
      <TouchableOpacity style={Styles.marginrightsetwidth} onPress={() => navigation.navigate('InstructorsDetaileScreen')}>
        <View style={Styles.profilebgwhiteset}>
          <View>     
            <View style={Styles.centimagebottomview}>
              <View style={Styles.centerviewstyle}>
                {item.image}
                <Text style={Styles.centerviewstyletwostyle}>
              {item.icon}
            </Text>
              </View>
              </View>
              <Text style={Styles.textsetsimple}>{item.text}</Text>
              <Text style={{
                 flexDirection:'row',
                 justifyContent:'center',
                 textAlign:'center',
                 paddingTop:7,
                 color:colorrdata,
                 fontSize:17,
                 fontWeight:'700'
              }}>{item.jobtextset}</Text>
              {item.rating}         
          </View>
        </View>
      </TouchableOpacity>
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
                    data={profileimageandtext}
                    renderItem={({ item, index }) => profiledatafunctions(item, index)}
                    keyExtractor={item => item.id}
                    numColumns={2}
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

export default InstructorsProfileScreen;
