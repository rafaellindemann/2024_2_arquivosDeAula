import './App.css'
import Produto from './components/Produto'
import Titulo from './components/Titulo'
function App() {
  const produtos = [
    {
      id: Date.now(),
      nome: "Toalha de Praia",
      descricao: "Toalha grande e absorvente, ideal para se secar após um mergulho.",
      preco: 49.99,
      peso: 0.6
    },
    {
      id: Date.now() + 1,
      nome: "Protetor Solar FPS 50",
      descricao: "Proteção alta contra os raios UV, ideal para peles sensíveis.",
      preco: 29.90,
      peso: 0.2
    },
    {
      id: Date.now() + 2,
      nome: "Chapéu de Sol",
      descricao: "Chapéu com aba larga para proteger o rosto e pescoço do sol.",
      preco: 39.90,
      peso: 0.3
    },
    {
      id: Date.now() + 3,
      nome: "Óculos de Sol",
      descricao: "Óculos com proteção UV, estilo moderno e confortável.",
      preco: 89.90,
      peso: 0.1
    },
    {
      id: Date.now() + 4,
      nome: "Sunga Masculina",
      descricao: "Sunga com design moderno e confortável para a prática de esportes aquáticos.",
      preco: 34.90,
      peso: 0.2
    },
    {
      id: Date.now() + 5,
      nome: "Maiô Feminino",
      descricao: "Maiô com estampas coloridas e tecido resistente à água do mar.",
      preco: 59.90,
      peso: 0.3
    },
    {
      id: Date.now() + 6,
      nome: "Bolsa de Praia",
      descricao: "Bolsa espaçosa com compartimentos para levar tudo o que você precisa para a praia.",
      preco: 79.90,
      peso: 0.5
    },
    {
      id: Date.now() + 7,
      nome: "Sandálias de Praia",
      descricao: "Sandálias leves e antiderrapantes, ideais para caminhar na areia.",
      preco: 29.90,
      peso: 0.4
    },
    {
      id: Date.now() + 8,
      nome: "Cadeira de Praia",
      descricao: "Cadeira dobrável e confortável, com suporte para copo e encosto ajustável.",
      preco: 129.90,
      peso: 2.0
    },
    {
      id: Date.now() + 9,
      nome: "Guarda-sol",
      descricao: "Guarda-sol com estrutura resistente e tecido de proteção solar.",
      preco: 99.90,
      peso: 1.5
    },
    {
      id: Date.now() + 10,
      nome: "Bolha de Areia",
      descricao: "Bolha inflável para relaxar na água, confortável e fácil de transportar.",
      preco: 59.90,
      peso: 0.8
    },
    {
      id: Date.now() + 11,
      nome: "Esteira de Praia",
      descricao: "Esteira acolchoada para maior conforto ao sentar na areia.",
      preco: 44.90,
      peso: 0.7
    },
    {
      id: Date.now() + 12,
      nome: "Kit de Snorkel",
      descricao: "Máscara e snorkel de alta qualidade para explorar o fundo do mar.",
      preco: 119.90,
      peso: 0.6
    },
    {
      id: Date.now() + 13,
      nome: "Bolsa Térmica",
      descricao: "Bolsa térmica para manter suas bebidas e lanches frescos durante o dia na praia.",
      preco: 69.90,
      peso: 0.8
    },
    {
      id: Date.now() + 14,
      nome: "Raquete de Frescobol",
      descricao: "Raquete de frescobol em madeira com design ergonômico e resistente.",
      preco: 49.90,
      peso: 0.5
    },
    {
      id: Date.now() + 15,
      nome: "Protetor Labial com FPS 30",
      descricao: "Protetor labial para evitar rachaduras e queimaduras solares nos lábios.",
      preco: 14.90,
      peso: 0.05
    },
    {
      id: Date.now() + 16,
      nome: "Rede de Descanso",
      descricao: "Rede confortável e resistente, ideal para relaxar na sombra.",
      preco: 89.90,
      peso: 1.0
    },
    {
      id: Date.now() + 17,
      nome: "Capa de Chuva para Praia",
      descricao: "Capa leve e impermeável para proteção contra chuvas inesperadas.",
      preco: 39.90,
      peso: 0.2
    },
    {
      id: Date.now() + 18,
      nome: "Spray Antisséptico",
      descricao: "Spray antisséptico para desinfetar as mãos e pequenos ferimentos.",
      preco: 19.90,
      peso: 0.1
    },
    {
      id: Date.now() + 19,
      nome: "Mochila de Praia",
      descricao: "Mochila resistente à água com vários compartimentos para facilitar o transporte.",
      preco: 89.90,
      peso: 0.9
    }
  ];
  

  let produto = {
    nome: "Cadeira de praia",
    descricao: "Uma cadeira pra usar no canal",
    preco: 33,
    peso: 10
  }
  return (
    <>
      <Titulo texto={"Barra da Lagoa"} emoji={"😎"}/>
      <Produto produto={produto} />
    </>
  )
}
export default App
