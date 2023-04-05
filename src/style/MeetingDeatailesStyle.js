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
    paddingBottom:20,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgcolorwhiteset: {
    backgroundColor: 'white',
    color: 'black',
    justifyContent:'space-between',
    width:'100%',
    marginBottom:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:7,
    borderRadius: 7,
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
  setbuttonwidthstyle: {
    width:'30%'
  },
  flexendbuttonset: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  flexrowsettextandbutton: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',
    marginBottom:10,
  },
  flexrowsettextandbuttontwoset: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',
    marginBottom:10,
    borderTopColor:'lightgray',
    borderBottomColor:'lightgray',
    paddingTop:10,
    paddingBottom:5,
    borderTopWidth:1,
    borderStyle:'dashed',
  },
  textwidth: {
    width:'70%'
  },
  setbuttonstyle: {
    backgroundColor:'white',
    
  }
});
