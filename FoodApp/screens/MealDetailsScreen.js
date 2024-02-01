import { ScrollView, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';

const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);
   

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}

      />  
      <View>
        <View>
            <Subtitle data='Ingrediends'/>
            <List data={selectedMeal.ingredients}/>
            <Subtitle data='Steps'/>
            <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32,
    
    },
    image:{
        height: 350,
        width: '100%',
    },
    title:{
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
        color: 'white',
        fontWeight: 'bold',
    }
    

    
})