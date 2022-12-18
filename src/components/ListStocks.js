import Stocks from "./Stocks";
export default function ListStocks({name, symbol , change, lastPrice}){
    return<Stocks name={name}symbol={symbol} lastPrice={lastPrice} change={change} />
}