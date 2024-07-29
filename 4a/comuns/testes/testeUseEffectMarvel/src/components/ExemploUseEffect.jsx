import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExemploUseEffect() {
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    const buscarPersonagemAleatorio = async () => {
      try {
        const personagemAleatorio = Math.floor(Math.random() * 100) + 1;
        const response = await axios.get(`https://api.marvel.com/characters/${personagemAleatorio}`);
        setPersonagem(response.data);
      } catch (error) {
        console.error('Erro ao buscar personagem:', error);
      }
    };

    buscarPersonagemAleatorio();
  }, []);

  return (
    <div>
      {personagem ? (
        <div>
          <h2>{personagem.name}</h2>
          <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt={personagem.name} />
          <p>{personagem.description}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ExemploUseEffect;

