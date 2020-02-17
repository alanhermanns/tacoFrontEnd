import React from 'react';

const CommonIngredients = ({ common = ['Hard Bread', 'Some Other Stuff'] }) => {
  const ingredients = common.map(ingredient => {
    return (<li key={Math.random()}>{ingredient}</li>);
  });
  return (
    <>
      <h2>Common Ingredients</h2>  
      <ul>
        {ingredients}
      </ul>
    </>
  );
};

export default CommonIngredients;
