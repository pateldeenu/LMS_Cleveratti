import React, { useState } from "react";
import { Text, Dimensions, View, StatusBar, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import Styles from '../style/OverViewTabScreenStyle';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/AntDesign';
import LessonsTabScreen from '../Components/OverViewandLessonsTabScreen/LessonsTabScreen';
import OverviewTabScreen from '../Components/OverViewandLessonsTabScreen/OverviewTabScreen';
import ReviewsScreen from '../Components/OverViewandLessonsTabScreen/ReviewsScreen';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Style from '../style/CommonButtonStyle';
import Button from '../Components/Commonfile/Button';
import IconH from 'react-native-vector-icons/Entypo';
import { useSelector } from "react-redux";
import ColorPicker from '../Components/Commonfile/ColorPicker';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 280) : 280;
const HEADER_SETHEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 55;


const OverViewandLessonsTabScreen = (props) => {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	const [tabShow, setTabshow] = useState('1');
	const {navigation} = props;

	const variants = {
		loading: {
			opacity: [1, 0, 1],
			transition: { repeat: Infinity, duration: 1.0 }
		},
		stop: {
			opacity: 1
		}
	};

	const renderNavBar = () => (
		<View style={Styles.navContainer} >
			<TouchableOpacity
				style={Styles.hoveraerrorset}
				onPress={
					() => navigation.navigate('HomeScsreen')
				}>
				<View>
					<IconH
						size={40}
						name="chevron-small-left"
						style={{
							color: colorrdata,
							fontFamily: 'DMSans-Bold',
						}}
					/>
				</View>
			</TouchableOpacity>
			
			<View style={Styles.backarrowwork}>
				<ColorPicker />
				<TouchableOpacity style={Styles.plusiconandtextview} onPress={
					() => navigation.navigate('Checkoutscreen')
				}>
					<IconF
						size={25}
						name="shoppingcart"
						color={colorrdata}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
	const title = () => {
		return (
			<View style={Styles.computerscrimceview}>
				<Text style={Styles.computertext}>Computer Science</Text>
				<Text style={Styles.longtextset}>Console Development Basic With Unity</Text>
				<View style={Styles.accountbuttontwo}>
					<Button
						title="Watch Intro Video"
						onPress={
							() => navigation.navigate('WatchTrailerScreen')
						}
						iconnametwo="playcircleo"
						buttonStyle={Style.buttonStyle, { borderColor: colorrdata, backgroundColor: 'white', }}

						buttonTextStyle={{ color: colorrdata, }}
					/>
				</View>
				<View style={Styles.flexrowsetus}>
					<View style={Styles.minviewfoerecious}>
						<Text style={Styles.computertext}>4.3k Reviews</Text>
						<Icon
							size={15}
							name="star"
							style={Styles.stariconstyle}
						/>
						<Icon
							size={15}
							name="star"
							style={Styles.stariconstyle}
						/>
						<Icon
							size={15}
							name="star"
							style={Styles.stariconstyle}
						/>
						<Icon
							size={15}
							name="star"
							style={Styles.stariconstyle}
						/>
						<Icon
							size={15}
							name="star"
							style={Styles.stariconstyle}
						/>
					</View>
					<View>
						<Text style={Styles.longtextsetdigit}>$49</Text>
					</View>
				</View>
			</View>
		);
	}
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<ReactNativeParallaxHeader
				alwaysShowTitle={false}
				alwaysShowNavBar={true}
				headerMaxHeight={HEADER_HEIGHT}
				headerMinHeight={HEADER_SETHEIGHT}
				backgroundImage={require('../image/d.png')}
				extraScrollHeight={0}
				titleStyle={Styles.titleStyle}
				title={title()}
				navbarColor="rgba(254,238,245,1)"
				backgroundImageScale={1.1}
				renderNavBar={renderNavBar}
				renderContent={() => {
					return (
						<Container>
							<LinearGradient
								start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
								colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
								<View>
									<LinearGradient
										start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
										colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
										<View style={Styles.whiteboxwhishlist}>
											<Text onPress={() => setTabshow('1')} style={{
												fontSize: 18,
												color: colorrdata,
												fontFamily: 'DMSans-Bold',
											}}>Description</Text>
											<Text onPress={() => setTabshow('2')} style={{
												fontSize: 18,
												color: colorrdata,
												fontFamily: 'DMSans-Bold',
											}}>Lessons</Text>
											<Text onPress={() => setTabshow('3')} style={{
												fontSize: 18,
												color: colorrdata,
												fontFamily: 'DMSans-Bold',
											}}>Reviews</Text>
										</View>
									</LinearGradient>
									{tabShow == '1' ?
										<View>
											<Text style={{
												position: 'absolute',
												borderBottomColor: colorrdata,
												borderBottomWidth: 2,
												height: Platform.OS === 'ios' ? 3 : 3,
												width: 130,
												top: Platform.OS === 'ios' ? -3 : -3,
												backgroundColor: colorrdata,
											}}></Text>
											<OverviewTabScreen />
										</View>
										: null}
									{tabShow == '2' ?
										<View>
											<Text style={{
												position: 'absolute',
												borderBottomColor: colorrdata,
												borderBottomWidth: 2,
												height: Platform.OS === 'ios' ? 3 : 3,
												width: 110,
												top: Platform.OS === 'ios' ? -3 : -3,
												right: 110,
												backgroundColor: colorrdata,
											}}></Text>
											<LessonsTabScreen />
										</View>
										: null}
									{tabShow == '3' ?
										<View>
											<Text style={{
												position: 'absolute',
												borderBottomColor: colorrdata,
												borderBottomWidth: 2,
												height: Platform.OS === 'ios' ? 3 : 3,
												width: 110,
												top: Platform.OS === 'ios' ? -3 : -3,
												right: 0,
												backgroundColor: colorrdata,
											}}></Text>
											<ReviewsScreen />
										</View>
										: null}
								</View>
							</LinearGradient>
						</Container>
					);
				}}
			/>
			<View style={Styles.positionabsolutesetbutton}>
				<View style={Styles.accountbutton}>
					<View style={Styles.textcenyet}>
						<Text style={Styles.dolardtextset}>$498.00</Text>
					</View>
					<View style={Styles.setbuttonwidthview}>
						<Button title="Buy Now"
							buttonStyle={{ borderColor: colorrdata, backgroundColor: colorrdata, }}
							onPress={
								() => navigation.navigate('TakethecourButtonScreen')
							}
						/>
					</View>
				</View>
			</View>
		</>
	);
}
export default OverViewandLessonsTabScreen;





