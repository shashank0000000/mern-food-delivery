import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shashankshekhar01776:Sha131113@cluster0.wahwlcf.mongodb.net/food-del').then(() => console.log("DB Connected"));
}