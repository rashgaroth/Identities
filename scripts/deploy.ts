import { ethers, run } from "hardhat";

interface IDeployedContracts {
  address: string
  arg: any[]
}

async function awaitVerifyingContracts(deployedContracts: IDeployedContracts[]): Promise<any[]> {
  const promiseArray = []
  for (let i = 0; i < deployedContracts.length; i++) {
    promiseArray.push(
      await run('verify:verify', {
        address: deployedContracts[i].address,
        constructorArguments: deployedContracts[i].arg
      })
    )
  }
  const result = await Promise.all(promiseArray)
  return result
}

async function main() {
  const deployedContracts: IDeployedContracts[] = []
  console.info('Deploying claimVerifier \n')
  const ClaimVerifier = await ethers.getContractFactory("Claim")
  const deployedClaim = await ClaimVerifier.deploy()
  await deployedClaim.deployed()
  deployedContracts.push({
    address: deployedClaim.address,
    arg: []
  })

  // console.info('Deploying identity \n')
  // const Identity = await ethers.getContractFactory("Identity")
  // const deployedIdentity = await Identity.deploy()
  // await deployedIdentity.deployed()
  // deployedContracts.push({
  //   address: deployedIdentity.address,
  //   arg: []
  // })

  console.info('Deploying identitiesNFT \n')
  const IdentitiesNFT = await ethers.getContractFactory("IdentitiesNFT")
  const deployedIdentitiesNFT = await IdentitiesNFT.deploy(deployedClaim.address, "IDNNFT", "IDN")
  await deployedIdentitiesNFT.deployed()
  deployedContracts.push({
    address: deployedIdentitiesNFT.address,
    arg: [deployedClaim.address, "IDNNFT", "IDN"]
  })

  console.log(`Claim Verifier Address: \n ${deployedClaim.address}`)
  // console.log(`Identity Address: \n ${deployedIdentity.address}`)
  console.log(`IdentitiesNFT Address: \n ${deployedIdentitiesNFT.address}`)

  console.log('Verifying all contracts')
  const ver = await awaitVerifyingContracts(deployedContracts)
  console.log(`Verify result: \n ${ver}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
