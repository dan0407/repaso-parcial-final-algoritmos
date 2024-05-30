CHECKPOINT 2

⁠Databases
⁠⁠Firestore
⁠⁠Authentication
⁠⁠Firebase Storage
Global State
Deploying
Web components

DATABASES:
📊 Base de Datos:

💻 Sistema Informático: Almacena información estructurada.

🗂️ Organizada: Datos ordenados de manera lógica.

🔄 Consulta y Actualización: Permite acceder y modificar información.

👥 Múltiples Usuarios: Varios usuarios pueden usarla al mismo tiempo.

📦 Gran Volumen: Maneja grandes cantidades de información de manera eficiente.


Tipos de Base de Datos:

🗣️Bases de datos relacionales: 
📋 Almacenan información en tablas.
🔗 Tablas interrelacionadas por claves o campos comunes.
🏢 Usadas en empresas para gestionar información de clientes, proveedores, inventarios, etc.


Bases de Datos NoSQL:

📄 Utilizan modelos de datos diferentes al relacional.
📚 Modelos como documentos, gráficos, clave-valor.
🌐 Usadas en aplicaciones web y móviles para alta escalabilidad y disponibilidad.
🔎🔦Bases de Datos de Búsqueda:
🔍 Utilizadas para buscar información específica.
🌐 Ejemplo: búsquedas web.
🤖 Utilizan algoritmos de búsqueda para encontrar datos relevantes.


🧠Bases de Datos en Memoria:

💾 Almacenan datos en la RAM.
⚡ Acceso muy rápido a los datos.
🎮 Usadas en juegos en línea y análisis de datos en tiempo real.

🔥 Firebase

📱 Plataforma de Desarrollo: Para aplicaciones móviles y web.


☁️ Servicios en la Nube:

🗃️ Base de datos en tiempo real: Almacena y sincroniza datos en tiempo real.
🔐 Autenticación: Gestión segura de usuarios.
💾 Almacenamiento: Guarda archivos.
🌐 Hosting: Aloja aplicaciones.
✉️ Mensajería: Notificaciones y mensajes.
📊 Analíticas: Monitorea y analiza el uso de la app.
🛠️ Herramientas fáciles de integrar: Altamente escalables y seguras.
⚙️ Configuración de Webpack: Para usar await en las solicitudes.
experiments: { topLevelAwait: true },


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FIRESTORE:

Firestore es una base de datos en la nube que permite almacenar, sincronizar y consultar datos en tiempo real. Es parte de la suite de productos de Firebase, diseñada para facilitar el desarrollo de aplicaciones móviles y web. 

Modelo de Datos Basado en Documentos:
Documentos: Los datos se almacenan en documentos, que son pares clave-valor similares a JSON.

Colecciones: Los documentos se agrupan en colecciones. Una colección contiene varios documentos, y un documento puede contener subcolecciones adicionales.

Sincronización en Tiempo Real:

-Permite a los clientes conectarse a la base de datos y recibir actualizaciones instantáneas cuando los datos cambian.

Escalabilidad Automática:

-Diseñada para escalar automáticamente con el crecimiento de la aplicación sin necesidad de gestionar servidores o infraestructura adicional.

¿Para Qué se Utiliza Firestore?

-Almacenamiento de Datos Estructurados y Semi-Estructurados:

Firestore es adecuado para almacenar datos que no siguen un esquema rígido y permiten flexibilidad en la estructura de los datos.

Desarrollo Rápido de Prototipos:

Gracias a su integración con Firebase, permite a los desarrolladores construir y lanzar aplicaciones rápidamente.

Sincronización entre Dispositivos:

Mantiene los datos sincronizados entre varios dispositivos, lo que es esencial para aplicaciones móviles y web que necesitan compartir el estado en tiempo real.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FIREBASE STORAGE:

¿Qué es Firebase Storage?
Firebase Storage es un servicio que permite a los desarrolladores almacenar y servir archivos, como imágenes, videos, audio y otros tipos de contenido generado por los usuarios. Está construido sobre Google Cloud Storage, lo que garantiza escalabilidad, alta disponibilidad y seguridad.

Características Principales
Almacenamiento Escalable:

Utiliza la infraestructura de Google Cloud Storage, que permite escalar sin problemas para manejar grandes cantidades de datos y usuarios.
Seguridad y Control de Acceso:

Integra reglas de seguridad basadas en Firebase Authentication para controlar el acceso a los archivos. Esto asegura que solo los usuarios autorizados puedan cargar y descargar contenido.
Carga y Descarga de Archivos:

Proporciona APIs fáciles de usar para cargar y descargar archivos de manera eficiente desde aplicaciones móviles y web.
Gestión de Archivos:

Permite la gestión avanzada de archivos, incluyendo la organización en carpetas, la generación de URLs de acceso temporal, y la manipulación de metadatos.
Integración con Firebase:

Se integra perfectamente con otros servicios de Firebase como Firebase Authentication, Firestore, y Firebase Realtime Database, permitiendo soluciones completas y coherentes.
Alta Disponibilidad y Durabilidad:

Ofrece almacenamiento altamente disponible y duradero, asegurando que los archivos estén siempre accesibles y protegidos contra pérdida.
¿Para Qué Sirve Firebase Storage?
Almacenamiento de Contenido Generado por Usuarios:

Ideal para almacenar fotos, videos, documentos y otros archivos generados por los usuarios de la aplicación.
Distribución de Contenido:

Facilita la entrega de archivos multimedia y otros contenidos a los usuarios, optimizando el rendimiento y la experiencia del usuario.
Seguridad y Control de Acceso:

Proporciona un control detallado sobre quién puede acceder y manipular los archivos, mejorando la seguridad de la aplicación.
Gestión de Activos Multimedia:

Permite almacenar y gestionar activos multimedia de manera eficiente, con capacidades para manipular y servir contenido de alta calidad.
Backup y Restauración:

Puede ser utilizado para almacenar copias de seguridad de datos críticos, asegurando que los datos importantes estén protegidos y se puedan restaurar en caso de pérdida.
Casos de Uso Comunes
Aplicaciones de Redes Sociales: Para almacenar y servir fotos, videos y otros contenidos compartidos por los usuarios.
Aplicaciones de Mensajería: Para gestionar archivos multimedia enviados y recibidos por los usuarios.
Aplicaciones de Comercio Electrónico: Para almacenar imágenes de productos, documentos y otros archivos relacionados con el comercio.
Aplicaciones de Educación y Capacitación: Para almacenar y distribuir materiales de aprendizaje, como videos educativos y documentos.
Aplicaciones de Entretenimiento: Para gestionar y servir contenido multimedia, como música y videos.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


AUTENTIFICACIÓN :

Firebase Authentication es un servicio que facilita la autenticación de usuarios en aplicaciones. Proporciona métodos seguros y fáciles de usar para registrar y autenticar usuarios, gestionando la complejidad del proceso de autenticación y permitiendo a los desarrolladores centrarse en la funcionalidad de sus aplicaciones.

Métodos de Autenticación Diversos:

Correo Electrónico y Contraseña: Permite a los usuarios registrarse y acceder utilizando su correo electrónico y una contraseña.

Proveedores de Identidad: Soporta autenticación a través de proveedores de identidad externos como Google, Facebook, Twitter, GitHub, y Microsoft.

Autenticación Telefónica: Permite la autenticación mediante el envío de un código SMS al teléfono del usuario.

Autenticación Anónima: Permite a los usuarios utilizar la aplicación sin registrarse, proporcionando una identidad temporal que puede ser vinculada a una cuenta permanente más adelante.

Gestión de Usuarios:
Permite gestionar el ciclo de vida de los usuarios, incluyendo el registro, inicio de sesión, recuperación de contraseñas y verificación de correos electrónicos.



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



🌐 GLOBAL STATE:
🔄 Concepto de Flux:
En el contexto de la programación, "Flux" se refiere a un patrón de diseño para construir aplicaciones web.
Desarrollado por Facebook para lograr aplicaciones más organizadas y escalables.
 
🔑 Componentes Principales de Flux:
Acciones (Actions): 📢
Despachadores (Dispatchers): 🚀
Almacenes (Stores): 🏬

🧩 Beneficios del Patrón Flux:
Separación del flujo de datos de la interfaz de usuario (UI).
Mantenimiento más fácil: Al separar la lógica de negocio de la interfaz, cada componente puede mantenerse y cambiarse sin afectar a los demás.
Escalabilidad: Facilita el crecimiento de la aplicación.

📢 Acciones (Actions):

Objetos que describen lo que ha sucedido en la aplicación.

Ejemplos: cuando el usuario hace clic en un botón o envía un formulario.

🚀 Despachadores (Dispatchers):

Reciben las acciones.

Las envían a las tiendas correspondientes.

🏬 Tiendas (Stores):

Objetos que contienen el estado de la aplicación.

Al recibir una acción del despachador, actualizan su estado.

Emiten un evento para notificar a las vistas que el estado ha cambiado.

Permiten que la interfaz de usuario se actualice en consecuencia.

🔹 Concepto de "Single Source of Truth" (SSOT):

Una única fuente confiable y consistente de datos o información en un sistema u organización.

Toda la información utilizada en la toma de decisiones proviene de esta única fuente autoritativa y actualizada.

🔹 Beneficios de SSOT:

📊 Mejora la toma de decisiones: Todos los usuarios tienen acceso a la misma información precisa y actualizada.

❌ Reducción de errores: Minimiza las discrepancias y errores en los datos.

🔹 Implementación de SSOT:

🛠️ Identificar y definir cuál es la fuente autoritativa de información en la organización o sistema.
✅ Esta fuente debe ser confiable, actualizada y accesible para todos los usuarios que la necesiten.



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


WEB COMPONENTS:

Una suite de diferentes tecnologías.

Permite la creación de elementos personalizados reutilizables.

🧩 Encapsulamiento de Funcionalidad:

Encapsula la funcionalidad apartada del resto de tu código.

Promueve la modularidad y la reutilización.

🔄 Utilización en Aplicaciones Web:

Pueden ser utilizados en tus aplicaciones web.

Mejora la organización del código y el mantenimiento.


PASOS PARA CREAR UN WEB COMPONENTES:

📝 Planifica el componente:

Antes de empezar a escribir código, es importante tener un plan claro sobre lo que el componente debería hacer y cómo se usará.

Define las propiedades y métodos que necesitará el componente, así como cómo se comunicará con el resto de la página.

📄 Crea el archivo HTML:

El primer paso es crear un archivo HTML que contenga la estructura del componente.

Incluye todas las etiquetas y atributos necesarios para crear la interfaz del componente.

📦 Crea el archivo JavaScript:

A continuación, crea un archivo JavaScript que contendrá la lógica del componente.

Este archivo debe importar el archivo HTML y crear una clase que extienda la clase HTMLElement.

🔍 Define las propiedades y métodos:

Una vez que se ha creado la clase, define las propiedades y métodos que el componente necesitará para funcionar correctamente.

Esto incluye la lógica de manejo de eventos y cualquier otra funcionalidad específica del componente.

🔖 Registra el componente:

Para poder usar el componente en una página, debe ser registrado usando el método customElements.define().

Este método toma dos argumentos: el nombre del componente y la clase que lo define.

🖥️ Usa el componente:

Una vez que el componente está registrado, puede ser usado en cualquier página HTML simplemente agregando la etiqueta personalizada que se ha definido.


📁 SISTEMAS DE ARCHIVOS: 

Conjunto de reglas y procedimientos para crear, leer, modificar y eliminar archivos y carpetas.

🌲 Estructura Jerárquica:

Los sistemas de archivos tienen una estructura jerárquica.

Cada archivo y carpeta está ubicado en una ubicación específica dentro del sistema de archivos.

🔍 Eficiencia de Acceso:

Permite que el sistema operativo y las aplicaciones accedan a los archivos de manera eficiente.

Cada archivo se encuentra en una ubicación conocida, lo que facilita su acceso.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Almacenamiento Web
El almacenamiento web es una característica de los navegadores web modernos que permite a las aplicaciones web almacenar datos en el navegador del usuario. Esto se debe a la interfaz del API de almacenamiento que expone el Almacenamiento Local (Local Storage) y el Almacenamiento de Sesión (Session Storage). Ref. Almacenamiento Web


Almacenamiento Local (Local Storage)
El Almacenamiento Local es un tipo de almacenamiento web que permite a las aplicaciones web almacenar datos sin fecha de caducidad. Los datos almacenados en el Almacenamiento Local persistirán incluso después de cerrar la ventana del navegador o reiniciar el ordenador.
Para almacenar datos en el Almacenamiento Local, se puede utilizar el objeto localStorage en JavaScript.


Almacenamiento de Sesión (Session Storage)
El Almacenamiento de Sesión es otro tipo de almacenamiento web que permite a las aplicaciones web almacenar datos durante la duración de una sesión. Una sesión dura mientras el navegador del usuario esté abierto y la aplicación web esté en funcionamiento. Una vez que el usuario cierra el navegador o navega fuera de la página, la sesión termina y los datos se eliminan.
Para almacenar datos en el Almacenamiento de Sesión, se puede utilizar el objeto sessionStorage.


Cookies
Las cookies son información que se comparte constantemente entre el servidor y el navegador a través de cada solicitud hasta una fecha de caducidad, para que el servidor pueda mantener un seguimiento de la actividad del cliente.
Para almacenar datos en una cookie, se puede utilizar el objeto documento en JavaScript. 

Casos de Uso Comunes


Almacenamiento Local:

Almacenar preferencias o configuraciones del usuario que necesitan persistir entre sesiones.
Almacenar datos que necesitan ser compartidos entre diferentes partes de un sitio web, como un carrito de compras o el historial de navegación de un usuario.
Almacenar en caché datos para mejorar el rendimiento del sitio web, como imágenes u otros recursos que no cambian con frecuencia.


Almacenamiento de Sesión:


Almacenar datos temporales que solo necesitan estar disponibles durante la duración de la sesión del usuario, como datos de formularios o tokens de autenticación temporales.


Cookies:

Almacenar ID de sesión para que el proceso de autenticación sea más rápido.
Almacenar datos relevantes del perfil del usuario para el servidor.
Mantener un seguimiento de las rutinas de interacción del usuario.