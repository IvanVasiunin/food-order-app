import { useEffect, useState } from 'react';

export default function Main({addDish}) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then(response => response.json())
      .then(data => {
        setDishes(data);
        console.log(data);
      });
  }, []);

  return (
    <main>
      <div id="meals">
        {dishes.map(dish => {
          return (
            <article className="meal-item" key={dish.id}>
              <img
                src={`http://localhost:3000/${dish.image}`}
                alt={dish.name}
              />
              <h3>{dish.name}</h3>
              <div className="meal-item-price">${dish.price}</div>
              <div className="meal-item-description">{dish.description}</div>
                <button onClick={() => addDish(dish)} className="meal-item-actions">Add to Cart</button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
