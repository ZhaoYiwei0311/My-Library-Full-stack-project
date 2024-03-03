"use strict";
exports.__esModule = true;
var CCoach_1 = require("./CCoach");
var GCoach_1 = require("./GCoach");
var myCCoach = new CCoach_1.CCoach();
var myGCoach = new GCoach_1.GCoach();
var coaches = [];
coaches.push(myCCoach);
coaches.push(myGCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
}
