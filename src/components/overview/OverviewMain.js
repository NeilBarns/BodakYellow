import React, { useRef } from 'react'
import { View, Text, Button, TextInput, StatusBar, Image } from 'react-native'
import Styling from '../../styles/Styling'

const OverviewMain = () => {

    return (
        <View style={Styling.container}>

            <StatusBar 
                backgroundColor='#f5c55f'
                barStyle='dark-content'
                showHideTransition={'fade'}
            />

            <View style={[Styling.headerContainer, 
                          Styling.overviewHeader,
                          Styling.justifyContentCenter, 
                          Styling.baseBackGroundColor]}>
                
                <Image
                    source={require('../../assets/images/smiling-bee.png')}
                    style={Styling.headerImage}
                />

                <Text style={Styling.headerWelcomeText}>Welcome back</Text>
                <Text style={Styling.headerUserNameText}>Neil</Text>

            </View>
        </View>
    )
}

export default OverviewMain
