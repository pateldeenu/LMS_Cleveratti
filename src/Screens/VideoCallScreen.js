import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import images from '../image';
import Styles from '../style/VideocallStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import IcoE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/FontAwesome';
import IconV from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';
import { useTogglePasswordVisibility } from '../Utiles/MuteandUnMuteCall';
import { useSelector } from "react-redux";

const VideoCall = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [Muteicon, SetMuteicon] = useState(0)
    const [Muteicontwo, SetMuteicontwo] = useState(0)
    const [Muteiconthree, SetMuteiconthree] = useState(0)
    const [Muteiconsix, SetMuteiconsix] = useState(0)

    const { rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    const { rightIconfour, text, handlePasswordVisibilityfour } =
        useTogglePasswordVisibility();

    const { imageset, handlePasswordVisibilityfive } =
        useTogglePasswordVisibility();
    StatusBar.setBackgroundColor(colorrdata);

    return (
        <View style={Styles.minstyleviewphotograpgy}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={Styles.minflexview}>
                        <View style={Styles.minviewsigninscreen}>
                            <View style={Styles.setimageviewcenter}>
                                <Image style={Styles.graphimagstyle} resizeMode='stretch' source={images.videocall_five_img} />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={Styles.setminviewcenterrecording}>
                <View style={Styles.startrecordingmetting}>
                    <View style={{
                        borderWidth: 1,
                        height: 27,
                        width: 27,
                        borderColor: colorrdata,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                    }}>
                        <IconO name='dot-fill' color={'red'} size={25} />
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'DMSans-Medium',
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            color: colorrdata,
                        }}>17:42</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.flexrowtextimage}>
                <View style={Styles.setfourimgcenterview}>
                    <View>
                        <View style={Styles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_four_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteicon === 0 ?
                            <TouchableOpacity onPress={() => SetMuteicon(1)} style={Styles.setmuteicon}>
                                <IconM name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteicon(0)} style={Styles.setmuteicon}>
                                <IconM name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={Styles.namestyleset}>Nikita</Text>
                    </View>
                    <View>
                        <View style={Styles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_three_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteiconthree === 0 ?
                            <TouchableOpacity onPress={() => SetMuteiconthree(1)} style={Styles.setmuteicon}>
                                <IconM name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteiconthree(0)} style={Styles.setmuteicon}>
                                <IconM name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={Styles.namestyleset}>Melissa</Text>
                    </View>
                    <View>
                        <View style={Styles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_two_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteicontwo === 0 ?
                            <TouchableOpacity onPress={() => SetMuteicontwo(1)} style={Styles.setmuteicon}>
                                <IconM name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteicontwo(0)} style={Styles.setmuteicon}>
                                <IconM name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={Styles.namestyleset}>John Doe</Text>
                    </View>
                    <View>
                        <View style={Styles.twoimagewisth}>
                            <TouchableOpacity>
                                <Image style={Styles.imagsetstyle} resizeMode="cover" source={images.videocall_one_img} />
                            </TouchableOpacity>
                        </View>
                        {Muteiconsix === 0 ?
                            <TouchableOpacity onPress={() => SetMuteiconsix(1)} style={Styles.setmuteicon}>
                                <IconM name='microphone-slash' color={'white'} size={17} />
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => SetMuteiconsix(0)} style={Styles.setmuteicon}>
                                <IconM name='microphone' color={'white'} size={17} />
                            </TouchableOpacity>}
                        <Text style={Styles.namestyleset}>Joe Minoso</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.setspacediv}>
                <View style={Styles.setpaddingright}>
                    <View style={Styles.seticonview}>
                        <View>
                            <View style={Styles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={Styles.microphone} onPress={handlePasswordVisibilityfive}>
                                    <IcoE name='plus' size={20} color={'white'} style={Styles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: colorrdata,
                                    fontFamily: 'DMSans-Medium',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    paddingTop: 10,
                                }}>Present</Text>
                            </View>
                        </View>
                        <View>
                            <View style={Styles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={Styles.microphone} onPress={handlePasswordVisibility}>
                                    <IconM name={rightIcon} size={20} color={'white'} style={Styles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: colorrdata,
                                    fontFamily: 'DMSans-Medium',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    paddingTop: 10,
                                }}>Mute</Text>
                            </View>
                        </View>

                        <View>
                            <View style={Styles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={Styles.microphone} onPress={handlePasswordVisibilityfour}>
                                    <IconV name={rightIconfour} color={'white'} size={20} style={Styles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: colorrdata,
                                    fontFamily: 'DMSans-Medium',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    paddingTop: 10,
                                }}>camera</Text>
                            </View>
                        </View>
                        <View>
                            <View style={Styles.seticonviewandtextwidthset}>
                                <TouchableOpacity style={Styles.iconpositionset} onPress={
                                    () => navigation.navigate('EndCallScreen')
                                }>
                                    <Icon name="call" color={'white'} size={20} style={Styles.eyeiconset} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: colorrdata,
                                    fontFamily: 'DMSans-Medium',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    paddingTop: 10,
                                }}>End Call</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default VideoCall;