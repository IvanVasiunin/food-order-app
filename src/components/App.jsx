import { useCallback, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState([]);

  function handleToggleModal() {
    setIsModalOpen(prev => !prev);
  }

  const addDishToOrder = useCallback(dish => {
    setOrder(prev => {
      const index = prev.findIndex(item => item.id === dish.id);
      if (index !== -1) {
        const newOrder = [...prev];
        newOrder[index].count++;
        return newOrder;
      } else {
        return [...prev, { ...dish, count: 1 }];
      }
    });
  }, []);

  function handleAddDish(id) {
    setOrder(prev => {
      const index = prev.findIndex(item => item.id === id);
      const newOrder = [...prev];
      newOrder[index].count++;
      return newOrder;
    });
  }

  function handleRemoveDish(id) {
    setOrder(prev => {
      const index = prev.findIndex(item => item.id === id);
      const newOrder = [...prev];
      if (newOrder[index].count === 1) {
        return newOrder.filter(item => item.id !== id)
      } else {
        newOrder[index].count--;
        return newOrder;
      }
    });
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        order={order}
        closeModal={handleToggleModal}
        onPlus={handleAddDish}
        onMinus={handleRemoveDish}
      />
      <Header cartClick={handleToggleModal} dishesCount={order.length} />
      <Main addDish={addDishToOrder} />
    </>
  );
}

export default App;
