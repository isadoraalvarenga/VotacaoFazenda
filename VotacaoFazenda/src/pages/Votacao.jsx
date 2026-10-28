import { useState } from 'react';
import { registrarVoto } from '../services/votacaoService';

const [ultimoVoto, setUltimoVoto] = useState(null);
const [votosNaSessao, setVotosNaSessao] = useState(0);

function handleVotar(participante) {
    registrarVoto(participante.id);
    //atualizar os estados
}