//@ui5-bundle sap/ui/webc/main/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Avatar.designtime", [],function(){"use strict";return{name:{singular:"AVATAR_NAME",plural:"AVATAR_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Badge.designtime", [],function(){"use strict";return{name:{singular:"BADGE_NAME",plural:"BADGE_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef()},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/BreadcrumbsItem.designtime", [],function(){"use strict";return{domRef:function(e){return e.getDomRef().getDomRef()},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef()},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}},isEnabled:function(e){return e.getText().length>0},validators:["noEmptyText"]},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/BusyIndicator.designtime", [],function(){"use strict";return{name:{singular:"BUSYINDICATOR_NAME",plural:"BUSYINDICATOR_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Button.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},rename:function(){return{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef().querySelector("span>bdi")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().textContent},setText:function(t){e.getDomRef().textContent=t}}},isEnabled:function(e){return e.getText().length>0},validators:["noEmptyText"]}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Card.designtime", [],function(){"use strict";return{name:{singular:"CARD_NAME",plural:"CARD_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Carousel.designtime", [],function(){"use strict";return{name:{singular:"CAROUSEL_NAME",plural:"CAROUSEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/CheckBox.designtime", [],function(){"use strict";return{name:{singular:"CHECKBOX_NAME",plural:"CHECKBOX_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef().querySelector(".ui5-checkbox-label")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}},isEnabled:function(e){return e.getText().length>0},validators:["noEmptyText"]},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/CustomListItem.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{content:{actions:{move:{changeType:"moveControls"}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/DatePicker.designtime", [],function(){"use strict";return{name:{singular:"DATEPICKER_NAME",plural:"DATEPICKER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/DateTimePicker.designtime", [],function(){"use strict";return{name:{singular:"DATETIMEPICKER_NAME",plural:"DATETIMEPICKER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Dialog.designtime", [],function(){"use strict";return{name:{singular:"DIALOG_NAME",plural:"DIALOG_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-popup-header-text")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().getAttribute("header-text")},setText:function(t){e.getDomRef().setAttribute("header-text",t)}}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Input.designtime", [],function(){"use strict";return{name:{singular:"INPUT_NAME",plural:"INPUT_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Label.designtime", [],function(){"use strict";return{name:{singular:"LABEL_NAME",plural:"LABEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-title-root")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Link.designtime", ["sap/ui/model/json/JSONModel","sap/ui/core/Core","sap/ui/core/Fragment"],function(e,t,n){"use strict";var a=function(a,r){var o=t.getLibraryResourceBundle("sap.ui.webc.main.designtime");return new Promise(function(i){var c={selectedKey:a.getTarget(),titleText:o.getText("LINK_DIALOG_TITLE_CHANGE_TARGET"),cancelBtn:o.getText("LINK_DIALOG_CANCEL_BTN"),okBtn:o.getText("LINK_DIALOG_OK_BTN")};var s=new e;s.setData(c);n.load({name:"sap.m.designtime.LinkTargetSelectDialog",controller:this}).then(function(e){e.setModel(s);e.getBeginButton().attachPress(function(n){var a=t.byId("targetCombo").getValue();i(a);e.close()});e.getEndButton().attachPress(function(t){e.close()});e.attachEventOnce("afterClose",function(t){e.destroy()});e.addStyleClass(r.styleClass);e.open()})}).then(function(e){return[{selectorControl:a,changeSpecificData:{changeType:"changeLinkTarget",content:e}}]})};return{name:{singular:"LINK_NAME",plural:"LINK_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:function(){return{changeType:"rename",domRef:function(e){return e.getDomRef()}}},settings:function(){return{changeLinkTarget:{name:"LINK_CHANGE_TARGET",isEnabled:function(e){return!!e.getHref()},handler:a}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/List.designtime", [],function(){"use strict";function e(e){var t=e;while(t){if(t.isA("sap.ui.webc.main.List")){var n=t.getBinding("items");if(n){return true}return false}t=t.getParent()}return false}return{name:{singular:"LIST_NAME",plural:"LIST_NAME_PLURAL"},aggregations:{items:{propagateMetadata:function(t){if(e(t)){return{actions:{remove:null,rename:null}}}},actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:function(){return{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef().querySelector(".ui5-list-header")},getTextMutators:function(e){return{getText:function(){return e.getHeaderText()},setText:function(t){e.setHeaderText(t)}}},isEnabled:function(e){return e.getHeaderText().length>0},validators:["noEmptyText"]}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/MultiInput.designtime", [],function(){"use strict";return{name:{singular:"MULTIINPUT_NAME",plural:"MULTIINPUT_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Panel.designtime", [],function(){"use strict";return{name:{singular:"PANEL_NAME",plural:"PANEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(e){return e.getHeaderText()||e.getId()}},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title").textContent},setText:function(t){var o=e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title");var n=[].find.call(o.childNodes,function(e){return e.nodeType===3});n.nodeValue=t}}}}},aggregations:{header:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header")}},content:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-content")},actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Popover.designtime", [],function(){"use strict";return{name:{singular:"POPOVER_NAME",plural:"POPOVER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-popup-header-text")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().getAttribute("header-text")},setText:function(t){e.getDomRef().setAttribute("header-text",t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/RadioButton.designtime", [],function(){"use strict";return{name:{singular:"RADIO_BUTTON_NAME",plural:"RADIO_BUTTON_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-radio-label")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/RangeSlider.designtime", [],function(){"use strict";return{name:{singular:"RANGESLIDER_NAME",plural:"RANGESLIDER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/RatingIndicator.designtime", [],function(){"use strict";return{name:{singular:"RATINGINDICATOR_NAME",plural:"RATINGINDICATOR_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/ResponsivePopover.designtime", [],function(){"use strict";return{name:{singular:"RESPONSIVE_POPOVER_NAME",plural:"RESPONSIVE_POPOVER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-popup-header-text")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().getAttribute("header-text")},setText:function(t){e.getDomRef().setAttribute("header-text",t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Slider.designtime", [],function(){"use strict";return{name:{singular:"SLIDER_NAME",plural:"SLIDER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}},true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/StandardListItem.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef().querySelector(".ui5-li-title")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Tab.designtime", [],function(){"use strict";return{name:{singular:"TAB_NAME",plural:"TAB_NAME_PLURAL"},domRef:function(e){return e.getParent().getItems().find(function(t){return t.sId===e.sId}).getDomRef()._getRealDomRef()},actions:{rename:{changeType:"rename",domRef:function(e){return e.getDomRef()._getRealDomRef().querySelector(".ui5-tab-strip-itemText")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/TabContainer.designtime", [],function(){"use strict";return{name:{singular:"TABCONTAINER_NAME",plural:"TABCONTAINER_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Table.designtime", [],function(){"use strict";return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},aggregations:{columns:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-table-header-row")}},rows:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector("tbody")}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/TableColumn.designtime", ["sap/ui/dt/ElementUtil"],function(e){"use strict";return{domRef:function(e){return e.getDomRef().shadowRoot.querySelector("th")},aggregations:{content:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector("th")},actions:{remove:{removeLastElement:true}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/Title.designtime", [],function(){"use strict";return{name:{singular:"TITLE_NAME",plural:"TITLE_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-title-root")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/main/designtime/library.designtime", [],function(){"use strict";return{}});
//# sourceMappingURL=library-preload.designtime.js.map
