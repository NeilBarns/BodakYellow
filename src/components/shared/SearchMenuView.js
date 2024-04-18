import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Styling from '../../styles/Styling'
import { scaledSheet } from '../../resources/Dimensions'

const SearchMenuView = () => {
  return (
    <View style={[Styling.flexRowAlingedCenter, styles.searchAndMenuView]}>
        <Image
            source={require('../../assets/images/search.png')}
            style={styles.icons}
        />
        <Image
            source={require('../../assets/images/dots.png')}
            style={styles.icons}
        />
    </View>
  );
};

const styles = scaledSheet.create({
    searchAndMenuView:
    {
        position: 'absolute',
        right: 0,
        top: 3
    },
    
    icons: {
        width: '18@s', 
        height: '18@s',
        marginHorizontal: '5@s'
    }
});

export default SearchMenuView;