import colors from '../Utiles/colors';
import { StyleSheet, Dimensions } from 'react-native';
import { SF,SW,widthPercent} from '../Components/Commonfile/Dimensions';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default StyleSheet.create({

  navContainer: {
    height: HEADER_HEIGHT,
    paddingTop:Platform.OS === 'ios' ? 5 : 0,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,
  },
  hoveraerrorset: {
    width:65,
    paddingTop: Platform.OS === 'ios' ? 27 : 15,
    height:65,
    paddingLeft: 10,
},
  minviewvideo: {
    width: '100%',
    height: '100%',
  },
  overviewtabminview: {
    width: '93%',
    marginHorizontal: '3%',
    marginTop: '10%'
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: 0.5,
    paddingBottom: 18,
  },
  whiteboxwhishlistTwo: {

    width: '100%',
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight:Platform.OS === 'ios' ? 15 : 0,
    alignItems: 'center',
  },
  textviewsetwhishlist: {
    width: '70%',
    paddingRight: 20,
  },
  designfonttext: {
    fontSize: 16,
    fontFamily:'DMSans-Bold',
    color: 'black',
    width: '100%'
  },
  dolardigittext: {
    fontSize: 15,
    width: '100%',
    marginTop: '3%',
    marginBottom: '2%',
    fontFamily:'DMSans-Medium',
    color:'black',
  },
  
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: 5,
  },
  overviewtabminview: {
    width: '93%',
    marginHorizontal: '3%',
    marginTop: '10%'
  },
  trailertextset: {
    color: 'black',
    fontFamily:'DMSans-Bold',
    fontSize: 24,
  },
  paregraphtext: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily:'DMSans-Medium',
    color:'black',
  },
  imagstyleset: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 7,
  },
  container: {
    flex: 1,
    width:'100%'
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  nindivset: {
   
   width:'100%'
},
backgroundVideo: {
  height: 300,
  width: '100%',
},
mediaControls: {
  width: screenHeight - 170,
  height: '100%',
  flex: 1,
  alignSelf: Platform.OS === 'android' ? screenHeight < 800 ? 'center' : 'flex-start' : 'center',
},
backgroundVideoFullScreen: {
  height: screenHeight,
  width: screenWidth,
},
titleStyle: {
  width:'100%',
},
iconlessthanback: {
  position:'relative',
  top:-7,
}
});
