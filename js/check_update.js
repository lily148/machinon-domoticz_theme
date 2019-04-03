/*
	Check source file on github for latest version
*/
var branch = 'master';

setTimeout(update, 5000);

function update(){
	$.ajax({url: 'https://raw.githubusercontent.com/lily148/machinon-domoticz_theme/'+ branch +'/theme.json' , async: false, dataType: 'json', success: function(data) {

		gitVersion = data.version

		if (theme.version !== gitVersion) {
			newVersionText = 'Smart Gateway Theme version '+ data.version +' '+ language.is_available +'! It will be publish together with Smart Gateway Update soon.';
			notify(newVersionText, 0);
		}
	}
	});
}
