import express from "express";
import exphbs from "express-handlebars";
import appRouter from "./routes/appRoutes.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3005;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Files
app.use(express.static(path.join(__dirname, "src/public")));

//Sincronizas la BBDD

//Configuración de Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutDir: path.join(__dirname, "src/views/layouts"),
    extname: ".hbs",
  }),
);

//Rutas
app.use("/", appRouter);



app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
