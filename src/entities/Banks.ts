import { Types } from "mongoose";

export interface Banks {
  id: string;
  name: string;
  fullname: string;
  swift: string;
  code: string;
}
