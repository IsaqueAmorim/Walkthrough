sap.ui.define([

], function () {
	"use strict";


	alert("UI5 is ready");
});

sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});