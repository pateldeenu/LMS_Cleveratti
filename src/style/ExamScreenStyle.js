
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../Utiles/colors';
export default StyleSheet.create({

 
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '92%',
    marginHorizontal: '5%',
    height:'100%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  
  },
  keybordtopviewstyle: {
    height: '100%', 
    width: '100%', 
    flex: 1 ,
},
   minstyleviewphotograpgy: {
        height: '100%',
     width: '100%', 
     
    }, 
  examtitle: {
      color:'black',
      fontSize:18,
      fontFamily:'DMSans-Bold'
  },
  colorback: {
    color:'black',
  },
  inputUnderLine: {
    backgroundColor: 'white',
    width: '100%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 7,
    shadowColor: "black",
    shadowColor: "black",
    fontFamily:'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputviewset: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    fontFamily:'DMSans-Medium',
  },
  searchbgcolorset: {
      marginTop:8,
  },
  whiteboxwhishlist: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    flexDirection:'row',
    marginRight:15,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 5,
    paddingTop:20,
    height:110,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10,
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
  flexexamboxview: {
      flexDirection:'row',
      width:'47.5%',
      marginTop:12,
   
  },
  flexDirectiwhilist: {
    textAlign:'center'
  },
  boxintitle: {
      color:'black',
      textAlign:'center',
      fontSize:15,
      fontFamily:'DMSans-Bold',
      paddingBottom:5,
      paddingTop:7,
  },
  iconstylebox: {
      textAlign:'center',
      paddingBottom:5,
      color:'hsl(214.3, 83.2%, 51%)',
  },
  bankinuranceundertext: {
    textAlign:'center',
    fontSize:14,
    fontFamily:'DMSans-Medium' ,
    color:'black',
  },
  marginbottomspace: {
      marginBottom:0,
      paddingBottom:50,
  },
  setexamimage: {
    height:50,
    width:50, 
    borderRadius:100,
  },
  examimagview: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  navbarheaderminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop:10,
    paddingLeft:15,
    paddingRight:15,
    paddingTop: Platform.OS === 'ios' ? 18 : 0,
  },
  hometextheadercolor: {
    color:'hsl(214.3, 83.2%, 51%)',
    fontSize:23,
    fontWeight:'700',
    paddingTop:5,
  },
  setalliconsamestyle: {
    color:colors.theme_backgound,
    fontSize:30,
  }
});
