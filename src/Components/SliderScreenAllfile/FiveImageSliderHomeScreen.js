import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { carouselItemsfive } from '../../static/sliderimage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { scrollInterpolators, animatedStyles } from '../../basic/animations';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 80;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(36);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;

const ThreeSliderImageScreen = ({ _slider1Ref }) => {
  const navigation = useNavigation();

  const _renderItemfive = ({ item, index }) => {
    return (
      <View style={{
        borderRadius: 5,
        height: 295,
        width: 250,
        marginLeft: 83,
      }}>
        <TouchableOpacity style={Styles.whiteshadowimgbottomtwo} onPress={
          () => navigation.navigate('InstructorScreen')
        } >
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, }}>
            {item.imge}
          </View>
          <Text
            style={Styles.usernametext}
          >
            {item.username}
          </Text>
          <Text
            style={Styles.usernamejobtext}
          >
            {item.userjob}
          </Text>
          <View style={Styles.flexrowstyleset}>
            <Text
              style={Styles.usernamerenkintext}
            >
              {item.userranking}
            </Text>
            <Text>
              {item.icon}
            </Text>
            <Text>
              {item.icon2}
            </Text>
            <Text>
              {item.icon3}
            </Text>
            <Text style={Styles.usernamerenkintexttwo}>
              {item.userrankingtwo}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={Styles.minbody}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -12 }}>
        <Carousel
          ref={c => _slider1Ref = c}
          data={carouselItemsfive}
          renderItem={_renderItemfive}
          sliderWidth={210}
          itemWidth={210}
          hasParallaxImages={false}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={10}
          containerCustomStyle={Styles.slider}
          contentContainerCustomStyle={Styles.sliderContentContainer}
          loop={false}
          enableSnap={false}
          loopClonesPerSide={2}
          lockScrollWhileSnapping={true}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          scrollInterpolator={scrollInterpolators}
          slideInterpolatedStyle={animatedStyles}
        />
      </View>
    </View>
  );
};
export default ThreeSliderImageScreen;