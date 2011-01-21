var Extensions = Extensions || {};

Extensions.onLoad = function () {
	IN.Event.on(IN, 'auth', Extensions.onAuth);
}

Extensions.onAuth = function () {
	$(document.body).append('<p>it works!</p>')
}
