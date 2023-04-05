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
          position:'relative',
          top:25,
      },
     
      whilistminbody: {
          width:'90%',
          marginHorizontal:'5%',
          marginTop:'13%',
          paddingBottom:70,
          height:'100%'
      },
      accountsettinview: {
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          borderBottomWidth:0.5,
          paddingBottom:15,
      },
      accountsettinviewtwo: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
      },
      accountsettintext: {
          color:'black',
          fontFamily:'DMSans-Bold',
          fontSize:22,
      },
      hometextheadercolor: {
        color:'white',
        fontSize:23,
        fontWeight:'700',
        marginTop:12,
        paddingLeft:15,
      },
    
});