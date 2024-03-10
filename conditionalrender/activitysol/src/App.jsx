import { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [card, setCard] = useState([]); // Provide an initial empty array
  
  const fetchData = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      setCard(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call fetchData directly when the component mounts
  fetchData();
  
  return (
    <>
      <Navbar />
      <div className='flex flex-wrap justify-center m-10 p-5'>
      {card.map((cardItem) => (
        <Card key={cardItem.id} data={cardItem} />
      ))}

      </div>
     
    </>
  );
}

export default App;
