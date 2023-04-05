import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import Styles from '../../style/ExamQestionScreenStyle';
import IconG from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import Button from '../Commonfile/Button';

const QuesAnsPair = (props) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    console.log('data', props);
    const navigation = useNavigation();
    const [selected, setSelected] = useState({});
    const [score, setScore] = useState({});
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [isTimerStart, setIsTimerStart] = useState(1);
    const [timer, setTimer] = useState(239); // 25 minutes
    const [start, setStart] = useState(true);
    const firstStart = useRef(true);
    const tick = useRef();

    useEffect(() => {
        var arr = Object.values(score)
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            temp = temp + arr[i]
        }
        final_score = temp
        props.getScore(final_score);
        props.get_selected(selected)

    }, [score, props.index])

    var final_score;
    const handleNext = async (selectedAns, achieved_score) => {
        setSelected({ ...selected, [props.index]: selectedAns });
        setScore({ ...score, [props.index]: achieved_score });
        props.is_next();
    }
    const relationList = [
        {
            id: 0,
            text: "Friend"
        },
        {
            id: 1,
            text: "Brother Lorem Ipsum text of the printing and typesetting industry."
        },
        {
            id: 2,
            text: "Husband/Wife"
        },
        {
            id: 3,
            text: "Mother/Father"
        },
    ]

    function RadioButton({ options, selectedOption, onSelect }) {
        return (
            <View style={Styles.buttonContainer}>
                {
                    props.answers.map((ans, i) => {
                        return (
                            <View key={i} style={[Styles.buttonContainer, { flexDirection: 'row' }]}>
                                <TouchableOpacity
                                    style={Styles.radiobuttonsetstyle}
                                    onPress={() => {
                                        onSelect(ans['label'])
                                    }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        alignItems: "center",
                                        borderWidth: 1,
                                        paddingTop: 15,
                                        paddingBottom: 15,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        marginBottom: 15,
                                        borderRadius: 5,
                                        borderColor: colorrdata,
                                    }}>
                                        <TouchableOpacity
                                            style={{
                                                height: 20,
                                                width: 20,
                                                borderRadius: 10,
                                                borderWidth: 2,
                                                marginRight: '2%',
                                                borderColor: colorrdata,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                            onPress={() => {
                                                onSelect(ans['label'])
                                            }}>
                                            {selectedOption === ans['label'] && <View style={{
                                                width: 13,
                                                height: 13,
                                                borderRadius: 7,
                                                backgroundColor: colorrdata,
                                            }} ></View>}
                                        </TouchableOpacity>

                                        <View style={Styles.answersContainer}>
                                            <View>
                                                <TouchableOpacity key={i} style={Styles.answer} onPress={handleNext.bind(this, ans['label'], ans['value'])}>
                                                    <TouchableOpacity onPress={() => {
                                                        onSelect(ans['label'])
                                                    }}>
                                                        <Text style={Styles.answerText}>{ans['label']}</Text>
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
    const onSelect = (item) => {
        console.log(item);
        setSelectedOption(item);
    };
    useEffect(() => {
        console.log("subsequent renders");

        if (start) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        }

        return () => clearInterval(tick.current);
    }, [start]);
    const toggleStart = () => {
        setStart(!start);
    };
    const dispSecondsAsMins = (seconds) => {
        // 25:00
        console.log("seconds " + seconds);
        const mins = Math.floor(seconds / 60);
        const seconds_ = seconds % 60;
        return (mins <= 0 ? "00" : mins.toString()) + ":" + (seconds_ <= 0 ? "00" : seconds_.toString());
    };
    return (
        <View style={Styles.minviewsigninscreen}>
            <View style={{
                backgroundColor: colorrdata,
                width: '100%',
                borderRadius: 222,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 15,
                alignItems: 'center',
                paddingRight: 15,
            }}>
                <View>
                    <Text style={Styles.volortext}>{props.index}/{props.length}</Text>
                </View>
                <TouchableOpacity style={Styles.flexrowsetpushicon} onPress={() => {
                    setTimer(!timer);
                }}>
                    {isTimerStart == 1 ?
                        <TouchableOpacity
                            onPress={() => { setIsTimerStart(0), toggleStart() }}
                        >
                            <IconG
                                size={25}
                                name="controller-paus"
                                style={Styles.pushiconstyle}

                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => { setIsTimerStart(1), toggleStart() }}
                        >
                            <IconG
                                size={25}
                                name="controller-play"
                                style={Styles.pushiconstyle}
                            />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <Text style={Styles.volortext}>{dispSecondsAsMins(timer)}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={Styles.submitbuttonstyleset}>
                    <Button onPress={
                        () => navigation.navigate('Downloadcertyficate')
                    } title="SUBMIT" buttonStyle={{ borderColor: colorrdata, backgroundColor: 'white', borderRadius: 100, }}
                        buttonTextStyle={{ color: colorrdata }} />
                </View>
            </View>
            <View style={Styles.questionContainer}>
                <View style={Styles.flexsetadd}>
                    <Text style={Styles.textcolorset1}>{props.index}</Text>
                    <Text style={Styles.textcolorset}>
                        {props.question}
                    </Text>
                </View>
                <View style={Styles.optionview}>
                    <RadioButton
                        selectedOption={selectedOption}
                        onSelect={onSelect}
                        options={relationList}
                        formHorizontal={false}
                        value={selectedOption}
                    />
                </View>
            </View>
        </View>
    );
}

export default QuesAnsPair;