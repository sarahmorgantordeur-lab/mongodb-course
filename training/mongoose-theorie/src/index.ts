import mongoose from "mongoose";
import { UserModel } from "./schema.ts";

async function init() {
    try { 
        let connection = await mongoose.connect('mongodb://root:test123@localhost:27017/sample_mflix?authSource=admin');

        console.log("Connecté à " + connection.connection.db?.databaseName);
    } catch(e) {
        console.log("Une erreur est survenue :", e);
    }

    const users = await UserModel.findOne({
        email: "kit_harington@gameofthron.es"
    });

    const newUser = new UserModel({
        firstName: 'Jacquy',
        lastName: 'Michel',
        email: "jacky@michel.be"
    });

    console.log(newUser.getFullName());
    // console.log(users?.getFullName());
    await newUser.save();
    console.log(newUser.getFullName());
}

init();