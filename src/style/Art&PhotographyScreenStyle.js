import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    keybordtopviewstyle: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    minstyleviewphotograpgy: {
        backgroundColor: 'rgba(223,238,255,1)',
        height: '100%',
        width: '100%',
    },
    minviewsigninscreen: {
        width: '92%',
        marginHorizontal: '4%',
        marginTop: '0%',
    },
    whiteboxwhishlist: {
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        shadowColor: "black",
        shadowColor: "black",
        marginBottom: 12,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
    },
    flexDirectiwhilist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,    
    },
    textviewsetwhishlist: {
        width: '62%',
    },
    designfonttext: {
        fontSize: 16,
        fontFamily: 'DMSans-Bold',
        color: 'black',
        width: '100%'
    },
    dolardigittext: {
        fontSize: 17,
        fontFamily: 'DMSans-Bold',
        color: 'black',
        width: '100%',
        marginTop: '3%',
    },
    onlydigittext: {
        fontSize: 16,
        fontFamily: 'DMSans-Bold',
        color: 'gray',
        marginTop: '3%',
        marginRight: '3%'
    },
    stariconstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        marginTop: '2%',
    },
    chengecolorstyle: {
        color: 'hsl(27.7, 73.8%, 62.5%)',
        flexDirection: 'row',
        position: 'relative',
        fontSize: 18,
        top: 2,
    },
    stariconview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    imagesetios: {
        marginRight: 13,
        width: 100,
        height: 100,
        borderRadius: 7,
    },
    setstartanddolardtext: {
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        bottom:0,
        width:'80%'
    },
    setreviewstext: {
        fontSize: 15,
        fontFamily: 'DMSans-Medium',
        color: 'black',
        width: '100%',
        position:'absolute',
        bottom:25,
    }

});