interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: "LeftOverLove",
    description: "The Food Donation Platform is a web application designed to tackle food waste by creating an efficient, user-friendly system that connects food donors with individuals and organizations in need",
    tech: ["Next.js", "TypeScript", "React", "Node", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/cryptonix21/LeftOverLove",
    live: "https://leftoverlove.xyz"
  },
  {
    title: "PixelBlockscan",
    description: "PixelBlockscan is a blockchain explorer cloned from Blockscout an open-source blockchain explorer. It provides users with a comprehensive interface to explore, search, and analyze transactions, blocks, and smart contract interactions.",
    tech: ["Next.js", "TypeScript", "React", "Docker", "Tailwind CSS"],
    github: "https://github.com/blockscout/blockscout",
    live: "https://scan.pixelsoftwares.com/"
  },
  {
    title: "NFT Marketplace",
    description: "A marketplace for creating, buying, and selling NFTs with support for multiple collections on Ethereum.",
    tech: ["Next.js", "TypeScript", "IPFS", "Smart Contracts"],
    github: "",
    live: ""
  },
  {
    title: "Oboswap-Decentralized Exchange",
    description: "A decentralized exchange (DEX) for trading tokens on the Ethereum, Binance Smart Chain, and Polygon blockchains.",
    tech: ["React", "Web3.js", "Solidity", "Typescript", "TheGraph","Uniswap"],
    github: "https://github.com/oboswap",
    live: "https://oboswap.com/"
  },
  {
    title: "QToken",
    description: "Qtoken ERC20 standard developed for the qoneqt socialmedia platform",
    tech: [ "Solidity", "Etherscan"],
    github: "https://github.com/qoneqt/Qtoken/tree/main",
    live: "https://qoneqt.com/home"
  },
  {
    title: "QoneqtTokenGenerator",
    description: "QoneqtTokenGenerator is a tool for generating ERC20 tokens for the qoneqt socialmedia platform community",
    tech: ["Solidity", "React" , "Javascript"],
    github: "https://github.com/qoneqt/Qtoken/tree/main",
    live: "https://qoneqt.com/home"
  }
];
