"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayStopO = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:20px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}\n"])));
exports.PlayStopO = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayStopO, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-stop-o" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayStopO.js.map