import React from 'react';
import TacoList from './TacoList';
import styles from './App.css';
import CommonIngredients from './CommonIngredients';

export default function App(){ 
  return (
    <div className={styles.App}>
      <TacoList className={styles.List}/>;
      <CommonIngredients className={styles.Common}/>
    </div>);
}
  
