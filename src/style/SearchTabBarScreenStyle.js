import { StyleSheet,Dimensions } from 'react-native';
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
        justifyContent:"flex-start",
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
          justifyContent:'space-between',
          width:'100%',
          marginTop:'20%',
          paddingHorizontal:'5%',
          alignItems:'center',
      },
      homeheadertext: {
          color:'white',
          fontWeight:'700',
          fontSize:25,
          marginTop:55,
      },
      whilistminbody: {
          width:'90%',
          marginHorizontal:'5%',
          marginTop:'8%',
          paddingBottom:'80%',
      },
      flexdirectioninputsearchtab: {
          flexDirection:'row',
          width:'100%',
          justifyContent:'center',
      },
      inputbgcolorwhite: {
          backgroundColor:'white',
          paddingLeft:60,
          color:'black',
          paddingRight:30,
          flexDirection:'row',
          justifyContent:'center',
          width:'89%',
          marginRight:'5.5%',
          marginTop:'30%',
          borderRadius:100,
          height:45,
      },
      iconstyleseacrch: {
          position:'relative',
          top:'34%',
          left:'27%',
          zIndex:10,
          fontWeight:'700',
      },
      populartagstext: {
        fontFamily:'DMSans-Bold',
        color:'hsl(214.3, 83.2%, 51%)',
          fontSize:20,
          borderBottomColor:'black',   
      },
      businessgraytextsetborderbottom: {
        fontSize:18,
        borderBottomWidth:0.5,
        paddingBottom:8,
        marginTop:'4%',
        fontFamily:'DMSans-Medium',
        color:'black',
      },
      businessgraytextsetone: {
        fontSize:18,
        marginTop:'4%',
        fontFamily:'DMSans-Medium',
        color:'black',
      },
      businessgraytextset: {
        fontSize:18,
        marginTop:'6%',
        borderBottomWidth:0.5,
        paddingBottom:10,
        color:'black',
      },
      rightsidesetpadding: {
        marginRight:15,
      },
      flexsewtrwo: {
        flexDirection:'row'
      }
});