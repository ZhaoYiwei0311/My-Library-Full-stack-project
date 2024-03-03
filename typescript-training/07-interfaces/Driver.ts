import { CCoach } from "./CCoach";
import { Coach } from "./Coach";
import { GCoach } from "./GCoach";

let myCCoach = new CCoach();

let myGCoach = new GCoach();

let coaches: Coach[] = [];

coaches.push(myCCoach);
coaches.push(myGCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}

