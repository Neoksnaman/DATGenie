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
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popover": (()=>Popover),
    "PopoverContent": (()=>PopoverContent),
    "PopoverTrigger": (()=>PopoverTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
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
"[project]/src/components/ui/command.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Command": (()=>Command),
    "CommandDialog": (()=>CommandDialog),
    "CommandEmpty": (()=>CommandEmpty),
    "CommandGroup": (()=>CommandGroup),
    "CommandInput": (()=>CommandInput),
    "CommandItem": (()=>CommandItem),
    "CommandList": (()=>CommandList),
    "CommandSeparator": (()=>CommandSeparator),
    "CommandShortcut": (()=>CommandShortcut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Command = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c = Command;
Command.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].displayName;
const CommandDialog = ({ children, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "overflow-hidden p-0 shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/command.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c1 = CommandDialog;
const CommandInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
_c3 = CommandInput;
CommandInput.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input.displayName;
const CommandList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c5 = CommandList;
CommandList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List.displayName;
const CommandEmpty = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = (props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, this));
_c7 = CommandEmpty;
CommandEmpty.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty.displayName;
const CommandGroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, this));
_c9 = CommandGroup;
CommandGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group.displayName;
const CommandSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Separator, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c11 = CommandSeparator;
CommandSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Separator.displayName;
const CommandItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c13 = CommandItem;
CommandItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item.displayName;
const CommandShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
};
_c14 = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "Command");
__turbopack_context__.k.register(_c1, "CommandDialog");
__turbopack_context__.k.register(_c2, "CommandInput$React.forwardRef");
__turbopack_context__.k.register(_c3, "CommandInput");
__turbopack_context__.k.register(_c4, "CommandList$React.forwardRef");
__turbopack_context__.k.register(_c5, "CommandList");
__turbopack_context__.k.register(_c6, "CommandEmpty$React.forwardRef");
__turbopack_context__.k.register(_c7, "CommandEmpty");
__turbopack_context__.k.register(_c8, "CommandGroup$React.forwardRef");
__turbopack_context__.k.register(_c9, "CommandGroup");
__turbopack_context__.k.register(_c10, "CommandSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "CommandSeparator");
__turbopack_context__.k.register(_c12, "CommandItem$React.forwardRef");
__turbopack_context__.k.register(_c13, "CommandItem");
__turbopack_context__.k.register(_c14, "CommandShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/profile-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProfileSelector": (()=>ProfileSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProfileSelector({ profiles, onProfileSelect, onNewProfile, selectedProfile }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getDisplayName = (profile)=>{
        return profile.entityType === 'Individual' ? profile.tradeName : profile.companyName;
    };
    const sortedProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileSelector.useMemo[sortedProfiles]": ()=>{
            return [
                ...profiles
            ].sort({
                "ProfileSelector.useMemo[sortedProfiles]": (a, b)=>{
                    const nameA = getDisplayName(a)?.toLowerCase() || '';
                    const nameB = getDisplayName(b)?.toLowerCase() || '';
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                }
            }["ProfileSelector.useMemo[sortedProfiles]"]);
        }
    }["ProfileSelector.useMemo[sortedProfiles]"], [
        profiles
    ]);
    const selectedValue = selectedProfile ? `${getDisplayName(profiles.find((p)=>p.tpTIN === selectedProfile))} (${selectedProfile})` : "Select a profile...";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full sm:w-auto sm:flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                    open: open,
                    onOpenChange: setOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                role: "combobox",
                                "aria-expanded": open,
                                className: "w-full justify-between h-auto min-h-[2.5rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-left whitespace-normal",
                                        children: selectedValue
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-selector.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                        className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-selector.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile-selector.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile-selector.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                            align: "start",
                            className: "w-[--radix-popover-trigger-width] p-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
                                        placeholder: "Search profile by name or TIN..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-selector.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                children: "No profile found."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-selector.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                children: sortedProfiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                        value: `${getDisplayName(profile)} ${profile.tpTIN}`,
                                                        onSelect: ()=>{
                                                            onProfileSelect(profile.tpTIN);
                                                            setOpen(false);
                                                        },
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4 mt-1 shrink-0", selectedProfile === profile.tpTIN ? "opacity-100" : "opacity-0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-selector.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    getDisplayName(profile),
                                                                    " (",
                                                                    profile.tpTIN,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-selector.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, profile.tpTIN, true, {
                                                        fileName: "[project]/src/components/profile-selector.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-selector.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-selector.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile-selector.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/profile-selector.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile-selector.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/profile-selector.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onNewProfile,
                variant: "outline",
                className: "w-full sm:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                        className: "mr-2 h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/profile-selector.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    "New Profile"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/profile-selector.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/profile-selector.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(ProfileSelector, "1ufGSEebEHHK4AFAXE9aGMwDlu8=");
_c = ProfileSelector;
var _c;
__turbopack_context__.k.register(_c, "ProfileSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c1 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AccordionTrigger;
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c5 = AccordionContent;
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AccordionItem$React.forwardRef");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "AccordionTrigger");
__turbopack_context__.k.register(_c4, "AccordionContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroup": (()=>RadioGroup),
    "RadioGroupItem": (()=>RadioGroupItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const RadioGroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
});
_c1 = RadioGroup;
RadioGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const RadioGroupItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                className: "h-2.5 w-2.5 fill-current text-current"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/radio-group.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/radio-group.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
});
_c3 = RadioGroupItem;
RadioGroupItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RadioGroup$React.forwardRef");
__turbopack_context__.k.register(_c1, "RadioGroup");
__turbopack_context__.k.register(_c2, "RadioGroupItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/generation-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GenerationCard": (()=>GenerationCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
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
const months = [
    {
        name: "January",
        value: "01"
    },
    {
        name: "February",
        value: "02"
    },
    {
        name: "March",
        value: "03"
    },
    {
        name: "April",
        value: "04"
    },
    {
        name: "May",
        value: "05"
    },
    {
        name: "June",
        value: "06"
    },
    {
        name: "July",
        value: "07"
    },
    {
        name: "August",
        value: "08"
    },
    {
        name: "September",
        value: "09"
    },
    {
        name: "October",
        value: "10"
    },
    {
        name: "November",
        value: "11"
    },
    {
        name: "December",
        value: "12"
    }
];
const reportTypes = [
    "Summary of Sales (SLS)",
    "Summary of Purchases (SLP)",
    "Summary of Importations (SLI)",
    "Summary Alphalist of Withholding Tax (SAWT)",
    "1601-EQ (Schedule 1 and 2)",
    "1601-FQ (Schedule 1, 2, and 3)",
    "1604-CF (Schedule 3 and 4)",
    "1604-E (Schedule 4)",
    "1604-F (Schedule 5, 6, and 7)"
];
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
const currentYear = new Date().getFullYear();
const years = Array.from({
    length: currentYear - 1999
}, (_, i)=>(currentYear - i).toString());
function GenerationCard({ title, description, buttonText, onGenerate, icon, isDatGeneration, reminders }) {
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // DAT Gen State
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(months[0].value);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear.toString());
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reportTypes[0]);
    const [sawtSchedule, setSawtSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sawtSchedules[0]);
    // Cert Gen State
    const [signatoryName, setSignatoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [signatoryTIN, setSignatoryTIN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [signatoryPosition, setSignatoryPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [signatureFile, setSignatureFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileChange = (files)=>{
        const file = files?.[0];
        if (file) {
            if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
                setSelectedFile(file);
            } else {
                toast({
                    title: 'Invalid File Type',
                    description: 'Please upload a valid Excel file (.xlsx, .xls).',
                    variant: 'destructive'
                });
            }
        }
    };
    const handleInputElementChange = (e)=>{
        handleFileChange(e.target.files);
        e.target.value = ''; // Allow re-uploading the same file
    };
    const handleSignatureFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setSignatureFile(file);
            } else {
                toast({
                    title: 'Invalid File Type',
                    description: 'Please upload a valid image file for the signature.',
                    variant: 'destructive'
                });
            }
        }
        e.target.value = '';
    };
    const handleDragEnter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GenerationCard.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
            handleFileChange(e.dataTransfer.files);
        }
    }["GenerationCard.useCallback[handleDrop]"], []);
    const handleGenerateClick = async ()=>{
        if (!selectedFile) {
            toast({
                title: 'No file selected',
                description: 'Please upload a file to generate.',
                variant: 'destructive'
            });
            return;
        }
        ;
        setIsGenerating(true);
        try {
            if (isDatGeneration) {
                await onGenerate(selectedFile, month, year, reportType, sawtSchedule);
            } else {
                await onGenerate(selectedFile, signatoryName, signatoryTIN, signatoryPosition, signatureFile);
            }
        } catch (error) {
        // Toast is handled by the calling component
        } finally{
            setIsGenerating(false);
        }
    };
    const clearFile = ()=>{
        setSelectedFile(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/generation-card.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generation-card.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generation-card.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generation-card.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generation-card.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/generation-card.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    isDatGeneration ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Reporting Period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 178,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: month,
                                                onValueChange: setMonth,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 44
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: months.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: m.value,
                                                                children: m.name
                                                            }, m.value, false, {
                                                                fileName: "[project]/src/components/generation-card.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 50
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 180,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: year,
                                                onValueChange: setYear,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 44
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: y,
                                                                children: y
                                                            }, y, false, {
                                                                fileName: "[project]/src/components/generation-card.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 186,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 179,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 177,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Reporting Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 195,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: reportType,
                                        onValueChange: setReportType,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 40
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 197,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: reportTypes.map((rt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: rt,
                                                        children: rt
                                                    }, rt, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 52
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 198,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 196,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 194,
                                columnNumber: 18
                            }, this),
                            reportType === "Summary Alphalist of Withholding Tax (SAWT)" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 animate-in fade-in-50 duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Schedules"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 205,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                            value: sawtSchedule,
                                            onValueChange: setSawtSchedule,
                                            className: "grid grid-cols-3 gap-x-4 gap-y-2",
                                            children: sawtSchedules.map((schedule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                            value: schedule,
                                                            id: `r-${schedule}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `r-${schedule}`,
                                                            className: "font-normal",
                                                            children: schedule
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, schedule, true, {
                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generation-card.tsx",
                                            lineNumber: 207,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 206,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 204,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signatory-name",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 227,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "signatory-name",
                                                value: signatoryName,
                                                onChange: (e)=>setSignatoryName(e.target.value),
                                                maxLength: 30
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 228,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 226,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signatory-tin",
                                                children: "TIN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 231,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "signatory-tin",
                                                value: signatoryTIN,
                                                onChange: (e)=>setSignatoryTIN(e.target.value.replace(/[^0-9]/g, '')),
                                                maxLength: 9,
                                                pattern: "[0-9]*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 232,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 230,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 225,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signatory-position",
                                                children: "Position"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 243,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "signatory-position",
                                                value: signatoryPosition,
                                                onChange: (e)=>setSignatoryPosition(e.target.value),
                                                maxLength: 30
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 244,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 242,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "signature-file",
                                                children: "Signature"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 247,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "signature-file",
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleSignatureFileChange,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "signature-file",
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background", "flex items-center gap-2 text-muted-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"),
                                                        children: !signatureFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Upload Signature"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                    className: "h-4 w-4 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-1 truncate",
                                                                    children: signatureFile.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    className: "h-6 w-6 shrink-0",
                                                                    onClick: (e)=>{
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        setSignatureFile(null);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "sr-only",
                                                                            children: "Clear signature"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/generation-card.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/generation-card.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 248,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 246,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, this),
                    selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center p-3 border-2 border-dashed rounded-lg border-primary/50 bg-primary/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                className: "w-8 h-8 mr-3 text-primary flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 289,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold truncate",
                                        children: selectedFile.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 291,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            (selectedFile.size / 1024).toFixed(2),
                                            " KB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 292,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 290,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: clearFile,
                                className: "flex-shrink-0 w-8 h-8",
                                disabled: isGenerating,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 303,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Clear file"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 304,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 296,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 288,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300', isDragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'),
                        onDragEnter: handleDragEnter,
                        onDragOver: handleDragEnter,
                        onDragLeave: handleDragLeave,
                        onDrop: handleDrop,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                id: `file-upload-${title.replace(/\s+/g, '-')}`,
                                className: "hidden",
                                onChange: handleInputElementChange,
                                accept: ".xlsx, .xls",
                                disabled: isGenerating
                            }, void 0, false, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 318,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `file-upload-${title.replace(/\s+/g, '-')}`,
                                className: "cursor-pointer space-y-2 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                        className: "w-10 h-10 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 327,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: [
                                                    "Drag & drop or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: "browse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generation-card.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 69
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 329,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "Supports .xlsx, .xls"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 330,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 328,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 326,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full",
                        onClick: handleGenerateClick,
                        disabled: isGenerating || !selectedFile,
                        children: [
                            isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generation-card.tsx",
                                lineNumber: 337,
                                columnNumber: 28
                            }, this),
                            buttonText
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    reminders && reminders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                        type: "single",
                        collapsible: true,
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                            value: "reminders",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                    className: "text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-4 w-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this),
                                            "Important Reminders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generation-card.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-3 list-decimal list-outside pl-5 text-xs text-muted-foreground",
                                        children: reminders.map((reminder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "pl-1",
                                                children: reminder
                                            }, index, false, {
                                                fileName: "[project]/src/components/generation-card.tsx",
                                                lineNumber: 353,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generation-card.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generation-card.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generation-card.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/generation-card.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generation-card.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generation-card.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(GenerationCard, "jcA00n4FSccE7g/xQmTXJ9jX8bo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = GenerationCard;
var _c;
__turbopack_context__.k.register(_c, "GenerationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/tax-profiles-skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaxProfilesSkeleton": (()=>TaxProfilesSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
'use client';
;
;
function TaxProfilesSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-10 w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/tax-profiles-skeleton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-10 w-24"
            }, void 0, false, {
                fileName: "[project]/src/components/tax-profiles-skeleton.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tax-profiles-skeleton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = TaxProfilesSkeleton;
var _c;
__turbopack_context__.k.register(_c, "TaxProfilesSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Alert$React.forwardRef");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "AlertTitle$React.forwardRef");
__turbopack_context__.k.register(_c3, "AlertTitle");
__turbopack_context__.k.register(_c4, "AlertDescription$React.forwardRef");
__turbopack_context__.k.register(_c5, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:2cd46d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405c07508d183d72b5368850183fd267f67971612c":"createPurchasesDatFile"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "createPurchasesDatFile": (()=>createPurchasesDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createPurchasesDatFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405c07508d183d72b5368850183fd267f67971612c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPurchasesDatFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQWl2QnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:823de1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40895842e07ef2f9872e21c8c7ad22133d33c8c849":"convertExcelToDat"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "convertExcelToDat": (()=>convertExcelToDat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var convertExcelToDat = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40895842e07ef2f9872e21c8c7ad22133d33c8c849", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "convertExcelToDat"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQStoQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:50be91 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405640ada876955278e1ad2e9d85009c459c46777d":"validateExcelForPurchases"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "validateExcelForPurchases": (()=>validateExcelForPurchases)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var validateExcelForPurchases = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405640ada876955278e1ad2e9d85009c459c46777d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "validateExcelForPurchases"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQTZtQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:369477 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"401ce1a9d271208095f87042b1ec2b335fce067d9a":"overwriteDatFile"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "overwriteDatFile": (()=>overwriteDatFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var overwriteDatFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401ce1a9d271208095f87042b1ec2b335fce067d9a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "overwriteDatFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRSQWtrQnNCIn0=
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
    const title = isViewing ? "DAT File Preview" : "Conversion Successful";
    const description = isViewing ? "Review the content of the DAT file below." : "Your DAT file is ready. Please review the content below before downloading.";
    const icon = isViewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
        className: "w-6 h-6 text-primary"
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 75,
        columnNumber: 28
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
        className: "w-6 h-6 text-accent-foreground"
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 75,
        columnNumber: 71
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl w-full h-[80vh] flex flex-col p-0 bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "p-6 pb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-xl text-black",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                        lineNumber: 86,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-slate-600",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-6 pb-4 space-y-4 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono text-sm space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Filename:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 95,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        fileName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 95,
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
                                                    lineNumber: 98,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.exempt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 98,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Zero-Rated:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.zeroRated)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 99,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Vatable:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.vatable)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 100,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Output VAT:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.outputVat)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 101,
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
                                                    lineNumber: 106,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.exempt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 106,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Zero-Rated Purchases:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.zeroRated)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 107,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Services:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.services)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 108,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Capital Goods:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.capitalGoods)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 109,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Purchases of Other Goods:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.otherGoods)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 110,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Input Tax:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 28
                                                }, this),
                                                " ",
                                                formatCurrency(totals.inputTax)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                            lineNumber: 111,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-[calc(100%-160px)] border rounded-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "p-4 text-xs font-mono whitespace-pre",
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollBar"], {
                                    orientation: "horizontal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dat-preview-dialog.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "p-4 border-t flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleDownload,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dat-preview-dialog.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            "Download"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dat-preview-dialog.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dat-preview-dialog.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dat-preview-dialog.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dat-preview-dialog.tsx",
        lineNumber: 78,
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
"[project]/src/components/error-summary-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ErrorSummaryDialog": (()=>ErrorSummaryDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function ErrorSummaryDialog({ isOpen, onOpenChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl w-full flex flex-col p-0 bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-6 h-6 text-destructive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/error-summary-dialog.tsx",
                                    lineNumber: 35,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/error-summary-dialog.tsx",
                                lineNumber: 34,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-xl text-black",
                                        children: "Validation Errors Found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/error-summary-dialog.tsx",
                                        lineNumber: 38,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-slate-600",
                                        children: "Please correct the following issues in your Excel file and upload it again."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/error-summary-dialog.tsx",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/error-summary-dialog.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/error-summary-dialog.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/error-summary-dialog.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 flex-1 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "h-full max-h-[50vh] pr-4 -mr-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 font-mono text-sm",
                            children: errors.map((error, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-md border bg-slate-50 text-slate-700 text-xs",
                                    children: error
                                }, index, false, {
                                    fileName: "[project]/src/components/error-summary-dialog.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/error-summary-dialog.tsx",
                            lineNumber: 47,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/error-summary-dialog.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/error-summary-dialog.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "p-4 border-t",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>onOpenChange(false),
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/error-summary-dialog.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/error-summary-dialog.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/error-summary-dialog.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/error-summary-dialog.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ErrorSummaryDialog;
var _c;
__turbopack_context__.k.register(_c, "ErrorSummaryDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/non-creditable-tax-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NonCreditableTaxDialog": (()=>NonCreditableTaxDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
const formatCurrency = (value)=>{
    if (value === undefined || isNaN(value)) return '0.00';
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
};
const formatInputValue = (value)=>{
    if (!value) return '';
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};
function NonCreditableTaxDialog({ isOpen, onOpenChange, totalInputTax, onContinue, isCreating }) {
    _s();
    const [nonCreditableTax, setNonCreditableTax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const creditableTax = totalInputTax - nonCreditableTax;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NonCreditableTaxDialog.useEffect": ()=>{
            // Reset when dialog opens
            if (isOpen) {
                setNonCreditableTax(0);
                setInputValue('0.00');
                setError(null);
            }
        }
    }["NonCreditableTaxDialog.useEffect"], [
        isOpen
    ]);
    const handleContinueClick = ()=>{
        if (!error) {
            onContinue(nonCreditableTax);
        }
    };
    const handleInputChange = (e)=>{
        const rawValue = e.target.value;
        const sanitizedValue = rawValue.replace(/[^0-9.]/g, '');
        const parts = sanitizedValue.split('.');
        // Ensure only one decimal point
        if (parts.length > 2) {
            return;
        }
        const numericValue = parseFloat(sanitizedValue);
        if (isNaN(numericValue)) {
            setNonCreditableTax(0);
            setError(null);
            setInputValue('');
            return;
        }
        setNonCreditableTax(numericValue);
        if (numericValue > totalInputTax) {
            setError('Amount cannot exceed Total Input Tax.');
        } else {
            setError(null);
        }
        // Format for display
        const formattedValue = formatInputValue(sanitizedValue);
        setInputValue(formattedValue);
    };
    const handleBlur = ()=>{
        let numericValue = parseFloat(inputValue.replace(/,/g, ''));
        if (isNaN(numericValue)) {
            numericValue = 0;
        }
        setInputValue(formatCurrency(numericValue));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-black",
                            children: "Enter Value"
                        }, void 0, false, {
                            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-slate-600",
                            children: "Please provide the non-creditable input tax amount."
                        }, void 0, false, {
                            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "non-creditable",
                                    className: "text-black",
                                    children: "Non-Creditable Input Tax"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "non-creditable",
                                    type: "text",
                                    inputMode: "decimal",
                                    value: inputValue,
                                    onChange: handleInputChange,
                                    onBlur: handleBlur,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-slate-100", error && 'border-destructive focus-visible:ring-destructive'),
                                    disabled: isCreating
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-destructive mt-1",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 135,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "total-input",
                                    className: "text-black",
                                    children: "Total Input Tax"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "total-input",
                                    value: formatCurrency(totalInputTax),
                                    disabled: true,
                                    className: "bg-slate-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "creditable",
                                    className: "text-black",
                                    children: "Creditable Input Tax"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "creditable",
                                    value: formatCurrency(error ? 0 : creditableTax),
                                    disabled: true,
                                    className: "bg-slate-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleContinueClick,
                        disabled: isCreating || !!error,
                        children: [
                            isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                                lineNumber: 162,
                                columnNumber: 28
                            }, this),
                            "Continue"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/non-creditable-tax-dialog.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(NonCreditableTaxDialog, "Re8QjMTx2nmzKspLGYzxL7qd/NE=");
_c = NonCreditableTaxDialog;
var _c;
__turbopack_context__.k.register(_c, "NonCreditableTaxDialog");
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
"[project]/src/components/overwrite-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "OverwriteDialog": (()=>OverwriteDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
function OverwriteDialog({ isOpen, onOpenChange, fileName, transactionType, reportingPeriod, onConfirm, isOverwriting }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            className: "bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-6 h-6 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                                    lineNumber: 42,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/overwrite-dialog.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                        className: "text-xl text-black",
                                        children: "Existing File Found!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overwrite-dialog.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                        className: "text-slate-600 pt-1",
                                        children: "An existing file was found. Do you want to overwrite it?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overwrite-dialog.tsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/overwrite-dialog.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/overwrite-dialog.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-16 pr-6 py-4 space-y-2 text-sm text-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-slate-500",
                                    children: "File Name:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                                    lineNumber: 53,
                                    columnNumber: 16
                                }, this),
                                " ",
                                fileName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/overwrite-dialog.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-slate-500",
                                    children: "Transaction Type:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                                    lineNumber: 54,
                                    columnNumber: 16
                                }, this),
                                " ",
                                transactionType
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/overwrite-dialog.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-slate-500",
                                    children: "Reporting Period:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                                    lineNumber: 55,
                                    columnNumber: 16
                                }, this),
                                " ",
                                reportingPeriod
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/overwrite-dialog.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            disabled: isOverwriting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/overwrite-dialog.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onConfirm,
                                disabled: isOverwriting,
                                children: [
                                    isOverwriting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/overwrite-dialog.tsx",
                                        lineNumber: 64,
                                        columnNumber: 33
                                    }, this),
                                    "Overwrite"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/overwrite-dialog.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/overwrite-dialog.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/overwrite-dialog.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/overwrite-dialog.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/overwrite-dialog.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = OverwriteDialog;
var _c;
__turbopack_context__.k.register(_c, "OverwriteDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home-content.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HomeContent": (()=>HomeContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generation$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generation-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.js [app-client] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tax$2d$profiles$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tax-profiles-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$2cd46d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:2cd46d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$823de1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:823de1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$50be91__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:50be91 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$369477__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:369477 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dat$2d$preview$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dat-preview-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2d$summary$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/error-summary-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$non$2d$creditable$2d$tax$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/non-creditable-tax-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overwrite$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/overwrite-dialog.tsx [app-client] (ecmascript)");
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
;
const datFileReminders = [
    "Ensure all required data fields in the Excel template are populated accurately.",
    "Specify the reporting month and reporting year. Select the reporting type you need to generate. Each reporting type has a corresponding Excel template. Verify that you are using the correct template for the chosen reporting type.",
    "Before submission, validate the generated DAT File using the BIR Validation Module. This step is crucial to ensure the file complies with BIR standards. Once validated, email the DAT File to esubmission@bir.gov.ph."
];
function HomeContent({ profiles, isPending, initialFetchComplete, onNewProfile, selectedProfile, onProfileSelect }) {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isPreviewOpen, setIsPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [datPreview, setDatPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fileName: '',
        content: '',
        reportType: 'none',
        totals: {}
    });
    const [isErrorsOpen, setIsErrorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isNonCreditableDialogOpen, setIsNonCreditableDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [purchaseTotals, setPurchaseTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentGenerationArgs, setCurrentGenerationArgs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreatingDat, setIsCreatingDat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOverwriting, setIsOverwriting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overwriteState, setOverwriteState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        fileName: '',
        transactionType: '',
        reportingPeriod: '',
        formData: null,
        processedData: undefined,
        nonCreditableTax: undefined
    });
    const getSimpleTransactionType = (type)=>{
        if (type.includes('Sales')) return 'Sales';
        if (type.includes('Purchases')) return 'Purchases';
        return type;
    };
    const handleDatGeneration = async (file, month, year, type, schedule)=>{
        const profile = profiles.find((p)=>p.tpTIN === selectedProfile);
        if (!profile) {
            toast({
                title: 'Profile not found',
                description: 'Please select a valid profile.',
                variant: 'destructive'
            });
            return;
        }
        const folderId = localStorage.getItem('folderId');
        if (!folderId) {
            toast({
                title: 'User folder not found',
                description: 'Please log in again to sync your user folder.',
                variant: 'destructive'
            });
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('reportType', type);
        formData.append('month', month);
        formData.append('year', year);
        formData.append('profile', JSON.stringify(profile));
        formData.append('folderId', folderId);
        if (type === 'Summary of Purchases (SLP)') {
            const validationResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$50be91__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateExcelForPurchases"])(formData);
            if (validationResult.success && validationResult.totalInputTax !== null && validationResult.processedData) {
                setPurchaseTotals({
                    totalInputTax: validationResult.totalInputTax,
                    processedData: validationResult.processedData
                });
                setCurrentGenerationArgs({
                    month,
                    year,
                    profile,
                    folderId,
                    reportType: type
                }); // Save args for the next step
                setIsNonCreditableDialogOpen(true);
            } else if (!validationResult.success && validationResult.errors && validationResult.errors.length > 0) {
                setValidationErrors(validationResult.errors);
                setIsErrorsOpen(true);
            } else {
                toast({
                    title: 'Validation Failed',
                    description: validationResult.error || 'An unexpected error occurred during validation.',
                    variant: 'destructive'
                });
            }
            return;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$823de1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["convertExcelToDat"])(formData);
        if (result.success && result.datContent !== null && result.fileName) {
            if (type === 'Summary of Sales (SLS)') {
                setDatPreview({
                    fileName: result.fileName,
                    content: result.datContent,
                    reportType: 'sales',
                    totals: {
                        exempt: result.totalExempt ?? 0,
                        zeroRated: result.totalZeroRated ?? 0,
                        vatable: result.totalTaxableSales ?? 0,
                        outputVat: result.totalOutputTax ?? 0
                    }
                });
            }
            setIsPreviewOpen(true);
        } else if (!result.success && result.errors && result.errors.length > 0) {
            setValidationErrors(result.errors);
            setIsErrorsOpen(true);
        } else if (!result.success && result.fileExists) {
            const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
            });
            setOverwriteState({
                isOpen: true,
                fileName: result.fileName || 'Unknown',
                transactionType: getSimpleTransactionType(type),
                reportingPeriod: reportingPeriod,
                formData: formData
            });
        } else {
            toast({
                title: 'Conversion Failed',
                description: result.error || 'An unexpected error occurred.',
                variant: 'destructive'
            });
        }
    };
    const handleOverwriteConfirm = async ()=>{
        if (!overwriteState.formData) return;
        setIsOverwriting(true);
        // For purchases, the overwrite function needs the processed data, not the original file.
        // The `overwriteDatFile` action now handles this logic.
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$369477__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["overwriteDatFile"])(overwriteState.formData);
        setIsOverwriting(false);
        setOverwriteState({
            isOpen: false,
            fileName: '',
            transactionType: '',
            reportingPeriod: '',
            formData: null
        });
        if (result.success && result.datContent !== null && result.fileName) {
            if (overwriteState.transactionType === 'Sales') {
                setDatPreview({
                    fileName: result.fileName,
                    content: result.datContent,
                    reportType: 'sales',
                    totals: {
                        exempt: result.totalExempt ?? 0,
                        zeroRated: result.totalZeroRated ?? 0,
                        vatable: result.totalTaxableSales ?? 0,
                        outputVat: result.totalOutputTax ?? 0
                    }
                });
            }
            if (overwriteState.transactionType === 'Purchases') {
                setDatPreview({
                    fileName: result.fileName,
                    content: result.datContent,
                    reportType: 'purchases',
                    totals: {
                        exempt: result.totalExempt ?? 0,
                        zeroRated: result.totalZeroRated ?? 0,
                        services: result.totalServices ?? 0,
                        capitalGoods: result.totalCapitalGoods ?? 0,
                        otherGoods: result.totalOtherGoods ?? 0,
                        inputTax: result.totalInputTax ?? 0
                    }
                });
            }
            setIsPreviewOpen(true);
        } else {
            toast({
                title: 'Overwrite Failed',
                description: result.error || 'An unexpected error occurred.',
                variant: 'destructive'
            });
        }
    };
    const handleNonCreditableContinue = async (nonCreditableTax)=>{
        if (!purchaseTotals || !currentGenerationArgs) return;
        setIsCreatingDat(true);
        try {
            const { month, year, profile, folderId, reportType } = currentGenerationArgs;
            const formData = new FormData();
            formData.append('processedData', JSON.stringify(purchaseTotals.processedData));
            formData.append('profile', JSON.stringify(profile));
            formData.append('month', month);
            formData.append('year', year);
            formData.append('nonCreditableInputTax', nonCreditableTax.toString());
            formData.append('folderId', folderId);
            formData.append('reportType', reportType);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$2cd46d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPurchasesDatFile"])(formData);
            if (result.success && result.datContent && result.fileName) {
                setDatPreview({
                    fileName: result.fileName,
                    content: result.datContent,
                    reportType: 'purchases',
                    totals: {
                        exempt: result.totalExempt ?? 0,
                        zeroRated: result.totalZeroRated ?? 0,
                        services: result.totalServices ?? 0,
                        capitalGoods: result.totalCapitalGoods ?? 0,
                        otherGoods: result.totalOtherGoods ?? 0,
                        inputTax: result.totalInputTax ?? 0
                    }
                });
                setIsPreviewOpen(true);
            } else if (!result.success && result.fileExists && result.fileName) {
                const reportingPeriod = new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', {
                    month: 'long',
                    year: 'numeric'
                });
                // We need to save the processed data and non-creditable tax for the overwrite action
                const overwriteFormData = new FormData();
                overwriteFormData.append('processedData', JSON.stringify(purchaseTotals.processedData));
                overwriteFormData.append('profile', JSON.stringify(profile));
                overwriteFormData.append('month', month);
                overwriteFormData.append('year', year);
                overwriteFormData.append('nonCreditableInputTax', nonCreditableTax.toString());
                overwriteFormData.append('folderId', folderId);
                overwriteFormData.append('reportType', reportType);
                setOverwriteState({
                    isOpen: true,
                    fileName: result.fileName,
                    transactionType: getSimpleTransactionType(reportType),
                    reportingPeriod: reportingPeriod,
                    formData: overwriteFormData
                });
            } else {
                toast({
                    title: 'Conversion Failed',
                    description: result.error || 'An unexpected error occurred.',
                    variant: 'destructive'
                });
            }
        } finally{
            setIsCreatingDat(false);
            setIsNonCreditableDialogOpen(false);
            setPurchaseTotals(null);
            setCurrentGenerationArgs(null);
        }
    };
    const handleCertGeneration = (file, name, tin, position, signatureFile)=>{
        console.log('Generating Certificate for:', selectedProfile, 'with details:', {
            file: file.name,
            signatoryName: name,
            signatoryTIN: tin,
            signatoryPosition: position,
            signatureFile: signatureFile?.name
        });
    // Placeholder for Certificate generation logic
    };
    const showLoading = isPending || !initialFetchComplete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-4 p-4 md:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: "Welcome to DATGenie!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home-content.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Effortlessly convert your Excel files to DAT format and generate BIR Certificates."
                            }, void 0, false, {
                                fileName: "[project]/src/components/home-content.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home-content.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Step 1: Select a Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "Choose the tax profile you want to work with or create a new one."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: showLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tax$2d$profiles$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxProfilesSkeleton"], {}, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 321,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home-content.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSelector"], {
                                            profiles: profiles,
                                            onProfileSelect: onProfileSelect,
                                            onNewProfile: onNewProfile,
                                            selectedProfile: selectedProfile
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home-content.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home-content.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            selectedProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "w-full animate-in fade-in-50 duration-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        children: "Step 2: Get Your Template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home-content.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: "If you don't have the template, download the required Excel file before proceeding."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home-content.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/template",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home-content.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Download Templates"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/home-content.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home-content.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in-50 duration-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generation$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenerationCard"], {
                                                title: "Final Step: Generate .DAT File",
                                                description: "Upload the corresponding Excel file to convert it into a .DAT file.",
                                                buttonText: "Generate .DAT",
                                                onGenerate: handleDatGeneration,
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home-content.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 27
                                                }, void 0),
                                                isDatGeneration: true,
                                                reminders: datFileReminders
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generation$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenerationCard"], {
                                                title: "Final Step: Generate BIR Certificate",
                                                description: "Upload the Excel file and provide signatory details to generate the certificate.",
                                                buttonText: "Generate Certificate",
                                                onGenerate: handleCertGeneration,
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home-content.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 27
                                                }, void 0),
                                                isDatGeneration: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home-content.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            !showLoading && profiles.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                        children: "No Tax Profiles Found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: "You haven't created any tax profiles yet. Please create a new profile to begin."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home-content.tsx",
                                        lineNumber: 377,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home-content.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home-content.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home-content.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dat$2d$preview$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatPreviewDialog"], {
                isOpen: isPreviewOpen,
                onOpenChange: setIsPreviewOpen,
                fileName: datPreview.fileName,
                content: datPreview.content,
                reportType: datPreview.reportType,
                totals: datPreview.totals,
                isViewing: datPreview.isViewing
            }, void 0, false, {
                fileName: "[project]/src/components/home-content.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$error$2d$summary$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorSummaryDialog"], {
                isOpen: isErrorsOpen,
                onOpenChange: setIsErrorsOpen,
                errors: validationErrors
            }, void 0, false, {
                fileName: "[project]/src/components/home-content.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            purchaseTotals && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$non$2d$creditable$2d$tax$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonCreditableTaxDialog"], {
                isOpen: isNonCreditableDialogOpen,
                onOpenChange: (open)=>{
                    if (!isCreatingDat) {
                        setIsNonCreditableDialogOpen(open);
                    }
                },
                totalInputTax: purchaseTotals.totalInputTax,
                onContinue: handleNonCreditableContinue,
                isCreating: isCreatingDat
            }, void 0, false, {
                fileName: "[project]/src/components/home-content.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$overwrite$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverwriteDialog"], {
                isOpen: overwriteState.isOpen,
                onOpenChange: (open)=>{
                    if (!isOverwriting) {
                        setOverwriteState((prev)=>({
                                ...prev,
                                isOpen: open
                            }));
                    }
                },
                fileName: overwriteState.fileName,
                transactionType: overwriteState.transactionType,
                reportingPeriod: overwriteState.reportingPeriod,
                onConfirm: handleOverwriteConfirm,
                isOverwriting: isOverwriting
            }, void 0, false, {
                fileName: "[project]/src/components/home-content.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomeContent, "6cyKjPAr39xdW7sczwzjj7HEmCk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = HomeContent;
var _c;
__turbopack_context__.k.register(_c, "HomeContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:71a0de [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"6043bcb009bc6aa9b83327467834f75494fa1f00b7":"addTaxProfile"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "addTaxProfile": (()=>addTaxProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addTaxProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6043bcb009bc6aa9b83327467834f75494fa1f00b7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addTaxProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlSQXVJc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:4b744c [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60c03a02cedce74d6fc9664d1879a50f2ea48706fa":"updateTaxProfile"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "updateTaxProfile": (()=>updateTaxProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateTaxProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60c03a02cedce74d6fc9664d1879a50f2ea48706fa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateTaxProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgZmlsZUV4aXN0czogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICAvLyBTYWxlcyBUb3RhbHNcbiAgICB0b3RhbEV4ZW1wdDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsWmVyb1JhdGVkOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxUYXhhYmxlU2FsZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE91dHB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIFB1cmNoYXNlIFRvdGFsc1xuICAgIHRvdGFsU2VydmljZXM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbENhcGl0YWxHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3RoZXJHb29kczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsSW5wdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuIEl0IGlzIGN1cnJlbnRseSAke3Byb2Nlc3NlZFN0cmluZy5sZW5ndGh9IGNoYXJhY3RlcnMuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgICAgICBpZiAoIXdvcmtib29rLlNoZWV0TmFtZXMuaW5jbHVkZXMoc2hlZXROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLlNoZWV0c1tzaGVldE5hbWVdO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICAgICAgZGVmdmFsOiAnJyxcbiAgICAgICAgICAgIHJhdzogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW1wiVGhlIHNoZWV0IGhhcyBubyBkYXRhIHRvIHByb2Nlc3MuXCJdIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYWxsIHJvd3MgZXhjZXB0IHRoZSBoZWFkZXJcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogZGF0YS5zbGljZSgxKSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgRXhjZWwgZmlsZTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIEV4Y2VsIHByb2Nlc3NpbmcuJztcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtlcnJvck1lc3NhZ2VdIH07XG4gICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgIGlmIChwcm9jZXNzZWRSb3cubGVuZ3RoID4gMCAmJiBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKS50cmltKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDEsIG1heExlbmd0aDogMTUwLCByZXF1aXJlZDogdHJ1ZSB9LCB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdGaXJzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LCB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBdO1xuICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdFeGVtcHQgU2FsZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFNhbGVzJywgaW5kZXg6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgIF07XG4gICAgICAgIG51bWVyaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEF0IGxlYXN0IG9uZSBzYWxlcyBhbW91bnQgKEV4ZW1wdCwgWmVyby1SYXRlZCwgb3IgVGF4YWJsZSkgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogdmFsaWRhdGlvbkVycm9ycywgZXJyb3I6IFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIsXG4gICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGFzdERheURhdGUgPSBnZXRGb3JtYXR0ZWRMYXN0RGF5KHBhcnNlSW50KHllYXIpLCBwYXJzZUludChtb250aCkpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IGRldGFpbFJvd3MgPSBwcm9jZXNzZWREYXRhLm1hcChyb3cgPT4gWydEJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkocm93WzBdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1sxXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzZdKSwgcm93WzddLCByb3dbOF0sIHJvd1s5XSwgcm93WzEwXSwgdGluLCBsYXN0RGF5RGF0ZV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICBjb25zdCB0b3RhbFplcm9SYXRlZCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICBjb25zdCB0b3RhbFRheGFibGVTYWxlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1MnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLCBwcm9maWxlLnJkb0NvZGUsIGxhc3REYXlEYXRlLCBwcm9maWxlLm1vbnRoU2VsZWN0XS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGF0Q29udGVudCA9IGAke2hlYWRlclJvd31cXG4ke2RldGFpbFJvd3N9YDtcbiAgICBcbiAgICAvLyBOb24tYmxvY2tpbmcgdXBsb2FkXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUxNjAxRVFTY2hlZDFEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgMTYwMUVRX1MxXyR7dGlufV8ke21vbnRofSR7eWVhcn0uREFUYDtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQxXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG51bGwsIGVycm9yczogZmlsZUVycm9ycyxcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IGNlbGwgIT09IG51bGwgJiYgY2VsbCAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSkgLy8gRmlsdGVyIG91dCBjb21wbGV0ZWx5IGJsYW5rIHJvd3NcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7IC8vICsyIHRvIGFjY291bnQgZm9yIGhlYWRlciBhbmQgMC1iYXNlZCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgIC8vIDEuIFRJTlxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAyLiBCcmFuY2ggQ29kZVxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoYnJhbmNoQ29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gJzAwMDAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2hDb2RlID0gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1sxXSA9IGJyYW5jaENvZGU7XG5cbiAgICAgICAgICAgIC8vIDMtNi4gTmFtZSBmaWVsZHNcbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNNaWRkbGVOYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s1XSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgICAgIC8vIDcuIEFUQ1xuICAgICAgICAgICAgY29uc3QgYXRjUmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbNl0sICdBVEMnLCA5LCBvcmlnaW5hbFJvd051bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoYXRjUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGF0Y1Jlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0Y1Jlc3VsdC52YWx1ZS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpOyAvLyBTdHJpY3RlciBzYW5pdGl6YXRpb24gZm9yIEFUQ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyA4LTEwLiBOdW1lcmljIGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSYXRlJywgaW5kZXg6IDcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGVycm9yczogW1wiTm8gdmFsaWQgZGF0YSByb3dzIGZvdW5kIHRvIHByb2Nlc3MuXCJdLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIixcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLFxuICAgICAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFxuICAgICAgICBbXG4gICAgICAgICAgICByb3dbMF0sIC8vIHRpblxuICAgICAgICAgICAgcm93WzFdLCAvLyBicmFuY2hjb2RlXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgLy8gcmVnTmFtZVxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIC8vIGxhc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgLy8gZmlyc3ROYW1lXG4gICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgLy8gbWlkZGxlTmFtZVxuICAgICAgICAgICAgcm93WzZdLCAvLyBhdGNcbiAgICAgICAgICAgIHJvd1s3XSwgLy8gcmF0ZVxuICAgICAgICAgICAgcm93WzhdLCAvLyBpbmNvbWVQYXltZW50XG4gICAgICAgICAgICByb3dbOV0gIC8vIHdpdGhob2xkaW5nIFRheFxuICAgICAgICBdLmpvaW4oJywnKVxuICAgICkuam9pbignXFxuJyk7XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gYFMxXFxuJHtkZXRhaWxSb3dzfWA7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCwgXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgIH07XG5cbiAgICBpZiAoIWZpbGUgfHwgIXJlcG9ydFR5cGUgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8ICFwcm9maWxlU3RyaW5nIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBjb252ZXJzaW9uLicgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVTYWxlc0RhdEZpbGUoZmlsZSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIGZvbGRlcklkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlMTYwMUVRU2NoZWQxRGF0RmlsZShmaWxlLCBwcm9maWxlLCBtb250aCwgeWVhciwgZm9sZGVySWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3ZlcndyaXRlRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGFTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2Nlc3NlZERhdGEnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25vbkNyZWRpdGFibGVJbnB1dFRheCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9wdXJjaGFzZXNcIik7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUoXG4gICAgcHJvY2Vzc2VkRGF0YTogYW55W11bXSxcbiAgICBwcm9maWxlOiBUYXhQcm9maWxlLFxuICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgeWVhcjogc3RyaW5nLFxuICAgIG5vbkNyZWRpdGFibGVJbnB1dFRheDogbnVtYmVyLFxuICAgIGZvbGRlcklkOiBzdHJpbmcsXG4gICAgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2Vcbik6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UCR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiUHVyY2hhc2VzXCI7XG4gICAgY29uc3QgZHJpdmVQYXRoID0gW3RpbiwgcmVwb3J0VHlwZVNob3J0LCB5ZWFyXTtcbiAgICBcbiAgICBpZiAoIW92ZXJ3cml0ZSkge1xuICAgICAgICBjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgY2hlY2tGaWxlRXhpc3RzKGRhdEZpbGVOYW1lLCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcbiAgICAgICAgaWYgKGZpbGVFeGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIGZpbGVFeGlzdHM6IHRydWUsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRDb250ZW50OiBudWxsLCBlcnJvcjogbnVsbCwgZXJyb3JzOiBudWxsLCB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0RGF5RGF0ZSA9IGdldEZvcm1hdHRlZExhc3REYXkocGFyc2VJbnQoeWVhciksIHBhcnNlSW50KG1vbnRoKSk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKHJvdyA9PiBbJ0QnLCAnUCcsIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLCByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLCB0aW4sIGxhc3REYXlEYXRlXS5qb2luKCcsJykpLmpvaW4oJ1xcbicpO1xuICAgIGNvbnN0IHRvdGFsRXhlbXB0ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s3XSksIDApO1xuICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsU2VydmljZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxDYXBpdGFsR29vZHMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgY29uc3QgdG90YWxJbnB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTJdKSwgMCk7XG4gICAgY29uc3QgY3JlZGl0YWJsZUlucHV0VGF4ID0gdG90YWxJbnB1dFRheCAtIG5vbkNyZWRpdGFibGVJbnB1dFRheDtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxTZXJ2aWNlcy50b0ZpeGVkKDIpLCB0b3RhbENhcGl0YWxHb29kcy50b0ZpeGVkKDIpLCB0b3RhbE90aGVyR29vZHMudG9GaXhlZCgyKSwgdG90YWxJbnB1dFRheC50b0ZpeGVkKDIpLCBjcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RdLmpvaW4oJywnKTtcbiAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgIFxuICAgIC8vIE5vbi1ibG9ja2luZyB1cGxvYWRcbiAgICB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCwgb3ZlcndyaXRlKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBkYXRDb250ZW50LCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgdG90YWxTZXJ2aWNlcywgdG90YWxDYXBpdGFsR29vZHMsIHRvdGFsT3RoZXJHb29kcywgdG90YWxJbnB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLCBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBpZiAoIXByb2Nlc3NlZERhdGFTdHJpbmcgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIW1vbnRoIHx8ICF5ZWFyIHx8IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9PT0gbnVsbCB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgcHVyY2hhc2UgZmlsZSBjcmVhdGlvbi4nIH07XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NlZERhdGFTdHJpbmcpO1xuICAgICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICAgICAgY29uc3Qgbm9uQ3JlZGl0YWJsZUlucHV0VGF4ID0gcGFyc2VGbG9hdChub25DcmVkaXRhYmxlSW5wdXRUYXhTdHJpbmcpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmF0ZVB1cmNoYXNlc0RhdEZpbGUocHJvY2Vzc2VkRGF0YSwgcHJvZmlsZSwgbW9udGgsIHllYXIsIG5vbkNyZWRpdGFibGVJbnB1dFRheCwgZm9sZGVySWQsIGZhbHNlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIERBVCBmaWxlIGNyZWF0aW9uLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVQdXJjaGFzZXNEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENyZWF0aW9uIGZhaWxlZDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuXG5jb25zdCBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGZpbGVzOiB6LmFycmF5KERhdEZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUxpc3RpbmdSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlTGlzdGluZ1Jlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlcyhmb2xkZXJJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRGaWxlTGlzdGluZ1Jlc3VsdD4ge1xuICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogJ1VzZXIgZm9sZGVyIElEIGlzIG1pc3NpbmcuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGxpc3REYXRGaWxlcyhmb2xkZXJJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbGVzLCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW2dldERhdEZpbGVzXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGZpbGVzOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBEQVQgZmlsZXM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVDb250ZW50UmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGNvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVDb250ZW50UmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0RmlsZUNvbnRlbnQoZmlsZUlkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVDb250ZW50UmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmaWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogJ0ZpbGUgSUQgaXMgcmVxdWlyZWQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkb3dubG9hZEZpbGVGcm9tRHJpdmUoZmlsZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY29udGVudDogY29udGVudCwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtnZXREYXRGaWxlQ29udGVudF0gQ1JJVElDQUwgRVJST1IgZm9yIGZpbGVJZCAke2ZpbGVJZH06YCwgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBjb250ZW50OiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byByZXRyaWV2ZSBmaWxlIGNvbnRlbnQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRSQWlLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Form": (()=>Form),
    "FormControl": (()=>FormControl),
    "FormDescription": (()=>FormDescription),
    "FormField": (()=>FormField),
    "FormItem": (()=>FormItem),
    "FormLabel": (()=>FormLabel),
    "FormMessage": (()=>FormMessage),
    "useFormField": (()=>useFormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormFieldContext);
    const itemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormItem = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem$React.forwardRef");
__turbopack_context__.k.register(_c2, "FormItem");
__turbopack_context__.k.register(_c3, "FormLabel$React.forwardRef");
__turbopack_context__.k.register(_c4, "FormLabel");
__turbopack_context__.k.register(_c5, "FormControl$React.forwardRef");
__turbopack_context__.k.register(_c6, "FormControl");
__turbopack_context__.k.register(_c7, "FormDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "FormDescription");
__turbopack_context__.k.register(_c9, "FormMessage$React.forwardRef");
__turbopack_context__.k.register(_c10, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/schemas.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DatFileSchema": (()=>DatFileSchema),
    "MutationResultSchema": (()=>MutationResultSchema),
    "TaxProfileSchema": (()=>TaxProfileSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
const alphanumericWithSpaces = (name, length, required = true)=>{
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(length, `${name} must be ${length} characters or less.`).regex(/^[a-zA-Z0-9\s]*$/, `${name} must only contain letters, numbers, and spaces.`);
    if (required) {
        return schema.min(1, `${name} is required.`);
    }
    return schema.optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal(''));
};
const TaxProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    tpTIN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{9}$/, 'TIN must be 9 digits.'),
    branchCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{4}$/, 'Branch code must be 4 digits.'),
    rdoCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, 'RDO Code is required.'),
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    cycleType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    monthSelect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Month is required.'),
    companyName: alphanumericWithSpaces('Company Name', 50, false),
    lastName: alphanumericWithSpaces('Last Name', 30, false),
    firstName: alphanumericWithSpaces('First Name', 30, false),
    middleName: alphanumericWithSpaces('Middle Name', 30, false),
    tradeName: alphanumericWithSpaces('Trade Name', 50),
    subStreet: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Unit/Floor/Substreet must be 30 characters or less.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].literal('')),
    street: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Street must be 30 characters or less.').min(1, 'Street is required.'),
    barangay: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Barangay must be 30 characters or less.').min(1, 'Barangay is required.'),
    cityMunicipality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(30, 'City/Municipality must be 30 characters or less.').min(1, 'City/Municipality is required.'),
    province: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().max(30, 'Province must be 30 characters or less.').min(1, 'Province is required.'),
    zipCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().regex(/^[0-9]{4}$/, 'Zip code must be 4 digits.')
}).passthrough().refine((data)=>{
    if (data.entityType === 'Individual') {
        return !!data.lastName && !!data.firstName && !!data.middleName;
    }
    return true;
}, {
    message: "First, Middle, and Last name are required for individuals.",
    path: [
        "lastName"
    ]
}).refine(_c = (data)=>{
    if (data.entityType === 'Non-Individual') {
        return !!data.companyName;
    }
    return true;
}, {
    message: "Company name is required for non-individuals.",
    path: [
        "companyName"
    ]
});
_c1 = TaxProfileSchema;
const MutationResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].boolean(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().nullable(),
    data: TaxProfileSchema.nullable()
});
const DatFileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    modifiedTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
var _c, _c1;
__turbopack_context__.k.register(_c, "TaxProfileSchema$z.object({\n  tpTIN: z.string().regex(/^[0-9]{9}$/, 'TIN must be 9 digits.'),\n  branchCode: z.string().regex(/^[0-9]{4}$/, 'Branch code must be 4 digits.'),\n  rdoCode: z.string().min(1, 'RDO Code is required.'),\n  entityType: z.string(),\n  cycleType: z.string(),\n  monthSelect: z.string().min(1, 'Month is required.'),\n  companyName: alphanumericWithSpaces('Company Name', 50, false),\n  lastName: alphanumericWithSpaces('Last Name', 30, false),\n  firstName: alphanumericWithSpaces('First Name', 30, false),\n  middleName: alphanumericWithSpaces('Middle Name', 30, false),\n  tradeName: alphanumericWithSpaces('Trade Name', 50),\n  subStreet: z.string().max(30, 'Unit/Floor/Substreet must be 30 characters or less.').optional().or(z.literal('')),\n  street: z.string().max(30, 'Street must be 30 characters or less.').min(1, 'Street is required.'),\n  barangay: z.string().max(30, 'Barangay must be 30 characters or less.').min(1, 'Barangay is required.'),\n  cityMunicipality: z.string().max(30, 'City/Municipality must be 30 characters or less.').min(1, 'City/Municipality is required.'),\n  province: z.string().max(30, 'Province must be 30 characters or less.').min(1, 'Province is required.'),\n  zipCode: z.string().regex(/^[0-9]{4}$/, 'Zip code must be 4 digits.'),\n}).passthrough().refine(data => {\n    if (data.entityType === 'Individual') {\n        return !!data.lastName && !!data.firstName && !!data.middleName;\n    }\n    return true;\n}, {\n    message: \"First, Middle, and Last name are required for individuals.\",\n    path: [\"lastName\"], \n}).refine");
__turbopack_context__.k.register(_c1, "TaxProfileSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/profile-form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProfileForm": (()=>ProfileForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$71a0de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:71a0de [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$4b744c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:4b744c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
;
const months = [
    {
        name: "January",
        value: "01"
    },
    {
        name: "February",
        value: "02"
    },
    {
        name: "March",
        value: "03"
    },
    {
        name: "April",
        value: "04"
    },
    {
        name: "May",
        value: "05"
    },
    {
        name: "June",
        value: "06"
    },
    {
        name: "July",
        value: "07"
    },
    {
        name: "August",
        value: "08"
    },
    {
        name: "September",
        value: "09"
    },
    {
        name: "October",
        value: "10"
    },
    {
        name: "November",
        value: "11"
    },
    {
        name: "December",
        value: "12"
    }
];
const rdoCodes = [
    '001',
    '002',
    '003',
    '004',
    '005',
    '006',
    '007',
    '008',
    '009',
    '010',
    '011',
    '012',
    '013',
    '014',
    '015',
    '016',
    '17A',
    '17B',
    '018',
    '019',
    '020',
    '21A',
    '21B',
    '022',
    '23A',
    '23B',
    '024',
    '25A',
    '25B',
    '026',
    '027',
    '028',
    '029',
    '030',
    '031',
    '032',
    '033',
    '034',
    '035',
    '036',
    '037',
    '038',
    '039',
    '040',
    '041',
    '042',
    '043',
    '43A',
    '43B',
    '044',
    '045',
    '046',
    '047',
    '048',
    '049',
    '050',
    '051',
    '052',
    '53A',
    '53B',
    '54A',
    '54B',
    '055',
    '056',
    '057',
    '058',
    '059',
    '060',
    '061',
    '062',
    '063',
    '064',
    '065',
    '066',
    '067',
    '068',
    '069',
    '070',
    '071',
    '072',
    '073',
    '074',
    '075',
    '076',
    '077',
    '078',
    '079',
    '080',
    '081',
    '082',
    '083',
    '084',
    '085',
    '086',
    '087',
    '088',
    '089',
    '090',
    '091',
    '092',
    '93A',
    '93B',
    '094',
    '095',
    '096',
    '097',
    '098',
    '099',
    '100',
    '101',
    '102',
    '103',
    '104',
    '105',
    '106',
    '107',
    '108',
    '109',
    '110',
    '111',
    '112',
    '113',
    '114',
    '115',
    '116',
    '117',
    '118',
    '119',
    '120',
    '121',
    '122',
    '123',
    '124',
    '125',
    '126',
    '127',
    '132'
];
const defaultValues = {
    tpTIN: '',
    branchCode: '0000',
    rdoCode: '',
    entityType: 'Individual',
    cycleType: 'calendar',
    monthSelect: '12',
    companyName: '',
    lastName: '',
    firstName: '',
    middleName: '',
    tradeName: '',
    subStreet: '',
    street: '',
    barangay: '',
    cityMunicipality: '',
    province: '',
    zipCode: ''
};
function ProfileForm({ isOpen, setIsOpen, profile, onSuccess }) {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [popoverOpen, setPopoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxProfileSchema"]),
        defaultValues: profile || defaultValues
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            if (isOpen) {
                form.reset(profile || defaultValues);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ProfileForm.useEffect"], [
        profile,
        isOpen
    ]);
    const entityType = form.watch('entityType');
    const cycleType = form.watch('cycleType');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            if (cycleType === 'calendar') {
                form.setValue('monthSelect', '12');
            }
        }
    }["ProfileForm.useEffect"], [
        cycleType,
        form
    ]);
    const onSubmit = (data)=>{
        startTransition(async ()=>{
            const databaseId = localStorage.getItem('databaseId');
            if (!databaseId) {
                toast({
                    title: 'Error',
                    description: 'User session not found. Please log in again.',
                    variant: 'destructive'
                });
                return;
            }
            const isNew = !profile;
            const result = isNew ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$71a0de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addTaxProfile"])(data, databaseId) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$4b744c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateTaxProfile"])(data, databaseId);
            if (result.success && result.data) {
                toast({
                    title: isNew ? 'Profile Created!' : 'Profile Updated!',
                    description: `Profile for ${data.entityType === 'Individual' ? `${data.firstName} ${data.lastName}` : data.companyName} has been saved.`
                });
                onSuccess(result.data, isNew);
                setIsOpen(false);
            } else {
                toast({
                    title: 'Operation Failed',
                    description: result.error,
                    variant: 'destructive'
                });
            }
        });
    };
    const inputStyles = "bg-slate-100";
    const sanitizeAlphanumeric = (value)=>value.replace(/[^a-zA-Z0-9\s]/g, '');
    const requiredMark = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-destructive",
        children: "*"
    }, void 0, false, {
        fileName: "[project]/src/components/profile-form.tsx",
        lineNumber: 149,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[800px] bg-white text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-black",
                            children: [
                                profile ? 'Edit' : 'Create',
                                " Tax Profile"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profile-form.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-slate-600",
                            children: [
                                "Fill in the details below to ",
                                profile ? 'update the' : 'create a new',
                                " tax profile. Click save when you're done."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/profile-form.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/profile-form.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(onSubmit),
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[60vh] overflow-y-auto pr-4 pl-1 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "entityType",
                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-black",
                                                        children: [
                                                            "Entity Type ",
                                                            requiredMark
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                                            onValueChange: field.onChange,
                                                            defaultValue: field.value,
                                                            className: "flex space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                    className: "flex items-center space-x-2 space-y-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                                                value: "Individual",
                                                                                id: "individual"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 176,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                            htmlFor: "individual",
                                                                            className: "font-normal text-black",
                                                                            children: "Individual"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                    className: "flex items-center space-x-2 space-y-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                                                value: "Non-Individual",
                                                                                id: "non-individual"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 183,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                            htmlFor: "non-individual",
                                                                            className: "font-normal text-black",
                                                                            children: "Non-Individual"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 185,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "tpTIN",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Taxpayer Identification Number ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "123456789",
                                                                    ...field,
                                                                    className: inputStyles,
                                                                    readOnly: !!profile
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 36
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 195,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "branchCode",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Branch Code ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    placeholder: "0000",
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 36
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 202,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "rdoCode",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "RDO Code ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                                open: popoverOpen,
                                                                onOpenChange: setPopoverOpen,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "outline",
                                                                                role: "combobox",
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-between", !field.value && "text-muted-foreground", inputStyles),
                                                                                children: [
                                                                                    field.value ? rdoCodes.find((code)=>code === field.value) : "Select an RDO code",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                                                                                        className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                                        lineNumber: 225,
                                                                                        columnNumber: 31
                                                                                    }, void 0)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 215,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 28
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 25
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                        className: "w-[200px] p-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
                                                                                    placeholder: "Search RDO code..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                                    lineNumber: 231,
                                                                                    columnNumber: 29
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                                                            children: "No RDO code found."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                                            lineNumber: 233,
                                                                                            columnNumber: 31
                                                                                        }, void 0),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                                                            children: rdoCodes.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                                                                    value: code,
                                                                                                    onSelect: ()=>{
                                                                                                        form.setValue("rdoCode", code);
                                                                                                        setPopoverOpen(false);
                                                                                                    },
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", code === field.value ? "opacity-100" : "opacity-0")
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                                                            lineNumber: 244,
                                                                                                            columnNumber: 37
                                                                                                        }, void 0),
                                                                                                        code
                                                                                                    ]
                                                                                                }, code, true, {
                                                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                                                    lineNumber: 236,
                                                                                                    columnNumber: 35
                                                                                                }, void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                                            lineNumber: 234,
                                                                                            columnNumber: 31
                                                                                        }, void 0)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                                    lineNumber: 232,
                                                                                    columnNumber: 29
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 25
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 209,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    entityType === 'Individual' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "firstName",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "First Name ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 31
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    onChange: (e)=>field.onChange(sanitizeAlphanumeric(e.target.value)),
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 115
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 102
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 244
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "middleName",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Middle Name ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 31
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    onChange: (e)=>field.onChange(sanitizeAlphanumeric(e.target.value)),
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 116
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 103
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 245
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "lastName",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Last Name ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 31
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    onChange: (e)=>field.onChange(sanitizeAlphanumeric(e.target.value)),
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 114
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 101
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 243
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 273,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "companyName",
                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-black",
                                                        children: [
                                                            "Company Name ",
                                                            requiredMark
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 29
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...field,
                                                            onChange: (e)=>field.onChange(sanitizeAlphanumeric(e.target.value)),
                                                            className: inputStyles
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 115
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 102
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 244
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                        control: form.control,
                                        name: "tradeName",
                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                        className: "text-black",
                                                        children: [
                                                            "Trade Name ",
                                                            requiredMark
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 29
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...field,
                                                            onChange: (e)=>field.onChange(sanitizeAlphanumeric(e.target.value)),
                                                            className: inputStyles
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 113
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 100
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 242
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium pt-4 text-black",
                                        children: "Registered Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "subStreet",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: "Unit/Floor/Substreet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 108
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 95
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 166
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "street",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Street ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 109
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 96
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 167
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "barangay",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Barangay ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 111
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 98
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 169
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "cityMunicipality",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "City/Municipality ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 120
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 107
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 178
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "province",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Province ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 111
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 98
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 169
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "zipCode",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Zip Code ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    ...field,
                                                                    className: inputStyles
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/profile-form.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 111
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 98
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 169
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 19
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium pt-4 text-black",
                                        children: "Taxpayer Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "cycleType",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Cycle Type ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                onValueChange: field.onChange,
                                                                value: field.value,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            className: inputStyles,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Select a cycle type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 79
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 40
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "calendar",
                                                                                children: "Calendar"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: "fiscal",
                                                                                children: "Fiscal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 320,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                control: form.control,
                                                name: "monthSelect",
                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                className: "text-black",
                                                                children: [
                                                                    "Fiscal Year End Month ",
                                                                    requiredMark
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 23
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                onValueChange: field.onChange,
                                                                value: field.value,
                                                                disabled: cycleType === 'calendar',
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            className: inputStyles,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Select a month"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 330,
                                                                                columnNumber: 79
                                                                            }, void 0)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/profile-form.tsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 40
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                        children: months.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                value: month.value,
                                                                                children: month.name
                                                                            }, month.name, false, {
                                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                                lineNumber: 332,
                                                                                columnNumber: 50
                                                                            }, void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/profile-form.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/profile-form.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 312,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile-form.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                className: "pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/profile-form.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isPending,
                                        children: [
                                            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "mr-2 h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/profile-form.tsx",
                                                lineNumber: 346,
                                                columnNumber: 31
                                            }, this),
                                            profile ? 'Save Changes' : 'Create Profile'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/profile-form.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/profile-form.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/profile-form.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/profile-form.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/profile-form.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/profile-form.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(ProfileForm, "P0ovtC1v3nlradSpQ4hwouhmKNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ProfileForm;
var _c;
__turbopack_context__.k.register(_c, "ProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(app)/home/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home-content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-refresh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-tax-profiles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/profile-form.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomePage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { profiles, isPending, initialFetchComplete, fetchProfiles, addProfile, updateProfile, selectedProfile, setSelectedProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTaxProfiles"])();
    const { setRefreshFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const [isFormOpen, setIsFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleFetch]": (isManualRefresh = false)=>{
            fetchProfiles(isManualRefresh);
        }
    }["HomePage.useCallback[handleFetch]"], [
        fetchProfiles
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Set the refresh function for the header button to allow manual refresh
            setRefreshFunction({
                "HomePage.useEffect": ()=>({
                        "HomePage.useEffect": ()=>handleFetch(true)
                    })["HomePage.useEffect"]
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], [
        handleFetch,
        setRefreshFunction
    ]);
    const handleProfileSuccess = (updatedProfile, isNew)=>{
        if (isNew) {
            addProfile(updatedProfile);
        } else {
            updateProfile(updatedProfile);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeContent"], {
                profiles: profiles,
                isPending: isPending,
                initialFetchComplete: initialFetchComplete,
                onNewProfile: ()=>setIsFormOpen(true),
                selectedProfile: selectedProfile,
                onProfileSelect: setSelectedProfile
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/home/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$profile$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileForm"], {
                isOpen: isFormOpen,
                setIsOpen: setIsFormOpen,
                profile: null,
                onSuccess: handleProfileSuccess
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/home/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "G7DPSr/+bLgk1B7Fpfh2/e7S6Ac=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTaxProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9a8aab20._.js.map