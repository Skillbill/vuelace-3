declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    selection: import('vue').PropType<any>;
    size: {
        type: import('vue').PropType<"small" | "large">;
        default: undefined;
    };
    selectionMode: {
        type: import('vue').PropType<"multiple" | "single">;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    items: {
        type: import('vue').PropType<any[]>;
        required: true;
    };
    columns: {
        type: import('vue').PropType<import('./types').Column[]>;
        required: true;
    };
    actions: {
        type: import('vue').PropType<import('./types').Action[]>;
        required: true;
    };
    stripedRows: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    removableSort: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    defaultRows: {
        type: import('vue').PropType<number>;
        default: number;
    };
    rowsPerPageOptions: {
        type: import('vue').PropType<number[]>;
        default: () => number[];
    };
    rowClass: {
        type: import('vue').PropType<(data: any) => object | (string | object)[] | undefined>;
    };
    rowStyle: {
        type: import('vue').PropType<(data: any) => object | (string | object)[] | undefined>;
    };
    totalRecords: {
        type: import('vue').PropType<number>;
        default: undefined;
    };
    paginator: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    paginatorPosition: {
        type: import('vue').PropType<"top" | "bottom" | "both">;
    };
    paginatorTemplate: {
        type: import('vue').PropType<string>;
    };
    currentPageReportTemplate: {
        type: import('vue').PropType<string>;
    };
    actionHeaderLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    selectionColumnProps: {
        type: import('vue').PropType<object>;
    };
    onPage: {
        type: import('vue').PropType<(event: import('primevue/datatable').DataTablePageEvent) => void>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    page: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    selection: import('vue').PropType<any>;
    size: {
        type: import('vue').PropType<"small" | "large">;
        default: undefined;
    };
    selectionMode: {
        type: import('vue').PropType<"multiple" | "single">;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    items: {
        type: import('vue').PropType<any[]>;
        required: true;
    };
    columns: {
        type: import('vue').PropType<import('./types').Column[]>;
        required: true;
    };
    actions: {
        type: import('vue').PropType<import('./types').Action[]>;
        required: true;
    };
    stripedRows: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    removableSort: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    defaultRows: {
        type: import('vue').PropType<number>;
        default: number;
    };
    rowsPerPageOptions: {
        type: import('vue').PropType<number[]>;
        default: () => number[];
    };
    rowClass: {
        type: import('vue').PropType<(data: any) => object | (string | object)[] | undefined>;
    };
    rowStyle: {
        type: import('vue').PropType<(data: any) => object | (string | object)[] | undefined>;
    };
    totalRecords: {
        type: import('vue').PropType<number>;
        default: undefined;
    };
    paginator: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    paginatorPosition: {
        type: import('vue').PropType<"top" | "bottom" | "both">;
    };
    paginatorTemplate: {
        type: import('vue').PropType<string>;
    };
    currentPageReportTemplate: {
        type: import('vue').PropType<string>;
    };
    actionHeaderLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    selectionColumnProps: {
        type: import('vue').PropType<object>;
    };
    onPage: {
        type: import('vue').PropType<(event: import('primevue/datatable').DataTablePageEvent) => void>;
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
