import React, { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import TableDisplay from './components/TableDisplay';
import { PageHeader } from 'antd';
import './index.css';

export default function Stock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originData, setOriginData] = useState([]);
  const [industry, setIndustry] = useState('');
  const [symbol, setSymbol] = useState('');

  const reSet = () => {
    setData(originData);
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

  const searchStock = (symbol) => {
    // searching symbol without api
    console.log('stock symbol :', symbol.Symbol);
    if (symbol !== '') {
      const stockResult = originData.filter(
        (item) => item.symbol.indexOf(symbol.Symbol) !== -1
      );
      // Compares the target data by filter and changes the display data to the target data
      setData(stockResult);
    } else {
      return setData(originData);
      // Clicking search when there is no search content displays the initial data
    }
  };

  useEffect(() => {
    const URL = industry
      ? `http://131.181.190.87:3001/industry?industry=${industry}`
      : `http://131.181.190.87:3001/all`;

    setLoading(true);
    async function getting() {
      fetch(URL)
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
          setLoading(false);
          if (industry) {
            return typeof industry == 'string'
              ? setData(data)
              : setData(originData);
          } else {
            setOriginData(data);
            return setData(data);
          }
        })

        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
    getting();
  }, [industry, symbol]);
  console.log('industry symbol :', industry);

  console.log('originData :', originData);
  console.log('data filtered by industry name or stock symbol :', data);
  return (
    <div className='stockBox'>
      <InputSearch
        originData={originData}
        reSet={reSet}
        searchStock={searchStock}
        setIndustry={setIndustry}
        data={data}
      />
      <TableDisplay data={data} originData={originData} loading={loading} />
    </div>
  );
}
