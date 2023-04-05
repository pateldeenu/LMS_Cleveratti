import colors from '../Utiles/colors';
import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

import { SF, SW, widthPercent } from '../Components/Commonfile/Dimensions';
export default StyleSheet.create({

  buttonCircle: {
    width: wp(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 16,
    top: 4,
    marginHorizontal: '3.3%'
  },
  getstartedtext: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
  heightsetimage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  bgcolorsigninset: {
    height: '15%',
  },
  titleStyle: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    top: 0,
    width: '100%',
    textAlign: 'center',
    // position: 'relative',
    // top: Platform.OS === 'ios' ? -15 : 50,
  },
  nextbuttoncolorset: {
    fontFamily: 'DMSans-Bold',
    fontSize: 19,
    position: 'relative',
    top: 10,
  },
  textstyle: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: -70,
  },
  textstyletwo: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: -65,
  },
  textstyletheree: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    marginTop: 65,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    height: '100%',
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagset: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginTop: '35%',
    marginBottom: '35%',
  },
  imagesetus: {
    width: SW(250),
  },
  imagesetusnew: {
    width: SW(370),
    position: 'relative',
    top: 90,
  },
  imagoneset: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },
  avtivedotsstyle: {
    width: 14,
    height: 14,
    backgroundColor: colors.theme_backgound,
    borderRadius: 100,
    position: 'relative',
    top: -40
  },
  dotstyleset: {
    width: 11,
    height: 11,
    backgroundColor: 'gray',
    borderRadius: 100,
    position: 'relative',
    top: -40
  }
});