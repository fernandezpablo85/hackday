var Extensions = Extensions || {};

Extensions.onLoad = function () {
	IN.Event.on(IN, 'auth', Extensions.onAuth);
}

Extensions.onAuth = function () {
document.getElementById('link').innerText = "document.location.href";
document.getElementById('title').value = "document.title";
document.getElementById('share-link').style.display = 'block';
}
