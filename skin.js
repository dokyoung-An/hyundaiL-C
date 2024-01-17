// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??L&C ??.ggsk
// Generated 2024-01-17T15:28:57

function pano2vrSkin(player,base) {
	player.addVariable('vis_copy', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_home', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__0=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._home=document.createElement('div');
		el.ggId="HOME";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.onclick=function (e) {
			player.openUrl("http:\/\/hyundaibs.kr\/login?back_url=Lz9yZWRpcmVjdD1ubw%3D%3D","");
			player.setVariableValue('vis_home', true);
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		el=me._home_=document.createElement('div');
		el.ggId="Home \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,149,130,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home_.onmouseover=function (e) {
			me.elementMouseOver['home_']=true;
			me.__4.logicBlock_visible();
		}
		me._home_.onmouseout=function (e) {
			me.elementMouseOver['home_']=false;
			me.__4.logicBlock_visible();
		}
		me._home_.ggUpdatePosition=function (useTransition) {
		}
		el=me._home_0=document.createElement('div');
		els=me._home_0__img=document.createElement('img');
		els.className='ggskin ggskin_home_0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Home \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home_0.ggUpdatePosition=function (useTransition) {
		}
		me._home_.appendChild(me._home_0);
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uad00\ub9ac\ud398\uc774\uc9c0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_home') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['home_'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__4.style.transition='';
				if (me.__4.ggCurrentLogicStateVisible == 0) {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				else if (me.__4.ggCurrentLogicStateVisible == 1) {
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				else {
					me.__4.style.visibility="hidden";
					me.__4.ggVisible=false;
				}
			}
		}
		me.__4.logicBlock_visible();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._home_.appendChild(me.__4);
		me._home.appendChild(me._home_);
		me.__0.appendChild(me._home);
		el=me.__3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=700;
		el.ggId="\ud648\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -226px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return (me.__3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__3.ggTimestamp) / me.__3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
				else {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.ggActivate=function () {
			player.setVariableValue('vis_home', false);
		}
		me.__3.ggCurrentLogicStateVisible = -1;
		me.__3.ggUpdateConditionTimer=function () {
			me.__3.logicBlock_visible();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__3);
		el=me._link_copy=document.createElement('div');
		el.ggId="Link Copy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._link_copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_copy.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			player.setVariableValue('vis_copy', true);
		}
		me._link_copy.ggUpdatePosition=function (useTransition) {
		}
		el=me._link_=document.createElement('div');
		el.ggId="Link \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,149,130,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._link_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_.onmouseover=function (e) {
			me.elementMouseOver['link_']=true;
			me.__2.logicBlock_visible();
		}
		me._link_.onmouseout=function (e) {
			me.elementMouseOver['link_']=false;
			me.__2.logicBlock_visible();
		}
		me._link_.ggUpdatePosition=function (useTransition) {
		}
		el=me._link_0=document.createElement('div');
		els=me._link_0__img=document.createElement('img');
		els.className='ggskin ggskin_link_0';
		hs=basePath + 'images/link_0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Link \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._link_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_0.ggUpdatePosition=function (useTransition) {
		}
		me._link_.appendChild(me._link_0);
		el=me.__2=document.createElement('div');
		els=me.__2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2.ggUpdateText();
		el.appendChild(els);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['link_'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				else if (me.__2.ggCurrentLogicStateVisible == 1) {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				else {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_copy') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__2.ggCurrentLogicStateText != newLogicStateText) {
				me.__2.ggCurrentLogicStateText = newLogicStateText;
				me.__2.style.transition='';
				if (me.__2.ggCurrentLogicStateText == 0) {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
				else {
					if (me.__2.ggUpdateText) {
					me.__2.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__2.ggUpdateText();
					} else {
						if (me.__2.ggUpdatePosition) me.__2.ggUpdatePosition();
					}
				}
			}
		}
		me.__2.logicBlock_text();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me._link_.appendChild(me.__2);
		me._link_copy.appendChild(me._link_);
		me.__0.appendChild(me._link_copy);
		el=me.__1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=700;
		el.ggId="\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -226px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return (me.__1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__1.ggTimestamp) / me.__1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
				else {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.ggActivate=function () {
			player.setVariableValue('vis_copy', false);
		}
		me.__1.ggCurrentLogicStateVisible = -1;
		me.__1.ggUpdateConditionTimer=function () {
			me.__1.logicBlock_visible();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__1);
		me.divSkin.appendChild(me.__0);
		el=me._info=document.createElement('div');
		el.ggId="\uace0\uac1dinfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 15px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("2024\ub144 1\uc6d4 00\uc77c \uc6a9\uc778\uc2dc \uc218\uc9c0\uad6c 000\ub85c\n000\uc544\ud30c\ud2b8 101\ub3d9 1001\ud638", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._text_1);
		me._info.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._info);
		el=me._infom=document.createElement('div');
		el.ggId="\uace0\uac1dinfo-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._infom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infom.style.transition='';
				if (me._infom.ggCurrentLogicStateVisible == 0) {
					me._infom.style.visibility=(Number(me._infom.style.opacity)>0||!me._infom.style.opacity)?'inherit':'hidden';
					me._infom.ggVisible=true;
				}
				else {
					me._infom.style.visibility="hidden";
					me._infom.ggVisible=false;
				}
			}
		}
		me._infom.logicBlock_visible();
		me._infom.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1m=document.createElement('div');
		el.ggId="Rectangle 1-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 15px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1m.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1m=document.createElement('div');
		els=me._text_1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1m.ggUpdateText=function() {
			var params = [];
			var hs = player._("2024\ub144 1\uc6d4 00\uc77c \uc6a9\uc778\uc2dc \uc218\uc9c0\uad6c 000\ub85c\n000\uc544\ud30c\ud2b8 101\ub3d9 1001\ud638", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1m.ggUpdateText();
		el.appendChild(els);
		me._text_1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1m.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1m.appendChild(me._text_1m);
		me._infom.appendChild(me._rectangle_1m);
		me.divSkin.appendChild(me._infom);
		el=me.__=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 15px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAAaCAYAAABW+EFtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO3ZMQ2DABQAUUAKWhDF3JGdtQrqqVKKiSY/ubyn4PZbj/v1WwAAAAAABnyv93QCEPM59+kEgFHbdAAAAAAAAAAA/2EAAwAAAAAAAEQYwAAAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEGEAAwAAAAAAAEQYwAAAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEGEAAwAAAAAAAEQYwAAAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEGEAAwAAAAAAAEQYwAAAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEGEAAwAAAAAAAEQYwAAAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEGEAAwAAAAAAAEQYwA'+
			'AAAAAAAAARBjAAAAAAAABAhAEMAAAAAAAAEPEAB7IF27JGYnwAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._image_1);
		me.divSkin.appendChild(me.__);
		me.__4.logicBlock_visible();
		me.__3.logicBlock_visible();
		me.__2.logicBlock_visible();
		me.__2.logicBlock_text();
		me.__1.logicBlock_visible();
		me._info.logicBlock_visible();
		me._infom.logicBlock_visible();
		player.addListener('changenode', function(event) {
			me.__4.logicBlock_visible();
			me.__3.logicBlock_visible();
			me.__2.logicBlock_visible();
			me.__2.logicBlock_text();
			me.__1.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me.__4.logicBlock_visible();
			me.__2.logicBlock_visible();
			me.__2.logicBlock_text();
		});
		player.addListener('sizechanged', function(event) {
			me._info.logicBlock_visible();
			me._infom.logicBlock_visible();
		});
		player.addListener('varchanged_vis_copy', function(event) {
			me.__2.logicBlock_visible();
			me.__2.logicBlock_text();
		});
		player.addListener('varchanged_vis_home', function(event) {
			me.__4.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__3.ggUpdateConditionTimer();
		if (me.__3.ggLastIsActive!=me.__3.ggIsActive()) {
			me.__3.ggLastIsActive=me.__3.ggIsActive();
			if (me.__3.ggLastIsActive) {
				player.setVariableValue('vis_home', false);
			} else {
			}
		}
		me.__1.ggUpdateConditionTimer();
		if (me.__1.ggLastIsActive!=me.__1.ggIsActive()) {
			me.__1.ggLastIsActive=me.__1.ggIsActive();
			if (me.__1.ggLastIsActive) {
				player.setVariableValue('vis_copy', false);
			} else {
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};