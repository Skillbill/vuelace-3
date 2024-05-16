declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    selection: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "large">;
        default: undefined;
    };
    selectionMode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"multiple" | "single">;
    };
    loading: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    items: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<any[]>;
        required: true;
    };
    columns: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Column[]>;
        required: true;
    };
    actions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Action[]>;
        required: true;
    };
    stripedRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    removableSort: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    defaultRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    rowsPerPageOptions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number[]>;
        default: () => number[];
    };
    rowClass: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(data: any) => object | undefined>;
    };
    rowStyle: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(data: any) => object | undefined>;
    };
    totalRecords: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    paginator: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    paginatorPosition: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"top" | "bottom" | "both">;
    };
    paginatorTemplate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    currentPageReportTemplate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    actionHeaderLabel: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    selectionColumnProps: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<object>;
    };
    onPage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(event: import('primevue/datatable').DataTablePageEvent) => void>;
    };
}, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    page: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    selection: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "large">;
        default: undefined;
    };
    selectionMode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"multiple" | "single">;
    };
    loading: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    items: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<any[]>;
        required: true;
    };
    columns: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Column[]>;
        required: true;
    };
    actions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Action[]>;
        required: true;
    };
    stripedRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    removableSort: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    defaultRows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    rowsPerPageOptions: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number[]>;
        default: () => number[];
    };
    rowClass: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(data: any) => object | undefined>;
    };
    rowStyle: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(data: any) => object | undefined>;
    };
    totalRecords: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    paginator: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    paginatorPosition: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"top" | "bottom" | "both">;
    };
    paginatorTemplate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    currentPageReportTemplate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    actionHeaderLabel: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    selectionColumnProps: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<object>;
    };
    onPage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(event: import('primevue/datatable').DataTablePageEvent) => void>;
    };
}>> & {
    onPage?: ((...args: any[]) => any) | undefined;
}, {
    size: "small" | "large";
    loading: boolean;
    stripedRows: boolean;
    removableSort: boolean;
    lazy: boolean;
    defaultRows: number;
    rowsPerPageOptions: number[];
    totalRecords: number;
    paginator: boolean;
    actionHeaderLabel: string;
}, {}>, {
    actions?(_: {
        data: any;
    }): any;
    empty?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
