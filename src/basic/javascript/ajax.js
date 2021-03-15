function ajax(url, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                success(request.response)
            }
        }
    }
}