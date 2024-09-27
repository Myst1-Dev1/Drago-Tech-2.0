import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {type: String, required:true},
        email: {type: String, required:true, unique:true},
        phone: {type: String, required:true},
        address: {type: String, required:true},
        city: {type: String, required:true},
        state: {type: String, required:true},
        zipCode: {type: String, required:true},
        password: {type: String, required:true},
        favorites: {type: Array, default:[]},
        orders: {type: Array, default:[]}
    },

    {timestamps:true}
);

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName