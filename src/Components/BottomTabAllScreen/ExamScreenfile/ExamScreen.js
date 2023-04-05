import React from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import Styles from '../../../style/ExamScreenStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";

const ExamScreen = (props) => {
    const {navigation} = props;
    const [text, onChangeText] = React.useState("");
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <>
            <View style={Styles.minstyleviewphotograpgy}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{
                            width: '100%',
                            height: 'auto',
                        }}>
                        <KeyboardAvoidingView enabled>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
                                <View style={Styles.minflexview}>
                                    <View style={Styles.minviewsigninscreen}>
                                        <Text style={Styles.examtitle}>Which exam are you preparing for ?</Text>
                                        <View style={Styles.searchbgcolorset}>
                                            <TouchableOpacity style={Styles.inputUnderLine}>
                                                <View style={Styles.inputviewset}>
                                                    <TextInput
                                                        style={Styles.colorback}
                                                        onChangeText={onChangeText}
                                                        value={text}
                                                        placeholder="Search for your exam here"
                                                        placeholderTextColor={'black'}
                                                    />
                                                    <Icon
                                                        size={25}
                                                        name="search1"
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={Styles.marginbottomspace}>
                                            <View style={Styles.flexexamboxview}>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>

                                                        <View style={Styles.examimagview}>
                                                            <IconE
                                                                size={30}
                                                                name="creative-cloud"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>Cloud Practitioner</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconE
                                                                size={30}
                                                                name="code"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>Developer</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={Styles.flexexamboxview}>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconM
                                                                size={30}
                                                                name="head-cog-outline"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>Solutions Architect</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconF
                                                                size={30}
                                                                name="user-cog"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>SysOps Administrator</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={Styles.flexexamboxview}>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconF
                                                                size={30}
                                                                name="cogs"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>DevOps Engineer</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconF
                                                                size={30}
                                                                name="people-carry"
                                                                color={colorrdata}
                                                            />

                                                        </View>
                                                        <Text style={Styles.boxintitle}>Devops Training</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={Styles.flexexamboxview}>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconM
                                                                size={30}
                                                                name="google-analytics"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>Data Analytics</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                    () => navigation.navigate('SelectExamScreen')
                                                }>
                                                    <View style={Styles.flexDirectiwhilist}>
                                                        <View style={Styles.examimagview}>
                                                            <IconM
                                                                size={30}
                                                                name="desktop-mac-dashboard"
                                                                color={colorrdata}
                                                            />
                                                        </View>
                                                        <Text style={Styles.boxintitle}>Oprating Saystem</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </LinearGradient>
            </View>
        </>
    );
};

export default ExamScreen;
