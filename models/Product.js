import {Schema} from 'mongoose';
import { stringify } from 'querystring';

const ModelSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  price: {type: Number, required: true},
})
