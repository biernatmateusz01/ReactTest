import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const { id } = useParams();
    const [count, setCount] = useState<number>(0);
    const [elements, setElements] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchElements = async (paramId: string | undefined) => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${paramId}`);
                const data = await response.json();
                setElements(data);
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchElements(id);
    }, [id]);

    return <span>asd</span>;
}

export default App;
