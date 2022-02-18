function calcBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if (height === "" || weight === "") {
        document.getElementById("result").innerHTML = 'Please, enter height and weight !';
        document.getElementById("result").style.color = "red";
    }
    else {
        height /= 100;
        var BMI = weight / (height ** 2);
        var result;
        if (BMI < 18.5)
            result = "Dưới chuẩn";
        else if (BMI <= 25)
            result = "Chuẩn";
        else if (BMI < 30)
            result = "Thừa cân";
        else if (BMI <= 40)
            result = "Béo, cần giảm cân";
        else
            result = "Rất béo, cần giảm cân ngay";
        document.getElementById("result").innerHTML = `BMI của bạn là <b>${BMI.toFixed(1)}</b>, bạn ở mức <i>${result}</i>`
        document.getElementById("result").style.color = "black";

    }

}

function reset() {
    document.getElementById('height') = "";
    document.getElementById('weight') = "";
}