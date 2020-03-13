"use strict";
var VidyanoApplication2;
(function (VidyanoApplication2) {
    var WebComponents;
    (function (WebComponents) {
        var Component2 = /** @class */ (function (_super) {
            __extends(Component2, _super);
            function Component2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Component2.prototype._onMockPropsChanged = function (Prop1, prop2) {
            };
            Component2 = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        prop1: String,
                        prop2: String
                    },
                    observers: [
                        "_onMockPropsChanged(prop1, prop2)"
                    ]
                }, "va")
            ], Component2);
            return Component2;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Component2 = Component2;
    })(WebComponents = VidyanoApplication2.WebComponents || (VidyanoApplication2.WebComponents = {}));
})(VidyanoApplication2 || (VidyanoApplication2 = {}));
