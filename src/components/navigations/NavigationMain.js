import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { scale } from 'react-native-size-matters';

//MAIN SCREENS
import AccountMain from '../../components/account/AccountMain';
import AnalyticsMain from '../../components/analytics/AnalyticsMain';
import OverviewMain from '../../components/overview/OverviewMain';
import TransactionsMain from '../../components/transactions/TransactionsMain';

// import useTaskDetailsContext from '../../hooks/Customer/useTaskDetailsContext';
// import useTaskDetailsGlobal from '../../hooks/Customer/useTaskDetailsGlobal';
// import useTaskDetailChangesMadeContext from '../../hooks/Customer/useTaskDetailChangesMadeContext';
// import useTaskDetailsChangesMadeGlobal from '../../hooks/Customer/useTaskDetailsChangesMadeGlobal';

const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#eb6e65',
    tabBarStyle: {
        height: scale(50),
        padding: scale(5)
    }
};

const Tab = createBottomTabNavigator();

const MainStackScreen = () => (
    <Tab.Navigator initialRouteName='OverviewMain'
        screenOptions={screenOptions}
    >
        <Tab.Screen name='OverviewMain'
            component={OverviewMain}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Overview</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="grid" color={color} size={scale(20)} />
                ),

            }} />

        <Tab.Screen name='TransactionsMain'
            component={TransactionsMain}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Transactions</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="drawer" color={color} size={scale(20)} />
                ),
            }} />

        <Tab.Screen name='AnalyticsMain'
            component={AnalyticsMain}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Analytics</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="graph" color={color} size={scale(20)} />
                ),
            }} />

        <Tab.Screen name='AccountMain'
            component={AccountMain}
            options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        fontWeight: focused ? 'bold' : 'normal',
                        fontSize: scale(10),
                        marginBottom: 9
                    }}>Account</Text>
                ),
                tabBarIcon: ({ color, size }) =>
                (
                    <SimpleLineIcons name="user" color={color} size={scale(20)} />
                ),
            }} />

    </Tab.Navigator>
)

export default function NavigationMain() {

    // const globalTaskDetails = useTaskDetailsGlobal();
    // const globalTaskDetailsChanges = useTaskDetailsChangesMadeGlobal();

    return (
        // <useTaskDetailsContext.Provider value={globalTaskDetails}>
        //     <useTaskDetailChangesMadeContext.Provider value={globalTaskDetailsChanges}>
                <NavigationContainer>
                   <MainStackScreen />
                </NavigationContainer>
        //     </useTaskDetailChangesMadeContext.Provider>
        // </useTaskDetailsContext.Provider >
    );
}
