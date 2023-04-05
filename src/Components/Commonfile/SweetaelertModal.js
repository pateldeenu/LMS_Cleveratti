import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View } from "react-native";
import Style from '../../style/SwitalertComponets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import Button from '../Commonfile/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";

function SweetaelertModal(props) {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    return (
        <View>
            <View style={Style.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={Style.setbgcolorgrsay}>
                        <View style={Style.centeredView}>
                            <View style={Style.modalView}>
                                <View style={Style.setroundcenter}>
                                    <View style={{
                                        borderColor:colorrdata,
                                        borderWidth:3,
                                        height:80,
                                        width:80,
                                        borderRadius:100,
                                        flexDirection:'row',
                                        alignContent:'center',
                                        justifyContent:'center'
                                    }}>
                                        <IconF style={Style.setbackgroundicon} name="check" color={colorrdata} size={45} />
                                    </View>
                                </View>
                                <View style={Style.registertextset}>
                                    <Text style={Style.settext}>{props.message}</Text>
                                </View>
                                <View style={Style.buttonminview}>
                                    <View style={Style.setokbutton}>
                                        <Button buttonStyle={{borderColor: colorrdata,backgroundColor: colorrdata,}} title="Ok"
                                          onPress={() => { setModalVisible(!modalVisible); navigation.navigate(props.link) }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};
export default SweetaelertModal;

