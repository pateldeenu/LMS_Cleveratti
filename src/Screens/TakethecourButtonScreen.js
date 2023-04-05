import React, { useState } from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import IconF from 'react-native-vector-icons/Entypo';
import IconZ from 'react-native-vector-icons/AntDesign';
import Styles from '../style/TakethecourButtonScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Commonfile/Button';
import { useSelector } from "react-redux";
import ColorPicker from '../Components/Commonfile/ColorPicker';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 210) : 200;
const HEADER_SETHEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 55;

const TakethecourButtonScreen = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [pressStatusthree, setpressStatusthree] = useState(false);
    const onHideUnderlaythree = () => {
        setpressStatusthree(false);
    }
    const onShowUnderlaythree = () => {
        setpressStatusthree(true);
    }
    const {navigation} = props;
    const renderNavBar = () => (
        <View style={Styles.navContainer}>
            <View style={Styles.navBar}>
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('OverViewandLessonsTabScreen', {
                })}>
                    <IconF
                        size={40}
                        name="chevron-small-left"
                        style={{ color: colorrdata }}
                    />
                </TouchableOpacity>
                <View style={Styles.backarrowwork}>
                    <ColorPicker />
                    <TouchableOpacity style={Styles.plusiconandtextview} onPress={
                        () => navigation.navigate('Checkoutscreen')
                    }>
                        <IconZ
                            size={25}
                            name="shoppingcart"
                            color={colorrdata}
                        />
                    </TouchableOpacity>
                </View>
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
                        <View style={Styles.whiteboxwhishlist}>
                            <View style={Styles.flexDirectiwhilist}>
                                <View style={Styles.textviewsetwhishlist}>
                                    <Text style={Styles.designfonttext}>C Programming Course for Beginners and Intermediate Level</Text>
                                    <View style={Styles.heightset}>
                                        <Text style={Styles.dolardigittext}>You will get unlimited access to ecery class you want for a year.All lessons for you auto-renews annually</Text>
                                    </View>
                                    <View style={Styles.flexrowyearlybutton}>
                                        <View>
                                            <Text style={Styles.onlydigittext}>$299.99/Year</Text>
                                        </View>
                                        <View style={Styles.setbuttonwidth}>
                                            <Button
                                                title="Buy Yearly"
                                                onHideUnderlay={onHideUnderlaythree.bind(this)}
                                                onShowUnderlay={onShowUnderlaythree.bind(this)}
                                                color={[pressStatusthree ? { color: colorrdata } : { color: 'white' }]}
                                                buttonStyle={{ borderColor: colorrdata, backgroundColor: colorrdata, }}
                                                onPress={
                                                    () => navigation.navigate('Checkoutscreen')
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.whiteboxwhishlist}>
                            <View style={Styles.flexDirectiwhilist}>
                                <View style={Styles.textviewsetwhishlist}>
                                    <Text style={Styles.designfonttext}>Selenium WebDriver with Java - Basics to Advanced + Frameworks</Text>
                                    <View style={Styles.heightset}>
                                        <Text style={Styles.dolardigittext}>A good choice for who want to learn a single class for a long time.</Text>
                                    </View>
                                    <View style={Styles.flexrowyearlybutton}>
                                        <View>
                                            <Text style={Styles.onlydigittext}>$59/once</Text>
                                        </View>
                                        <View style={Styles.setbuttonwidth}>
                                            <Button
                                                title="Buy Once"
                                                buttonStyle={{ borderColor: colorrdata, backgroundColor: colorrdata, }}
                                                onPress={
                                                    () => navigation.navigate('Checkoutscreen')
                                                }
                                            />
                                        </View>
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
                headerMaxHeight={HEADER_HEIGHT}
                headerMinHeight={HEADER_SETHEIGHT}
                navbarColor="rgba(223,238,255,1)"
                titleStyle={Styles.titleStyle}
                title={title()}
                backgroundImage={require('../image/sswipe1img.png')}
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
export default TakethecourButtonScreen;

const title = () => {
    return (
        <View style={Styles.allheadertitleminview}>
            <View style={Styles.computerscrinceview} >
                <Text style={Styles.consoledeclopmenttextheader}>Console Development Basics With Unity</Text>
            </View>
        </View>
    );
}
