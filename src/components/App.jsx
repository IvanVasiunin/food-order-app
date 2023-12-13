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

  const addDishToOrder = useCallback(
    (dish) => {
      setOrder((prev) => {
        const existingIndex = prev.findIndex((item) => item.id === dish.id);
  
        if (existingIndex !== -1) {
          const newOrder = [...prev];
          newOrder[existingIndex].count++;
          return newOrder;
        } else {
          return [...prev, { ...dish, count: 1 }];
        }
      });
    },
    []
  );
  

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        order={order}
        closeModal={handleToggleModal}
      />
      <Header cartClick={handleToggleModal} />
      <Main addDish={addDishToOrder} />
    </>
  );
}

export default App;
