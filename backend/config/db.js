import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shashankshekhar01776:Sha%401234@cluster0.wahwlcf.mongodb.net/videotube?retryWrites=true&w=majority').then(() => console.log("DB Connected"));
}