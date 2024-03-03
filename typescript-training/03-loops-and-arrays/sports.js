var sports = ["a", 'b', 'c'];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var s = sports_1[_i];
    if (s == 'a') {
        console.log('hooyeah');
    }
    console.log(s);
}
