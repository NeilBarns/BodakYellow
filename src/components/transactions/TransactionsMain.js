import React, { useRef } from 'react'
import { View, Text, Button, TextInput, StatusBar, Image } from 'react-native'
import Styling from '../../styles/Styling'
import SearchMenuView from '../shared/SearchMenuView'
import DropDown from '../shared/DropDown'


const TransactionsMain = () => {

    return (
        <View style={[Styling.headerContainer, 
            Styling.transactionHeader,
            Styling.justifyContentCenter, 
            Styling.baseBackGroundColor]}>
  
            <Text style={Styling.headerWelcomeText}>Total balance</Text>
            <Text style={Styling.totalAmountText}>₱ 68,943.3</Text>
            
            <SearchMenuView  />
            <DropDown />
        </View>
    )
}

export default TransactionsMain
