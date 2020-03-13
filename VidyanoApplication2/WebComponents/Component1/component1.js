"use strict";
var VidyanoApplication2;
(function (VidyanoApplication2) {
    var WebComponents;
    (function (WebComponents) {
        var Component1 = /** @class */ (function (_super) {
            __extends(Component1, _super);
            function Component1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Component1.prototype._computeName = function (firstName, lastName) {
                return '${firstName} ${lastName}';
            };
            Component1 = __decorate([
                Vidyano.WebComponents.WebComponent.register({
                    properties: {
                        firstName: String,
                        LastName: String,
                        Name: {
                            type: String,
                            computed: "_computeName(firstName, lastName)"
                        }
                    }
                }, "va")
            ], Component1);
            return Component1;
        }(Vidyano.WebComponents.WebComponent));
        WebComponents.Component1 = Component1;
    })(WebComponents = VidyanoApplication2.WebComponents || (VidyanoApplication2.WebComponents = {}));
})(VidyanoApplication2 || (VidyanoApplication2 = {}));
