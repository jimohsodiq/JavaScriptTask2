let data = [{ principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
];

function interestCalculator(array) {
    const interestData = [];
    for (let i = 0; i < array.length; i++) {
        const object = array[i]
        let rate;

        if (object.principal >= 2500 && object.time >= 3) {
            rate = 4;
        } else if (object.principal >= 2500 && (object.time > 1 || object.time < 3)) {
            rate = 3;
        } else if (object.principal < 2500 || object.time <= 1) {
            rate = 2;
        } else rate = 1;


        let interest;
        interest = (object.principal * rate * object.time) / 100;


        let iData = {
            principal: object.principal,
            rate: rate,
            time: object.time,
            interest: interest
        };

        interestData.push(iData);

    }
    console.log(interestData);
    return interestData;
};
interestCalculator(data);