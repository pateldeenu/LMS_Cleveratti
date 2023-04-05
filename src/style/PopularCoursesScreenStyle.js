
import { StyleSheet,Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  
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
        justifyContent:'space-between',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
        paddingRight:11,
      },
      flerxdirationplusandtext: {
          flexDirection:'row',
          alignItems:'center'
      },
      iconlessthanback: {
          color:'white',
          marginRight:10,
      },
      addtovisitlisttext: {
        color:'white', 
      },
      computerscrinceview: {
          width:'100%',
      },
      computersciebcetext: {
          textAlign:'left',
          color:'white',
          fontSize:17,
          marginBottom:13,
      },
      allheadertitleminview: {
          width:'100%',
          paddingLeft:20,
          paddingRight:20,
          marginTop:-100
      },
      consoledeclopmenttextheader: {
        color:'white',
        fontSize:23,
        fontWeight:'700',
        marginBottom:20,
      },
      stariconstyle: {
        color:'white',
        flexDirection:'row',
        marginTop:'2%',
        marginRight:2,
    },
    stariconview: {
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       width:'100%',
    },
    onlydigittext: {
        color:'white',
        marginRight:5,
        fontSize:16,
    },
    dolardtext: {
        color:'white',
        fontSize:23,
        fontWeight:'700',
    },
    flexdirction4view: {
        flexDirection:'row',
    },
    accountbutton: {
        width: '100%',
        height: '100%',
      },
      buttonset: { 
        borderWidth: 1,
        borderColor: 'hsl(216.8, 90.7%, 38%)',
        backgroundColor:'hsl(216.8, 90.7%, 38%)',
        width:'100%',
        borderRadius:2,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonTextStyleSignWithNumber: {
        backgroundColor : 'white',
        color: 'hsl(216.8, 90.7%, 38%)',
        fontWeight:'700',
        fontSize:18,
      },
      buttonTextStyleSignWithNumber2: {
        color: 'white',
        fontWeight:'700',
        fontSize:18,
      },
     
});
