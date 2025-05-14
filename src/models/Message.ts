import { getModelForClass, prop } from '@typegoose/typegoose';

class Message {
  @prop({ required: true })
  public hash!: string;

  @prop({ required: true })
  public shift!: number;

  @prop({ required: true, default: false })
  public used!: boolean;
}

const MessageModel = getModelForClass(Message);

export default MessageModel;
