import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Crypto Snaker',
    description:
      'A Play to Earn web3 snake game where players survive as long as possible with snake bots to earn tokens. Multiplayer mode is planned for the future.',
    image: '../../../public/crypto_snaker.png',
    tags: [
      'unity3D',
      'solidity',
      'web3.js',
      'webgl',
      'play to earn',
      'binance smart chain',
    ],
    demo: 'https://snake.difines.io/',
  },
  {
    title: 'Album App',
    description:
      'A social platform where users sign up via OTP, post images, make friends, and integrate with other social platforms. The app allows users to upload and edit images using the Uploadcare widget and displays the address book of the mobile.',
    image: '../../../public/album_app.png',
    tags: ['ionic', 'angular', 'node.js', 'express.js', 'postgresql', 'scss'],
  },
  {
    title: 'Facial Recognize',
    description:
      'A face detection project using face-api.js, integrated with React. The project supports multi-face recognition and can recognize faces using the camera.',
    image: '../../../facial_recognization.png',
    tags: ['react.js', 'face-api.js', 'restful-api', 'integration'],
  },
  {
    title: 'Clinical Chart (Alarta)',
    description:
      "A clinical records platform 'Alarta' designed for the Health and Life Sciences sector. It is a cloud-based critical care medical record system that auto-configures via HL7 within a few hours, offering cost-effective solutions.",
    image: '../../../clinical_chart.png',
    tags: ['chatGPT', 'react.js', 'node.js', 'express.js'],
    demo: 'https://incarta.com.au/',
  },
  {
    title: 'Partner',
    description:
      "A project where the backend was created using OpenAI's API with node.js and express.js. The backend was made serverless to run on Netlify, and the React.js frontend was integrated with the backend.",
    image: '../../../partner.png',
    tags: ['chatGPT', 'react.js', 'node.js', 'express.js'],
    demo: 'https://partner.difines.io/',
  },
  {
    title: 'Bettor',
    description:
      'A post-to-earn Web3 project where users can post, edit, delete, and buy articles. The project integrates wallet connect with Coinbase, MetaMask, and uses the nft.storage SDK to save metadata.',
    image: '../../../bettor.png',
    tags: [
      'react.js',
      'typescript',
      'web3.js',
      'solidity',
      'binance smart chain',
    ],
    demo: 'https://bettor.pepesushi.vip/create',
  },
  {
    title: 'Token Faucet Platform',
    description:
      'An ERC20 token faucet platform with support for Binance Smart Chain testnet. Time limitation is implemented to manage the faucet usage.',
    image: '../../../token_faucet.png',
    tags: [
      'react.js',
      'typescript',
      'scss',
      'web3.js',
      'solidity',
      'hardhat',
      'token',
      'binance smart chain',
    ],
  },
  {
    title: 'PEPE Brother',
    description:
      'A blockchain project with two tokens, PEPEP and PEPEG. Users can burn one token and receive an equal amount of another token. The project features a Pepe police and Pepe gang story.',
    image: '../../../pepe_brother.png',
    tags: [
      'react.js',
      'typescript',
      'scss',
      'ethers.js',
      'wallet connect',
      'metamask',
      'coinbase',
      'solidity',
      'hardhat',
      'token',
      'binance smart chain',
    ],
  },
  {
    title: 'Crypto Website',
    description:
      'Website theme development focused on the future of algorithmic crypto trading strategies. The theme includes various sections and a modern layout with a crypto-oriented aesthetic.',
    image: '../../../crypto_website.png',
    tags: ['react', 'html5', 'scss', 'javascript', 'css3'],
    demo: 'https://crypto-aura-theme.netlify.app/',
  },
  {
    title: 'Aura',
    description: 'Fashion website',
    image: '../../../aura.png',
    tags: ['react', 'html5', 'scss', 'javascript', 'css3'],
    demo: 'https://aura-fashion-theme.netlify.app/',
  },
  {
    title: 'DEX Orderbook',
    description:
      'A decentralized exchange (DEX) orderbook platform that supports various meme tokens, including PEPE BeP20, PEPE Sushi, PEPE MSG, and more than 11 tokens. It also features TradinView integration.',
    image: '../../../dex_orderbook.png',
    tags: [
      'react.js',
      'typescript',
      'scss',
      'web3.js',
      'wallet connect',
      'metamask',
      'coinbase',
      'solidity',
      'hardhat',
      'binance smart chain',
    ],
    demo: 'https://orderbook.pepesushi.vip/trade',
  },
  {
    title: 'DFS Scan',
    description:
      'DFS Scan is a tool that allows you to scan the DFS network for transactions and blocks. It provides a user-friendly interface to explore blockchain data including transaction history, wallet balances, smart contract interactions, and real-time network statistics.',
    image: '../../../dfs_scan.png',
    tags: [
      'next.js',
      'typescript',
      'tailwind',
      'firebase',
      'dfs chain',
      'difines',
      'web2',
    ],
    demo: 'https://dfs-scan.netlify.app/',
  },
  {
    title: 'Ikonick',
    description:
      'Developed the Ikonick company website as a Software Engineer, handling both frontend and backend development. Built a high-performance e-commerce platform with a seamless user experience, efficient backend architecture, and optimized workflows to support product management, transactions, and scalability.',
    image: '../../../ikonick.png',
    tags: ['React', 'MongoDB', 'css', 'SEO'],
    demo: 'https://ikonick.com/',
  },
  {
    title: 'BlackRock',
    description:
      'Developed the backend architecture for the BlackRock website, ensuring a secure, efficient, and scalable system to handle financial data, investment tools, and user interactions. My role included designing robust APIs, managing databases, and optimizing performance to support seamless real-time data processing and secure transactions.',
    image: '../../../blackrock.png',
    tags: [
      'Node.js',
      'ExpressJS',
      'MongoDB',
      'REST API',
      'Performance Optimization',
    ],
  },
  {
    title: 'micron',
    description: `I was responsible for developing the front-end of the Micron website, ensuring a seamless, modern, and high-performance user experience. The website showcases Micron's cutting-edge memory and storage solutions, AI-driven data center innovations, and corporate branding while maintaining a sleek and interactive design.`,
    image: '../../../micron.png',
    tags: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Responsive Design',
      'Performance Optimization',
    ],
    demo: 'https://www.micron.com/',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🧬 AI mesh background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-700/5 to-black blur-2xl opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Terminal-style header */}
        <motion.h2
          className="text-3xl md:text-4xl font-mono text-blue-400 text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &gt; Fetching projects...
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Systems. Tools. Engines. Secure cloud-native solutions engineered for
          scale, clarity, and performance.
        </p>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-blue-700 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-blue-400/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 text-xs font-mono px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white transition"
                    >
                      <FaGithub className="inline-block mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white transition"
                    >
                      <FaExternalLinkAlt className="inline-block mr-1" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
