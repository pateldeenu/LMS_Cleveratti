import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationScreen from '../Notification/NotificationScreen';
import CustomSidebarMenu from '../Commonfile/CustomSidebarMenu';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconZ from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Styles from '../../style/HomeScreenStyle';
import colors from '../../Utiles/colors';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={Styles.dravermarginright}>
      <View style={Styles.hometoggleflexsetview}>
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <IconE style={Styles.marginrighthome} name="navicon" color={colorrdata} size={35} />
        </TouchableOpacity>
        <View>
          <Text style={{
            color: colorrdata,
            fontSize: 23,
            fontWeight: '700',
          }}>My Notification</Text>
        </View>
      </View>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="NotificationScreen">
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: null, headerShown: true,
          headerTitleStyle: {
            color: colors.theme_backgound,
            fontWeight: "700",
            fontSize: 20,
          },
          headerTintColor: colors.theme_backgound,
          headerStyle: {
            backgroundColor: 'rgb(254,238,245)',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerRight: () => {
            const { colorrdata } = useSelector(state => state.commonReducer) || {};
            const navigation = useNavigation();
            return (
              <View style={Styles.flexset}>
                <TouchableOpacity onPress={
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
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{ drawerLabel: 'First page Option', headerShown: false, }}
        component={firstScreenStack} />
    </Drawer.Navigator>
  );
}
export default App;
