/**
 * nexus.js v1.0.0
 * http://example.com/
 *
 * Copyright (c) 2019 taltmi
 * Released under the MIT license.
 * https://www.opensource.org/licenses/mit-license.php
 */

let nexus = {};

with (enchant) {

	nexus.draw = (rectSize, rectColor, density) => {

		let core = new Core((innerWidth != outerWidth) ? document.documentElement.clientWidth : innerWidth, (innerHeight != outerHeight) ? document.documentElement.clientHeight : innerHeight);
		core.fps = 15;

		document.getElementById("enchant-stage").style.visibility = "hidden";

		with (document.getElementById("enchant-stage")) {
			style.position = "fixed";
			style.top = 0;
			style.left = 0;
			style.zIndex = -1;
		}

		core.onload = () => {

			document.getElementById("enchant-stage").style.visibility = "visible";

			addEventListener("resize", () => {
				core.width = (innerWidth != outerWidth) ? document.documentElement.clientWidth : innerWidth;
				core.height = (innerHeight != outerHeight) ? document.documentElement.clientHeight : innerHeight;
			});

			let mainScene = new Scene();
			core.pushScene(mainScene);

			class Rect {
				constructor(pos, isLength) {
					let rects = [];
					let i = 0;
					core.on("enterframe", () => {
						if (isLength ? (i * rectSize * 1.5 <= core.height) : (i * rectSize * 1.5 <= core.width)) {
						if (core.frame % 2 == 0) {
							rects[i] = new Sprite(rectSize, rectSize);
							if (isLength) {
								if (i * rectSize * 1.5 > core.height) {
									mainScene.removeChild(rects[i]);
								}
								rects[i].moveTo(pos, i * rectSize * 1.5);
							} else {
								if (i * rectSize * 1.5 > core.width) {
									mainScene.removeChild(rects[i]);
								}
								rects[i].moveTo(i * rectSize * 1.5, pos);
							}
							rects[i].backgroundColor = rectColor;
							mainScene.addChild(rects[i]);
							rects[i].tl.fadeOut(12).removeFromScene();
							i++;
						}}
					});
				}
			}

			let lines = [];
			let i = 0;
			core.on("enterframe", () => {
				if (core.frame % (16 - density) == 0) {
					var x;
					while (x % (rectSize * 1.5) != 0) {
						x = Math.floor(Math.random() * core.width);
					}
					lines[i] = new Rect(x, true);
					i++;
					var y;
					while (y % (rectSize * 1.5) != 0) {
						y = Math.floor(Math.random() * core.height);
					}
					lines[i] = new Rect(y, false);
					i++;
				}
			});
		};
		core.start();
	};
}