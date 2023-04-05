import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Pressable, Modal, TextInput, } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import IconG from 'react-native-vector-icons/Ionicons';
import Styles from '../../style/AccountSetingsScreenStyle';
import { useNavigation } from '@react-navigation/native';
import Container from '../../Components/Commonfile/Container';
import { useTogglePasswordVisibility } from '../useTogglePasswordVisibility';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import Button from '../Commonfile/Button';

const ProfileScreen = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [number, onChangeNumber] = React.useState(null);
    const {navigation} = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
    const [modalVisibleThree, setModalVisibleThree] = useState(false);
    const [modalVisiblefour, setModalVisiblefour] = useState(false);

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    const { passwordVisibilitytwo, rightIcontwo, handlePasswordVisibilitytwo } =
        useTogglePasswordVisibility();
    const [passwordtwo, setPasswordtwo] = useState('');

    const { passwordVisibilitytwoth, rightIcontwoth, handlePasswordVisibilitytwoth } =
        useTogglePasswordVisibility();
    const [passwordtwoth, setPasswordtwoth] = useState('');

    return (
        <>
            <Container>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                    <View style={Styles.whilistminbody}>
                        <View style={Styles.imagcenter}>
                            <View>
                                <Image style={{ height: 100, width: 100, borderRadius: 100, flexDirection: 'row', justifyContent: 'center' }} resizeMode='cover' source={require('../../image/homeslider7.png')} />
                                <Text style={Styles.allisonperry}>Allison perry</Text>
                            </View>
                        </View>
                        <View style={Styles.profiledetailesminview}>
                            <Text style={Styles.editprofileset}>
                                Edit profile
                            </Text>
                            <View style={Styles.phonenumberandicon}>
                                <View style={Styles.setbgwhiteshadow}>
                                    <View>
                                        <Text style={Styles.phonenumbertext}>Phone Number</Text>
                                        <Text style={Styles.digitnumbertext}>96034 56878</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            onPress={() => setModalVisible(true)}
                                        >
                                            <View>
                                                <Icon
                                                    size={30}
                                                    name="pencil"
                                                    style={Styles.iconstyleseacrch}
                                                />
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {

                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={Styles.centeredView}>
                                        <View style={Styles.modalView}>
                                            <View style={Styles.setshadowstylemodaltwo}>
                                                <LinearGradient
                                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                                                    <View style={Styles.setiallpaddingmodal}>
                                                        <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisible(!modalVisible)}>
                                                            <IconF
                                                                size={25}
                                                                name="close"
                                                                color={'black'}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={Styles.modalText}>Change Phone Number</Text>
                                                        <View style={Styles.setbgwhiteshadowinputmodal}>
                                                            <TextInput
                                                                style={Styles.input}
                                                                onChangeText={onChangeNumber}
                                                                value={number}
                                                                placeholder="9603456878"
                                                                placeholderTextColor={'gray'}
                                                                keyboardType="numeric"
                                                            />
                                                        </View>
                                                        <View style={Styles.buttonsetmoddletwobutton}>
                                                            <View style={Styles.marginright}>
                                                                <Button title="Cancel" onPress={() => setModalVisible(!modalVisible)} />
                                                            </View>
                                                            <View style={Styles.marginright}>
                                                                <Button onPress={() => setModalVisible(!modalVisible)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                    buttonTextStyle={{ color: colorrdata }} title="Okay" />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={Styles.phonenumberandicon}>
                                <View style={Styles.setbgwhiteshadow}>
                                    <View style={Styles.setpadiingtext}>
                                        <Text style={Styles.phonenumbertext}>Email</Text>
                                        <Text style={Styles.digitnumbertext}>test@abs.com</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            onPress={() => setModalVisibleTwo(true)}
                                        >
                                            <View>
                                                <Icon
                                                    size={30}
                                                    name="pencil"
                                                    style={Styles.iconstyleseacrch}
                                                />
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisibleTwo}
                                    onRequestClose={() => {

                                        setModalVisible(!modalVisibleTwo);
                                    }}
                                >
                                    <View style={Styles.centeredView}>
                                        <View style={Styles.modalView}>
                                            <View style={Styles.setshadowstylemodaltwo}>
                                                <LinearGradient
                                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                                                    <View style={Styles.setiallpaddingmodal}>
                                                        <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                                                            <IconF
                                                                size={25}
                                                                name="close"
                                                                color={'black'}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={Styles.modalText}>Change Email</Text>
                                                        <View>
                                                            <TextInput
                                                                style={Styles.setbgwhiteshadowinputmodal}
                                                                onChangeText={onChangeNumber}
                                                                placeholder="Krishtiwaston@gmail.com"
                                                                placeholderTextColor={'gray'}

                                                            />
                                                        </View>
                                                        <View style={Styles.buttonsetmoddletwobutton}>
                                                            <View style={Styles.marginright}>

                                                                <Button title="Cancel" onPress={() => setModalVisibleTwo(!modalVisibleTwo)} />
                                                            </View>
                                                            <View style={Styles.marginright}>

                                                                <Button onPress={() => setModalVisibleTwo(!modalVisibleTwo)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                    buttonTextStyle={{ color: colorrdata }} title="Okay" />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={Styles.phonenumberandicon}>
                                <View style={Styles.setbgwhiteshadow}>
                                    <View>
                                        <Text style={Styles.phonenumbertext}>Password</Text>
                                        <Text style={Styles.digitnumbertext}>******</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            onPress={() => setModalVisibleThree(true)}
                                        >
                                            <View>
                                                <Icon
                                                    size={30}
                                                    name="pencil"
                                                    style={Styles.iconstyleseacrch}
                                                />
                                            </View>
                                        </Pressable>
                                    </View>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisibleThree}
                                    onRequestClose={() => {

                                        setModalVisibleThree(!modalVisibleThree);
                                    }}
                                >
                                    <View style={Styles.centeredView}>
                                        <View style={Styles.modalView}>
                                            <View style={Styles.setshadowstylemodaltwo}>
                                                <LinearGradient
                                                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                                                    <View style={Styles.setiallpaddingmodal}>
                                                        <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisibleThree(!modalVisibleThree)}>
                                                            <IconF
                                                                size={25}
                                                                name="close"
                                                                color={'black'}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={Styles.modalText}>Change Your Password</Text>

                                                        <View style={Styles.spaceview}>
                                                            <View style={Styles.inputUnderLine}>
                                                                <View style={Styles.inputviewset}>
                                                                    <TextInput
                                                                        style={Styles.textpassworedsert}
                                                                        name="password"
                                                                        placeholder="Old Password"
                                                                        placeholderTextColor={'black'}
                                                                        autoCapitalize="none"
                                                                        autoCorrect={false}
                                                                        textContentType="newPassword"
                                                                        secureTextEntry={passwordVisibility}
                                                                        value={password}
                                                                        enablesReturnKeyAutomatically
                                                                        placeholderTextColor={'gray'}
                                                                        onChangeText={text => setPassword(text)}
                                                                    />
                                                                    <Pressable onPress={handlePasswordVisibility}>
                                                                        <IconG name={rightIcon} size={25} style={Styles.eyeiconset} />
                                                                    </Pressable>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={Styles.spaceview}>
                                                            <View style={Styles.inputUnderLine}>
                                                                <View style={Styles.inputviewset}>
                                                                    <TextInput
                                                                        style={Styles.textpassworedsert}
                                                                        name="password"
                                                                        placeholder="New Password"
                                                                        placeholderTextColor={'black'}
                                                                        autoCapitalize="none"
                                                                        placeholderTextColor={'gray'}
                                                                        autoCorrect={false}
                                                                        textContentType="newPassword"
                                                                        secureTextEntry={passwordVisibilitytwo}
                                                                        value={passwordtwo}
                                                                        enablesReturnKeyAutomatically
                                                                        onChangeText={text => setPasswordtwo(text)}
                                                                    />
                                                                    <Pressable onPress={handlePasswordVisibilitytwo}>
                                                                        <IconG name={rightIcontwo} size={25} style={Styles.eyeiconset} />
                                                                    </Pressable>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={Styles.spaceview}>
                                                            <View style={Styles.inputUnderLine}>
                                                                <View style={Styles.inputviewset}>
                                                                    <TextInput
                                                                        style={Styles.textpassworedsert}
                                                                        name="Confirm New Password"
                                                                        placeholder="Conform Password"
                                                                        placeholderTextColor={'black'}
                                                                        placeholderTextColor={'gray'}
                                                                        autoCapitalize="none"
                                                                        autoCorrect={false}
                                                                        textContentType="newPassword"
                                                                        secureTextEntry={passwordVisibilitytwoth}
                                                                        value={passwordtwoth}
                                                                        enablesReturnKeyAutomatically
                                                                        onChangeText={text => setPasswordtwoth(text)}
                                                                    />
                                                                    <Pressable onPress={handlePasswordVisibilitytwoth}>
                                                                        <IconG name={rightIcontwoth} size={25} style={Styles.eyeiconset} />
                                                                    </Pressable>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <Text></Text>
                                                        <View style={Styles.buttonsetmoddletwobutton}>
                                                            <View style={Styles.marginright}>
                                                                <Button onPress={() => setModalVisibleThree(!modalVisibleThree)} title="Cancel" />
                                                            </View>
                                                            <View style={Styles.marginright}>
                                                                <Button onPress={() => setModalVisibleThree(!modalVisibleThree)} buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
                                                                    buttonTextStyle={{ color: colorrdata }} title="Okay" />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </LinearGradient>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <TouchableOpacity onPress={
                                () => navigation.navigate('DrawerNavigationAppSettings')
                            } style={Styles.settingviewset}>
                                <View
                                    style={Styles.iconandtextflexset}
                                >
                                    <View>
                                        <Text style={Styles.phonenumbertexttwo}>Settings</Text>
                                    </View>
                                    <View>
                                        <IconF
                                            size={27}
                                            name="arrowright"
                                            style={Styles.iconlessthanback}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisiblefour}
                                onRequestClose={() => {

                                    setModalVisiblefour(!modalVisiblefour);
                                }}
                            >
                                <View style={Styles.centeredView}>
                                    <View style={Styles.modalView}>
                                        <View style={Styles.setshadowstylemodaltwo}>
                                            <LinearGradient
                                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                                                <View style={Styles.setiallpaddingmodal}>
                                                    <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisiblefour(!modalVisiblefour)}>
                                                        <IconF
                                                            size={25}
                                                            name="close"
                                                            color={'black'}
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={Styles.modalText}>Are You Sure You Want To Sign Out ?</Text>
                                                    <View style={Styles.buttonsetmoddletwobutton}>
                                                        <View style={Styles.marginrightsetview}>
                                                            <Button title="Cancel" />
                                                        </View>
                                                        <View style={Styles.marginrightsetview}>
                                                            <Button title="Logout" buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', }}
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
                            <Pressable
                                onPress={() => setModalVisiblefour(true)}
                            >
                                <View style={Styles.iconandtextflexset}>
                                    <View>
                                        <Text style={Styles.logoutdivset}>Logout</Text>
                                    </View>
                                    <View>
                                        <IconF
                                            size={27}
                                            name="arrowright"
                                            style={Styles.iconlessthanback}
                                        />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </LinearGradient>
            </Container>
        </>
    );
};
export default ProfileScreen;


