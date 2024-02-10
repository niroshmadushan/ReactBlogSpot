import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mycomponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'FWh749kMjd4OhChKcse1sDJ4S4bts6uf';
        const response = await axios.get('https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/5/minute/2023-01-02/2023-01-05?apiKey=' + apiKey); // Replace with your API URL
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect will run once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error fetching data.</p>;
  }

  
  function onclick(){
    data.map((ele)=>{ // eslint-disable-next-line
       const values={
        Timestamp:  new Date(ele.t).toLocaleString(),
        Open:ele.o,
        High:ele.h,
        Low:ele.l,
        Close:ele.c,
        Volume:ele.v,
       };
       console.log(values);
       //axios.post("http://localhost:3001/forex",values).then((response)=>{
            console.log("It worked")
         // })
    })
   return
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onclick}>touch</button>
    </div>
  );
};

export default Mycomponent;
