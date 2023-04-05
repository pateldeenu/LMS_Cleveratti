import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Modal, Switch, ScrollView, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import Styles from '../../style/AppSettingsScreenStyle';
import Container from '../Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Utiles/colors';
import Button from "../Commonfile/Button";
import { useDispatch, useSelector } from "react-redux";

const AppSettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Container>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                    <View style={Styles.minstyleviewphotograpgy}>
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{
                                width: '100%',
                                height: 'auto',
                            }}>
                            <KeyboardAvoidingView enabled>
                                <View style={Styles.keybordtopviewstyle}>
                                    <View style={Styles.minflexview}>
                                        <View style={Styles.togglrswitchflex}>
                                            <View>
                                                <Text style={Styles.cellulardatatext}>Cellular Data</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.toggleswotchview}>
                                            <Text style={Styles.downlodtoggleswitchtext}>
                                                Cellular Data for Downnloads
                                            </Text>
                                            <View>
                                                <Switch
                                                    trackColor={{ false: "lightgray", true: "lightgray" }}
                                                    thumbColor={isEnabled ? "hsl(214.3, 83.2%, 51%)" : "white"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={toggleSwitch}
                                                    value={isEnabled}
                                                />
                                            </View>
                                        </View>
                                        <Text style={Styles.cellulardatatext}>Video Quality for Downloads</Text>
                                        <View style={Styles.righticonminview}>
                                            <View>
                                                <Text style={Styles.standardrecommedtext}>Standard (recommended)</Text>
                                                <Text style={Styles.downloadfastertext}>Downnloads faster and uses less storage</Text>
                                            </View>
                                            <View>
                                                <IconF
                                                    size={30}
                                                    name="check"
                                                    style={Styles.chekiconstyle}
                                                />
                                            </View>
                                        </View>
                                        <View style={Styles.righticonminview}>
                                            <View>
                                                <Text style={Styles.standardrecommedtext}>High Definition</Text>
                                                <Text style={Styles.downloadfastertext}>Use more storage</Text>
                                            </View>
                                        </View>
                                        <Text style={Styles.offlinedoenloadstextset}>Offline Downloads</Text>
                                        <View style={Styles.righticonminview}>
                                            <View style={Styles.bodysettextwidth}>
                                                <Text style={Styles.standardrecommedtext}>Delete Completed Lessons</Text>
                                                <Text style={Styles.downloadfastertext}>Lessons can automatically delete 24 hours after they are watched in full</Text>
                                            </View>
                                            <View>
                                                <IconF
                                                    size={30}
                                                    name="check"
                                                    style={Styles.chekiconstyle}
                                                />
                                            </View>
                                        </View>
                                        <View style={Styles.righticonminviewtwo}>
                                            <View style={Styles.bodysettextwidth}>
                                                <Text style={Styles.deletedownloads}>Delete All Downloads</Text>
                                                <Text style={Styles.downloadfastertext}>This will remove all downloaded Lessons Videos From your Phone</Text>
                                            </View>
                                            <View style={Styles.centeredView}>
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
                                                                                color={colorrdata}
                                                                            />
                                                                        </TouchableOpacity>
                                                                        <View style={Styles.centericon}>
                                                                            <View style={{
                                                                                    borderWidth:2,
                                                                                    borderRadius:222,
                                                                                    borderColor:colorrdata,
                                                                                    height:80,
                                                                                    width:80,
                                                                                    marginBottom:15,
                                                                                    flexDirection:'row',
                                                                                    justifyContent:'center',
                                                                                    alignItems:'center',
                                                                            }}>
                                                                                <IconF
                                                                                    size={40}
                                                                                    name="check"
                                                                                    color={colorrdata}
                                                                                />
                                                                            </View>
                                                                        </View>
                                                                        <Text style={Styles.modalText}>Deleted Successfully</Text>
                                                                        <View style={Styles.setbuttonwidth}>
                                                                            <Button onPress={() => setModalVisible(!modalVisible)} title="Okay" />
                                                                        </View>
                                                                    </View>
                                                                </LinearGradient>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </Modal>
                                            </View>
                                            <Pressable
                                                onPress={() => setModalVisible(true)}
                                            >
                                                <Icon
                                                    size={30}
                                                    name="delete"
                                                    style={Styles.redcoloricondelete}
                                                />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </LinearGradient>
            </Container>
        </>
    );
};
export default AppSettingsScreen;
