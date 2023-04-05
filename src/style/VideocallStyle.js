import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts,  } from '../Components/Commonfile/Dimensions';

export default StyleSheet.create({
    flex: {
        flex: 1,
    },
    setbgimage: {
        height: '100%',
        borderRadius: 0,
        width: '100%',
      position:'absolute',
    },
    setusertopimage: {
        height: 150,
        width: 150,
        borderRadius: 7
    },
    flexrowtextimage: {
       flexDirection:'row',
        width: '100%',
        position:'absolute',
        top:50,
        justifyContent:'space-between',
        paddingTop: 17,
    },
    flexrowsetaudiocall: {
        height:'100%',
        width:'100%'
    },
    calldirationstyle: {
        color: 'white',
        padding: 9,
        borderRadius: 100,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'DMSans-Medium',
    },
    seticonandtextflex: {
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:10,
    },
    setlockicon: {
        position:'relative',
        top:8,
        left:5,
    },
    setwhitetextnornal: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'DMSans-Medium',
        position: 'relative',
        top: -4,
    },
    seticonview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        marginHorizontal: '3%',
    },
    seticonviewsettwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: '4%',
    },
    iconpositionset: {
        backgroundColor: 'red',
        height: 40,
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
    },
    microphone: {
        backgroundColor: 'gray',
        height: 40,
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
    },
    microphonetext: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        textAlign:'center'
    },
    iconpositionsettext: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    setmutecolortext: {
        color: 'white',
        fontFamily: 'DMSans-Medium',
        fontSize: 14,
        textAlign:'center',
        paddingTop:10,
    },
    setmutecolortexttwo: {
        color: 'white',
        fontFamily: 'DMSans-Medium',
        fontSize: 16,
        position: 'relative',
        left: 7,
    },
    buttoncolorset: {
        backgroundColor: 'lightgray',
    },
    setbuttontrxt: {
        color: 'white'
    },
    setspekerbutton: {
        backgroundColor: '#046665',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 100,
        width: '46%',
        marginRight: 25
    },
    minbuttonview: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 30,
    },
    setcemeratextstyle: {
        color: 'white',
        marginLeft: 10,
        fontFamily: 'DMSans-Medium',
    },
    spekerimage: {
        tintColor: 'white',
        width: 30,
        height: 30,
    },
    usernametext: {
        color:'white',
        fontSize:30,
        fontFamily: 'DMSans-Medium',
    },
    buttonset: {
        borderWidth: 1,
        borderColor: '#046665',
        backgroundColor: '#046665',
        width: '100%',
        borderRadius: 227,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:15,
      }, 
      buttonTextStyleSignWithNumber: {
        color: '#046665',
        fontFamily: 'DMSans-Medium',
        position:'relative',
        top:3,
      },
      buttonTextStyleSignWithNumber2: {
        color: 'white',
        fontFamily: 'DMSans-Medium',
        position:'relative',
        top:3,
      }, 
      setbgcolorflexrow: {
          flexDirection:'row'
      },
      iconsizecolor: {
        color: '#046665',
        fontFamily: 'DMSans-Medium',
        marginRight:15
      },
      iconsizecolorset: {
        color: 'white',
        fontFamily: 'DMSans-Medium',
        marginRight:15
      },
      flextwobutton: {
          flexDirection:'row',
          width:'47.5%',
          marginTop:'5%'
      },
      setimagstyle: {
        tintColor:'#046665',
        width: 30,
        height: 30,
        marginRight:15
      },
      setimagstyletwo: {
        tintColor:'white',
        width: 30,
        height: 30,
        marginRight:15
      },
      setspacediv: {
        position:'absolute',
        bottom:0,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingBottom:15,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 2 : 25,
          elevation: Platform.OS === 'ios' ? 1 : 10,
      },
      container: {
        width: '100%',
        height: '100%',    
    },
    login: {
        color: '#263238',
        fontSize: 30,
        fontFamily: 'DMSans-Medium',
        marginTop: SH(60),
        lineHeight: 36,
        paddingBottom: SH(20),
    },
    button: {
        marginTop: SH(20),
        width: '100%',
    },
    textStyle: {
        color: '#263238',
        fontSize: 17,
        fontFamily: 'DMSans-Medium',
        marginTop: SH(7),
        lineHeight: 24,
    },
    registerTextStyle: {
        color: '#046665',
        fontSize: 17,
        fontFamily: 'DMSans-Medium',
        marginTop: SH(50),
        lineHeight: 24
    },
    buttonviewsettopspace: {
        marginTop: SH(20),
        width: '100%',
    },
    viewtextStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    logoimage: {
        height: 150,
        width: 150,
    },
    minstyleviewphotograpgy: {
        flexDirection:'row',
        height:'100%',
        width:'100%',
        alignItems:'center',
        backgroundColor:'hsl(209.3, 100%, 32.5%)',
    },
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-secondary',
    },
    success: {
        confirmButtonColor: 'red',
    },
    activedot: {
        borderTopWidth:2,
         width: "100%", 
         height: "100%",
          borderColor: 'red',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      textcenterview: {
          flexDirection:'row',
          justifyContent:'center',
          position:'relative',
          top:-30,
          left:-7,
      },
      imagsetstyle: {
          width:81,
          height:100,
          borderRadius:7,
      },
      minflexview: {
        width: '100%',
        height: '100%',
      },
      minviewsigninscreen: {
        width: '100%',
        height:'100%',
      },
      twoimagewisth: {
          width:'23%',
      },
      setmuteicon: {
          position:'absolute',
          bottom:30,
          backgroundColor:'gray',
          width:30,
          height:30,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          right:10,
         
          borderRadius:100,
      },
      graphimagstyle: {
          width:'100%',
         height:300,
         resizeMode:'contain'
      },
      setpaddingright: {
          width:'100%'
      },
      seticonviewandtextwidthset: {
        width:60,
        justifyContent:'center',
        alignItems:'center',
      },
      spekerimafgeset: {
          tintColor:'white',
          width:20,
          height:20,
      },
      startrecordingmetting: {
          backgroundColor:'white',
          width:110,
          height:35,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:100,
      },
      dotsetborder: {
         borderWidth:1,
         height:27,
         width:27, 
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         borderRadius:100,
      },
      setminviewcenterrecording: {
          flexDirection:'row',
          justifyContent:'center',
         marginTop:20,
         position:'absolute',
         width:'100%',
         top:0,
         marginBottom:10,
      },
      namestyleset: {
        fontFamily: 'DMSans-Medium',
        color:'white',
        textAlign:'center',
        fontSize:12,
      },
      setfourimgcenterview: {
        flexDirection: 'row',
         justifyContent: 'space-between',
          width: '97%', 
          marginTop: 10, 
          marginLeft:5,
          marginRight:5, 
      },
      setimageviewcenter: {
          marginTop:80,
      }
      
});