import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import AppStackNavigator from './src/Router';


console.disableYellowBox = true; // Diable Yellow Box


const GRAPH_QL_URL: string = 'https://api.graph.cool/simple/v1/cjj6o7yn93pge0110o567afux';

const client: any = new ApolloClient({
  uri: GRAPH_QL_URL,
  request: async (operation) => {
    const token = await AsyncStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    })
  }
})



export default class App extends React.Component {

  render() {
    return (
    <ApolloProvider client={client}>
        <AppStackNavigator />
    </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});
