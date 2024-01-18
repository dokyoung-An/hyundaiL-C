// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: ??L&C ??.ggsk
// Generated 2024-01-18T14:03:38

function pano2vrSkin(player,base) {
	player.addVariable('vis_copy', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_home', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_date', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_address', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dateaddress', 2, false, { ignoreInState: 0  });
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
		el=me.__15=document.createElement('div');
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
		me.__15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
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
			me.__19.logicBlock_visible();
		}
		me._home_.onmouseout=function (e) {
			me.elementMouseOver['home_']=false;
			me.__19.logicBlock_visible();
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
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
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
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud648\ud398\uc774\uc9c0\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
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
		me.__19.logicBlock_visible = function() {
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
			if (me.__19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19.style.transition='';
				if (me.__19.ggCurrentLogicStateVisible == 0) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else if (me.__19.ggCurrentLogicStateVisible == 1) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else {
					me.__19.style.visibility="hidden";
					me.__19.ggVisible=false;
				}
			}
		}
		me.__19.logicBlock_visible();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me._home_.appendChild(me.__19);
		me._home.appendChild(me._home_);
		me.__15.appendChild(me._home);
		el=me.__18=document.createElement('div');
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
		me.__18.ggIsActive=function() {
			return (me.__18.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__18.ggTimestamp) / me.__18.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__18.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggActivate=function () {
			player.setVariableValue('vis_home', false);
		}
		me.__18.ggCurrentLogicStateVisible = -1;
		me.__18.ggUpdateConditionTimer=function () {
			me.__18.logicBlock_visible();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me.__18);
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
			me.__17.logicBlock_visible();
		}
		me._link_.onmouseout=function (e) {
			me.elementMouseOver['link_']=false;
			me.__17.logicBlock_visible();
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
		el=me.__17=document.createElement('div');
		els=me.__17__text=document.createElement('div');
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
		me.__17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__17.ggUpdateText();
		el.appendChild(els);
		me.__17.ggIsActive=function() {
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
		me.__17.logicBlock_visible = function() {
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
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else if (me.__17.ggCurrentLogicStateVisible == 1) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.logicBlock_text = function() {
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
			if (me.__17.ggCurrentLogicStateText != newLogicStateText) {
				me.__17.ggCurrentLogicStateText = newLogicStateText;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateText == 0) {
					if (me.__17.ggUpdateText) {
					me.__17.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__17.ggUpdateText();
					} else {
						if (me.__17.ggUpdatePosition) me.__17.ggUpdatePosition();
					}
				}
				else {
					if (me.__17.ggUpdateText) {
					me.__17.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__17.ggUpdateText();
					} else {
						if (me.__17.ggUpdatePosition) me.__17.ggUpdatePosition();
					}
				}
			}
		}
		me.__17.logicBlock_text();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me._link_.appendChild(me.__17);
		me._link_copy.appendChild(me._link_);
		me.__15.appendChild(me._link_copy);
		el=me.__16=document.createElement('div');
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
		me.__16.ggIsActive=function() {
			return (me.__16.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__16.ggTimestamp) / me.__16.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__16.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.ggActivate=function () {
			player.setVariableValue('vis_copy', false);
		}
		me.__16.ggCurrentLogicStateVisible = -1;
		me.__16.ggUpdateConditionTimer=function () {
			me.__16.logicBlock_visible();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me.__16);
		me.divSkin.appendChild(me.__15);
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
		hs+='width : 450px;';
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
		el=me.__5=document.createElement('div');
		el.ggId="\uace0\uac1d\uc815\ubcf4 \ucee8\ud14c\uc774\ub108";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
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
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc120\ud0dd\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
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
		me.__13.onclick=function (e) {
			player.setVariableValue('vis_address', true);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uc7a5\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
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
		me.__14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style.transition='';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
			}
		}
		me.__14.logicBlock_visible();
		me.__14.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_dateaddress') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__14.ggCurrentLogicStateText != newLogicStateText) {
				me.__14.ggCurrentLogicStateText = newLogicStateText;
				me.__14.style.transition='';
				if (me.__14.ggCurrentLogicStateText == 0) {
					if (me.__14.ggUpdateText) {
					me.__14.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__14.ggUpdateText();
					} else {
						if (me.__14.ggUpdatePosition) me.__14.ggUpdatePosition();
					}
				}
				else {
					if (me.__14.ggUpdateText) {
					me.__14.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud604\uc7a5\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__14.ggUpdateText();
					} else {
						if (me.__14.ggUpdatePosition) me.__14.ggUpdatePosition();
					}
				}
			}
		}
		me.__14.logicBlock_text();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__14);
		el=me._up2=document.createElement('div');
		els=me._up2__img=document.createElement('img');
		els.className='ggskin ggskin_up2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
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
		el.ggId="up-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up2.ggIsActive=function() {
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
		me._up2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up2.style.transition='';
				if (me._up2.ggCurrentLogicStateVisible == 0) {
					me._up2.style.visibility="hidden";
					me._up2.ggVisible=false;
				}
				else {
					me._up2.style.visibility=(Number(me._up2.style.opacity)>0||!me._up2.style.opacity)?'inherit':'hidden';
					me._up2.ggVisible=true;
				}
			}
		}
		me._up2.logicBlock_visible();
		me._up2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc120-3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
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
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me._up2.appendChild(me.__30);
		me.__13.appendChild(me._up2);
		me.__5.appendChild(me.__13);
		el=me.__6=document.createElement('div');
		els=me.__6__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 246.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__6.ggScrollByX = function(diffX) {
			if(!me.__6.ggHorScrollVisible || diffX == 0 || me.__6.ggHPercentVisible >= 1.0) return;
			me.__6.ggScrollPosX = (me.__6__horScrollFg.offsetLeft + diffX);
			me.__6.ggScrollPosX = Math.max(me.__6.ggScrollPosX, 0);
			me.__6.ggScrollPosX = Math.min(me.__6.ggScrollPosX, me.__6__horScrollBg.offsetWidth - me.__6__horScrollFg.offsetWidth);
			me.__6__horScrollFg.style.left = me.__6.ggScrollPosX + 'px';
			let percentScrolled = me.__6.ggScrollPosX / (me.__6__horScrollBg.offsetWidth - me.__6__horScrollFg.offsetWidth);
			me.__6__content.style.left = -(Math.round((me.__6.ggContentWidth * (1.0 - me.__6.ggHPercentVisible)) * percentScrolled)) + me.__6.ggContentLeftOffset + 'px';
			me.__6.ggScrollPosXPercent = (me.__6__horScrollFg.offsetLeft / me.__6__horScrollBg.offsetWidth);
		}
		me.__6.ggScrollByXSmooth = function(diffX) {
			if(!me.__6.ggHorScrollVisible || diffX == 0 || me.__6.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__6.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__6.ggScrollPosX >= me.__6__horScrollBg.offsetWidth - me.__6__horScrollFg.offsetWidth)) {
					me.__6.ggScrollPosX = Math.min(me.__6.ggScrollPosX, me.__6__horScrollBg.offsetWidth - me.__6__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__6.ggScrollPosX <= 0)) {
					me.__6.ggScrollPosX = Math.max(me.__6.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__6__horScrollFg.style.left = me.__6.ggScrollPosX + 'px';
			let percentScrolled = me.__6.ggScrollPosX / (me.__6__horScrollBg.offsetWidth - me.__6__horScrollFg.offsetWidth);
			me.__6__content.style.left = -(Math.round((me.__6.ggContentWidth * (1.0 - me.__6.ggHPercentVisible)) * percentScrolled)) + me.__6.ggContentLeftOffset + 'px';
			me.__6.ggScrollPosXPercent = (me.__6__horScrollFg.offsetLeft / me.__6__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__6.ggScrollByY = function(diffY) {
			if(!me.__6.ggVertScrollVisible || diffY == 0 || me.__6.ggVPercentVisible >= 1.0) return;
			me.__6.ggScrollPosY = (me.__6__vertScrollFg.offsetTop + diffY);
			me.__6.ggScrollPosY = Math.max(me.__6.ggScrollPosY, 0);
			me.__6.ggScrollPosY = Math.min(me.__6.ggScrollPosY, me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
			me.__6__vertScrollFg.style.top = me.__6.ggScrollPosY + 'px';
			let percentScrolled = me.__6.ggScrollPosY / (me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
			me.__6__content.style.top = -(Math.round((me.__6.ggContentHeight * (1.0 - me.__6.ggVPercentVisible)) * percentScrolled)) + me.__6.ggContentTopOffset + 'px';
			me.__6.ggScrollPosYPercent = (me.__6__vertScrollFg.offsetTop / me.__6__vertScrollBg.offsetHeight);
		}
		me.__6.ggScrollByYSmooth = function(diffY) {
			if(!me.__6.ggVertScrollVisible || diffY == 0 || me.__6.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__6.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__6.ggScrollPosY >= me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight)) {
					me.__6.ggScrollPosY = Math.min(me.__6.ggScrollPosY, me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__6.ggScrollPosY <= 0)) {
					me.__6.ggScrollPosY = Math.max(me.__6.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__6__vertScrollFg.style.top = me.__6.ggScrollPosY + 'px';
			let percentScrolled = me.__6.ggScrollPosY / (me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
			me.__6__content.style.top = -(Math.round((me.__6.ggContentHeight * (1.0 - me.__6.ggVPercentVisible)) * percentScrolled)) + me.__6.ggContentTopOffset + 'px';
			me.__6.ggScrollPosYPercent = (me.__6__vertScrollFg.offsetTop / me.__6__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__6.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__6.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__6.ggHPercentVisible);
					me.__6.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__6.clientWidth - (me.__6.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__6.clientWidth - (me.__6.ggVertScrollVisible ? 2 : 0))) * me.__6.ggHPercentVisible);
					me.__6.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__6.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__6.ggVPercentVisible);
					me.__6.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__6.clientHeight - (me.__6.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__6.clientHeight - (me.__6.ggHorScrollVisible ? 2 : 0))) * me.__6.ggVPercentVisible);
					me.__6.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__6__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__6.ggDragInertiaX *= 0.65;
				me.__6.ggDragInertiaY *= 0.65;
				me.__6.ggScrollByX(me.__6.ggDragInertiaX);
				me.__6.ggScrollByY(me.__6.ggDragInertiaY);
				if (Math.abs(me.__6.ggDragInertiaX) < 1.0 && Math.abs(me.__6.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__6__content.onmouseup = null;
			me.__6__content.onmousemove = null;
			me.__6__content.ontouchend = null;
			me.__6__content.ontouchmove = null;
			me.__6__content.onpointerup = null;
			me.__6__content.onpointermove = null;
			setTimeout(function() { me.__6.ggIsDragging = false; }, 100);
		}
		me.__6__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__6.ggDragStartX) > 10 || Math.abs(eventY - me.__6.ggDragStartY) > 10) me.__6.ggIsDragging = true;
			var diffX = (eventX - me.__6.ggDragLastX) * me.__6.ggHPercentVisible;
			var diffY = (eventY - me.__6.ggDragLastY) * me.__6.ggVPercentVisible;
			me.__6.ggDragInertiaX = -diffX;
			me.__6.ggDragInertiaY = -diffY;
			me.__6.ggDragLastX = eventX;
			me.__6.ggDragLastY = eventY;
			me.__6.ggScrollByX(-diffX);
			me.__6.ggScrollByY(-diffY);
		}
		me.__6__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__6.ggDragLastX = me.__6.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__6.ggDragLastY = me.__6.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__6__content.onmouseup = me.__6__content.mousetouchend;
			me.__6__content.ontouchend = me.__6__content.mousetouchend;
			me.__6__content.onmousemove = me.__6__content.mousetouchmove;
			me.__6__content.ontouchmove = me.__6__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__6__content.onpointerup = me.__6__content.ontouchend;
				me.__6__content.onpointermove = me.__6__content.ontouchmove;
			}
		}
		els.onmousedown = me.__6__content.mousetouchstart;
		els.ontouchstart = me.__6__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__6__content.mousetouchstart;
		}
		elVertScrollBg = me.__6__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__6__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__6.ggScrollPosY = 0;
		me.__6.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__6.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__6.ggDragInertiaY *= 0.65;
					me.__6.ggScrollByY(me.__6.ggDragInertiaY);
					if (Math.abs(me.__6.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__6.ggDragLastY;
				me.__6.ggDragInertiaY = diffY;
				me.__6.ggDragLastY = e.clientY;
				me.__6.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__6.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__6.ggDragInertiaY *= 0.65;
					me.__6.ggScrollByY(me.__6.ggDragInertiaY);
					if (Math.abs(me.__6.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me.__6.ggDragLastY;
				me.__6.ggDragInertiaY = diffY;
				me.__6.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__6.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__6.ggScrollHeight;
			if (e.offsetY < me.__6.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__6.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__6__vertScrollBg.getBoundingClientRect();
			var diffY = me.__6.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__6.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__6.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__6.ggScrollByYSmooth(30 * me.__6.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__6__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\uace0\uac1d\uc815\ubcf4 \uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
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
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__6.ggScrollPosY / me.__6.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__6__vertScrollBg.style.visibility = 'inherit';
				me.__6__vertScrollFg.style.visibility = 'inherit';
				me.__6.ggVertScrollVisible = true;
				if(me.__6.ggVertScrollVisible) {
					me.__6.ggAvailableWidth = me.__6.clientWidth - 2;
					if (me.__6.ggHorScrollVisible) {
						me.__6.ggAvailableHeight = me.__6.clientHeight - 2;
						me.__6.ggAvailableHeightWithScale = me.__6.getBoundingClientRect().height - me.__6__vertScrollBg.getBoundingClientRect().width;
						me.__6__cornerBg.style.visibility = 'inherit';
					} else {
						me.__6.ggAvailableHeight = me.__6.clientHeight;
						me.__6.ggAvailableHeightWithScale = me.__6.getBoundingClientRect().height;
						me.__6__cornerBg.style.visibility = 'hidden';
					}
					me.__6__vertScrollBg.style.height = me.__6.ggAvailableHeight + 'px';
					me.__6.ggVPercentVisible = contentHeight != 0 ? me.__6.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__6.ggVPercentVisible > 1.0) me.__6.ggVPercentVisible = 1.0;
					me.__6.ggScrollHeight =  Math.round(me.__6__vertScrollBg.offsetHeight * me.__6.ggVPercentVisible);
					me.__6__vertScrollFg.style.height = me.__6.ggScrollHeight + 'px';
					me.__6.ggScrollPosY = me.__6.ggScrollPosYPercent * me.__6.ggAvailableHeight;
					me.__6.ggScrollPosY = Math.min(me.__6.ggScrollPosY, me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
					me.__6__vertScrollFg.style.top = me.__6.ggScrollPosY + 'px';
					if (me.__6.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__6.ggScrollPosY / (me.__6__vertScrollBg.offsetHeight - me.__6__vertScrollFg.offsetHeight);
						me.__6__content.style.top = -(Math.round((me.__6.ggContentHeight * (1.0 - me.__6.ggVPercentVisible)) * percentScrolled)) + me.__6.ggContentTopOffset + 'px';
					}
				} else {
					me.__6.ggAvailableWidth = me.__6.clientWidth;
					me.__6.ggScrollPosY = 0;
					me.__6.ggScrollPosYPercent = 0.0;
					me.__6__content.style.top = this.ggContentTopOffset + 'px';
					me.__6__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__6.ggHorScrollVisible || vertScrollWasVisible != me.__6.ggVertScrollVisible) {
					skin.updateSize(me.__6);
					me.__6.ggUpdatePosition();
				}
			}
		}
		el=me.__7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
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
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__15_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 247.5;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__15_.ggUpdating == true) return;
			me.__15_.ggUpdating = true;
			var el=me.__15_;
			var curNumCols = 0;
			curNumCols = me.__15_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__15_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__15_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__15_.getFilteredNodes(tourNodes, filter);
			me.__15_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__15_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__15_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__15_.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__15_.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__15__Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__15_.ggNodeCount = me.__15_.ggNumFilterPassed;
			me.__15_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__15_.parentNode && me.__15_.parentNode.classList.contains('ggskin_subelement') && me.__15_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__15_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "15일";
		el.ggId="15\uc77c \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15_.ggIsActive=function() {
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
		me.__15_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("15\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15_.style.transition='';
				if (me.__15_.ggCurrentLogicStateVisible == 0) {
					me.__15_.style.visibility=(Number(me.__15_.style.opacity)>0||!me.__15_.style.opacity)?'inherit':'hidden';
					me.__15_.ggVisible=true;
				}
				else {
					me.__15_.style.visibility="hidden";
					me.__15_.ggVisible=false;
				}
			}
		}
		me.__15_.logicBlock_visible();
		me.__15_.ggCurrentLogicStateVisible = -1;
		me.__15_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__15_.childNodes.length; i++) {
				var child=me.__15_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__15_.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__15_.ggUpdate();
		}
		me.__7.appendChild(me.__15_);
		el=me.__16_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__16_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 247.5;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__16_.ggUpdating == true) return;
			me.__16_.ggUpdating = true;
			var el=me.__16_;
			var curNumCols = 0;
			curNumCols = me.__16_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__16_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__16_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__16_.getFilteredNodes(tourNodes, filter);
			me.__16_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__16_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__16_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__16_.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__16_.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__16__Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__16_.ggNodeCount = me.__16_.ggNumFilterPassed;
			me.__16_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__16_.parentNode && me.__16_.parentNode.classList.contains('ggskin_subelement') && me.__16_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__16_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "16일";
		el.ggId="16\uc77c \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16_.ggIsActive=function() {
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
		me.__16_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("16\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16_.style.transition='';
				if (me.__16_.ggCurrentLogicStateVisible == 0) {
					me.__16_.style.visibility=(Number(me.__16_.style.opacity)>0||!me.__16_.style.opacity)?'inherit':'hidden';
					me.__16_.ggVisible=true;
				}
				else {
					me.__16_.style.visibility="hidden";
					me.__16_.ggVisible=false;
				}
			}
		}
		me.__16_.logicBlock_visible();
		me.__16_.ggCurrentLogicStateVisible = -1;
		me.__16_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__16_.childNodes.length; i++) {
				var child=me.__16_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__16_.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__16_.ggUpdate();
		}
		me.__7.appendChild(me.__16_);
		el=me.__17_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__17_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 247.5;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__17_.ggUpdating == true) return;
			me.__17_.ggUpdating = true;
			var el=me.__17_;
			var curNumCols = 0;
			curNumCols = me.__17_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__17_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__17_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__17_.getFilteredNodes(tourNodes, filter);
			me.__17_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__17_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__17_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__17_.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__17_.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__17__Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__17_.ggNodeCount = me.__17_.ggNumFilterPassed;
			me.__17_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__17_.parentNode && me.__17_.parentNode.classList.contains('ggskin_subelement') && me.__17_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__17_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "17일";
		el.ggId="17\uc77c \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17_.ggIsActive=function() {
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
		me.__17_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("17\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17_.style.transition='';
				if (me.__17_.ggCurrentLogicStateVisible == 0) {
					me.__17_.style.visibility=(Number(me.__17_.style.opacity)>0||!me.__17_.style.opacity)?'inherit':'hidden';
					me.__17_.ggVisible=true;
				}
				else {
					me.__17_.style.visibility="hidden";
					me.__17_.ggVisible=false;
				}
			}
		}
		me.__17_.logicBlock_visible();
		me.__17_.ggCurrentLogicStateVisible = -1;
		me.__17_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__17_.childNodes.length; i++) {
				var child=me.__17_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__17_.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__17_.ggUpdate();
		}
		me.__7.appendChild(me.__17_);
		el=me.__18_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 247.5;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18_.ggUpdating == true) return;
			me.__18_.ggUpdating = true;
			var el=me.__18_;
			var curNumCols = 0;
			curNumCols = me.__18_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18_.getFilteredNodes(tourNodes, filter);
			me.__18_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18_.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__18_.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18__Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__18_.ggNodeCount = me.__18_.ggNumFilterPassed;
			me.__18_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18_.parentNode && me.__18_.parentNode.classList.contains('ggskin_subelement') && me.__18_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "18일";
		el.ggId="18\uc77c \uc8fc\uc18c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18_.ggIsActive=function() {
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
		me.__18_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("18\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18_.style.transition='';
				if (me.__18_.ggCurrentLogicStateVisible == 0) {
					me.__18_.style.visibility=(Number(me.__18_.style.opacity)>0||!me.__18_.style.opacity)?'inherit':'hidden';
					me.__18_.ggVisible=true;
				}
				else {
					me.__18_.style.visibility="hidden";
					me.__18_.ggVisible=false;
				}
			}
		}
		me.__18_.logicBlock_visible();
		me.__18_.ggCurrentLogicStateVisible = -1;
		me.__18_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18_.childNodes.length; i++) {
				var child=me.__18_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18_.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__18_.ggUpdate();
		}
		me.__7.appendChild(me.__18_);
		me.__6__content.appendChild(me.__7);
		me.__5.appendChild(me.__6);
		me._rectangle_1.appendChild(me.__5);
		el=me.__2=document.createElement('div');
		el.ggId="\ub0a0\uc9dc\ucee8\ud14c\uc774\ub108";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 17%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__2.onclick=function (e) {
			var flag=me._up.ggAngleActive;
			if (player.transitionsDisabled) {
				me._up.style.transition='none';
			} else {
				me._up.style.transition='all 0ms ease-out 0ms';
			}
			if (flag) {
				me._up.ggParameter.a=0;
			} else {
				me._up.ggParameter.a="180.0000";
			}
				me._up.style.transform=parameterToTransform(me._up.ggParameter);
			me._up.ggAngleActive=!flag;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 102.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__3.ggScrollByX = function(diffX) {
			if(!me.__3.ggHorScrollVisible || diffX == 0 || me.__3.ggHPercentVisible >= 1.0) return;
			me.__3.ggScrollPosX = (me.__3__horScrollFg.offsetLeft + diffX);
			me.__3.ggScrollPosX = Math.max(me.__3.ggScrollPosX, 0);
			me.__3.ggScrollPosX = Math.min(me.__3.ggScrollPosX, me.__3__horScrollBg.offsetWidth - me.__3__horScrollFg.offsetWidth);
			me.__3__horScrollFg.style.left = me.__3.ggScrollPosX + 'px';
			let percentScrolled = me.__3.ggScrollPosX / (me.__3__horScrollBg.offsetWidth - me.__3__horScrollFg.offsetWidth);
			me.__3__content.style.left = -(Math.round((me.__3.ggContentWidth * (1.0 - me.__3.ggHPercentVisible)) * percentScrolled)) + me.__3.ggContentLeftOffset + 'px';
			me.__3.ggScrollPosXPercent = (me.__3__horScrollFg.offsetLeft / me.__3__horScrollBg.offsetWidth);
		}
		me.__3.ggScrollByXSmooth = function(diffX) {
			if(!me.__3.ggHorScrollVisible || diffX == 0 || me.__3.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__3.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__3.ggScrollPosX >= me.__3__horScrollBg.offsetWidth - me.__3__horScrollFg.offsetWidth)) {
					me.__3.ggScrollPosX = Math.min(me.__3.ggScrollPosX, me.__3__horScrollBg.offsetWidth - me.__3__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__3.ggScrollPosX <= 0)) {
					me.__3.ggScrollPosX = Math.max(me.__3.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__3__horScrollFg.style.left = me.__3.ggScrollPosX + 'px';
			let percentScrolled = me.__3.ggScrollPosX / (me.__3__horScrollBg.offsetWidth - me.__3__horScrollFg.offsetWidth);
			me.__3__content.style.left = -(Math.round((me.__3.ggContentWidth * (1.0 - me.__3.ggHPercentVisible)) * percentScrolled)) + me.__3.ggContentLeftOffset + 'px';
			me.__3.ggScrollPosXPercent = (me.__3__horScrollFg.offsetLeft / me.__3__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__3.ggScrollByY = function(diffY) {
			if(!me.__3.ggVertScrollVisible || diffY == 0 || me.__3.ggVPercentVisible >= 1.0) return;
			me.__3.ggScrollPosY = (me.__3__vertScrollFg.offsetTop + diffY);
			me.__3.ggScrollPosY = Math.max(me.__3.ggScrollPosY, 0);
			me.__3.ggScrollPosY = Math.min(me.__3.ggScrollPosY, me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
			me.__3__vertScrollFg.style.top = me.__3.ggScrollPosY + 'px';
			let percentScrolled = me.__3.ggScrollPosY / (me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
			me.__3__content.style.top = -(Math.round((me.__3.ggContentHeight * (1.0 - me.__3.ggVPercentVisible)) * percentScrolled)) + me.__3.ggContentTopOffset + 'px';
			me.__3.ggScrollPosYPercent = (me.__3__vertScrollFg.offsetTop / me.__3__vertScrollBg.offsetHeight);
		}
		me.__3.ggScrollByYSmooth = function(diffY) {
			if(!me.__3.ggVertScrollVisible || diffY == 0 || me.__3.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__3.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__3.ggScrollPosY >= me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight)) {
					me.__3.ggScrollPosY = Math.min(me.__3.ggScrollPosY, me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__3.ggScrollPosY <= 0)) {
					me.__3.ggScrollPosY = Math.max(me.__3.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__3__vertScrollFg.style.top = me.__3.ggScrollPosY + 'px';
			let percentScrolled = me.__3.ggScrollPosY / (me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
			me.__3__content.style.top = -(Math.round((me.__3.ggContentHeight * (1.0 - me.__3.ggVPercentVisible)) * percentScrolled)) + me.__3.ggContentTopOffset + 'px';
			me.__3.ggScrollPosYPercent = (me.__3__vertScrollFg.offsetTop / me.__3__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__3.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__3.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__3.ggHPercentVisible);
					me.__3.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__3.clientWidth - (me.__3.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__3.clientWidth - (me.__3.ggVertScrollVisible ? 2 : 0))) * me.__3.ggHPercentVisible);
					me.__3.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__3.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__3.ggVPercentVisible);
					me.__3.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__3.clientHeight - (me.__3.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__3.clientHeight - (me.__3.ggHorScrollVisible ? 2 : 0))) * me.__3.ggVPercentVisible);
					me.__3.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__3__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__3.ggDragInertiaX *= 0.65;
				me.__3.ggDragInertiaY *= 0.65;
				me.__3.ggScrollByX(me.__3.ggDragInertiaX);
				me.__3.ggScrollByY(me.__3.ggDragInertiaY);
				if (Math.abs(me.__3.ggDragInertiaX) < 1.0 && Math.abs(me.__3.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__3__content.onmouseup = null;
			me.__3__content.onmousemove = null;
			me.__3__content.ontouchend = null;
			me.__3__content.ontouchmove = null;
			me.__3__content.onpointerup = null;
			me.__3__content.onpointermove = null;
			setTimeout(function() { me.__3.ggIsDragging = false; }, 100);
		}
		me.__3__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__3.ggDragStartX) > 10 || Math.abs(eventY - me.__3.ggDragStartY) > 10) me.__3.ggIsDragging = true;
			var diffX = (eventX - me.__3.ggDragLastX) * me.__3.ggHPercentVisible;
			var diffY = (eventY - me.__3.ggDragLastY) * me.__3.ggVPercentVisible;
			me.__3.ggDragInertiaX = -diffX;
			me.__3.ggDragInertiaY = -diffY;
			me.__3.ggDragLastX = eventX;
			me.__3.ggDragLastY = eventY;
			me.__3.ggScrollByX(-diffX);
			me.__3.ggScrollByY(-diffY);
		}
		me.__3__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__3.ggDragLastX = me.__3.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__3.ggDragLastY = me.__3.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__3__content.onmouseup = me.__3__content.mousetouchend;
			me.__3__content.ontouchend = me.__3__content.mousetouchend;
			me.__3__content.onmousemove = me.__3__content.mousetouchmove;
			me.__3__content.ontouchmove = me.__3__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__3__content.onpointerup = me.__3__content.ontouchend;
				me.__3__content.onpointermove = me.__3__content.ontouchmove;
			}
		}
		els.onmousedown = me.__3__content.mousetouchstart;
		els.ontouchstart = me.__3__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__3__content.mousetouchstart;
		}
		elVertScrollBg = me.__3__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__3__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__3.ggScrollPosY = 0;
		me.__3.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__3.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__3.ggDragInertiaY *= 0.65;
					me.__3.ggScrollByY(me.__3.ggDragInertiaY);
					if (Math.abs(me.__3.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__3.ggDragLastY;
				me.__3.ggDragInertiaY = diffY;
				me.__3.ggDragLastY = e.clientY;
				me.__3.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__3.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__3.ggDragInertiaY *= 0.65;
					me.__3.ggScrollByY(me.__3.ggDragInertiaY);
					if (Math.abs(me.__3.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me.__3.ggDragLastY;
				me.__3.ggDragInertiaY = diffY;
				me.__3.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__3.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__3.ggScrollHeight;
			if (e.offsetY < me.__3.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__3.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__3__vertScrollBg.getBoundingClientRect();
			var diffY = me.__3.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__3.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__3.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__3.ggScrollByYSmooth(30 * me.__3.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__3__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ub0a0\uc9dc\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
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
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_date') == true))
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
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__3.ggScrollPosY / me.__3.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__3__vertScrollBg.style.visibility = 'inherit';
				me.__3__vertScrollFg.style.visibility = 'inherit';
				me.__3.ggVertScrollVisible = true;
				if(me.__3.ggVertScrollVisible) {
					me.__3.ggAvailableWidth = me.__3.clientWidth - 2;
					if (me.__3.ggHorScrollVisible) {
						me.__3.ggAvailableHeight = me.__3.clientHeight - 2;
						me.__3.ggAvailableHeightWithScale = me.__3.getBoundingClientRect().height - me.__3__vertScrollBg.getBoundingClientRect().width;
						me.__3__cornerBg.style.visibility = 'inherit';
					} else {
						me.__3.ggAvailableHeight = me.__3.clientHeight;
						me.__3.ggAvailableHeightWithScale = me.__3.getBoundingClientRect().height;
						me.__3__cornerBg.style.visibility = 'hidden';
					}
					me.__3__vertScrollBg.style.height = me.__3.ggAvailableHeight + 'px';
					me.__3.ggVPercentVisible = contentHeight != 0 ? me.__3.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__3.ggVPercentVisible > 1.0) me.__3.ggVPercentVisible = 1.0;
					me.__3.ggScrollHeight =  Math.round(me.__3__vertScrollBg.offsetHeight * me.__3.ggVPercentVisible);
					me.__3__vertScrollFg.style.height = me.__3.ggScrollHeight + 'px';
					me.__3.ggScrollPosY = me.__3.ggScrollPosYPercent * me.__3.ggAvailableHeight;
					me.__3.ggScrollPosY = Math.min(me.__3.ggScrollPosY, me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
					me.__3__vertScrollFg.style.top = me.__3.ggScrollPosY + 'px';
					if (me.__3.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__3.ggScrollPosY / (me.__3__vertScrollBg.offsetHeight - me.__3__vertScrollFg.offsetHeight);
						me.__3__content.style.top = -(Math.round((me.__3.ggContentHeight * (1.0 - me.__3.ggVPercentVisible)) * percentScrolled)) + me.__3.ggContentTopOffset + 'px';
					}
				} else {
					me.__3.ggAvailableWidth = me.__3.clientWidth;
					me.__3.ggScrollPosY = 0;
					me.__3.ggScrollPosYPercent = 0.0;
					me.__3__content.style.top = this.ggContentTopOffset + 'px';
					me.__3__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__3.ggHorScrollVisible || vertScrollWasVisible != me.__3.ggVertScrollVisible) {
					skin.updateSize(me.__3);
					me.__3.ggUpdatePosition();
				}
			}
		}
		el=me.__4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub0a0\uc9dc\ubc15\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 103.5;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1월";
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
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
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._cloner_1.ggUpdate();
		}
		me.__4.appendChild(me._cloner_1);
		me.__3__content.appendChild(me.__4);
		me.__2.appendChild(me.__3);
		el=me.__10=document.createElement('div');
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
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
		me.__10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		player.addListener('changenode', function() {
			me.__10.ggUpdateText();
		});
		el.appendChild(els);
		me.__10.ggIsActive=function() {
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
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_date') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.onclick=function (e) {
			player.setVariableValue('vis_date', !player.getVariableValue('vis_date'));
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
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
		el.ggId="up";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
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
		me._up.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uc120-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
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
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me._up.appendChild(me.__20);
		me.__10.appendChild(me._up);
		me.__2.appendChild(me.__10);
		me._rectangle_1.appendChild(me.__2);
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc6d4";
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uc6d4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		el.appendChild(els);
		me.__0.ggIsActive=function() {
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
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc120";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
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
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__1);
		me._rectangle_1.appendChild(me.__0);
		me._info.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._info);
		el=me.__=document.createElement('div');
		el.ggId="\ud558\ub2e8\uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
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
		el=me._infom=document.createElement('div');
		el.ggId="\uace0\uac1dinfo-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 130px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
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
		hs+='border-radius : 0px 0px 0px 0px;';
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
		el=me.__m=document.createElement('div');
		el.ggId="\uace0\uac1d\uc815\ubcf4 \ucee8\ud14c\uc774\ub108-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m.ggIsActive=function() {
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
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m9=document.createElement('div');
		el.ggId="\ud604\uc7a5\uc120\ud0dd\ucee8\ud14c\uc774\ub108-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m9.ggIsActive=function() {
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
		me._m9.onclick=function (e) {
			player.setVariableValue('vis_address', true);
		}
		me._m9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m1=document.createElement('div');
		els=me.__m1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uc7a5 \uc120\ud0dd-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uc7a5\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m1.ggUpdateText();
		el.appendChild(els);
		me.__m1.ggIsActive=function() {
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
		me.__m1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m1.style.transition='';
				if (me.__m1.ggCurrentLogicStateVisible == 0) {
					me.__m1.style.visibility=(Number(me.__m1.style.opacity)>0||!me.__m1.style.opacity)?'inherit':'hidden';
					me.__m1.ggVisible=true;
				}
				else {
					me.__m1.style.visibility="hidden";
					me.__m1.ggVisible=false;
				}
			}
		}
		me.__m1.logicBlock_visible();
		me.__m1.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_dateaddress') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__m1.ggCurrentLogicStateText != newLogicStateText) {
				me.__m1.ggCurrentLogicStateText = newLogicStateText;
				me.__m1.style.transition='';
				if (me.__m1.ggCurrentLogicStateText == 0) {
					if (me.__m1.ggUpdateText) {
					me.__m1.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__m1.ggUpdateText();
					} else {
						if (me.__m1.ggUpdatePosition) me.__m1.ggUpdatePosition();
					}
				}
				else {
					if (me.__m1.ggUpdateText) {
					me.__m1.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ud604\uc7a5\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__m1.ggUpdateText();
					} else {
						if (me.__m1.ggUpdatePosition) me.__m1.ggUpdatePosition();
					}
				}
			}
		}
		me.__m1.logicBlock_text();
		me.__m1.ggUpdatePosition=function (useTransition) {
		}
		me._m9.appendChild(me.__m1);
		el=me._up2m=document.createElement('div');
		els=me._up2m__img=document.createElement('img');
		els.className='ggskin ggskin_up2m';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
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
		el.ggId="up-2-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up2m.ggIsActive=function() {
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
		me._up2m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up2m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up2m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up2m.style.transition='';
				if (me._up2m.ggCurrentLogicStateVisible == 0) {
					me._up2m.style.visibility="hidden";
					me._up2m.ggVisible=false;
				}
				else {
					me._up2m.style.visibility=(Number(me._up2m.style.opacity)>0||!me._up2m.style.opacity)?'inherit':'hidden';
					me._up2m.ggVisible=true;
				}
			}
		}
		me._up2m.logicBlock_visible();
		me._up2m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3m=document.createElement('div');
		el.ggId="\uc120-3-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3m.ggIsActive=function() {
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
		me.__3m.ggUpdatePosition=function (useTransition) {
		}
		me._up2m.appendChild(me.__3m);
		me._m9.appendChild(me._up2m);
		me.__m.appendChild(me._m9);
		el=me.__m0=document.createElement('div');
		els=me.__m0__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 383px;';
		hs+="";
		els.setAttribute('style',hs);
		me.__m0.ggScrollByX = function(diffX) {
			if(!me.__m0.ggHorScrollVisible || diffX == 0 || me.__m0.ggHPercentVisible >= 1.0) return;
			me.__m0.ggScrollPosX = (me.__m0__horScrollFg.offsetLeft + diffX);
			me.__m0.ggScrollPosX = Math.max(me.__m0.ggScrollPosX, 0);
			me.__m0.ggScrollPosX = Math.min(me.__m0.ggScrollPosX, me.__m0__horScrollBg.offsetWidth - me.__m0__horScrollFg.offsetWidth);
			me.__m0__horScrollFg.style.left = me.__m0.ggScrollPosX + 'px';
			let percentScrolled = me.__m0.ggScrollPosX / (me.__m0__horScrollBg.offsetWidth - me.__m0__horScrollFg.offsetWidth);
			me.__m0__content.style.left = -(Math.round((me.__m0.ggContentWidth * (1.0 - me.__m0.ggHPercentVisible)) * percentScrolled)) + me.__m0.ggContentLeftOffset + 'px';
			me.__m0.ggScrollPosXPercent = (me.__m0__horScrollFg.offsetLeft / me.__m0__horScrollBg.offsetWidth);
		}
		me.__m0.ggScrollByXSmooth = function(diffX) {
			if(!me.__m0.ggHorScrollVisible || diffX == 0 || me.__m0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me.__m0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me.__m0.ggScrollPosX >= me.__m0__horScrollBg.offsetWidth - me.__m0__horScrollFg.offsetWidth)) {
					me.__m0.ggScrollPosX = Math.min(me.__m0.ggScrollPosX, me.__m0__horScrollBg.offsetWidth - me.__m0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me.__m0.ggScrollPosX <= 0)) {
					me.__m0.ggScrollPosX = Math.max(me.__m0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me.__m0__horScrollFg.style.left = me.__m0.ggScrollPosX + 'px';
			let percentScrolled = me.__m0.ggScrollPosX / (me.__m0__horScrollBg.offsetWidth - me.__m0__horScrollFg.offsetWidth);
			me.__m0__content.style.left = -(Math.round((me.__m0.ggContentWidth * (1.0 - me.__m0.ggHPercentVisible)) * percentScrolled)) + me.__m0.ggContentLeftOffset + 'px';
			me.__m0.ggScrollPosXPercent = (me.__m0__horScrollFg.offsetLeft / me.__m0__horScrollBg.offsetWidth);
			}, 10);
		}
		me.__m0.ggScrollByY = function(diffY) {
			if(!me.__m0.ggVertScrollVisible || diffY == 0 || me.__m0.ggVPercentVisible >= 1.0) return;
			me.__m0.ggScrollPosY = (me.__m0__vertScrollFg.offsetTop + diffY);
			me.__m0.ggScrollPosY = Math.max(me.__m0.ggScrollPosY, 0);
			me.__m0.ggScrollPosY = Math.min(me.__m0.ggScrollPosY, me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
			me.__m0__vertScrollFg.style.top = me.__m0.ggScrollPosY + 'px';
			let percentScrolled = me.__m0.ggScrollPosY / (me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
			me.__m0__content.style.top = -(Math.round((me.__m0.ggContentHeight * (1.0 - me.__m0.ggVPercentVisible)) * percentScrolled)) + me.__m0.ggContentTopOffset + 'px';
			me.__m0.ggScrollPosYPercent = (me.__m0__vertScrollFg.offsetTop / me.__m0__vertScrollBg.offsetHeight);
		}
		me.__m0.ggScrollByYSmooth = function(diffY) {
			if(!me.__m0.ggVertScrollVisible || diffY == 0 || me.__m0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me.__m0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me.__m0.ggScrollPosY >= me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight)) {
					me.__m0.ggScrollPosY = Math.min(me.__m0.ggScrollPosY, me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me.__m0.ggScrollPosY <= 0)) {
					me.__m0.ggScrollPosY = Math.max(me.__m0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me.__m0__vertScrollFg.style.top = me.__m0.ggScrollPosY + 'px';
			let percentScrolled = me.__m0.ggScrollPosY / (me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
			me.__m0__content.style.top = -(Math.round((me.__m0.ggContentHeight * (1.0 - me.__m0.ggVPercentVisible)) * percentScrolled)) + me.__m0.ggContentTopOffset + 'px';
			me.__m0.ggScrollPosYPercent = (me.__m0__vertScrollFg.offsetTop / me.__m0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me.__m0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me.__m0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me.__m0.ggHPercentVisible);
					me.__m0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me.__m0.clientWidth - (me.__m0.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me.__m0.clientWidth - (me.__m0.ggVertScrollVisible ? 2 : 0))) * me.__m0.ggHPercentVisible);
					me.__m0.ggScrollByXSmooth(diffX);
				}
			}
			if (me.__m0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me.__m0.ggVPercentVisible);
					me.__m0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me.__m0.clientHeight - (me.__m0.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me.__m0.clientHeight - (me.__m0.ggHorScrollVisible ? 2 : 0))) * me.__m0.ggVPercentVisible);
					me.__m0.ggScrollByYSmooth(diffY);
				}
			}
		}
		me.__m0__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me.__m0.ggDragInertiaX *= 0.65;
				me.__m0.ggDragInertiaY *= 0.65;
				me.__m0.ggScrollByX(me.__m0.ggDragInertiaX);
				me.__m0.ggScrollByY(me.__m0.ggDragInertiaY);
				if (Math.abs(me.__m0.ggDragInertiaX) < 1.0 && Math.abs(me.__m0.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me.__m0__content.onmouseup = null;
			me.__m0__content.onmousemove = null;
			me.__m0__content.ontouchend = null;
			me.__m0__content.ontouchmove = null;
			me.__m0__content.onpointerup = null;
			me.__m0__content.onpointermove = null;
			setTimeout(function() { me.__m0.ggIsDragging = false; }, 100);
		}
		me.__m0__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me.__m0.ggDragStartX) > 10 || Math.abs(eventY - me.__m0.ggDragStartY) > 10) me.__m0.ggIsDragging = true;
			var diffX = (eventX - me.__m0.ggDragLastX) * me.__m0.ggHPercentVisible;
			var diffY = (eventY - me.__m0.ggDragLastY) * me.__m0.ggVPercentVisible;
			me.__m0.ggDragInertiaX = -diffX;
			me.__m0.ggDragInertiaY = -diffY;
			me.__m0.ggDragLastX = eventX;
			me.__m0.ggDragLastY = eventY;
			me.__m0.ggScrollByX(-diffX);
			me.__m0.ggScrollByY(-diffY);
		}
		me.__m0__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me.__m0.ggDragLastX = me.__m0.ggDragStartX = t ? t[0].clientX : e.clientX;
			me.__m0.ggDragLastY = me.__m0.ggDragStartY = t ? t[0].clientY : e.clientY;
			me.__m0__content.onmouseup = me.__m0__content.mousetouchend;
			me.__m0__content.ontouchend = me.__m0__content.mousetouchend;
			me.__m0__content.onmousemove = me.__m0__content.mousetouchmove;
			me.__m0__content.ontouchmove = me.__m0__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me.__m0__content.onpointerup = me.__m0__content.ontouchend;
				me.__m0__content.onpointermove = me.__m0__content.ontouchmove;
			}
		}
		els.onmousedown = me.__m0__content.mousetouchstart;
		els.ontouchstart = me.__m0__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me.__m0__content.mousetouchstart;
		}
		elVertScrollBg = me.__m0__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me.__m0__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me.__m0.ggScrollPosY = 0;
		me.__m0.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me.__m0.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me.__m0.ggDragInertiaY *= 0.65;
					me.__m0.ggScrollByY(me.__m0.ggDragInertiaY);
					if (Math.abs(me.__m0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me.__m0.ggDragLastY;
				me.__m0.ggDragInertiaY = diffY;
				me.__m0.ggDragLastY = e.clientY;
				me.__m0.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me.__m0.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me.__m0.ggDragInertiaY *= 0.65;
					me.__m0.ggScrollByY(me.__m0.ggDragInertiaY);
					if (Math.abs(me.__m0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me.__m0.ggDragLastY;
				me.__m0.ggDragInertiaY = diffY;
				me.__m0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me.__m0.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me.__m0.ggScrollHeight;
			if (e.offsetY < me.__m0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__m0.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me.__m0__vertScrollBg.getBoundingClientRect();
			var diffY = me.__m0.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me.__m0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me.__m0.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me.__m0.ggScrollByYSmooth(30 * me.__m0.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me.__m0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\uace0\uac1d\uc815\ubcf4 \uc2a4\ud06c\ub864-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m0.ggIsActive=function() {
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
		me.__m0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_address') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m0.style.transition='';
				if (me.__m0.ggCurrentLogicStateVisible == 0) {
					me.__m0.style.visibility=(Number(me.__m0.style.opacity)>0||!me.__m0.style.opacity)?'inherit':'hidden';
					me.__m0.ggVisible=true;
				}
				else {
					me.__m0.style.visibility="hidden";
					me.__m0.ggVisible=false;
				}
			}
		}
		me.__m0.logicBlock_visible();
		me.__m0.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me.__m0.ggScrollPosY / me.__m0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me.__m0__vertScrollBg.style.visibility = 'inherit';
				me.__m0__vertScrollFg.style.visibility = 'inherit';
				me.__m0.ggVertScrollVisible = true;
				if(me.__m0.ggVertScrollVisible) {
					me.__m0.ggAvailableWidth = me.__m0.clientWidth - 2;
					if (me.__m0.ggHorScrollVisible) {
						me.__m0.ggAvailableHeight = me.__m0.clientHeight - 2;
						me.__m0.ggAvailableHeightWithScale = me.__m0.getBoundingClientRect().height - me.__m0__vertScrollBg.getBoundingClientRect().width;
						me.__m0__cornerBg.style.visibility = 'inherit';
					} else {
						me.__m0.ggAvailableHeight = me.__m0.clientHeight;
						me.__m0.ggAvailableHeightWithScale = me.__m0.getBoundingClientRect().height;
						me.__m0__cornerBg.style.visibility = 'hidden';
					}
					me.__m0__vertScrollBg.style.height = me.__m0.ggAvailableHeight + 'px';
					me.__m0.ggVPercentVisible = contentHeight != 0 ? me.__m0.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me.__m0.ggVPercentVisible > 1.0) me.__m0.ggVPercentVisible = 1.0;
					me.__m0.ggScrollHeight =  Math.round(me.__m0__vertScrollBg.offsetHeight * me.__m0.ggVPercentVisible);
					me.__m0__vertScrollFg.style.height = me.__m0.ggScrollHeight + 'px';
					me.__m0.ggScrollPosY = me.__m0.ggScrollPosYPercent * me.__m0.ggAvailableHeight;
					me.__m0.ggScrollPosY = Math.min(me.__m0.ggScrollPosY, me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
					me.__m0__vertScrollFg.style.top = me.__m0.ggScrollPosY + 'px';
					if (me.__m0.ggVPercentVisible < 1.0) {
						let percentScrolled = me.__m0.ggScrollPosY / (me.__m0__vertScrollBg.offsetHeight - me.__m0__vertScrollFg.offsetHeight);
						me.__m0__content.style.top = -(Math.round((me.__m0.ggContentHeight * (1.0 - me.__m0.ggVPercentVisible)) * percentScrolled)) + me.__m0.ggContentTopOffset + 'px';
					}
				} else {
					me.__m0.ggAvailableWidth = me.__m0.clientWidth;
					me.__m0.ggScrollPosY = 0;
					me.__m0.ggScrollPosYPercent = 0.0;
					me.__m0__content.style.top = this.ggContentTopOffset + 'px';
					me.__m0__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me.__m0.ggHorScrollVisible || vertScrollWasVisible != me.__m0.ggVertScrollVisible) {
					skin.updateSize(me.__m0);
					me.__m0.ggUpdatePosition();
				}
			}
		}
		el=me._m4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uace0\uac1d\uc815\ubcf4\ubc15\uc2a4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m4.ggIsActive=function() {
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
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__15_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 384;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__15_m.ggUpdating == true) return;
			me.__15_m.ggUpdating = true;
			var el=me.__15_m;
			var curNumCols = 0;
			curNumCols = me.__15_m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__15_m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__15_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__15_m.getFilteredNodes(tourNodes, filter);
			me.__15_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__15_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__15_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__15_m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__15_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__15_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__15_m.ggNodeCount = me.__15_m.ggNumFilterPassed;
			me.__15_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__15_m.parentNode && me.__15_m.parentNode.classList.contains('ggskin_subelement') && me.__15_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__15_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "15일";
		el.ggId="15\uc77c \uc8fc\uc18c\uc815\ubcf4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15_m.ggIsActive=function() {
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
		me.__15_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("15\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15_m.style.transition='';
				if (me.__15_m.ggCurrentLogicStateVisible == 0) {
					me.__15_m.style.visibility=(Number(me.__15_m.style.opacity)>0||!me.__15_m.style.opacity)?'inherit':'hidden';
					me.__15_m.ggVisible=true;
				}
				else {
					me.__15_m.style.visibility="hidden";
					me.__15_m.ggVisible=false;
				}
			}
		}
		me.__15_m.logicBlock_visible();
		me.__15_m.ggCurrentLogicStateVisible = -1;
		me.__15_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__15_m.childNodes.length; i++) {
				var child=me.__15_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__15_m.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__15_m.ggUpdate();
		}
		me._m4.appendChild(me.__15_m);
		el=me.__16_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__16_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 384;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__16_m.ggUpdating == true) return;
			me.__16_m.ggUpdating = true;
			var el=me.__16_m;
			var curNumCols = 0;
			curNumCols = me.__16_m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__16_m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__16_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__16_m.getFilteredNodes(tourNodes, filter);
			me.__16_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__16_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__16_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__16_m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__16_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__16_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__16_m.ggNodeCount = me.__16_m.ggNumFilterPassed;
			me.__16_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__16_m.parentNode && me.__16_m.parentNode.classList.contains('ggskin_subelement') && me.__16_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__16_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "16일";
		el.ggId="16\uc77c \uc8fc\uc18c\uc815\ubcf4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16_m.ggIsActive=function() {
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
		me.__16_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("16\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16_m.style.transition='';
				if (me.__16_m.ggCurrentLogicStateVisible == 0) {
					me.__16_m.style.visibility=(Number(me.__16_m.style.opacity)>0||!me.__16_m.style.opacity)?'inherit':'hidden';
					me.__16_m.ggVisible=true;
				}
				else {
					me.__16_m.style.visibility="hidden";
					me.__16_m.ggVisible=false;
				}
			}
		}
		me.__16_m.logicBlock_visible();
		me.__16_m.ggCurrentLogicStateVisible = -1;
		me.__16_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__16_m.childNodes.length; i++) {
				var child=me.__16_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__16_m.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__16_m.ggUpdate();
		}
		me._m4.appendChild(me.__16_m);
		el=me.__17_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__17_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 384;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__17_m.ggUpdating == true) return;
			me.__17_m.ggUpdating = true;
			var el=me.__17_m;
			var curNumCols = 0;
			curNumCols = me.__17_m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__17_m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__17_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__17_m.getFilteredNodes(tourNodes, filter);
			me.__17_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__17_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__17_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__17_m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__17_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__17_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__17_m.ggNodeCount = me.__17_m.ggNumFilterPassed;
			me.__17_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__17_m.parentNode && me.__17_m.parentNode.classList.contains('ggskin_subelement') && me.__17_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__17_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "17일";
		el.ggId="17\uc77c \uc8fc\uc18c\uc815\ubcf4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17_m.ggIsActive=function() {
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
		me.__17_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("17\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17_m.style.transition='';
				if (me.__17_m.ggCurrentLogicStateVisible == 0) {
					me.__17_m.style.visibility=(Number(me.__17_m.style.opacity)>0||!me.__17_m.style.opacity)?'inherit':'hidden';
					me.__17_m.ggVisible=true;
				}
				else {
					me.__17_m.style.visibility="hidden";
					me.__17_m.ggVisible=false;
				}
			}
		}
		me.__17_m.logicBlock_visible();
		me.__17_m.ggCurrentLogicStateVisible = -1;
		me.__17_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__17_m.childNodes.length; i++) {
				var child=me.__17_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__17_m.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__17_m.ggUpdate();
		}
		me._m4.appendChild(me.__17_m);
		el=me.__18_m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18_m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 384;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18_m.ggUpdating == true) return;
			me.__18_m.ggUpdating = true;
			var el=me.__18_m;
			var curNumCols = 0;
			curNumCols = me.__18_m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18_m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18_m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18_m.getFilteredNodes(tourNodes, filter);
			me.__18_m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18_m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18_m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18_m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__18_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__18_m.ggNodeCount = me.__18_m.ggNumFilterPassed;
			me.__18_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18_m.parentNode && me.__18_m.parentNode.classList.contains('ggskin_subelement') && me.__18_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "18일";
		el.ggId="18\uc77c \uc8fc\uc18c\uc815\ubcf4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18_m.ggIsActive=function() {
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
		me.__18_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("18\uc77c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18_m.style.transition='';
				if (me.__18_m.ggCurrentLogicStateVisible == 0) {
					me.__18_m.style.visibility=(Number(me.__18_m.style.opacity)>0||!me.__18_m.style.opacity)?'inherit':'hidden';
					me.__18_m.ggVisible=true;
				}
				else {
					me.__18_m.style.visibility="hidden";
					me.__18_m.ggVisible=false;
				}
			}
		}
		me.__18_m.logicBlock_visible();
		me.__18_m.ggCurrentLogicStateVisible = -1;
		me.__18_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18_m.childNodes.length; i++) {
				var child=me.__18_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18_m.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__18_m.ggUpdate();
		}
		me._m4.appendChild(me.__18_m);
		me.__m0__content.appendChild(me._m4);
		me.__m.appendChild(me.__m0);
		me._rectangle_1m.appendChild(me.__m);
		el=me._m1=document.createElement('div');
		el.ggId="\ub0a0\uc9dc\ucee8\ud14c\uc774\ub108-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 13%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
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
		me._m1.onclick=function (e) {
			var flag=me._up.ggAngleActive;
			if (player.transitionsDisabled) {
				me._up.style.transition='none';
			} else {
				me._up.style.transition='all 0ms ease-out 0ms';
			}
			if (flag) {
				me._up.ggParameter.a=0;
			} else {
				me._up.ggParameter.a="180.0000";
			}
				me._up.style.transform=parameterToTransform(me._up.ggParameter);
			me._up.ggAngleActive=!flag;
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		els=me._m2__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 69px;';
		hs+="";
		els.setAttribute('style',hs);
		me._m2.ggScrollByX = function(diffX) {
			if(!me._m2.ggHorScrollVisible || diffX == 0 || me._m2.ggHPercentVisible >= 1.0) return;
			me._m2.ggScrollPosX = (me._m2__horScrollFg.offsetLeft + diffX);
			me._m2.ggScrollPosX = Math.max(me._m2.ggScrollPosX, 0);
			me._m2.ggScrollPosX = Math.min(me._m2.ggScrollPosX, me._m2__horScrollBg.offsetWidth - me._m2__horScrollFg.offsetWidth);
			me._m2__horScrollFg.style.left = me._m2.ggScrollPosX + 'px';
			let percentScrolled = me._m2.ggScrollPosX / (me._m2__horScrollBg.offsetWidth - me._m2__horScrollFg.offsetWidth);
			me._m2__content.style.left = -(Math.round((me._m2.ggContentWidth * (1.0 - me._m2.ggHPercentVisible)) * percentScrolled)) + me._m2.ggContentLeftOffset + 'px';
			me._m2.ggScrollPosXPercent = (me._m2__horScrollFg.offsetLeft / me._m2__horScrollBg.offsetWidth);
		}
		me._m2.ggScrollByXSmooth = function(diffX) {
			if(!me._m2.ggHorScrollVisible || diffX == 0 || me._m2.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._m2.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._m2.ggScrollPosX >= me._m2__horScrollBg.offsetWidth - me._m2__horScrollFg.offsetWidth)) {
					me._m2.ggScrollPosX = Math.min(me._m2.ggScrollPosX, me._m2__horScrollBg.offsetWidth - me._m2__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._m2.ggScrollPosX <= 0)) {
					me._m2.ggScrollPosX = Math.max(me._m2.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._m2__horScrollFg.style.left = me._m2.ggScrollPosX + 'px';
			let percentScrolled = me._m2.ggScrollPosX / (me._m2__horScrollBg.offsetWidth - me._m2__horScrollFg.offsetWidth);
			me._m2__content.style.left = -(Math.round((me._m2.ggContentWidth * (1.0 - me._m2.ggHPercentVisible)) * percentScrolled)) + me._m2.ggContentLeftOffset + 'px';
			me._m2.ggScrollPosXPercent = (me._m2__horScrollFg.offsetLeft / me._m2__horScrollBg.offsetWidth);
			}, 10);
		}
		me._m2.ggScrollByY = function(diffY) {
			if(!me._m2.ggVertScrollVisible || diffY == 0 || me._m2.ggVPercentVisible >= 1.0) return;
			me._m2.ggScrollPosY = (me._m2__vertScrollFg.offsetTop + diffY);
			me._m2.ggScrollPosY = Math.max(me._m2.ggScrollPosY, 0);
			me._m2.ggScrollPosY = Math.min(me._m2.ggScrollPosY, me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
			me._m2__vertScrollFg.style.top = me._m2.ggScrollPosY + 'px';
			let percentScrolled = me._m2.ggScrollPosY / (me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
			me._m2__content.style.top = -(Math.round((me._m2.ggContentHeight * (1.0 - me._m2.ggVPercentVisible)) * percentScrolled)) + me._m2.ggContentTopOffset + 'px';
			me._m2.ggScrollPosYPercent = (me._m2__vertScrollFg.offsetTop / me._m2__vertScrollBg.offsetHeight);
		}
		me._m2.ggScrollByYSmooth = function(diffY) {
			if(!me._m2.ggVertScrollVisible || diffY == 0 || me._m2.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._m2.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._m2.ggScrollPosY >= me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight)) {
					me._m2.ggScrollPosY = Math.min(me._m2.ggScrollPosY, me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._m2.ggScrollPosY <= 0)) {
					me._m2.ggScrollPosY = Math.max(me._m2.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._m2__vertScrollFg.style.top = me._m2.ggScrollPosY + 'px';
			let percentScrolled = me._m2.ggScrollPosY / (me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
			me._m2__content.style.top = -(Math.round((me._m2.ggContentHeight * (1.0 - me._m2.ggVPercentVisible)) * percentScrolled)) + me._m2.ggContentTopOffset + 'px';
			me._m2.ggScrollPosYPercent = (me._m2__vertScrollFg.offsetTop / me._m2__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._m2.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._m2.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._m2.ggHPercentVisible);
					me._m2.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._m2.clientWidth - (me._m2.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._m2.clientWidth - (me._m2.ggVertScrollVisible ? 2 : 0))) * me._m2.ggHPercentVisible);
					me._m2.ggScrollByXSmooth(diffX);
				}
			}
			if (me._m2.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._m2.ggVPercentVisible);
					me._m2.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._m2.clientHeight - (me._m2.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._m2.clientHeight - (me._m2.ggHorScrollVisible ? 2 : 0))) * me._m2.ggVPercentVisible);
					me._m2.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._m2__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._m2.ggDragInertiaX *= 0.65;
				me._m2.ggDragInertiaY *= 0.65;
				me._m2.ggScrollByX(me._m2.ggDragInertiaX);
				me._m2.ggScrollByY(me._m2.ggDragInertiaY);
				if (Math.abs(me._m2.ggDragInertiaX) < 1.0 && Math.abs(me._m2.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._m2__content.onmouseup = null;
			me._m2__content.onmousemove = null;
			me._m2__content.ontouchend = null;
			me._m2__content.ontouchmove = null;
			me._m2__content.onpointerup = null;
			me._m2__content.onpointermove = null;
			setTimeout(function() { me._m2.ggIsDragging = false; }, 100);
		}
		me._m2__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._m2.ggDragStartX) > 10 || Math.abs(eventY - me._m2.ggDragStartY) > 10) me._m2.ggIsDragging = true;
			var diffX = (eventX - me._m2.ggDragLastX) * me._m2.ggHPercentVisible;
			var diffY = (eventY - me._m2.ggDragLastY) * me._m2.ggVPercentVisible;
			me._m2.ggDragInertiaX = -diffX;
			me._m2.ggDragInertiaY = -diffY;
			me._m2.ggDragLastX = eventX;
			me._m2.ggDragLastY = eventY;
			me._m2.ggScrollByX(-diffX);
			me._m2.ggScrollByY(-diffY);
		}
		me._m2__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._m2.ggDragLastX = me._m2.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._m2.ggDragLastY = me._m2.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._m2__content.onmouseup = me._m2__content.mousetouchend;
			me._m2__content.ontouchend = me._m2__content.mousetouchend;
			me._m2__content.onmousemove = me._m2__content.mousetouchmove;
			me._m2__content.ontouchmove = me._m2__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._m2__content.onpointerup = me._m2__content.ontouchend;
				me._m2__content.onpointermove = me._m2__content.ontouchmove;
			}
		}
		els.onmousedown = me._m2__content.mousetouchstart;
		els.ontouchstart = me._m2__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._m2__content.mousetouchstart;
		}
		elVertScrollBg = me._m2__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._m2__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 50px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._m2.ggScrollPosY = 0;
		me._m2.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._m2.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._m2.ggDragInertiaY *= 0.65;
					me._m2.ggScrollByY(me._m2.ggDragInertiaY);
					if (Math.abs(me._m2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._m2.ggDragLastY;
				me._m2.ggDragInertiaY = diffY;
				me._m2.ggDragLastY = e.clientY;
				me._m2.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._m2.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._m2.ggDragInertiaY *= 0.65;
					me._m2.ggScrollByY(me._m2.ggDragInertiaY);
					if (Math.abs(me._m2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._m2.ggDragLastY;
				me._m2.ggDragInertiaY = diffY;
				me._m2.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._m2.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._m2.ggScrollHeight;
			if (e.offsetY < me._m2.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._m2.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._m2__vertScrollBg.getBoundingClientRect();
			var diffY = me._m2.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._m2.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._m2.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._m2.ggScrollByYSmooth(30 * me._m2.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._m2__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ub0a0\uc9dc\uc2a4\ud06c\ub864-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m2.ggIsActive=function() {
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
		me._m2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_date') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m2.style.transition='';
				if (me._m2.ggCurrentLogicStateVisible == 0) {
					me._m2.style.visibility=(Number(me._m2.style.opacity)>0||!me._m2.style.opacity)?'inherit':'hidden';
					me._m2.ggVisible=true;
				}
				else {
					me._m2.style.visibility="hidden";
					me._m2.ggVisible=false;
				}
			}
		}
		me._m2.logicBlock_visible();
		me._m2.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._m2.ggScrollPosY / me._m2.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._m2__vertScrollBg.style.visibility = 'inherit';
				me._m2__vertScrollFg.style.visibility = 'inherit';
				me._m2.ggVertScrollVisible = true;
				if(me._m2.ggVertScrollVisible) {
					me._m2.ggAvailableWidth = me._m2.clientWidth - 2;
					if (me._m2.ggHorScrollVisible) {
						me._m2.ggAvailableHeight = me._m2.clientHeight - 2;
						me._m2.ggAvailableHeightWithScale = me._m2.getBoundingClientRect().height - me._m2__vertScrollBg.getBoundingClientRect().width;
						me._m2__cornerBg.style.visibility = 'inherit';
					} else {
						me._m2.ggAvailableHeight = me._m2.clientHeight;
						me._m2.ggAvailableHeightWithScale = me._m2.getBoundingClientRect().height;
						me._m2__cornerBg.style.visibility = 'hidden';
					}
					me._m2__vertScrollBg.style.height = me._m2.ggAvailableHeight + 'px';
					me._m2.ggVPercentVisible = contentHeight != 0 ? me._m2.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._m2.ggVPercentVisible > 1.0) me._m2.ggVPercentVisible = 1.0;
					me._m2.ggScrollHeight =  Math.round(me._m2__vertScrollBg.offsetHeight * me._m2.ggVPercentVisible);
					me._m2__vertScrollFg.style.height = me._m2.ggScrollHeight + 'px';
					me._m2.ggScrollPosY = me._m2.ggScrollPosYPercent * me._m2.ggAvailableHeight;
					me._m2.ggScrollPosY = Math.min(me._m2.ggScrollPosY, me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
					me._m2__vertScrollFg.style.top = me._m2.ggScrollPosY + 'px';
					if (me._m2.ggVPercentVisible < 1.0) {
						let percentScrolled = me._m2.ggScrollPosY / (me._m2__vertScrollBg.offsetHeight - me._m2__vertScrollFg.offsetHeight);
						me._m2__content.style.top = -(Math.round((me._m2.ggContentHeight * (1.0 - me._m2.ggVPercentVisible)) * percentScrolled)) + me._m2.ggContentTopOffset + 'px';
					}
				} else {
					me._m2.ggAvailableWidth = me._m2.clientWidth;
					me._m2.ggScrollPosY = 0;
					me._m2.ggScrollPosYPercent = 0.0;
					me._m2__content.style.top = this.ggContentTopOffset + 'px';
					me._m2__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._m2.ggHorScrollVisible || vertScrollWasVisible != me._m2.ggVertScrollVisible) {
					skin.updateSize(me._m2);
					me._m2.ggUpdatePosition();
				}
			}
		}
		el=me._m3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub0a0\uc9dc\ubc15\uc2a4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
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
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 70;
		el.ggHeight = 50;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1m.ggUpdating == true) return;
			me._cloner_1m.ggUpdating = true;
			var el=me._cloner_1m;
			var curNumCols = 0;
			curNumCols = me._cloner_1m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1m.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1m.getFilteredNodes(tourNodes, filter);
			me._cloner_1m.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1m.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1m.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._cloner_1m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1m.ggNodeCount = me._cloner_1m.ggNumFilterPassed;
			me._cloner_1m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1m.parentNode && me._cloner_1m.parentNode.classList.contains('ggskin_subelement') && me._cloner_1m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1월";
		el.ggId="Cloner 1-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1m.ggIsActive=function() {
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
		me._cloner_1m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1m.childNodes.length; i++) {
				var child=me._cloner_1m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1m.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._cloner_1m.ggUpdate();
		}
		me._m3.appendChild(me._cloner_1m);
		me._m2__content.appendChild(me._m3);
		me._m1.appendChild(me._m2);
		el=me.__1m=document.createElement('div');
		els=me.__1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1\uc77c-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
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
		me.__1m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m.ggUpdateText();
		player.addListener('changenode', function() {
			me.__1m.ggUpdateText();
		});
		el.appendChild(els);
		me.__1m.ggIsActive=function() {
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
		me.__1m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_date') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1m.style.transition='';
				if (me.__1m.ggCurrentLogicStateVisible == 0) {
					me.__1m.style.visibility=(Number(me.__1m.style.opacity)>0||!me.__1m.style.opacity)?'inherit':'hidden';
					me.__1m.ggVisible=true;
				}
				else {
					me.__1m.style.visibility="hidden";
					me.__1m.ggVisible=false;
				}
			}
		}
		me.__1m.logicBlock_visible();
		me.__1m.onclick=function (e) {
			player.setVariableValue('vis_date', !player.getVariableValue('vis_date'));
		}
		me.__1m.ggUpdatePosition=function (useTransition) {
		}
		el=me._upm=document.createElement('div');
		els=me._upm__img=document.createElement('img');
		els.className='ggskin ggskin_upm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
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
		el.ggId="up-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._upm.ggIsActive=function() {
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
		me._upm.ggUpdatePosition=function (useTransition) {
		}
		me.__1m.appendChild(me._upm);
		me._m1.appendChild(me.__1m);
		el=me.__2m=document.createElement('div');
		el.ggId="\uc120-2-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2m.ggIsActive=function() {
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
		me.__2m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_date') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2m.style.transition='';
				if (me.__2m.ggCurrentLogicStateVisible == 0) {
					me.__2m.style.visibility=(Number(me.__2m.style.opacity)>0||!me.__2m.style.opacity)?'inherit':'hidden';
					me.__2m.ggVisible=true;
				}
				else {
					me.__2m.style.visibility="hidden";
					me.__2m.ggVisible=false;
				}
			}
		}
		me.__2m.logicBlock_visible();
		me.__2m.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me.__2m);
		me._rectangle_1m.appendChild(me._m1);
		el=me._m=document.createElement('div');
		els=me._m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc6d4-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m.ggUpdateText=function() {
			var params = [];
			var hs = player._("1\uc6d4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m.ggUpdateText();
		el.appendChild(els);
		me._m.ggIsActive=function() {
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
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m0=document.createElement('div');
		el.ggId="\uc120-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(102,102,102,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 1px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
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
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me._m0);
		me._rectangle_1m.appendChild(me._m);
		me._infom.appendChild(me._rectangle_1m);
		me.divSkin.appendChild(me._infom);
		me.__19.logicBlock_visible();
		me.__18.logicBlock_visible();
		me.__17.logicBlock_visible();
		me.__17.logicBlock_text();
		me.__16.logicBlock_visible();
		me._info.logicBlock_visible();
		me.__14.logicBlock_visible();
		me.__14.logicBlock_text();
		me._up2.logicBlock_visible();
		me.__6.logicBlock_visible();
		me.__15_.logicBlock_visible();
		me.__16_.logicBlock_visible();
		me.__17_.logicBlock_visible();
		me.__18_.logicBlock_visible();
		me.__3.logicBlock_visible();
		me.__10.logicBlock_visible();
		me._infom.logicBlock_visible();
		me.__m1.logicBlock_visible();
		me.__m1.logicBlock_text();
		me._up2m.logicBlock_visible();
		me.__m0.logicBlock_visible();
		me.__15_m.logicBlock_visible();
		me.__16_m.logicBlock_visible();
		me.__17_m.logicBlock_visible();
		me.__18_m.logicBlock_visible();
		me._m2.logicBlock_visible();
		me.__1m.logicBlock_visible();
		me.__2m.logicBlock_visible();
		player.addListener('changenode', function(event) {
			me.__19.logicBlock_visible();
			me.__18.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__17.logicBlock_text();
			me.__16.logicBlock_visible();
			me.__14.logicBlock_visible();
			me.__14.logicBlock_text();
			me._up2.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__15_.logicBlock_visible();
			me.__15_.ggUpdateConditionNodeChange();
			me.__16_.logicBlock_visible();
			me.__16_.ggUpdateConditionNodeChange();
			me.__17_.logicBlock_visible();
			me.__17_.ggUpdateConditionNodeChange();
			me.__18_.logicBlock_visible();
			me.__18_.ggUpdateConditionNodeChange();
			me.__3.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__10.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m1.logicBlock_text();
			me._up2m.logicBlock_visible();
			me.__m0.logicBlock_visible();
			me.__15_m.logicBlock_visible();
			me.__15_m.ggUpdateConditionNodeChange();
			me.__16_m.logicBlock_visible();
			me.__16_m.ggUpdateConditionNodeChange();
			me.__17_m.logicBlock_visible();
			me.__17_m.ggUpdateConditionNodeChange();
			me.__18_m.logicBlock_visible();
			me.__18_m.ggUpdateConditionNodeChange();
			me._m2.logicBlock_visible();
			me._cloner_1m.ggUpdateConditionNodeChange();
			me.__1m.logicBlock_visible();
			me.__2m.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me.__19.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__17.logicBlock_text();
			me.__14.logicBlock_visible();
			me.__14.logicBlock_text();
			me._up2.logicBlock_visible();
			me.__6.ggUpdatePosition();
			me.__6.logicBlock_visible();
			me.__3.ggUpdatePosition();
			me.__3.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me.__m1.logicBlock_text();
			me._up2m.logicBlock_visible();
			me.__m0.ggUpdatePosition();
			me.__m0.logicBlock_visible();
			me._m2.ggUpdatePosition();
			me._m2.logicBlock_visible();
			me.__1m.logicBlock_visible();
			me.__2m.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._info.logicBlock_visible();
			me._infom.logicBlock_visible();
		});
		player.addListener('varchanged_vis_address', function(event) {
			me.__14.logicBlock_visible();
			me._up2.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__m1.logicBlock_visible();
			me._up2m.logicBlock_visible();
			me.__m0.logicBlock_visible();
		});
		player.addListener('varchanged_vis_copy', function(event) {
			me.__17.logicBlock_visible();
			me.__17.logicBlock_text();
		});
		player.addListener('varchanged_vis_date', function(event) {
			me.__3.logicBlock_visible();
			me.__10.logicBlock_visible();
			me._m2.logicBlock_visible();
			me.__1m.logicBlock_visible();
			me.__2m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_dateaddress', function(event) {
			me.__14.logicBlock_text();
			me.__m1.logicBlock_text();
		});
		player.addListener('varchanged_vis_home', function(event) {
			me.__19.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__15_.ggUpdate();
			me.__16_.ggUpdate();
			me.__17_.ggUpdate();
			me.__18_.ggUpdate();
			me._cloner_1.ggUpdate();
			me.__15_m.ggUpdate();
			me.__16_m.ggUpdate();
			me.__17_m.ggUpdate();
			me.__18_m.ggUpdate();
			me._cloner_1m.ggUpdate();
		});
	};
	function SkinCloner_cloner_1m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._text_1m=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_1m;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:35px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1m.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1m.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1m.ggUpdateText();
		});
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
		me._text_1m.onclick=function (e) {
			if (me._text_1m.isDragging()) return;
			player.setVariableValue('vis_date', false);
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_address', false);
			player.setVariableValue('vis_dateaddress', true);
		}
		me._text_1m.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._text_1m);
	};
	function SkinCloner__18_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._m5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m5.ggUpdateText();
		player.addListener('changenode', function() {
			me._m5.ggUpdateText();
		});
		el.appendChild(els);
		me._m5.ggIsActive=function() {
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
		me._m5.onclick=function (e) {
			if (me._m5.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._m5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._m5);
	};
	function SkinCloner__17_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._m6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m6.ggUpdateText();
		player.addListener('changenode', function() {
			me._m6.ggUpdateText();
		});
		el.appendChild(els);
		me._m6.ggIsActive=function() {
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
		me._m6.onclick=function (e) {
			if (me._m6.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._m6.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._m6);
	};
	function SkinCloner__16_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._m7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m7.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m7.ggUpdateText();
		player.addListener('changenode', function() {
			me._m7.ggUpdateText();
		});
		el.appendChild(els);
		me._m7.ggIsActive=function() {
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
		me._m7.onclick=function (e) {
			if (me._m7.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._m7.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._m7);
	};
	function SkinCloner__15_m_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._m8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m8.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m8.ggUpdateText();
		player.addListener('changenode', function() {
			me._m8.ggUpdateText();
		});
		el.appendChild(els);
		me._m8.ggIsActive=function() {
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
		me._m8.onclick=function (e) {
			if (me._m8.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._m8.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._m8);
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._text_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='line-height:35px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
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
		me._text_1.onclick=function (e) {
			if (me._text_1.isDragging()) return;
			player.setVariableValue('vis_date', false);
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_address', false);
			player.setVariableValue('vis_dateaddress', true);
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._text_1);
	};
	function SkinCloner__18__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__8.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__8.ggUpdateText();
		player.addListener('changenode', function() {
			me.__8.ggUpdateText();
		});
		el.appendChild(els);
		me.__8.ggIsActive=function() {
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
		me.__8.onclick=function (e) {
			if (me.__8.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__8);
	};
	function SkinCloner__17__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__9=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__9;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__9.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__9.ggUpdateText();
		player.addListener('changenode', function() {
			me.__9.ggUpdateText();
		});
		el.appendChild(els);
		me.__9.ggIsActive=function() {
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
		me.__9.onclick=function (e) {
			if (me.__9.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__9);
	};
	function SkinCloner__16__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11.ggUpdateText();
		player.addListener('changenode', function() {
			me.__11.ggUpdateText();
		});
		el.appendChild(els);
		me.__11.ggIsActive=function() {
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
		me.__11.onclick=function (e) {
			if (me.__11.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__11);
	};
	function SkinCloner__15__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__12=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__12;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,34,34,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		player.addListener('changenode', function() {
			me.__12.ggUpdateText();
		});
		el.appendChild(els);
		me.__12.ggIsActive=function() {
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
		me.__12.onclick=function (e) {
			if (me.__12.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__12);
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__18.ggUpdateConditionTimer();
		if (me.__18.ggLastIsActive!=me.__18.ggIsActive()) {
			me.__18.ggLastIsActive=me.__18.ggIsActive();
			if (me.__18.ggLastIsActive) {
				player.setVariableValue('vis_home', false);
			} else {
			}
		}
		me.__16.ggUpdateConditionTimer();
		if (me.__16.ggLastIsActive!=me.__16.ggIsActive()) {
			me.__16.ggLastIsActive=me.__16.ggIsActive();
			if (me.__16.ggLastIsActive) {
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