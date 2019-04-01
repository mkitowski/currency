
const url = "http://api.nbp.pl/api/exchangerates/rates/c/USD";


export class GetData {
    simulateChanges(el) {
        console.log(el)
    }
    getUSD() {
        fetch(url).then(res=>{
           return res.json()
        }).then(data =>{
            const cur = data.rates[0];
            this.simulateChanges(cur)
        })
    }

}