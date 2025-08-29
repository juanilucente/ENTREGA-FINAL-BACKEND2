ENTREGA FINAL BACKEND - E-COMMERCE
Autor: Juan Ignacio Lucente
📌 DESCRIPCIÓN GENERAL
Este proyecto es un backend completo para un sistema de e-commerce desarrollado con Node.js y Express. Incluye funcionalidades de:

Gestión de usuarios (registro, login, roles, subida de documentos)
CRUD de productos con paginación y filtros
Carrito de compras
Autenticación con Passport (estrategia local y GitHub)
Persistencia de sesión con MongoDB
Vistas en Handlebars
Es la entrega final del curso Backend de Coderhouse y cumple con todas las consignas requeridas.

🧰 TECNOLOGÍAS UTILIZADAS
Node.js
Express.js
MongoDB + Mongoose
Passport.js (local & GitHub strategy)
Handlebars
bcrypt
JWT
express-session + connect-mongo
dotenv
nodemon
multer
cookie-parser
uuid
📁 ESTRUCTURA DEL PROYECTO
src/ ├── config/ -> Configuraciones (passport, db) ├── controllers/ -> Lógica de rutas ├── middlewares/ -> Validaciones, autenticaciones ├── models/ -> Esquemas Mongoose ├── repositories/ -> DAOs ├── routes/ -> Rutas (usuarios, productos, carritos, auth) ├── services/ -> Lógica de negocio ├── utils/ -> Helpers (bcrypt, logger, etc.) ├── views/ -> Plantillas con Handlebars └── index.js -> Punto de entrada

Raíz/ ├── .env -> Variables de entorno ├── .gitignore -> Archivos a ignorar (incluye node_modules) ├── package.json -> Configuración del proyecto ├── README.md -> Documentación del proyecto

🔐 AUTENTICACIÓN
Estrategia local (email y contraseña con bcrypt)
Estrategia GitHub (OAuth)
Uso de sesiones persistentes con MongoDB
Roles: user | admin
Subida de documentos y cambio de rol según criterios
✅ FUNCIONALIDADES PRINCIPALES
🔹 Usuarios

Registro / login
Login con GitHub
Subida de documentos
Rol por defecto: user
Posibilidad de upgrade a premium
🔹 Productos

CRUD completo
Paginación, búsqueda y filtros
Solo admin o premium pueden crear/modificar
Asignación del producto al creador
🔹 Carritos

Crear carrito al registrarse
Agregar productos
Eliminar productos
Finalizar compra
🔹 Vistas

Home pública
Login / Registro
Vista de productos con paginación
Vista del carrito
⚙️ CONFIGURACIÓN DE VARIABLES DE ENTORNO (.env)
PORT=3001 MONGO_URL=mongodb+srv://:@.mongodb.net/ecommerce SESSION_SECRET=claveSecreta GITHUB_CLIENT_ID=tuClientID GITHUB_CLIENT_SECRET=tuClientSecret GITHUB_CALLBACK_URL=http://localhost:3001/api/sessions/githubcallback JWT_SECRET=claveJWT

📝 CONSIDERACIONES
Se usa arquitectura en capas (controller, service, repository)
Se incluyen middlewares para proteger rutas según rol
El carrito se asocia automáticamente a cada nuevo usuario
El sistema es extensible y modular
