import React from "react";
import { View, Text, StatusBar, Dimensions, } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconH from 'react-native-vector-icons/Entypo';
import Styles from '../style/PopularCoursesScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

// slider theree width

const horizontalMargin = 20;
const slideWidthone = 105;

const sliderWidth1 = Dimensions.get('window').width;
const itemWidthone = slideWidthone + horizontalMargin * 2;
const itemHeight = 200;

// slider four width
const slideWidthree = 195;

const sliderWidthree = Dimensions.get('window').width;
const itemWidthothree = slideWidthree + horizontalMargin * 2;

// slider five width 

const slideWidfive = 160;

const sliderWidfive = Dimensions.get('window').width;
const itemWidthfive = slideWidfive + horizontalMargin * 2;

const PopularCoursesScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ReactNativeParallaxHeader
                alwaysShowTitle={false}
                alwaysShowNavBar={true}
                headerMaxHeight={350}
                headerMinHeight={55}
                navbarColor="hsl(214.3, 83.2%, 51%)"
                titleStyle={Styles.titleStyle}
                title={title()}
                backgroundColor={'hsl(214.3, 83.2%, 51%)'}
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
export default PopularCoursesScreen;

const renderNavBar = () => (
    <View style={Styles.navContainer}>
        <View style={Styles.navBar}>
            <TouchableOpacity onPress={() => myProps.navigation.navigate('SettingTabbarScreen', {
            })}>
                <IconF
                    size={30}
                    name="left"
                    style={Styles.iconlessthanback}
                />
            </TouchableOpacity>
            <View style={Styles.flerxdirationplusandtext}>
                <IconH
                    size={30}
                    name="plus"
                    style={Styles.iconlessthanback}
                />
                <Text style={Styles.addtovisitlisttext}>Add to Wishlist</Text>
            </View>
        </View>
    </View>
);
const renderContent = () => {
    return (
        <View style={Styles.whilistminbody}>
        </View>
    );
};
const title = () => {
    return (
        <View style={Styles.allheadertitleminview}>
            <View style={Styles.computerscrinceview} >
                <Text style={Styles.computersciebcetext}>Computer Science</Text>
                <Text style={Styles.consoledeclopmenttextheader}>Console Development Basics With Unity</Text>
            </View>
            <View style={Styles.stariconview}>
                <View style={Styles.flexdirction4view}>
                    <Text style={Styles.onlydigittext}>4.0</Text>
                    <Icon
                        size={18}
                        name="star"
                        style={Styles.stariconstyle}
                    />
                    <Text style={Styles.onlydigittext}>(4 Reviews)</Text>
                </View>
                <View>
                    <Text style={Styles.dolardtext}>$49</Text>
                </View>
            </View>
        </View>
    );
}
