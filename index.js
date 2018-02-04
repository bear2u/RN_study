import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!!'} />
        <AlbumList />
    </View>
); 
//{} -> () 조심하자.

AppRegistry.registerComponent('AwesomeProject', () => App);
