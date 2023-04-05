import colors from '../Utiles/colors';
import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

  overviewtabminview: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom:50,
  },
  whiteboxwhishlist: {
    width: '100%',
    borderBottomWidth: 0.5,
  },
  whiteboxwhishlistTwo: {
    width: '100%',
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 15,
    paddingRight:Platform.OS === 'ios' ? 15 : 0,
    paddingBottom: 15,
   
  },
  textviewsetwhishlist: {
  width:'70%',
    paddingRight: 20,
  },
  
  dolardigittext: {
    fontSize: 16,
    width: '100%',
    fontFamily:'DMSans-Medium',
    marginTop: '3%',
    marginBottom: '2%',
    color:'black',
  },
  setdollardtextset: {
    fontSize: 17,
    width: '100%',
    fontFamily:'DMSans-Medium',
    marginTop: '0%',
    marginBottom: '2%',
    color:'gray',
    position:'relative',
    left:'19%',
    paddingBottom:20,
    width:'85%',
    paddingRight:5,
  },
  onlydigittext: {
    fontSize: 16.5,
    color: 'black',
    marginTop: '3%',
  },
  stariconstyle: {
    color:'hsl(214.3, 83.2%, 51%)',
    flexDirection: 'row',
    marginTop: '2%',
    marginRight: '2%'
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: 5,
  },
  unlockrdtext: {
    color:'hsl(214.3, 83.2%, 51%)',
    paddingTop:6,
    fontFamily:'DMSans-Bold',
  },
  setreviesstyleimage: {
    height:50,
    width:50,
    borderRadius:7,
    marginRight:10
  },
  reviewflex: {
    flexDirection:'row',
  },
  flexratingandtext: {
    flexDirection:'row',
  },
  chengecolorstyle: {
    color: 'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    fontSize: 18,
},
unsetcolor: {
  color: 'hsl(27.7, 73.8%, 62.5%)',
  flexDirection: 'row',
  fontSize: 20,
  position:'relative',
  top:1,
},
iconview: {
  flexDirection:'row',
}
});
