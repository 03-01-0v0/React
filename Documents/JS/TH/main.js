var listDiv = document.getElementsByTagName('div');
for (var i = 0; i < listDiv.length; i++) {
    if (listDiv[i].className == 'box') {
        listDiv[i].textContent = 'Học lập trình tại F8';
        console.log(listDiv[i]);
    }
    if (i == 1)
        listDiv[i].innerText = 'Thao tác với DOM qua bài tập tại F8';
}
