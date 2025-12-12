import { model, Schema } from "mongoose";

const addressSchema = new Schema({
    street: {
        type: String,

    },
    number: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    box: {
        type: String
    }
})

interface UserInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    daysConnected: {
        required: false,
        type: Number,
        min: 0,
        max: 3000
    },
    address: {
        type: addressSchema
    }
}, {
    methods: {
        getFullName() {
            if (!this.firstName || !this.lastName) {
                return 'Anonymous';
            }
            return this._id + ' ' + this.firstName + ' ' + this.lastName;
        }
    },
    statics: {
        findAndSave() {

        }
    }
});

export const UserModel = model("users", schema);