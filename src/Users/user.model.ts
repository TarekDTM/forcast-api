import * as mongoose from 'mongoose';


export const ProductSchema = new mongoose.Schema({
    username: {String, required:true},
    password: {String, required:true }
});


export class User {
    constructor(
        public userName:string,
        public password:string,
    ){}
}