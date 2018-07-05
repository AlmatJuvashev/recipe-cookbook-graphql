import React from 'react';
;

export default const IngredientDetails = ({navigation}) => {

    console.log('Info from Details section:::', navigation)

    return (
      <ScrollView>
          <View>
              <Headline>{navigation.title}</Headline>
              <Subheading>{navigation.description}</Subheading>
            </View>
        </ScrollView>
    )
  
};


