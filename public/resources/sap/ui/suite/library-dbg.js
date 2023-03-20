/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library sap.ui.suite.
 */
sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/library'], // library dependency
	function(Core) {

	"use strict";

	/**
	 * Suite controls library.
	 *
	 * @namespace
	 * @alias sap.ui.suite
	 * @author SAP SE
	 * @version 1.108.6
	 * @since 1.1
	 * @public
	 * @deprecated as of version 1.108
	 */
	var thisLibrary = sap.ui.getCore().initLibrary({
		name : "sap.ui.suite",
		version: "1.108.6",
		dependencies : ["sap.ui.core"],
		types: [
			"sap.ui.suite.TaskCircleColor"
		],
		interfaces: [],
		controls: [
			"sap.ui.suite.TaskCircle",
			"sap.ui.suite.VerticalProgressIndicator"
		],
		elements: []
	});

	/**
	 * Defined color values for the Task Circle Control
	 *
	 * @version 1.108.6
	 * @enum {string}
	 * @public
	 */
	thisLibrary.TaskCircleColor = {

		/**
		 * Red
		 * @public
		 */
		Red : "Red",

		/**
		 * Yellow
		 * @public
		 */
		Yellow : "Yellow",

		/**
		 * Green
		 * @public
		 */
		Green : "Green",

		/**
		 * Default value
		 * @public
		 */
		Gray : "Gray"

	};

	return thisLibrary;

});