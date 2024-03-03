let sports: string[] = ["a", 'b', 'c'];

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

for (let s of sports) {
    if (s == 'a') {
        console.log('hooyeah');
    }
    console.log(s);
}