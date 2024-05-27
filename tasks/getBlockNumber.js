const { task } = require('hardhat/config')

task('block-number', 'gets the current block number from blockchain', async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()
    console.log(`block number: ${blockNumber}`)
})
