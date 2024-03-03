import { Coach } from "./Coach";

export class GCoach implements Coach {
    getDailyWorkout(): string {
        return "Do GCoach Job";
    }
    
}