import { connect } from "mongoose";

const dbConnection = (DB: string | undefined) => {
  connect(`${process.env.ATLAS_URI}`, { dbName: `${DB}` })
    .then(() => console.log(`Connected to ${DB}`))
    .catch((error) => console.log(`Connection failed to ${DB}`, error));
};

export default dbConnection;
