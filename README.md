# Lab Notes : my Vision Board ✌️😜🎯



## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de Aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

Hoy en día no es práctico imaginar el desarrollo web sin HTML, CSS y JavaScript,
esta última es el alma del desarrollo de aplicaciones web.
[React](https://reactjs.org/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cual es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

Como desarrolladora front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del Proyecto

No existe día que no tomemos notas, siempre necesitamos apuntar alguna
dirección, número telefónico, notas de alguna reunión o guardar nuestras URLs
favoritas para poder consultarlas más tarde. Muchas veces para esta actividad
utilizamos libretas o agendas que terminan siendo olvidadas, o anotamos de
manera dispersa de tal manera que perdemos de vista la prioridad y el propósito
de la nota lo cual da como resultado una nota perdida.

Hoy en día las personas contamos con algún dispositivo móvil o
laptop y además nos estamos preocupando por implementar acciones para
salvar el medio ambiente, además el uso de notas en el trabajo remoto se vuelve
indispensable para aquello que debemos apuntar en el día con día, por ello a una
Laboratorian se le ocurre la idea de tener una herramienta como una web app para tomar notas, 
que nos permita crear, editar, eliminar y consultar las notas en cualquier
momento.

Ella está enamorada de la idea y quiere llevarla a cabo, pero no tiene el tiempo
necesario para empezar el proyecto, planea que sea un proyecto independiente a
su trabajo, por ello está buscando algunas colaboradoras dentro de la comunidad
de Laboratoria para implementar la idea, por lo cual te invitamos a colaborar.

![Shows CRUD functionalities](https://raw.githubusercontent.com/florenciasilva/lab-notes/master/demo-crud.gif?token=AGJBHNTVAQRWOVF2IGMP6FK5NVFAS)

Para este proyecto necesitas crear una Web App con `VUE o REACT JS` y `Firebase`.

Si bien la temática es libre, tu aplicación tendrá que tener ciertas
funcionalidades básicas:

* Autenticación con correo y/o Google y/o Facebook.
* Cerrar sesión.
* Crear una nueva nota.
* Ver mis notas.
* Editar mis notas.
* Borrar mis notas.

Para este proyecto tendrás que manejar _vistas_. Esto significa que cada sección
tendrá su propia URL, la cual indica que _vista_ o _componente_ será mostrado en
pantalla. Para ello necesitaremos investigar acerca de _la API para el manejo de
rutas (en la librería o framework que elijas)_ y el concepto de _Single Page
Application_.

### Archivos del proyecto

El proyecto deberá contener los siguientes archivos base de configuración,
aunque no serán los únicos archivos que quizás tendrás que crear.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.  
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.

## 3. Objetivos de Aprendizaje

El objetivo principal de es aprender a construir una _interfaz web_ usando
el _framework_ o la _libreria_ elegida. Todos estos frameworks de Frontend atacan el mismo
problema: **cómo mantener la interfaz y el estado sincronizados**. Así que esta
experiencia espera familiarizarte con el concepto de _estado de pantalla_, y
cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por
ejemplo, cada vez que agregamos una _nota_, la interfaz debe actualizar la lista
de notas).

![Framewoks-img](https://miro.medium.com/max/1400/1*WRzDZndJCduHwqgOpWmbhQ.png)

### HTML y CSS

* [ ] HTML semántico
* [ ] CSS flexbox
* [ ] Maquetación

### Frontend Development

* [ ] Componentes
* [ ] Manejo de estado

### React

* [ ] ¿Qué es React?
* [ ] Virtual DOM
* [ ] ReactDOM rendering
* [ ] [`¿Qué es un componente de React?`](https://es.reactjs.org/docs/components-and-props.html)
* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] Props
* [ ] Renderizado condicional (?)
* [ ] State(ej: `this.state`, `useState`,`context`, `redux`, ...)
* [ ] [`Manejo de eventos`](https://es.reactjs.org/docs/handling-events.html)
* [ ] Refs
* [ ] [`Component Lifecycle`](https://es.reactjs.org/docs/hooks-effect.html)
* [ ] [`React Router`](https://reacttraining.com/react-router/web)

### Vue

* [ ] [`Instancia de Vue.js`](https://es.vuejs.org/v2/guide/instance.html)
* [ ] [`Datos y métodos`](https://es.vuejs.org/v2/guide/instance.html#Datos-y-Metodos)
* [ ] [`Uso y creación de Componentes`](https://vuejs.org/v2/guide/components.html)
* [ ] [`Props`](https://es.vuejs.org/v2/guide/components.html#Pasando-datos-a-componentes-secundarios-con-Props)
* [ ] Directivas ([v-bind](https://es.vuejs.org/v2/api/#v-bind) | [v-model](https://es.vuejs.org/v2/guide/forms.html))
* [ ] Renderizado condicional ([v-if](https://es.vuejs.org/v2/guide/conditional.html#v-if)
      | [v-else](https://es.vuejs.org/v2/guide/conditional.html#v-else))
* [ ] Iteraciones ([v-for](https://es.vuejs.org/v2/guide/list.html#Mapeando-una-matriz-a-elementos-con-v-for))
* [ ] Eventos ([v-on](https://es.vuejs.org/v2/guide/events.html))
* [ ] [`Propiedades Computadas y Observadores`](https://es.vuejs.org/v2/guide/computed.html)
* [ ] [`Router`](https://router.vuejs.org/guide/#html)
* [ ] [`Clases y Estilos`](https://es.vuejs.org/v2/guide/class-and-style.html)
* [ ] [`Gestión de Estado`](https://es.vuejs.org/v2/guide/state-management.html#Gestion-de-estado-simple-desde-cero)

### Firebase

* [ ] [`Firestore`](https://firebase.google.com/docs/firestore?hl=es)
* [ ] [`Firebase Auth`](https://firebase.google.com/docs/auth?hl=es)
* [ ] [`Firebase security rules`](https://firebase.google.com/docs/firestore/security/get-started)
* [ ] [`onSnapshot`](https://firebase.google.com/docs/firestore/query-data/listen)
* [ ] [`onAuthStateChanged`](https://firebase.google.com/docs/auth/web/manage-users?hl=es)

### Testing

* [ ] Testeo de tus interfaces
* [ ] Testeo de componentes
* [ ] Testeo asíncrono
* [ ] Mocking

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de forma individual.

* Trabaja en una historia hasta terminarla antes de pasar a la siguiente.

* La aplicación debe ser un _Single Page App_. Las notas serán realizadas desde
una _tablet_, pero **no debe ser una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

* Necesitamos pensar bien en el aspecto UX de quienes van a tomar las notas, el
tamaño y aspecto de los botones, la visibilidad del estado actual del pedido,
etc.

* Implementar pruebas unitarias de tus componentes.

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

La [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos presenta este _backlog_
que es el resultado de su trabajo colaborativo.

  
~~~
**[Historia de usuario 1]** Usuaria/o debería poder iniciar sesión

Yo como usuaria quiero ingresar a lab-notes con mi cuenta de correo.   
~~~
~~~
**[Historia de usuario 2]** Usuaria/o debería poder tomar nota

Yo como usuaria de lab-notes quiero tomar nota para no depender de mi mala
memoria y tener presente en todo momento los apuntes ó cosas importantes que
antes escribía en papel.   
~~~
~~~
**[Historia de usuario 3]** Usuaria/o debería poder ver las notas

Yo como usuaria de lab-notes quiero leer mis notas para recordar lo que escribí antes.  
~~~
~~~
**[Historia de usuario 4]** Usuaria/o debería poder editar las notas

Yo como usuaria de lab-notes quiero editar notas para poder modificar lo que escribí antes.  
~~~
~~~
**[Historia de usuario 5]** Usuaria/o debería poder borrar notas

Yo como usuaria de lab-notes quiero borrar una nota para no volver a verla.  
~~~  

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar un título a mi nota
* Agregar el contenido de mi nota.
* Ver todas mis notas.
* Ver la última modificación de la nota.
* Modificar las notas.
* Eliminar notas.
* Se ve y funciona bien en una _Tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Desplegaste tu aplicación y has etiquetado tu versión ([`git tag`](https://youtu.be/5DkX3HFgklM)).

***

## 6. Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes
pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del
  navegador se cierra, cuando la vuelva a abrir, la nota debería mostrarse como
  estaba.
* Subir imágenes.
* Ver el número de veces que he editado mi nota.
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc.)
* Progressive Web App (PWA).
* Puedes crear categorías y clasificar por tipo de nota.
* Guardar el color de la nota.
* Crear una nota como publica.

## 7. Pistas, tips y lecturas complementarias

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Vue](https://es.vuejs.org/index.html)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
  

### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)
  
### Otros recursos

* [create-react-app](https://create-react-app.dev/docs/getting-started)
* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [deploy con gh-pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [What is a Single Page Application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
