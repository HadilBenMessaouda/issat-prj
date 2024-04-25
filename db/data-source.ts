import { DataSource, DataSourceOptions, Migration } from "typeorm";

export const dataSourceOptions: DataSourceOptions= {
    type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'issat',
  logging: true,
  synchronize: false,
  entities:['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  
  
};
const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export default dataSource;
