import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import questions from '../../questions1.json';
import QuesAnsPair from '../../questionfileset/QuesAnsPair';
import { writeScore } from '../../questionfileset/scoreStorage';
import Styles from '../../../style/ExamQestionScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import Button from '../../Commonfile/Button';

const Quiz = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({})

  const handleQuizTraversal = () => {
    if (questionIndex === questions['questions'].length - 1) {
      writeScore(`${score} out of ${questions['questions'].length}`);
      props.navigation.navigate('Downloadcertyficate', { score: score });
      return
    }
    setQuestionIndex((questionIndex) => questionIndex + 1);
    setShowNext(true);
    console.log(questions['questions'].length, questionIndex)
  }
  const is_next = () => {
    setShowNext(true);
  }
  const get_Score = (score) => {
    setScore(score);
  }
  const getSelected = (selected) => {
    setSelected(selected);
  }

  return (
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
          <View style={Styles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={Styles.minviewsigninscreen}>
                <QuesAnsPair
                  question={questions['questions'][questionIndex]['questionText']}
                  answers={questions['questions'][questionIndex]['answers']}
                  is_next={is_next}
                  getScore={get_Score}
                  length={questions['questions'].length}
                  get_selected={getSelected}
                  index={questions['questions'][questionIndex]['index']}
                />
                <View style={Styles.buttonflexminview}>
                  <View style={Styles.submitbuttonstyleset}>
                    {
                      showNext && questionIndex > 0 || (selected[questionIndex] !== undefined && questionIndex > 0) ?
                        <Button onPress={() => setQuestionIndex((index) => index - 1)} title="Previous" />
                        : null
                    }
                  </View>
                  <View style={Styles.submitbuttonstyleset}>
                    <Button onPress={handleQuizTraversal} title={questionIndex === questions['questions'].length - 1 ? 'end ' : 'next'} title="Next" />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
export default Quiz;