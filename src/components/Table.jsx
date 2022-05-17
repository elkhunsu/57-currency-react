

export default function Table(props) {
  const { datas } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((val, idx) => {
              return (
                <tr key={idx}>
                  <td>{val.name}</td>
                  <td>{val.we_buy.toFixed(4)}</td>
                  <td>{val.exchange_rate}</td>
                  <td>{val.we_sell.toFixed(4)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>

  );
}