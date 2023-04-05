import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { overviewsliderimg } from '../../static/sliderimage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { scrollInterpolators, animatedStyles } from '../../basic/animations';
import LinearGradient from 'react-native-linear-gradient';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const horizontalMargin = 20;
const slideWidthone = 105;
const sliderWidth1 = Dimensions.get('window').width;
const itemWidthone = slideWidthone + horizontalMargin * 2;
const itemHeight = 200;
const slideWidthree = 195;
const sliderWidthree = Dimensions.get('window').width;
const itemWidthothree = slideWidthree + horizontalMargin * 2;
const slideWidfive = 160;
const sliderWidfive = Dimensions.get('window').width;
const itemWidthfive = slideWidfive + horizontalMargin * 2;

const TwoSliderimageScreen = (props) => {
  const {navigation} = props;
  const _renderItemtwo = ({ item }) => {
    return (
      <View style={{
        borderRadius: 5,
        height: 170,
        width: 200,
        paddingRight: 45,
        marginLeft: 5,
        marginBottom: 20,

      }}>
        <TouchableOpacity onPress={
          () => navigation.navigate('ArtPhotographyScreen')
        } >
          <View style={Styles.rounftextview}>
            {item.imge}
            <Text
              style={Styles.roundimagtitletextset}
            >
              {item.roundimagtitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (

    <View style={Styles.minbody}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 25, paddingBottom: 50 }}>
          <Carousel
            ref={c => _slider1Ref = c}
            data={overviewsliderimg}
            renderItem={_renderItemtwo}
            sliderWidth={170}
            itemWidth={170}
            hasParallaxImages={false}
            firstItem={SLIDER_1_FIRST_ITEM}
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
      </LinearGradient>
    </View>
  );
};
export default TwoSliderimageScreen;