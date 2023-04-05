import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';

const Youtubeplayvideo = () => {

    return (
        <View>
            <YouTube
                videoId="KVZ-P-ZI6W4" // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
        </View>

    );
};
export default Youtubeplayvideo;