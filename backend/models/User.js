import mongoose from "mongoose";
import bcrypt from "bcrypt";
export default mongoose.model("User", new mongoose.Schema({
    email:{
        type: 'string',
        required: [true, "Please enter a valid email"],
        lowercase: true,
        unique: true
    },
    name:{
        first_name:{
            type: 'string',
            required: [true, "Please enter a name"],
        },
        last_name:{
            type: 'string',
            required: [true, "Please enter a name"],
        }
    },
    avatar:{
        type: 'string',
    },
    password:{
        type: 'string',
        required: [true, "Please enter a valid password"]
    },
    favorites:{
        type:[],
        default: [],
    }
})
.pre('save', async function(next){
    console.log(this)
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
}))
