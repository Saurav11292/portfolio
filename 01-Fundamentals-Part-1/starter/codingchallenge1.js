const markHeight = 78;
    const markMass = 1.69;
    const johnHeight = 92;
    const johnMass = 1.95;
    
    const markBMI = markMass / markHeight ** 2;
    const johnBMI = johnMass / (johnHeight * johnHeight);
    const markHigherBMI = markBMI > johnBMI;

    console.log(markBMI, johnBMI, markHigherBMI);