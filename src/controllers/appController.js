

const home = (req, res) => {
  res.render("home", {
    pageTitle: "Inicio",

  });
};

const about = (req, res) => {
  res.render("about", {
    pageTitle: "Quienes Somos",
  });
};

const contact = (req, res) => {
  res.render("contact", {
    pageTitle: "Contactos",
  });
};

export { home, about, contact };
