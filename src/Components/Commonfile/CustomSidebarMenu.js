import React, {useState} from "react";
import { Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import IconG from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Feather';
import Styles from '../../style/CustomeSlidebar';
import IconF from 'react-native-vector-icons/AntDesign';
import styles from '../../style/AccountSetingsScreenStyle';
import IconH from 'react-native-vector-icons/AntDesign';
import IconT from 'react-native-vector-icons/Octicons';
import IconC from 'react-native-vector-icons/Ionicons';
import IconZ from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconB from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import Button from '../Commonfile/Button';
import RouteName from '../../routes/RouteName';

const CustomSidebarMenu = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [modalVisiblefour, setModalVisiblefour] = useState(false);
  const { navigation } = props;
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
        <View style={Styles.customslidebarmenu}>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction(RouteName.HOME_TAB_SET)
          }>
            <IconE name="home" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction(RouteName.MY_COURSES_TAB)
          }>
            <IconH name="copy1" color={colorrdata} size={23} />
            <Text style={Styles.hometextstyle}>My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction(RouteName.EXAM_TAB)
          }>
            <IconB name="open-book" color={colorrdata} size={23} />
            <Text style={Styles.hometextstyle}>Exam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction(RouteName.WHISHILIST_TAB)
          }>
            <IconH name="hearto" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction(RouteName.PROFILE_TAB)
          }>
            <IconE name="user" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('DrawerNavigationNotification')
          }>
            <IconG name="notifications-outline" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('DrawerNavigationAppSettings')
          }>
            <IconH name="setting" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('MeetingScreenCustomeSidebar')
          }>
            <IconM name="television-classic" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Online class</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('ChartScreenCustomeSidebar')
          }>
            <IconC name="chatbox-ellipses-outline" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('InstructorsScreenCustomeSidebar')
          }>
            <IconZ name="user-circle-o" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Instructors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.flexrowset} onPress={
            () => Onpressfunction('PurcherHistorySidebar')
          }>
            <IconT name="history" size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Purchase History</Text>
          </TouchableOpacity>
          <View style={Styles.settingandlogout}>
            <TouchableOpacity style={Styles.flexrowset}  onPress={() => setModalVisiblefour(true)}>
              <IconE name="log-out" size={23} color={colorrdata} />
              <Text style={Styles.hometextstyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblefour}
          onRequestClose={() => {

            setModalVisiblefour(!modalVisiblefour);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.setshadowstylemodaltwo}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                  colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                  <View style={styles.setiallpaddingmodal}>
                    <TouchableOpacity style={styles.icomvlose} onPress={() => setModalVisiblefour(!modalVisiblefour)}>
                      <IconF
                        size={25}
                        name="close"
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <Text style={styles.modalTexttwo}>Are You Sure You Want To Sign Out ?</Text>
                    <View style={styles.buttonsetmoddletwobutton}>
                      <View style={styles.marginrightsetview}>
                        <Button onPress={() => setModalVisiblefour(!modalVisiblefour)}  title="Cancel" />
                      </View>
                      <View style={styles.marginrightsetview}>
                        <Button onPress={
                          () => Onpressfunction('SignInScreen')
                        } title="Logout" buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                          buttonTextStyle={{ color: colorrdata }}
                        />
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </View>
        </Modal>
       
      </LinearGradient>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

