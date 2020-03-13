namespace VidyanoApplication2.WebComponents {
    @Vidyano.WebComponents.WebComponent.register({
        properties: {
            firstName: String,
            LastName: String,
            Name: {
                type: String,
                computed: "_computeName(firstName, lastName)"
            }
        }
    }, "va")
    export class Component1 extends Vidyano.WebComponents.WebComponent {
        private _computeName(firstName: String, lastName: String): string {
            return '${firstName} ${lastName}';
        }
    }
}