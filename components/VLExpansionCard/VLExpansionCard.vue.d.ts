declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    afterShow: (...args: any[]) => void;
    afterHide: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
    };
}>> & {
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onAfterShow?: ((...args: any[]) => any) | undefined;
    onAfterHide?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    title?(_: {}): any;
    "expand-icon"?(_: {}): any;
    "collapse-icon"?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
