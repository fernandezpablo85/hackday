var Extensions = Extensions || {};

Extensions.onLoad = function () {
	IN.Event.on(IN, 'auth', Extensions.onAuth);
}

Extensions.onAuth = function (result) {
	console.log(result.toString());
	var matches = location.search.match(/url=(.*)&title=(.*)/);
	var fullUrl = decodeURIComponent(matches[1]);
	document.getElementById('link').innerText = fullUrl;
	document.getElementById('title').value = decodeURIComponent(matches[2]);
	document.getElementById('share-link').style.display = 'block';
	document.getElementById('link-display').innerText = fullUrl.substring(0,30) + "...";
	IN.API.Profile("me").result(Extensions.callbacks.getProfile);
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

Extensions.logout = function() {
	document.getElementById('share-link').style.display = 'none';
	document.getElementById('header').style.display = 'none';
	IN.User.logout();
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

Extensions.callbacks.getProfile = function (response) {
	document.getElementById('username').innerText = response.values[0].firstName + ' ' + response.values[0].lastName;
}