// TieBa-Background 1.3.1
// Copyright (c) 2013-2014, 864907600cc. Some rights reserved.
// Released under the GPL license  http://www.gnu.org/licenses/gpl.html

console.log('%cTieBa-Background%c add setting listener function start.\nSend feedback? http://msg.baidu.com/msg/writing?receiver=864907600cc','color:#ff7f3e;text-decoration:underline','color:#ff7f3e');
var t0=new Date().getTime(),
	i,j,id,imgnum,imgstyle,imgx,imgy,imga,imga1,topa,css,setting,updatef;
if(!window.localStorage.getItem('tbbg_setting'))var tbbg_value=new Object();
else var tbbg_value=JSON.parse(window.localStorage.getItem('tbbg_setting'));
var u_serverlist=['http://ext.ccloli.com/tieba-background/update/'],
	u_server=parseInt(localStorage.tbbg_server)||0,
	version=chrome.runtime.getManifest().version,
	response;

if(!tbbg_value.id)tbbg_value.id='';
if(!tbbg_value.imgnum)tbbg_value.imgnum='1';
if(!tbbg_value.imgstyle)tbbg_value.imgstyle='cover';
if(!tbbg_value.imgx)tbbg_value.imgx='center';
if(!tbbg_value.imgy)tbbg_value.imgy='center';
if(!tbbg_value.imga)tbbg_value.imga='50';
if(!tbbg_value.topa)tbbg_value.topa='true';
if(!tbbg_value.updatef||tbbg_value.updatef=='2'){
	tbbg_value.updatef='1';
}
if(!tbbg_value.css)tbbg_value.css='*{font-family:"WenQuanYi Micro Hei","Hiragino Sans","Hiragino Sans GB","微软雅黑","Microsoft Yahei","Microsoft JhengHei"}';
if(!tbbg_value.hotfix){
	tbbg_value.hotfix='0';
	tbbg_first_install_request();
}

window.addEventListener('load',function(){
	var u=document.getElementsByClassName('u_tb_profile')[0]||document.getElementsByClassName('u_school')[0];
	if(u){
		var c=document.createElement('li'),d=document.createElement('a');
		c.className='u_tbbg_setting';
		c.style.cursor='pointer';
		d.innerHTML='背景设置';
		u.parentElement.insertBefore(c,u.nextElementSibling);
		c.appendChild(d);
		c.onclick=function(){tbbg_setting_function();};
	}
},false)

function tbbg_setting_function(){
	var t=new Date().getTime(),
		bg=document.getElementsByClassName('TBBG_background')[0];
	var c=tbbg_notification(750,600);
	c[0].innerHTML='<div class="tbbg_setting" style="width:700px;margin:25px"><style>@font-face{font-family:"tbbg_font";unicode-range:U+2E80-FFFF;src:local("Microsoft Yahei"),local("微软雅黑"),local("微軟細黑")}@font-face{font-family:"tbbg_font";unicode-range:U+0000-2E7F;src:local("Segoe Print"),local("Arial")}.tbbg_setting *{font-family:tbbg_font!important;color:#000}.tbbg_setting h1{font-family:"Segoe Script",tbbg_font!important;color:#FFA533;text-shadow:0 0 2px #FFA533}.tbbg_setting input,.tbbg_setting textarea{border:1px dashed #999!important;background-color:rgba(255,255,255,.3);margin:0;padding:0}.tbbg_setting input{height:20px}.tbbg_setting label{padding-right:15px}.tbbg_setting td{font-size:14px!important}.tbbg_setting #tbbg_submit{background-image:url(http://tb2.bdstatic.com/tb/static-common/editor_img/btn_submit_post_69622fa8.gif?t=20121216);width:100px;height:40px;background-size:100%;color:white;font-size:16px;line-height:40px;cursor:pointer;margin:15px}.tbbg_setting #tbbg_submit:hover{background-position:0 -40px}.tbbg_setting #tbbg_submit:active{background-position: 0 -80px}.tbbg_setting h1{font-size:2em}.tbbg_setting a,.tbbg_setting a:visited{color:#09F!important;cursor:pointer}</style><h1 align="center" style="line-height:60px;line-height:40px">TieBa-Background Setting</h1><hr style="border: 1px #FFA533 dashed;margin-bottom:15px"><table width="700"><tbody align="justify" valign="middle"><tr height="32"><td width="120" title="在此处输入您安装的“TieBa-Background 背景托管扩展程序”的 32 位 ID&#13;若您不知道如何填写或位未安装，请点击右侧的“如何填写？”&#13;* 请务必填写正确，否则将无法正常显示背景图片&#13;* 这个 ID 不是 TieBa-Background 的 ID">托管扩展程序 ID</td><td><input type="text" id="tbbg_1" style="width:500px" name="tbbg_id" setting_name="id"><small style="padding-left:5px"><a class="tbbg_image_ext">如何填写？</a></small></td></tr><tr height="32"><td width="120" title="在此处输入图片数目&#13;* 请以 1.jpg , 2.jpg , 3.jpg , 4.jpg ...的形式命名文件">背景图片数量</td><td><input type="number" id="tbbg_2" style="width:75px;text-align:right" name="tbbg_imgnum" setting_name="imgnum" min="1"></td></tr><tr height="32"><td width="120" title="设置背景图片的显示方式（单击选项可预览）">背景样式</td><td><input name="tbbg_imgstyle" setting_name="imgstyle" type="radio" id="tbbg_31" value="auto"><label for="tbbg_31">无</label><input name="tbbg_imgstyle" setting_name="imgstyle" type="radio" id="tbbg_32" value="cover"><label for="tbbg_32">填充</label><input name="tbbg_imgstyle" setting_name="imgstyle" type="radio" id="tbbg_33" value="contain"><label for="tbbg_33">适应</label><input name="tbbg_imgstyle" setting_name="imgstyle" type="radio" id="tbbg_34" value="100% 100%"><label for="tbbg_34">拉伸</label><input name="tbbg_imgstyle" setting_name="imgstyle" type="radio" id="tbbg_35" value="repeat"><label for="tbbg_35">平铺</label></td></tr><tr height="32"><td width="120" title="设置背景图片的水平位置（单击选项可预览）">背景水平位置</td><td><input name="tbbg_imgx" setting_name="imgx" type="radio" id="tbbg_41" value="left"><label for="tbbg_41">居左</label><input name="tbbg_imgx" setting_name="imgx" type="radio" id="tbbg_42" value="center"><label for="tbbg_42">居中</label><input name="tbbg_imgx" setting_name="imgx" type="radio" id="tbbg_43" value="right"><label for="tbbg_43">居右</label></td></tr><tr height="32"><td width="120"  title="设置背景图片的垂直位置（单击选项可预览）">背景垂直位置</td><td><input name="tbbg_imgy" setting_name="imgy" type="radio" id="tbbg_51" value="top"><label for="tbbg_51">靠上</label><input name="tbbg_imgy" setting_name="imgy" type="radio" id="tbbg_52" value="center"><label for="tbbg_52">居中</label><input name="tbbg_imgy" setting_name="imgy" type="radio" id="tbbg_53" value="bottom"><label for="tbbg_53">靠下</label></td></tr><tr height="32"><td width="120" title="设置背景图片的透明度（滑动滑块可预览）">背景透明度</td><td><input type="range" id="tbbg_6" style="width:500px;" name="tbbg_imga" setting_name="imga" min="0" max="100"><span id="tbbg_61" style="padding-left:5px"></span>%</td></tr><tr height="32"><td width="120" title="设置是否显示顶部的白色遮罩层（单击选项可预览）">顶部遮罩层</td><td><input name="tbbg_topa" setting_name="topa" type="radio" id="tbbg_71" value="true"><label for="tbbg_71">开启</label><input name="tbbg_topa" setting_name="topa" type="radio" id="tbbg_72" value="false"><label for="tbbg_72">关闭</label></td></tr><tr height="32"><td width="120" title="设置是否开启 hot fix 样式（该样式为下一版本 TieBa-Background 发布之前的临时修复样式）&#13;* 开启后若无法访问样式更新服务器，可能会导致贴吧延迟加载">Hot Fix 样式</td><td><input name="tbbg_hotfix" setting_name="hotfix" type="radio" id="tbbg_e1" value="1"><label for="tbbg_e1">开启</label><input name="tbbg_hotfix" setting_name="hotfix" type="radio" id="tbbg_e2" value="0"><label for="tbbg_e2">关闭</label></td></tr><tr height="32"><td width="120" title="设置是否检查更新">检查更新</td><td><input name="tbbg_updatef" setting_name="updatef" type="radio" id="tbbg_d2" value="1"><label for="tbbg_d2">静默检查更新</label><input name="tbbg_updatef" setting_name="updatef" type="radio" id="tbbg_d3" value="0"><label for="tbbg_d3">不检查更新</label> <a class="tbbg_get_upate">手动检查更新</a></td></tr><tr><td width="120" height="32" title="在此设置您的自定义 css 样式&#13;* 请在保存前确认 css 语法正确">自定义样式</td><td rowspan="2"><textarea name="tbbg_css" setting_name="css" id="tbbg_b" style="width:570px;max-width:570px;height:60px"></textarea></td></tr><tr></tr><tr height="40"><td colspan="2"><center><div id="tbbg_submit">保存设置</div></center></td></tr><tr height="32"><td colspan="2"><center><div id="tbbg_load"></div></center></td></tr><tr height="20"><td colspan="2"><center><small style="word-spacing:25px"><a id="tbbg_reset">重置扩展</a> <a id="tbbg_backup">备份设置</a> <a id="tbbg_recover">恢复设置</a> <a id="tbbg_feedback">反馈</a> <a id="tbbg_about">关于</a> <a id="tbbg_thanks">致谢</a></small></center></td></tbody></table></div>';
	var setting=document.getElementsByClassName('tbbg_setting')[0],
	imga=document.getElementsByName('tbbg_imga')[0],
	imga1=document.getElementById('tbbg_61');
	var node=document.querySelectorAll('.tbbg_setting [setting_name]');
	for(var i=0;i<node.length;i++){
		if(node[i].type!='radio')node[i].value=tbbg_value[node[i].getAttribute('setting_name')];
		else if(node[i].value==tbbg_value[node[i].getAttribute('setting_name')])node[i].setAttribute('checked','checked');
		node[i].onclick=tbbg_preview;
	}
	imga1.innerHTML=tbbg_value.imga;
	imga.onchange=function(){
		imga1.innerHTML=this.value;
		bg.style.opacity=(100-this.value)/100;
	}
	document.getElementById('tbbg_submit').onclick=function(){tbbg_save(c[1])};
	document.getElementsByClassName('tbbg_get_upate')[0].onclick=function(){tbbg_update(1)}
	tbbg_bottom();
	document.getElementsByClassName('tbbg_image_ext')[0].onclick=function(){tbbg_image_ext();}
	document.getElementById('tbbg_load').innerHTML='页面生成耗时: '+(new Date().getTime()-t)+'ms<br>TieBa-Background 版本号 '+version;
}
function tbbg_preview(){
	if(this.name=='tbbg_imgstyle'){
		if(this.value=='repeat'){
			bg.style.backgroundSize='auto';
			bg.style.backgroundRepeat='repeat';
		}
		else{
			bg.style.backgroundSize=this.value;
			bg.style.backgroundRepeat='no-repeat';
		}
	}
	else if(this.name=='tbbg_imgx')bg.style.backgroundPositionX=this.value;
	else if(this.name=='tbbg_imgy')bg.style.backgroundPositionY=this.value;
	else if(this.name=='tbbg_topa'){
		if(!document.getElementsByClassName('TBBG_top_white')[0]){
			var s=document.createElement('div');
			s.className='TBBG_top_white';
			document.getElementsByTagName('tbbg')[0].appendChild(s);
		}
		if(this.value=='true')document.getElementsByClassName('TBBG_top_white')[0].style.display='block';
		else document.getElementsByClassName('TBBG_top_white')[0].style.display='none';
	}
}

function tbbg_save(p){
	var tbbg_setting=new Object();
	var id=document.getElementsByName('tbbg_id')[0];
	var node=document.querySelectorAll('.tbbg_setting [setting_name]');
	if(!/[a-p]{32}/gi.test(id.value)){alert('您的扩展程序 ID 格式不正确，请重新核实......');return}
	else id.value=id.value.match(/[a-p]{32}/gi)[0];
	for(var i=0;i<node.length;i++){
		if(node[i].type!='radio')tbbg_setting[node[i].getAttribute('setting_name')]=node[i].value;
		else if(node[i].checked)tbbg_setting[node[i].getAttribute('setting_name')]=node[i].value;
	}
	window.localStorage.setItem('tbbg_setting',JSON.stringify(tbbg_setting));
	alert('保存完毕~~~请刷新页面~~~>▽<');
	p.click();
}

function tbbg_update(p){
	var xhr=new XMLHttpRequest();
	xhr.open('GET',u_serverlist[u_server]+'?version='+version);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				localStorage.setItem('tbbg_update',new Date().getDate())
				response=JSON.parse(xhr.responseText);
				if(response.need_update=='true'){
					tbbg_update_confirm(tbbg_notification(400,450)[0]);
				}
				else if(p==1)tbbg_notification(400,20)[0].innerHTML='TieBa-Background 暂无更新……';
			}
			else{
				if(u_server<u_serverlist.length-1){
					u_server++;
					console.error('TieBa-Background 连接服务器出错，正在尝试访问其他更新服务器……');
					tbbg_update_check();
				}
				else{
					if(p==1)tbbg_notification(400,20)[0].innerHTML='TieBa-Background 连接服务器出错，请检查您的网络设置后重新检查更新……';
					else console.error('TieBa-Background 连接服务器出错，请检查您的网络设置后重新检查更新……');
				}
			}
		}
	}
	xhr.send(); 
}

function tbbg_update_confirm(c){
	var jdetail='',
		jserver='',
		jdrive='',
		text;
	for(var i=0;i<response.update_detail.length;i++){
		jdetail+='<li>'+response.update_detail[i]+'</li>';
	}
	for(var i=0;i<response.update_server.length;i++){
		jserver+='<li><a href="'+response.update_server[i].url+'" download="tieba-background-'+response.version+'.zip">'+response.update_server[i].name+'</a></li>';
	}
	for(var i=0;i<response.update_webdrive.length;i++){
		jdrive+='<li><a href="'+response.update_webdrive[i].url+'" target="_blank">'+response.update_webdrive[i].name+'</a></li>';
	}
	text='<p align="center" style="color:#f00">TieBa-Background 已有最新更新……<p><p>版本号：'+response.version+'</p><p>更新详情：</p><div><ol>'+jdetail+'</ol></div><p>请点击下面的链接下载更新，下载后请将其解压至扩展程序所在目录并覆盖文件，然后刷新扩展程序页。</p><p>服务器下载链接：</p><div><ul>'+jserver+'</ul></div><p>备用网盘下载链接：</p><div><ul>'+jdrive+'</ul></div>';
	c.innerHTML=text;
	var z=c.getElementsByTagName('a');
	for(var w=0;w<z.length;w++)z[w].onclick=function(){tbbg_update_nextstep(c)};
	c.style.height=250+(response.update_detail.length*16)+'px';
}

function tbbg_update_nextstep(c){
	c.innerHTML='<p>下载已经开始或已打开下载链接，请耐心等待……</p><p>下载完成后请手动将文件解压并覆盖至 TieBa-Background 所在文件夹，然后重新载入扩展程序</p><p>如果无法正常下载，请 <a class="tbbg_replay_response">选择其他下载地址</p>';
	document.getElementsByClassName('tbbg_replay_response')[0].onclick=function(){tbbg_update_confirm(c)}
	//document.getElementsByClassName('tbbg_reload_ext')[0].onclick=function(){chrome.runtime.reload()}
	c.style.height='100px';
}

function tbbg_image_ext(){
	var c=tbbg_notification(750,400);
	c[0].innerHTML='<p>感谢您使用 TieBa-Background。接下来的步骤将引导你安装图片托管扩展程序。</p><ol><li>请将所有的图片文件以 1.jpg、2.jpg、3.jpg、4.jpg、5.jpg ……这样的文件名命名（后缀必须是 .jpg，文件名必须是由 1 开始的连续数字），放在一个不会被移除的文件夹内<br><strong style="color:red">注意：请不要将文件名写成 1.jpg.jpg，2.jpg.jpg，3.jpg.jpg，4.jpg.jpg ……的形式！Windows 操作系统请在文件夹选项的“查看”选项卡中取消勾选“隐藏已知文件类型的扩展名”以确认文件名是否正确</strong><br></li><li><a href="data:text/plain;base64,77u/ew0KCSJ3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXMiOiBbICIqIiBdLA0KCSJuYW1lIjogIlRpZUJhLUJhY2tncm91bmQg5Zu+54mH5omY566h5omp5bGV56iL5bqPIiwNCgkiZGVzY3JpcHRpb24iOiAi5pys5omp5bGV56iL5bqP55So5LqO6L295YWlIFRpZUJhLUJhY2tncm91bmQg55qE6IOM5pmv5Zu+54mH77yM5YW35L2T5L2/55So5pa55rOV6K+35Y+C6KeBIFRpZUJhLUJhY2tncm91bmQg55qE6K6+572u6aG144CCIiwNCgkidmVyc2lvbiI6ICIxIiwNCgkibWFuaWZlc3RfdmVyc2lvbiI6IDINCn0=" download="manifest.json">请点击下载这个 manifest.json 文件</a>（可能需要重命名为 manifest.json）</li><li>将该 manifest.json 文件移动至背景图片所在的文件夹内</li><li>在 chrome 地址栏中输入 chrome://extensions 并回车，在扩展程序页勾选右上角的“开发者模式”</li><li>点击页面上方的“加载正在开发的扩展程序...”按钮，在目录树中找到该图片的文件夹，点击确定</li><li>如果一切正常，扩展程序将安装成功，请在下面的扩展程序列表中找到“TieBa-Background 图片托管扩展程序”，将其后的 32 位 ID 复制下来备用</li><li>将得到的 ID 贴入 TieBa-Background 设置页中的指定位置，点击“保存” </li></ol><p>至此，TieBa-Background 图片托管扩展程序已配置完成。</p><p>如果您找不到设置页，请将鼠标移至贴吧页面顶端右上角的 ID 处，在下拉列表中点击“背景设置”。</p><p>请注意，请不要移动、删除 manifest.json 文件和该文件夹。如果您移动、删除了该文件或文件夹， 需重新执行以上步骤。</p><p><a style="color:#c33" href="http://ext.ccloli.com/tieba-background/help/" target="_blank">如果您仍不知道怎么操作，请点击此处查看视频教程。</a></p><p><small>感谢 <a href="http://www.baidu.com/p/EndlessLove122" target="_blank">@EndlessLove122</a> 曾经提供的访问本地文件的方法，虽然由于资源占用过大被迫放弃了……</small></p>';
}

function tbbg_notification(w,h){
	if(!w)var width='auto';
	else var width=w+'px';
	if(!h)var height='auto';
	else var height=h+'px';
	var b=document.createElement('div'),
		d=document.createElement('div');
	b.style.cssText='width:100%;height:100%;position:fixed;left:0;top:0;z-index:39999';
	b.setAttribute('title','点击以关闭当前窗口');
	d.style.cssText='width:'+width+';height:'+height+';max-width:90%;max-height:90%;position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;background:rgba(255,255,255,.75);box-shadow:0 0 0 99999px rgba(0,0,0,.75);z-index:39999;overflow:auto;padding:20px;font-size:14px';
	b.className='tbbg_notification_b';
	d.className='tbbg_notification_d';
	b.innerHTML='<style>.tbbg_notification_d ol,.tbbg_notification_d ul{padding-left:25px;border-left:#F3C solid 2px}.tbbg_notification_d ol{list-style:decimal}.tbbg_notification_d ul{list-style-type:disc}.tbbg_notification_d a{color:#39F;text-decoration:none;cursor:pointer}.tbbg_notification_d p{margin:5px 0}</style>'
	document.body.appendChild(b);
	document.body.appendChild(d);
	b.onclick=function(){
		document.body.removeChild(b);
		document.body.removeChild(d);
	}
	return [d,b];
}

function tbbg_first_install_request(){
	var c=tbbg_notification(750,450);
	c[0].innerHTML='<h2>TieBa-Background 安装确认</h2><hr><p>您即将完成安装 TieBa-Background，在继续安装前，我们需要让您知晓一些注意事项和扩展程序权限。</p><div style="border-left:#0069D6 2px;padding:15px"><h3>警告</h3><ul><li>请色盲、弱视用户等有阅读困难的用户停止安装，因为该扩展可能会造成阅读障碍。</li></ul></div><div style="border-left:#0069D6 2px;padding:15px"><h3>注意</h3><ul><li>本扩展程序可能会给您造成阅读困难，建议您使用色调较浅的图片并调节背景透明度。</li><li>本扩展程序将消耗较多的 CPU 资源，例如在载入图片时。</li><li>本扩展程序将消耗较多的内存以载入图片，这部分内存会随标签页归属进程的结束而释放。</li><li>本扩展程序将可能导致浏览页面不流畅、响应较慢等问题，这是由于程序架构未做到很好的优化和 Google Chrome 自身渲染含有较多 bug。</li><li>由于 Chrome 的渲染问题，为尽可能减少渲染时间，建议不要使用过大的图片。</li></ul></div><div style="border-left:#0069D6 2px;padding:15px"><h3>权限说明</h3>这是一份简略文件，具体权限使用可参考<a href="http://ext.ccloli.com/tieba-background/permission/" target="_blank">此处</a>。<ul><li>本扩展程序将有权访问 tieba.baidu.com 下大部分页面以修改页面。</li><li>本扩展程序将有权访问 ext.ccloli.com、chrome8.ga 等服务器以获取更新。</li></ul></div><p>是否继续？</p><p align="center"><a class="tbbg-first-install-true">是，继续安装</a>　　<a class="tbbg-first-install-false">不，取消安装</a></p>';
	c[0].getElementsByClassName('tbbg-first-install-true')[0].onclick=function(){
		c[1].click();
		tbbg_first_install();
	}
	c[0].getElementsByClassName('tbbg-first-install-false')[0].onclick=function(){
		alert('您已取消安装，请在扩展程序页删除本扩展程序，然后删除扩展程序文件夹即可。');
		c[1].click();
	}
}

function tbbg_first_install(){
	tbbg_value.updatef='1';
	var c=tbbg_notification(750,450);
	c[0].innerHTML='欢迎您使用 TieBa-Background ζ*\'ヮ\')ζ<br><br>基于 Google Chrome 的安全设定，我们更改了扩展程序的安装方式。如果您之前使用过 TieBa-Background 1.2 的话，那么您应该对此过程非常熟悉。在最后我们会对更新方式进行具体说明，请耐心阅读。<br><br><strong>“怎么没有背景图片了呢？”</strong><br>是的，为了节省下载更新的时间和带宽，从 TieBa-Background 1.3 起将不会自带背景图片，但是同以往的版本一样，您可以使用自定义的本地图片，只不过初次使用时要进行比较麻烦的设置，稍后我们会谈到。<br><br><strong>“那么应该怎么设置背景图片呢？”</strong><br>首先，您需要<a class="tbbg_image_ext">安装 TieBa-Background 图片托管扩展程序</a>，按照链接里的介绍完成该扩展程序的安装——嗯，和以往的 TieBa-Background 安装方法一样，应该很熟悉吧 0w0 ——然后取得扩展程序的 32 位 ID，填写至本弹窗后面的设置界面上的相应位置，输入图片数目，保存即可。<br><br><strong>“设置界面上的各个设置项有什么用途呢？”</strong><br>关于各个设置项的具体含义，可以将鼠标移到设置界面左侧的设置项名称上，悬停一会就会显示它的具体含义了；另外部分设置项可以提供预览，您可以单击相应的选项实时查看效果，很方便吧~~~<del>不过实现好麻烦 TUT</del><br><br><strong>“现在我将如何更新扩展程序呢？”</strong><br>为绕过 Google Chrome 的安全限制，我们更改了扩展程序的更新方式。在每天第一次打开贴吧时，扩展程序将弹出窗口检查更新（<del>可在设置页使用静默更新</del>因浏览器及网站安全设置，该功能暂未实现，在此致歉），如果有更新时我们会提醒您安装。您只需要将更新的压缩包下载下来，解压至 TieBa-Background 扩展程序根目录，覆盖同名文件即可。<br><br>嗯，安装向导到此就结束了，现在就去完成扩展程序的相关设置吧~~> < <br>点击框架外侧黑色区域以退出';
	c[0].getElementsByClassName('tbbg_image_ext')[0].onclick=function(){tbbg_image_ext();}
	c[1].onclick=function(){document.body.removeChild(c[0]);document.body.removeChild(c[1]);tbbg_setting_function();}
}

function tbbg_bottom(){
	document.getElementById('tbbg_backup').onclick=function(){prompt('请按下 Ctrl + C 复制文本并将保存至安全的地方...',window.localStorage.getItem('tbbg_setting'))}
	document.getElementById('tbbg_recover').onclick=function(){
		var input=prompt('请将备份的文本粘贴至此处...');
		if(input!=null){
			window.localStorage.setItem('tbbg_setting',input);
			alert('设置数据已恢复，请刷新页面...');
		}
	}
	document.getElementById('tbbg_feedback').onclick=function(){window.open('http://msg.baidu.com/msg/writing?receiver=864907600cc')}
	document.getElementById('tbbg_about').onclick=function(){
		var c=tbbg_notification(400,200);
		c[0].innerHTML='<b>TieBa-Background</b><br><br>为贴吧添加自定义背景，让贴吧不再单调。附带去除贴吧广告功能=，=<br><br>作者：864907600cc<br><!--<del>项目主页：<a href=\'http://tieba-background.ml\' target=\'_blank\'>http://tieba-background.ml</del></a> 已被喜闻乐见_(:з」∠)_-->';
	}
	document.getElementById('tbbg_reset').onclick=function(){
		if(confirm('您即将重置 TieBa-Background，该操作将使扩展程序清除所有设置以恢复初始状态。如果您因初次安装配置不当而造成无法使用，或需要卸载本扩展程序而清除数据残留，可通过此功能重置扩展。\n注意：该操作是不可逆的。\n是否继续？')==true){
			localStorage.removeItem('tbbg_setting');
			alert('清除完毕......');
		}
	}
	document.getElementById('tbbg_thanks').onclick=function(){
		var c=tbbg_notification(400,200);
		c[0].innerHTML='感谢这些朋友的友情帮助，没有你们就没有今天的 TieBa-Background<br>（抱歉咱记性不好……如果有缺漏啥的请私信 OTL）<br><br>为了活着 ( TieBa-Background 原作者)<br>5B4B铅笔 &nbsp;&nbsp;&nbsp;&nbsp;8qwe24657913 &nbsp;&nbsp;&nbsp;&nbsp;寒云似雾<br>EndlessLove122 &nbsp;&nbsp;&nbsp;&nbsp;我知道你明白 &nbsp;&nbsp;&nbsp;&nbsp;心中无码五道杠<br>反馈 bug 的朋友们<br>推广 TieBa-Background 的朋友们<br>以及正在使用 TieBa-Background 的您……';
	}
}

if(window.localStorage.getItem('tbbg_update')!=new Date().getDate()&&tbbg_value.updatef!='0')tbbg_update();

console.log('%cTieBa-Background%c 监听设置事件程序载入时间统计：'+(new Date().getTime()-t0)+'ms','color:#4a82f0;text-decoration:underline','color:#4a82f0');