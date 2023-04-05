import { SF,SW,wp,hp,widthPercent} from '../Components/Commonfile/Dimensions';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../Utiles/colors';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1,

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
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,

  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  popularcourcetext: {
    color: 'black',
    fontFamily:'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
    paddingBottom:10,
  },
  popularcourcetexttwo: {
    color: 'black',
    fontFamily:'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
  },
  popularview: {
    marginTop: -50,
    marginBottom: 25,
  },
  newcoursestext: {
    color: 'black',
    fontFamily:'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
    marginTop:20
  },
  newcoursestextview: {
  
  },
  instructertextsetview: {
    marginTop: -15,
  },
  instructertextset: {
    color: 'black',
    fontWeight: '700',
    paddingLeft: 13,
    fontSize: 21,
  },
  textContainer: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily:'DMSans-Bold',
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
   paddingBottom:50,
    color: 'white',
  },
  textContainertwo: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily:'DMSans-Bold',
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:50,
    color: 'white',
  },
  roundimagtitletextset: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily:'DMSans-Bold',
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white',
  },
  rounftextview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitleEven: {
    color: 'black'
  },
  subtitle: {
    marginTop: 6,
    color: 'gray',
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  },
  whiteshadowimgbottom: {
    backgroundColor: 'white',
    width: '90%',
    paddingBottom: 20,
    marginHorizontal: '5.5%',
    textAlign: 'center',
    borderRadius: 7,
    position: 'relative',
    right: 65,
    shadowColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  
  },
  whitebodyimagetextstyle: {
    fontSize: 14,
    paddingRight: 15,
    paddingTop: 10,
    fontFamily:'DMSans-Medium',
    color:'black',
  },
  whitebodyimagetextstyletwo: {
    fontSize: 15,
    fontFamily:'DMSans-Bold',
    color: 'black',
  },
  whitebodyimagetextstyletwo2: {
    fontSize: 15,
    fontFamily:'DMSans-Bold',
    color: 'black',
    paddingTop: 6,
    paddingBottom: 5,
    paddingRight:15,
    height:70,
  },
  whitebodyimagetextstylethree: {
    fontSize: 15,
    fontFamily:'DMSans-Bold',
    color: 'black',
    position: 'relative',
    left: 5,
  },
  blacktitleunderlineset: {
    fontSize: 17,
    fontFamily:'DMSans-Bold',
    color: 'black',
    paddingTop: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    marginRight: 15,
    marginBottom:10,
    height:60,
  },
  whiteshadowimgbottomtwo: {
    backgroundColor: 'white',
    width: '75%',
    paddingBottom: 20,
    marginHorizontal: '5.5%',
    textAlign: 'center',
    borderRadius: 7,
    position: 'relative',
    right: 80,
    top: 25,
    shadowColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  usernametext: {
    color: 'black',
    fontSize: 17,
    fontFamily:'DMSans-Bold',
    textAlign: 'center',
    paddingTop: 15,
  },
  usernamejobtext: {
    textAlign: 'center',
    paddingTop: 5,
    fontFamily:'DMSans-Bold',
    color:'black',
  },
  usernamerenkintext: {
    color: 'black',
    fontSize: 15,
    fontFamily:'DMSans-Bold',
    textAlign: 'center',
  },
  usernamerenkintexttwo: {
    color: 'black',
    fontSize: 15,
    fontFamily:'DMSans-Bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  rendervontantstyleset: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  bodytwo: {
    paddingHorizontal: 50,

  },
  flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  alltextleftset: {
    paddingLeft: 15,
  },
  stariconstyle: {
    color:'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    position: 'relative',

  },
  chengecolorstyle: {
    color:'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    position: 'relative',
    fontSize:18,
  },
  stariconimagestyle: {
    width:50,
    height:50,
  },
  flexrowstyleset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  minstyleviewphotograpgy: {
  
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
  },
  minviewsigninscreen: {
    width: '100%',
    marginTop: '3%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  notificationivonandimhflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    marginRight:15,
  },
  imagstylesetprofile: {
    height: 27,
    width: 27,
    borderRadius: 1000,
    marginRight: 15,
    marginLeft:15,
  },
  navbarheaderminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width:'100%',
    paddingLeft:5,
    paddingRight:20,
  },
  flexsettileimgview: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:15,
    paddingTop:10,
  },
  colorblseticon: {
    color:'#e1eb34',
  },
  imagsetstyle: {
    width:SW(315),
    height:200,
    borderRadius:7,
  },
  imagsetstylesetthreeslider: {
    width:225,
    height:150,
    borderTopLeftRadius: 7,
     borderTopRightRadius: 7,
  },
  iosstyleset: {
  marginTop:25,
  backgroundColor:'white',
  },
  
  flexiconviewset: {
    flexDirection:'row',
    alignItems:'center',
  },
  dravermarginright: {
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  hometoggleflexsetview: {
    flexDirection:'row',
    alignItems:'center',
  },
  marginrighthome: {
    marginRight:10,
    position:'relative',
    top:1.5,
  },
  mycoursetextstyle: {
    fontSize: 23,
    fontWeight: '700',
  },
  marginleftandrightsettext: {
    marginLeft:10,
    marginRight:10,
  },
  
  checkoutimage: {
  flexDirection:'row',
  },
  margincolorroght: {
    marginRight:6,
  },
  flexset: {
    flexDirection:'row',
    marginRight:15,
  }
});
