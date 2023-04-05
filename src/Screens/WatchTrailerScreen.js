import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import IconF from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/EvilIcons';
import Styles from '../style/WatchTrailerScreenStyle';
import Container from '../Components/Commonfile/Container';
import Reactvideo from '../Components/reactvideo';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const WatchTrailerScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const title = () => {
    return (
      <View style={Styles.nindivset}>
        <Reactvideo />
      </View>
    );
  }
  const renderNavBar = () => (
    <View style={Styles.navContainer}>
      <View style={Styles.navBar}>
        <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('OverViewandLessonsTabScreen', {
        })}>
          <IconF
            size={40}
            name="chevron-small-left"
            color={colorrdata}
            style={Styles.iconlessthanback}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderContent = () => {
    return (
      <Container>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
          colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
          <View style={Styles.overviewtabminview}>
            <Text style={Styles.trailertextset}>Trailer</Text>
            <Text style={Styles.paregraphtext}>Lorem Ipsum is simply dummy text of the printing and typeseting industry</Text>
            <View style={Styles.whiteboxwhishlistTwo}>
              <TouchableOpacity style={Styles.flexDirectiwhilist} onPress={
                () => navigation.navigate('ArtPhotographyScreen')
              }>
                <View>
                  <Image style={Styles.imagstyleset} resizeMode='cover'
                    source={require('../image/homeslider7.png')} />
                </View>
                <View style={Styles.textviewsetwhishlist}>
                  <Text style={Styles.designfonttext}>DevOps Training</Text>
                  <Text style={Styles.dolardigittext}>Lorem Ipsum is Simply dummy text and typesetting industry </Text>
                  <View style={Styles.stariconview}>
                    <Icon
                      size={30}
                      name="lock"
                      style={{
                        color: colorrdata,
                        flexDirection: 'row',
                        marginTop: '2%',
                        marginRight: '2%'
                      }}
                    />
                    <Text style={{
                      fontSize: 16.5,
                      color: colorrdata,
                      marginTop: '3%',
                      fontFamily: 'DMSans-Medium',
                    }}>Locked</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.whiteboxwhishlistTwo}>
              <TouchableOpacity style={Styles.flexDirectiwhilist} onPress={
                () => navigation.navigate('ArtPhotographyScreen')
              }>
                <View>
                  <Image style={Styles.imagstyleset} resizeMode='cover'
                    source={require('../image/homeslider7.png')} />
                </View>
                <View style={Styles.textviewsetwhishlist}>
                  <Text style={Styles.designfonttext}>Software Testing</Text>
                  <Text style={Styles.dolardigittext}>Lorem Ipsum is Simply dummy text of the printitng and typesetting industry </Text>
                  <View style={Styles.stariconview}>
                    <Icon
                      size={30}
                      name="lock"
                      style={{
                        color: colorrdata,
                        flexDirection: 'row',
                        marginTop: '2%',
                        marginRight: '2%'
                      }}
                    />
                    <Text style={{
                      fontSize: 16.5,
                      color: colorrdata,
                      marginTop: '3%',
                      fontFamily: 'DMSans-Medium',
                    }}>Locked</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.whiteboxwhishlistTwo}>
              <View style={Styles.flexDirectiwhilist}>
                <View>
                  <Image style={Styles.imagstyleset} resizeMode='cover'
                    source={require('../image/homeslider7.png')} />
                </View>
                <View style={Styles.textviewsetwhishlist}>
                  <Text style={Styles.designfonttext}>Robotics</Text>
                  <Text style={Styles.dolardigittext}>Lorem Ipsum is Simply dummy text of the printitng and typesetting industry </Text>
                  <View style={Styles.stariconview}>
                    <Icon
                      size={30}
                      name="lock"
                      style={{
                        color: colorrdata,
                        flexDirection: 'row',
                        marginTop: '2%',
                        marginRight: '2%'
                      }}
                    />
                    <Text style={{
                      fontSize: 16.5,
                      color: colorrdata,
                      marginTop: '3%',
                      fontFamily: 'DMSans-Medium',
                    }}>Locked</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.whiteboxwhishlistTwo}>
              <View style={Styles.flexDirectiwhilist}>
                <View>
                  <Image style={Styles.imagstyleset} resizeMode='cover'
                    source={require('../image/homeslider7.png')} />
                </View>
                <View style={Styles.textviewsetwhishlist}>
                  <Text style={Styles.designfonttext}>Big Data</Text>
                  <Text style={Styles.dolardigittext}>Lorem Ipsum is Simply printitng and typesetting industry </Text>
                  <View style={Styles.stariconview}>
                    <Icon
                      size={30}
                      name="lock"
                      style={{
                        color: colorrdata,
                        flexDirection: 'row',
                        marginTop: '2%',
                        marginRight: '2%'
                      }}
                    />
                    <Text style={{
                      fontSize: 16.5,
                      color: colorrdata,
                      marginTop: '3%',
                      fontFamily: 'DMSans-Medium',
                    }}>Locked</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.whiteboxwhishlistTwo}>
              <View style={Styles.flexDirectiwhilist}>
                <View>
                  <Image style={Styles.imagstyleset} resizeMode='cover'
                    source={require('../image/homeslider7.png')} />
                </View>
                <View style={Styles.textviewsetwhishlist}>
                  <Text style={Styles.designfonttext}>Digital Marketing</Text>
                  <Text style={Styles.dolardigittext}>Lorem Ipsum is Simply dummy text of the printitng and typesetting industry </Text>
                  <View style={Styles.stariconview}>
                    <Icon
                      size={30}
                      name="unlock"
                      style={{
                        color: colorrdata,
                        flexDirection: 'row',
                        marginTop: '2%',
                        marginRight: '2%'
                      }}
                    />
                    <Text style={{
                      fontSize: 16.5,
                      color: colorrdata,
                      marginTop: '3%',
                      fontFamily: 'DMSans-Medium',
                    }}>unlocked</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Container>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        alwaysShowTitle={false}
        alwaysShowNavBar={true}
        headerMaxHeight={340}
        headerMinHeight={55}
        extraScrollHeight={0}
        navbarColor="rgba(223,238,255,1)"
        titleStyle={Styles.titleStyle}
        title={title()}
        backgroundColor={'transparent'}
        backgroundImageScale={1.1}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={Styles.container}
        contentContainerStyle={Styles.contentContainer}
        innerContainerStyle={Styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
          onScrollEndDrag: () => console.log("onScrollEndDrag"),
          showsVerticalScrollIndicator: false
        }}
      />
    </>
  );
}
export default WatchTrailerScreen;

