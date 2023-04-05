import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import Styles from '../style/SignUpScreenStyle';
import Container from '../Components/Commonfile/Container';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Commonfile/Button';
import { Rating } from 'react-native-ratings';

const ReviewsScreen = (props) => {
  const {navigation} = props;
  const [text, onChangeText] = React.useState("");

  return (
    <Container>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
        <View style={Styles.minstyleviewphotograpgytwo}>
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
                    <View style={Styles.succefullimgviewsethre}>
                      <Image style={Styles.succefullyimg} resizeMode="contain" source={require('../image/homeslider5.png')} />
                    </View>
                    <Text style={Styles.accounttexttwo}>Please Rate The course!</Text>
                    <View style={Styles.flexrowsetstarsignup}>
                      <Rating
                        type='custom'
                        ratingColor='hsl(27.7, 73.8%, 62.5%)'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        tintColor={'hsl(261.8, 47.8%, 95.5%)'}
                        imageSize={40}
                        startingValue={3.5}
                        isDisabled={false}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                      />
                    </View>
                    <Text style={Styles.accounttextsuccessfullytwo}>Your Comments and Suggestions help us imprave the service quality better!</Text>
                    <View style={Styles.inputUnderLinereviews}>
                      <TextInput
                        style={Styles.positionsetstyleinput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Enter Your Comment"
                        placeholderTextColor={'black'}
                      />
                    </View>
                    <View style={Styles.accountbutton}>
                      <Button title="Submit"
                        onPress={
                          () => navigation.navigate('HomeScsreen')
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
    </Container>
  );
};
export default ReviewsScreen;
