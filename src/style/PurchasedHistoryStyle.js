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
    paddingHorizontal: 10,
    paddingBottom: 20,
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
    height: 70,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
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
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  justicenterview: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  minflexviewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  setimagestyle: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 7,
  },
  margintopsetimage: {
    marginTop: 40,
  },
  bgwgitestart: {
    backgroundColor: 'white',
    width: 65,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    // width: '100%',
    borderRadius: 7,
    paddingTop: 10,
    marginTop: 6,
    paddingBottom: 10,
    shadowColor: "black",
    shadowColor: "black",
    marginBottom: 5,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 5 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 20,
  },
  textviewsetwhishlist: {
    width: '65%',
    paddingRight: 20,
  },
  designfonttext: {
    fontSize: 19,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    fontWeight: '700',
    width: '100%'
  },
  paregraphtext: {
    fontSize: 14,
    fontFamily: 'DMSans-Medium',
    width: '100%',
    marginTop: '3%',
    color: 'gray'
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ratingviewstyle: {
    flexDirection: 'row',
    width: '100%'
  },
  flexrowsetusericon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  usertextstyle: {
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    fontWeight: '600',
    width: '100%',
    marginLeft: 10,
  },
  twobuttoncenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  wisthsetbutton: {
    width: '48%',
  },
  flexrowsettext: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dolardtextsetprice: {
    color: 'gray',
    fontSize: 17,
    marginRight: 10,
    textDecorationLine: 'line-through',
  },
  settextusert: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: 'gray',
    fontWeight: '700',
    marginLeft: 10,
  },
  minviewsetpaymenttype: {
    flexDirection: 'row', justifyContent: 'space-between',
    width: '100%',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    borderTopColor:'lightgray',
    borderStyle:'dashed',
    borderTopWidth:1,
    paddingTop:10,
    marginTop:10,
  },
  flexrowsetrpayment: {
    flexDirection:'row'
  },
  serftbuttonwidth: {
    width:'30%',
  },
  buttonheight: {
    height:37,
  },
  buttontextset: {
    position:'relative',
    top:-2,
  }
});
