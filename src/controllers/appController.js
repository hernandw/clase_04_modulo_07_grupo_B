

const home = (req, res) => {
  res.render("inicio", {
    pageTitle: "Inicio",
    esExito: true,
    mensaje: 'Bienvenido'

  });
}; 

const about = (req, res) => {
  res.render("about", {
    pageTitle: "Quienes Somos",
    esExito: false,
    mensaje: 'Adios'
  });
};

const contact = (req, res) => {
  res.render("contact", {
    pageTitle: "Contactos",
  });
};

export { home,  about, contact };
