const express = require("express");
const mongoose = require('mongoose');
const v1userRouter = require("./v1/routes/userRoutes");
const v1consejoRouter = require("./v1/routes/consejoRoutes");
const v1ejercicioRouter = require("./v1/routes/ejercicioRoutes");
const v1estrategiaRouter = require("./v1/routes/estrategiaRoutes");
const v1tareaRouter = require("./v1/routes/tareaRoutes");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use("/api/v1/users", v1userRouter);
app.use("/api/v1/consejos", v1consejoRouter);
app.use("/api/v1/ejercicios", v1ejercicioRouter);
app.use("/api/v1/estrategias", v1estrategiaRouter);
app.use("/api/v1/tareas", v1tareaRouter);

/*
app.listen(PORT, () => {
    console.log(`🚀listening on port ${PORT}`);
});
*/
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("🚀Connected to Mongoose Atlas"))
.catch((error)=> console.error(error));

app.listen(PORT, () => console.log('listening on port ', PORT))