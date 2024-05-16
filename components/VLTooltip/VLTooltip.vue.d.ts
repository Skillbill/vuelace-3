import { VLTooltipProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLTooltipProps>, {
    content: string;
    placement: string;
    disabled: boolean;
    distance: number;
    open: boolean;
    skidding: number;
    trigger: string;
    hoist: boolean;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLTooltipProps>, {
    content: string;
    placement: string;
    disabled: boolean;
    distance: number;
    open: boolean;
    skidding: number;
    trigger: string;
    hoist: boolean;
}>>>, {
    disabled: boolean;
    placement: "top" | "bottom" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
    open: boolean;
    hoist: boolean;
    trigger: string;
    content: string;
    distance: number;
    skidding: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
