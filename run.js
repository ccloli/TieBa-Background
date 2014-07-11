// TieBa-Background 1.3.1
// Copyright (c) 2013-2014, 864907600cc. Some rights reserved.
// Released under the GPL license  http://www.gnu.org/licenses/gpl.html

if(window.localStorage.getItem('tbbg_setting')){
	var tbbg_value=JSON.parse(window.localStorage.getItem('tbbg_setting')),
		t0=new Date().getTime(),
		node,
		doc=document.documentElement,
		bg,
		bg_white,
		seed;
	if(typeof document.getElementsByTagName('tbbg')[0]=='undefined'){
		node=document.createElement('tbbg');
		document.documentElement.appendChild(node);
	}
	else node=document.getElementsByTagName('tbbg')[0];
	if(tbbg_value.imgnum>0){
		console.log('%cTieBa-Background%c add background image function start.','color:#ff7f3e;text-decoration:underline','color:#ff7f3e');
		doc=document.documentElement;
		doc.setAttribute('has_TBBG_extension','true');
		bg=document.createElement('div');
		bg.className='TBBG_background';
		if(tbbg_value.imgstyle=='repeat'){
			bg.style.backgroundSize='auto';
			bg.style.backgroundRepeat='repeat';
		}
		else{
			bg.style.backgroundSize=tbbg_value.imgstyle;
			bg.style.backgroundRepeat='no-repeat';
		}
		bg.style.backgroundAttachment='fixed';
		bg.style.backgroundPosition=tbbg_value.imgx+' '+tbbg_value.imgy;
		node.appendChild(bg);
		bg_white=document.createElement('div');
		bg_white.className='TBBG_bg_white';
		bg_white.style.background='rgba(255,255,255,'+tbbg_value.imga/100+')';
		node.appendChild(bg_white);
		var num=parseInt(Math.random()*tbbg_value.imgnum+1);
		bg.style.backgroundImage='url(chrome-extension://'+tbbg_value.id+'/'+num+'.jpg)';
		if(tbbg_value.topa=='true'){
			seed=document.createElement('div');
			seed.className='TBBG_top_white';
			node.appendChild(seed);
		}
	}
	console.log('%cTieBa-Background%c 背景图片载入时间统计（自注入背景图片起开始计时至注入样式后停止计时）：'+(new Date().getTime()-t0)+'ms','color:#4a82f0;text-decoration:underline','color:#4a82f0');
}