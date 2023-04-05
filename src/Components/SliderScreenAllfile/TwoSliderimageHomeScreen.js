import React, { useState } from "react";
import { Text, View, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../../style/HomeScreenStyle';
import { carouselItemstwo } from '../../static/sliderimage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { scrollInterpolators, animatedStyles } from '../../basic/animations'

const TwoSliderimageScreen = ({ _slider1Ref }) => {
  const [selectedStat, setSelectedStat] = useState(carouselItemstwo[0]);
  const navigation = useNavigation();

  const _renderItemtwo = ({ item }) => {
    return (
      <View style={{
        borderRadius: 5,
        paddingBottom: 20,
        width: 200,
        paddingRight: 45,
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
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
        <Carousel
          ref={c => _slider1Ref = c}
          data={carouselItemstwo}
          renderItem={_renderItemtwo}
          sliderWidth={150}
          itemWidth={150}
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
          decelerationRate={0.0}
          autoscroll={true}
          bounces={false}
          scrollEventThrottle={50}
          scrollInterpolator={scrollInterpolators}
          enableMomentum={false}
          slideInterpolatedStyle={animatedStyles}
          onSnapToItem={index => {
            setSelectedStat(carouselItemstwo[index]);
          }}
        />
      </View>
      {/* <View style={Styles.popularview}> */}
      <Text style={Styles.popularcourcetext}>Popular Courses</Text>
      {/* </View> */}
    </View>

  );
};
export default TwoSliderimageScreen;