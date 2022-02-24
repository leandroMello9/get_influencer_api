module.exports = {
    dialect: 'mysql',
    host: process.env.CONS_MS_INFLUENCER_DB_HOST,
    username: process.env.SECRET_MS_IFLUENCER_DB_USER_NAME,
    password: process.env.SECRET_MS_IFLUENCER_DB_PASSWORD,
    database: process.env.CONS_MS_INFLUENCER_DB_NAME,
    port: 3306,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };