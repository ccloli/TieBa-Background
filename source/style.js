// TieBa-Background 1.3.1
// Copyright (c) 2013-2014, 864907600cc. Some rights reserved.
// Released under the GPL license  http://www.gnu.org/licenses/gpl.html

if(window.localStorage.getItem('tbbg_setting')){
	console.log('%cTieBa-Background%c add personal stylesheet function start.','color:#ff7f3e;text-decoration:underline','color:#ff7f3e');
	if(typeof document.getElementsByTagName('tbbg')[0]=='undefined'){
		var node=document.createElement('tbbg');
		document.documentElement.appendChild(node);
	}
	else var node=document.getElementsByTagName('tbbg')[0];
	var tbbg_value = JSON.parse(window.localStorage.getItem('tbbg_setting')),
		t0=new Date().getTime();
	var x=document.createElement("style");
	x.id="TBBG_Stylesheet";
	x.setAttribute('extension-name','TieBa-Background');
	if(tbbg_value.hotfix=='1'){
		var hotfix_data=JSON.parse(window.localStorage.getItem('tbbg_hotfix'))||{};
		x.textContent+=hotfix_data.data||'';
		if(t0 - (hotfix_data.timestamp||0) > 3600000){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					hotfix_data.data = xhr.responseText;
					hotfix_data.timestamp = new Date().getTime();
					window.localStorage.setItem('tbbg_hotfix', JSON.stringify(hotfix_data));
					x.textContent += hotfix_data.data;
				}
			}
			xhr.open('GET', 'http://ext.ccloli.com/tieba-background/stylesheet.css');
			xhr.send();
		}
		/*var y=document.createElement('link');
		y.setAttribute('rel','stylesheet');
		y.setAttribute('href','http://ext.ccloli.com/tieba-background/stylesheet.css');
		node.appendChild(y);*/
	}
	x.textContent+=tbbg_value.css;
	node.appendChild(x);

	console.log('%cTieBa-Background%c 自定义样式载入时间统计：'+(new Date().getTime()-t0)+'ms','color:#4a82f0;text-decoration:underline','color:#4a82f0');
}