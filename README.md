## Repositorio test-fullstack-dbaccess

Repositorio elaborado para la prueba propuesta por la empresa DBAccess para el puesto de Fullstack Developer.

A continuación se muestra el enunciado:

    Utiliza una base de datos relacional de tu preferencia para crear un modelo que conecte cursos e instructores. Un curso puede tener múltiples instructores que varían en el tiempo. Un instructor puede estar relacionado al curso en múltiples períodos. Puedes manejar de forma simple los datos asociados a un curso e instructores. 

    Utilizando Node.js, crea un API REST que permita la gestión de la asociación entre cursos e instructores. Las respuestas del API deben ser JSON.

    Crea una interfaz en React Native que muestre los instructores de cada curso y permita a través de llamadas al API agregar o eliminar instructores a los cursos. Diseña la experiencia de la página como consideres más efectiva. Puedes considerar crear tus propios componentes o utilizar librerías existentes que te permitan finalizar el ejercicio en el tiempo estipulado.

Es necesario para tener instalado npm y node en el equipo. En dado caso de no tenerlos instalados, se pueden instalar desde [Nodejs](https://nodejs.org/es/) y descargar la version LTS (para usuarios Windows) y este contiene e instala npm. Para los usuario Linux se implementan las siguientes lineas de comando en la terminal: 

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```
y para comprobar que esta instalado se implementan las siguientes instrucciones en la terminal:

```bash
node -v
npm -v
```

## Para el backend (Carpeta Back)

Para poder desplegar este proyecto hay que estar situado desde la terminal en la carpeta "Back" y a continuación ejecutar el siguiente comando

```bash
npm install
```

y se van a instalar todos los paquetes y librerías implementados en este proyecto.

Luego de que se termine de realizar la instalación, se van a tener que implementar las siguientes lineas de comando que van a realizar la creación de la base de datos y de las tablas en Postgres.

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

y luego de ejecutar estos comandos, a continuación levantar el servidor con la linea de comando

```bash
npm start
```

## Para el frontend (Carpeta Frontend)

Para poder desplegar este proyecto, primero hay que tener instalado Expo en nuestro computador y Expo Go en el dispositivo donde lo vayas a probar. Para instalarlo en el computador hay que ejecutar el siguiente comando en la terminal

```bash
npm install -g expo-cli
```

Luego hay que instalar todos los paquetes instalados para este proyecto con el comando
```bash
npm install
```

y luego de que finalice la instalación, se procede a realizar un pequeño cambio en el archivo baseURL.js ubicado en la carpeta assets/common/ para cambiar la linea

```Javascript
{Platform.OS === 'android'
? baseURL = 'http://__________:5000/'
: baseURL = 'http://localhost:5000/'
}
```

donde se va a sustituir el espacio vacio con la direccion ip asignada al computador en la red donde se encuentra conectado, que puedes ubicarlo en la información de la red donde estás conectada.

>Para usuarios Windows [ingresa aqui](https://wiki.bandaancha.st/Averiguar_la_IP_del_router) para averiguarlo.

>Para usuarios Linux (Ubuntu) [ingresa aqui](https://www.neoguias.com/saber-ip-ubuntu/) para averiguarlo.


Luego de realizar el paso anterior, guardas los cambios de ese archivo.

El ultimo paso es levantar el servidor para poder visualizar la app en el dispositivo movil se ejecuta el siguiente comando

```bash
npm start
```
y se va abrir en el navegador la siguiente pestaña con la siguiente interfaz

![interfaz](https://reactnativeninja.com/wp-content/uploads/2020/04/expo-dev-tools.png)

y vas a conectar tu dispositivo en el computador o levantar el emuladr Android en tu computadora y luego le vas a dar click en el boton "Run on android device/emulator" y seguido se va a instalar la app en el dispositivo y se puede ver la app e interactuar en el emulador o dispositivo.

--------------------------
