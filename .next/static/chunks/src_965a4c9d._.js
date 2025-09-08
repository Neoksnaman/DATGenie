(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm table-fixed", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:67761b [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f56ad56ebf97cdfae4d75ba1150348b241dd020b":"getDatFileContent"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "getDatFileContent": (()=>getDatFileContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getDatFileContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f56ad56ebf97cdfae4d75ba1150348b241dd020b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDatFileContent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlLCBnZXRGaWxlTWV0YWRhdGEgfSBmcm9tICcuL2RyaXZlJztcbmltcG9ydCB7IGF0Y1dFLCBhdGNFeGVtcHQsIGF0Y1dHIH0gZnJvbSAnLi9zY2hlZHVsZXMnO1xuXG5jb25zdCBBbmFseXplRmlsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGRhdGE6IEV4Y2VsRXJyb3JEZXRlY3Rpb25PdXRwdXRTY2hlbWEubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEFuYWx5emVGaWxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgQW5hbHl6ZUZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZUV4Y2VsRmlsZShcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPEFuYWx5emVGaWxlUmVzdWx0PiB7XG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdObyBmaWxlIHVwbG9hZGVkLicgfTtcbiAgfVxuXG4gIC8vIENoZWNrIGZpbGUgdHlwZVxuICBpZiAoZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnICYmIGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdJbnZhbGlkIGZpbGUgdHlwZS4gUGxlYXNlIHVwbG9hZCBhbiBFeGNlbCBmaWxlLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgY29uc3QgZGF0YVVyaSA9IGBkYXRhOiR7ZmlsZS50eXBlfTtiYXNlNjQsJHtidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpfWA7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleGNlbEVycm9yRGV0ZWN0aW9uKHsgZXhjZWxEYXRhVXJpOiBkYXRhVXJpIH0pO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBlcnJvcjogbnVsbCB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byBhbmFseXplIGZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5jb25zdCBBdXRoUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgdXNlcjogei5vYmplY3Qoe1xuICAgICAgICB1c2VyTmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgZGF0YWJhc2VJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgICBmb2xkZXJJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIH0pLm51bGxhYmxlKCksXG59KTtcblxudHlwZSBBdXRoUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgQXV0aFJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduVXBVc2VyKHVzZXJEYXRhOiBTaWdudXBEYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXJEYXRhLnVzZXJOYW1lfWApO1xuICAgIGF3YWl0IGFwcGVuZFVzZXJUb1NoZWV0KHsgLi4udXNlckRhdGEsIGZvbGRlcklkIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzaWduaW5nIHVwIHVzZXI6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gc2lnbiB1cDogJHtlcnJvck1lc3NhZ2V9YCwgdXNlcjogbnVsbCB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpblVzZXIoY3JlZGVudGlhbHM6IExvZ2luRGF0YSk6IFByb21pc2U8QXV0aFJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LnVzZXJOYW1lID09PSBjcmVkZW50aWFscy51c2VyTmFtZSAmJiB1LnB3ZCA9PT0gY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBsZXQgZm9sZGVySWQgPSB1c2VyLmZvbGRlcklkO1xuICAgICAgICAgICAgaWYgKCFmb2xkZXJJZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2VyICR7dXNlci51c2VyTmFtZX0gZG9lcyBub3QgaGF2ZSBhIGZvbGRlcklkLiBDcmVhdGluZyBvbmUgbm93LmApO1xuICAgICAgICAgICAgICAgIGZvbGRlcklkID0gYXdhaXQgY3JlYXRlRm9sZGVySW5Ecml2ZShgREFUR2VuaWVfJHt1c2VyLnVzZXJOYW1lfWApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVVzZXJGb2xkZXJJZCh1c2VyLnVzZXJOYW1lLCBmb2xkZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuZCBhc3NpZ25lZCBmb2xkZXJJZCAke2ZvbGRlcklkfSB0byB1c2VyICR7dXNlci51c2VyTmFtZX0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgdXNlcjogeyB1c2VyTmFtZTogdXNlci51c2VyTmFtZSwgZGF0YWJhc2VJZDogdXNlci5kYXRhYmFzZUlkLCBmb2xkZXJJZDogZm9sZGVySWQgfSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4nLCB1c2VyOiBudWxsIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW4gdXNlcjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGxvZ2luOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gICAgfVxufVxuXG5jb25zdCBUYXhQcm9maWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogei5hcnJheShUYXhQcm9maWxlU2NoZW1hKS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIFRheFByb2ZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBUYXhQcm9maWxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJIZWFkZXJEYXRhKGRhdGFiYXNlSWQ6IHN0cmluZyk6IFByb21pc2U8VGF4UHJvZmlsZVJlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghZGF0YWJhc2VJZCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnRGF0YWJhc2UgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJEYXRhID0gYXdhaXQgZ2V0QWxsSGVhZGVyRGF0YUZyb21TaGVldChkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBoZWFkZXJEYXRhLCBlcnJvcjogbnVsbCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGhlYWRlciBkYXRhOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGZldGNoIGhlYWRlciBkYXRhOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuXG50eXBlIE11dGF0aW9uUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgTXV0YXRpb25SZXN1bHRTY2hlbWE+O1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub1VwcGVyY2FzZShkYXRhOiBUYXhQcm9maWxlKTogVGF4UHJvZmlsZSB7XG4gIGNvbnN0IHVwcGVyY2FzZWREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5IGFzIGtleW9mIFRheFByb2ZpbGVdO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gJ2VudGl0eVR5cGUnICYmIGtleSAhPT0gJ2N5Y2xlVHlwZScgJiYga2V5ICE9PSAnbW9udGhTZWxlY3QnICYmIGtleSAhPT0gJ3Jkb0NvZGUnKSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBwZXJjYXNlZERhdGFba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXBwZXJjYXNlZERhdGEgYXMgVGF4UHJvZmlsZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRheFByb2ZpbGUocHJvZmlsZURhdGE6IFRheFByb2ZpbGUsIGRhdGFiYXNlSWQ6IHN0cmluZyk6IFByb21pc2U8TXV0YXRpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gVGF4UHJvZmlsZVNjaGVtYS5wYXJzZShwcm9maWxlRGF0YSk7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2ZpbGVzID0gYXdhaXQgZ2V0QWxsSGVhZGVyRGF0YUZyb21TaGVldChkYXRhYmFzZUlkKTtcbiAgICBjb25zdCB0aW5FeGlzdHMgPSBleGlzdGluZ1Byb2ZpbGVzLnNvbWUocCA9PiBwLnRwVElOID09PSB2YWxpZGF0ZWREYXRhLnRwVElOKTtcblxuICAgIGlmICh0aW5FeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgICAgICBlcnJvcjogJ1RoaXMgVElOIGFscmVhZHkgaGFzIGEgcHJvZmlsZS4gUGxlYXNlIGNoZWNrIHlvdXIgZGF0YSBvciByZWZyZXNoIHRoZSBwYWdlLicsIFxuICAgICAgICAgICAgZGF0YTogbnVsbCBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IGFwcGVuZEhlYWRlckRhdGFUb1NoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBhZGQgcHJvZmlsZTogJHtlcnJvck1lc3NhZ2V9YCwgZGF0YTogbnVsbCB9O1xuICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRheFByb2ZpbGUocHJvZmlsZURhdGE6IFRheFByb2ZpbGUsIGRhdGFiYXNlSWQ6IHN0cmluZyk6IFByb21pc2U8TXV0YXRpb25SZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB2YWxpZGF0ZWREYXRhID0gVGF4UHJvZmlsZVNjaGVtYS5wYXJzZShwcm9maWxlRGF0YSk7XG4gICAgY29uc3QgdXBwZXJjYXNlZERhdGEgPSB0cmFuc2Zvcm1Ub1VwcGVyY2FzZSh2YWxpZGF0ZWREYXRhKTtcbiAgICBhd2FpdCB1cGRhdGVIZWFkZXJEYXRhSW5TaGVldCh1cHBlcmNhc2VkRGF0YSwgZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIGRhdGE6IHVwcGVyY2FzZWREYXRhIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byB1cGRhdGUgcHJvZmlsZTogJHtlcnJvck1lc3NhZ2V9YCwgZGF0YTogbnVsbCB9O1xuICB9XG59XG5cbmNvbnN0IFNpbXBsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIFNpbXBsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFNpbXBsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUYXhQcm9maWxlKHRwVElOOiBzdHJpbmcsIGRhdGFiYXNlSWQ6IHN0cmluZyk6IFByb21pc2U8U2ltcGxlUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlSGVhZGVyRGF0YVJvd0luU2hlZXQodHBUSU4sIGRhdGFiYXNlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBkZWxldGUgcHJvZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuY29uc3QgRGF0RmlsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBkYXRDb250ZW50OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZmlsZU5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yczogei5hcnJheSh6LnN0cmluZygpKS5udWxsYWJsZSgpLFxuICAgIGZpbGVFeGlzdHM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgLy8gU2FsZXMgVG90YWxzXG4gICAgdG90YWxFeGVtcHQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbFplcm9SYXRlZDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsVGF4YWJsZVNhbGVzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxPdXRwdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICAvLyBQdXJjaGFzZSBUb3RhbHNcbiAgICB0b3RhbFNlcnZpY2VzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxDYXBpdGFsR29vZHM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE90aGVyR29vZHM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbElucHV0VGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgLy8gMTYwMS1FUSBhbmQgU0FXVCBUb3RhbHNcbiAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxXaXRoaG9sZGluZ1RheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHByb2Nlc3NlZERhdGE6IHouYW55KCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBEYXRGaWxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZVJlc3VsdFNjaGVtYT47XG5cblxuZnVuY3Rpb24gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhpbnB1dDogYW55LCBmaWVsZE5hbWU6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIsIHJvd051bWJlcjogbnVtYmVyLCBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpOiB7IHZhbHVlOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcgfCBudWxsIH0ge1xuICAgIGxldCB2YWx1ZSA9IChpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogU3RyaW5nKGlucHV0KS50cmltKCk7XG4gICAgXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBpcyBtaXNzaW5nLmAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogJycsIGVycm9yOiBudWxsIH07XG4gICAgfVxuXG4gICAgbGV0IHByb2Nlc3NlZFN0cmluZyA9IHZhbHVlXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICdBTkQnKVxuICAgICAgICAucmVwbGFjZSgvw5EvZywgJ04nKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL1teQS1aMC05XFxzLV0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9cXHNcXHMrL2csICcgJylcbiAgICAgICAgLnRyaW0oKTtcblxuICAgIGlmIChwcm9jZXNzZWRTdHJpbmcubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBgUm93ICR7cm93TnVtYmVyfTogJHtmaWVsZE5hbWV9IG11c3QgYmUgJHttYXhMZW5ndGh9IGNoYXJhY3RlcnMgb3IgbGVzcy5gIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdmFsdWU6IHByb2Nlc3NlZFN0cmluZywgZXJyb3I6IG51bGwgfTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihpbnB1dDogYW55LCBmaWVsZE5hbWU6IHN0cmluZywgcm93TnVtYmVyOiBudW1iZXIpOiB7IHZhbHVlOiBzdHJpbmcsIGVycm9yOiBzdHJpbmcgfCBudWxsIH0ge1xuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IFN0cmluZyhpbnB1dCkudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogJzAnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gU3RyaW5nKGlucHV0KS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlQXNTdHJpbmcpO1xuXG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IFN0cmluZyhpbnB1dCksIGVycm9yOiBgUm93ICR7cm93TnVtYmVyfTogJHtmaWVsZE5hbWV9IGNvbnRhaW5zIGFuIGludmFsaWQgbnVtYmVyLmAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgcm91bmRlZE51bSA9IE1hdGgucm91bmQobnVtICogMTAwKSAvIDEwMDtcbiAgICBcbiAgICBpZiAocm91bmRlZE51bSA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogJzAnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiByb3VuZGVkTnVtLnRvRml4ZWQoMiksIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZExhc3REYXkoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAvLyBHZXQgdGhlIGxhc3QgZGF5IG9mIHRoZSBtb250aC4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBsZWFwIHllYXJzLlxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgICBjb25zdCBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICByZXR1cm4gYCR7bW19LyR7ZGR9LyR7eXl5eX1gO1xufVxuXG5jb25zdCBxdW90ZUlmTm90RW1wdHkgPSAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpID0+IHtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKHZhbHVlIHx8ICcnKS50cmltKCk7XG4gIHJldHVybiBzdHIgPyBgXCIke3N0cn1cImAgOiAnJztcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NFeGNlbEZpbGUoZmlsZTogRmlsZSwgc2hlZXROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHsgZGF0YTogYW55W11bXSwgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW10gfT4ge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IHdvcmtib29rID0geGxzeC5yZWFkKGJ5dGVzLCB7IHR5cGU6ICdhcnJheScgfSk7XG5cbiAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW2BTaGVldCBcIiR7c2hlZXROYW1lfVwiIG5vdCBmb3VuZCBpbiB0aGUgdXBsb2FkZWQgZmlsZS5gXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgIGNvbnN0IGRhdGE6IGFueVtdW10gPSB4bHN4LnV0aWxzLnNoZWV0X3RvX2pzb24od29ya3NoZWV0LCB7XG4gICAgICAgIGhlYWRlcjogMSxcbiAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgcmF3OiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IFtdLCB2YWxpZGF0aW9uRXJyb3JzOiBbXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEuc2xpY2UoMSksIHZhbGlkYXRpb25FcnJvcnM6IFtdIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZTogRmlsZSwgcHJvZmlsZTogVGF4UHJvZmlsZSwgbW9udGg6IHN0cmluZywgeWVhcjogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgeyB0cFRJTjogdGluIH0gPSBwcm9maWxlO1xuICAgIFxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCJ2YXRfc2FsZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yczogZmlsZUVycm9ycywgXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gZGF0YVJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUm93TnVtYmVyID0gaW5kZXggKyAyO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgaWYgKHByb2Nlc3NlZFJvdy5sZW5ndGggPiAwICYmIFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IG1ha2UgYSBzYWxlIHRvIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogNTAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIG5hbWVGaWVsZHNJbmZvLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBmaWVsZC5tYXhMZW5ndGgsIG9yaWdpbmFsUm93TnVtYmVyLCBmaWVsZC5yZXF1aXJlZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhhc0ZpcnN0TmFtZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbM10pLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNMYXN0TmFtZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMl0pLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s0XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmICgoaGFzRmlyc3ROYW1lICYmICFoYXNMYXN0TmFtZSkgfHwgKCFoYXNGaXJzdE5hbWUgJiYgaGFzTGFzdE5hbWUpKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIG11c3QgYmUgcHJvdmlkZWQgdG9nZXRoZXIuYCk7XG4gICAgICAgIGlmIChoYXNNaWRkbGVOYW1lICYmICghaGFzRmlyc3ROYW1lIHx8ICFoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJZiBNaWRkbGUgTmFtZSBpcyBwcm92aWRlZCwgRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIGFyZSBhbHNvIHJlcXVpcmVkLmApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBTYWxlcycsIGluZGV4OiA3IH0sIHsgbmFtZTogJ1plcm8tUmF0ZWQgU2FsZXMnLCBpbmRleDogOCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnVGF4YWJsZSBTYWxlcycsIGluZGV4OiA5IH0sIHsgbmFtZTogJ091dHB1dCBUYXgnLCBpbmRleDogMTAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbnVtZXJpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s4XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOV0pID09PSAwKSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQXQgbGVhc3Qgb25lIHNhbGVzIGFtb3VudCAoRXhlbXB0LCBaZXJvLVJhdGVkLCBvciBUYXhhYmxlKSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBwcm9jZXNzZWREYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzFdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzFdKSkpO1xuICAgIFxuICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICBjb25zdCBhZGRyZXNzMSA9IFtwcm9maWxlLnN1YlN0cmVldCwgcHJvZmlsZS5zdHJlZXQsIHByb2ZpbGUuYmFyYW5nYXldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBbcHJvZmlsZS5jaXR5TXVuaWNpcGFsaXR5LCBwcm9maWxlLnByb3ZpbmNlLCBwcm9maWxlLnppcENvZGVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFsnRCcsICdTJywgcXVvdGVJZk5vdEVtcHR5KHJvd1swXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s2XSksIHJvd1s3XSwgcm93WzhdLCByb3dbOV0sIHJvd1sxMF0sIHRpbiwgbGFzdERheURhdGVdLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgY29uc3QgdG90YWxaZXJvUmF0ZWQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxUYXhhYmxlU2FsZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxPdXRwdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdTJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxUYXhhYmxlU2FsZXMudG9GaXhlZCgyKSwgdG90YWxPdXRwdXRUYXgudG9GaXhlZCgyKSwgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdF0uam9pbignLCcpO1xuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBgJHtoZWFkZXJSb3d9XFxuJHtkZXRhaWxSb3dzfWA7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgICAgICAgICAgXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIGRhdENvbnRlbnQsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxFeGVtcHQsIHRvdGFsWmVyb1JhdGVkLCB0b3RhbFRheGFibGVTYWxlcywgdG90YWxPdXRwdXRUYXgsXG4gICAgICAgIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgdHBUSU46IHRpbiwgYnJhbmNoQ29kZSB9ID0gcHJvZmlsZTtcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgeyBkYXRhOiBzY2hlZDFEYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogc2NoZWQxRmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcIjE2MDFFUV9zY2hlZDFcIik7XG4gICAgaWYgKHNjaGVkMUZpbGVFcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHNjaGVkMUZpbGVFcnJvcnMgfTtcblxuICAgIGNvbnN0IHsgZGF0YTogc2NoZWQyRGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IHNjaGVkMkZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQyXCIpO1xuICAgIGlmIChzY2hlZDJGaWxlRXJyb3JzLmxlbmd0aCA+IDApIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3JzOiBzY2hlZDJGaWxlRXJyb3JzIH07XG5cbiAgICBjb25zdCBzY2hlZDFIYXNEYXRhID0gc2NoZWQxRGF0YVJvd3Muc29tZShyb3cgPT4gcm93LnNvbWUoY2VsbCA9PiBTdHJpbmcoY2VsbCkudHJpbSgpICE9PSAnJykpO1xuICAgIGNvbnN0IHNjaGVkMkhhc0RhdGEgPSBzY2hlZDJEYXRhUm93cy5zb21lKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSk7XG5cbiAgICBpZiAoIXNjaGVkMUhhc0RhdGEgJiYgIXNjaGVkMkhhc0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IFtcIk5vIGRhdGEgZm91bmQgaW4gU2NoZWR1bGUgMSBvciBTY2hlZHVsZSAyIHNoZWV0cy5cIl0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gUHJvY2VzcyBTY2hlZHVsZSAxIChUYXhhYmxlKVxuICAgIGNvbnN0IHByb2Nlc3NlZFNjaGVkMURhdGEgPSBzY2hlZDFEYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSlcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKS5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPiAwICYmIHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSA5IGRpZ2l0cyBpZiBwcm92aWRlZC5gKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzFdID0gYnJhbmNoQ29kZSA/IGJyYW5jaENvZGUuc2xpY2UoLTQpLnBhZFN0YXJ0KDQsICcwJykgOiBcIjAwMDBcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogNTAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBgU2NoZWQxICR7ZmllbGQubmFtZX1gLCBmaWVsZC5tYXhMZW5ndGgsIG9yaWdpbmFsUm93TnVtYmVyLCBmaWVsZC5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYXRjID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s2XSB8fCAnJykudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzZdID0gYXRjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBudW1lcmljRmllbGRzID0gW3sgbmFtZTogJ1JhdGUnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sIHsgbmFtZTogJ1dpdGhob2xkaW5nIFRheCcsIGluZGV4OiA5IH1dO1xuICAgICAgICAgICAgbnVtZXJpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDEgJHtmaWVsZC5uYW1lfWAsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhdGMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdGNEYXRhID0gYXRjV0UuZmluZChpdGVtID0+IGl0ZW0uYXRjID09PSBhdGMpO1xuICAgICAgICAgICAgICAgIGlmIChhdGNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgIT09IGF0Y0RhdGEucmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDEgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJbnZhbGlkIHJhdGUgZm9yIEFUQyAke2F0Y30uIEV4cGVjdGVkICR7YXRjRGF0YS5yYXRlfSUsIGJ1dCBnb3QgJHtwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSl9JS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgJyR7YXRjfScgaXMgbm90IHZhbGlkIGZvciBTY2hlZHVsZSAxLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gUHJvY2VzcyBTY2hlZHVsZSAyIChFeGVtcHQpXG4gICAgY29uc3QgcHJvY2Vzc2VkU2NoZWQyRGF0YSA9IHNjaGVkMkRhdGFSb3dzXG4gICAgICAgIC5maWx0ZXIocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKVxuICAgICAgICAubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2Nlc3NlZFJvd1swXSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA+IDAgJiYgc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQyIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDIgJHtmaWVsZC5uYW1lfWAsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0YyA9IFN0cmluZyhwcm9jZXNzZWRSb3dbNl0gfHwgJycpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0YztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbN10sIGBTY2hlZDIgSW5jb21lIFBheW1lbnRgLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s3XSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGF0Yykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0Y0RhdGEgPSBhdGNFeGVtcHQuZmluZChpdGVtID0+IGl0ZW0uYXRjID09PSBhdGMpO1xuICAgICAgICAgICAgICAgIGlmICghYXRjRGF0YSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNjaGVkdWxlIDIuYCk7XG4gICAgICAgICAgICB9IGVsc2UgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgICAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzIH07XG4gICAgXG4gICAgcHJvY2Vzc2VkU2NoZWQxRGF0YS5zb3J0KChhLCBiKSA9PiBTdHJpbmcoYVsyXSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYlsyXSkpKTtcbiAgICBwcm9jZXNzZWRTY2hlZDJEYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzJdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzJdKSkpO1xuXG4gICAgY29uc3QgcmVwb3J0aW5nUGVyaW9kID0gYCR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0vJHt5ZWFyfWA7XG4gICAgbGV0IGRhdENvbnRlbnRQYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgICBcbiAgICBjb25zdCB0YXhwYXllck5hbWUgPSBwcm9maWxlLmVudGl0eVR5cGUgPT09ICdJbmRpdmlkdWFsJ1xuICAgICAgICA/IGAke3Byb2ZpbGUubGFzdE5hbWV9ICR7cHJvZmlsZS5maXJzdE5hbWV9ICR7cHJvZmlsZS5taWRkbGVOYW1lfWBcbiAgICAgICAgOiBwcm9maWxlLmNvbXBhbnlOYW1lO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IFsnSFFBUCcsICdIMTYwMUVRJywgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCBxdW90ZUlmTm90RW1wdHkodGF4cGF5ZXJOYW1lKSwgcmVwb3J0aW5nUGVyaW9kLCBwcm9maWxlLnJkb0NvZGVdLmpvaW4oJywnKTtcbiAgICBkYXRDb250ZW50UGFydHMucHVzaChtYWluSGVhZGVyKTtcblxuICAgIGxldCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gMDtcbiAgICBsZXQgdG90YWxXaXRoaG9sZGluZ1RheCA9IDA7XG4gICAgbGV0IHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCA9IDA7XG5cbiAgICBpZiAocHJvY2Vzc2VkU2NoZWQxRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbFJvd3MxID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IFsnRDEnLCAnMTYwMUVRJywgaW5kZXggKyAxLCByb3dbMF0sIHJvd1sxXSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHJlcG9ydGluZ1BlcmlvZCwgcm93WzZdLCByb3dbN10sIHJvd1s4XSwgcm93WzldXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cxID0gWydDMScsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudC50b0ZpeGVkKDIpLCB0b3RhbFdpdGhob2xkaW5nVGF4LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czEsIGZvb3RlclJvdzEpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWRTY2hlZDJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGV0YWlsUm93czIgPSBwcm9jZXNzZWRTY2hlZDJEYXRhLm1hcCgocm93LCBpbmRleCkgPT4gWydEMicsICcxNjAxRVEnLCBpbmRleCArIDEsIHJvd1swXSwgcm93WzFdLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcmVwb3J0aW5nUGVyaW9kLCByb3dbNl0sIHJvd1s3XV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICAgICAgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQyRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cyID0gWydDMicsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czIsIGZvb3RlclJvdzIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBkYXRDb250ZW50UGFydHMuam9pbignXFxuJyk7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59JHticmFuY2hDb2RlfSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0ke3llYXJ9MTYwMUVRLkRBVGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdENvbnRlbnQsXG4gICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudCxcbiAgICAgICAgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50LFxuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4LFxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRFeGNlbFRvRGF0KGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgcmVwb3J0VHlwZTogc3RyaW5nLCBzY2hlZHVsZT86IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZvbGRlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcklkJyk7IC8vIFdlIG5lZWQgdGhpcyBmb3IgdGhlIGNoZWNrXG4gICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVXNlciBmb2xkZXIgbm90IGZvdW5kLiBQbGVhc2UgbG9nIGluIGFnYWluLicsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgLy8gRGV0ZXJtaW5lIGZpbGVuYW1lIGZpcnN0IHRvIGNoZWNrIGZvciBleGlzdGVuY2VcbiAgICBsZXQgZGF0RmlsZU5hbWUgPSAnJztcbiAgICBsZXQgcmVwb3J0VHlwZVNob3J0ID0gJyc7XG4gICAgaWYgKHJlcG9ydFR5cGUuaW5jbHVkZXMoJ1NhbGVzJykpIHtcbiAgICAgICAgZGF0RmlsZU5hbWUgPSBgJHtwcm9maWxlLnRwVElOfVMke21vbnRofSR7eWVhcn0uREFUYDtcbiAgICAgICAgcmVwb3J0VHlwZVNob3J0ID0gJ1NhbGVzJztcbiAgICB9IGVsc2UgaWYgKHJlcG9ydFR5cGUuaW5jbHVkZXMoJ1B1cmNoYXNlcycpKSB7XG4gICAgICAgIGRhdEZpbGVOYW1lID0gYCR7cHJvZmlsZS50cFRJTn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgICAgIHJlcG9ydFR5cGVTaG9ydCA9ICdQdXJjaGFzZXMnO1xuICAgIH0gZWxzZSBpZiAocmVwb3J0VHlwZS5pbmNsdWRlcygnMTYwMS1FUScpKSB7XG4gICAgICAgIGRhdEZpbGVOYW1lID0gYCR7cHJvZmlsZS50cFRJTn0ke3Byb2ZpbGUuYnJhbmNoQ29kZX0ke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9JHt5ZWFyfTE2MDFFUS5EQVRgO1xuICAgICAgICByZXBvcnRUeXBlU2hvcnQgPSAnMTYwMUVRJztcbiAgICB9IGVsc2UgaWYgKHJlcG9ydFR5cGUuaW5jbHVkZXMoJ1NBV1QnKSAmJiBzY2hlZHVsZSkge1xuICAgICAgICBkYXRGaWxlTmFtZSA9IGAke3Byb2ZpbGUudHBUSU59JHtwcm9maWxlLmJyYW5jaENvZGV9JHttb250aC5wYWRTdGFydCgyLCAnMCcpfSR7eWVhcn0ke3NjaGVkdWxlfS5EQVRgO1xuICAgICAgICByZXBvcnRUeXBlU2hvcnQgPSBgU0FXVF8ke3NjaGVkdWxlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBbcHJvZmlsZS50cFRJTiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXSk7XG4gICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSwgZGF0Q29udGVudDogbnVsbCwgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIElmIGZpbGUgZG9lc24ndCBleGlzdCwgcHJvY2VlZCB3aXRoIGdlbmVyYXRpb25cbiAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCJTdW1tYXJ5IG9mIFNhbGVzIChTTFMpXCIpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyKTtcbiAgICB9XG4gICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgICAgcmV0dXJuIGF3YWl0IHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGEpO1xuICAgIH1cbiAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCIxNjAxLUVRIChTY2hlZHVsZSAxIGFuZCAyKVwiKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZTE2MDFFUURhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIpO1xuICAgIH1cbiAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCJTdW1tYXJ5IEFscGhhbGlzdCBvZiBXaXRoaG9sZGluZyBUYXggKFNBV1QpXCIpIHtcbiAgICAgICAgIGlmICghc2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NBV1Qgc2NoZWR1bGUgaXMgbWlzc2luZy4nLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHZhbGlkYXRlQW5kUHJvY2Vzc1NBV1QoZmlsZSwgc2NoZWR1bGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRGF0RmlsZUFuZFVwZGF0ZUNhY2hlKFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsIFxuICAgIGZpbGVDb250ZW50OiBzdHJpbmcsIFxuICAgIGZvbGRlcklkOiBzdHJpbmcsIFxuICAgIHByb2ZpbGU6IFRheFByb2ZpbGUsXG4gICAgcmVwb3J0VHlwZVNob3J0OiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG92ZXJ3cml0ZTogYm9vbGVhblxuKSB7XG4gICAgJ3VzZSBzZXJ2ZXInO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRyaXZlUGF0aCA9IFtwcm9maWxlLnRwVElOLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JHIFdPUktdIFN0YXJ0aW5nIHVwbG9hZCBmb3IgJHtmaWxlTmFtZX0gdG8gcGF0aDogJHtkcml2ZVBhdGguam9pbignLycpfWApO1xuICAgICAgICBhd2FpdCB1cGxvYWRGaWxlVG9Ecml2ZShmaWxlTmFtZSwgZmlsZUNvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbQkcgV09SS10gRmluaXNoZWQgdXBsb2FkIGZvciAke2ZpbGVOYW1lfS5gKTtcbiAgICAgICAgLy8gVGhlIGNhY2hlIGlzIG5vdCB1cGRhdGVkIGhlcmUgZGlyZWN0bHkuIFRoZSBjbGllbnQgc2hvdWxkIHBvbGwgb3IgcmUtZmV0Y2guXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW0JHIFdPUktdIEVycm9yIGluIGJhY2tncm91bmQgdXBsb2FkIGZvciAke2ZpbGVOYW1lfTpgLCBlcnJvcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvdmVyd3JpdGVEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgcmVwb3J0VHlwZTogc3RyaW5nLCBzY2hlZHVsZT86IHN0cmluZywgcHJvY2Vzc2VkRGF0YT86IGFueVtdW10sIG5vbkNyZWRpdGFibGVJbnB1dFRheD86IG51bWJlcik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnUHJvY2Vzc2VkIGRhdGEgaXMgbWlzc2luZyBmb3IgcHVyY2hhc2Ugb3ZlcndyaXRlLicsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGwgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZTE2MDFFUURhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgQWxwaGFsaXN0IG9mIFdpdGhob2xkaW5nIFRheCAoU0FXVClcIikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTQVdUIHNjaGVkdWxlIGlzIG1pc3NpbmcuJywgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHZhbGlkYXRlQW5kUHJvY2Vzc1NBV1QoZmlsZSwgc2NoZWR1bGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBSZXBvcnQgdHlwZSBcIiR7cmVwb3J0VHlwZX1cIiBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3Igb3ZlcndyaXRlLmAsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkIGR1cmluZyBvdmVyd3JpdGUuJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW292ZXJ3cml0ZURhdEZpbGVdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBPdmVyd3JpdGUgZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUV4Y2VsRm9yUHVyY2hhc2VzKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgcHJvZmlsZTogVGF4UHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZVN0cmluZyk7XG4gICAgY29uc3QgeyB0cFRJTjogdGluIH0gPSBwcm9maWxlO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuXG4gICAgICAgIGlmIChTdHJpbmcocHJvY2Vzc2VkUm93WzBdIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBoYXZlIGEgcHVyY2hhc2UgZnJvbSBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMSwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF07XG4gICAgICAgIG5hbWVGaWVsZHNJbmZvLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBmaWVsZC5tYXhMZW5ndGgsIG9yaWdpbmFsUm93TnVtYmVyLCBmaWVsZC5yZXF1aXJlZCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhhc0ZpcnN0TmFtZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbM10pLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNMYXN0TmFtZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMl0pLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s0XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmICgoaGFzRmlyc3ROYW1lICYmICFoYXNMYXN0TmFtZSkgfHwgKCFoYXNGaXJzdE5hbWUgJiYgaGFzTGFzdE5hbWUpKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIG11c3QgYmUgcHJvdmlkZWQgdG9nZXRoZXIuYCk7XG4gICAgICAgIGlmIChoYXNNaWRkbGVOYW1lICYmICghaGFzRmlyc3ROYW1lIHx8ICFoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJZiBNaWRkbGUgTmFtZSBpcyBwcm92aWRlZCwgRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIGFyZSBhbHNvIHJlcXVpcmVkLmApO1xuXG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgUHVyY2hhc2VzJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnWmVyby1SYXRlZCBQdXJjaGFzZXMnLCBpbmRleDogOCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIFNlcnZpY2VzJywgaW5kZXg6IDkgfSwgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIENhcGl0YWwgR29vZHMnLCBpbmRleDogMTAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1B1cmNoYXNlcyBvZiBPdGhlciBHb29kcycsIGluZGV4OiAxMSB9LCB7IG5hbWU6ICdJbnB1dCBUYXgnLCBpbmRleDogMTIgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbnVtZXJpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzhdKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s5XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbMTBdKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMV0pID09PSAwKSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQXQgbGVhc3Qgb25lIHB1cmNoYXNlIGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzIH07XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NlZERhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMV0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMV0pKSk7XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyXG4pOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICAgY29uc3QgeyB0cFRJTjogdGluIH0gPSBwcm9maWxlO1xuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7dGlufVAke21vbnRofSR7eWVhcn0uREFUYDtcbiAgICBcbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIGRhdENvbnRlbnQsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxFeGVtcHQsIHRvdGFsWmVyb1JhdGVkLFxuICAgICAgICB0b3RhbFNlcnZpY2VzLCB0b3RhbENhcGl0YWxHb29kcywgdG90YWxPdGhlckdvb2RzLCB0b3RhbElucHV0VGF4LFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YTogYW55W11bXSwgcHJvZmlsZTogVGF4UHJvZmlsZSwgbW9udGg6IHN0cmluZywgeWVhcjogc3RyaW5nLCBub25DcmVkaXRhYmxlSW5wdXRUYXg6IG51bWJlcik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCBmb2xkZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJJZCcpOyAvLyBXZSBuZWVkIHRoaXMgZm9yIHRoZSBjaGVja1xuICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VzZXIgZm9sZGVyIG5vdCBmb3VuZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7cHJvZmlsZS50cFRJTn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gJ1B1cmNoYXNlcyc7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3Byb2ZpbGUudHBUSU4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG5cbiAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLCBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsIH07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCk7XG59XG5cblxuY29uc3QgRGF0RmlsZUxpc3RpbmdSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBmaWxlczogei5hcnJheShEYXRGaWxlU2NoZW1hKS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVMaXN0aW5nUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUxpc3RpbmdSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZXMoZm9sZGVySWQ6IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZUxpc3RpbmdSZXN1bHQ+IHtcbiAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBmaWxlczogbnVsbCwgZXJyb3I6ICdVc2VyIGZvbGRlciBJRCBpcyBtaXNzaW5nLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBsaXN0RGF0RmlsZXMoZm9sZGVySWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBmaWxlcywgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tnZXREYXRGaWxlc10gQ1JJVElDQUwgRVJST1I6JywgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBmaWxlczogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gcmV0cmlldmUgREFUIGZpbGVzOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlQ29udGVudFJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBjb250ZW50OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBEYXRGaWxlQ29udGVudFJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdEZpbGVDb250ZW50KGZpbGVJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlQ29udGVudFJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICghZmlsZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgY29udGVudDogbnVsbCwgZXJyb3I6ICdGaWxlIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZG93bmxvYWRGaWxlRnJvbURyaXZlKGZpbGVJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvbnRlbnQ6IGNvbnRlbnQsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbZ2V0RGF0RmlsZUNvbnRlbnRdIENSSVRJQ0FMIEVSUk9SIGZvciBmaWxlSWQgJHtmaWxlSWR9OmAsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgY29udGVudDogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gcmV0cmlldmUgZmlsZSBjb250ZW50OiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmaWxlOiBGaWxlLCBzY2hlZHVsZTogc3RyaW5nLCBwcm9maWxlOiBUYXhQcm9maWxlLCBtb250aDogc3RyaW5nLCB5ZWFyOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG4gICAgXG4gICAgY29uc3Qgc2hlZXROYW1lID0gYHNhd3RfJHtzY2hlZHVsZX1gO1xuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgc2hlZXROYW1lKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGlmIChkYXRhUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbYE5vIGRhdGEgZm91bmQgaW4gc2hlZXQgXCIke3NoZWV0TmFtZX1cIi5gXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY29tYmluZWRBVEMgPSBbLi4uYXRjV0UsIC4uLmF0Y1dHXTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSlcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKS5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPiAwICYmIHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0YyA9IFN0cmluZyhwcm9jZXNzZWRSb3dbNl0gfHwgJycpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0YztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFt7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnSW5jb21lIFBheW1lbnQnLCBpbmRleDogOCB9LCB7IG5hbWU6ICdXaXRoaG9sZGluZyBUYXgnLCBpbmRleDogOSB9XTtcbiAgICAgICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYXRjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXRjRGF0YSA9IGNvbWJpbmVkQVRDLmZpbmQoaXRlbSA9PiBpdGVtLmF0YyA9PT0gYXRjKTtcbiAgICAgICAgICAgICAgICBpZiAoYXRjRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pICE9PSBhdGNEYXRhLnJhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJbnZhbGlkIHJhdGUgZm9yIEFUQyAke2F0Y30uIEV4cGVjdGVkICR7YXRjRGF0YS5yYXRlfSUsIGJ1dCBnb3QgJHtwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSl9JS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNBV1QuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycyB9O1xuICAgIH1cblxuICAgIHByb2Nlc3NlZERhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMl0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMl0pKSk7XG4gICAgXG4gICAgY29uc3QgcmVwb3J0aW5nUGVyaW9kID0gYCR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0vJHt5ZWFyfWA7XG5cbiAgICBjb25zdCB0YXhwYXllck5hbWUgPSBwcm9maWxlLmVudGl0eVR5cGUgPT09ICdJbmRpdmlkdWFsJyBcbiAgICAgICAgPyBgJHtwcm9maWxlLmxhc3ROYW1lfSAke3Byb2ZpbGUuZmlyc3ROYW1lfSAke3Byb2ZpbGUubWlkZGxlTmFtZX1gXG4gICAgICAgIDogcHJvZmlsZS5jb21wYW55TmFtZTtcblxuICAgIGNvbnN0IGhlYWRlciA9IFsnSFNBV1QnLCBgSCR7c2NoZWR1bGV9YCwgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCBxdW90ZUlmTm90RW1wdHkodGF4cGF5ZXJOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuZmlyc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcmVwb3J0aW5nUGVyaW9kLCBwcm9maWxlLnJkb0NvZGVdLmpvaW4oJywnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ0RTQVdUJywgYEQke3NjaGVkdWxlfWAsIGluZGV4ICsgMSwgcm93WzBdLCByb3dbMV0sXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSxcbiAgICAgICAgICAgIHJlcG9ydGluZ1BlcmlvZCwgJycsIHJvd1s2XSwgcm93WzddLCByb3dbOF0sIHJvd1s5XVxuICAgICAgICBdLmpvaW4oJywnKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGNvbnN0IHRvdGFsSW5jb21lUGF5bWVudCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFdpdGhob2xkaW5nVGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgIFxuICAgIGNvbnN0IGZvb3RlciA9IFsnQ1NBV1QnLCBgQyR7c2NoZWR1bGV9YCwgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCByZXBvcnRpbmdQZXJpb2QsIHRvdGFsSW5jb21lUGF5bWVudC50b0ZpeGVkKDIpLCB0b3RhbFdpdGhob2xkaW5nVGF4LnRvRml4ZWQoMildLmpvaW4oJywnKTtcblxuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBbaGVhZGVyLCBkZXRhaWxSb3dzLCBmb290ZXJdLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7cHJvZmlsZS50cFRJTn0ke3Byb2ZpbGUuYnJhbmNoQ29kZX0ke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9JHt5ZWFyfSR7c2NoZWR1bGV9LkRBVGA7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRDb250ZW50OiBkYXRDb250ZW50LFxuICAgICAgICBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IHRvdGFsSW5jb21lUGF5bWVudCxcbiAgICAgICAgdG90YWxXaXRoaG9sZGluZ1RheCxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkFxMUJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {
                orientation: "horizontal"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dat-preview-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DatPreviewDialog": (()=>DatPreviewDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function DatPreviewDialog({ isOpen, onOpenChange, fileName, content, isViewing = false, reportType = 'none', totals = {} }) {
    const handleDownload = ()=>{
        const blob = new Blob([
            content
        ], {
            type: 'text/plain;charset=utf-8'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const formatCurrency = (value)=>{
        if (value === undefined) return '0.00';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };
    const showDownload = !isViewing || isViewing && reportType !== 'none';
    const title = isViewing ? "DAT File Preview" : "Conversion Successful";
    const description = isViewing ? "Review the content of the DAT file below." : "Your DAT file is ready. Please review the content below before downloading.";
    const icon = isViewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
        className: "w-6 h-6 text-primary"
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 80,
        columnNumber: 28
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
        className: "w-6 h-6 text-accent-foreground"
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 80,
        columnNumber: 71
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-full h-[80vh] flex flex-col p-0 bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "p-6 pb-4 shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-xl text-black",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-slate-600",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-6 pb-4 flex flex-col gap-4 min-h-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono text-sm space-y-1 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Filename:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 100,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        fileName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                reportType === 'sales' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Exempt:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.exempt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 103,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Zero-Rated:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.zeroRated)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 104,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Vatable:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.vatable)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 105,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Output VAT:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.outputVat)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 106,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true),
                                reportType === 'purchases' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Exempt Purchases:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.exempt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 111,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Zero-Rated Purchases:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.zeroRated)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 112,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Services:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.services)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 113,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Capital Goods:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.capitalGoods)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 114,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Other Goods:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.otherGoods)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 115,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Input Tax:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.inputTax)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 116,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true),
                                reportType === '1601eq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Taxable Income Payment:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.taxableIncome)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 121,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Exempt Income Payment:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.exemptIncome)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 122,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Withholding Tax:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.withholdingTax)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 123,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true),
                                reportType === 'sawt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Income Payment:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.taxableIncome)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 128,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Tax Withheld:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.withholdingTax)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 129,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "flex-1 border rounded-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "p-4 text-xs font-mono whitespace-pre",
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollBar"], {
                                    orientation: "horizontal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "p-4 border-t shrink-0",
                    children: showDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleDownload,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this),
                            "Download"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                        lineNumber: 140,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dat-preview-dialog.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c = DatPreviewDialog;
var _c;
__turbopack_context__.k.register(_c, "DatPreviewDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(app)/dat-files/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DatFilesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-refresh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search-x.js [app-client] (ecmascript) <export default as SearchX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$67761b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:67761b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dat$2d$preview$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dat-preview-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dat$2d$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dat-files.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function DatFilesContent() {
    _s();
    const { setRefreshFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const { files, isPending, initialFetchComplete, fetchFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dat$2d$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatFiles"])();
    const [isViewing, startViewingTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [viewingFileId, setViewingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const ITEMS_PER_PAGE = 10;
    const [isPreviewOpen, setIsPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewData, setPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatFilesContent.useCallback[handleFetch]": (isManualRefresh = false)=>{
            fetchFiles(isManualRefresh);
        }
    }["DatFilesContent.useCallback[handleFetch]"], [
        fetchFiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatFilesContent.useEffect": ()=>{
            // Set the refresh function for the header button to allow manual refresh
            setRefreshFunction({
                "DatFilesContent.useEffect": ()=>({
                        "DatFilesContent.useEffect": ()=>handleFetch(true)
                    })["DatFilesContent.useEffect"]
            }["DatFilesContent.useEffect"]);
        }
    }["DatFilesContent.useEffect"], [
        handleFetch,
        setRefreshFunction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatFilesContent.useEffect": ()=>{
            setCurrentPage(1);
            setSelectedFiles([]);
        }
    }["DatFilesContent.useEffect"], [
        searchQuery
    ]);
    const handleViewFile = (file)=>{
        setViewingFileId(file.id);
        startViewingTransition(async ()=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$67761b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDatFileContent"])(file.id);
                if (result.success && result.content) {
                    const lines = result.content.split('\n');
                    const { transactionType } = parseFileName(file.name);
                    let reportType = 'none';
                    let totals = {};
                    if (transactionType.includes('1601-EQ')) {
                        reportType = '1601eq';
                        const footer1 = lines.find((line)=>line.startsWith('C1,'));
                        const footer2 = lines.find((line)=>line.startsWith('C2,'));
                        if (footer1) {
                            const cols = footer1.split(',');
                            totals.taxableIncome = parseFloat(cols[5] || '0');
                            totals.withholdingTax = parseFloat(cols[6] || '0');
                        }
                        if (footer2) {
                            const cols = footer2.split(',');
                            totals.exemptIncome = parseFloat(cols[5] || '0');
                        }
                    } else if (transactionType.startsWith('SAWT')) {
                        reportType = 'sawt';
                        const footer = lines.find((line)=>line.startsWith('CSAWT,'));
                        if (footer) {
                            const cols = footer.split(',');
                            totals.taxableIncome = parseFloat(cols[5] || '0');
                            totals.withholdingTax = parseFloat(cols[6] || '0');
                        }
                    } else if (transactionType === 'Sales') {
                        reportType = 'sales';
                        const detailLines = lines.filter((line)=>line.startsWith('D,'));
                        totals = detailLines.reduce((acc, line)=>{
                            const columns = line.split(',');
                            acc.exempt = (acc.exempt ?? 0) + parseFloat(columns[9] || '0');
                            acc.zeroRated = (acc.zeroRated ?? 0) + parseFloat(columns[10] || '0');
                            acc.vatable = (acc.vatable ?? 0) + parseFloat(columns[11] || '0');
                            acc.outputVat = (acc.outputVat ?? 0) + parseFloat(columns[12] || '0');
                            return acc;
                        }, {
                            exempt: 0,
                            zeroRated: 0,
                            vatable: 0,
                            outputVat: 0
                        });
                    } else if (transactionType === 'Purchases') {
                        reportType = 'purchases';
                        const detailLines = lines.filter((line)=>line.startsWith('D,'));
                        totals = detailLines.reduce((acc, line)=>{
                            const columns = line.split(',');
                            acc.exempt = (acc.exempt ?? 0) + parseFloat(columns[9] || '0');
                            acc.zeroRated = (acc.zeroRated ?? 0) + parseFloat(columns[10] || '0');
                            acc.services = (acc.services ?? 0) + parseFloat(columns[11] || '0');
                            acc.capitalGoods = (acc.capitalGoods ?? 0) + parseFloat(columns[12] || '0');
                            acc.otherGoods = (acc.otherGoods ?? 0) + parseFloat(columns[13] || '0');
                            acc.inputTax = (acc.inputTax ?? 0) + parseFloat(columns[14] || '0');
                            return acc;
                        }, {
                            exempt: 0,
                            zeroRated: 0,
                            services: 0,
                            capitalGoods: 0,
                            otherGoods: 0,
                            inputTax: 0
                        });
                    }
                    setPreviewData({
                        fileName: file.name,
                        content: result.content,
                        isViewing: true,
                        reportType,
                        totals
                    });
                    setIsPreviewOpen(true);
                } else {
                    toast({
                        title: 'Error',
                        description: result.error || 'Failed to fetch file content.',
                        variant: 'destructive'
                    });
                }
            } finally{
                setViewingFileId(null);
            }
        });
    };
    const filteredFiles = files.filter((file)=>file.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b)=>new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime());
    const totalPages = Math.ceil(filteredFiles.length / ITEMS_PER_PAGE);
    const paginatedFiles = filteredFiles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const handlePreviousPage = ()=>{
        setCurrentPage((prev)=>Math.max(prev - 1, 1));
        setSelectedFiles([]);
    };
    const handleNextPage = ()=>{
        setCurrentPage((prev)=>Math.min(prev + 1, totalPages));
        setSelectedFiles([]);
    };
    const handleSelectRow = (fileId, checked)=>{
        if (checked) {
            setSelectedFiles((prev)=>[
                    ...prev,
                    fileId
                ]);
        } else {
            setSelectedFiles((prev)=>prev.filter((id)=>id !== fileId));
        }
    };
    const parseFileName = (fileName)=>{
        const tinLength = 9;
        const branchCodeLength = 4;
        const tinAndBranchLength = tinLength + branchCodeLength;
        const sawtSchedules = [
            "1700",
            "1702",
            "2550Q",
            "1701",
            "1702Q",
            "2551M",
            "1701Q",
            "2550M",
            "2553"
        ];
        if (fileName.includes('1601EQ')) {
            const monthIndex = tinAndBranchLength;
            const yearIndex = monthIndex + 2;
            const month = fileName.substring(monthIndex, yearIndex);
            const year = fileName.substring(yearIndex, yearIndex + 4);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
            });
            return {
                transactionType: '1601-EQ',
                reportingPeriod
            };
        }
        const sortedSawtSchedules = sawtSchedules.sort((a, b)=>b.length - a.length);
        const sawtScheduleMatch = sortedSawtSchedules.find((schedule)=>fileName.includes(schedule));
        if (sawtScheduleMatch) {
            const monthIndex = tinAndBranchLength;
            const yearIndex = monthIndex + 2;
            const month = fileName.substring(monthIndex, yearIndex);
            const year = fileName.substring(yearIndex, yearIndex + 4);
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
            });
            return {
                transactionType: `SAWT-${sawtScheduleMatch}`,
                reportingPeriod
            };
        }
        const typeCode = fileName.charAt(9);
        const month = fileName.substring(10, 12);
        const year = fileName.substring(12, 16);
        let transactionType = 'Unknown';
        switch(typeCode){
            case 'S':
                transactionType = 'Sales';
                break;
            case 'P':
                transactionType = 'Purchases';
                break;
            case 'I':
                transactionType = 'Importations';
                break;
        }
        const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });
        return {
            transactionType,
            reportingPeriod
        };
    };
    const noResults = !isPending && paginatedFiles.length === 0 && initialFetchComplete;
    const showLoading = isPending || !initialFetchComplete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 md:p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold",
                        children: "DAT Files"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Manage your generated DAT files."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Search by filename...",
                                                className: "pl-8",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: showLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 text-center flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-6 w-6 animate-spin text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Loading files..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 29
                                }, this) : noResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 text-center flex flex-col items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__["SearchX"], {
                                            className: "h-12 w-12 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "No DAT Files Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: searchQuery ? "No files matched your search." : "You haven't generated any DAT files yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-md hidden md:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[5%]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[30%]",
                                                                    children: "File Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[20%]",
                                                                    children: "Transaction Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[20%]",
                                                                    children: "Reporting Period"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[15%]",
                                                                    children: "Last Modified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[10%] text-right",
                                                                    children: "Actions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                        children: paginatedFiles.map((file)=>{
                                                            const { transactionType, reportingPeriod } = parseFileName(file.name);
                                                            const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                "data-state": selectedFiles.includes(file.id) && "selected",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: selectedFiles.includes(file.id),
                                                                            onCheckedChange: (checked)=>handleSelectRow(file.id, Boolean(checked)),
                                                                            "aria-label": "Select row"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "font-mono",
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: transactionType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: reportingPeriod
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(file.modifiedTime), 'PP')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-end gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "icon",
                                                                                    onClick: ()=>handleViewFile(file),
                                                                                    disabled: isViewing,
                                                                                    children: [
                                                                                        isFileBeingViewed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "h-4 w-4 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 271,
                                                                                            columnNumber: 86
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 271,
                                                                                            columnNumber: 133
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "View"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 272,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 270,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "icon",
                                                                                    onClick: ()=>console.log('Download', file.id),
                                                                                    disabled: isFileBeingViewed,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 275,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "Download"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 276,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "icon",
                                                                                    className: "text-destructive hover:text-destructive",
                                                                                    onClick: ()=>console.log('Delete', file.id),
                                                                                    disabled: isFileBeingViewed,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 279,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 280,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 278,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, file.id, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 49
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block md:hidden space-y-4",
                                            children: paginatedFiles.map((file)=>{
                                                const { transactionType, reportingPeriod } = parseFileName(file.name);
                                                const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-4",
                                                    "data-state": selectedFiles.includes(file.id) && "selected",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                checked: selectedFiles.includes(file.id),
                                                                onCheckedChange: (checked)=>handleSelectRow(file.id, Boolean(checked)),
                                                                "aria-label": "Select row",
                                                                className: "mr-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold font-mono truncate",
                                                                        title: file.name,
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: reportingPeriod
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm mt-1",
                                                                        children: transactionType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center flex-shrink-0 ml-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8",
                                                                        onClick: ()=>handleViewFile(file),
                                                                        disabled: isViewing,
                                                                        children: [
                                                                            isFileBeingViewed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "h-4 w-4 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 312,
                                                                                columnNumber: 74
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 312,
                                                                                columnNumber: 121
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "View"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 313,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8",
                                                                        onClick: ()=>console.log('Download', file.id),
                                                                        disabled: isFileBeingViewed,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 316,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "Download"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8 text-destructive hover:text-destructive",
                                                                        onClick: ()=>console.log('Delete', file.id),
                                                                        disabled: isFileBeingViewed,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 320,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "Delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 41
                                                    }, this)
                                                }, file.id, false, {
                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 37
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 30
                                        }, this),
                                        filteredFiles.length > ITEMS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-end space-x-2 py-4 px-0 md:px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "Page ",
                                                        totalPages > 0 ? currentPage : 0,
                                                        " of ",
                                                        totalPages
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handlePreviousPage,
                                                    disabled: currentPage <= 1,
                                                    children: "Previous"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleNextPage,
                                                    disabled: currentPage >= totalPages,
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this),
            previewData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dat$2d$preview$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatPreviewDialog"], {
                isOpen: isPreviewOpen,
                onOpenChange: setIsPreviewOpen,
                fileName: previewData.fileName,
                content: previewData.content,
                isViewing: previewData.isViewing,
                reportType: previewData.reportType,
                totals: previewData.totals
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                lineNumber: 359,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(DatFilesContent, "MJiQBQKmGbWjUTKAMgjgtHSNypU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dat$2d$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatFiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DatFilesContent;
function DatFilesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatFilesContent, {}, void 0, false, {
        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
        lineNumber: 374,
        columnNumber: 12
    }, this);
}
_c1 = DatFilesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DatFilesContent");
__turbopack_context__.k.register(_c1, "DatFilesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_965a4c9d._.js.map