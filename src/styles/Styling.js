
import { scaledSheet, screenHeight, screenWidth } from '../resources/Dimensions'

const Styling = scaledSheet.create({
    container: 
    {
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    headerContainer:
    {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },

    overviewHeader:
    {
        height: '200@s',
        padding: '12@s',
        paddingLeft: '30@s'
    },

    transactionHeader:
    {
        // height: auto,
        padding: '12@s',
        paddingLeft: '16@s',
        paddingTop: '10@s',
        borderBottomRightRadius: '20@s',
        borderBottomLeftRadius: '20@s'
    },

    baseBackGroundColor:
    {
        backgroundColor: '#f5c55f'
    },

    alignItemsCenter:
    {
        alignItems: 'center'
    },

    justifyContentCenter:
    {
        justifyContent: 'center'
    },

    headerImage:
    {
        position: 'absolute',
        right: '10@s',
        top: '5@s',
        width: '90@s',
        height: '90@s'
    },

    headerWelcomeText:
    {
        fontWeight: '600',
        fontSize: '13@s',
        fontFamily: 'Poppins-Regular',
        color: '#696762'
    },

    headerUserNameText:
    {
        fontWeight: '600',
        fontSize: '23@s',
        fontFamily: 'Poppins-Regular'
    },

    totalAmountText:
    {
        fontWeight: '600',
        fontSize: '20@s',
        fontFamily: 'Poppins-Regular'
    },

    flexRowAlingedCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    

    
});

export default Styling;
