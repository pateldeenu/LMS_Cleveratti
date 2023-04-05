import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { carouselItemsthree } from '../../static/sliderimage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { scrollInterpolators, animatedStyles } from '../../basic/animations'
const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 80;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(43);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const ThreeSliderImageScreen = ({ _slider1Ref }) => {
  const navigation = useNavigation();
  const _renderItemthree = ({ item, index }) => {
    return (
      <View style={{
        borderRadius: 5,
        paddingBottom: 20,
        width: 250,
        marginLeft: 65
      }}>
        <TouchableOpacity style={Styles.whiteshadowimgbottom} onPress={
          () => navigation.navigate('OverViewandLessonsTabScreen')
        } >
          <View>
            {item.imge}
          </View>
          <View style={Styles.alltextleftset}>
            <Text
              style={Styles.whitebodyimagetextstyletwo2}
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
                <Text style={Styles.colorblseticon}>
                  {item.icon}
                </Text>
                <Text style={Styles.colorblseticon}>
                  {item.icon2}
                </Text>
                <Text style={Styles.colorblseticon}>
                  {item.icon3}
                </Text>
                <Text style={Styles.colorblseticon}>
                  {item.icon4}
                </Text>
                <Text style={Styles.colorblseticon}>
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
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          ref={c => _slider1Ref = c}
          data={carouselItemsthree}
          renderItem={_renderItemthree}
          sliderWidth={247}
          itemWidth={247}
          hasParallaxImages={false}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={10}
          containerCustomStyle={Styles.slider}
          contentContainerCustomStyle={Styles.sliderContentContainer}
          loop={false}
          enableSnap={false}
          layoutCardOffset={9}
          loopClonesPerSide={2}
          lockScrollWhileSnapping={true}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          scrollInterpolator={scrollInterpolators}
          slideInterpolatedStyle={animatedStyles}
        />
      </View>
      <Text style={Styles.popularcourcetexttwo}>New Courses</Text>
    </View>
  );
};
export default ThreeSliderImageScreen;