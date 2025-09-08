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
"[project]/src/lib/data:d5ce56 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f56ad56ebf97cdfae4d75ba1150348b241dd020b":"getDatFileContent"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "getDatFileContent": (()=>getDatFileContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getDatFileContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f56ad56ebf97cdfae4d75ba1150348b241dd020b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDatFileContent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlLCBkZWxldGVGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5pbXBvcnQgeyBhdGNXRSwgYXRjRXhlbXB0LCBhdGNXRyB9IGZyb20gJy4vc2NoZWR1bGVzJztcblxuY29uc3QgQW5hbHl6ZUZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcblxudHlwZSBBbmFseXplRmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVFeGNlbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxBbmFseXplRmlsZVJlc3VsdD4ge1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZC4nIH07XG4gIH1cblxuICAvLyBDaGVjayBmaWxlIHR5cGVcbiAgaWYgKGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyAmJiBmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnSW52YWxpZCBmaWxlIHR5cGUuIFBsZWFzZSB1cGxvYWQgYW4gRXhjZWwgZmlsZS4nIH07XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgIGNvbnN0IGRhdGFVcmkgPSBgZGF0YToke2ZpbGUudHlwZX07YmFzZTY0LCR7YnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKX1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhjZWxFcnJvckRldGVjdGlvbih7IGV4Y2VsRGF0YVVyaTogZGF0YVVyaSB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gYW5hbHl6ZSBmaWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuY29uc3QgQXV0aFJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIHVzZXI6IHoub2JqZWN0KHtcbiAgICAgICAgdXNlck5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgIGRhdGFiYXNlSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgZm9sZGVySWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB9KS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQXV0aFJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEF1dGhSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwVXNlcih1c2VyRGF0YTogU2lnbnVwRGF0YSk6IFByb21pc2U8QXV0aFJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvbGRlcklkID0gYXdhaXQgY3JlYXRlRm9sZGVySW5Ecml2ZShgREFUR2VuaWVfJHt1c2VyRGF0YS51c2VyTmFtZX1gKTtcbiAgICBhd2FpdCBhcHBlbmRVc2VyVG9TaGVldCh7IC4uLnVzZXJEYXRhLCBmb2xkZXJJZCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgdXNlcjogbnVsbCB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyB1cCB1c2VyOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHNpZ24gdXA6ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKGNyZWRlbnRpYWxzOiBMb2dpbkRhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldEFsbFVzZXJzKCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS51c2VyTmFtZSA9PT0gY3JlZGVudGlhbHMudXNlck5hbWUgJiYgdS5wd2QgPT09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgbGV0IGZvbGRlcklkID0gdXNlci5mb2xkZXJJZDtcbiAgICAgICAgICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciAke3VzZXIudXNlck5hbWV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXJJZC4gQ3JlYXRpbmcgb25lIG5vdy5gKTtcbiAgICAgICAgICAgICAgICBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlci51c2VyTmFtZX1gKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVVc2VyRm9sZGVySWQodXNlci51c2VyTmFtZSwgZm9sZGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgYXNzaWduZWQgZm9sZGVySWQgJHtmb2xkZXJJZH0gdG8gdXNlciAke3VzZXIudXNlck5hbWV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IHsgdXNlck5hbWU6IHVzZXIudXNlck5hbWUsIGRhdGFiYXNlSWQ6IHVzZXIuZGF0YWJhc2VJZCwgZm9sZGVySWQ6IGZvbGRlcklkIH0gfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJywgdXNlcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluIHVzZXI6JywgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBsb2dpbjogJHtlcnJvck1lc3NhZ2V9YCwgdXNlcjogbnVsbCB9O1xuICAgIH1cbn1cblxuY29uc3QgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGRhdGE6IHouYXJyYXkoVGF4UHJvZmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBUYXhQcm9maWxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySGVhZGVyRGF0YShkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFRheFByb2ZpbGVSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGFiYXNlSWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0RhdGFiYXNlIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyRGF0YSA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogaGVhZGVyRGF0YSwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBoZWFkZXIgZGF0YTonLCBlcnJvcik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCBoZWFkZXIgZGF0YTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cblxudHlwZSBNdXRhdGlvblJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIE11dGF0aW9uUmVzdWx0U2NoZW1hPjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9VcHBlcmNhc2UoZGF0YTogVGF4UHJvZmlsZSk6IFRheFByb2ZpbGUge1xuICBjb25zdCB1cHBlcmNhc2VkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleSBhcyBrZXlvZiBUYXhQcm9maWxlXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBrZXkgIT09ICdlbnRpdHlUeXBlJyAmJiBrZXkgIT09ICdjeWNsZVR5cGUnICYmIGtleSAhPT0gJ21vbnRoU2VsZWN0JyAmJiBrZXkgIT09ICdyZG9Db2RlJykge1xuICAgICAgdXBwZXJjYXNlZERhdGFba2V5XSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVwcGVyY2FzZWREYXRhIGFzIFRheFByb2ZpbGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9maWxlcyA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgY29uc3QgdGluRXhpc3RzID0gZXhpc3RpbmdQcm9maWxlcy5zb21lKHAgPT4gcC50cFRJTiA9PT0gdmFsaWRhdGVkRGF0YS50cFRJTik7XG5cbiAgICBpZiAodGluRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICAgICAgZXJyb3I6ICdUaGlzIFRJTiBhbHJlYWR5IGhhcyBhIHByb2ZpbGUuIFBsZWFzZSBjaGVjayB5b3VyIGRhdGEgb3IgcmVmcmVzaCB0aGUgcGFnZS4nLCBcbiAgICAgICAgICAgIGRhdGE6IG51bGwgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJjYXNlZERhdGEgPSB0cmFuc2Zvcm1Ub1VwcGVyY2FzZSh2YWxpZGF0ZWREYXRhKTtcbiAgICBhd2FpdCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCh1cHBlcmNhc2VkRGF0YSwgZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIGRhdGE6IHVwcGVyY2FzZWREYXRhIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gYWRkIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5jb25zdCBTaW1wbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBTaW1wbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBTaW1wbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGF4UHJvZmlsZSh0cFRJTjogc3RyaW5nLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFNpbXBsZVJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0KHRwVElOLCBkYXRhYmFzZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gZGVsZXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZGF0Q29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGZpbGVOYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcnM6IHouYXJyYXkoei5zdHJpbmcoKSkubnVsbGFibGUoKSxcbiAgICBmaWxlRXhpc3RzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIC8vIFNhbGVzIFRvdGFsc1xuICAgIHRvdGFsRXhlbXB0OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxaZXJvUmF0ZWQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbFRheGFibGVTYWxlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3V0cHV0VGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgLy8gUHVyY2hhc2UgVG90YWxzXG4gICAgdG90YWxTZXJ2aWNlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsQ2FwaXRhbEdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxPdGhlckdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxJbnB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIDE2MDEtRVEgYW5kIFNBV1QgVG90YWxzXG4gICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsV2l0aGhvbGRpbmdUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCB3b3JrYm9vayA9IHhsc3gucmVhZChieXRlcywgeyB0eXBlOiAnYXJyYXknIH0pO1xuXG4gICAgaWYgKCF3b3JrYm9vay5TaGVldE5hbWVzLmluY2x1ZGVzKHNoZWV0TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICBoZWFkZXI6IDEsXG4gICAgICAgIGRlZnZhbDogJycsXG4gICAgICAgIHJhdzogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLnNsaWNlKDEpLCB2YWxpZGF0aW9uRXJyb3JzOiBbXSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0geyBcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICBlcnJvcnM6IFtdLCBcbiAgICAgICAgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuICAgICAgICBpZiAocHJvY2Vzc2VkUm93Lmxlbmd0aCA+IDAgJiYgU3RyaW5nKHByb2Nlc3NlZFJvd1swXSkudHJpbSgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpID09PSB0aW4pIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUaGUgVElOIG1hdGNoZXMgdGhlIHNlbGVjdGVkIHByb2ZpbGUncyBUSU4uIEEgY29tcGFueSBjYW5ub3QgbWFrZSBhIHNhbGUgdG8gaXRzZWxmLmApO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIGF0IGxlYXN0IDkgZGlnaXRzLmApO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gaXMgbWlzc2luZy5gKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMSwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1lcmljRmllbGRzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnRXhlbXB0IFNhbGVzJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnWmVyby1SYXRlZCBTYWxlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUYXhhYmxlIFNhbGVzJywgaW5kZXg6IDkgfSwgeyBuYW1lOiAnT3V0cHV0IFRheCcsIGluZGV4OiAxMCB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzhdKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s5XSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgc2FsZXMgYW1vdW50IChFeGVtcHQsIFplcm8tUmF0ZWQsIG9yIFRheGFibGUpIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiB9O1xuICAgIH1cbiAgICBcbiAgICBwcm9jZXNzZWREYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzFdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzFdKSkpO1xuICAgIFxuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7dGlufVMke21vbnRofSR7eWVhcn0uREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIlNhbGVzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcblxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUycsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsVGF4YWJsZVNhbGVzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3V0cHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMF0pLCAwKTtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSBbJ0gnLCAnUycsIHF1b3RlSWZOb3RFbXB0eSh0aW4pLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5jb21wYW55TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmxhc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuZmlyc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubWlkZGxlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLnRyYWRlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMiksIHRvdGFsRXhlbXB0LnRvRml4ZWQoMiksIHRvdGFsWmVyb1JhdGVkLnRvRml4ZWQoMiksIHRvdGFsVGF4YWJsZVNhbGVzLnRvRml4ZWQoMiksIHRvdGFsT3V0cHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIFRoaXMgbm93IHJ1bnMgaW4gdGhlIGJhY2tncm91bmQgYW5kIGRvZXMgbm90IGJsb2NrIHRoZSByZXR1cm5cbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKVxuICAgICAgICAudGhlbihmaWxlID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVwbG9hZCBpcyBjb21wbGV0ZS4gVGhlIGNsaWVudCB3aWxsIHRyaWdnZXIgYSByZS1mZXRjaCBzZXBhcmF0ZWx5LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbQWN0aW9uIEJHXSBVcGxvYWQgY29tcGxldGUgZm9yICR7ZmlsZS5uYW1lfS4gRGV0YWlsczpgLCBmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlMTYwMUVRRGF0RmlsZShmaWxlOiBGaWxlLCBwcm9maWxlOiBUYXhQcm9maWxlLCBtb250aDogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIGZvbGRlcklkOiBzdHJpbmcsIG92ZXJ3cml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgeyB0cFRJTjogdGluLCBicmFuY2hDb2RlIH0gPSBwcm9maWxlO1xuICAgIGNvbnN0IGRlZmF1bHRFcnJvclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIGVycm9yOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IHNjaGVkMURhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBzY2hlZDFGaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwiMTYwMUVRX3NjaGVkMVwiKTtcbiAgICBpZiAoc2NoZWQxRmlsZUVycm9ycy5sZW5ndGggPiAwKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yczogc2NoZWQxRmlsZUVycm9ycyB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBzY2hlZDJEYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogc2NoZWQyRmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcIjE2MDFFUV9zY2hlZDJcIik7XG4gICAgaWYgKHNjaGVkMkZpbGVFcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHNjaGVkMkZpbGVFcnJvcnMgfTtcblxuICAgIGNvbnN0IHNjaGVkMUhhc0RhdGEgPSBzY2hlZDFEYXRhUm93cy5zb21lKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSk7XG4gICAgY29uc3Qgc2NoZWQySGFzRGF0YSA9IHNjaGVkMkRhdGFSb3dzLnNvbWUocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKTtcblxuICAgIGlmICghc2NoZWQxSGFzRGF0YSAmJiAhc2NoZWQySGFzRGF0YSkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yczogW1wiTm8gZGF0YSBmb3VuZCBpbiBTY2hlZHVsZSAxIG9yIFNjaGVkdWxlIDIgc2hlZXRzLlwiXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBQcm9jZXNzIFNjaGVkdWxlIDEgKFRheGFibGUpXG4gICAgY29uc3QgcHJvY2Vzc2VkU2NoZWQxRGF0YSA9IHNjaGVkMURhdGFSb3dzXG4gICAgICAgIC5maWx0ZXIocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKVxuICAgICAgICAubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2Nlc3NlZFJvd1swXSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA+IDAgJiYgc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDEgJHtmaWVsZC5uYW1lfWAsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBhdGMgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzZdIHx8ICcnKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbNl0gPSBhdGM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbeyBuYW1lOiAnUmF0ZScsIGluZGV4OiA3IH0sIHsgbmFtZTogJ0luY29tZSBQYXltZW50JywgaW5kZXg6IDggfSwgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfV07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgYFNjaGVkMSAke2ZpZWxkLm5hbWV9YCwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGF0Yykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0Y0RhdGEgPSBhdGNXRS5maW5kKGl0ZW0gPT4gaXRlbS5hdGMgPT09IGF0Yyk7XG4gICAgICAgICAgICAgICAgaWYgKGF0Y0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKSAhPT0gYXRjRGF0YS5yYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEludmFsaWQgcmF0ZSBmb3IgQVRDICR7YXRjfS4gRXhwZWN0ZWQgJHthdGNEYXRhLnJhdGV9JSwgYnV0IGdvdCAke3BhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKX0lLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDEgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNjaGVkdWxlIDEuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICAvLyBQcm9jZXNzIFNjaGVkdWxlIDIgKEV4ZW1wdClcbiAgICBjb25zdCBwcm9jZXNzZWRTY2hlZDJEYXRhID0gc2NoZWQyRGF0YVJvd3NcbiAgICAgICAgLmZpbHRlcihyb3cgPT4gcm93LnNvbWUoY2VsbCA9PiBTdHJpbmcoY2VsbCkudHJpbSgpICE9PSAnJykpXG4gICAgICAgIC5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUm93TnVtYmVyID0gaW5kZXggKyAyO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIGlmIChTdHJpbmcocHJvY2Vzc2VkUm93WzBdIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoID4gMCAmJiBzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgOSBkaWdpdHMgaWYgcHJvdmlkZWQuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBicmFuY2hDb2RlID0gU3RyaW5nKHByb2Nlc3NlZFJvd1sxXSB8fCAnJykucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGUgPyBicmFuY2hDb2RlLnNsaWNlKC00KS5wYWRTdGFydCg0LCAnMCcpIDogXCIwMDAwXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDUwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDQsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01pZGRsZSBOYW1lJywgaW5kZXg6IDUsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIG5hbWVGaWVsZHNJbmZvLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgYFNjaGVkMiAke2ZpZWxkLm5hbWV9YCwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYXRjID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s2XSB8fCAnJykudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzZdID0gYXRjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1s3XSwgYFNjaGVkMiBJbmNvbWUgUGF5bWVudGAsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzddID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoYXRjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXRjRGF0YSA9IGF0Y0V4ZW1wdC5maW5kKGl0ZW0gPT4gaXRlbS5hdGMgPT09IGF0Yyk7XG4gICAgICAgICAgICAgICAgaWYgKCFhdGNEYXRhKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMiBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlICcke2F0Y30nIGlzIG5vdCB2YWxpZCBmb3IgU2NoZWR1bGUgMi5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMiBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICBcbiAgICAvLyBBbGwgdmFsaWRhdGlvbnMgcGFzc2VkLCBub3cgY2hlY2sgZm9yIGV4aXN0aW5nIGZpbGVcbiAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn0ke2JyYW5jaENvZGV9JHttb250aC5wYWRTdGFydCgyLCAnMCcpfSR7eWVhcn0xNjAxRVEuREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIjE2MDFFUVwiO1xuICAgIGNvbnN0IGRyaXZlUGF0aCA9IFt0aW4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG4gICAgXG4gICAgaWYgKCFvdmVyd3JpdGUpIHtcbiAgICAgICAgY29uc3QgZmlsZUV4aXN0cyA9IGF3YWl0IGNoZWNrRmlsZUV4aXN0cyhkYXRGaWxlTmFtZSwgZm9sZGVySWQsIGRyaXZlUGF0aCk7XG4gICAgICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWxlRXhpc3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzZWRTY2hlZDFEYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzJdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzJdKSkpO1xuICAgIHByb2Nlc3NlZFNjaGVkMkRhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMl0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMl0pKSk7XG5cbiAgICBjb25zdCByZXBvcnRpbmdQZXJpb2QgPSBgJHttb250aC5wYWRTdGFydCgyLCAnMCcpfS8ke3llYXJ9YDtcbiAgICBsZXQgZGF0Q29udGVudFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICAgIC8vIEhlYWRlciBSb3dcbiAgICBjb25zdCB0YXhwYXllck5hbWUgPSBwcm9maWxlLmVudGl0eVR5cGUgPT09ICdJbmRpdmlkdWFsJ1xuICAgICAgICA/IGAke3Byb2ZpbGUubGFzdE5hbWV9ICR7cHJvZmlsZS5maXJzdE5hbWV9ICR7cHJvZmlsZS5taWRkbGVOYW1lfWBcbiAgICAgICAgOiBwcm9maWxlLmNvbXBhbnlOYW1lO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IFsnSFFBUCcsICdIMTYwMUVRJywgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCBxdW90ZUlmTm90RW1wdHkodGF4cGF5ZXJOYW1lKSwgcmVwb3J0aW5nUGVyaW9kLCBwcm9maWxlLnJkb0NvZGVdLmpvaW4oJywnKTtcbiAgICBkYXRDb250ZW50UGFydHMucHVzaChtYWluSGVhZGVyKTtcblxuICAgIGxldCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gMDtcbiAgICBsZXQgdG90YWxXaXRoaG9sZGluZ1RheCA9IDA7XG4gICAgbGV0IHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCA9IDA7XG5cbiAgICAvLyBTY2hlZHVsZSAxIENvbnRlbnRcbiAgICBpZiAocHJvY2Vzc2VkU2NoZWQxRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbFJvd3MxID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IFsnRDEnLCAnMTYwMUVRJywgaW5kZXggKyAxLCByb3dbMF0sIHJvd1sxXSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHJlcG9ydGluZ1BlcmlvZCwgcm93WzZdLCByb3dbN10sIHJvd1s4XSwgcm93WzldXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cxID0gWydDMScsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudC50b0ZpeGVkKDIpLCB0b3RhbFdpdGhob2xkaW5nVGF4LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czEsIGZvb3RlclJvdzEpO1xuICAgIH1cblxuICAgIC8vIFNjaGVkdWxlIDIgQ29udGVudFxuICAgIGlmIChwcm9jZXNzZWRTY2hlZDJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGV0YWlsUm93czIgPSBwcm9jZXNzZWRTY2hlZDJEYXRhLm1hcCgocm93LCBpbmRleCkgPT4gWydEMicsICcxNjAxRVEnLCBpbmRleCArIDEsIHJvd1swXSwgcm93WzFdLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcmVwb3J0aW5nUGVyaW9kLCByb3dbNl0sIHJvd1s3XV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICAgICAgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQyRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cyID0gWydDMicsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czIsIGZvb3RlclJvdzIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBkYXRDb250ZW50UGFydHMuam9pbignXFxuJyk7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSlcbiAgICAgICAgLnRoZW4oZmlsZSA9PiB7XG4gICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0FjdGlvbiBCR10gVXBsb2FkIGNvbXBsZXRlIGZvciAke2ZpbGUubmFtZX0uIERldGFpbHM6YCwgZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRDb250ZW50LFxuICAgICAgICBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQsXG4gICAgICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCxcbiAgICAgICAgdG90YWxXaXRoaG9sZGluZ1RheCxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gZm9ybURhdGEuZ2V0KCdzY2hlZHVsZScpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKCFmaWxlIHx8ICFyZXBvcnRUeXBlIHx8ICFtb250aCB8fCAheWVhciB8fCAhcHJvZmlsZVN0cmluZyB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgY29udmVyc2lvbi4nIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZTogVGF4UHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZVN0cmluZyk7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgUHVyY2hhc2VzIChTTFApXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB2YWxpZGF0ZUV4Y2VsRm9yUHVyY2hhc2VzKGZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCIxNjAxLUVRIChTY2hlZHVsZSAxIGFuZCAyKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgQWxwaGFsaXN0IG9mIFdpdGhob2xkaW5nIFRheCAoU0FXVClcIikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdTQVdUIHNjaGVkdWxlIGlzIG1pc3NpbmcuJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvdmVyd3JpdGVEYXRGaWxlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBjb25zdCByZXBvcnRUeXBlID0gZm9ybURhdGEuZ2V0KCdyZXBvcnRUeXBlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZm9ybURhdGEuZ2V0KCdmb2xkZXJJZCcpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvY2Vzc2VkRGF0YScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3Qgbm9uQ3JlZGl0YWJsZVRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBzY2hlZHVsZSA9IGZvcm1EYXRhLmdldCgnc2NoZWR1bGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgIGlmICghZmlsZSkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgZmlsZSBmb3Igb3ZlcndyaXRlLicgfTtcbiAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBBbHBoYWxpc3Qgb2YgV2l0aGhvbGRpbmcgVGF4IChTQVdUKVwiKSB7XG4gICAgICAgICAgICBpZiAoIWZpbGUgfHwgIXNjaGVkdWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIG9yIHNjaGVkdWxlIGZvciBTQVdUIG92ZXJ3cml0ZS4nIH07XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3B1cmNoYXNlc1wiKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDUwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ01pZGRsZSBOYW1lJywgaW5kZXg6IDQsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAxJywgaW5kZXg6IDUsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDInLCBpbmRleDogNiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc2VkRGF0YS5zb3J0KChhLCBiKSA9PiBTdHJpbmcoYVsxXSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYlsxXSkpKTtcblxuICAgIGNvbnN0IHRvdGFsSW5wdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEyXSksIDApO1xuXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiB0cnVlLCB0b3RhbElucHV0VGF4LCBwcm9jZXNzZWREYXRhIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShcbiAgICBwcm9jZXNzZWREYXRhOiBhbnlbXVtdLFxuICAgIHByb2ZpbGU6IFRheFByb2ZpbGUsXG4gICAgbW9udGg6IHN0cmluZyxcbiAgICB5ZWFyOiBzdHJpbmcsXG4gICAgbm9uQ3JlZGl0YWJsZUlucHV0VGF4OiBudW1iZXIsXG4gICAgZm9sZGVySWQ6IHN0cmluZyxcbiAgICBvdmVyd3JpdGU6IGJvb2xlYW4gPSBmYWxzZVxuKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgIGNvbnN0IHsgdHBUSU46IHRpbiB9ID0gcHJvZmlsZTtcbiAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gXCJQdXJjaGFzZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuICAgIFxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICBjb25zdCBhZGRyZXNzMSA9IFtwcm9maWxlLnN1YlN0cmVldCwgcHJvZmlsZS5zdHJlZXQsIHByb2ZpbGUuYmFyYW5nYXldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBbcHJvZmlsZS5jaXR5TXVuaWNpcGFsaXR5LCBwcm9maWxlLnByb3ZpbmNlLCBwcm9maWxlLnppcENvZGVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFsnRCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHJvd1swXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s2XSksIHJvd1s3XSwgcm93WzhdLCByb3dbOV0sIHJvd1sxMF0sIHJvd1sxMV0sIHJvd1sxMl0sIHRpbiwgbGFzdERheURhdGVdLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgY29uc3QgdG90YWxaZXJvUmF0ZWQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxTZXJ2aWNlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbENhcGl0YWxHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgdG90YWxPdGhlckdvb2RzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcbiAgICBjb25zdCBjcmVkaXRhYmxlSW5wdXRUYXggPSB0b3RhbElucHV0VGF4IC0gbm9uQ3JlZGl0YWJsZUlucHV0VGF4O1xuXG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1AnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFNlcnZpY2VzLnRvRml4ZWQoMiksIHRvdGFsQ2FwaXRhbEdvb2RzLnRvRml4ZWQoMiksIHRvdGFsT3RoZXJHb29kcy50b0ZpeGVkKDIpLCB0b3RhbElucHV0VGF4LnRvRml4ZWQoMiksIGNyZWRpdGFibGVJbnB1dFRheC50b0ZpeGVkKDIpLCBub25DcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdF0uam9pbignLCcpO1xuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBgJHtoZWFkZXJSb3d9XFxuJHtkZXRhaWxSb3dzfWA7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsXG4gICAgICAgIHRvdGFsU2VydmljZXMsIHRvdGFsQ2FwaXRhbEdvb2RzLCB0b3RhbE90aGVyR29vZHMsIHRvdGFsSW5wdXRUYXgsXG4gICAgICAgIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuICAgIFxuICAgIGlmICghcHJvY2Vzc2VkRGF0YVN0cmluZyB8fCAhcHJvZmlsZVN0cmluZyB8fCAhbW9udGggfHwgIXllYXIgfHwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4U3RyaW5nID09PSBudWxsIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBwdXJjaGFzZSBmaWxlIGNyZWF0aW9uLicgfTtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgZmFsc2UpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgREFUIGZpbGUgY3JlYXRpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVB1cmNoYXNlc0RhdEZpbGVdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgQ3JlYXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZmlsZXM6IHouYXJyYXkoRGF0RmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBEYXRGaWxlTGlzdGluZ1Jlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdEZpbGVzKGZvbGRlcklkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVMaXN0aW5nUmVzdWx0PiB7XG4gICAgaWYgKCFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiAnVXNlciBmb2xkZXIgSUQgaXMgbWlzc2luZy4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgbGlzdERhdEZpbGVzKGZvbGRlcklkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmlsZXMsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbZ2V0RGF0RmlsZXNdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIHJldHJpZXZlIERBVCBmaWxlczogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuY29uc3QgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgY29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUNvbnRlbnRSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlQ29udGVudFJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlQ29udGVudChmaWxlSWQ6IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZUNvbnRlbnRSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZpbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiAnRmlsZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGRvd25sb2FkRmlsZUZyb21Ecml2ZShmaWxlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb250ZW50OiBjb250ZW50LCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcygnRmlsZSBub3QgZm91bmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiAnRmlsZSBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYXRGaWxlKGZpbGVJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZpbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlsZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZGVsZXRlRmlsZUZyb21Ecml2ZShmaWxlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcygnRmlsZSBub3QgZm91bmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlsZSBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtkZWxldGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUiBmb3IgZmlsZUlkICR7ZmlsZUlkfTpgLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBmaWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YTogRm9ybURhdGEsIG92ZXJ3cml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBmb3JtRGF0YS5nZXQoJ3NjaGVkdWxlJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuXG4gICAgY29uc3Qgc2hlZXROYW1lID0gYHNhd3RfJHtzY2hlZHVsZX1gO1xuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgc2hlZXROYW1lKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGlmIChkYXRhUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbYE5vIGRhdGEgZm91bmQgaW4gc2hlZXQgXCIke3NoZWV0TmFtZX1cIi5gXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY29tYmluZWRBVEMgPSBbLi4uYXRjV0UsIC4uLmF0Y1dHXTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSlcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKS5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPiAwICYmIHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0YyA9IFN0cmluZyhwcm9jZXNzZWRSb3dbNl0gfHwgJycpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0YztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFt7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnSW5jb21lIFBheW1lbnQnLCBpbmRleDogOCB9LCB7IG5hbWU6ICdXaXRoaG9sZGluZyBUYXgnLCBpbmRleDogOSB9XTtcbiAgICAgICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYXRjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXRjRGF0YSA9IGNvbWJpbmVkQVRDLmZpbmQoaXRlbSA9PiBpdGVtLmF0YyA9PT0gYXRjKTtcbiAgICAgICAgICAgICAgICBpZiAoYXRjRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pICE9PSBhdGNEYXRhLnJhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJbnZhbGlkIHJhdGUgZm9yIEFUQyAke2F0Y30uIEV4cGVjdGVkICR7YXRjRGF0YS5yYXRlfSUsIGJ1dCBnb3QgJHtwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSl9JS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNBV1QuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycyB9O1xuICAgIH1cblxuICAgIHByb2Nlc3NlZERhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMl0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMl0pKSk7XG4gICAgXG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHtwcm9maWxlLnRwVElOfSR7cHJvZmlsZS5icmFuY2hDb2RlfSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0ke3llYXJ9JHtzY2hlZHVsZX0uREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBgU0FXVF8ke3NjaGVkdWxlfWA7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3Byb2ZpbGUudHBUSU4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG5cbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZpbGVFeGlzdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlcG9ydGluZ1BlcmlvZCA9IGAke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9LyR7eWVhcn1gO1xuXG4gICAgY29uc3QgdGF4cGF5ZXJOYW1lID0gcHJvZmlsZS5lbnRpdHlUeXBlID09PSAnSW5kaXZpZHVhbCcgXG4gICAgICAgID8gYCR7cHJvZmlsZS5sYXN0TmFtZX0gJHtwcm9maWxlLmZpcnN0TmFtZX0gJHtwcm9maWxlLm1pZGRsZU5hbWV9YFxuICAgICAgICA6IHByb2ZpbGUuY29tcGFueU5hbWU7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBbJ0hTQVdUJywgYEgke3NjaGVkdWxlfWAsIHByb2ZpbGUudHBUSU4sIHByb2ZpbGUuYnJhbmNoQ29kZSwgcXVvdGVJZk5vdEVtcHR5KHRheHBheWVyTmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmxhc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubWlkZGxlTmFtZSksIHJlcG9ydGluZ1BlcmlvZCwgcHJvZmlsZS5yZG9Db2RlXS5qb2luKCcsJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdEU0FXVCcsIGBEJHtzY2hlZHVsZX1gLCBpbmRleCArIDEsIHJvd1swXSwgcm93WzFdLFxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksXG4gICAgICAgICAgICByZXBvcnRpbmdQZXJpb2QsICcnLCByb3dbNl0sIHJvd1s3XSwgcm93WzhdLCByb3dbOV1cbiAgICAgICAgXS5qb2luKCcsJyk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCB0b3RhbEluY29tZVBheW1lbnQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxXaXRoaG9sZGluZ1RheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBcbiAgICBjb25zdCBmb290ZXIgPSBbJ0NTQVdUJywgYEMke3NjaGVkdWxlfWAsIHByb2ZpbGUudHBUSU4sIHByb2ZpbGUuYnJhbmNoQ29kZSwgcmVwb3J0aW5nUGVyaW9kLCB0b3RhbEluY29tZVBheW1lbnQudG9GaXhlZCgyKSwgdG90YWxXaXRoaG9sZGluZ1RheC50b0ZpeGVkKDIpXS5qb2luKCcsJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gW2hlYWRlciwgZGV0YWlsUm93cywgZm9vdGVyXS5qb2luKCdcXG4nKTtcbiAgICBcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKVxuICAgICAgICAudGhlbihmaWxlID0+IHtcbiAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbQWN0aW9uIEJHXSBVcGxvYWQgY29tcGxldGUgZm9yICR7ZmlsZS5uYW1lfS4gRGV0YWlsczpgLCBmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdENvbnRlbnQ6IGRhdENvbnRlbnQsXG4gICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogdG90YWxJbmNvbWVQYXltZW50LFxuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4LFxuICAgIH07XG59XG4gICAgXG5cbiAgICBcblxuICAgIFxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkFvNkJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:ab00f4 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"409ed581e5408379567ee59d482c53493c2b00bf41":"deleteDatFile"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "deleteDatFile": (()=>deleteDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteDatFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409ed581e5408379567ee59d482c53493c2b00bf41", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteDatFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlLCBkZWxldGVGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5pbXBvcnQgeyBhdGNXRSwgYXRjRXhlbXB0LCBhdGNXRyB9IGZyb20gJy4vc2NoZWR1bGVzJztcblxuY29uc3QgQW5hbHl6ZUZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcblxudHlwZSBBbmFseXplRmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVFeGNlbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxBbmFseXplRmlsZVJlc3VsdD4ge1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZC4nIH07XG4gIH1cblxuICAvLyBDaGVjayBmaWxlIHR5cGVcbiAgaWYgKGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyAmJiBmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnSW52YWxpZCBmaWxlIHR5cGUuIFBsZWFzZSB1cGxvYWQgYW4gRXhjZWwgZmlsZS4nIH07XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgIGNvbnN0IGRhdGFVcmkgPSBgZGF0YToke2ZpbGUudHlwZX07YmFzZTY0LCR7YnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKX1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhjZWxFcnJvckRldGVjdGlvbih7IGV4Y2VsRGF0YVVyaTogZGF0YVVyaSB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gYW5hbHl6ZSBmaWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuY29uc3QgQXV0aFJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIHVzZXI6IHoub2JqZWN0KHtcbiAgICAgICAgdXNlck5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgIGRhdGFiYXNlSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgZm9sZGVySWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB9KS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQXV0aFJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEF1dGhSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwVXNlcih1c2VyRGF0YTogU2lnbnVwRGF0YSk6IFByb21pc2U8QXV0aFJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvbGRlcklkID0gYXdhaXQgY3JlYXRlRm9sZGVySW5Ecml2ZShgREFUR2VuaWVfJHt1c2VyRGF0YS51c2VyTmFtZX1gKTtcbiAgICBhd2FpdCBhcHBlbmRVc2VyVG9TaGVldCh7IC4uLnVzZXJEYXRhLCBmb2xkZXJJZCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgdXNlcjogbnVsbCB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyB1cCB1c2VyOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHNpZ24gdXA6ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKGNyZWRlbnRpYWxzOiBMb2dpbkRhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldEFsbFVzZXJzKCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS51c2VyTmFtZSA9PT0gY3JlZGVudGlhbHMudXNlck5hbWUgJiYgdS5wd2QgPT09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgbGV0IGZvbGRlcklkID0gdXNlci5mb2xkZXJJZDtcbiAgICAgICAgICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciAke3VzZXIudXNlck5hbWV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXJJZC4gQ3JlYXRpbmcgb25lIG5vdy5gKTtcbiAgICAgICAgICAgICAgICBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlci51c2VyTmFtZX1gKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVVc2VyRm9sZGVySWQodXNlci51c2VyTmFtZSwgZm9sZGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgYXNzaWduZWQgZm9sZGVySWQgJHtmb2xkZXJJZH0gdG8gdXNlciAke3VzZXIudXNlck5hbWV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IHsgdXNlck5hbWU6IHVzZXIudXNlck5hbWUsIGRhdGFiYXNlSWQ6IHVzZXIuZGF0YWJhc2VJZCwgZm9sZGVySWQ6IGZvbGRlcklkIH0gfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJywgdXNlcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluIHVzZXI6JywgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBsb2dpbjogJHtlcnJvck1lc3NhZ2V9YCwgdXNlcjogbnVsbCB9O1xuICAgIH1cbn1cblxuY29uc3QgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGRhdGE6IHouYXJyYXkoVGF4UHJvZmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBUYXhQcm9maWxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySGVhZGVyRGF0YShkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFRheFByb2ZpbGVSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGFiYXNlSWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0RhdGFiYXNlIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyRGF0YSA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogaGVhZGVyRGF0YSwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBoZWFkZXIgZGF0YTonLCBlcnJvcik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCBoZWFkZXIgZGF0YTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cblxudHlwZSBNdXRhdGlvblJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIE11dGF0aW9uUmVzdWx0U2NoZW1hPjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9VcHBlcmNhc2UoZGF0YTogVGF4UHJvZmlsZSk6IFRheFByb2ZpbGUge1xuICBjb25zdCB1cHBlcmNhc2VkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleSBhcyBrZXlvZiBUYXhQcm9maWxlXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBrZXkgIT09ICdlbnRpdHlUeXBlJyAmJiBrZXkgIT09ICdjeWNsZVR5cGUnICYmIGtleSAhPT0gJ21vbnRoU2VsZWN0JyAmJiBrZXkgIT09ICdyZG9Db2RlJykge1xuICAgICAgdXBwZXJjYXNlZERhdGFba2V5XSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVwcGVyY2FzZWREYXRhIGFzIFRheFByb2ZpbGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9maWxlcyA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgY29uc3QgdGluRXhpc3RzID0gZXhpc3RpbmdQcm9maWxlcy5zb21lKHAgPT4gcC50cFRJTiA9PT0gdmFsaWRhdGVkRGF0YS50cFRJTik7XG5cbiAgICBpZiAodGluRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICAgICAgZXJyb3I6ICdUaGlzIFRJTiBhbHJlYWR5IGhhcyBhIHByb2ZpbGUuIFBsZWFzZSBjaGVjayB5b3VyIGRhdGEgb3IgcmVmcmVzaCB0aGUgcGFnZS4nLCBcbiAgICAgICAgICAgIGRhdGE6IG51bGwgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJjYXNlZERhdGEgPSB0cmFuc2Zvcm1Ub1VwcGVyY2FzZSh2YWxpZGF0ZWREYXRhKTtcbiAgICBhd2FpdCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCh1cHBlcmNhc2VkRGF0YSwgZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIGRhdGE6IHVwcGVyY2FzZWREYXRhIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gYWRkIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5jb25zdCBTaW1wbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBTaW1wbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBTaW1wbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGF4UHJvZmlsZSh0cFRJTjogc3RyaW5nLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFNpbXBsZVJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0KHRwVElOLCBkYXRhYmFzZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gZGVsZXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZGF0Q29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGZpbGVOYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcnM6IHouYXJyYXkoei5zdHJpbmcoKSkubnVsbGFibGUoKSxcbiAgICBmaWxlRXhpc3RzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIC8vIFNhbGVzIFRvdGFsc1xuICAgIHRvdGFsRXhlbXB0OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxaZXJvUmF0ZWQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbFRheGFibGVTYWxlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3V0cHV0VGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgLy8gUHVyY2hhc2UgVG90YWxzXG4gICAgdG90YWxTZXJ2aWNlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsQ2FwaXRhbEdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxPdGhlckdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxJbnB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIDE2MDEtRVEgYW5kIFNBV1QgVG90YWxzXG4gICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsV2l0aGhvbGRpbmdUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCB3b3JrYm9vayA9IHhsc3gucmVhZChieXRlcywgeyB0eXBlOiAnYXJyYXknIH0pO1xuXG4gICAgaWYgKCF3b3JrYm9vay5TaGVldE5hbWVzLmluY2x1ZGVzKHNoZWV0TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICBoZWFkZXI6IDEsXG4gICAgICAgIGRlZnZhbDogJycsXG4gICAgICAgIHJhdzogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLnNsaWNlKDEpLCB2YWxpZGF0aW9uRXJyb3JzOiBbXSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0geyBcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICBlcnJvcnM6IFtdLCBcbiAgICAgICAgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuICAgICAgICBpZiAocHJvY2Vzc2VkUm93Lmxlbmd0aCA+IDAgJiYgU3RyaW5nKHByb2Nlc3NlZFJvd1swXSkudHJpbSgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpID09PSB0aW4pIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUaGUgVElOIG1hdGNoZXMgdGhlIHNlbGVjdGVkIHByb2ZpbGUncyBUSU4uIEEgY29tcGFueSBjYW5ub3QgbWFrZSBhIHNhbGUgdG8gaXRzZWxmLmApO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIGF0IGxlYXN0IDkgZGlnaXRzLmApO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gaXMgbWlzc2luZy5gKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMSwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1lcmljRmllbGRzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnRXhlbXB0IFNhbGVzJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnWmVyby1SYXRlZCBTYWxlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUYXhhYmxlIFNhbGVzJywgaW5kZXg6IDkgfSwgeyBuYW1lOiAnT3V0cHV0IFRheCcsIGluZGV4OiAxMCB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzhdKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s5XSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgc2FsZXMgYW1vdW50IChFeGVtcHQsIFplcm8tUmF0ZWQsIG9yIFRheGFibGUpIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiB9O1xuICAgIH1cbiAgICBcbiAgICBwcm9jZXNzZWREYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzFdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzFdKSkpO1xuICAgIFxuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7dGlufVMke21vbnRofSR7eWVhcn0uREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIlNhbGVzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcblxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUycsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsVGF4YWJsZVNhbGVzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3V0cHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMF0pLCAwKTtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSBbJ0gnLCAnUycsIHF1b3RlSWZOb3RFbXB0eSh0aW4pLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5jb21wYW55TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmxhc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuZmlyc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubWlkZGxlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLnRyYWRlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMiksIHRvdGFsRXhlbXB0LnRvRml4ZWQoMiksIHRvdGFsWmVyb1JhdGVkLnRvRml4ZWQoMiksIHRvdGFsVGF4YWJsZVNhbGVzLnRvRml4ZWQoMiksIHRvdGFsT3V0cHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIFRoaXMgbm93IHJ1bnMgaW4gdGhlIGJhY2tncm91bmQgYW5kIGRvZXMgbm90IGJsb2NrIHRoZSByZXR1cm5cbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKVxuICAgICAgICAudGhlbihmaWxlID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHVwbG9hZCBpcyBjb21wbGV0ZS4gVGhlIGNsaWVudCB3aWxsIHRyaWdnZXIgYSByZS1mZXRjaCBzZXBhcmF0ZWx5LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbQWN0aW9uIEJHXSBVcGxvYWQgY29tcGxldGUgZm9yICR7ZmlsZS5uYW1lfS4gRGV0YWlsczpgLCBmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlMTYwMUVRRGF0RmlsZShmaWxlOiBGaWxlLCBwcm9maWxlOiBUYXhQcm9maWxlLCBtb250aDogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIGZvbGRlcklkOiBzdHJpbmcsIG92ZXJ3cml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgeyB0cFRJTjogdGluLCBicmFuY2hDb2RlIH0gPSBwcm9maWxlO1xuICAgIGNvbnN0IGRlZmF1bHRFcnJvclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIGVycm9yOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IHNjaGVkMURhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBzY2hlZDFGaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwiMTYwMUVRX3NjaGVkMVwiKTtcbiAgICBpZiAoc2NoZWQxRmlsZUVycm9ycy5sZW5ndGggPiAwKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yczogc2NoZWQxRmlsZUVycm9ycyB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBzY2hlZDJEYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogc2NoZWQyRmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcIjE2MDFFUV9zY2hlZDJcIik7XG4gICAgaWYgKHNjaGVkMkZpbGVFcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHNjaGVkMkZpbGVFcnJvcnMgfTtcblxuICAgIGNvbnN0IHNjaGVkMUhhc0RhdGEgPSBzY2hlZDFEYXRhUm93cy5zb21lKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSk7XG4gICAgY29uc3Qgc2NoZWQySGFzRGF0YSA9IHNjaGVkMkRhdGFSb3dzLnNvbWUocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKTtcblxuICAgIGlmICghc2NoZWQxSGFzRGF0YSAmJiAhc2NoZWQySGFzRGF0YSkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yczogW1wiTm8gZGF0YSBmb3VuZCBpbiBTY2hlZHVsZSAxIG9yIFNjaGVkdWxlIDIgc2hlZXRzLlwiXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBQcm9jZXNzIFNjaGVkdWxlIDEgKFRheGFibGUpXG4gICAgY29uc3QgcHJvY2Vzc2VkU2NoZWQxRGF0YSA9IHNjaGVkMURhdGFSb3dzXG4gICAgICAgIC5maWx0ZXIocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKVxuICAgICAgICAubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2Nlc3NlZFJvd1swXSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA+IDAgJiYgc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDEgJHtmaWVsZC5uYW1lfWAsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBhdGMgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzZdIHx8ICcnKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbNl0gPSBhdGM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbeyBuYW1lOiAnUmF0ZScsIGluZGV4OiA3IH0sIHsgbmFtZTogJ0luY29tZSBQYXltZW50JywgaW5kZXg6IDggfSwgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfV07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgYFNjaGVkMSAke2ZpZWxkLm5hbWV9YCwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGF0Yykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0Y0RhdGEgPSBhdGNXRS5maW5kKGl0ZW0gPT4gaXRlbS5hdGMgPT09IGF0Yyk7XG4gICAgICAgICAgICAgICAgaWYgKGF0Y0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKSAhPT0gYXRjRGF0YS5yYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEludmFsaWQgcmF0ZSBmb3IgQVRDICR7YXRjfS4gRXhwZWN0ZWQgJHthdGNEYXRhLnJhdGV9JSwgYnV0IGdvdCAke3BhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKX0lLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDEgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNjaGVkdWxlIDEuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICAvLyBQcm9jZXNzIFNjaGVkdWxlIDIgKEV4ZW1wdClcbiAgICBjb25zdCBwcm9jZXNzZWRTY2hlZDJEYXRhID0gc2NoZWQyRGF0YVJvd3NcbiAgICAgICAgLmZpbHRlcihyb3cgPT4gcm93LnNvbWUoY2VsbCA9PiBTdHJpbmcoY2VsbCkudHJpbSgpICE9PSAnJykpXG4gICAgICAgIC5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUm93TnVtYmVyID0gaW5kZXggKyAyO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIGlmIChTdHJpbmcocHJvY2Vzc2VkUm93WzBdIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoID4gMCAmJiBzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgOSBkaWdpdHMgaWYgcHJvdmlkZWQuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBicmFuY2hDb2RlID0gU3RyaW5nKHByb2Nlc3NlZFJvd1sxXSB8fCAnJykucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGUgPyBicmFuY2hDb2RlLnNsaWNlKC00KS5wYWRTdGFydCg0LCAnMCcpIDogXCIwMDAwXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDUwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDQsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01pZGRsZSBOYW1lJywgaW5kZXg6IDUsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIG5hbWVGaWVsZHNJbmZvLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgYFNjaGVkMiAke2ZpZWxkLm5hbWV9YCwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgYXRjID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s2XSB8fCAnJykudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzZdID0gYXRjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1s3XSwgYFNjaGVkMiBJbmNvbWUgUGF5bWVudGAsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzddID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoYXRjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXRjRGF0YSA9IGF0Y0V4ZW1wdC5maW5kKGl0ZW0gPT4gaXRlbS5hdGMgPT09IGF0Yyk7XG4gICAgICAgICAgICAgICAgaWYgKCFhdGNEYXRhKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMiBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlICcke2F0Y30nIGlzIG5vdCB2YWxpZCBmb3IgU2NoZWR1bGUgMi5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMiBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICBcbiAgICAvLyBBbGwgdmFsaWRhdGlvbnMgcGFzc2VkLCBub3cgY2hlY2sgZm9yIGV4aXN0aW5nIGZpbGVcbiAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn0ke2JyYW5jaENvZGV9JHttb250aC5wYWRTdGFydCgyLCAnMCcpfSR7eWVhcn0xNjAxRVEuREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIjE2MDFFUVwiO1xuICAgIGNvbnN0IGRyaXZlUGF0aCA9IFt0aW4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG4gICAgXG4gICAgaWYgKCFvdmVyd3JpdGUpIHtcbiAgICAgICAgY29uc3QgZmlsZUV4aXN0cyA9IGF3YWl0IGNoZWNrRmlsZUV4aXN0cyhkYXRGaWxlTmFtZSwgZm9sZGVySWQsIGRyaXZlUGF0aCk7XG4gICAgICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWxlRXhpc3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzZWRTY2hlZDFEYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzJdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzJdKSkpO1xuICAgIHByb2Nlc3NlZFNjaGVkMkRhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMl0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMl0pKSk7XG5cbiAgICBjb25zdCByZXBvcnRpbmdQZXJpb2QgPSBgJHttb250aC5wYWRTdGFydCgyLCAnMCcpfS8ke3llYXJ9YDtcbiAgICBsZXQgZGF0Q29udGVudFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICAgIC8vIEhlYWRlciBSb3dcbiAgICBjb25zdCB0YXhwYXllck5hbWUgPSBwcm9maWxlLmVudGl0eVR5cGUgPT09ICdJbmRpdmlkdWFsJ1xuICAgICAgICA/IGAke3Byb2ZpbGUubGFzdE5hbWV9ICR7cHJvZmlsZS5maXJzdE5hbWV9ICR7cHJvZmlsZS5taWRkbGVOYW1lfWBcbiAgICAgICAgOiBwcm9maWxlLmNvbXBhbnlOYW1lO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IFsnSFFBUCcsICdIMTYwMUVRJywgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCBxdW90ZUlmTm90RW1wdHkodGF4cGF5ZXJOYW1lKSwgcmVwb3J0aW5nUGVyaW9kLCBwcm9maWxlLnJkb0NvZGVdLmpvaW4oJywnKTtcbiAgICBkYXRDb250ZW50UGFydHMucHVzaChtYWluSGVhZGVyKTtcblxuICAgIGxldCB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gMDtcbiAgICBsZXQgdG90YWxXaXRoaG9sZGluZ1RheCA9IDA7XG4gICAgbGV0IHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCA9IDA7XG5cbiAgICAvLyBTY2hlZHVsZSAxIENvbnRlbnRcbiAgICBpZiAocHJvY2Vzc2VkU2NoZWQxRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbFJvd3MxID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IFsnRDEnLCAnMTYwMUVRJywgaW5kZXggKyAxLCByb3dbMF0sIHJvd1sxXSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHJlcG9ydGluZ1BlcmlvZCwgcm93WzZdLCByb3dbN10sIHJvd1s4XSwgcm93WzldXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4ID0gcHJvY2Vzc2VkU2NoZWQxRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cxID0gWydDMScsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudC50b0ZpeGVkKDIpLCB0b3RhbFdpdGhob2xkaW5nVGF4LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czEsIGZvb3RlclJvdzEpO1xuICAgIH1cblxuICAgIC8vIFNjaGVkdWxlIDIgQ29udGVudFxuICAgIGlmIChwcm9jZXNzZWRTY2hlZDJEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGV0YWlsUm93czIgPSBwcm9jZXNzZWRTY2hlZDJEYXRhLm1hcCgocm93LCBpbmRleCkgPT4gWydEMicsICcxNjAxRVEnLCBpbmRleCArIDEsIHJvd1swXSwgcm93WzFdLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcmVwb3J0aW5nUGVyaW9kLCByb3dbNl0sIHJvd1s3XV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICAgICAgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkU2NoZWQyRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgICAgICBjb25zdCBmb290ZXJSb3cyID0gWydDMicsICcxNjAxRVEnLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50LnRvRml4ZWQoMildLmpvaW4oJywnKTtcbiAgICAgICAgZGF0Q29udGVudFBhcnRzLnB1c2goZGV0YWlsUm93czIsIGZvb3RlclJvdzIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBkYXRDb250ZW50UGFydHMuam9pbignXFxuJyk7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSlcbiAgICAgICAgLnRoZW4oZmlsZSA9PiB7XG4gICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0FjdGlvbiBCR10gVXBsb2FkIGNvbXBsZXRlIGZvciAke2ZpbGUubmFtZX0uIERldGFpbHM6YCwgZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRDb250ZW50LFxuICAgICAgICBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQsXG4gICAgICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCxcbiAgICAgICAgdG90YWxXaXRoaG9sZGluZ1RheCxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gZm9ybURhdGEuZ2V0KCdzY2hlZHVsZScpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKCFmaWxlIHx8ICFyZXBvcnRUeXBlIHx8ICFtb250aCB8fCAheWVhciB8fCAhcHJvZmlsZVN0cmluZyB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgY29udmVyc2lvbi4nIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZTogVGF4UHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZVN0cmluZyk7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgUHVyY2hhc2VzIChTTFApXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB2YWxpZGF0ZUV4Y2VsRm9yUHVyY2hhc2VzKGZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCIxNjAxLUVRIChTY2hlZHVsZSAxIGFuZCAyKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgQWxwaGFsaXN0IG9mIFdpdGhob2xkaW5nIFRheCAoU0FXVClcIikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdTQVdUIHNjaGVkdWxlIGlzIG1pc3NpbmcuJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YSwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvdmVyd3JpdGVEYXRGaWxlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBjb25zdCByZXBvcnRUeXBlID0gZm9ybURhdGEuZ2V0KCdyZXBvcnRUeXBlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZm9ybURhdGEuZ2V0KCdmb2xkZXJJZCcpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvY2Vzc2VkRGF0YScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3Qgbm9uQ3JlZGl0YWJsZVRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBzY2hlZHVsZSA9IGZvcm1EYXRhLmdldCgnc2NoZWR1bGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgIGlmICghZmlsZSkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgZmlsZSBmb3Igb3ZlcndyaXRlLicgfTtcbiAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBBbHBoYWxpc3Qgb2YgV2l0aGhvbGRpbmcgVGF4IChTQVdUKVwiKSB7XG4gICAgICAgICAgICBpZiAoIWZpbGUgfHwgIXNjaGVkdWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIG9yIHNjaGVkdWxlIGZvciBTQVdUIG92ZXJ3cml0ZS4nIH07XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3B1cmNoYXNlc1wiKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDUwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ01pZGRsZSBOYW1lJywgaW5kZXg6IDQsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAxJywgaW5kZXg6IDUsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDInLCBpbmRleDogNiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc2VkRGF0YS5zb3J0KChhLCBiKSA9PiBTdHJpbmcoYVsxXSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYlsxXSkpKTtcblxuICAgIGNvbnN0IHRvdGFsSW5wdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEyXSksIDApO1xuXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiB0cnVlLCB0b3RhbElucHV0VGF4LCBwcm9jZXNzZWREYXRhIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShcbiAgICBwcm9jZXNzZWREYXRhOiBhbnlbXVtdLFxuICAgIHByb2ZpbGU6IFRheFByb2ZpbGUsXG4gICAgbW9udGg6IHN0cmluZyxcbiAgICB5ZWFyOiBzdHJpbmcsXG4gICAgbm9uQ3JlZGl0YWJsZUlucHV0VGF4OiBudW1iZXIsXG4gICAgZm9sZGVySWQ6IHN0cmluZyxcbiAgICBvdmVyd3JpdGU6IGJvb2xlYW4gPSBmYWxzZVxuKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgIGNvbnN0IHsgdHBUSU46IHRpbiB9ID0gcHJvZmlsZTtcbiAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gXCJQdXJjaGFzZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuICAgIFxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICBjb25zdCBhZGRyZXNzMSA9IFtwcm9maWxlLnN1YlN0cmVldCwgcHJvZmlsZS5zdHJlZXQsIHByb2ZpbGUuYmFyYW5nYXldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBbcHJvZmlsZS5jaXR5TXVuaWNpcGFsaXR5LCBwcm9maWxlLnByb3ZpbmNlLCBwcm9maWxlLnppcENvZGVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFsnRCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHJvd1swXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s2XSksIHJvd1s3XSwgcm93WzhdLCByb3dbOV0sIHJvd1sxMF0sIHJvd1sxMV0sIHJvd1sxMl0sIHRpbiwgbGFzdERheURhdGVdLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgY29uc3QgdG90YWxaZXJvUmF0ZWQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxTZXJ2aWNlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbENhcGl0YWxHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgdG90YWxPdGhlckdvb2RzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcbiAgICBjb25zdCBjcmVkaXRhYmxlSW5wdXRUYXggPSB0b3RhbElucHV0VGF4IC0gbm9uQ3JlZGl0YWJsZUlucHV0VGF4O1xuXG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1AnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFNlcnZpY2VzLnRvRml4ZWQoMiksIHRvdGFsQ2FwaXRhbEdvb2RzLnRvRml4ZWQoMiksIHRvdGFsT3RoZXJHb29kcy50b0ZpeGVkKDIpLCB0b3RhbElucHV0VGF4LnRvRml4ZWQoMiksIGNyZWRpdGFibGVJbnB1dFRheC50b0ZpeGVkKDIpLCBub25DcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdF0uam9pbignLCcpO1xuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBgJHtoZWFkZXJSb3d9XFxuJHtkZXRhaWxSb3dzfWA7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsXG4gICAgICAgIHRvdGFsU2VydmljZXMsIHRvdGFsQ2FwaXRhbEdvb2RzLCB0b3RhbE90aGVyR29vZHMsIHRvdGFsSW5wdXRUYXgsXG4gICAgICAgIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuICAgIFxuICAgIGlmICghcHJvY2Vzc2VkRGF0YVN0cmluZyB8fCAhcHJvZmlsZVN0cmluZyB8fCAhbW9udGggfHwgIXllYXIgfHwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4U3RyaW5nID09PSBudWxsIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBwdXJjaGFzZSBmaWxlIGNyZWF0aW9uLicgfTtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgZmFsc2UpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgREFUIGZpbGUgY3JlYXRpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVB1cmNoYXNlc0RhdEZpbGVdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgQ3JlYXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZmlsZXM6IHouYXJyYXkoRGF0RmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBEYXRGaWxlTGlzdGluZ1Jlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdEZpbGVzKGZvbGRlcklkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVMaXN0aW5nUmVzdWx0PiB7XG4gICAgaWYgKCFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiAnVXNlciBmb2xkZXIgSUQgaXMgbWlzc2luZy4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgbGlzdERhdEZpbGVzKGZvbGRlcklkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmlsZXMsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbZ2V0RGF0RmlsZXNdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIHJldHJpZXZlIERBVCBmaWxlczogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuY29uc3QgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgY29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUNvbnRlbnRSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlQ29udGVudFJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlQ29udGVudChmaWxlSWQ6IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZUNvbnRlbnRSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZpbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiAnRmlsZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGRvd25sb2FkRmlsZUZyb21Ecml2ZShmaWxlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb250ZW50OiBjb250ZW50LCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcygnRmlsZSBub3QgZm91bmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiAnRmlsZSBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEYXRGaWxlKGZpbGVJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZpbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlsZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZGVsZXRlRmlsZUZyb21Ecml2ZShmaWxlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZS5pbmNsdWRlcygnRmlsZSBub3QgZm91bmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmlsZSBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtkZWxldGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUiBmb3IgZmlsZUlkICR7ZmlsZUlkfTpgLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBmaWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YTogRm9ybURhdGEsIG92ZXJ3cml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBmb3JtRGF0YS5nZXQoJ3NjaGVkdWxlJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZm9sZGVySWQgPSBmb3JtRGF0YS5nZXQoJ2ZvbGRlcklkJykgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuXG4gICAgY29uc3Qgc2hlZXROYW1lID0gYHNhd3RfJHtzY2hlZHVsZX1gO1xuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgc2hlZXROYW1lKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGlmIChkYXRhUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbYE5vIGRhdGEgZm91bmQgaW4gc2hlZXQgXCIke3NoZWV0TmFtZX1cIi5gXSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY29tYmluZWRBVEMgPSBbLi4uYXRjV0UsIC4uLmF0Y1dHXTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSlcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKS5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPiAwICYmIHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0YyA9IFN0cmluZyhwcm9jZXNzZWRSb3dbNl0gfHwgJycpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0YztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFt7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnSW5jb21lIFBheW1lbnQnLCBpbmRleDogOCB9LCB7IG5hbWU6ICdXaXRoaG9sZGluZyBUYXgnLCBpbmRleDogOSB9XTtcbiAgICAgICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoYXRjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXRjRGF0YSA9IGNvbWJpbmVkQVRDLmZpbmQoaXRlbSA9PiBpdGVtLmF0YyA9PT0gYXRjKTtcbiAgICAgICAgICAgICAgICBpZiAoYXRjRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pICE9PSBhdGNEYXRhLnJhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJbnZhbGlkIHJhdGUgZm9yIEFUQyAke2F0Y30uIEV4cGVjdGVkICR7YXRjRGF0YS5yYXRlfSUsIGJ1dCBnb3QgJHtwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSl9JS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNBV1QuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycyB9O1xuICAgIH1cblxuICAgIHByb2Nlc3NlZERhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMl0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMl0pKSk7XG4gICAgXG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHtwcm9maWxlLnRwVElOfSR7cHJvZmlsZS5icmFuY2hDb2RlfSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0ke3llYXJ9JHtzY2hlZHVsZX0uREFUYDtcbiAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBgU0FXVF8ke3NjaGVkdWxlfWA7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3Byb2ZpbGUudHBUSU4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG5cbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZpbGVFeGlzdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlcG9ydGluZ1BlcmlvZCA9IGAke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9LyR7eWVhcn1gO1xuXG4gICAgY29uc3QgdGF4cGF5ZXJOYW1lID0gcHJvZmlsZS5lbnRpdHlUeXBlID09PSAnSW5kaXZpZHVhbCcgXG4gICAgICAgID8gYCR7cHJvZmlsZS5sYXN0TmFtZX0gJHtwcm9maWxlLmZpcnN0TmFtZX0gJHtwcm9maWxlLm1pZGRsZU5hbWV9YFxuICAgICAgICA6IHByb2ZpbGUuY29tcGFueU5hbWU7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBbJ0hTQVdUJywgYEgke3NjaGVkdWxlfWAsIHByb2ZpbGUudHBUSU4sIHByb2ZpbGUuYnJhbmNoQ29kZSwgcXVvdGVJZk5vdEVtcHR5KHRheHBheWVyTmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmxhc3ROYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubWlkZGxlTmFtZSksIHJlcG9ydGluZ1BlcmlvZCwgcHJvZmlsZS5yZG9Db2RlXS5qb2luKCcsJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdEU0FXVCcsIGBEJHtzY2hlZHVsZX1gLCBpbmRleCArIDEsIHJvd1swXSwgcm93WzFdLFxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksXG4gICAgICAgICAgICByZXBvcnRpbmdQZXJpb2QsICcnLCByb3dbNl0sIHJvd1s3XSwgcm93WzhdLCByb3dbOV1cbiAgICAgICAgXS5qb2luKCcsJyk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCB0b3RhbEluY29tZVBheW1lbnQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxXaXRoaG9sZGluZ1RheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBcbiAgICBjb25zdCBmb290ZXIgPSBbJ0NTQVdUJywgYEMke3NjaGVkdWxlfWAsIHByb2ZpbGUudHBUSU4sIHByb2ZpbGUuYnJhbmNoQ29kZSwgcmVwb3J0aW5nUGVyaW9kLCB0b3RhbEluY29tZVBheW1lbnQudG9GaXhlZCgyKSwgdG90YWxXaXRoaG9sZGluZ1RheC50b0ZpeGVkKDIpXS5qb2luKCcsJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gW2hlYWRlciwgZGV0YWlsUm93cywgZm9vdGVyXS5qb2luKCdcXG4nKTtcbiAgICBcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKVxuICAgICAgICAudGhlbihmaWxlID0+IHtcbiAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbQWN0aW9uIEJHXSBVcGxvYWQgY29tcGxldGUgZm9yICR7ZmlsZS5uYW1lfS4gRGV0YWlsczpgLCBmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdENvbnRlbnQ6IGRhdENvbnRlbnQsXG4gICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogdG90YWxJbmNvbWVQYXltZW50LFxuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4LFxuICAgIH07XG59XG4gICAgXG5cbiAgICBcblxuICAgIFxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkFxN0JzQiJ9
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
"[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/delete-confirmation-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteConfirmationDialog": (()=>DeleteConfirmationDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
function DeleteConfirmationDialog({ isOpen, onOpenChange, onConfirm, isDeleting, itemName, itemType = 'item' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            children: "Are you absolutely sure?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            children: [
                                "This action cannot be undone. This will permanently delete the ",
                                itemType,
                                itemName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        " for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: itemName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            disabled: isDeleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onConfirm,
                                disabled: isDeleting,
                                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                                children: [
                                    isDeleting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                                        lineNumber: 53,
                                        columnNumber: 30
                                    }, this),
                                    "Delete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/delete-confirmation-dialog.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = DeleteConfirmationDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmationDialog");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$d5ce56__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:d5ce56 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ab00f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:ab00f4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dat$2d$preview$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dat-preview-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$delete$2d$confirmation$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/delete-confirmation-dialog.tsx [app-client] (ecmascript)");
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
;
function DatFilesContent() {
    _s();
    const { setRefreshFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const { files, isPending, initialFetchComplete, fetchFiles, removeFile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dat$2d$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatFiles"])();
    const [isViewing, startViewingTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isDownloading, startDownloadingTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isDeleting, startDeleteTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [viewingFileId, setViewingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downloadingFileId, setDownloadingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingFileId, setDeletingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const ITEMS_PER_PAGE = 10;
    const [isPreviewOpen, setIsPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewData, setPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileToDelete, setFileToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatFilesContent.useCallback[handleFetch]": (isManualRefresh = false)=>{
            fetchFiles(isManualRefresh);
        }
    }["DatFilesContent.useCallback[handleFetch]"], [
        fetchFiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatFilesContent.useEffect": ()=>{
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$d5ce56__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDatFileContent"])(file.id);
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
                    if (result.error?.includes('File not found')) {
                        toast({
                            title: 'File Not Found',
                            description: 'This file may have been deleted. Please refresh the list.',
                            variant: 'destructive'
                        });
                        removeFile(file.id);
                    } else {
                        toast({
                            title: 'Error',
                            description: result.error || 'Failed to fetch file content.',
                            variant: 'destructive'
                        });
                    }
                }
            } finally{
                setViewingFileId(null);
            }
        });
    };
    const handleDownloadFile = (file)=>{
        setDownloadingFileId(file.id);
        startDownloadingTransition(async ()=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$d5ce56__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDatFileContent"])(file.id);
                if (result.success && result.content) {
                    const blob = new Blob([
                        result.content
                    ], {
                        type: 'text/plain;charset=utf-8'
                    });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = file.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                } else {
                    if (result.error?.includes('File not found')) {
                        toast({
                            title: 'File Not Found',
                            description: 'This file may have been deleted. Please refresh the list.',
                            variant: 'destructive'
                        });
                        removeFile(file.id);
                    } else {
                        toast({
                            title: 'Error',
                            description: result.error || 'Failed to download file content.',
                            variant: 'destructive'
                        });
                    }
                }
            } finally{
                setDownloadingFileId(null);
            }
        });
    };
    const handleDeleteClick = (file)=>{
        setFileToDelete(file);
        setIsDeleteDialogOpen(true);
    };
    const handleConfirmDelete = ()=>{
        if (!fileToDelete) return;
        setDeletingFileId(fileToDelete.id);
        startDeleteTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ab00f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteDatFile"])(fileToDelete.id);
            if (result.success) {
                removeFile(fileToDelete.id);
                toast({
                    title: 'File Deleted',
                    description: `Successfully deleted ${fileToDelete.name}`
                });
            } else {
                if (result.error?.includes('File not found')) {
                    toast({
                        title: 'File Not Found',
                        description: 'This file may have been deleted. Please refresh the list.',
                        variant: 'destructive'
                    });
                    removeFile(fileToDelete.id);
                } else {
                    toast({
                        title: 'Error',
                        description: result.error || 'Failed to delete file.',
                        variant: 'destructive'
                    });
                }
            }
            setIsDeleteDialogOpen(false);
            setFileToDelete(null);
            setDeletingFileId(null);
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
                        lineNumber: 272,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Manage your generated DAT files."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                        lineNumber: 273,
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
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Search by filename...",
                                                className: "pl-8",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                lineNumber: 275,
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
                                                lineNumber: 292,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Loading files..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 29
                                }, this) : noResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 text-center flex flex-col items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__["SearchX"], {
                                            className: "h-12 w-12 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "No DAT Files Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: searchQuery ? "No files matched your search." : "You haven't generated any DAT files yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                    lineNumber: 297,
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
                                                                    lineNumber: 311,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[30%]",
                                                                    children: "File Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[20%]",
                                                                    children: "Transaction Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[20%]",
                                                                    children: "Reporting Period"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[15%]",
                                                                    children: "Last Modified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[10%] text-right",
                                                                    children: "Actions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                        children: paginatedFiles.map((file)=>{
                                                            const { transactionType, reportingPeriod } = parseFileName(file.name);
                                                            const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                                            const isFileBeingDownloaded = isDownloading && downloadingFileId === file.id;
                                                            const isFileBeingDeleted = isDeleting && deletingFileId === file.id;
                                                            const isDisabled = isViewing || isDownloading || isDeleting;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                "data-state": selectedFiles.includes(file.id) && "selected",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: selectedFiles.includes(file.id),
                                                                            onCheckedChange: (checked)=>handleSelectRow(file.id, Boolean(checked)),
                                                                            "aria-label": "Select row",
                                                                            disabled: isDisabled
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "font-mono",
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: transactionType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 338,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: reportingPeriod
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(file.modifiedTime), 'PP')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 342,
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
                                                                                    disabled: isDisabled,
                                                                                    children: [
                                                                                        isFileBeingViewed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "h-4 w-4 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 346,
                                                                                            columnNumber: 86
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 346,
                                                                                            columnNumber: 133
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "View"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 347,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 345,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "icon",
                                                                                    onClick: ()=>handleDownloadFile(file),
                                                                                    disabled: isDisabled,
                                                                                    children: [
                                                                                        isFileBeingDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "h-4 w-4 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 350,
                                                                                            columnNumber: 90
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 350,
                                                                                            columnNumber: 137
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "Download"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 351,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 349,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "icon",
                                                                                    className: "text-destructive hover:text-destructive",
                                                                                    onClick: ()=>handleDeleteClick(file),
                                                                                    disabled: isDisabled,
                                                                                    children: [
                                                                                        isFileBeingDeleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "h-4 w-4 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 354,
                                                                                            columnNumber: 87
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 354,
                                                                                            columnNumber: 134
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "sr-only",
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                            lineNumber: 355,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, file.id, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 49
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block md:hidden space-y-4",
                                            children: paginatedFiles.map((file)=>{
                                                const { transactionType, reportingPeriod } = parseFileName(file.name);
                                                const isFileBeingViewed = isViewing && viewingFileId === file.id;
                                                const isFileBeingDownloaded = isDownloading && downloadingFileId === file.id;
                                                const isFileBeingDeleted = isDeleting && deletingFileId === file.id;
                                                const isDisabled = isViewing || isDownloading || isDeleting;
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
                                                                className: "mr-4",
                                                                disabled: isDisabled
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 377,
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
                                                                        lineNumber: 385,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: reportingPeriod
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm mt-1",
                                                                        children: transactionType
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 384,
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
                                                                        disabled: isDisabled,
                                                                        children: [
                                                                            isFileBeingViewed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "h-4 w-4 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 74
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 121
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "View"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 392,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8",
                                                                        onClick: ()=>handleDownloadFile(file),
                                                                        disabled: isDisabled,
                                                                        children: [
                                                                            isFileBeingDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "h-4 w-4 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 79
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 395,
                                                                                columnNumber: 126
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "Download"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 396,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-8 w-8 text-destructive hover:text-destructive",
                                                                        onClick: ()=>handleDeleteClick(file),
                                                                        disabled: isDisabled,
                                                                        children: [
                                                                            isFileBeingDeleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                className: "h-4 w-4 animate-spin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 399,
                                                                                columnNumber: 75
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 399,
                                                                                columnNumber: 122
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "Delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                                lineNumber: 400,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 41
                                                    }, this)
                                                }, file.id, false, {
                                                    fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 37
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 367,
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
                                                    lineNumber: 411,
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
                                                    lineNumber: 414,
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
                                                    lineNumber: 422,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                                lineNumber: 288,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                lineNumber: 271,
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
                lineNumber: 438,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$delete$2d$confirmation$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteConfirmationDialog"], {
                isOpen: isDeleteDialogOpen,
                onOpenChange: setIsDeleteDialogOpen,
                onConfirm: handleConfirmDelete,
                isDeleting: isDeleting,
                itemName: fileToDelete?.name,
                itemType: "DAT file"
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/dat-files/page.tsx",
                lineNumber: 448,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(DatFilesContent, "AI+EKu5iw2bntY71quxEEYQQ9IM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dat$2d$files$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatFiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DatFilesContent;
function DatFilesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatFilesContent, {}, void 0, false, {
        fileName: "[project]/src/app/(app)/dat-files/page.tsx",
        lineNumber: 461,
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

//# sourceMappingURL=src_b749b144._.js.map