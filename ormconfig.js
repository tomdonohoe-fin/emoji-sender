module.exports = {
   type: "postgres",
   host: process.env.DB_HOST,
   port: 5432,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   synchronize: false,
   logging: false,
   entities: [
      "src/entities/*.ts"
   ],
   migrations: [
      "src/migration/*.ts"
   ],
   cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
   }
}