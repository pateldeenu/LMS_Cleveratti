import { StyleSheet,Dimensions } from 'react-native';
import colors from '../Utiles/colors';

export default StyleSheet.create({
    keybordtopviewstyle: {
        height: '100%', 
        width: '100%', 
        flex: 1 
    },
    minstyleviewphotograpgy: {
        backgroundColor: 'white', 
        height: '100%',
     width: '100%', 
    },
    minviewsigninscreen: {
        width:'90%',
        marginHorizontal:'5%',
        marginTop:'0%',
    },
    whiteboxwhishlist: {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 7,
        paddingTop:10,
        paddingBottom:10,
        shadowColor: "black",
        shadowColor: "black",
        marginBottom:12,
        shadowOffset: {
          width: 0,
          height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 5 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
      },
    flexDirectiwhilist: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingLeft:10,
        paddingTop:3,
        paddingBottom:3,
        paddingRight:20,
        alignItems:'center',
    },
    textviewsetwhishlist: {
        width:'65%',
        paddingRight:20,
    },
    designfonttext: {
        fontSize:16,
        fontFamily:'DMSans-Bold',
        color:'black',
        width:'100%'
    },
    dolardigittext: {
      fontSize:17,
      fontWeight:'700',
      color:'black',
      width:'100%',
      marginTop:'3%',
    },
    paregraphtext: {
      fontSize:14,
      fontFamily:'DMSans-Medium',
      width:'100%',
      marginTop:'3%',
      color:'gray'
    },
  
    onlydigittexttwo3: {
      fontSize:16,
      fontWeight:'700',
      color:'black',
      marginTop:'3%',
      marginRight:'3%'
    },
    stariconstyle: {
        color:'black',
        flexDirection:'row',
        marginTop:'2%',
    },
    stariconview: {
        flexDirection:'row',
       alignItems:'center',
       width:'100%',
    },
    imagcenter:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
      } ,
      allisonperry: {
        color:'black',
        fontFamily:'DMSans-Bold',
        textAlign:'center',
        fontSize:18,
        marginTop:10,
      },
      userdetailesview: {
          width:'100%',
      },
      bornandbirtdateview: {
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:'10%',
          width:'100%',
      },
      bornandbirtdateviewtwo: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'7%',
        width:'100%',
        borderBottomColor:'lightgray',
        borderBottomWidth:1,
        paddingBottom:15,
    },
      borntext: {
          fontSize:18,
          fontFamily:'DMSans-Bold',
          color:'black',
      },
      birthdatetext: {
        fontSize:17,
        fontFamily:'DMSans-Bold',
        color:'black'
      },
      widthsetalldetailes: {
          width:'40%',
      },
      bordersetbottom: {
          borderBottomColor:'black',
          width:'100%', 
      },
      widthtwosetsevanty: {
          width:'70%',
      },
      paregraphsettextview: {
        width:'100%',
        marginTop:'10%',
      },
      paregraphtextset: {
        color:'black',
        fontFamily:'DMSans-Medium',
        flexDirection:'row',
        justifyContent:'flex-start',
        fontSize:15,
        width:'100%',
      },
      coursestitle: {
        fontSize:20,
        fontFamily:'DMSans-Bold',
        color:'black',
        width:'100%',
        marginTop:'5%',
        marginBottom:'5%'
      },
     
});