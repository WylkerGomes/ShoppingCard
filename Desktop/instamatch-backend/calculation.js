console.log(getPercentage(wylker, fernanda));

function getPercentage(person1, person2) {
    var person1 = dataCalculation(person1);
    var person2 = dataCalculation(person2);
    var sum = 0;

    for (key1 in person1) {
        for (key2 in person2) {
            if (key1 === key2) {
                var result = Math.abs(person1[key1] - person2[key2]);
                var sum = result + sum;
            }
        }
    }
    var percentage = Math.round(sum * 100) + "%";
    return percentage
    console.log(percentage);
}

function dataCalculation(data) {

    var allText = '';
    for (var i = 0, len = data.length; i < len; i++) {
        if (data[i].caption === null) {} else {
            split(data[i]);
        }
    }

    function split(element) {
        var oneText = element.caption.text + " ";
        allText += oneText
            .split(" ")
            .map(function (word) {
                return word.replace(/[, #:()]+/g, "").toLowerCase();
            });
    }

    var arrayOfAllText = allText.split(",");
    var wordsCount = {};

    arrayOfAllText.forEach(function (x) {
        wordsCount[x] = ((wordsCount[x] || 0) + 1) / arrayOfAllText.length;
    });

    return wordsCount;
}
