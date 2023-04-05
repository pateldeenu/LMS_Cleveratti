import colors from '../Utiles/colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  erroText: {
    color: 'red',
    marginLeft: 3,
    marginBottom: 12,

},
  inputUnderLine: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 7,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 12,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputspaceset: {
    marginTop: '8%'
  },
  eyeiconset: {
    color: 'gray',
  },
  signuptextview: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 17,
    paddingLeft: 5,
    paddingRight: 5,

  },
  signintextset: {
    fontSize: 30,
    paddingBottom: 15,
    paddingLeft: 5,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center'
  },
  minviewallsetus: {
    marginTop: '10%',
  },
  accountbutton: {
    width: '100%',
    marginBottom: 15,
  },

  buttonset: {
    borderWidth: 1,
    borderColor: colors.theme_backgound,
    backgroundColor: colors.theme_backgound,
    width: '100%',
    borderRadius: 7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginwithfacbookminview: {
    marginTop: '5%',
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accountbuttontwo: {
    width: '91%',
    marginBottom: 25,
    marginRight: 15,
  },
  fackbbokbutton: {
    borderWidth: 1,
    borderColor: colors.theme_backgound,
    backgroundColor: colors.theme_backgound,
    width: '92%',
    borderRadius: 7,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginwithgooglesettextview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyleSignWithNumbericon: {
    backgroundColor: 'white',
    color: colors.theme_backgound,
    fontFamily: 'DMSans-Bold',
    fontSize: 35,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyleSignWithNumber2icon: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 35,
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: 'white',
    color: colors.theme_backgound,
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumbericon: {
    color: colors.theme_backgound,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  loginwithgooglewhiteshadow: {
    backgroundColor: 'white',
    width: '92%',
    textAlign: 'center',
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  buttonTextStylegoogle: {
    backgroundColor: 'white',
    color: colors.theme_backgound,
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyleSgoogle2: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
  },
  imagstyle: {
    width: 50,
    height: 40,
    marginRight: 10,
  },
  signuptext: {
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    fontSize: 18,

  },
  signupbold: {
    color: 'black',
    fontFamily: 'DMSans-Medium',
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textpassworedsert: {
    color: "black",
    fontFamily: 'DMSans-Medium',
    width: '80%',
  },
  spaceview: {
    marginTop: 20,
  },

  googlebuttonmstyleset: {
    borderWidth: 0,
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 1,
  },
  settwobuttonwidth: {
    width:'47%',
  }

});
