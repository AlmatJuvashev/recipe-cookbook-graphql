import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {withNavigation} from 'react-navigation';
import { Button, Icon } from 'native-base';

import { Card, CustomBtn2 } from './common';

const IngredientInfo = ({ recipe, navigation }) =>  {
    const {mainContainerStyle, subContainerStyle, mainTextStyle, lastContainer, buttonText, secondaryTextStyle, textWrapStyle} = styles;
    const navigateToDetails = () => {
      navigation.navigate('RecipeDetails', {recipe: recipe})
    }

    return (
        <Card cardStyle="1">
          <View style={mainContainerStyle}>
            <View style={subContainerStyle}>
              <View>
                <Text style={mainTextStyle}>Title:</Text>
              </View>
              <View>
                <Text style={mainTextStyle}>Description:</Text>
              </View>
            </View>
            <View style={subContainerStyle}>
              <View>
                <Text style={secondaryTextStyle}>{recipe.title}</Text>
              </View>
              <View>
                <Text style={textWrapStyle}>{recipe.description}</Text>
              </View>
            </View>
            <View style={lastContainer}>
            <Button iconRight primary transparent
              onPress={() => navigateToDetails()}
              style={{padding: 5, justifyContent: 'center'}}>
              <Text style={buttonText}>Details</Text>
              <Icon name='arrow-forward' />
            </Button>
            </View>
          </View>
        </Card>   
    )
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainerStyle: {
    width: 0,
    flexGrow: 1,
    marginRight: 2,
    paddingHorizontal: 2,
  },
  mainTextStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
  lastContainer: {
    marginLeft: 'auto',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    marginHorizontal: 5,
  },
  secondaryTextStyle: {
    color: 'white'
  },

  textWrapStyle: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'white'
  }
})

export default withNavigation(IngredientInfo)