import React from 'react';
import { StyleSheet } from 'react-native';
import {CustomInput} from './';
import {Button, View, Text, Input, Item, Card, CardItem, Icon } from 'native-base'

export class InputToArray extends React.Component {
    state = {
        ingredient: '',
        ingredientObj: {},
        ingredients: []
    }

    addItemToArray = () => {
        const ingredientsOld = this.state.ingredients;
        const newIngredient = {id: new Date().getTime(), name: this.state.ingredient}
        
        this.setState({ingredients: [...ingredientsOld, newIngredient], ingredientObj: newIngredient});

        console.log('SENT ITEM')
        this.props.renderItems(this.state.ingredientObj);
    }

    deleteListItem = ({i, id}) => {
        console.log('INDEX', i);
        const ingredientsOld = this.state.ingredients;
        const newArr = ingredientsOld.filter((item, index) => index !== i);
        this.setState({ingredients: [...newArr]});

        // Return deleted item
        const deletedItem = ingredientsOld.filter((item, index) => item.id === id)[0];
        console.log('INPUT TO ARRAY:::', deletedItem)
        this.props.deletedItem(deletedItem);

    }

    renderRecipeIngredients = (ingredients: any[]) =>{
        
        return (
          !!ingredients && 
          (
            <Card transparent> 
            { ingredients.map((ingredient, index) => {
            return (
                <CardItem key={index}>
                    <Icon active name="checkmark" />
                    <Text>
                      {ingredient.name}
                    </Text>
                    <Button transparent primary 
                            onPress={() => this.deleteListItem({i: index, id: ingredient.id})}>
                             <Icon name="close-circle" active={true}/>
                    </Button>
                </CardItem>)
            })}
            </Card>
            )
        )
      }

      
    render() {
        const {mainContainer} = styles;
        console.log('ADDED INGREDIENTS', this.state.ingredients)
        return (
            <View>
                <View style={mainContainer}>
                    <View style={{flex: 1, marginLeft: 3}}>
                        <Item stackedLabel>
                            <Input 
                                placeholder={this.props.title}
                                ref = {component => this._textInput = component}
                                onChangeText={text => this.setState({ ingredient : text }) }/>
                        </Item>
                    </View>
                    <View>
                        <Button transparent primary 
                            onPress={() => this.addItemToArray()}>
                            <Icon name="add-circle" active={true}/>
                        </Button>
                    </View>
                </View>
                    {this.renderRecipeIngredients(this.state.ingredients)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})