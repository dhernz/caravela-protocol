const hre = require("hardhat");

async function main() {
    const TwitterFactory = await hre.ethers.getContractFactory("Twitter");
    const twitter = await TwitterFactory.deploy();
    console.log("Twitter deployed to:", twitter.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
