import React from 'react';
import { StyleSheet } from 'react-native';
import {CustomInput} from './';
import {Button, View, Text, Input, Item, Card, CardItem, Icon } from 'native-base'

export class InputToArray extends React.Component {
    state = {
        ingredient: '',
        ingredients: []
    }

    addItemToArray = () => {
        const ingredientsOld = this.state.ingredients;
        this.setState({ingredients: [...ingredientsOld, this.state.ingredient]});
        this.props.renderItems(this.state.ingredient);
    }

    renderRecipeIngredients = (ingredients: string[]) =>{
        
        return (
          !!ingredients && 
          (
            <Card transparent> 
            { ingredients.map((ingredient, index) => {
            return (
                <CardItem key='index'>
                    <Icon active name="checkmark" />
                    <Text>
                      {ingredient}
                    </Text>
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