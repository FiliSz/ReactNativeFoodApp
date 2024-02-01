import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({route, navigation}) => {
    const catId = route.params.categoryId;
    
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    function renderMealItem(itemData){
        return <MealItem 
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            id={itemData.item.id}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item)=> item.id}
                renderItem={renderMealItem}
            />
        </View>
)
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
})