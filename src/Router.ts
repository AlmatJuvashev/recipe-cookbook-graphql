import { createStackNavigator } from 'react-navigation';
import  HomeComponent  from './components/Home';
import  CreateRecipeComponent  from './components/CreateRecipe';
import  RecipeDetailsComponent from './components/RecipeDetails';
import SignUpComponent from './components/auth/Signup';
import SignInComponent from './components/auth/Signin';

console.log('SIGN UP', SignUpComponent)
import { createSignalIfSupported } from 'apollo-link-http-common';

const AppStackNavigator: any;

export default  AppStackNavigator  = new createStackNavigator({
    Home: { screen: HomeComponent},
    CreateRecipe: { screen: CreateRecipeComponent},
    RecipeDetails: {screen: RecipeDetailsComponent},
    Auth: { screen: SignUpComponent },
    SignIn: { screen: SignInComponent }
  }, {
   initialRouteName: 'Auth',
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
  