/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "altText": string;
        "imgSrc": string;
    }
    interface MySpinner {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMySpinnerElement extends Components.MySpinner, HTMLStencilElement {
    }
    var HTMLMySpinnerElement: {
        prototype: HTMLMySpinnerElement;
        new (): HTMLMySpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-spinner": HTMLMySpinnerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "altText"?: string;
        "imgSrc"?: string;
    }
    interface MySpinner {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-spinner": MySpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-spinner": LocalJSX.MySpinner & JSXBase.HTMLAttributes<HTMLMySpinnerElement>;
        }
    }
}