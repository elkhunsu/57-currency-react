import React, { useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { useState } from 'react';
import './../App.css';

function Home() {
  const [data, setData] = useState();

  const weBuy = (value) => {
    return (parseFloat(value) * 5 / 100) + parseFloat(value)
  }

  const weSell = (value) => {
    return parseFloat(value) - (parseFloat(value) * 5 / 100)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.currencyfreaks.com/latest?apikey=d02d1f51c0f3492697f47a3786e0da3a")
        .then((res) => {
          return res.data?.rates;
        })

      const datas = [
        {
          "name": "CAD",
          "exchange_rate": res.CAD
        },
        {
          "name": "IDR",
          "exchange_rate": res.IDR
        },
        {
          "name": "JPY",
          "exchange_rate": res.JPY
        },
        {
          "name": "CHF",
          "exchange_rate": res.CHF
        },
        {
          "name": "EUR",
          "exchange_rate": res.EUR
        },
        {
          "name": "GBP",
          "exchange_rate": res.GBP
        },
      ]

      const result = datas.map((val, index) => {
        return (
          {
            ...datas[index],
            we_buy: weBuy(val.exchange_rate),
            we_sell: weSell(val.exchange_rate)
          }
        );
      });
      setData(result);
    }
    fetchData();
  }, [])

  //CAD, IDR, JPY, CHF, EUR, GBP
  return (
    <div className="container">
      {data ? <Table datas={data} /> : 'Empty Content'}
    </div>
  )
}

export default Home;