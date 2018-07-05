import React from 'react';
import { Component } from 'react';
import {ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import {Mutation} from 'react-apollo';
import gql from "graphql-tag";
import { CustomInput, CustomBtn, InputToArray } from './common';
import { throwServerError } from 'apollo-link-http-common';

const CREATE_RECIPE = gql`
  mutation addRecipe($title: String!, $description: String!, $ingredients: [String!], $instructions: [String!]) {
    createRecipe(title: $title, description: $description, ingredients: $ingredients, instructions: $instructions) {
      id
      title
      description
      ingredients
      instructions
    }
  }
`;

interface CreateRecipeFormProps {}
interface CreateRecipeFormState {
  titleInputValue: string;
  descriptionInputValue: string;
  ingredientsValue: string[];
  instructionsValue: string[];
}

interface recipeData {
  createRecipe: {
    id: any,
    title: string,
    description: string
  }
}

class CreateRecipeComponent extends Component<CreateRecipeFormProps, CreateRecipeFormState> {
  state = {
    titleInputValue: '',
    descriptionInputValue: '',
    ingredientsValue: [],
    instructionsValue: []
  }

  static navigationOptions = {
    title: 'Create Recipe',
  };

  addTitle = (input: string) => {
    this.setState({titleInputValue: input})
  }

  addDescription = (input: string) => {
    this.setState({ descriptionInputValue: input})
  }

  createNewRecipe = (createRecipe: any) => {
    createRecipe({
      variables: {
        title: this.state.titleInputValue,
        description: this.state.descriptionInputValue,
        ingredients: this.state.ingredientsValue,
        instructions: this.state.instructionsValue
      }
    })
    console.log('REFETCH DATA')
    this.props.navigation.navigate('Home', {refetchData: true})
  }

  renderIngredients = (ingredient: string) => {
    this.setState({ingredientsValue: [...this.state.ingredientsValue, ingredient]})
  }

  renderInstructions = (instruction: string) => {
    this.setState({instructionsValue: [...this.state.instructionsValue, instruction]})
  }


  render() {
    return (
      <Mutation mutation={CREATE_RECIPE}>
        {(createRecipe, {data, loading, error}) => {
          console.log('DATA:::', data, "ERROR:::", error)
          return (
            <ScrollView alwaysBounceVertical={false}>
            <CustomInput 
              value={this.state.titleInputValue}    
              label="Enter Title"
              onChangeText={this.addTitle.bind(this)}/>
            <CustomInput 
              value={this.state.descriptionInputValue}        
              label="Enter Description"
              onChangeText={this.addDescription.bind(this)}/>
            <InputToArray title="Add Ingredients" renderItems={(item) => this.renderIngredients(item)}/>
            <InputToArray title="Add Instructions" renderItems={(item) => console.log('Instructions::', item)}/>
              <CustomBtn 
                raised={true}
                disabled={false}
                name='Create new recipe'
                onPress={() => this.createNewRecipe(createRecipe)}/>
          </ScrollView>
          )
        }}
      </Mutation>
    );
  }
}

export default CreateRecipeComponent;
