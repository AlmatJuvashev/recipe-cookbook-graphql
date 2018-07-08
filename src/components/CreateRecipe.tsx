import React from 'react';
import { Component } from 'react';
import {ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import {Mutation} from 'react-apollo';
import gql from "graphql-tag";
import { CustomInput, CustomBtn, InputToArray } from './common';
import { throwServerError } from 'apollo-link-http-common';
// import { photoUpload, photoUpload2 } from "./imageManipulation/UploadPhoto";
import PickImage from './imageManipulation/ImagePicker';

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

  renderIngredients = (ingredients: string[]) => {
    console.log('ADDED INGREDIENTS:::', ingredients)
    this.setState({ingredientsValue: [...ingredients]})
  }

  renderInstructions = (instructions: string[]) => {
    console.log('ADDED Instructions:::', instructions)
    this.setState({instructionsValue: [...instructions]})
  }

  // uploadPhotos = () => {
  //   photoUpload2();
  // }


  render() {
    return (
      <Mutation mutation={CREATE_RECIPE}>
        {(createRecipe, {data, loading, error}) => {

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
            <InputToArray 
              title="Add Ingredients" 
              renderItems={(items) => this.renderIngredients(items)}/>
            <InputToArray 
              title="Add Instructions" 
              renderItems={(items) => this.renderInstructions(items)}/>
              <CustomBtn 
                raised={true}
                disabled={false}
                name='Create new recipe'
                onPress={() => this.createNewRecipe(createRecipe)}/>
                {/* <CustomBtn 
                raised={true}
                disabled={false}
                name='upload Photo'
                onPress={() => this.uploadPhotos()}/>
                <PickImage /> */}
                <PickImage />
          </ScrollView>
          )
        }}
      </Mutation>
    );
  }
}

export default CreateRecipeComponent;
