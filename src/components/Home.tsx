import React from 'react';
import { ActivityIndicator, FlatList, ScrollView, View, ImageBackground, StyleSheet } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

/// LOCAL FILES
import { recipeInterface } from '../models';
import  IngredientInfo from './IngredientInfo';
import { CustomBtn } from './common';

import AccordionCustomHeaderContentExample from './RecipeList'

const GET_ALL_RECIPES = gql`
{
  allRecipes {
    id
    title
    description
    ingredients
    instructions  
  }
}
`;
 
interface RecipeListProps {}

class HomeComponent extends React.Component<RecipeListProps> {
  state = {
    recipe: []
  }

  static navigationOptions = {
    title: 'Recipe App',
  };

  private keyExtractor = (item: any) => item.id;

  private renderItem = (recipe: recipeInterface ) => {
    console.log('FROM RENDER ITEM:::', this.state.recipe)
    return (
      <IngredientInfo recipe={recipe}/>
    )
  }

  private navigateToCreatePage = (recipe: recipeInterface) => {
    this.setState({recipe: recipe})
    this.props.navigation.navigate('CreateRecipe', {recipe: this.state.recipe})
  }

  public render() {
    return (
      <Query query={GET_ALL_RECIPES} >
        {({loading, data, error, refetch}) => {

          if (this.props.navigation.getParam('refetchData', false)) {
            refetch();
          }

          return (
            (loading
            ? <ActivityIndicator />
            : (  
              <ImageBackground 
                source={require('../images/brunch-cocktail-5317.jpg')}
                style={styles.mainContainer}
                blurRadius={10}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={data ? data.allRecipes : []}
                  renderItem={({item}) => this.renderItem(item)}
                />
                <View style={{flex: 1}}>
                <CustomBtn 
                   raised={true}
                   disabled={false}
                   name='Create new recipe'
                   onPress={() => this.navigateToCreatePage(data.allRecipes)}/>
                </View>
              </ImageBackground>
            )
          ))
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default HomeComponent;