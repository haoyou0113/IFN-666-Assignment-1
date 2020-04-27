import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import TableDisplay from './components/TableDisplay';
import './index.css';

export default function Stock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`http://131.181.190.87:3001/all`)
      .then((res) => res.json())
      .then((data) =>
        data.map((item) => {
          return {
            key: item.symbol,
            symbol: item.symbol,
            name: item.name,
            industry: item.industry,
          };
        })
      )
      .then((data) => setData(data));
    setLoading(false);
  }, []);

  const Searching = (symbol) => {
    fetch(`http://131.181.190.87:3001/all?symbol=${symbol}`)
      .then((res) => res.json())
      .then((data) =>
        data.map((item) => {
          return {
            key: item.symbol,
            symbol: item.symbol,
            name: item.name,
            industry: item.industry,
          };
        })
      )
      .then((data) => setSearchData(data))
      .then(console.log('data', data));
  };

  return (
    <div>
      <InputSearch symbol={data} Searching={Searching} />
      <TableDisplay data={data} loading={loading} searchData={searchData} />
    </div>
  );
}
