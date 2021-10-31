import web3 from './web3'
import distributor from '../build/contracts/Distributor.json'

const getInstance = (address) => {
  const DistributorInstance = new web3.eth.Contract(distributor.abi, address)
  return DistributorInstance
}

export default getInstance
