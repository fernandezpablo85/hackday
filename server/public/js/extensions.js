var Extensions = Extensions || {};

Extensions.onLoad = function () {
	IN.Event.on(IN, 'auth', Extensions.onAuth);
}

Extensions.onAuth = function () {
	document.getElementById('link').innerText = "http://example.com";
	document.getElementById('title').value = "document.title";
	document.getElementById('share-link').style.display = 'block';
}

Extensions.share = function() {
	document.getElementById('submit').style.disabled = true;
	var link = document.getElementById('link').innerText;
	var title = document.getElementById('title').value;
	var comment = document.getElementById('comment').value;
	var post_body =  { "content": { "submitted-url": link, "title": title}, "visibility": {"code": "anyone"}, "comment": comment };

	IN.API.Raw("/people/~/shares")
		.method("POST")
		.body(JSON.stringify(post_body))
		.result(Extensions.callbacks.shareOk)
		.error(Extensions.callbacks.shareError);
}

Extensions.callbacks = {};

Extensions.callbacks.shareOk = function (response) {
	document.getElementById('share-link').style.display = 'none';
	document.getElementById('messages').innerText = 'Link shared! :)';
}

Extensions.callbacks.shareError = function (response) {
	document.getElementById('share-link').style.display = 'none';
	document.getElementById('messages').innerText = 'There were problems sharing this link. Try again later :(';
}