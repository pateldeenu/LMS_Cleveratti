import colors from '../Utiles/colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  minviewsigninscreen: {
    width: '100%',
    paddingHorizontal:10,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  profilebgwhiteset: {
    backgroundColor: 'white',
    color: 'black',
    flexDirection: 'row',
    justifyContent:'center',
    borderRadius: 7,
    paddingBottom:10,
    paddingTop:20,
    width:'100%',
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  imagsetstyle: {
    width:70,
    height:70,
    borderRadius:100,
  },
  marginrightsetwidth: {
   width:'48%',
    paddingTop:5,
    paddingBottom:7,
    marginRight:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  setminviewstyle: {
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  centerviewstyle: {
    flexDirection:'row',
    justifyContent:'center'
  },
  textsetsimple: {
    marginTop: 10, 
    color: 'black',
    fontSize: 16, 
    textAlign: 'center' 
  },
  setbgcolorviewstyle: {
    backgroundColor:'red',
    width:30,
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
  },
  centerviewstyletwostyle: {
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingRight:10,
    zIndex:20,
    position:'absolute',
    right:-20,
  },
  centimagebottomview: {
    flexDirection:'row',
    justifyContent:'center',
    width:'100%'
  },
  centertext: {
    flexDirection:'row',
    justifyContent:'center',
    textAlign:'center',
    paddingTop:7,
  }
});
