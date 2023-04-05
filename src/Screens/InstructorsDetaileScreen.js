import React,{useState} from "react";
import { Text, View, ScrollView, Image, KeyboardAvoidingView,FlatList, TouchableOpacity,} from "react-native";
import Styles from '../style/InstructorsDetaileStyle';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import IconU from 'react-native-vector-icons/FontAwesome';
import IconP from 'react-native-vector-icons/AntDesign';
import images from '../image';
import { Rating } from 'react-native-ratings';
import IconH from 'react-native-vector-icons/AntDesign';
import IconS from 'react-native-vector-icons/FontAwesome5';
import Button from '../Components/Commonfile/Button';

const InstructorsDetaileScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const [courcesdata] = useState([
    {
      "id": 1,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one} />,
      "text": "Learn Linux in 5 Days",
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
      "usertext" : "Alesha Dixon",
      "usericon" :  <IconU name="user" size={25} color={colorrdata} />,
      "clockicon" : <IconP name="clockcircleo" size={17}  />,
      "timetextset" : "5h 30m",
      "buttonset" : <Button title="Free" />,
      "buttonsettwo" : <Button title="In Progress" />
    },
    {
      "id": 2,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_two} />,
      "text": "Jenkig Beginner Course",
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
      "usertext" : "Alesha Dixon",
      "usericon" :  <IconU name="user" size={25} color={colorrdata} />,
      "clockicon" : <IconP name="clockcircleo" size={17}  />,
      "timetextset" : "6h 30m",
      "buttonset" : <Button title="Free" />,
      "buttonsettwo" : <Button title="20% Off" />
    },
    {
      "id": 3,
      "image": <Image style={Styles.setimagestyle} resizeMode='cover' source={images.coueses_image_one_three} />,
      "text": "Gardon Ramsey",
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
      "usertext" : "Alesha Dixon",
      "usericon" :  <IconU name="user" size={25} color={colorrdata} />,
      "clockicon" : <IconP name="clockcircleo" size={17}  />,
      "timetextset" : "4h 30m",
      "buttonset" : <Button title="Free" />,
      "buttonsettwo" : <Button title="In Progress" />
    },
  ])
  const courcesdataitem = (item, index) => {
    return (
      <View style={Styles.whiteboxwhishlist} onPress={() => navigation.navigate('ArtPhotographyScreen')}>
        <View style={Styles.flexDirectiwhilist}>
          <View>
            {item.image}
          </View>
          <View style={Styles.textviewsetwhishlist}>
            <Text style={{
              fontSize:16,
              fontFamily:'DMSans-Bold',
              color:colorrdata,
              fontWeight:'700',
              width:'90%'
            }}>{item.text}</Text>
            <View style={Styles.flexrowsetusericon}>
              {item.usericon}
              <Text style={Styles.usertextstyle}>{item.usertext}</Text>
            </View>
            <View style={Styles.flexrowsetusericon}>
              {item.clockicon}
              <Text style={Styles.usertextstyle}>{item.timetextset}</Text>
            </View>
            <View style={Styles.ratingviewstyle}>{item.rating}</View>
          </View>
        </View>
        <View style={Styles.twobuttoncenter}>
        {index === 0 || index === 2 ?
          <View style={Styles.wisthsetbutton}>{item.buttonset}</View>
            :
            null
          }
          {index === 1 ?
          <View style={Styles.flexrowsettext}>
          <Text style={Styles.dolardtextsetprice}>$ 100.00</Text>
          <Text style={{
            color:colorrdata,
            fontSize:17,
            fontWeight:'700'
          }}>$ 80.00</Text>
          </View>
            :
            null
          }
           {index === 0 || index === 1 || index === 2?
          <View style={Styles.wisthsetbutton}>{item.buttonsettwo}</View>
            :
            null
          }
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
                  <View style={Styles.justicenterview}>
                    <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_four_img} />
                  </View>
                  <Text style={{ color: colorrdata, fontSize: 19, textAlign: 'center', marginTop: 10, fontWeight: '700' }}>Alesha Dixon</Text>
                  <Rating
                    type='custom'
                    ratingColor='hsl(27.7, 73.8%, 62.5%)'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={5}
                    tintColor={'rgba(254,238,245,1)'}
                    imageSize={20}
                    startingValue={5}
                    isDisabled={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                  />
                  <View style={Styles.minflexviewstyle}>
                    <View>
                      <TouchableOpacity style={Styles.bgcolorwhiteset}>
                        <IconH name="copy1" size={30} color={colorrdata} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 17, textAlign: 'center', color: colorrdata, paddingTop: 10, fontWeight: '700' }}>5</Text>
                      <Text style={{ fontSize: 17, textAlign: 'center', color: colorrdata, paddingTop: 10, }}>Courses</Text>
                    </View>
                    <View>
                      <TouchableOpacity style={Styles.bgcolorwhiteset}>
                        <IconU name="user" size={35} color={colorrdata} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 17, textAlign: 'center', color: colorrdata, paddingTop: 10, fontWeight: '700' }}>600</Text>
                      <Text style={{ fontSize: 17, textAlign: 'center', color: colorrdata, paddingTop: 10, }}>Students</Text>
                    </View>
                    <View>
                      <TouchableOpacity style={Styles.bgcolorwhiteset}>
                        <IconS name="users" size={30} color={colorrdata} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 17, textAlign: 'center', color: colorrdata, paddingTop: 10, fontWeight: '700' }}>135</Text>
                      <Text style={{ fontSize: 17, textAlign: 'center', paddingTop: 10, color: colorrdata, fontWeight: '600' }}>followers</Text>
                    </View>
                  </View>
                  <View>
                    <FlatList
                      data={courcesdata}
                      renderItem={({ item, index }) => courcesdataitem(item, index)}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                      style={Styles.setflex}
                    />
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
export default InstructorsDetaileScreen;
