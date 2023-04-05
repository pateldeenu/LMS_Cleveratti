import colors from '../Utiles/colors';
import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

    overviewtabminview: {
        width: '93%',
        marginHorizontal: '3%',
        marginTop: '10%'
    },
    textpacregraph: {
        color: colors.theme_backgound,
        fontFamily:'DMSans-Bold',
        fontSize: 18,
    },
    loremlongparegraph: {
        paddingTop: '5%',
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        paddingBottom: 15,
        fontFamily:'DMSans-Medium',
        color:'black',
    },
    scetiontwoview: {
        width: '100%',
        marginTop: '5%',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        paddingBottom: 15,
        marginBottom:15,
    },
    flexrowiconandtextview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
        paddingHorizontal: '3%',
    },
    marginrightset: {
        color: 'black',
        marginRight: 20,
    },
    textsetvideo: {
        color: 'black',
        fontFamily:'DMSans-Bold',
        fontSize: 17,
    },
    textpacregraphtwo: {
        color: colors.theme_backgound,
        fontFamily:'DMSans-Bold',
        fontSize: 18,
    },
    roundimagtitletextset: {
        justifyContent: 'center',
        width: '100%',
        color: 'white',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        top: '70%',
        left: '12%',
        fontWeight: '700',
    },
   
    navContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        height:65,
        paddingRight: 20,
        alignItems:'center'
    },
    hoveraerrorset: {
        width:60,
        paddingLeft: 10,
    },
    backarrowwork: {
    
        flexDirection:'row',

    },
    plusiconandtextview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    computerscrimceview: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 25,
        marginTop: 50,
    },
    computertext: {
        color: 'white',
        fontSize: 17,
        marginBottom: 5,
        fontFamily:'DMSans-Bold',
        marginRight:10,
    },
    flexrowvideoicon: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    longtextset: {
        fontSize: 23,
        fontFamily:'DMSans-Bold',
        color: 'white',
    },
    buttonTextStyleSignWithNumbertwosetvi: { 
        color: 'white',
        fontFamily:'DMSans-Bold',
        fontSize: 30,
        marginRight:20,
      },
      buttonTextStyleSignWithNumber2twodeo: {
        color: colors.theme_backgound,
        fontFamily:'DMSans-Bold',
        fontSize: 30,
        marginRight:20,
      },
    stariconstyle: {
        color:'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        position: 'relative',
        top:-3,
      },
      chengecolorstyle: {
        color:'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        fontSize:18,
        position: 'relative',
        top:-3,
      },
    longtextsetdigit: {
        fontSize: 20,
        fontFamily:'DMSans-Bold',
        color: 'white',
    },
    flexrowsetus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    minviewfoerecious: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems:'center'
    },
    staricon: {
        color: 'white',
        marginRight: 2,
        marginTop: 2,
    },
    buttonset: {
        borderWidth: 1,
        borderColor: 'hsl(216.8, 90.7%, 38%)',
        backgroundColor: 'hsl(216.8, 90.7%, 38%)',
        width: '100%',
        borderRadius: 222,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonsetwatch: {
        borderWidth: 1,
        borderColor: 'hsl(216.8, 90.7%, 38%)',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 222,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonTextStyleSignWithNumberwhatch: {
        color: 'white',
        fontFamily:'DMSans-Bold',
        fontSize: 18,
    },
    buttonTextStyleSignWithNumberwhatch2: {
        color: 'hsl(216.8, 90.7%, 38%)',
        fontFamily:'DMSans-Bold',
        fontSize: 18,
    },
    accountbutton: {
        marginBottom: 15,
        position:'relative',
        top:15,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
    },
    accountbuttontwo: {
        marginBottom: 15,
        position:'relative',
        top:15,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    whiteboxwhishlist: {
        width: '100%',
        height: 55,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "black",
        shadowColor: "black",
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 5 : 25,
          elevation: 1,
        },
    tabsettext: {
        fontSize: 18,
        color: colors.theme_backgound,
        fontFamily:'DMSans-Bold',
    },
    bordersetactive: {
        position: 'absolute',
        borderBottomColor: colors.theme_backgound,
        borderBottomWidth: 2,
        height: Platform.OS === 'ios' ? 3 : 3,
        width: 130,
        top: Platform.OS === 'ios' ? -3 : -3,
        backgroundColor: colors.theme_backgound,
    },
    bordersetactivetwo: {
        position: 'absolute',
        borderBottomColor: colors.theme_backgound,
        borderBottomWidth: 2,
        height: Platform.OS === 'ios' ? 3 : 3,
        width: 110,
        top: Platform.OS === 'ios' ? -3 : -3,
        right: 110,
        backgroundColor: colors.theme_backgound,
    },
    bordersetactivethree: {
        position: 'absolute',
        borderBottomColor: colors.theme_backgound,
        borderBottomWidth: 2,
        height: Platform.OS === 'ios' ? 3 : 3,
        width: 110,
        top: Platform.OS === 'ios' ? -3 : -3,
        right: 0,
        backgroundColor: colors.theme_backgound,
    },
    positionabsolutesetbutton: {
        position:'absolute',
        bottom:0,
        backgroundColor:'white',
        width:'100%',
        paddingBottom:10,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 5 : 25,
          elevation: 1,
    },
    setbuttonwidthview: {
        width:'60%',
    },
    dolardtextset: {
        color:'black',
        fontSize:20,
    },
    textcenyet: {
        flexDirection:'row',
        justifyContent:'center',
        width:'30%'
    }
});
