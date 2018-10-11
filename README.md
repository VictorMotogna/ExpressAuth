# ExpressAuth
NodeJS Express application with user data designed for authentication

# Technologies

### Node JS + Express

- make sure you have installed Node + NPM (`node -v` & `npm -v`)
- Express - https://expressjs.com/
- to add Express to your project, use `npm install express --save`

### MongoDB

- make sure you have MongoDB installed (`mongo --version`)

### Packages

- for the initial setup of the project, use `npm init` - make sure you correctly complete the setup (don't worry, the file will be available in the folder, called `package.json`)
- a great package for running node applications is Nodemon, used to watch and restart the node app on saved changes (`npm install -g nodemon`)
- this project also uses Mongoose (`npm install mongoose --save`) for modeling NodeJS objects to be stored in MongoDB
- and BodyParser (`npm install body-parser --save`), to parse the data from incoming requests


# Architecture

- the architecture of the application is pretty close to the classic MVC
- we created the file called `api-routes` to handle request routes, so the HTTP requests will be handled through `localhost:port/api`
- we also use a package called `controllers` to store the application Controllers - these will handle the requests and receive/send the data through HTTP
- we have also created a `models` package to handle the Models: creating the instances, parameters for them + the model for the MongoDB storage


# Usage

- to run the application, first run `npm install` to make sure all the used dependencies are installed
- to start the server, user `node index` or `nodemon index`
- the easiest requests can be viewed by accessing `localhost:8080/` and `localhost:8080/api`

- to access the local database instance you need to follow a these steps:
  - open the terminal
  - `sudo mongod`
  - open a new terminal tab
  - `mongo`
  - `use admin`
  - login using `db.auth("user","user")` - replace `"user"` with your credentials
  - `use expressauth`
  - `show collections`
  - you should already see the users collection
  - to view all entries use: `db.user.find().pretty()`
  
- use `GET` or `POST` request through Postman (https://www.getpostman.com/) at `localhost:8080/api/users` or `localhost:8080/api/users/:user_id` to manipulate the data
