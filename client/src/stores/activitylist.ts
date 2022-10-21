import { reactive } from "vue";
import {Activity} from "./activity"
import userList from "./userlist";
import w1 from "../assets/w1.jpg"
import w2 from "../assets/w2.jpg"
import w3 from "../assets/w3.jpg"
import w4 from "../assets/w4.jpg"
import w5 from "../assets/w5.jpg"
import w6 from "../assets/w6.jpg"

const activityList = reactive({
    activity: [
        new Activity(userList.users[0], "Fri Oct 20 2022", "Strength", "Lifted Weights!", "90", "0", "6", "10", "125", w1),
        new Activity(userList.users[0], "Sat Oct 20 2022", "Run", "Ran a marathon!", "30", "1", "0", "0", "0", w2),
        new Activity(userList.users[2], "Sun Oct 20 2022", "Bike", "Biked for hours!", "128", "12 Mi", "0", "0", "0", w3),
        new Activity(userList.users[1], "Mon Oct 20 2022", "Strength", "I lift things up and put them down", "63", "0", "4 Sets", "10 Reps", "100 Lbs", w4),
        new Activity(userList.users[2], "Tue Oct 20 2022", "Walk", "I walk a lot", "90", "0.5", "0", "0", "0", w5),
        new Activity(userList.users[1], "Wed Oct 20 2022", "Cardio", "My heart is pounding right now!!", "45", "6", "0", "0", "0", w6)
    ] 
})

export default activityList;