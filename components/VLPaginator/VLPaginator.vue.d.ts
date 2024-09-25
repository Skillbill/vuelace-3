declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    page: import('vue').PropType<number>;
    totalRows: {
        type: import('vue').PropType<number>;
        required: true;
    };
    rowsPerPage: {
        type: import('vue').PropType<number>;
    };
    rowsPerPageOptions: {
        type: import('vue').PropType<number[]>;
        required: true;
    };
    onPaginationChange: {
        type: import('vue').PropType<(page: number, limit: number) => void>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    paginationChange: (...args: any[]) => void;
    "update:rowsPerPage": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    page: import('vue').PropType<number>;
    totalRows: {
        type: import('vue').PropType<number>;
        required: true;
    };
    rowsPerPage: {
        type: import('vue').PropType<number>;
    };
    rowsPerPageOptions: {
        type: import('vue').PropType<number[]>;
        required: true;
    };
    onPaginationChange: {
        type: import('vue').PropType<(page: number, limit: number) => void>;
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
