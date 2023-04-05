
import { StyleSheet } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const SW = dimension => {
  return wp((dimension / 375) * 100 + '%');
};

export const SH = dimension => {
  return hp((dimension / 812) * 100 + '%');
};

export const SF = dimension => {
  return hp((dimension / 812) * 100 + '%');
};

export const heightPercent = percent => {
  return hp(percent);
};

export const widthPercent = percent => {
  return wp(percent);
};

export const fontPercent = percent => {
  return hp(percent);
};
export default StyleSheet.create({
  buttonCircle: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 16,
    top: 4,

  },
  getstartedtext: {
    color: 'white',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '95%',
    borderRadius: 222,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: 'white',
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  
  bgcolorsigninset: {
    height: '15%',
  },
  titleStyle: {
    color:'white',
    fontSize:25,
    fontFamily:'DMSans-Bold'
  },
  textstyle: {
    paddingLeft:20,
    paddingRight:20,
    color:'white',
    fontSize:15,
    fontFamily:'DMSans-Regular'
  },
  imagset: {
   paddingTop:30,
   paddingBottom:30,
   width:'100%',
  }
});
