let reviews: number[] = [1, 2, 3.5];

let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
    console.log(reviews[i]);
}

let average: number = total / reviews.length;
console.log(average);
