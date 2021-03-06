import React from 'react';
import { StyleSheet } from 'react-native';
import {CustomInput} from './';
import {Button, View, Text, Input, Item, Card, CardItem, Icon } from 'native-base'

export class InputToArray extends React.Component {
    state = {
        ingredient: '',
        ingredients: []
    }

    addItemToArray = async () => {
        const ingredientsOld = this.state.ingredients;
        await this.setState({ingredients: [...ingredientsOld, this.state.ingredient]});
        this.props.renderItems(this.state.ingredients);
    }

    deleteListItem = async (i) => {
        const ingredientsOld = this.state.ingredients;
        const newArr = ingredientsOld.filter((item, index) => index !== i);
        await this.setState({ingredients: [...newArr]});
        this.props.renderItems(this.state.ingredients);
    }

    renderRecipeIngredients = () =>{
        //this.props.renderItems(ingredients);
        return (
          !!this.state.ingredients && 
          (
            <Card transparent> 
            { this.state.ingredients.map((ingredient, index) => {
            return (
                <CardItem key={index}>
                    <Icon active name="checkmark" />
                    <Text>
                      {ingredient}
                    </Text>
                    <Button transparent primary 
                            onPress={() => this.deleteListItem(index)}>
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
        return (
            <View>
                <View style={mainContainer}>
                    <View style={{flex: 1, marginLeft: 3}}>
                        <Item stackedLabel>
                            <Input 
                                placeholder={this.props.title}
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
                    {this.renderRecipeIngredients()}
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