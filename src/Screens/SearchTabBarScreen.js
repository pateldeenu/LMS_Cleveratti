import React from "react";
import { View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import Styles from '../style/SearchTabBarScreenStyle';
import Icon from 'react-native-vector-icons/EvilIcons'
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import IconF from 'react-native-vector-icons/Entypo';
import { useSelector } from "react-redux";

const SearchTabBarScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  const title = () => {
    return (
      <View style={Styles.flexdirectioninputsearchtab}>
        <View style={Styles.flexdirectioninputsearchtab}>
          <Icon
            size={24}
            name="search"
            color={colorrdata}
            style={Styles.iconstyleseacrch}
          />
          <TextInput
            style={Styles.inputbgcolorwhite}
            placeholder="Try Easy Ways Write a novel"
            placeholderTextColor={'black'}
          />
        </View>
      </View>
    );
  }
  const renderNavBar = () => (
    <View style={Styles.navContainer}>
      <View style={Styles.navBar}>
        <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
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
          colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
          <View style={Styles.whilistminbody}>
            <Text style={{
              fontFamily: 'DMSans-Bold',
              color: colorrdata,
              fontSize: 20,
              borderBottomColor: colorrdata,
            }}>
              Popular Tags
                </Text>
            <View style={{ borderBottomColor: 1, width: '100%', borderBottomColor: 'red' }}>
              <Text style={Styles.businessgraytextsetborderbottom}>
                Business & Management
                </Text>
            </View>
            <Text style={Styles.businessgraytextsetone}>
              Creative Art & Media
                </Text>
            <Text style={Styles.businessgraytextset}>
              Health & Payschology
                </Text>
            <Text style={Styles.businessgraytextsetone}>
              History
                </Text>
            <Text style={Styles.businessgraytextset}>
              Language & Cultures
                </Text>
            <Text style={Styles.businessgraytextset}>
              Science,Engineering & Maths
                </Text>
            <Text style={Styles.businessgraytextsetone}>
              Study Skills
                </Text>
            <Text style={Styles.businessgraytextset}>
              Tech & Coding
                </Text>
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
        headerMaxHeight={200}
        headerMinHeight={55}
        backgroundImage={require('../image/sswipe1img.png')}
        navbarColor="rgba(254,238,245,1)"
        titleStyle={Styles.titleStyle}
        title={title()}
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
};
export default SearchTabBarScreen;
