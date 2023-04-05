import React from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import Styles from '../../../style/ExamMarkSheetNumberScreenStyle';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Container from '../../Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';

const ExamMarkSheetNumberScreen = (props) => {
    const {navigation} = props;
    let GridListItems = [
        { key: "1" },
        { key: "2" },
        { key: "3" },
        { key: "4" },
        { key: "5" },
        { key: "6" },
        { key: "7" },
        { key: "8" },
        { key: "9" },
        { key: "10" },
        { key: "11" },
        { key: "12" },
        { key: "13" },
        { key: "14" },
        { key: "15" },
        { key: "16" },
        { key: "17" },
        { key: "18" },
        { key: "19" },
        { key: "20" },
        { key: "21" },
        { key: "22" },
        { key: "23" },
        { key: "24" },
        { key: "25" },
        { key: "26" },
        { key: "27" },
        { key: "28" },
    ]
    const GetGridViewItem = (item) => {
    }
    return (
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
                        <View style={Styles.keybordtopviewstyle}>
                            <KeyboardAvoidingView enabled>
                                <View style={Styles.minflexview}>
                                    <View style={Styles.minviewsigninscreen}>
                                        <View style={Styles.questionview}>
                                            <TouchableOpacity style={Styles.questionpapewrset} onPress={
                                                () => navigation.navigate('ExamResultsScreen')
                                            }>
                                                <Text style={Styles.boxintitle}>QUESTION PAPER</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={Styles.whiteboxwhishlist} onPress={
                                                () => navigation.navigate('ExamResultsScreen')
                                            }>
                                                <Text style={Styles.boxintitle}>INSTRUCTIONS</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={Styles.boxstyleminview}>
                                            <View style={Styles.whiteboxwhishlist}>
                                                <View style={Styles.minviewaboxin}>
                                                    <View style={Styles.dotsetview}>
                                                        <View style={Styles.dotcolorset}></View>
                                                        <Text style={Styles.textcolorset}>Answered</Text>
                                                    </View>
                                                    <View style={Styles.dotsetview}>
                                                        <View style={Styles.wrongdot}></View>
                                                        <Text style={Styles.textcolorset}>Not Answered</Text>
                                                    </View>
                                                </View>
                                                <View style={Styles.minviewaboxin}>
                                                    <View style={Styles.dotsetview}>
                                                        <View style={Styles.notvisiteddot}></View>
                                                        <Text style={Styles.textcolorset}>Not Visited</Text>
                                                    </View>
                                                    <View style={Styles.dotsetview}>
                                                        <View style={Styles.reviluterdot}></View>
                                                        <Text style={Styles.textcolorset}>Review Later</Text>
                                                    </View>
                                                </View>
                                                <View style={Styles.centerviewset}>
                                                    <View style={Styles.dotsetviewTWO}>
                                                        <View style={Styles.reviluterdot}>
                                                            <Icon
                                                                size={15}
                                                                name="check"
                                                                style={Styles.iconstylebox}
                                                            />
                                                        </View>
                                                        <Text style={Styles.answerlastfontsize}>Answer and Marked for review</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={Styles.mcqminviewset}>
                                                <View style={Styles.whiteboxwhishlistmcq}>
                                                    <View>
                                                        <View style={Styles.bgvolorsetphysic}>
                                                            <Text style={Styles.physistextset}>Physics</Text>
                                                        </View>
                                                        <View style={Styles.container}>
                                                            <FlatList
                                                                data={GridListItems}
                                                                renderItem={({ item }) =>
                                                                    <View style={Styles.widthsetround}>
                                                                        <View style={Styles.GridViewContainer}>
                                                                            <TouchableOpacity style={item.key < 18 ? Styles.bgvolosetdigitall : item.key < 20 ? Styles.bgvolosetdigitalltwo : item.key < 22 ? Styles.bgvolosetdigitallthree : Styles.bgvolosetdigitallfour}>
                                                                                <Text style={Styles.GridViewTextLayout} onPress={GetGridViewItem.bind(this, item.key)} > {item.key}
                                                                                </Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                }
                                                                numColumns={5}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </Container>
    );
};

export default ExamMarkSheetNumberScreen;
