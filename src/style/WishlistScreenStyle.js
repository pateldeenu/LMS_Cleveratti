import { StyleSheet,Dimensions } from 'react-native';
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
        justifyContent:"flex-end",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
        paddingRight:11,
      },
      titleStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
      },
      flexDirectionrowskipnext: {
          flexDirection:'row',
          justifyContent:'flex-start',
          width:'100%',
      },
      homeheadertext: {
          color:'white',
          fontWeight:'700',
          fontSize:25,
      },
      whiteboxwhishlist: {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
        flexDirection:'row',
        borderRadius: 7,
        shadowColor: "black",
        shadowColor: "black",
        marginBottom:10,
        shadowOffset: {
          width: 0,
          height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
      },
      whilistminbody: {
          width:'93%',
          marginHorizontal:'3.3%',
          marginTop:'0%',
          marginBottom:5,
         
      },
      flexDirectiwhilist: {
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%',
          paddingLeft:10,
          paddingRight:10,
          paddingTop:10,
          paddingBottom:10,
      },
      textviewsetwhishlist: {
          width:'63%',
          paddingRight:20,
      },
      designfonttext: {
          fontSize:16,
          fontFamily:'DMSans-Medium',
          color:'black',
          width:'100%'
      },
      dolardigittext: {
        fontSize:17,
        fontFamily:'DMSans-Bold',
        color:'black',
        width:'100%',
        marginTop:'3%',
      },
      onlydigittext: {
        fontSize:17,
        fontFamily:'DMSans-Bold',
        color:'gray',
        width:'100%',
        marginTop:'3%',
      },
      topspaceview: {
          marginTop:'7%',
      },
      stariconview: {
        flexDirection:'row',
       alignItems:'center',
       width:'100%',
    },
    stariconstyle: {
      color:'hsl(27.7, 73.8%, 62.5%)',
      flexDirection:'row',
      marginTop:'2%',
  },
  chengecolorstyle: {
    color:'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    position: 'relative',
    fontSize:18,
    top:2,
  },
  onlydigittext: {
    fontSize:16,
    fontWeight:'700',
    color:'gray',
    marginTop:'3%',
    marginRight:'3%'
  },
  hometextheadercolor: {
    color:'hsl(214.3, 83.2%, 51%)',
    fontSize:23,
    fontWeight:'700',
    marginTop:12,
    paddingLeft:15,
  },
  minviewarroandtitle: {
    flexDirection:'row',
    paddingLeft:0,
    alignItems:'center',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
  },
  leftarrostyle: {
    paddingTop:15,
    marginRight:20,
  },
  flexrowheart: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
  },
  
  flexrowheartsettwo: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    position:'absolute',
    bottom:0,
  },
  settimevideo: {
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:30,
  },
  clockimage: {
    color:'gray',
    marginRight:5,
  },
  timevodeoset: {
    color:'gray',
    fontFamily:'DMSans-Medium',
    fontSize:16,
  },
  setimagestykle: {
    width: 100,
    height: 100,
    marginRight: 5,
    borderRadius: 10,
  },
  dolardigittextvideo: {
    fontSize:15,
    fontFamily:'DMSans-Bold',
    color:'hsl(214.3, 83.2%, 51%)',
    width:'100%',
    marginTop:'3%',
  },
});