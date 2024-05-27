const { ethers } =  require('ethers')

async function main() {

    // deploy contract
    const StorageFactory = await ethers.getContractFactory("Storage")
    // console.log("Deploying contract...")
    // const Storage = await StorageFactory.deploy()
  
    // await simpleStorage.deployed()
    // console.log(`Deployed contract to: ${simpleStorage.address}`)

    // verify contract 

    //interact with the contract

}

main()