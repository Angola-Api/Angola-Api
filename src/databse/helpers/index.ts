import mongoose, { Mongoose } from 'mongoose';

export const MongoHelper = {
  client: null as Mongoose,
  uri: null as string,
  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  },
  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  },
};
