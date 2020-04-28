import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import TableDisplay from './components/TableDisplay';
import './index.css';

export default function Stock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originData, setOriginData] = useState([]);

  const reSet = () => {
    setData(0);
  };
  const Searching = (symbol) => {
    console.log('originData', data.length);
    fetch(`http://131.181.190.87:3001/all?symbol=${symbol.Symbol}`)
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
  };
  const SearchingIndustry = (industry) => {
    console.log('originData', data.length);
    fetch(`http://131.181.190.87:3001/industry?industry=${industry}`)
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
  };
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
      .then((data) => {
        setOriginData(data);
      });

    setLoading(false);
  }, []);

  return (
    <div>
      <InputSearch
        symbol={originData}
        Searching={Searching}
        reSet={reSet}
        SearchingIndustry={SearchingIndustry}
      />
      <TableDisplay data={data} originData={originData} loading={loading} />
    </div>
  );
}
