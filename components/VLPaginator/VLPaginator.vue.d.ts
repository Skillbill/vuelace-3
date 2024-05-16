declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    page: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    totalRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        required: true;
    };
    rowsPerPage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    rowsPerPageOptions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number[]>;
        required: true;
    };
    onPaginationChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(page: number, limit: number) => void>;
    };
}, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    paginationChange: (...args: any[]) => void;
    "update:rowsPerPage": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    page: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    totalRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        required: true;
    };
    rowsPerPage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    rowsPerPageOptions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number[]>;
        required: true;
    };
    onPaginationChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(page: number, limit: number) => void>;
    };
}>> & {
    onPaginationChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:rowsPerPage"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    default?(_: {
        page: number;
        totalPages: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
