import React from 'react';
import { TouchableOpacity, View, Text } from "react-native";
import Styles from '../style/SearchTabBarScreenStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from '../SplashScreen';
import IconF from 'react-native-vector-icons/Entypo';
import Swiperscreen from '../Swiperscreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import OtpverfyScreen from '../Screens/OtpverfyScreen';
import HomeScsreen from '../Screens/HomeScsreen';
import ProfileScreen from '../Components/BottomTabAllScreen/ProfileScreen';
import DrawerNavigationAppSettings from '../Components/Settings/DrawerNavigationAppSettings';
import ArtPhotographyScreen from '../Screens/ArtPhotographyScreen';
import InstructorScreen from '../Screens/InstructorScreen';
import MyCourseTabbarScreen from '../Components/BottomTabAllScreen/MyCourseTabbarScreen';
import PopularCoursesScreen from '../Screens/PopularCoursesScreen';
import TakethecourButtonScreen from '../Screens/TakethecourButtonScreen';
import WatchTrailerScreen from '../Screens/WatchTrailerScreen';
import OverViewandLessonsTabScreen from '../Screens/OverViewandLessonsTabScreen';
import DrawerNavigationNotification from '../Components/Notification/DrawerNavigationNotification';
import ExamScreen from '../Components/BottomTabAllScreen/ExamScreenfile/ExamScreen';
import SelectExamScreen from '../Components/BottomTabAllScreen/ExamScreenfile/SelectExamScreen';
import ExamQustionScreen from '../Components/BottomTabAllScreen/ExamScreenfile/ExamQustionScreen';
import ExamMarkSheetNumberScreen from '../Components/BottomTabAllScreen/ExamScreenfile/ExamMarkSheetNumberScreen';
import Downloadcertyficate from '../Components/BottomTabAllScreen/ExamScreenfile/Downloadcertyficate';
import ExamResultsScreen from '../Components/BottomTabAllScreen/ExamScreenfile/ExamResultsScreen';
import SearchTabBarScreen from '../Screens/SearchTabBarScreen';
import WishlistTabBarScreen from '../Components/BottomTabAllScreen/WishlistTabBarScreen';
import RegistrationSuccessful from '../Screens/RegistrationSuccessful';
import AllSliderMinScreen from '../Components/BottomTabAllScreen/AllSliderMinScreen';
import ReviewsScreen from '../Screens/ReviewsScreen';
import CongrejulationScreen from '../Screens/CongrejulationScreen';
import DrawerNavigationHomeScreen from '../Components/BottomTabDrawerNAVIGATION/DrawerNavigationHomeScreen';
import DrawerNavigationMyCourses from '../Components/BottomTabDrawerNAVIGATION/DrawerNavigationMyCourses';
import DrawerNavigationExam from '../Components/BottomTabDrawerNAVIGATION/DrawerNavigationExam';
import DrawerNavigationWishilist from '../Components/BottomTabDrawerNAVIGATION/DrawerNavigationWishilist';
import DrawerNavigationProfile from '../Components/BottomTabDrawerNAVIGATION/DrawerNavigationProfile';
import Checkoutscreen from '../Screens/Checkoutscreen';
import { useSelector } from "react-redux";
import IconZ from 'react-native-vector-icons/AntDesign';
import ColorPicker from '../Components/Commonfile/ColorPicker';
import PaymentScreen from '../Screens/PaymentScreen';
import VideoCallScreen from '../Components/Commonfile/VideoCallScreen';
import EndCallScreen from '../Components/Commonfile/EndCallScreen';
import ChartScreen from '../Screens/Chartscreen/ChartScreen';
import ChartScreenCustomeSidebar from '../Screens/Chartscreen/ChartScreenCustomeSidebar';
import InstructorsScreenCustomeSidebar from '../Screens/InstructorsProfiledcreen/InstructorsScreenCustomeSidebar';
import InstructorsDetaileScreen from '../Screens/InstructorsDetaileScreen';
import MeetingScreenCustomeSidebar from '../Screens/Mettinglistdata/MeetingScreenCustomeSidebar';
import PurcherHistorySidebar from '../Screens/PurchaseHistory/PurcherHistorySidebar';
import CreditCardScreen from '../Screens/CreditCardScreen';

const Stack = createStackNavigator();

const App = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Swiperscreen"
          component={Swiperscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: null, headerShown: false,
          }}
        />

        <Stack.Screen
          name="OtpverfyScreen"
          component={OtpverfyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScsreen"
          component={HomeScsreen}
          options={{
            title: 'Home', headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigationAppSettings"
          component={DrawerNavigationAppSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArtPhotographyScreen"
          component={ArtPhotographyScreen}
          options={{
            title: 'Aws Certification', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",

              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,

            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={Styles.flexsewtrwo}>
                  <ColorPicker />
                  <TouchableOpacity style={Styles.rightsidesetpadding} onPress={
                    () => navigation.navigate('Checkoutscreen')
                  }>
                    <IconZ
                      size={25}
                      name="shoppingcart"
                      color={colorrdata}
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />
        <Stack.Screen
          name="InstructorScreen"
          component={InstructorScreen}
          options={{
            title: 'Information', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'rgba(254,238,245,1)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="MyCourseTabbarScreen"
          component={MyCourseTabbarScreen}
          options={{
            title: 'Information', headerShown: false,
            headerTitleStyle: {
              color: 'white',
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'hsl(216.8, 90.7%, 38%)',

            },
          }}
        />
        <Stack.Screen
          name="PopularCoursesScreen"
          component={PopularCoursesScreen}
          options={{ title: 'Information', headerShown: false, }}
        />
        <Stack.Screen
          name="TakethecourButtonScreen"
          component={TakethecourButtonScreen}
          options={{ title: 'Information', headerShown: false, }}
        />
        <Stack.Screen
          name="WatchTrailerScreen"
          component={WatchTrailerScreen}
          options={{ title: 'Information', headerShown: false, }}
        />
        <Stack.Screen
          name="OverViewandLessonsTabScreen"
          component={OverViewandLessonsTabScreen}
          options={{ title: 'Information', headerShown: false, }}
        />
        <Stack.Screen
          name="DrawerNavigationNotification"
          component={DrawerNavigationNotification}
          options={{
            title: 'My Notification', headerShown: false,
          }}
        />
        <Stack.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{
            title: 'Exam', headerShown: false,
            headerTitleStyle: {
              color: 'white',
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'hsl(214.3, 83.2%, 51%)',
            },
          }}
        />
        <Stack.Screen
          name="SelectExamScreen"
          component={SelectExamScreen}
          options={{
            title: 'Select Exam', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },

          }}
        />
        <Stack.Screen
          name="ExamQustionScreen"
          component={ExamQustionScreen}
          options={{
            title: 'Exam Question', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },

          }}
        />
        <Stack.Screen
          name="ExamMarkSheetNumberScreen"
          component={ExamMarkSheetNumberScreen}
          options={{
            title: 'Exam Marksheet', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },

          }}
        />
        <Stack.Screen
          name="Downloadcertyficate"
          component={Downloadcertyficate}
          options={{
            title: null, headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },

          }}
        />
        <Stack.Screen
          name="ExamResultsScreen"
          component={ExamResultsScreen}
          options={{
            title: 'Exam Results', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="SearchTabBarScreen"
          component={SearchTabBarScreen}
          options={{
            title: 'Exam Results', headerShown: false,
          }}
        />
        <Stack.Screen
          name="WishlistTabBarScreen"
          component={WishlistTabBarScreen}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistrationSuccessful"
          component={RegistrationSuccessful}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllSliderMinScreen"
          component={AllSliderMinScreen}
          options={{
            title: 'Exam Marksheet', headerShown: false,
            headerTitleStyle: {
              color: 'hsl(214.3, 83.2%, 51%)',
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={'hsl(214.3, 83.2%, 51%)'}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            }
          }}

        />
        <Stack.Screen
          name="ReviewsScreen"
          component={ReviewsScreen}
          options={{
            title: 'Leave A review', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="CongrejulationScreen"
          component={CongrejulationScreen}
          options={{
            title: null, headerShown: true,
            headerTitleStyle: {
              color: 'hsl(214.3, 83.2%, 51%)',
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: 'hsl(214.3, 83.2%, 51%)',
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },

            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },

          }}
        />
        <Stack.Screen
          name="DrawerNavigationHomeScreen"
          component={DrawerNavigationHomeScreen}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigationMyCourses"
          component={DrawerNavigationMyCourses}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigationExam"
          component={DrawerNavigationExam}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigationWishilist"
          component={DrawerNavigationWishilist}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChartScreenCustomeSidebar"
          component={ChartScreenCustomeSidebar}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerNavigationProfile"
          component={DrawerNavigationProfile}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="Checkoutscreen"
          component={Checkoutscreen}
          options={{
            title: 'Checkout', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <ColorPicker />
              );
            }
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            title: 'Payment Confirmation', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
        <Stack.Screen
          name="VideoCallScreen"
          component={VideoCallScreen}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="EndCallScreen"
          component={EndCallScreen}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
            title: null, headerShown: true,
            headerShadowVisible: false,
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={Styles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
                })}>
                  <IconF
                    size={40}
                    name="chevron-small-left"
                    color={colorrdata}
                    style={Styles.iconlessthanback}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="InstructorsScreenCustomeSidebar"
          component={InstructorsScreenCustomeSidebar}
          options={{
            title: 'Instructors', headerShown: false,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
        <Stack.Screen
          name="InstructorsDetaileScreen"
          component={InstructorsDetaileScreen}
          options={{
            title: 'Alesha Dixon Profile', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
        <Stack.Screen
          name="MeetingScreenCustomeSidebar"
          component={MeetingScreenCustomeSidebar}
          options={{
            title: null, headerShown: false,
          }}
        />
        <Stack.Screen
          name="PurcherHistorySidebar"
          component={PurcherHistorySidebar}
          options={{
            title: 'Purchased History', headerShown: null,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
        <Stack.Screen
          name="CreditCardScreen"
          component={CreditCardScreen}
          options={{
            title: 'Add a new Crad', headerShown: true,
            headerTitleStyle: {
              color: colorrdata,
              fontWeight: "700",
              fontSize: 20,
            },
            headerTintColor: colorrdata,
            headerStyle: {
              backgroundColor: 'rgb(254,238,245)',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
          }}
        />
        {/* </Stack.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

