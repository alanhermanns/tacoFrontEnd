import React from 'react';
import Taco from './Taco';

const TacoList = ({ tacos = [1, 2, 3], className }) => {

  const tacoDOM = tacos.map(taco => {
    return <Taco key={Math.random()}/>;
  });
  console.log(tacoDOM);
  return (
    <div className={className}>
      {tacoDOM}
    </div>
  );
};

export default TacoList;
