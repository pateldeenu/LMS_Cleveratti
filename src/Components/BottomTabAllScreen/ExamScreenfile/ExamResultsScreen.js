import React from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import Styles from '../../../style/ExamResultsScreenStyle'
import LinearGradient from 'react-native-linear-gradient';
import Container from '../../../Components/Commonfile/Container';
import Button from '../../Commonfile/Button';

const ExamResultsScreen = (props) => {
    const {navigation} = props;
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
                        <KeyboardAvoidingView enabled>
                            <View style={Styles.keybordtopviewstyle}>
                                <View style={Styles.minflexview}>
                                    <View style={Styles.minviewsigninscreen}>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Exam name</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}>Sample exam 004</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Started at</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}>Thu,Apr 30,2020 10:42:42 AM</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Ended at</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}>Thu,Apr 30,2020 7:44:21 PM</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Total number of answer</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}><Text style={Styles.textcolorchengeset}>62</Text> / 62</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Total Time</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}><Text style={Styles.textcolorchengeset}>317:25</Text> / 295:57</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Average answer time</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}><Text style={Styles.textcolorchengeset}>0:5:07</Text> / 23:03</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.examresultsview}>
                                            <View style={Styles.widthsettext}>
                                                <Text style={Styles.alltextstyle}>Accuracy rate</Text>
                                            </View>
                                            <View style={Styles.widthsetrighttext}>
                                                <Text style={Styles.alltextstyle}><Text style={Styles.textcolorchengeset}>43.55%</Text></Text>
                                            </View>
                                        </View>
                                        <View style={Styles.accountbutton}>
                                            <Button title="Check answers"
                                                onPress={() => navigation.navigate('ExamMarkSheetNumberScreen')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </LinearGradient>
        </Container>
    );
};

export default ExamResultsScreen;
