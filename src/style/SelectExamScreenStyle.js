
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
    
  },
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
    marginTop: 0,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  examtitle: {
      color:'black',
      fontSize:18,
      fontFamily:'DMSans-Bold',
      marginBottom:25,
  },
  inputUnderLine: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 220,
    shadowColor: "black",
    shadowColor: "black",
    fontFamily:'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 25.00,
    elevation: 5,
  },
  inputviewset: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  searchbgcolorset: {
      marginTop:20,
  },
 
  flexexamboxview: {
      flexDirection:'row',
      width:'100%',
    
  },
 
  boxintitle: {
      color:'black',
      textAlign:'center',
      fontSize:15,
      fontFamily:'DMSans-Bold',
      paddingBottom:5,
      paddingTop:3,
  },
  iconstylebox: {
      textAlign:'center',
      paddingBottom:5,
      color:'white',
  },
  bankinuranceundertext: {
    textAlign:'center',
    fontSize:14,
    fontFamily:'DMSans-Medium' 
  },
  marginbottomspace: {
      marginBottom:25,
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
    marginBottom:10,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
flexDirectiwhilist: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:15,
    paddingTop:8,
    paddingBottom:8,
    alignItems:'center',
},
textviewsetwhishlist: {
    width:'100%',  
},
designfonttext: {
    fontSize:16,
   fontFamily:'DMSans-Bold',
    color:'black',
    width:'100%'
},
dolardigittext: {
  fontSize:14,
  fontFamily:'DMSans-Medium',
  width:'100%',
  marginTop:'1%',
  color:'black',
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

textandiconflexview: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width:'74%'
},
iconview: {
    flexDirection:'row',
    justifyContent:'flex-end',
    width:'20%',
},
textviewwidthset: {
    width:'80%',
},
accountbutton: {
    width: '100%',
   marginTop:10,
  },

  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '100%',
    borderRadius: 7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: 'white',
    color: 'hsl(216.8, 90.7%, 38%)',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily:'DMSans-Bold',
    fontSize: 18,
  },
});
