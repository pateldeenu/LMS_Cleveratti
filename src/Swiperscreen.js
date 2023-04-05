import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Container from './Components/Commonfile/Container';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './style/Swiperscreenstyle';
import Button from './Components/Commonfile/Button';
import { useSelector } from "react-redux";

const App = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [showRealApp, setShowRealApp] = useState(false);

  const Getstarted = () => {
    setShowRealApp(true);
  };
  
  const RenderItem = ({ item }) => {
    return (
      <Container>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
          colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
          <View style={styles.minstyleviewphotograpgy}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                width: '100%',
                height: 'auto',
              }}>
              <Text style={styles.titleStyle}>
                {item.title}
              </Text>
              <View style={styles.imagset}>
                {item.image}
              </View>
              <Text style={styles.textstyle}>
                {item.text}
              </Text>
            </ScrollView>
          </View>
        </LinearGradient>
      </Container>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.setbgbuttondiv}>
        <View style={styles.buttonCircle}>
          <Button
            title="Get Started"
            buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
            onPress={
              () => navigation.navigate('SignInScreen')
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.setbgbuttondiv}>
        <Text style={{
          fontFamily: 'DMSans-Bold',
          fontSize: 19,
          position: 'relative',
          top: 10,
          color: colorrdata
        }}>Next</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={styles.setbgbuttondiv}>
        <TouchableOpacity onPress={
          () => navigation.navigate('SignInScreen')
        }>
          <Text style={{
            fontFamily: 'DMSans-Bold',
            fontSize: 19,
            position: 'relative',
            top: 10,
            color: colorrdata
          }}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <SafeAreaView>
          <View>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={Getstarted}
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
          renderDoneButton={_renderDoneButton}
          showSkipButton={true}
          activeDotStyle={{
            width: 14,
            height: 14,
            backgroundColor: colorrdata,
            borderRadius: 100,
            position: 'relative',
            top: -40
          }}
          dotStyle={styles.dotstyleset}
        />
      )}
    </>
  );
};
export default App;

const slides = [
  {
    key: 's1',
    text: 'Online classes taught by world best experts. easy to learn from anywhere. ',
    title: ' Learn from anywhere ',
    //  image: <Image style={styles.imagesetus} resizeMode='cover' source={require('./image/sswipe1img.png')} />,
     image: <Image style={styles.imagesetus} resizeMode='cover' source={require('./image/virtual-class.png')} />,
    backgroundColor: 'transparent',
  },
  {
    key: 's2',
    text: 'Download course curriculum learn offline anytime. Download app now.',
    title: 'Download and learn anytime easily.',
    // image: <Image style={styles.imagesetus} resizeMode="cover" source={require('./image/sswipe1img.png')} />,
    image: <Image style={styles.imagesetus} resizeMode="cover" source={require('./image/reading.png')} />,
    backgroundColor: 'transparent',
  },
  {
    key: 's3',
    text: 'Online Exam, Practice test and many more features ...',
    title: 'Connect with world best talent and learn from them.',
    // image: <Image style={styles.imagesetus} resizeMode='cover' source={require('./image/sswipe1img.png')} />,
    image: <Image style={styles.imagesetus} resizeMode='cover' source={require('./image/webinar.png')} />,
    backgroundColor: 'transparent',
  },

];