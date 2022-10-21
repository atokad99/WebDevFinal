import type { User } from "./session";

export class Activity {
    public user: User;
    public date: string;
    public type: string;
    public title: string;
    public time: any;
    public distance: any;
    public sets: any;
    public reps: any;
    public weight: any;
    public image: string;

    constructor(user: User, date: string, type: string, title: string, time: any, distance: any, sets: any, reps: any, weight: any, image: string) {
        this.user = user;
        this.date = date;
        this.type = type;
        this.title = title;
        this.time = time;
        this.distance = distance;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.image = image;
    }
}