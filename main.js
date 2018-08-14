const url = chrome.runtime.getURL('config');


function copyToClipboard(text) {
  const input = document.createElement('input');
  input.id = "clipboardInput";
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};

fetch(url)
    .then((response) => response.text())
    .then((data) => {
	const fromField = "id-token:";
	const toField = "idp-issuer-url:";
	const from = data.indexOf(fromField) + fromField.length;
	const to = data.indexOf(toField);
	const token = data.substring(from, to).trim();
	copyToClipboard(token);
	console.log("Token: " + token);
    });
