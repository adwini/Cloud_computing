/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.main.Card control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "CARD_NAME",
				plural: "CARD_NAME_PLURAL"
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			}
		};
	});