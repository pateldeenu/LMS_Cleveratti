import React, { useMemo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, SF, SH, SW } from '../Commonfile/Dimensions';
import { useTheme } from '@react-navigation/native';
import colors from '../../Utiles/colors';
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/EvilIcons';
import IconA from 'react-native-vector-icons/AntDesign';

const Button = (props) => {
  const { title, onPress, buttonStyle, disable, buttonTextStyle, imagesource, iconnametwo, spacedImages, iconname, size } = props;
  const [pressStatusthree, setpressStatusthree] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const onHideUnderlaythree = () => {
    setpressStatusthree(false);
  }
  const onShowUnderlaythree = () => {
    setpressStatusthree(true);
  }

  const styles = useMemo(() =>
    StyleSheet.create({
      buttonStyle: {
        borderWidth: 1,
        borderColor: colorrdata,
        backgroundColor: colorrdata,
        width: '100%',
        textAlign: 'center',
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowColor: "#000",
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 1,
      },
      buttonTextStylegoogle: {
        backgroundColor: 'white',
        color: colorrdata,
        fontFamily: 'DMSans-Bold',
        fontSize: 18,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      iconstyleset: {
        backgroundColor: 'white',
        color: colorrdata,
        fontFamily: 'DMSans-Bold',
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      buttonTextStyleSgoogle2: {
        color: 'white',
        fontFamily: 'DMSans-Bold',
        fontSize: 18,
      },
      iconsizeset: {
        color: 'white',
        fontFamily: 'DMSans-Bold',
        fontSize: 30,
      },
      buttonTextStyle: {
        color: colorrdata,
        fontSize: SF(20),
        fontWeight: '500'
      },
      buttonViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      leftImageStyle: {
        width: 50,
        height: 40,
        marginRight: 10,
      }
    }),
    [disable, spacedImages, colors],
  );
  return (
    <View>
      <TouchableHighlight
        style={[styles.buttonStyle, { ...buttonStyle }]}
        onHideUnderlay={onHideUnderlaythree.bind(this)}
        onShowUnderlay={onShowUnderlaythree.bind(this)}
        underlayColor='#ffffff'
        onPress={() => onPress()}>
        <View style={styles.buttonViewStyle}>
          {imagesource ? <Image source={imagesource} style={styles.leftImageStyle} resizeMode='cover' /> : null}
          {iconname ? <Icon name={iconname} style={[pressStatusthree ? styles.iconstyleset : styles.iconsizeset, { ...size }]} /> : null}
          {iconnametwo ? <IconA name={iconnametwo} size={25} style={{ color: colorrdata, marginRight: 20, }} /> : null}
          <Text style={[pressStatusthree ? {
            backgroundColor: 'white',
            color: colorrdata,
            fontFamily: 'DMSans-Bold',
            fontSize: 18,
            flexDirection: 'row',
            justifyContent: 'center',
          } : {
            color: 'white',
            fontFamily: 'DMSans-Bold',
            fontSize: 18,
          }, { ...buttonTextStyle }]}>
            {title}</Text>
          {imagesource ? <View /> : null}
        </View>
      </TouchableHighlight>
    </View>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Button;