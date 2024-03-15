let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2018,
    averageSpeed: 70
};

function showCarInfo() {
    alert(`Марка: ${car.manufacturer}\nМодель: ${car.model}\nГод выпуска: ${car.year}\nСредняя скорость: ${car.averageSpeed} km/h`);
}

function calculateTime(distance) {
    let totalHours = distance / car.averageSpeed;
    let restCount = Math.floor(totalHours / 4);
    let totalTime = totalHours + restCount;
    alert(`Чтобы преодолеть расстояние в ${distance} km, понадобится примерно ${totalTime} дней.`);
}

function calculateYearsPassed() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearsPassed = currentYear - car.year;
    return yearsPassed;
}


showCarInfo();
calculateTime(500);
let years = calculateYearsPassed();
