import color from '../Utiles/colors';
import { StyleSheet } from 'react-native';
import { SF, SW, SH, widthPercent } from '../Components/Commonfile/Dimensions';
import { useDispatch, useSelector } from "react-redux";

export default StyleSheet.create({
  
  buttonset: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonTextStyleSignWithNumber: {
    backgroundColor: 'white',
    color: color.theme_backgound,
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  }, 
  loginwithgooglewhiteshadow: {
    backgroundColor: 'white',
    width: '92%',
    textAlign: 'center',
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  buttonTextStylegoogle: {
    backgroundColor: 'white',
    color: color.theme_backgound,
    fontFamily:'DMSans-Bold',
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyleSgoogle2: {
    color: 'black',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  buttonsetwhite: { 
    borderWidth: 1,
    borderColor: color.theme_backgound,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyleSignWithNumbertwo: { 
    color: 'white',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2two: {
    color: color.theme_backgound,
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  valuxlogo: {
    width:180,
    height:100,
    borderRadius:80,
  },
  setvaluximageview: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:10,
  },
  buttonStyle: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 1,
  },
  buttonTextStyle: {
    color:color.theme_backgound,
  },
  setbariconmarginright: {
    paddingLeft:8,
  }
});
