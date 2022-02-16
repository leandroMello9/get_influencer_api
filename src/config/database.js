module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER_NAME || 'root',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'fitvlogger',
    port: 3306,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };