<p align="center">
    <img alt="CodesLogo" src="front/src/assets/icon.png" />
</p>

<h2 align="center">
  Codes
</h2>

<p align="center">
  <a href="README.pt.md">Português</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">English</a>
</p>

<p align="center">
  <br>
  Gerador de QR Codes de Links feito com Angular e C#.<br>
  O programa suporta dois idiomas (Português Brasileiro e Inglês Americano)
</p>
<br><br><br>

# Como Funciona
The app has 3 screens, the main screen, the new screen and the codes screen.

## Tela "Main"
A tela "Main" mostra ao usuário algumas informações (como hora atual, número de qr codes salvos, etc) no centro, e ao lado direito mostra um "switch" (que o usuário pode usar para mudar o idioma do programa) e dois botões, o botão de cima vai levar o usuário para a tela "new", e o botão de baixo vai levar o usuário para a tela "codes".                                                                                            


## Tela "New"
The new screen has two inputs and two buttons. The User has to fill the top input with a link which is going to turn into a QR Code image, and the bottom input with a description.
Clicking the left side button will create the QR Code, and clicking the right side button will return the User to the main screen, canceling its creation.

## Tela "Codes"
The codes screen shows all the QR Codes the User made already and a button which returns the User to the main screen.
<br><br><br>

# After cloning the project you must follow some steps:

## Step 1 - Back Folder, Back-End Project
To execute the project run the ``dotnet watch run`` command.

## Step 2 - Front Folder, Front-End Project
Firstly, you need to install ``node_modules`` files to execute the project, to do this run the ``npm install`` command. <br>
After this you can run the ``npm start`` command, and the app should open (make sure you are running the back-end project).
