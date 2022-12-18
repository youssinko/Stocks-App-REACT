import { Link } from "react-router-dom"
export default function Stocks(props) {

    return (
        <div>
            <table>
                <tr>
                    <Link to={`/stocks/${props.symbol}`}>
                        <td>{props.name} &nbsp; {props.symbol}</td>
                    </Link>

                    <td>{props.lastPrice}</td>
                    {props.change >= 0 ?
                        <td style={{ color: 'green' }}>{props.change}</td> : <td style={{ color: 'red' }}>
                            {props.change} </td>}
                </tr>
            </table>
        </div>

    )
}