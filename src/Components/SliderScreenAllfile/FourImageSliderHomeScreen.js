import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { carouselItemsfour } from '../../static/sliderimage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { scrollInterpolators, animatedStyles } from '../../basic/animations'

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(53);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const ThreeSliderImageScreen = ({ _slider1Ref }) => {
  const navigation = useNavigation();
  const _renderItemfour = ({ item, index }) => {
    return (
      <View style={{
        borderRadius: 5,
        paddingBottom: 20,
        width: 250,
        marginLeft: 65,
      }}>
        <TouchableOpacity style={Styles.whiteshadowimgbottom} onPress={
          () => navigation.navigate('OverViewandLessonsTabScreen')
        } >
          <View>
            {item.imge}
          </View>
          <View style={Styles.alltextleftset}>
            <Text
              style={Styles.blacktitleunderlineset}
            >
              {item.blacktitle}
            </Text>
            <Text
              style={Styles.whitebodyimagetextstyle}
            >
              {item.whitebodyimagetext}
            </Text>
            <View style={Styles.flexsettileimgview}>
              <View style={Styles.flexrowsettext}>
                <Text
                  style={Styles.whitebodyimagetextstyletwo}
                >
                  {item.blacktitledigit}
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
                <Text>
                  {item.icon4}
                </Text>
                <Text>
                  {item.icon5}
                </Text>
                <Text style={Styles.whitebodyimagetextstylethree}>
                  {item.blacktitledigit3}
                </Text>
              </View>
              <Text
                style={Styles.whitebodyimagetextstyletwo}
              >
                {item.blacktitledigit2}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={Styles.minbody}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
        <Carousel
          ref={c => _slider1Ref = c}
          data={carouselItemsfour}
          renderItem={_renderItemfour}
          sliderWidth={245}
          itemWidth={245}
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
      <Text style={Styles.popularcourcetexttwo}>Instructor</Text>
    </View>
  );
};
export default ThreeSliderImageScreen;