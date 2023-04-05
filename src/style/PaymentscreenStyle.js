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
        fontFamily:'DMSans-Medium',
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
        fontFamily:'DMSans-Medium',
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
        fontFamily:'DMSans-Medium',
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
      color:'#046665',
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
      fontFamily:'DMSans-Medium',
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
      fontFamily:'DMSans-Medium',
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
    },
    container: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topBg: {
        height: SH(150),
        width: '100%',
    },
    title: {
        marginTop: SH(80),
        width: 'auto',
        position: 'absolute',
        fontFamily:'DMSans-Medium',
        color: '#FFFFFF',
        fontSize: SF(24),
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: SF(36)
    },
    chideContainer: {
        width: '100%',
        marginTop: SH(10),
        paddingHorizontal: SH(8),
        paddingVertical: SH(20),
        backgroundColor: 'white',
        borderRadius: SW(7)
    },
    sectionView: {
        width: '100%',
        padding: SH(5),
        flexDirection: 'row',
        marginVertical: SH(5),
    },
    iconStyle: {
        height: SH(20),
        width: SH(20),
        position:'relative',
        top:2,
    },
    leblaStyle: {
        width: '80%',
        marginLeft: SW(15),
        fontFamily:'DMSans-Medium',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: SF(18),
        lineHeight: SF(24),
        color: 'black'
    },
    app_icon: {
        width: SH(45),
        height: SH(45),
        marginRight:30,
        borderRadius:5,
    },
    app_icontwo: {
        width: SH(30),
        height: SH(30),
        marginRight:25,
        borderRadius:5,
        position:'relative',
        top:7,
        left:8,
    },
    app_iconthree: {
        width: SH(50),
        height: SH(50),
        marginRight:25,
        borderRadius:5,
        color:'#046665',
        position:'relative',
        top:8,
        left:9,
    },
    upi_label: {
        fontFamily:'DMSans-Medium',
        fontWeight: '400',
        fontSize: SF(17),
        lineHeight: SF(24),
        color: '#263238',
    },
    setviewstyle: {
        height: '100%',
        width: '100%',
     
    },
    backaerrowsert: {    
        tintColor:'white'
    },
    settoucjbleview: {
        position:'absolute',
        top:20,
        left:20,
        width:37,
        height:37,
    },
    setwidthpaypal: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:-10,
    },
    setimagewidth: {
        height:40,
        width:40,
        marginRight:10,
        position:'relative',
        left:-8
    },
    flexrowsetnew: {
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'white',
        width:'95%',
        justifyContent:'space-between',
        borderRadius:7,
        paddingLeft:30,
        paddingBottom:10,
        paddingTop:10,
    },
    setbgcolor: {
      height:'100%',
      flexDirection:'row',
      justifyContent:'center'
    },
    flexrowsimpleimagtext: {
      flexDirection:'row',
      alignItems:'center'
    },
    setnormalborderview: {
      width:'100%',
      borderBottomColor:'gray',
      borderBottomWidth:1,
      borderStyle: 'dashed',
    },
    whitebgcolor: {
      backgroundColor:'white',
      paddingBottom:30,
      borderRadius:7,
    },
    setminviewwidth: {
      width:'90%',
      marginHorizontal:'5%'
    },
});