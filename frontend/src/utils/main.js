import web3 from './web3'
import main from '../contracts/Main.json'

const mainInstance = new web3.eth.Contract(
  main.abi,
  '0xCf8deDC60957130dB62a410147f00b9AE0103074'
  // process.env.CONTRACT_ADDRESS,
)

export default mainInstance
