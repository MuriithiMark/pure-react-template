import { useEffect, useEffectOnce, useState } from 'react';
import axios from 'axios';

import './styles/App.css';
import Card from './components/Card';
import LoadingComponent from './components/LoadingComponent';
import FetchErrorComponent from './components/FetchErrorComponent';

export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    axios.get("http://localhost:3001/expos")
    .then((response) => {

      setLoading(false);
      const exposData = response.data;
      setData(exposData)
    })
    .catch((error) => {

      setLoading(false);
      setHasError(true);
      console.error(error);
    });
  }

  useEffect(() => fetchData, [loading, hasError]);
  // Use EMPTY dependency array to prevent useEffect from running several times, track only necessary depedencies
  // using JSON.stringify(data); -> works for static data

  return (
    <main>
      {data.map((item) => <Card item={item} />)}
      {hasError && (<FetchErrorComponent />)}
      {loading && (<LoadingComponent />)}
    </main>
  )
}