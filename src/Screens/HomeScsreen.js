import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconH from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import AllSliderMinScreen from '../Components/BottomTabAllScreen/AllSliderMinScreen';
import MyCourseTabbarScreen from '../Components/BottomTabAllScreen/MyCourseTabbarScreen';
import ExamScreen from '../Components/BottomTabAllScreen/ExamScreenfile/ExamScreen';
import WishlistTabBarScreen from '../Components/BottomTabAllScreen/WishlistTabBarScreen';
import ProfileScreen from '../Components/BottomTabAllScreen/ProfileScreen';
import IconB from 'react-native-vector-icons/Entypo';
import CustomSidebarMenu from '../Components/Commonfile/CustomSidebarMenu';
import { useSelector } from "react-redux";
import ColorPicker from '../Components/Commonfile/ColorPicker';
import Style from '../style/CommonButtonStyle';
import Styles from '../style/HomeScreenStyle';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconN from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconC from 'react-native-vector-icons/Ionicons';
import colors from '../Utiles/colors';
import RouteName from '../routes/RouteName';

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
	return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
			<CustomSidebarMenu {...props} />
		</DrawerContentScrollView>
	);
}

function MyDrawer() {
	return (
		<Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerSidebarScreen {...props} />}>
			<Drawer.Screen name="Home"
				options={{ headerShown: false }}
				component={HomeScsreen} />
		</Drawer.Navigator>
	);
}
function Root() {
	return (
		<Stack.Navigator headerMode="screen">
			<Stack.Screen
				name="Drawer"
				component={MyDrawer}
				options={{
					title: '',
					headerShown: false
				}}
			/>
			<Stack.Screen name="Home" component={HomeScsreen}
				options={{
					title: '',
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}
export default Root;

function HomeTabScreenStack({ navigation }) {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Stack.Navigator initialRouteName="AllSliderMinScreen">
			<Stack.Screen
				name="AllSliderMinScreen"
				component={AllSliderMinScreen}
				options={{
					title: 'Home', headerShown: true,
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 20,
						color: colorrdata,
					},
					headerStyle: {
						backgroundColor: 'rgb(254,238,245)',
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
						</TouchableOpacity>
					),
					headerRight: () => {
						const { colorrdata } = useSelector(state => state.commonReducer) || {};
						return (
							<View style={Styles.notificationivonandimhflexview}>
								<ColorPicker />
								<TouchableOpacity onPress={
									() => navigation.navigate('SearchTabBarScreen')
								} >
									<IconF
										size={23}
										name="search1"
										color={colorrdata}
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={
									() => navigation.navigate('DrawerNavigationNotification')
								} >
									<IconN
										size={23}
										name="notifications-outline"
										style={Styles.marginleftandrightsettext}
										color={colorrdata}
									/>
								</TouchableOpacity>
								<TouchableOpacity style={Styles.iconRight} onPress={
									() => navigation.navigate('Checkoutscreen')
								} >
									<IconG
										size={25}
										name="shoppingcart"
										color={colorrdata}
									/>
								</TouchableOpacity>
							</View>
						)
					}
				}}
			/>
		</Stack.Navigator>
	);
}
function MycoursesScreenStack({ navigation }) {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Stack.Navigator initialRouteName="MyCourseTabbarScreen">
			<Stack.Screen
				name="MyCourseTabbarScreen"
				component={MyCourseTabbarScreen}
				options={{
					title: 'My Courses', headerShown: true,
					headerTitleStyle: {
						color: colorrdata,
						fontWeight: "700",
						fontSize: 20,
					},
					headerTintColor: colors.theme_backgound,
					headerStyle: {
						backgroundColor: 'rgb(254,238,245)',
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
						</TouchableOpacity>
					),
					headerRight: () => {
						const { colorrdata } = useSelector(state => state.commonReducer) || {};
						return (
							<View style={Styles.checkoutimage}>
								<ColorPicker />
								<TouchableOpacity style={{ marginRight: 15 }} onPress={
									() => navigation.navigate('MeetingsListData')
								}>
									<IconM name="television-classic" size={23} color={colorrdata} />
								</TouchableOpacity>
								<TouchableOpacity style={{
									marginRight: 15, position: 'relative',
									top: 3
								}} onPress={
									() => navigation.navigate('ChartScreenCustomeSidebar')
								}>
									<IconC name="chatbox-ellipses-outline" size={23} color={colorrdata} />
								</TouchableOpacity>
								<TouchableOpacity style={{ marginRight: 15 }} onPress={
									() => navigation.navigate('Checkoutscreen')
								}>
									<IconG
										size={25}
										name="shoppingcart"
										color={colorrdata}
									/>
								</TouchableOpacity>
							</View>
						)
					}
				}}
			/>
		</Stack.Navigator>
	);
}
function ExamScreenScreenStack({ navigation }) {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Stack.Navigator initialRouteName="ExamScreen">
			<Stack.Screen
				name="ExamScreen"
				component={ExamScreen}
				options={{
					title: 'Your Exam', headerShown: true,
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 20,
						color: colorrdata,
					},
					headerStyle: {
						backgroundColor: 'rgb(254,238,245)',
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
						</TouchableOpacity>
					),
					headerRight: () => {
						const { colorrdata } = useSelector(state => state.commonReducer) || {};
						return (
							<View style={Styles.checkoutimage}>
								<ColorPicker />
								<TouchableOpacity style={{ marginRight: 15 }} onPress={
									() => navigation.navigate('Checkoutscreen')
								}>
									<IconG
										size={25}
										name="shoppingcart"
										color={colorrdata}
									/>
								</TouchableOpacity>
							</View>
						)
					}
				}}
			/>
		</Stack.Navigator>
	);
}
function WishlistTabBarScreenStack({ navigation }) {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Stack.Navigator initialRouteName="WishlistTabBarScreen">
			<Stack.Screen
				name="WishlistTabBarScreen"
				component={WishlistTabBarScreen}
				options={{
					title: 'Wishlist', headerShown: true,
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 20,
						color: colorrdata,
					},
					headerStyle: {
						backgroundColor: 'rgb(254,238,245)',
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
						</TouchableOpacity>
					),
					headerRight: () => {
						const { colorrdata } = useSelector(state => state.commonReducer) || {};
						return (
						  <View style={Styles.checkoutimage}>
							<ColorPicker />
							<TouchableOpacity style={{ marginRight: 15 }} onPress={
							  () => navigation.navigate('Checkoutscreen')
							}>
							  <IconG
								size={25}
								name="shoppingcart"
								color={colorrdata}
							  />
							</TouchableOpacity>
						  </View>
						)
					  }
				}}
			/>
		</Stack.Navigator>
	);
}
function ProfileScreenScreenStack({ navigation }) {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Stack.Navigator initialRouteName="ProfileScreen">
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					title: 'My Profile', headerShown: true,
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 20,
						color: colorrdata,
					},
					headerStyle: {
						backgroundColor: 'rgb(254,238,245)',
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

export function HomeScsreen() {
	const { colorrdata } = useSelector(state => state.commonReducer) || {};
	return (
		<Tabs.Navigator
			screenOptions={{ headerShown: false }}
			tabBarOptions={{			
				activeTintColor: colorrdata,
				inactiveTintColor: 'gray',
				labeled: true,
				labelStyle: {
				},
				tabStyle: {
					height: 49,
					backgroundColor: 'rgba(223,238,255,1)',
					paddingTop: 0,
					paddingBottom: 5,
				},
			}}
		>
			<Tabs.Screen
				name={RouteName.HOME_TAB_SET}
				component={HomeTabScreenStack}
				options={{
					tabBarIcon: ({focused}) => (
						<Icon
							size={19}
							name="home"
							style={{ color: focused ? colorrdata : 'gray' }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={RouteName.MY_COURSES_TAB}
				component={MycoursesScreenStack}
				options={{
					tabBarIcon: ({focused}) => (
						<View>
							<IconH name="copy1" style={{ color: focused ? colorrdata : 'gray' }} size={17} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name={RouteName.EXAM_TAB}
				component={ExamScreenScreenStack}
				options={{
					tabBarIcon: ({focused}) => (
						<View>
							<IconB name="open-book" style={{ color: focused ? colorrdata : 'gray' }} size={17} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name={RouteName.WHISHILIST_TAB}
				component={WishlistTabBarScreenStack}
				options={{
					tabBarIcon: ({focused}) => (
						<IconH
							size={19}
							name="hearto"
							style={{ color: focused ? colorrdata : 'gray' }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name={RouteName.PROFILE_TAB}
				component={ProfileScreenScreenStack}
				options={{
					tabBarIcon: ({focused}) => (
						<Icon
							size={19}
							name="user"
							style={{ color: focused ? colorrdata : 'gray' }}
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	)
}


