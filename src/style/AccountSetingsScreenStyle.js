import { StyleSheet, Dimensions } from 'react-native';
import { SF, SW, widthPercent } from '../Components/Commonfile/Dimensions';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
// import {SW,SH,SF,widthPercent} from '../'
// import Color from '../'

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: SF(18)
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercent(100),
    marginTop: SW(75),
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    position: 'relative',
    top: 25,
  },
  whilistminbody: {
    width: '100%',
    marginTop: '5%',
    height: '100%'
  },
  imagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  allisonperry: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  profiledetailesminview: {
    width: '90%',
    marginHorizontal: '5%',
  },
  phonenumberandicon: {
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 13,

  },
  iconstyleseacrch: {
    color:'gray',
  },
  setbgwhiteshadow: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    height: 60,
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setbgwhiteshadowinputmodal: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 7,
    paddingLeft: 10,
    marginTop: 15,
    fontSize:17,
    fontFamily:'DMSans-Medium',
    marginBottom: 15,
    paddingRight: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 2,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  phonenumberandicontWO: {
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
    paddingBottom: 13,
  },
  editprofileset: {
    marginTop: '8%',
    fontFamily: 'DMSans-Bold',
    // color:Color.gray,
    color: 'gray',
    fontSize: 19,
    paddingBottom: 13,
  },
  phonenumbertext: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'DMSans-Medium',
  },
  phonenumbertexttwo: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  digitnumbertext: {
    color: 'gray',
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
  },
  logoutdivset: {
    textAlign: 'center',
    color: 'black',
    borderBottomColor: 'red',
    marginTop: 10,
    fontSize: 22,
    fontFamily: 'DMSans-Medium',
    paddingBottom: 15,
  },
  iconlessthanback: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray',
    opacity: Platform.OS === 'ios' ? 1 : 0.9,
  },
  icomvlose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: -15,
  },
  modalView: { 
    backgroundColor: "white",
    borderRadius: 7,
    width: '90%',
    shadowColor: "#000",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  setshadowstylemodaltwo: {
    backgroundColor: "white",
    padding:2,
    borderRadius: 177,
    width: '100%',
  },
  setiallpaddingmodal: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontFamily: 'DMSans-Bold',
    marginTop: -10,
  },
  modalTexttwo: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontFamily: 'DMSans-Bold',
    marginTop: -10,
    paddingBottom:20,
  },
  marginrightsetview: {
    width:'48%'
  },
  marginright: {
    width:'48%'
  },
  togglrswitchflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '90%',
    borderRadius: 222,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonsetwhite: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'white',
    width: '83%',
    borderRadius: 222,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonTextStyleSignWithNumber: {
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumbertwo: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2two: {
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  paregraphtextmodal: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 25,
    color: 'gray',
    fontWeight: '700',
  },
  input: {
    fontFamily: 'DMSans-Bold',
    height: 40,
    width: '100%',
    fontSize: 17,
  },
  buttonsetmoddletwobutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
  },
  hometextheadercolor: {
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 12,
    paddingLeft: 5,
    textAlign: 'center',
  },
  nabarview: {
    flexDirection: 'row',
    paddingLeft: 50,
  },
  minviewarroandtitle: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
  },
  leftarrostyle: {
    paddingTop: 15,
    marginRight: 20,
    color: 'hsl(214.3, 83.2%, 51%)',
  },
  settingviewset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor:'lightgray',
    paddingBottom: 12,
    width:'100%'
  },
  iconandtextflexset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%'
  },
  bgcolorser: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  spaceview: {
    marginTop: 12,
  },
  inputUnderLine: {
    backgroundColor: 'white',
    width: Platform.OS === 'ios' ? '95%' : '90%',
    height: 50,
    borderRadius: 7,
    shadowColor: "black",
    shadowColor: "black",
    flexDirection: 'row',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    width:'100%',
    paddingRight: 45,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textpassworedsert: {
    color: "black",
    fontFamily: 'DMSans-Medium',
    width: '100%',
    fontSize:16,
    position:'relative',
    left:-5,
  },
  eyeiconset: {
    color: 'gray'
  },
  bgwhitelogout: {
    backgroundColor:'white',
    
  }
});