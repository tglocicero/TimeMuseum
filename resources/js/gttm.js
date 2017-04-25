// JavaScript Document
// function htmlToElement(html) {
//     var template = document.createElement('template');
//     template.innerHTML = html;
//     return template.content.firstChild;
// }
// document.querySelector("#intro-sound-player").components.sound.playSound();

// function fadeOutAnimStop(){
// 	this.components.sound.stopSound();
// 	this.removeAttribute('animation');
// 	this.removeEventListener("animationcomplete", fadeOutAnimStop);
// }
// var i, t;


// BEGIN BLURB VIEWING DELICIOUSNESS

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

function initRoom(){
	moveHiddenPortal();
	document.querySelector("#ambience-sound-player").components.sound.playSound();
	var sp = document.querySelector("#intro-sound-player");
	activeSP = sp;
	setTimeout(function(){
		//enable cursor on blurb views after the intro sound
		var set = document.querySelectorAll(".blurb-view-opener");
		for(var i = 0; i < set.length; i++){
			set[i].setAttribute("cursor-listener", null);
			set[i].parentNode.setAttribute('opacity', '1');
			set[i].parentNode.childNodes[7].setAttribute('animation', 'property: rotation; from: 0 0 0; to: 0 360 0; loop: true; dur: 5000; easing: linear');
		}
	}, 50);
	sp.components.sound.playSound();
	mysky.removeEventListener("animationcomplete", initRoom);

	// sp.components.sound.stopSound();

}

var moveHiddenPortal = function(){
	if(isOutside){
		portal.setAttribute("animation", "property: position; to: 0 -36 0");
	}
	else{
		portal.setAttribute("animation", "property: position; to: 0 -3 0");
		portal.setAttribute("width", "8");
		portal.setAttribute("depth", "8");
	}
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

		mysky.addEventListener("animationcomplete", initRoom);
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

		var fadeOuterPortalOut = document.createElement("a-animation");
		setAttributes(fadeOuterPortalOut, {
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




