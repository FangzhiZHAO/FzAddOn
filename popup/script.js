
var cbtn = document.getElementById('colorify');
cbtn.onclick = function(){

	cbtn.textContent = "Run Again!";
	
	browser.tabs.executeScript( null, {
		file: "/content_scripts/artify.js"
	});

}