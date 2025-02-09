const mongoose = require("mongoose");

const dbConnection = async () => {
  console.log("🛠 Intentando conectar a MongoDB...");
  console.log("🌍 DB_CNN:", process.env.DB_CNN ? "Cargada correctamente" : "No encontrada");

  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // Espera hasta 20s
      connectTimeoutMS: 20000,
    });

    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.error("❌ Prolemas con la conexion a la base de datos:");
    console.error(error.message);
  }
};

module.exports = { dbConnection };
