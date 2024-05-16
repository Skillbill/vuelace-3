import { VLCrudProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLCrudProps>, {
    editable: boolean;
    actionHeaderI18nKey: string;
    rowsPerPage: number;
    cancelI18nKey: string;
    addI18nKey: string;
    editI18nKey: string;
    requiredI18nKey: string;
    applyI18nKey: string;
    resetI18nKey: string;
    highlightLastEdited: boolean;
    hightlightLastEditedClass: string;
    persistActionDialog: boolean;
    rowsPerPageOptions: () => number[];
    translationFn: (key: string) => string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    fetchError: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VLCrudProps>, {
    editable: boolean;
    actionHeaderI18nKey: string;
    rowsPerPage: number;
    cancelI18nKey: string;
    addI18nKey: string;
    editI18nKey: string;
    requiredI18nKey: string;
    applyI18nKey: string;
    resetI18nKey: string;
    highlightLastEdited: boolean;
    hightlightLastEditedClass: string;
    persistActionDialog: boolean;
    rowsPerPageOptions: () => number[];
    translationFn: (key: string) => string;
}>>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onFetchError?: ((...args: any[]) => any) | undefined;
}, {
    rowsPerPageOptions: number[];
    rowsPerPage: number;
    editable: boolean;
    actionHeaderI18nKey: string;
    cancelI18nKey: string;
    addI18nKey: string;
    editI18nKey: string;
    requiredI18nKey: string;
    applyI18nKey: string;
    resetI18nKey: string;
    highlightLastEdited: boolean;
    hightlightLastEditedClass: string;
    persistActionDialog: boolean;
    translationFn: (key: string, props?: {
        [key: string]: any;
    } | undefined) => string;
}, {}>, {
    actions?(_: {
        data: any;
    }): any;
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
