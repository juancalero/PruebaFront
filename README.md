
# Prueba técnica Frontend Angular

**Planteamiento del problema**

Se pide implementar una aplicación Angular para evaluar las competencias técnicas del candidato para los puestos de *Desarrollador Frontend del Departamento de Tecnología de Gesthispania*

Partiendo de la [versión 3 de la API de TheMovieDatabase](https://developers.themoviedb.org/3/getting-started/introduction), construye una aplicación Angular que realice las siguientes funcionalidades:

 - Realizar una SPA que contenga un formulario de búsqueda por palabra
   de películas. Los resultados de la búsqueda deben incluir el título,
   el cartel de la película, los géneros cinematográficos y la fecha de
   estreno. Se deberán paginar los resultados y mostrarlos en español  
    
  - Desde los resultados de la búsqueda de películas, se tendrá que
   acceder a la ficha de la película en otra ruta del SPA. Esta página
   deberá contener el título en español, el título original, la
   valoración, los géneros cinematográficos, la lista de actores y
   actrices que intervienen en la película y el director 
   
   - La ficha de la  película deberá tener un formulario con una caja de texto en la que
   el usuario pueda aportar su crítica y un desplegable con su
   valoración de 0 a 10 y un botón para enviar. Estos datos se guardarán en almacenamiento local
   del navegador y aparecerá en la parte inferior de la ficha de
   película cada vez que se entre a esa ficha. Esa información se podrá
   modificar si el usuario vuelve a entrar a la página y cambia el texto y la valoración
   
   - En la ficha de la película se deberá incluir
   un botón para añadirla a favoritas y quitar de favoritas para la que
   también se utilizará localStorage 
   
   - Se realizará una vista en la que se listarán las películas marcadas como favoritas  
   
   - Se realizará otra vista con el top 10 de películas a las que se ha hecho una
   valoración, ordenándolas de mayor a menor

**Requerimientos**

- Asegúrate de tener instalado *Node* y *NPM* 
- Debes tener cuenta en *Github*
- Tendrás que solicitar una API key: https://www.themoviedb.org/signup
- Se valorará el uso de `Observables` y/o `Promises` en la declaración de los servicios
- Se valorará el uso de algún framework CSS como *Bootstrap* y de alguna librería de iconos para mejorar el look&feel como *FontAwesome*
- Si en lugar de utilizar `localStorage` para guardar las críticas, valoraciones y favoritas prefieres utilizar otro servicio, como *Firebase* o *Amplify* puedes hacerlo y será valorado


**Desarrollo y entrega**

- Debes realizar un `Fork` del repositorio  https://github.com/juancalero/PruebaFront
- Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
- Crear un  `branch`  en tu cuenta de GitHub utilizando su nombre completo
- A partir de ahí, puedes comenzar a realizar la solución al problema
- Una vez finalices, haz un `Commit` del proyecto y envía un  `Pull Request`  del branch con tu nombre, y notificar a la dirección de correo electrónico juan.calero@gesthispania.com
- Puedes entregar la solución mediante un zip o un rar a través de *WeTransfer* de forma alternativa
- Recuerda que no debe incluirse la carpeta `node_modules`
- Comprueba que el proyecto debe ser instalable con el comando `npm install` y levantado con el comando `npm start`. En caso que se cree algún script de inicio en `package.json,` indicar el correcto


