var Extensions = Extensions || {};

Extensions.onLoad = function () {
	IN.Event.on(IN, 'auth', Extensions.onAuth);
}

Extensions.onAuth = function () {
	var matches = location.search.match(/url=(.*)&title=(.*)/);
	document.getElementById('link').innerText = decodeURIComponent(matches[1]);
	document.getElementById('title').value = decodeURIComponent(matches[2]);
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

Extensions.closePopup = function () {
	parent.close();	
}

Extensions.callbacks = {};

Extensions.callbacks.shareOk = function (response) {
	setTimeout("parent.close()", 2000);
	document.getElementById('share-link').style.display = 'none';
	document.getElementById('messages').innerHTML = '<p>Link shared! :)</p>';
}

Extensions.callbacks.shareError = function (response) {
	setTimeout("parent.close()", 2000);
	document.getElementById('share-link').style.display = 'none';
	document.getElementById('messages').innerHTML = '<p>Could not share link</p>';
}