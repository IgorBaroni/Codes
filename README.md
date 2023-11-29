<p align="center">
    <img alt="CodesLogo" src="front/src/assets/icon.png" />
</p>

<h2 align="center">
  Codes
</h2>

<p align="center">
  <a href="README.md">Português</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.en.md">English</a>
</p>

<p align="center">
  <br>
  Gerador de QR Codes de Links feito com Angular e C#.<br>
  O programa suporta dois idiomas (Português Brasileiro e Inglês Americano)
</p>
<br><br><br>

# Como Funciona
O programa tem 3 telas, a tela "main", a tela "new" e a tela "codes".

## Tela "Main"
A tela "main" mostra ao usuário algumas informações (como hora atual, número de qr codes salvos, etc) no centro, e ao lado direito mostra um "switch" (que o usuário pode usar para mudar o idioma do programa) e dois botões, o botão de cima vai levar o usuário à tela "new", e o botão de baixo vai levar o usuário à tela "codes".                 

## Tela "New"
A tela "new" tem dois campos de escrita e dois botões. O usuário tem que preencher o campo de escrita de cima com um link (que vai se tornar uma imagem do QR Code) e o campo de escrita de baixo com uma descrição.
Clicar no botão da esquerda faz com que o QR Code seja criado, e clicar no botão da direita faz com que o usuário retorne à tela "main", cancelando a operação. 

## Tela "Codes"
A tela "codes" mostra todos os QR Codes que o usuário já criou e um botão que retorna o usuário à tela "main".
<br><br><br>

# Após clonar o repositório você deve seguir alguns passos:

## Passo 1 - Pasta back, projeto Back-End
Para executar o projeto rode o comando ``dotnet watch run``.

## Passo 2 - Pasta front, projeto Front-End
Primeiramente, você precisa instalar os arquivos do ``node_modules`` para executar o projeto, para fazer isso rode o comando ``npm install``. <br>
Depois disso você pode rodar o comando ``npm start``, e o programa deve abrir (certifique-se de estar rodando o projeto back-end).
