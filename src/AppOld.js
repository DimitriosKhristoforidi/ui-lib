import { useState, useEffect } from "react";
import { Heading } from "./components/Heading";
import { Accordion } from "./components/Accordion";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Tooltip } from "./components/Tooltip";
import { Button } from "./components/Button";

function AppOld() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = () => {
    setLoading(true);
    fetch(`https://api.coinlore.net/api/tickers/`).then((response) => {
      response
        .json()
        .then((data) => {
          setCoins(data.data);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "800px",
      }}
    >
      <Heading level={1}>Cryptocurrency Prices </Heading>
      <br />
      <Button onClick={getCoins} variant="bordered" size="sm">
        Update
      </Button>
      <br />
      <br />
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <br />
            {filteredCoins.map((coin) => (
              <Accordion key={coin.id} title={coin.name}>
                <Typography>
                  <strong>Symbol:</strong> {coin.symbol}
                </Typography>
                <Typography>
                  <strong>Price USD:</strong> {coin.price_usd}
                </Typography>
                <Typography>
                  <strong>Price BTC:</strong> {coin.price_btc}
                </Typography>
                <Typography>
                  <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
                    <strong>Market Cap USD:</strong>
                  </Tooltip>{" "}
                  {coin.market_cap_usd}
                </Typography>
                <Typography>
                  <strong>Percent Change 24H:</strong>{" "}
                  <span
                    style={{
                      color: coin.percent_change_24h < 0 ? "red" : "green",
                    }}
                  >
                    {coin.percent_change_24h}%
                  </span>
                </Typography>
              </Accordion>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default AppOld;
