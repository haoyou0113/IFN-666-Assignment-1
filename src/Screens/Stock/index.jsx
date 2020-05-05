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
    // searching symbol with api
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

  const searchStock = (values) => {
    // searching symbol without api
    if (values !== '') {
      const stockResult = originData.filter(
        (item) => item.symbol === values.Symbol
      );
      // Compares the target data by filter and changes the display data to the target data
      setData(stockResult);
    } else {
      return setData(originData);
      // Clicking search when there is no search content displays the initial data
    }
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
    <div className='stockBox'>
      <InputSearch
        originData={originData}
        reSet={reSet}
        searchStock={searchStock}
        SearchingIndustry={SearchingIndustry}
        data={data}
      />
      <TableDisplay data={data} originData={originData} loading={loading} />
    </div>
  );
}
