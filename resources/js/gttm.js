// JavaScript Document
// function htmlToElement(html) {
//     var template = document.createElement('template');
//     template.innerHTML = html;
//     return template.content.firstChild;
// }

// // setup cursor
AFRAME.registerComponent('cursor-listener', {
	init: function () {
		this.el.addEventListener('click', function (evt) {
			document.getElementById("myCursor").setAttribute('material', 'opacity', 0.8);
			document.getElementById("myCursor").setAttribute('geometry', 'primitive:ring; radiusInner: 0.0025; radiusOuter: 0.00375; thetaStart: 0; thetaLength: 360;');
			document.getElementById("myCursor").setAttribute('animation', '');
		});
		this.el.addEventListener('fusing', function (evt) {
			document.getElementById("myCursor").setAttribute('material', 'opacity', 0.2);
			document.getElementById("myCursor").setAttribute('animation', 'property:geometry.thetaLength; dur: 1000; easing: easeInOutSine; from: 0; to: 360');
		});
		this.el.addEventListener('mouseleave', function (evt) {
			document.getElementById("myCursor").setAttribute('material', 'opacity', 0.8);
			document.getElementById("myCursor").setAttribute('geometry', 'primitive:ring; radiusInner: 0.0025; radiusOuter: 0.00375; thetaStart: 0; thetaLength: 360;');
			document.getElementById("myCursor").setAttribute('animation', '');
		});
	}
});

// BEGIN BLURB VIEWING DELICIOUSNESS
AFRAME.registerComponent('blurbViewOpener', {

	schema: {
    	id_TitleCSS: {type: 'string'},
    	id_BlurbCSS: {type: 'string'},
    	positionString: {type: 'string'}
  	},

	init: function () {
		console.log("this phone was updated.")
		this.el.addEventListener('mouseenter', function (evt) {
			this.setAttribute('position', this.data.positionString);
			var titleCSS = document.getElementById(this.data.id_TitleCSS);
			titleCSS.setAttribute('visible', false);
			var blurbCSS = document.getElementById(this.data.id_BlurbCSS);
			blurbCSS.setAttribute('visible', true);
		});
		this.el.addEventListener('mouseleave', function (evt) {
			this.setAttribute('material', 'opacity', 1.0);
		});
	}
});

AFRAME.registerComponent('blurbViewCloser', {

	schema: {
		id_Artifact: {type: 'string'},
		id_TitleCSS: {type: 'string'},
		positionString: {type: 'string'}
	},

	init: function () {
		this.el.addEventListener('mouseleave', function (evt) {
			var seed = document.getElementById('seedPod');
			seedPod.setAttribute('position', this.data.positionString);
			var titleCSS = document.getElementById('seedTitleCSS');
			titleCSS.setAttribute('visible', true);
			var blurbCSS = document.getElementById('seedBlurbCSS');
			blurbCSS.setAttribute('visible', false);
		});
	}
});
// END BLURB VIEWING DELICIOUSNESS

// document.getElementById("myCursor").setAttribute('animation', 'property:geometry.thetaLength; dur: 1000; easing: easeInOutSine; from: 0; to: 360');



// This creates an event listener for box with ID "0" that causes the sky transparency to fade up to 100% over five seconds.


var place = "outside";
var room = document.getElementById("room");
var mysky = document.getElementById("sky");
var myQuad = document.getElementById("quad");
var myOuter = document.getElementById("outerRing");
var myMiddle = document.getElementById("middleRing");
var myInner = document.getElementById("innerRing");
var backPortol = document.getElementById("backPortal");
var seedPod = document.getElementById("seedPod");

room.addEventListener('click', function()
{
	"use strict";
	if (place==="outside"){
		place="inside";
	
	room.setAttribute('class',"unclickable");
	document.querySelector('a-entity').flushToDOM(true);
	
	//animation to pull user into room location
	
	var zoomup = document.createElement('a-animation');
	zoomup.setAttribute('id',"zoomUp");
	zoomup.setAttribute('attribute',"position");
	zoomup.setAttribute('dur',"5000");
	zoomup.setAttribute('delay','200');
	zoomup.setAttribute('to',"0 -74.5 0");
	
	//animation to fade in the outside world panorama
	
	var fadeUp = document.createElement('a-animation');
	fadeUp.setAttribute('id',"zoomUp");
	fadeUp.setAttribute('attribute',"opacity");
	fadeUp.setAttribute('dur',"200");
	fadeUp.setAttribute('to',"100");
	
	//animatioin to fade in the room panorama
	
	var roomFadeUp =document.createElement("a-animation");
	roomFadeUp.setAttribute('attribute',"opacity");
	roomFadeUp.setAttribute('dur',"200");
	roomFadeUp.setAttribute('delay','3300');
	roomFadeUp.setAttribute('to',"1");
		
	//fades seed up when entering room
		
	var fadeSeedUp=document.createElement("a-animation");
	fadeSeedUp.setAttribute('attribute',"opacity");
	fadeSeedUp.setAttribute('dur',"200");
	fadeSeedUp.setAttribute('delay','3300');
	fadeSeedUp.setAttribute('to',"1");	
	
	// animation to move portal down when entering room
	
	var fadeOuterPortalOut = document.createElement("a-animation");
	fadeOuterPortalOut.setAttribute('attribute',"opacity");
	fadeOuterPortalOut.setAttribute('dur',"200");
	fadeOuterPortalOut.setAttribute('delay','3300');
	fadeOuterPortalOut.setAttribute('to',"0");
	
	var fadeMiddlePortalOut = document.createElement("a-animation");
	fadeMiddlePortalOut.setAttribute('attribute',"opacity");
	fadeMiddlePortalOut.setAttribute('dur',"200");
	fadeMiddlePortalOut.setAttribute('delay','3300');
	fadeMiddlePortalOut.setAttribute('to',"0");
	
	var fadeInnerPortalOut = document.createElement("a-animation");
	fadeInnerPortalOut.setAttribute('attribute',"opacity");
	fadeInnerPortalOut.setAttribute('dur',"200");
	fadeInnerPortalOut.setAttribute('delay','3300');
	fadeInnerPortalOut.setAttribute('to',"0");
	
	var fadeOuterPortalUp = document.createElement("a-animation");
	fadeOuterPortalUp.setAttribute('attribute',"opacity");
	fadeOuterPortalUp.setAttribute('dur',"200");
	fadeOuterPortalUp.setAttribute('delay','5000');
	fadeOuterPortalUp.setAttribute('to',"1");
	
	var fadeMiddlePortalUp = document.createElement("a-animation");
	fadeMiddlePortalUp.setAttribute('attribute',"opacity");
	fadeMiddlePortalUp.setAttribute('dur',"200");
	fadeMiddlePortalUp.setAttribute('delay','5000');
	fadeMiddlePortalUp.setAttribute('to',"1");
	
	var fadeInnerPortalUp = document.createElement("a-animation");
	fadeInnerPortalUp.setAttribute('attribute',"opacity");
	fadeInnerPortalUp.setAttribute('dur',"200");
	fadeInnerPortalUp.setAttribute('delay','5000');
	fadeInnerPortalUp.setAttribute('to',"1");
	
	var scaleOuterPortalDown = document.createElement("a-animation");
	scaleOuterPortalDown.setAttribute('attribute',"scale");
	scaleOuterPortalDown.setAttribute('dur',"200");
	scaleOuterPortalDown.setAttribute('delay','3300');
	scaleOuterPortalDown.setAttribute('to',"0.5 0.5 0.5");
	
	var scaleMiddlePortalDown = document.createElement("a-animation");
	scaleMiddlePortalDown.setAttribute('attribute',"scale");
	scaleMiddlePortalDown.setAttribute('dur',"200");
	scaleMiddlePortalDown.setAttribute('delay','3300');
	scaleMiddlePortalDown.setAttribute('to',"0.5 0.5 0.5");
	
	var scaleInnerPortalDown = document.createElement("a-animation");
	scaleInnerPortalDown.setAttribute('attribute',"scale");
	scaleInnerPortalDown.setAttribute('dur',"200");
	scaleInnerPortalDown.setAttribute('delay','3300');
	scaleInnerPortalDown.setAttribute('to',"0.5 0.5 0.5");
	
	//Animation to scale portal for being inside room
	
	var moveOuterPortalDown = document.createElement("a-animation");
	moveOuterPortalDown.setAttribute('attribute',"position");
	moveOuterPortalDown.setAttribute('dur',"200");
	moveOuterPortalDown.setAttribute('delay','3300');
	moveOuterPortalDown.setAttribute('to',"0 -3 0");
	
	var moveMiddlePortalDown = document.createElement("a-animation");
	moveMiddlePortalDown.setAttribute('attribute',"position");
	moveMiddlePortalDown.setAttribute('dur',"200");
	moveMiddlePortalDown.setAttribute('delay','3300');
	moveMiddlePortalDown.setAttribute('to',"0 -3 0");
	
	var moveInnerPortalDown = document.createElement("a-animation");
	moveInnerPortalDown.setAttribute('attribute',"position");
	moveInnerPortalDown.setAttribute('dur',"200");
	moveInnerPortalDown.setAttribute('delay','3300');
	moveInnerPortalDown.setAttribute('to',"0 -3 0");
	
	var changeOuterMaterial = document.createElement("a-animation");
	changeOuterMaterial.setAttribute('attribute',"mtl");
	changeOuterMaterial.setAttribute('dur',"200");
	changeOuterMaterial.setAttribute('delay','3800');
	changeOuterMaterial.setAttribute('to',"white");
	
	var changeMiddleMaterial = document.createElement("a-animation");
	changeMiddleMaterial.setAttribute('attribute',"mtl");
	changeMiddleMaterial.setAttribute('dur',"200");
	changeMiddleMaterial.setAttribute('delay','3800');
	changeMiddleMaterial.setAttribute('to',"white");
	
	var changeInnerMaterial = document.createElement("a-animation");
	changeInnerMaterial.setAttribute('attribute',"mtl");
	changeInnerMaterial.setAttribute('dur',"200");
	changeInnerMaterial.setAttribute('delay','3800');
	changeInnerMaterial.setAttribute('to',"white");
	
	
	
	
	
	
	
	myQuad.appendChild(fadeUp);
	mysky.appendChild(zoomup);
	room.appendChild(roomFadeUp);
	myOuter.appendChild(scaleOuterPortalDown);
	myOuter.appendChild(moveOuterPortalDown);
	myMiddle.appendChild(scaleMiddlePortalDown);
	myMiddle.appendChild(moveMiddlePortalDown);
	myInner.appendChild(scaleInnerPortalDown);
	myInner.appendChild(moveInnerPortalDown);
	myOuter.appendChild(changeOuterMaterial);
	myMiddle.appendChild(changeMiddleMaterial);
	myInner.appendChild(changeInnerMaterial);
	myOuter.appendChild(fadeOuterPortalOut);
	myMiddle.appendChild(fadeMiddlePortalOut);
	myInner.appendChild(fadeInnerPortalOut);
	myOuter.appendChild(fadeOuterPortalUp);
	myMiddle.appendChild(fadeMiddlePortalUp);
	myInner.appendChild(fadeInnerPortalUp);
	seedPod.appendChild(fadeSeedUp);
	
	}
	
});


backPortol.addEventListener('click',function(){
	
	"use strict";
	
	
	//animation to pull user into room location
	
	var zoomdown = document.createElement('a-animation');
	zoomdown.setAttribute('id',"zoomUp");
	zoomdown.setAttribute('attribute',"position");
	zoomdown.setAttribute('dur',"5000");
	zoomdown.setAttribute('delay','200');
	zoomdown.setAttribute('to',"0 0 0");
	
	//animation to fade out the outside world panorama once you land back on earth
	
	var fadeUp = document.createElement('a-animation');
	fadeUp.setAttribute('id',"zoomUp");
	fadeUp.setAttribute('attribute',"opacity");
	fadeUp.setAttribute('delay','4000');
	fadeUp.setAttribute('dur',"200");
	fadeUp.setAttribute('to',"0");
	
	//animatioin to fade out the room panorama
	
	var roomFadeOut =document.createElement("a-animation");
	roomFadeOut.setAttribute('attribute',"opacity");
	roomFadeOut.setAttribute('dur',"200");
	roomFadeOut.setAttribute('delay','3300');
	roomFadeOut.setAttribute('to',"0");
	
	var fadeSeedDown=document.createElement("a-animation");
	fadeSeedDown.setAttribute('attribute',"opacity");
	fadeSeedDown.setAttribute('dur',"200");
	fadeSeedDown.setAttribute('delay','1000');
	fadeSeedDown.setAttribute('to',"0");	
	
	// animation to move portal down when entering room
	
	var fadeOuterPortalOut = document.createElement("a-animation");
	fadeOuterPortalOut.setAttribute('attribute',"opacity");
	fadeOuterPortalOut.setAttribute('dur',"200");
	fadeOuterPortalOut.setAttribute('delay','3300');
	fadeOuterPortalOut.setAttribute('to',"1");
	
	var fadeMiddlePortalOut = document.createElement("a-animation");
	fadeMiddlePortalOut.setAttribute('attribute',"opacity");
	fadeMiddlePortalOut.setAttribute('dur',"200");
	fadeMiddlePortalOut.setAttribute('delay','3300');
	fadeMiddlePortalOut.setAttribute('to',"1");
	
	var fadeInnerPortalOut = document.createElement("a-animation");
	fadeInnerPortalOut.setAttribute('attribute',"opacity");
	fadeInnerPortalOut.setAttribute('dur',"200");
	fadeInnerPortalOut.setAttribute('delay','3300');
	fadeInnerPortalOut.setAttribute('to',"1");
	
	var fadeOuterPortalUp = document.createElement("a-animation");
	fadeOuterPortalUp.setAttribute('attribute',"opacity");
	fadeOuterPortalUp.setAttribute('dur',"200");
	fadeOuterPortalUp.setAttribute('delay','5000');
	fadeOuterPortalUp.setAttribute('to',"1");
	
	var fadeMiddlePortalUp = document.createElement("a-animation");
	fadeMiddlePortalUp.setAttribute('attribute',"opacity");
	fadeMiddlePortalUp.setAttribute('dur',"200");
	fadeMiddlePortalUp.setAttribute('delay','5000');
	fadeMiddlePortalUp.setAttribute('to',"1");
	
	var fadeInnerPortalUp = document.createElement("a-animation");
	fadeInnerPortalUp.setAttribute('attribute',"opacity");
	fadeInnerPortalUp.setAttribute('dur',"200");
	fadeInnerPortalUp.setAttribute('delay','5000');
	fadeInnerPortalUp.setAttribute('to',"1");
	
	var scaleOuterPortalUp = document.createElement("a-animation");
	scaleOuterPortalUp.setAttribute('attribute',"scale");
	scaleOuterPortalUp.setAttribute('dur',"200");
	scaleOuterPortalUp.setAttribute('delay','3300');
	scaleOuterPortalUp.setAttribute('to',"10 10 10");
	
	var scaleMiddlePortalUp = document.createElement("a-animation");
	scaleMiddlePortalUp.setAttribute('attribute',"scale");
	scaleMiddlePortalUp.setAttribute('dur',"200");
	scaleMiddlePortalUp.setAttribute('delay','3300');
	scaleMiddlePortalUp.setAttribute('to',"10 10 10");
	
	var scaleInnerPortalUp = document.createElement("a-animation");
	scaleInnerPortalUp.setAttribute('attribute',"scale");
	scaleInnerPortalUp.setAttribute('dur',"200");
	scaleInnerPortalUp.setAttribute('delay','3300');
	scaleInnerPortalUp.setAttribute('to',"10 10 10");
	
	//Animation to scale portal for being inside room
	
	var moveOuterPortalUp = document.createElement("a-animation");
	moveOuterPortalUp.setAttribute('attribute',"position");
	moveOuterPortalUp.setAttribute('dur',"200");
	moveOuterPortalUp.setAttribute('delay','3300');
	moveOuterPortalUp.setAttribute('to',"0 0 0");
	
	var moveMiddlePortalUp = document.createElement("a-animation");
	moveMiddlePortalUp.setAttribute('attribute',"position");
	moveMiddlePortalUp.setAttribute('dur',"200");
	moveMiddlePortalUp.setAttribute('delay','3300');
	moveMiddlePortalUp.setAttribute('to',"0 0 0");
	
	var moveInnerPortalUp = document.createElement("a-animation");
	moveInnerPortalUp.setAttribute('attribute',"position");
	moveInnerPortalUp.setAttribute('dur',"200");
	moveInnerPortalUp.setAttribute('delay','3300');
	moveInnerPortalUp.setAttribute('to',"0 0 0");
	
	var changeOuterMaterial = document.createElement("a-animation");
	changeOuterMaterial.setAttribute('attribute',"mtl");
	changeOuterMaterial.setAttribute('dur',"200");
	changeOuterMaterial.setAttribute('delay','3800');
	changeOuterMaterial.setAttribute('to',"#74FF31");
	
	var changeMiddleMaterial = document.createElement("a-animation");
	changeMiddleMaterial.setAttribute('attribute',"mtl");
	changeMiddleMaterial.setAttribute('dur',"200");
	changeMiddleMaterial.setAttribute('delay','3800');
	changeMiddleMaterial.setAttribute('to',"#74FF31");
	
	var changeInnerMaterial = document.createElement("a-animation");
	changeInnerMaterial.setAttribute('attribute',"mtl");
	changeInnerMaterial.setAttribute('dur',"200");
	changeInnerMaterial.setAttribute('delay','3800');
	changeInnerMaterial.setAttribute('to',"#74FF31");
	
	
	
	
	
	
	myQuad.appendChild(fadeUp);
	mysky.appendChild(zoomdown);
	room.appendChild(roomFadeOut);
	myOuter.appendChild(scaleOuterPortalUp);
	myOuter.appendChild(moveOuterPortalUp);
	myMiddle.appendChild(scaleMiddlePortalUp);
	myMiddle.appendChild(moveMiddlePortalUp);
	myInner.appendChild(scaleInnerPortalUp);
	myInner.appendChild(moveInnerPortalUp);
	myOuter.appendChild(changeOuterMaterial);
	myMiddle.appendChild(changeMiddleMaterial);
	myInner.appendChild(changeInnerMaterial);
	myOuter.appendChild(fadeOuterPortalOut);
	myMiddle.appendChild(fadeMiddlePortalOut);
	myInner.appendChild(fadeInnerPortalOut);
	myOuter.appendChild(fadeOuterPortalUp);
	myMiddle.appendChild(fadeMiddlePortalUp);
	myInner.appendChild(fadeInnerPortalUp);
	seedPod.appendChild(fadeSeedDown);
	
});

