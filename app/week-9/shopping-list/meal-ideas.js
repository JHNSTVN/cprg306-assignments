'use client'
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (idMeal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await response.json();
  return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = async (idMeal) => {
    const mealDetails = await fetchMealDetails(idMeal);
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p className="text-gray-600">No meal ideas available for {ingredient}. Try another ingredient.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {meals.map((meal) => (
            <div 
              key={meal.idMeal} 
              className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <p className="text-lg font-semibold text-black">{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
      {selectedMeal && (
        <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-black">Recipe for {selectedMeal.strMeal}</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-800">
            {Object.keys(selectedMeal).filter(key => key.startsWith('strIngredient')).map((ingredientKey, index) => {
              const ingredient = selectedMeal[ingredientKey];
              const measureKey = `strMeasure${ingredientKey.replace('strIngredient', '')}`;
              const measure = selectedMeal[measureKey];
              return ingredient ? (
                <li key={index}>
                  {measure} {ingredient}
                </li>
              ) : null;
            })}
          </ul>
          <p className="mt-2 text-gray-800">{selectedMeal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default MealIdeas;
