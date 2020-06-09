# Ecoleta  
This is an application of the practice in React JS, React Native, Node JS and TypeScript.
The Web application has how goal to create Collection Points to be listeds in mobile application, where  
the user can see Collection points close by and see details about the Collection point  
and also get in touch to Collection point by Whatsapp or Email.

**This is only a study application**
  
## Tecnologies  
### Web application  
* React JS  
* TypeScript  
* axios  
* i18next  
* leaflet  
* react-router-dom  
* react-icons  

### Back-end  
* Node JS  
* TypeScript  
* hapi/joi  
* cors  
* express  
* knex  
* multer  
* sqlite3  
* moment  
* ts-node  
* ts-node-dev  
  
### Mobile application  
* React Native
* React JS  
* TypeScript  
* expo-google-fonts  
* react-navigation  
* axios  
* expo  
* expo-mail-composer  
* i18next  
* react-native-picker-select  
  
# Run application  
  
## Web application  
### Layout  
![Web](/layout/home_i18n_br_desktop.png)  
  
### Steps required  
Create a file named as `.env` in path `./web/`, there is a example file named as `.env.example`  
in path `./web/`.
```REACT_APP_BASE_API_URL=BASE_API_URL```  
  
`REACT_APP_BASE_API_URL` is an url to connect in API.  
  
### Available scripts  
#### `yarn start`  
Run a development application listening on `localhost:3000`  
  
#### `yarn build`  
Build a development application  
  
## Mobile application  
### Layout  
<img src="/layout/home_app.png" width="300x">  
  
### Steps required  
Create a file named as `.env` in path `./mobile/`, there is a example file named as `.env.example`  
in path `./mobile/`.
```REACT_APP_BASE_API_URL=BASE_API_URL```  
  
`REACT_APP_BASE_API_URL` is an url to connect in API.  
  
### Available scripts  
#### `yarn start`  
Run a development application listening on `localhost:19000`  
  
## Back-end
### Steps required  
Create a file named as `.env` in path `./server/`, there is a example file named as `.env.example`  
in path `./server/`.
```BASE_API_URL=BASE_URL```  
  
`BASE_API_URL` is an url to connect in API.

### Available scripts  
#### `yarn dev`  
Run a Back-end development application listening on `localhost:3333`  
  
#### `yarn knex:migrate`  
Update the database structure  
  
#### `yarn knex:seed`  
Populate the database  

