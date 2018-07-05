import React from 'react';
import  { Component } from 'react';
import {  Text, ScrollView, StyleSheet, View } from 'react-native';
// import { Headline, Subheading } from 'react-native-paper';
import {Card, CardItem, Body, Content, Title, Icon, Left} from 'native-base';
import { recipeInterface } from '../models';


class RecipeDetailsComponent extends Component {
  static navigationOptions = {
    title: 'Recipe Details',
  };
  //{navigation} = this.props;
  renderRecipeIngredients = (ingredients: string[]) =>{
    return (
      ingredients.map((ingredient, index) => {
        return (
            <CardItem key='index'>
                <Icon active name="checkmark" />
                <Text>
                  {ingredient}
                </Text>
            </CardItem>
        )
      })
    )
  }

  renderWarningMsg = (msg: string) => {
    return (
      <View style={{marginLeft: 20, marginBottom: 15}}>
        <Text style={{color: 'orangered', fontWeight: 'bold'}}>{msg}</Text>
      </View>
    )
    }

  render() {
    const recipe: recipeInterface = this.props.navigation.getParam('recipe', '');
    const { titleText, footerText, sectionText} = styles;
    return (
      <ScrollView>
        <Content>
          <Card>
            <CardItem header bordered>
              <Text style={titleText}>{recipe.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={sectionText}>
                  Description
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Text>
                  {recipe.description}
                </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={sectionText}>
                  Ingredients
                </Text>
              </Body>
            </CardItem>
              {(recipe.ingredients | recipe.ingredients.length > 0) ? 
                this.renderRecipeIngredients(recipe.ingredients) 
                : this.renderWarningMsg('No Ingredients')}
            <CardItem>
              <Body>
                <Text style={sectionText}>
                  Instructions
                </Text>
              </Body>
            </CardItem>
              {(recipe.instructions | recipe.instructions.length > 0) ? 
                this.renderRecipeIngredients(recipe.instructions): 
                this.renderWarningMsg('No Instructions')}
            <CardItem footer bordered>
              <Text style={footerText}>Recipe Cookbok</Text>
            </CardItem>
         </Card>
        </Content>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: '#4054B2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#4054B2',
    fontSize: 20,
    fontWeight: 'normal',
  },
  sectionText: {
    color: '#4054B2',
    fontSize: 18,
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  warningMsg: {
    color: 'orangered',
    fontWeight: 'bold',
  },
  warningContainer: {
    marginLeft: 10
  },
  buttonText: {
    color: 'white',
    marginHorizontal: 5,
  }
})


export default RecipeDetailsComponent;
