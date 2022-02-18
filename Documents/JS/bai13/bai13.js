while (true) {
    var inputString = prompt("Please enter your string");
    const words = inputString.split(" ");
    var mn = words[0], mx = words[0];
    words.forEach((e) => {
        if (e.length > mx.length)
            mx = e;
        if (e.length < mn.length)
            mn = e;
    });
    alert(`Từ có độ dài ngắn nhất là ${mn} và từ có độ dài lớn nhất là ${mx}`);
    var isContinue = confirm("Do you want to continue");
    if (!isContinue)
        break;
}