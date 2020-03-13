namespace VidyanoApplication2.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            prop1: String,
            prop2: String
        },
        observers: [
            "_onMockPropsChanged(prop1, prop2)"
        ]
    }, "va")
    export class Component2 extends Vidyano.WebComponents.WebComponent {
        private _onMockPropsChanged(Prop1: string, prop2: string) {

        }
    }
}