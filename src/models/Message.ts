import { Schema, model, Document } from 'mongoose';

export interface IMessage extends Document {
  hash: string;
  shift: number;
  used: boolean;
}

const MessageSchema = new Schema<IMessage>({
  hash: { type: String, unique: true, required: true },
  shift: { type: Number, required: true },
  used: { type: Boolean, default: false },
});

export default model<IMessage>('Message', MessageSchema);
