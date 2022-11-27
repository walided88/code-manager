# About code-manager

This is a module in NodeJS that helps to manage your files. 
By using the 'setAll' method, you can select a part of your code by entering the file name, the line number of the beginning and the line number of the end, as well as an identifier of your choice for the code to select.
The latter is optional; if you do not choose an identifier, one will be added automatically.
With the 'displayIds' method, you can display all the identifiers of your saved codes to retrieve the codes you need later.
To retrieve your code, you must call the 'displayCodes' method. This requires two parameters: a parameter for the file in which you want to put your code, and the second parameter is the identifier of the saved code.
If you do not choose an import file, your code with the name of the entered identifier will be displayed in the terminal.
An "ARCHIVE.txt" file should be created automatically from the first execution.. The "ARCHIVE.txt" file will be accessible to you if you prefer to recover all your codes manually.
