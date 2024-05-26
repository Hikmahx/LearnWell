import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  _doc: any;
  isAdmin: boolean;
}

const userSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin : {type: Boolean, default: false},
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;