import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { carouselItems } from '../../static/sliderimage';
import { useNavigation } from '@react-navigation/native';

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
export const itemWidth = slideWidth + itemHorizontalMargin * 5;

const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const FirstSliderimageScreen = ({ _slider1Ref }) => {
  const navigation = useNavigation();

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{
        borderRadius: 5,
        height: 210,
        width: '100%',
      }}>
        <TouchableOpacity style={Styles.rounftextview} onPress={
          () => navigation.navigate('OverViewandLessonsTabScreen')
        }>
          {item.imge}
          <Text
            style={Styles.textContainer}
          >
            {item.title}
          </Text>
          <Text
            style={Styles.textContainertwo}
          >
            {item.paregraphtitle}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={Styles.minbody}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          ref={c => _slider1Ref = c}
          data={carouselItems}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={false}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={Styles.slider}
          contentContainerCustomStyle={{ alignItems: 'center' }}
          loop={true}
          autoplay={true}
          enableSnap={true}
          bounces={false}
          lockScrollWhileSnapping={true}
        />
      </View>
    </View>
  );
};
export default FirstSliderimageScreen;