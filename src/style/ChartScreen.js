import colors from '../Utiles/colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
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
    width: '90%',
    height:'100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom:200,
    paddingTop:5,
  },
  flexrowjucenter: {
    flexDirection:'row',
    justifyContent:'flex-end',
  
  },
  flexrowjucentertwo: {
    flexDirection:'row',
    alignItems:'center'
  },
  textcolormessage: {
    color:'white',
    fontFamily: 'DMSans-Medium',
    fontSize:16,
  },
  textcolormessagetwoset: {
    color:'white',
    fontFamily: 'DMSans-Medium',
    fontSize:12,
    paddingTop:6,
  },
  textcolormessagetwosettwo: {
    color:'white',
    fontFamily: 'DMSans-Medium',
    fontSize:12,
    paddingTop:6,
  },
  datesndtimecolor: {
    color:'gray',
    fontFamily: 'DMSans-Medium',
    fontSize:14,
    textAlign:'center',
    paddingTop:5,
    fontWeight:'600'
  },
  datesndtimecolortwo: {
    color:'gray',
    fontFamily: 'DMSans-Medium',
    fontSize:14,
    textAlign:'left',
    paddingTop:5,
    fontWeight:'600',
    position:'relative',
    left:60,
  },
  seimagstyleendcall: {
    width:50,
    height:50,
    borderRadius:100,
  },
  likeimagesetstyle: {
    width:50,
    height:50,
    borderRadius:100,
    marginLeft:5,
    tintColor:'#ffcc5b',
  },
  leftimagelike: {
    marginLeft:10,
  },
  messageminviewowner: {
    backgroundColor:'#c2c0c0',
    paddingTop:6,
    paddingBottom:4,
    paddingLeft:10,
    paddingRight:10,
    marginLeft:10,
    width:'70%',
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  postionabsoluteview: {
    position:'absolute',
    backgroundColor:'white',
    bottom:0,
    width:'100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  textmessageview: {
    marginTop:10,
    marginLeft:30,
    marginRight:30,
  },
  messagetextcolor: {
    color:'gray',
    fontSize:18,
  },
  textinputborderbottom: {
    padding:0,
    width:200,
    fontSize:16,
  },
  bottombuttoncolorset: {
    width:'70%'
  },
  flexrowsetsendmesasagew: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
  },
  setmarginrightlikeicon: {
    marginLeft:20,
  },
  flexrowimaginations: {
    flexDirection:'row',
    alignItems:'center'
  },
  marginbottomsetspace: {
    marginBottom:20,
  },
  flexcheckset: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  seticonpotion: {
    position:'relative',
    top:-8.5,
  },
  setrighticonviewstyle: {
    position:'relative',
    top:9,
    paddingLeft:5,
  }
});
