import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    } catch (error) {
        console.log(error)
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}

// GET

app.get("/", (req, res) => {
    res.send("Welcome to my first API with NodeJs")
})

app.get("/pilots", (req, res) => {
    const data = readData()
    res.json(data.pilots)
})

app.get("/pilots/:id", (req, res) => {
    const data = readData()
    const id = parseInt(req.params.id)
    const pilot = data.pilots.find((pilots) => pilots.id === id)
    res.json(pilot)
})

// POST

app.post("/pilots", (req, res) => {
    const data = readData()
    const body = req.body
    const newPilot = {
        id: data.pilots.length + 1,
        ...body
    }
    data.pilots.push(newPilot)
    writeData(data)
    res.json(newPilot)
})


// DELETE

    app.delete('/pilots/:id', (req, res) => {
        const data = readData()
        const id = parseInt(req.params.id);
        const initialLength = data.pilots.length;
        data.pilots = data.pilots.filter(p => p.id !== id);

        if (data.pilots.length < initialLength) {
            writeData(data);
            res.status(204).send(); // 204 No Content (éxito sin cuerpo de respuesta)
        }else {
            res.status(404).json({ mensaje: 'Producto no encontrado para eliminar.' });
        }
    });

// PUT



app.listen(3000, () => {
    console.log("El servidor esta escuchando en el puerto 3000")
})