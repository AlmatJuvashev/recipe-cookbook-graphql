import { createStackNavigator } from 'react-navigation';
import  HomeComponent  from './components/Home';
import  CreateRecipeComponent  from './components/CreateRecipe';
import  RecipeDetailsComponent from './components/RecipeDetails';

const AppStackNavigator: any;

export default  AppStackNavigator  = new createStackNavigator({
    Home: { screen: HomeComponent},
    CreateRecipe: { screen: CreateRecipeComponent},
    RecipeDetails: {screen: RecipeDetailsComponent}
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#23147F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      }
    }
  })
  