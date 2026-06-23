// Edite a data/hora abaixo para o momento real da abertura da exposição
const INICIO = new Date('2026-06-22T12:00:00');

const TAXA_BEBES = 0.077;
const TAXA_AGUA = 0.0017;
const TAXA_ANIMAIS = 0.027;
const TAXA_RECICLADO = 0.2124;

function pad2(n) {
  return String(n).padStart(2, '0');
}

function atualizar() {
  const agora = new Date();
  const diffMs = agora - INICIO;
  const segundosTotais = Math.max(0, Math.floor(diffMs / 1000));

  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById('val-dias').textContent = pad2(dias);
  document.getElementById('val-horas').textContent = pad2(horas);
  document.getElementById('val-minutos').textContent = pad2(minutos);
  document.getElementById('val-segundos').textContent = pad2(segundos);

  const bebes = Math.floor(segundosTotais * TAXA_BEBES);
  const agua = Math.floor(segundosTotais * TAXA_AGUA);
  const animais = Math.floor(segundosTotais * TAXA_ANIMAIS);
  const reciclado = Math.floor(segundosTotais * TAXA_RECICLADO);

  document.getElementById('val-bebes').textContent = bebes.toLocaleString('pt-BR');
  document.getElementById('val-agua').textContent = agua.toLocaleString('pt-BR');
  document.getElementById('val-animais').textContent = animais.toLocaleString('pt-BR');
  document.getElementById('val-reciclado').textContent = reciclado.toLocaleString('pt-BR');
}

atualizar();
setInterval(atualizar, 1000);
