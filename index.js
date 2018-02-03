import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => (
    <View>
        <Header headerText={'Albums!!'} />
        <AlbumList />
    </View>
); 
//{} -> () 조심하자.

AppRegistry.registerComponent('AwesomeProject', () => App);
