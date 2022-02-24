const Yup = require("yup");

module.exports = {
  createInfluencer() {
    return Yup.object().shape({
      user_cpf: Yup.string()
        .required("CPF is required")
        .min(11, "Number that cpf have min 11 caracters")
        .max(11, "Number that cpf have max 11 caracters"),
    });
  },
};
