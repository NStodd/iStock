import { useParams } from "react-router-dom"
import stocks from "../stock-data"

function Stock (props) {
    const symbol = useParams()
    
    for (let i = 0; i < stocks.length; i+=1) {
        if (stocks[i].symbol === symbol.id) {
             return (
                 <div>
                     <h1>Stock Name: {stocks[i].name}</h1>
                     <h2>Stock Symbol: {stocks[i].symbol}</h2>
                     <h3>Stock Price: {stocks[i]. lastPrice}</h3>
                 </div>
            )
        }
    }
    return (
        <h1>Stock Not Found in Data</h1>
    )
}

export default Stock