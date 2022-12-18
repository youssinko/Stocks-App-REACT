import stocks from "../data"
import ListStocks from "../components/ListStocks"
const allStocks = stocks.map((ele,index)=>{
    return(
    < ListStocks key={index}{...ele} />
   
    )
})
export default function Dashboard(props){
    
    return(
        <>
          <h1>Most Active Stocks</h1>
          <table>
            <tr>
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
          </tr>
          </table>

          <section>
          {allStocks}
          </section>
       </>
    )
}