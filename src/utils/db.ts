import mongoose from "mongoose";

export default async function connect() {
    const mongoUri = process.env.MONGO;

    if (!mongoUri) {
        throw new Error("A variável de ambiente MONGO não está definida.");
    }

    try {
        await mongoose.connect(mongoUri);
    } catch (error: any) {
        throw new Error(error);
    }
}
