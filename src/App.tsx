import { useState, useEffect } from 'react'
import {
  Link,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [elements, setElements] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  function getInfo(param: any){
    console.log(param);
    
  }

  const fetchElements = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setElements(data)
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchElements()
  }, [])

  return (
    <>
      {loading ? (
        <p>Trwa ładowanie danych...</p>
      ) : (
        <ul>
          {elements.map(el => (
            <li key={el.id}>
              <Link to={`/${el.id}`}>Go to Page with Parameter</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App



// import { useState, useEffect } from 'react';
// const Fetch = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
      
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} loading='lazy' />
//       ))}
//     </div>
//   );
// };
// export default Fetch;