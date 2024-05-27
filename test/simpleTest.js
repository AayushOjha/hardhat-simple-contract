const { assert } = require("chai");
const hre = require("hardhat");

describe("simple test", function (){
    let storage
    
    this.beforeAll(async function() {
        storage = await hre.ethers.deployContract('Simple') 
    })

    it("initial store value should be zero", async function() {
        const currentValue = await storage.retrieve()
        const expected = "0"
        assert.equal(currentValue.toString(), expected)       
    })

    it("value should be updated", async function() {
        const value = "5"
        const tnxRes = await storage.store(value)
        await tnxRes.wait(1)

        const currentValue = await storage.retrieve()
        assert.equal(currentValue.toString(), value)
    })
})