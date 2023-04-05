import React from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import Styles from '../../../style/SelectExamScreenStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import Button from '../../Commonfile/Button';

const SelectExamScreen = (props) => {
    const {navigation} = props;
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']} >
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
                                <View style={Styles.marginbottomspace}>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 1</Text>
                                                        <Text style={Styles.dolardigittext}>3k + attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 2</Text>
                                                        <Text style={Styles.dolardigittext}>14.1k + attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 3</Text>
                                                        <Text style={Styles.dolardigittext}>8.9k + attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 4</Text>
                                                        <Text style={Styles.dolardigittext}>320 attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 5</Text>
                                                        <Text style={Styles.dolardigittext}>320 attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.flexexamboxview}>
                                        <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                            () => navigation.navigate('ExamQustionScreen')
                                        }>
                                            <View style={Styles.flexDirectiwhilist}>
                                                <View style={{
                                                    backgroundColor: colorrdata,
                                                    width: 60,
                                                    height: 60,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: 100,
                                                    marginRight: 10,
                                                }}>
                                                    <Icon
                                                        size={30}
                                                        name="filetext1"
                                                        style={Styles.iconstylebox}
                                                    />
                                                </View>
                                                <View style={Styles.textandiconflexview}>
                                                    <View style={Styles.textviewwidthset}>
                                                        <Text style={Styles.designfonttext}>Module 6</Text>
                                                        <Text style={Styles.dolardigittext}>9.9k + attempts </Text>
                                                    </View>
                                                    <View style={Styles.iconview}>
                                                        <Icon
                                                            size={25}
                                                            name="right"
                                                            color={colorrdata}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.accountbutton}>
                                        <Button title="View All"
                                            onPress={
                                                () => navigation.navigate('ExamQustionScreen')
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </LinearGradient>
    );
};

export default SelectExamScreen;
