import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Composition Tests', () => { 
  async function setUpContracts() {
    // Signer
    const [ dwi, geraldine, frally, _ ] = await ethers.getSigners()

    console.log(
    {
      dwi: dwi.address,
      geraldine: geraldine.address,
      frally: frally.address
    },
      '@Signers ...'
    )

    // ClaimVerifier. deployer: dwi
    const ClaimVerifier = await ethers.getContractFactory("Claim")
    const claimVerifier = await ClaimVerifier.deploy()
    await claimVerifier.deployed()

    // Identity. deployer: geraldine
    const Identity = await ethers.getContractFactory("Identity")
    const identity = await Identity.connect(geraldine).deploy()
    await identity.deployed()

    const fundingTx = await geraldine.sendTransaction({ value: ethers.utils.parseEther("5000"), to: identity.address })
    await fundingTx.wait()

    // Identities NFT. deployer: dwi
    const IdentitiesNFT = await ethers.getContractFactory("IdentitiesNFT")
    const idn = await IdentitiesNFT.deploy(claimVerifier.address, "IDentity", "IDN")
    await idn.deployed()

    return { claimVerifier, identity, idn, dwi, geraldine, frally, _ }
  }
  describe('Deployment', () => { 
    it('Should deploy all contracts', async () => {
      const { claimVerifier, idn, identity  } = await loadFixture(setUpContracts)
      expect(await idn.claimVerifier()).to.equal(claimVerifier.address)

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })
  })
  describe('IDN Minting via Identity [claim]', () => { 
    it('Should be able to mint', async () => {
      const { identity, idn, dwi, geraldine, frally, _ } = await loadFixture(setUpContracts)
      // create claimdata that will be verified with claimverify (Claim.sol)
      const claimData = {
        identifier: "nft_mint_allowed",
        from: dwi.address,
        to: identity.address,
        data: ethers.utils.formatBytes32String(""),
      };
      const claimDataHash = ethers.utils.solidityKeccak256(
        ["string", "address", "address", "bytes"],
        [claimData.identifier, claimData.from, claimData.to, claimData.data]
      )
      const signedClaimDataHash = await dwi.signMessage(ethers.utils.arrayify(claimDataHash))

      await identity.connect(geraldine).addClaim({ ...claimData, signature: signedClaimDataHash })
      await identity.connect(geraldine).addAdditionalOwner(frally.address)

      const mintSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10)

      await identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintSignatureHash)
      await identity.connect(frally).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintSignatureHash)

      expect(await idn.balanceOf(identity.address)).to.equal(Number(2))
      expect(await idn.ownerOf(0)).to.equal(identity.address)
      expect(await idn.ownerOf(1)).to.equal(identity.address)

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })  

    it('should fail when trying to mint without having respective claim', async function () {
      const { identity, idn, geraldine } = await loadFixture(setUpContracts);

      const mintFunctionSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10);
      await expect(identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintFunctionSignatureHash)).to.revertedWith("Identity has no 'nft_mint_allowed' claim stored")

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })

    it('Should fail when trying to mint without having claim [from]', async () => {
      const { identity, idn, frally, geraldine } = await loadFixture(setUpContracts)
      const claimData = {
        identifier: "nft_mint_allowed",
        from: frally.address,
        to: identity.address,
        data: ethers.utils.formatBytes32String(""),
      };
      const claimDataHash = ethers.utils.solidityKeccak256(["string", "address", "address", "bytes"], [claimData.identifier, claimData.from, claimData.to, claimData.data])
      const signedClaimDataHash = await frally.signMessage(ethers.utils.arrayify(claimDataHash))

      await identity.connect(geraldine).addClaim({ ...claimData, signature: signedClaimDataHash })
      await identity.connect(geraldine).addAdditionalOwner(frally.address)

      const mintSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10)
      await expect(identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintSignatureHash)).to.revertedWith('Not owner of ClaimVerifier signed the claim')

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })

    it('should fail when trying to mint without having valid claim [to]', async () => {
      const { identity, idn, dwi, geraldine, frally, _ } = await loadFixture(setUpContracts)
      const claimData = {
        identifier: "nft_mint_allowed",
        from: dwi.address,
        to: frally.address,
        data: ethers.utils.formatBytes32String(""),
      }
      const claimDataHash = ethers.utils.solidityKeccak256(["string", "address", "address", "bytes"], [claimData.identifier, claimData.from, claimData.to, claimData.data])
      const signedClaimDataHash = await dwi.signMessage(ethers.utils.arrayify(claimDataHash))

      await identity.connect(geraldine).addClaim({ ...claimData, signature: signedClaimDataHash })
      await identity.connect(geraldine).addAdditionalOwner(frally.address)

      const mintSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10)
      await expect(identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintSignatureHash)).to.revertedWith('Wrong claim receiver')

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })

    it('should fail when trying to mint without having valid claim [signer]', async () => {
      const { identity, idn, dwi, geraldine, frally, _ } = await loadFixture(setUpContracts)
      const claimData = {
        identifier: "nft_mint_allowed",
        from: dwi.address,
        to: identity.address,
        data: ethers.utils.formatBytes32String(""),
      }
      const claimDataHash = ethers.utils.solidityKeccak256(["string", "address", "address", "bytes"], [claimData.identifier, claimData.from, claimData.to, claimData.data])
      const signedClaimDataHash = await geraldine.signMessage(ethers.utils.arrayify(claimDataHash))

      await identity.connect(geraldine).addClaim({ ...claimData, signature: signedClaimDataHash })
      await identity.connect(geraldine).addAdditionalOwner(frally.address)

      const mintSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10)
      await expect(identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.1"), mintSignatureHash)).to.revertedWith('Claim not valid')

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })

    it('should fail when trying to mint when sending to less ether', async () => {
      const { identity, idn, geraldine } = await loadFixture(setUpContracts)
      const mintSignatureHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("safeMint()")).substring(0, 10)
      await expect(identity.connect(geraldine).execute(0, idn.address, ethers.utils.parseEther("0.01"), mintSignatureHash)).to.revertedWith('Balance not enough')

      console.log('\n')
      console.log('\n')
      console.log('\n')
    })
  })
  describe('Identity Factory [deploy]', () => { 
   it('should deploy an identity contract for the user', async () => {
    const [geraldine] = await ethers.getSigners()

    const IdentityFactory = await ethers.getContractFactory("IdentityFactory")
    const deployedIdentityFactory = await IdentityFactory.deploy()

    const geraldineWillDeploy = await deployedIdentityFactory.connect(geraldine).deployIdentity()
    const txResult = await geraldineWillDeploy.wait()

    // @ts-ignore
    const geraldineIdentityContractAddress = txResult?.events[1].args[0]

    const Identity = await ethers.getContractFactory("Identity")
    const identity = await Identity.attach(geraldineIdentityContractAddress)

    expect(await identity.owner()).to.equal(geraldine.address)

    console.log('\n')
    console.log('\n')
    console.log('\n')
   }) 
  })
})