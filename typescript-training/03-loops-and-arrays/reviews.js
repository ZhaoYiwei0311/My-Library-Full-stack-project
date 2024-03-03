var reviews = [1, 2, 3.5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
    console.log(reviews[i]);
}
var average = total / reviews.length;
console.log(average);
