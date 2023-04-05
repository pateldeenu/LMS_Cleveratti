import { StyleSheet,Dimensions } from 'react-native';
import colors from '../Utiles/colors'

export default StyleSheet.create({
    keybordtopviewstyle: {
        height: '100%', 
        width: '100%', 
        flex: 1 
    },
    minstyleviewphotograpgy: {
      
        height: '100%',
     width: '100%', 
    },
    minviewsigninscreen: {
        width:'95%',
        marginHorizontal:'2.3%',
        marginTop:'0%',
    },
    whiteboxwhishlist: {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 5,
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
        paddingTop:15,
        paddingBottom:15,
        alignItems:'center',
    },
    textviewsetwhishlist: {
        width:'70%',
        paddingRight:10,
    },
    designfonttext: {
        fontSize:18,
       fontFamily:'DMSans-Bold',
        color:'black',
        width:'100%'
    },
    dolardigittext: {
      fontSize:14,
      fontFamily:'DMSans-Medium',
      width:'100%',
      marginTop:'3%',
      color:'black'
    },
    onlydigittext: {
      fontSize:16,
      fontWeight:'700',
      color:'gray',
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
    imgbgcolorset: {
        backgroundColor:colors.theme_backgound,
        width:80,
        height:80,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    }
});