// JavaScript Document
// function htmlToElement(html) {
//     var template = document.createElement('template');
//     template.innerHTML = html;
//     return template.content.firstChild;
// }

// // setup cursor
AFRAME.registerComponent('cursor-listener', {
	init: function () {
		var cursor = document.getElementById("myCursor");
		this.el.addEventListener('click', function (evt) {
			cursor.setAttribute('material', 'opacity', 0.8);
			cursor.setAttribute('geometry', 'primitive:ring; radiusInner: 0.0025; radiusOuter: 0.00375; thetaStart: 0; thetaLength: 360;');
			cursor.setAttribute('animation', '');
		});
		this.el.addEventListener('mouseenter', function (evt) {
			cursor.setAttribute('material', 'opacity', 0.2);
			cursor.setAttribute('animation', 'property:geometry.thetaLength; dur: 1000; easing: easeInOutSine; from: 0; to: 360');
		});
		this.el.addEventListener('mouseleave', function (evt) {
			cursor.setAttribute('material', 'opacity', 0.8);
			cursor.setAttribute('geometry', 'primitive:ring; radiusInner: 0.0025; radiusOuter: 0.00375; thetaStart: 0; thetaLength: 360;');
			// cursor.setAttribute('animation', '');
		});
	}
});

// BEGIN BLURB VIEWING DELICIOUSNESS


AFRAME.registerComponent('blurb-view-closer', {

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


// JavaScript Document
// This creates an event listener for box with ID "0" that causes the sky transparency to fade up to 100% over five seconds.


// var place = "outside";


var room = document.getElementById("room");
var mysky = document.getElementById("sky");
var myQuad = document.getElementById("quad");
var myOuter = document.getElementById("outerRing");
var myMiddle = document.getElementById("middleRing");
var myInner = document.getElementById("innerRing");
var portal = document.getElementById("portal-plane");
var seedPod = document.getElementById("seedPod");

var isOutside = true;

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var moveHiddenPortal = function(){
	if(isOutside){

	}
	else{
		setAttributes(portal, {
			"position":"0 2 0",
			"height":"100"
		});
	}
	console.log(room.getAttribute("position"))
	console.log(portal.getAttribute("position"));
	console.log("Yeah");
}

portal.addEventListener('click', function()
{
	if (isOutside){
		// place="inside";

		room.setAttribute('class',"unclickable");
		isOutside = false;
		document.querySelector('a-entity').flushToDOM(true); // what is this for? -Nate
		// setTimeout(function(){
		// 	setAttributes(portal, {
		// 		"position":"0 5 0",
		// 		"height":"100"
		// 	});
		// 	console.log(portal.getAttribute("height"));
		// }, 8000);

		//animation to pull user into room location


		// var zoomup = document.createElement("a-animation");
		// setAttributes(zoomup, {
		// "id": "zoomUp",
		// "attribute": "position",
		// "dur": "5000",
		// "delay": "200",
		// "to": "0 -74.5 0"
		// });
		mysky.setAttribute("animation", "property: position; dur:5000; delay: 200; to: 0 -74.5 0; ");
		mysky.addEventListener("animationcomplete", moveHiddenPortal);
		// moveHiddenPortal();

		//animation to fade in the outside world panorama


		var fadeUp = document.createElement("a-animation");
		setAttributes(fadeUp, {
		"id": "zoomUp",
		"attribute": "opacity",
		"dur": "200",
		"to": "100"
		});

		//animatioin to fade in the room panorama


		var roomFadeUp = document.createElement("a-animation");
		setAttributes(roomFadeUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "1"
		});

		//fades seed up when entering room



		var fadeSeedUp = document.createElement("a-animation");
		setAttributes(fadeSeedUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "1"
		});


		// animation to move portal down when entering room

		var fadeOuterPortalOutUp = document.createElement("a-animation");
		setAttributes(fadeOuterPortalOutUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "0"
		});


		var fadeMiddlePortalOut = document.createElement("a-animation");
		setAttributes(fadeMiddlePortalOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "0"
		});


		var fadeInnerPortalOut = document.createElement("a-animation");
		setAttributes(fadeInnerPortalOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "0"
		});

		var fadeOuterPortalUp = document.createElement("a-animation");
		setAttributes(fadeOuterPortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});



		var fadeMiddlePortalUp = document.createElement("a-animation");
		setAttributes(fadeMiddlePortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});


		var fadeInnerPortalUp = document.createElement("a-animation");
		setAttributes(fadeInnerPortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});



		var scaleOuterPortalDown = document.createElement("a-animation");
		setAttributes(scaleOuterPortalDown, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "0.5 0.5 0.5"
		});


		var scaleMiddlePortalDown = document.createElement("a-animation");
		setAttributes(scaleMiddlePortalDown, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "0.5 0.5 0.5"
		});



		var scaleInnerPortalDown = document.createElement("a-animation");
		setAttributes(scaleInnerPortalDown, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "0.5 0.5 0.5"
		});


		//Animation to scale portal for being inside room



		var moveOuterPortalDown = document.createElement("a-animation");
		setAttributes(moveOuterPortalDown, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 -3 0"
		});



		var moveMiddlePortalDown = document.createElement("a-animation");
		setAttributes(moveMiddlePortalDown, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 -3 0"
		});

		var moveInnerPortalDown = document.createElement("a-animation");
		setAttributes(moveInnerPortalDown, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 -3 0"
		});



		var changeOuterMaterial = document.createElement("a-animation");
		setAttributes(changeOuterMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "white"
		});

		var changeMiddleMaterial = document.createElement("a-animation");
		setAttributes(changeMiddleMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "white"
		});


		var changeInnerMaterial = document.createElement("a-animation");
		setAttributes(changeInnerMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "white"
		});



		myQuad.appendChild(fadeUp);
		// mysky.appendChild(zoomup);
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

// });


// backPortol.addEventListener('click',function(){

// 	"use strict";

	else{
	//animation to pull user into room location
		isOutside = true;

		var zoomdown = document.createElement("a-animation");
		setAttributes(zoomdown, {
		"id": "zoomUp",
		"attribute": "position",
		"dur": "5000",
		"delay": "200",
		"to": "0 0 0"
		});

		//animation to fade out the outside world panorama once you land back on earth



		var fadeUp = document.createElement("a-animation");
		setAttributes(fadeUp, {
		"id": "zoomUp",
		"attribute": "opacity",
		"dur": "4000",
		"delay": "200",
		"to": "0"
		});

		//animatioin to fade out the room panorama


		var roomFadeOut = document.createElement("a-animation");
		setAttributes(roomFadeOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "0"
		});


		var fadeSeedDown = document.createElement("a-animation");
		setAttributes(fadeSeedDown, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "1000",
		"to": "0"
		});


		// animation to move portal down when entering room
		var fadeOuterPortalOut = document.createElement("a-animation");
		setAttributes(fadeOuterPortalOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "1"
		});


		var fadeMiddlePortalOut = document.createElement("a-animation");
		setAttributes(fadeMiddlePortalOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "1"
		});


		var fadeInnerPortalOut = document.createElement("a-animation");
		setAttributes(fadeInnerPortalOut, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "3300",
		"to": "1"
		});


		var fadeOuterPortalUp = document.createElement("a-animation");
		setAttributes(fadeOuterPortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});


		var fadeMiddlePortalUp = document.createElement("a-animation");
		setAttributes(fadeMiddlePortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});

		var fadeInnerPortalUp = document.createElement("a-animation");
		setAttributes(fadeInnerPortalUp, {
		"attribute": "opacity",
		"dur": "200",
		"delay": "5000",
		"to": "1"
		});


		var scaleOuterPortalUp = document.createElement("a-animation");
		setAttributes(scaleOuterPortalUp, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "10 10 10"
		});


		var scaleMiddlePortalUp = document.createElement("a-animation");
		setAttributes(scaleMiddlePortalUp, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "10 10 10"
		});



		var scaleInnerPortalUp = document.createElement("a-animation");
		setAttributes(scaleInnerPortalUp, {
		"attribute": "scale",
		"dur": "200",
		"delay": "3300",
		"to": "10 10 10"
		});


		//Animation to scale portal for being inside room


		var moveOuterPortalUp = document.createElement("a-animation");
		setAttributes(moveOuterPortalUp, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 0 0"
		});


		var moveMiddlePortalUp = document.createElement("a-animation");
		setAttributes(moveMiddlePortalUp, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 0 0"
		});


		var moveInnerPortalUp = document.createElement("a-animation");
		setAttributes(moveInnerPortalUp, {
		"attribute": "position",
		"dur": "200",
		"delay": "3300",
		"to": "0 0 0"
		});


		var changeOuterMaterial = document.createElement("a-animation");
		setAttributes(changeOuterMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "#74FF31"
		});


		var changeMiddleMaterial = document.createElement("a-animation");
		setAttributes(changeMiddleMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "#74FF31"
		});


		var changeInnerMaterial = document.createElement("a-animation");
		setAttributes(changeInnerMaterial, {
		"attribute": "mtl",
		"dur": "200",
		"delay": "3800",
		"to": "#74FF31"
		});






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
	}

});




