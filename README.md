# Codes
A Link QR Code generator app made with Angular and C#<br>
The app supports two languages (Brazilian Portuguese and American English) 

# How it works
The app has 3 screens, the main screen, the new screen and the codes screen.

## Main Screen
The Main screen shows the User some information (like current time, the number of saved qr codes, etc) on the center, and on the right side it shows a switch (which you can use to change the app's language) and two buttons, the top button will send the User to the new screen, and the bottom one will send the User to the codes screen.

## New Screen
The New screen has two inputs and two buttons. In the top input the User has to fill it with a link which is going to turn into a QR Code image, and in the bottom one the User has to fill it with a description.
Clicking the left side button will create the QR Code, and clicking the right side button will return the User to the Main screen.

## Codes Screen
The Codes screen shows all the QR Codes the User made already.
 <br>

# After cloning the project you must follow some steps:

## Step 1 - Back Folder, Back-End Project
To execute the project run ``dotnet watch run`` command.

## Step 2 - Front Folder, Front-End Project
Firstly, you need to install ``node_modules`` files to execute the project, to do this run ``npm install`` command. <br>
After this you can run ``npm start`` command, and the app should work (make sure you are running the back-end project).
