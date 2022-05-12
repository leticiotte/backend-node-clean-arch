import { Status } from "./status";

export type Asset = {
    unitId: string;
    _id?: string;
    name: string;
    description: string;
    image: string;
    model: string;
    owner: string;
    status: Status;
    healthLevel: number;
} 