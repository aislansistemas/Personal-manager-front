import { Time } from "@angular/common";

export class ControlPoint {
    id: number;
    applicationUserId: string;
    hourInputOne: Time;
    hourExitOne: Time; 
    hourInputTwo: Time; 
    hourExitTwo: Time; 
    totalHours: number;
    date: Date; 
    hourValue: number; 
}