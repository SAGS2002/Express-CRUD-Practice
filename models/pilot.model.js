import fs from 'fs';
const DB_FILE = './db.json';

// Función para leer los datos del archivo JSON
export const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
    }
}


// Función para escribir los datos en el archivo JSON
export const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}