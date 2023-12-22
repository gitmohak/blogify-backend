//Database Connection using Mongoose
import mongoose from "mongoose";

const database = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "blogify"
    })
        .then((c) => {
            console.log(`Database connected successfully with ${c.connection.host}`);

            //Backend Express.js Server
            app.listen(process.env.PORT, () => {
                console.log(`Server started successfully at port - ${process.env.PORT}`);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

export default database;