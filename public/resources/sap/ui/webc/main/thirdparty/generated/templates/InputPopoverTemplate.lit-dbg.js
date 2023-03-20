sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.showSuggestions ? block1(context, tags, suffix) : undefined}${context.hasValueStateMessage ? block17(context, tags, suffix) : undefined} `;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)} class="${(0, _LitRenderer.classMap)(context.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${(0, _LitRenderer.styleMap)(context.styles.suggestionsPopover)}" @ui5-after-open="${(0, _LitRenderer.ifDefined)(context._afterOpenPopover)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(context._afterClosePopover)}" @ui5-scroll="${(0, _LitRenderer.ifDefined)(context._scroll)}">${context._isPhone ? block2(context, tags, suffix) : undefined}${!context._isPhone ? block7(context, tags, suffix) : undefined}<${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)} separators="${(0, _LitRenderer.ifDefined)(context.suggestionSeparators)}" @mousedown="${context.onItemMouseDown}" mode="SingleSelect">${(0, _LitRenderer.repeat)(context.suggestionsTexts, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix))}</${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)}>${context._isPhone ? block16(context, tags, suffix) : undefined}</${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-responsive-popover class="${(0, _LitRenderer.classMap)(context.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${(0, _LitRenderer.styleMap)(context.styles.suggestionsPopover)}" @ui5-after-open="${(0, _LitRenderer.ifDefined)(context._afterOpenPopover)}" @ui5-after-close="${(0, _LitRenderer.ifDefined)(context._afterClosePopover)}" @ui5-scroll="${(0, _LitRenderer.ifDefined)(context._scroll)}">${context._isPhone ? block2(context, tags, suffix) : undefined}${!context._isPhone ? block7(context, tags, suffix) : undefined}<ui5-list separators="${(0, _LitRenderer.ifDefined)(context.suggestionSeparators)}" @mousedown="${context.onItemMouseDown}" mode="SingleSelect">${(0, _LitRenderer.repeat)(context.suggestionsTexts, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix))}</ui5-list>${context._isPhone ? block16(context, tags, suffix) : undefined}</ui5-responsive-popover>`;

  const block2 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${(0, _LitRenderer.ifDefined)(context._headerTitleText)}</span><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._closeRespPopover}"></${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone"><${(0, _LitRenderer.scopeTag)("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${(0, _LitRenderer.ifDefined)(context.inputType)}" .value="${(0, _LitRenderer.ifDefined)(context.value)}" ?show-clear-icon=${context.showClearIcon} placeholder="${(0, _LitRenderer.ifDefined)(context.placeholder)}" @ui5-input="${(0, _LitRenderer.ifDefined)(context._handleInput)}" @change="${context._handleChange}"></${(0, _LitRenderer.scopeTag)("ui5-input", tags, suffix)}></div></div>${context.hasValueStateMessage ? block3(context, tags, suffix) : undefined}</div>` : (0, _LitRenderer.html)`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${(0, _LitRenderer.ifDefined)(context._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone"><ui5-input class="ui5-input-inner-phone" type="${(0, _LitRenderer.ifDefined)(context.inputType)}" .value="${(0, _LitRenderer.ifDefined)(context.value)}" ?show-clear-icon=${context.showClearIcon} placeholder="${(0, _LitRenderer.ifDefined)(context.placeholder)}" @ui5-input="${(0, _LitRenderer.ifDefined)(context._handleInput)}" @change="${context._handleChange}"></ui5-input></div></div>${context.hasValueStateMessage ? block3(context, tags, suffix) : undefined}</div>`;

  const block3 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style="${(0, _LitRenderer.styleMap)(context.styles.suggestionPopoverHeader)}"><${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>${context.shouldDisplayDefaultValueStateMessage ? block4(context, tags, suffix) : block5(context, tags, suffix)}</div>` : (0, _LitRenderer.html)`<div class="${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style="${(0, _LitRenderer.styleMap)(context.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></ui5-icon>${context.shouldDisplayDefaultValueStateMessage ? block4(context, tags, suffix) : block5(context, tags, suffix)}</div>`;

  const block4 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(context.valueStateText)}`;

  const block5 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.repeat)(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6(item, index, context, tags, suffix))}`;

  const block6 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(item)}`;

  const block7 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.hasValueStateMessage ? block8(context, tags, suffix) : undefined}`;

  const block8 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div slot="header" ?focused=${context._isValueStateFocused} class="ui5-responsive-popover-header ${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style=${(0, _LitRenderer.styleMap)(context.styles.suggestionPopoverHeader)}><${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>${context.shouldDisplayDefaultValueStateMessage ? block9(context, tags, suffix) : block10(context, tags, suffix)}</div>` : (0, _LitRenderer.html)`<div slot="header" ?focused=${context._isValueStateFocused} class="ui5-responsive-popover-header ${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style=${(0, _LitRenderer.styleMap)(context.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></ui5-icon>${context.shouldDisplayDefaultValueStateMessage ? block9(context, tags, suffix) : block10(context, tags, suffix)}</div>`;

  const block9 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(context.valueStateText)}`;

  const block10 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.repeat)(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11(item, index, context, tags, suffix))}`;

  const block11 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(item)}`;

  const block12 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${item.groupItem ? block13(item, index, context, tags, suffix) : block14(item, index, context, tags, suffix)}`;

  const block13 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-li-groupheader", tags, suffix)} data-ui5-key="${(0, _LitRenderer.ifDefined)(item.key)}">${(0, _LitRenderer.unsafeHTML)(item.text)}</${(0, _LitRenderer.scopeTag)("ui5-li-groupheader", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-li-groupheader data-ui5-key="${(0, _LitRenderer.ifDefined)(item.key)}">${(0, _LitRenderer.unsafeHTML)(item.text)}</ui5-li-groupheader>`;

  const block14 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-li-suggestion-item", tags, suffix)} image="${(0, _LitRenderer.ifDefined)(item.image)}" icon="${(0, _LitRenderer.ifDefined)(item.icon)}" additional-text="${(0, _LitRenderer.ifDefined)(item.additionalText)}" type="${(0, _LitRenderer.ifDefined)(item.type)}" additional-text-state="${(0, _LitRenderer.ifDefined)(item.additionalTextState)}" data-ui5-key="${(0, _LitRenderer.ifDefined)(item.key)}">${(0, _LitRenderer.unsafeHTML)(item.text)}${item.description ? block15(item, index, context, tags, suffix) : undefined}</${(0, _LitRenderer.scopeTag)("ui5-li-suggestion-item", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-li-suggestion-item image="${(0, _LitRenderer.ifDefined)(item.image)}" icon="${(0, _LitRenderer.ifDefined)(item.icon)}" additional-text="${(0, _LitRenderer.ifDefined)(item.additionalText)}" type="${(0, _LitRenderer.ifDefined)(item.type)}" additional-text-state="${(0, _LitRenderer.ifDefined)(item.additionalTextState)}" data-ui5-key="${(0, _LitRenderer.ifDefined)(item.key)}">${(0, _LitRenderer.unsafeHTML)(item.text)}${item.description ? block15(item, index, context, tags, suffix) : undefined}</ui5-li-suggestion-item>`;

  const block15 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<span slot="richDescription">${(0, _LitRenderer.unsafeHTML)(item.description)}</span>`;

  const block16 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div slot="footer" class="ui5-responsive-popover-footer"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} design="Transparent" @click="${context._closeRespPopover}">OK</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context._closeRespPopover}">OK</ui5-button></div>`;

  const block17 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${(0, _LitRenderer.ifDefined)(context._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style="${(0, _LitRenderer.styleMap)(context.styles.popoverHeader)}"><${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>${context.shouldDisplayDefaultValueStateMessage ? block18(context, tags, suffix) : block19(context, tags, suffix)}</div></${(0, _LitRenderer.scopeTag)("ui5-popover", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${(0, _LitRenderer.ifDefined)(context._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${(0, _LitRenderer.classMap)(context.classes.popoverValueState)}" style="${(0, _LitRenderer.styleMap)(context.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${(0, _LitRenderer.ifDefined)(context._valueStateMessageInputIcon)}"></ui5-icon>${context.shouldDisplayDefaultValueStateMessage ? block18(context, tags, suffix) : block19(context, tags, suffix)}</div></ui5-popover>`;

  const block18 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(context.valueStateText)}`;

  const block19 = (context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.repeat)(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block20(item, index, context, tags, suffix))}`;

  const block20 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(item)}`;

  var _default = block0;
  _exports.default = _default;
});