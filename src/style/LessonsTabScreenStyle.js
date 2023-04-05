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
    paddingBottom: 18,
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
    alignItems: 'center',
  },
  textviewsetwhishlist: {
  width:'75%',
    paddingRight: 35,
  },
  designfonttext: {
    fontSize: 16,
    fontFamily:'DMSans-Bold',
    color: 'black',
    width: '100%'
  },
  dolardigittext: {
    fontSize: 15,
    width: '100%',
    fontFamily:'DMSans-Medium',
    marginTop: '3%',
    marginBottom: '2%',
    color:'black',
  },
  onlydigittext: {
    fontSize: 16.5,
    color: 'black',
    marginTop: '3%',
  },
  
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    right: 5,
  },
 
  setimageborser: {
    width: 110, 
    height: 110, 
    marginRight: 10,
     borderRadius: 7, 
  }
});
