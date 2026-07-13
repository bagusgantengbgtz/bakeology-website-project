import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bagusadjhie:969858303YON0@cluster0.deyxm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

