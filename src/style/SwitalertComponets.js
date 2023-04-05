import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent } from '../Components/Commonfile/Dimensions';

export default StyleSheet.create({
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal:12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: 'DMSans-Medium',
    borderRadius: 7,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal:12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: 'DMSans-Medium',
    borderRadius: 7,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
   
  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: 'gray',
    fontSize: SF(17),
    padding:0,
    paddingTop:5,
    fontFamily: 'DMSans-Medium',
  },
  
headerstylebgcolor: {
  backgroundColor:'#e3f2f0'
},
minviewaudioacall: {
  width: '100%',
  height: 'auto',
  paddingLeft:15,
  paddingRight:15,
},
setheaderspacepadding: {
 height:60,
  backgroundColor:'#e3f2f0',
  paddingTop:10,
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22,
 
},
modalView: {
  backgroundColor: "white",
  borderRadius: 7,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  paddingTop:20,
  paddingBottom:20,
  width:'95%'
},
setbgcolorgrsay: {
  backgroundColor:'gray',
  height:'100%',
  alignItems:'center',
  flexDirection:'row',
  opacity: Platform.OS === 'ios' ? 2 : 0.9,
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22,
},
closeIcon: {
  position: 'absolute',
  right: 15,
  top: 16,
  height: 40,
  width: 40,
  backgroundColor: '#046665',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
},
iconclosestyle: {
  color: 'white',
  paddingBottom: 3,
},
checkiconright: {
  borderColor:'#046665',
  borderWidth:3,
  height:80,
  width:80,
  borderRadius:100,
  flexDirection:'row',
  alignContent:'center',
  justifyContent:'center'
},
setroundcenter: {
  flexDirection:'row',
  justifyContent:'center'
},
setbackgroundicon: {
  flexDirection:'row',
  justifyContent:'center',
  paddingTop:15,
},
registertextset: {
  paddingTop:25,
  paddingBottom:0,
  flexDirection:'row',
  justifyContent:'center',
},
settext: {
  color:'black',
  fontSize:20,
  paddingLeft:20,
  paddingRight:20,
  textAlign:'center',
  fontFamily: 'DMSans-Medium',
},
setokbutton: {
  width:'30%'
},
buttonminview: {
  flexDirection:'row',
  justifyContent:'center',
  paddingTop:20,
},
setbuttonstyle: {
  backgroundColor:'red',
  width:'50%'
},
setinputstyleapply: {
  paddingHorizontal:12,
  width: '100%',
  paddingTop: 10,
  paddingBottom: 7,
  height: 50,
  color: 'gray',
  fontSize: SF(17),
  fontFamily: 'DMSans-Medium',
  borderRadius: 7,
  backgroundColor: '#e3f2f0',
 
},
setalldetailesminview: {
  paddingTop:70,
},
setbgimage: {
  height:'100%',
  width:'100%',
},
container: {
  height:'100%'
}
});