import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  await mongoose.connect('mongodb+srv://aakash2000:aakash2000@cluster0.femcm9t.mongodb.net/', { dbName: "certificate" });
}