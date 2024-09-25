import { VLCrudFiltersProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLCrudFiltersProps>, {
    title: string;
    applyLabel: string;
    resetLabel: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    reset: (...args: any[]) => void;
    apply: (...args: any[]) => void;
    filtersApplied: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLCrudFiltersProps>, {
    title: string;
    applyLabel: string;
    resetLabel: string;
}>>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onApply?: ((...args: any[]) => any) | undefined;
    onFiltersApplied?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    applyLabel: string;
    resetLabel: string;
}, {}>, {
    title?(_: {}): any;
    reset?(_: {}): any;
    apply?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
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
