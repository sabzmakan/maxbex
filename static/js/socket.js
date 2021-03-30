import Binance from "binance-api-node";
// var self = this;
 var dep=1
 const client = Binance();
client.ws.depth('ETHBTC', depth => {
  //dep=depth
  console.log(depth)
})
export default {
    data(){
        return {
            dep1:dep
        }
    }
}
