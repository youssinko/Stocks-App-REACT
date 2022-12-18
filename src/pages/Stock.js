import stocks from "../data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Stock(props) {
    const [info, setInfo] = useState(null)
    const { symbol } = useParams()
    const getInfo = async () => {
        try {
            const Data = stocks.find(singleStock => singleStock.symbol === symbol)
            setInfo(Data)
        
        }catch(error) {
        console.log(error)
    }
}
useEffect(()=>{
    getInfo()},[]
)
const loaded = ()=>{
return (
    <>
        <h1>{info.name} Stock</h1>
        <h2>NAME: {info.name}</h2>
        <h2>SYMBOL: {info.symbol}</h2>
        <h2>LAST PRICE: {info.lastPrice}</h2>
        <h2>CHANGE: {info.change}</h2>
        <h2>HIGH: {info.high}</h2>
        <h2>LOW: {info.low}</h2>
        <h2>OPEN: {info.open}</h2>
        
    </>
)
}

const loading = () => {
    return <h2>Loading Info ...</h2>
}
return (
    info ? loaded() : loading()
)
}