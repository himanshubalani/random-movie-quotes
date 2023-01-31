# random-movie-quotes
My first attempt at making a Express.js project. It'll search through quotes and pick a random one to show you

## Screenshots
![image](https://user-images.githubusercontent.com/85930567/215740849-286ab876-e70f-4f27-a8cb-2294a0665baa.png)
![image](https://user-images.githubusercontent.com/85930567/215740861-a7392a0b-bd27-43b7-aa05-a72e40459ce6.png)
![image](https://user-images.githubusercontent.com/85930567/215740871-3e66ff0d-5dd5-47ca-854e-a8d8905b1a58.png)


## Installation
1. install [Node.js](https://nodejs.org/en/download/)
2. Set up express
```
npm install express
```
3. then make a new node project
```
npm init
```
After the setup you should have one directory node_modules and two files package.json & package-lock.json.
4. install ``cors`` package (it'll be needed to run a local server on http localhost otherwise cors will cause security issues)
````
npm install cors
````

## Run 
1. Open project folder in your terminal and run the following command. This makes a local server with backend code stored in `index.js`.
````
node index.js
````
It'll run on localhost.

> Alternatively, if you have VSCode, you can also open the project folder and use its terminal

Open `index.html` in your browser to see the homepage and look at quotes.
