import { run } from "hardhat"

async function verify() {
  await run('verify:verify', {
    address: '0x1a850fDE63D15BD50853Bae25919bAC1833c5B3B',
    constructorArguments: []
  })
  // await run('verify:verify', {
  //   address: '0x5972D30F88e8e1f45772870c73bFC4348994652d',
  //   constructorArguments: ['0xD3502e145989826B538CCC8AD779C860Ce20449A', "IDNNFT", "IDN"]
  // })
}

verify().catch(console.error)