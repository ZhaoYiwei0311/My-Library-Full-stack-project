import { Coach } from "./Coach";

export class CCoach implements Coach {
    getDailyWorkout(): string {
        return "CCoach work";
    }
    
}