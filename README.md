# 🏎️ F1 Pilots API

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

> **Mi primera API RESTful construida con Node.js.**
> Sistema backend ligero para gestionar un directorio de pilotos de Fórmula 1, implementando operaciones CRUD y persistencia de datos local.

---

## 📋 Características

- **Arquitectura REST:** Endpoints estructurados para interactuar con los recursos.
- **Persistencia en Archivos:** Uso del módulo nativo `fs` para simular una base de datos usando `db.json`.
- **Live Reloading:** Configuración de entorno de desarrollo con `nodemon`.
- **Testing Integrado:** Incluye archivo `.http` para probar peticiones directamente desde VS Code.

---

## 🛠️ Tecnologías

* **Runtime:** Node.js
* **Framework:** Express.js
* **Body Parsing:** `body-parser`
* **Dev Tools:** Nodemon, VS Code REST Client

---

## 🚀 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/SAGS2002/NodeJS-F1-API.git](https://github.com/SAGS2002/NodeJS-F1-API.git)
    cd NodeJS-F1-API
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor:**
    ```bash
    npm run dev
    ```
    *El servidor iniciará en `http://localhost:3000`*

---

## 🔌 Endpoints

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/pilots` | Obtiene la lista completa de pilotos. |
| `GET` | `/pilots/:id` | Obtiene un piloto específico por su ID. |
| `POST` | `/pilots` | Crea un nuevo piloto (requiere JSON en el body). |
| `DELETE` | `/pilots/:id` | Elimina un piloto del registro. |

### 🧪 Cómo probar la API
Si usas VS Code, puedes utilizar el archivo incluido `request.http`. Solo necesitas instalar la extensión **"REST Client"** y podrás ejecutar las peticiones haciendo clic en "Send Request".

```http
### Crear un piloto (Ejemplo)
POST http://localhost:3000/pilots HTTP/1.1
Content-Type: application/json

{
    "name": "Franco Colapinto",
    "number": "43",
    "pais": "Argentina",
    "team": "Williams"
}
