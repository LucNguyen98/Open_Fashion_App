import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {scale, width} from 'react-native-utils-scale';
import { ThumbnailVideo } from 'assets/images';

const Videos = () => {
  return (
    <View>
      <VideoPlayer
        video={{
          uri: 'https://youtu.be/IbO52_DfVtg',
        }}
        fullScreenOnLongPress
        videoWidth={width}
        videoHeight={scale(176)}
        resizeMode="stretch"
        thumbnail={ThumbnailVideo}
        customStyles={{
          thumbnail: {
            width,
            height: scale(176),
          },
        }}
      />
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({});
