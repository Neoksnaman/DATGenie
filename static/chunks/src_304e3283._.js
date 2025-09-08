(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: "https://i.imgur.com/YuFtLr0.png",
        alt: "DATGenie Logo",
        width: 48,
        height: 48,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-12 h-12", className)
    }, void 0, false, {
        fileName: "[project]/src/components/logo.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": (()=>useIsMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const checkSize = {
                "useIsMobile.useEffect.checkSize": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.checkSize"];
            // Check on initial client-side mount
            checkSize();
            // Add event listener for window resize
            window.addEventListener("resize", checkSize);
            // Cleanup event listener on component unmount
            return ({
                "useIsMobile.useEffect": ()=>window.removeEventListener("resize", checkSize)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar),
    "SidebarContent": (()=>SidebarContent),
    "SidebarFooter": (()=>SidebarFooter),
    "SidebarGroup": (()=>SidebarGroup),
    "SidebarGroupAction": (()=>SidebarGroupAction),
    "SidebarGroupContent": (()=>SidebarGroupContent),
    "SidebarGroupLabel": (()=>SidebarGroupLabel),
    "SidebarHeader": (()=>SidebarHeader),
    "SidebarInput": (()=>SidebarInput),
    "SidebarInset": (()=>SidebarInset),
    "SidebarMenu": (()=>SidebarMenu),
    "SidebarMenuAction": (()=>SidebarMenuAction),
    "SidebarMenuBadge": (()=>SidebarMenuBadge),
    "SidebarMenuButton": (()=>SidebarMenuButton),
    "SidebarMenuItem": (()=>SidebarMenuItem),
    "SidebarMenuSkeleton": (()=>SidebarMenuSkeleton),
    "SidebarMenuSub": (()=>SidebarMenuSub),
    "SidebarMenuSubButton": (()=>SidebarMenuSubButton),
    "SidebarMenuSubItem": (()=>SidebarMenuSubItem),
    "SidebarProvider": (()=>SidebarProvider),
    "SidebarRail": (()=>SidebarRail),
    "SidebarSeparator": (()=>SidebarSeparator),
    "SidebarTrigger": (()=>SidebarTrigger),
    "useSidebar": (()=>useSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
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
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSidebar() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SidebarProvider = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s1(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[setOpen]": (value)=>{
            const openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            } else {
                _setOpen(openState);
            }
            // This sets the cookie to keep the sidebar state.
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
        }
    }["SidebarProvider.useCallback[setOpen]"], [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[toggleSidebar]": ()=>{
            return isMobile ? setOpenMobile({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]) : setOpen({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]);
        }
    }["SidebarProvider.useCallback[toggleSidebar]"], [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            const handleKeyDown = {
                "SidebarProvider.useEffect.handleKeyDown": (event)=>{
                    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                        event.preventDefault();
                        toggleSidebar();
                    }
                }
            }["SidebarProvider.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "SidebarProvider.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["SidebarProvider.useEffect"];
        }
    }["SidebarProvider.useEffect"], [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SidebarProvider.useMemo[contextValue]": ()=>({
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar
            })
    }["SidebarProvider.useMemo[contextValue]"], [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 135,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 134,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 133,
        columnNumber: 7
    }, this);
}, "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
})), "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = _s2(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    _s2();
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 182,
            columnNumber: 9
        }, this);
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full flex-col",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 209,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 198,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 197,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 216,
        columnNumber: 7
    }, this);
}, "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
})), "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
});
_c3 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = _s3(({ className, onClick, ...props }, ref)=>{
    _s3();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c5 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c7 = SidebarRail;
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
});
_c9 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
});
_c11 = SidebarInput;
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
});
_c13 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
});
_c15 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c16 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
});
_c17 = SidebarSeparator;
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c18 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 403,
        columnNumber: 5
    }, this);
});
_c19 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c20 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
});
_c21 = SidebarGroup;
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c22 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
});
_c23 = SidebarGroupLabel;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c24 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 459,
        columnNumber: 5
    }, this);
});
_c25 = SidebarGroupAction;
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c26 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 479,
        columnNumber: 3
    }, this));
_c27 = SidebarGroupContent;
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c28 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 492,
        columnNumber: 3
    }, this));
_c29 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c30 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 505,
        columnNumber: 3
    }, this));
_c31 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const SidebarMenuButton = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c32 = _s5(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    _s5();
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 560,
        columnNumber: 7
    }, this);
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 582,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 583,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 581,
        columnNumber: 7
    }, this);
}, "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
})), "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
});
_c33 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c34 = ({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
});
_c35 = SidebarMenuAction;
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c36 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 630,
        columnNumber: 3
    }, this));
_c37 = SidebarMenuBadge;
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ _s6((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c38 = _s6(({ className, showIcon = false, ...props }, ref)=>{
    _s6();
    // Random width between 50 to 90%.
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SidebarMenuSkeleton.useMemo[width]": ()=>{
            return `${Math.floor(Math.random() * 40) + 50}%`;
        }
    }["SidebarMenuSkeleton.useMemo[width]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md h-8 flex gap-2 px-2 items-center", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 666,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 flex-1 max-w-[--skeleton-width]",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=")), "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c39 = SidebarMenuSkeleton;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c40 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 689,
        columnNumber: 3
    }, this));
_c41 = SidebarMenuSub;
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c42 = ({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 705,
        columnNumber: 26
    }, this));
_c43 = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c44 = ({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 719,
        columnNumber: 5
    }, this);
});
_c45 = SidebarMenuSubButton;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45;
__turbopack_context__.k.register(_c, "SidebarProvider$React.forwardRef");
__turbopack_context__.k.register(_c1, "SidebarProvider");
__turbopack_context__.k.register(_c2, "Sidebar$React.forwardRef");
__turbopack_context__.k.register(_c3, "Sidebar");
__turbopack_context__.k.register(_c4, "SidebarTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "SidebarTrigger");
__turbopack_context__.k.register(_c6, "SidebarRail$React.forwardRef");
__turbopack_context__.k.register(_c7, "SidebarRail");
__turbopack_context__.k.register(_c8, "SidebarInset$React.forwardRef");
__turbopack_context__.k.register(_c9, "SidebarInset");
__turbopack_context__.k.register(_c10, "SidebarInput$React.forwardRef");
__turbopack_context__.k.register(_c11, "SidebarInput");
__turbopack_context__.k.register(_c12, "SidebarHeader$React.forwardRef");
__turbopack_context__.k.register(_c13, "SidebarHeader");
__turbopack_context__.k.register(_c14, "SidebarFooter$React.forwardRef");
__turbopack_context__.k.register(_c15, "SidebarFooter");
__turbopack_context__.k.register(_c16, "SidebarSeparator$React.forwardRef");
__turbopack_context__.k.register(_c17, "SidebarSeparator");
__turbopack_context__.k.register(_c18, "SidebarContent$React.forwardRef");
__turbopack_context__.k.register(_c19, "SidebarContent");
__turbopack_context__.k.register(_c20, "SidebarGroup$React.forwardRef");
__turbopack_context__.k.register(_c21, "SidebarGroup");
__turbopack_context__.k.register(_c22, "SidebarGroupLabel$React.forwardRef");
__turbopack_context__.k.register(_c23, "SidebarGroupLabel");
__turbopack_context__.k.register(_c24, "SidebarGroupAction$React.forwardRef");
__turbopack_context__.k.register(_c25, "SidebarGroupAction");
__turbopack_context__.k.register(_c26, "SidebarGroupContent$React.forwardRef");
__turbopack_context__.k.register(_c27, "SidebarGroupContent");
__turbopack_context__.k.register(_c28, "SidebarMenu$React.forwardRef");
__turbopack_context__.k.register(_c29, "SidebarMenu");
__turbopack_context__.k.register(_c30, "SidebarMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c31, "SidebarMenuItem");
__turbopack_context__.k.register(_c32, "SidebarMenuButton$React.forwardRef");
__turbopack_context__.k.register(_c33, "SidebarMenuButton");
__turbopack_context__.k.register(_c34, "SidebarMenuAction$React.forwardRef");
__turbopack_context__.k.register(_c35, "SidebarMenuAction");
__turbopack_context__.k.register(_c36, "SidebarMenuBadge$React.forwardRef");
__turbopack_context__.k.register(_c37, "SidebarMenuBadge");
__turbopack_context__.k.register(_c38, "SidebarMenuSkeleton$React.forwardRef");
__turbopack_context__.k.register(_c39, "SidebarMenuSkeleton");
__turbopack_context__.k.register(_c40, "SidebarMenuSub$React.forwardRef");
__turbopack_context__.k.register(_c41, "SidebarMenuSub");
__turbopack_context__.k.register(_c42, "SidebarMenuSubItem$React.forwardRef");
__turbopack_context__.k.register(_c43, "SidebarMenuSubItem");
__turbopack_context__.k.register(_c44, "SidebarMenuSubButton$React.forwardRef");
__turbopack_context__.k.register(_c45, "SidebarMenuSubButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-refresh.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RefreshProvider": (()=>RefreshProvider),
    "useRefresh": (()=>useRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const RefreshContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const RefreshProvider = ({ children })=>{
    _s();
    const [refreshFunction, setRefreshFunction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RefreshProvider.useCallback[setRefresh]": (fn)=>{
            setRefreshFunction(fn);
        }
    }["RefreshProvider.useCallback[setRefresh]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshContext.Provider, {
        value: {
            refresh: refreshFunction,
            setRefreshFunction: setRefresh
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-refresh.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(RefreshProvider, "tkT8mIH66BP/YmposiAbhJAnoxc=");
_c = RefreshProvider;
const useRefresh = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(RefreshContext);
    if (context === undefined) {
        throw new Error('useRefresh must be used within a RefreshProvider');
    }
    return context;
};
_s1(useRefresh, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "RefreshProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:08718a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b2e571cd0cb75ab827e90db3316b90dd461882f2":"getUserHeaderData"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "getUserHeaderData": (()=>getUserHeaderData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUserHeaderData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b2e571cd0cb75ab827e90db3316b90dd461882f2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserHeaderData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUsIERhdEZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEsIERhdEZpbGVTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjaGVja0ZpbGVFeGlzdHMsIGNyZWF0ZUZvbGRlckluRHJpdmUsIGxpc3REYXRGaWxlcywgZG93bmxvYWRGaWxlRnJvbURyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5pbXBvcnQgeyBhdGNXRSwgYXRjRXhlbXB0LCBhdGNXRyB9IGZyb20gJy4vc2NoZWR1bGVzJztcblxuY29uc3QgQW5hbHl6ZUZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcblxudHlwZSBBbmFseXplRmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVFeGNlbEZpbGUoXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTxBbmFseXplRmlsZVJlc3VsdD4ge1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZC4nIH07XG4gIH1cblxuICAvLyBDaGVjayBmaWxlIHR5cGVcbiAgaWYgKGZpbGUudHlwZSAhPT0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyAmJiBmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnSW52YWxpZCBmaWxlIHR5cGUuIFBsZWFzZSB1cGxvYWQgYW4gRXhjZWwgZmlsZS4nIH07XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgIGNvbnN0IGRhdGFVcmkgPSBgZGF0YToke2ZpbGUudHlwZX07YmFzZTY0LCR7YnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKX1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhjZWxFcnJvckRldGVjdGlvbih7IGV4Y2VsRGF0YVVyaTogZGF0YVVyaSB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gYW5hbHl6ZSBmaWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuY29uc3QgQXV0aFJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIHVzZXI6IHoub2JqZWN0KHtcbiAgICAgICAgdXNlck5hbWU6IHouc3RyaW5nKCksXG4gICAgICAgIGRhdGFiYXNlSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgZm9sZGVySWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICB9KS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQXV0aFJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIEF1dGhSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwVXNlcih1c2VyRGF0YTogU2lnbnVwRGF0YSk6IFByb21pc2U8QXV0aFJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvbGRlcklkID0gYXdhaXQgY3JlYXRlRm9sZGVySW5Ecml2ZShgREFUR2VuaWVfJHt1c2VyRGF0YS51c2VyTmFtZX1gKTtcbiAgICBhd2FpdCBhcHBlbmRVc2VyVG9TaGVldCh7IC4uLnVzZXJEYXRhLCBmb2xkZXJJZCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgdXNlcjogbnVsbCB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyB1cCB1c2VyOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHNpZ24gdXA6ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKGNyZWRlbnRpYWxzOiBMb2dpbkRhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldEFsbFVzZXJzKCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKHUgPT4gdS51c2VyTmFtZSA9PT0gY3JlZGVudGlhbHMudXNlck5hbWUgJiYgdS5wd2QgPT09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgbGV0IGZvbGRlcklkID0gdXNlci5mb2xkZXJJZDtcbiAgICAgICAgICAgIGlmICghZm9sZGVySWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNlciAke3VzZXIudXNlck5hbWV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXJJZC4gQ3JlYXRpbmcgb25lIG5vdy5gKTtcbiAgICAgICAgICAgICAgICBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlci51c2VyTmFtZX1gKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVVc2VyRm9sZGVySWQodXNlci51c2VyTmFtZSwgZm9sZGVySWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgYXNzaWduZWQgZm9sZGVySWQgJHtmb2xkZXJJZH0gdG8gdXNlciAke3VzZXIudXNlck5hbWV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IHsgdXNlck5hbWU6IHVzZXIudXNlck5hbWUsIGRhdGFiYXNlSWQ6IHVzZXIuZGF0YWJhc2VJZCwgZm9sZGVySWQ6IGZvbGRlcklkIH0gfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJywgdXNlcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluIHVzZXI6JywgZSk7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBsb2dpbjogJHtlcnJvck1lc3NhZ2V9YCwgdXNlcjogbnVsbCB9O1xuICAgIH1cbn1cblxuY29uc3QgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gIGRhdGE6IHouYXJyYXkoVGF4UHJvZmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBUYXhQcm9maWxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgVGF4UHJvZmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySGVhZGVyRGF0YShkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFRheFByb2ZpbGVSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGFiYXNlSWQpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0RhdGFiYXNlIElEIGlzIHJlcXVpcmVkLicgfTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyRGF0YSA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogaGVhZGVyRGF0YSwgZXJyb3I6IG51bGwgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBoZWFkZXIgZGF0YTonLCBlcnJvcik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogYEZhaWxlZCB0byBmZXRjaCBoZWFkZXIgZGF0YTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cblxudHlwZSBNdXRhdGlvblJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIE11dGF0aW9uUmVzdWx0U2NoZW1hPjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9VcHBlcmNhc2UoZGF0YTogVGF4UHJvZmlsZSk6IFRheFByb2ZpbGUge1xuICBjb25zdCB1cHBlcmNhc2VkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleSBhcyBrZXlvZiBUYXhQcm9maWxlXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBrZXkgIT09ICdlbnRpdHlUeXBlJyAmJiBrZXkgIT09ICdjeWNsZVR5cGUnICYmIGtleSAhPT0gJ21vbnRoU2VsZWN0JyAmJiBrZXkgIT09ICdyZG9Db2RlJykge1xuICAgICAgdXBwZXJjYXNlZERhdGFba2V5XSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVwcGVyY2FzZWREYXRhIGFzIFRheFByb2ZpbGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdQcm9maWxlcyA9IGF3YWl0IGdldEFsbEhlYWRlckRhdGFGcm9tU2hlZXQoZGF0YWJhc2VJZCk7XG4gICAgY29uc3QgdGluRXhpc3RzID0gZXhpc3RpbmdQcm9maWxlcy5zb21lKHAgPT4gcC50cFRJTiA9PT0gdmFsaWRhdGVkRGF0YS50cFRJTik7XG5cbiAgICBpZiAodGluRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICAgICAgZXJyb3I6ICdUaGlzIFRJTiBhbHJlYWR5IGhhcyBhIHByb2ZpbGUuIFBsZWFzZSBjaGVjayB5b3VyIGRhdGEgb3IgcmVmcmVzaCB0aGUgcGFnZS4nLCBcbiAgICAgICAgICAgIGRhdGE6IG51bGwgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJjYXNlZERhdGEgPSB0cmFuc2Zvcm1Ub1VwcGVyY2FzZSh2YWxpZGF0ZWREYXRhKTtcbiAgICBhd2FpdCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCh1cHBlcmNhc2VkRGF0YSwgZGF0YWJhc2VJZCk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIGRhdGE6IHVwcGVyY2FzZWREYXRhIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gYWRkIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUYXhQcm9maWxlKHByb2ZpbGVEYXRhOiBUYXhQcm9maWxlLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPE11dGF0aW9uUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IFRheFByb2ZpbGVTY2hlbWEucGFyc2UocHJvZmlsZURhdGEpO1xuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgdGF4IHByb2ZpbGU6JywgZSk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gdXBkYXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAsIGRhdGE6IG51bGwgfTtcbiAgfVxufVxuXG5jb25zdCBTaW1wbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBTaW1wbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBTaW1wbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVGF4UHJvZmlsZSh0cFRJTjogc3RyaW5nLCBkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPFNpbXBsZVJlc3VsdD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0KHRwVElOLCBkYXRhYmFzZUlkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gZGVsZXRlIHByb2ZpbGU6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cbmNvbnN0IERhdEZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZGF0Q29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGZpbGVOYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBlcnJvcnM6IHouYXJyYXkoei5zdHJpbmcoKSkubnVsbGFibGUoKSxcbiAgICBmaWxlRXhpc3RzOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIC8vIFNhbGVzIFRvdGFsc1xuICAgIHRvdGFsRXhlbXB0OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxaZXJvUmF0ZWQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbFRheGFibGVTYWxlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsT3V0cHV0VGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgLy8gUHVyY2hhc2UgVG90YWxzXG4gICAgdG90YWxTZXJ2aWNlczogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsQ2FwaXRhbEdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxPdGhlckdvb2RzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxJbnB1dFRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIC8vIDE2MDEtRVEgYW5kIFNBV1QgVG90YWxzXG4gICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsV2l0aGhvbGRpbmdUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICBwcm9jZXNzZWREYXRhOiB6LmFueSgpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVSZXN1bHRTY2hlbWE+O1xuXG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyLCByb3dOdW1iZXI6IG51bWJlciwgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBsZXQgdmFsdWUgPSAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCkgPyAnJyA6IFN0cmluZyhpbnB1dCkudHJpbSgpO1xuICAgIFxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gaXMgbWlzc2luZy5gIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcnLCBlcnJvcjogbnVsbCB9O1xuICAgIH1cblxuICAgIGxldCBwcm9jZXNzZWRTdHJpbmcgPSB2YWx1ZVxuICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnQU5EJylcbiAgICAgICAgLnJlcGxhY2UoL8ORL2csICdOJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXkEtWjAtOVxccy1dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpXG4gICAgICAgIC50cmltKCk7XG5cbiAgICBpZiAocHJvY2Vzc2VkU3RyaW5nLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBtdXN0IGJlICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzIG9yIGxlc3MuYCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IHZhbHVlOiBwcm9jZXNzZWRTdHJpbmcsIGVycm9yOiBudWxsIH07XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIoaW5wdXQ6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIHJvd051bWJlcjogbnVtYmVyKTogeyB2YWx1ZTogc3RyaW5nLCBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHVuZGVmaW5lZCB8fCBTdHJpbmcoaW5wdXQpLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IFN0cmluZyhpbnB1dCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZUFzU3RyaW5nKTtcblxuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBTdHJpbmcoaW5wdXQpLCBlcnJvcjogYFJvdyAke3Jvd051bWJlcn06ICR7ZmllbGROYW1lfSBjb250YWlucyBhbiBpbnZhbGlkIG51bWJlci5gIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvdW5kZWROdW0gPSBNYXRoLnJvdW5kKG51bSAqIDEwMCkgLyAxMDA7XG4gICAgXG4gICAgaWYgKHJvdW5kZWROdW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6ICcwJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcm91bmRlZE51bS50b0ZpeGVkKDIpLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRMYXN0RGF5KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gR2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGguIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbGVhcCB5ZWFycy5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkZCA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgcmV0dXJuIGAke21tfS8ke2RkfS8ke3l5eXl9YDtcbn1cblxuY29uc3QgcXVvdGVJZk5vdEVtcHR5ID0gKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpO1xuICByZXR1cm4gc3RyID8gYFwiJHtzdHJ9XCJgIDogJyc7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzRXhjZWxGaWxlKGZpbGU6IEZpbGUsIHNoZWV0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IGRhdGE6IGFueVtdW10sIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdIH0+IHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCB3b3JrYm9vayA9IHhsc3gucmVhZChieXRlcywgeyB0eXBlOiAnYXJyYXknIH0pO1xuXG4gICAgaWYgKCF3b3JrYm9vay5TaGVldE5hbWVzLmluY2x1ZGVzKHNoZWV0TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtgU2hlZXQgXCIke3NoZWV0TmFtZX1cIiBub3QgZm91bmQgaW4gdGhlIHVwbG9hZGVkIGZpbGUuYF0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB3b3Jrc2hlZXQgPSB3b3JrYm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgICBjb25zdCBkYXRhOiBhbnlbXVtdID0geGxzeC51dGlscy5zaGVldF90b19qc29uKHdvcmtzaGVldCwge1xuICAgICAgICBoZWFkZXI6IDEsXG4gICAgICAgIGRlZnZhbDogJycsXG4gICAgICAgIHJhdzogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4geyBkYXRhOiBbXSwgdmFsaWRhdGlvbkVycm9yczogW10gfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLnNsaWNlKDEpLCB2YWxpZGF0aW9uRXJyb3JzOiBbXSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGU6IEZpbGUsIHByb2ZpbGU6IFRheFByb2ZpbGUsIG1vbnRoOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZm9sZGVySWQ6IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogZmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcInZhdF9zYWxlc1wiKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICAgICAgZXJyb3JzOiBmaWxlRXJyb3JzLCBcbiAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBkYXRhUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuICAgICAgICBpZiAocHJvY2Vzc2VkUm93Lmxlbmd0aCA+IDAgJiYgU3RyaW5nKHByb2Nlc3NlZFJvd1swXSkudHJpbSgpKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4uc3Vic3RyaW5nKDAsIDkpID09PSB0aW4pIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUaGUgVElOIG1hdGNoZXMgdGhlIHNlbGVjdGVkIHByb2ZpbGUncyBUSU4uIEEgY29tcGFueSBjYW5ub3QgbWFrZSBhIHNhbGUgdG8gaXRzZWxmLmApO1xuICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIGF0IGxlYXN0IDkgZGlnaXRzLmApO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gaXMgbWlzc2luZy5gKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMSwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBudW1lcmljRmllbGRzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnRXhlbXB0IFNhbGVzJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnWmVyby1SYXRlZCBTYWxlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdUYXhhYmxlIFNhbGVzJywgaW5kZXg6IDkgfSwgeyBuYW1lOiAnT3V0cHV0IFRheCcsIGluZGV4OiAxMCB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzhdKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s5XSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgc2FsZXMgYW1vdW50IChFeGVtcHQsIFplcm8tUmF0ZWQsIG9yIFRheGFibGUpIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMsIGVycm9yOiBcIlZhbGlkYXRpb24gZmFpbGVkLlwiLFxuICAgICAgICAgICAgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsXG4gICAgICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NlZERhdGEuc29ydCgoYSwgYikgPT4gU3RyaW5nKGFbMV0pLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGJbMV0pKSk7XG4gICAgXG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgIGNvbnN0IHJlcG9ydFR5cGVTaG9ydCA9IFwiU2FsZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgaWYgKCFvdmVyd3JpdGUpIHtcbiAgICAgICAgY29uc3QgZmlsZUV4aXN0cyA9IGF3YWl0IGNoZWNrRmlsZUV4aXN0cyhkYXRGaWxlTmFtZSwgZm9sZGVySWQsIGRyaXZlUGF0aCk7XG4gICAgICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBmaWxlRXhpc3RzOiB0cnVlLCBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgZGF0Q29udGVudDogbnVsbCwgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICBjb25zdCBhZGRyZXNzMSA9IFtwcm9maWxlLnN1YlN0cmVldCwgcHJvZmlsZS5zdHJlZXQsIHByb2ZpbGUuYmFyYW5nYXldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBbcHJvZmlsZS5jaXR5TXVuaWNpcGFsaXR5LCBwcm9maWxlLnByb3ZpbmNlLCBwcm9maWxlLnppcENvZGVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFsnRCcsICdTJywgcXVvdGVJZk5vdEVtcHR5KHJvd1swXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s2XSksIHJvd1s3XSwgcm93WzhdLCByb3dbOV0sIHJvd1sxMF0sIHRpbiwgbGFzdERheURhdGVdLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgY29uc3QgdG90YWxaZXJvUmF0ZWQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxUYXhhYmxlU2FsZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgY29uc3QgdG90YWxPdXRwdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEwXSksIDApO1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IFsnSCcsICdTJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmNvbXBhbnlOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUudHJhZGVOYW1lKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSwgdG90YWxFeGVtcHQudG9GaXhlZCgyKSwgdG90YWxaZXJvUmF0ZWQudG9GaXhlZCgyKSwgdG90YWxUYXhhYmxlU2FsZXMudG9GaXhlZCgyKSwgdG90YWxPdXRwdXRUYXgudG9GaXhlZCgyKSwgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdF0uam9pbignLCcpO1xuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBgJHtoZWFkZXJSb3d9XFxuJHtkZXRhaWxSb3dzfWA7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICBcbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheCxcbiAgICAgICAgZXJyb3I6IG51bGwsIGVycm9yczogbnVsbCwgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZTE2MDFFUURhdEZpbGUoZmlsZTogRmlsZSwgcHJvZmlsZTogVGF4UHJvZmlsZSwgbW9udGg6IHN0cmluZywgeWVhcjogc3RyaW5nLCBmb2xkZXJJZDogc3RyaW5nLCBvdmVyd3JpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgdHBUSU46IHRpbiwgYnJhbmNoQ29kZSB9ID0gcHJvZmlsZTtcbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgeyBkYXRhOiBzY2hlZDFEYXRhUm93cywgdmFsaWRhdGlvbkVycm9yczogc2NoZWQxRmlsZUVycm9ycyB9ID0gYXdhaXQgcHJvY2Vzc0V4Y2VsRmlsZShmaWxlLCBcIjE2MDFFUV9zY2hlZDFcIik7XG4gICAgaWYgKHNjaGVkMUZpbGVFcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IHNjaGVkMUZpbGVFcnJvcnMgfTtcblxuICAgIGNvbnN0IHsgZGF0YTogc2NoZWQyRGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IHNjaGVkMkZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCIxNjAxRVFfc2NoZWQyXCIpO1xuICAgIGlmIChzY2hlZDJGaWxlRXJyb3JzLmxlbmd0aCA+IDApIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3JzOiBzY2hlZDJGaWxlRXJyb3JzIH07XG5cbiAgICBjb25zdCBzY2hlZDFIYXNEYXRhID0gc2NoZWQxRGF0YVJvd3Muc29tZShyb3cgPT4gcm93LnNvbWUoY2VsbCA9PiBTdHJpbmcoY2VsbCkudHJpbSgpICE9PSAnJykpO1xuICAgIGNvbnN0IHNjaGVkMkhhc0RhdGEgPSBzY2hlZDJEYXRhUm93cy5zb21lKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSk7XG5cbiAgICBpZiAoIXNjaGVkMUhhc0RhdGEgJiYgIXNjaGVkMkhhc0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcnM6IFtcIk5vIGRhdGEgZm91bmQgaW4gU2NoZWR1bGUgMSBvciBTY2hlZHVsZSAyIHNoZWV0cy5cIl0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gUHJvY2VzcyBTY2hlZHVsZSAxIChUYXhhYmxlKVxuICAgIGNvbnN0IHByb2Nlc3NlZFNjaGVkMURhdGEgPSBzY2hlZDFEYXRhUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuc29tZShjZWxsID0+IFN0cmluZyhjZWxsKS50cmltKCkgIT09ICcnKSlcbiAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRSb3cgPSBbLi4ucm93XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkVGluID0gb3JpZ2luYWxUaW4ucmVwbGFjZSgvW14wLTldL2csICcnKS5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5sZW5ndGggPiAwICYmIHNhbml0aXplZFRpbi5sZW5ndGggPCA5KSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSA5IGRpZ2l0cyBpZiBwcm92aWRlZC5gKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzFdID0gYnJhbmNoQ29kZSA/IGJyYW5jaENvZGUuc2xpY2UoLTQpLnBhZFN0YXJ0KDQsICcwJykgOiBcIjAwMDBcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogNTAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBgU2NoZWQxICR7ZmllbGQubmFtZX1gLCBmaWVsZC5tYXhMZW5ndGgsIG9yaWdpbmFsUm93TnVtYmVyLCBmaWVsZC5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYXRjID0gU3RyaW5nKHByb2Nlc3NlZFJvd1s2XSB8fCAnJykudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzZdID0gYXRjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBudW1lcmljRmllbGRzID0gW3sgbmFtZTogJ1JhdGUnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdJbmNvbWUgUGF5bWVudCcsIGluZGV4OiA4IH0sIHsgbmFtZTogJ1dpdGhob2xkaW5nIFRheCcsIGluZGV4OiA5IH1dO1xuICAgICAgICAgICAgbnVtZXJpY0ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDEgJHtmaWVsZC5uYW1lfWAsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhdGMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdGNEYXRhID0gYXRjV0UuZmluZChpdGVtID0+IGl0ZW0uYXRjID09PSBhdGMpO1xuICAgICAgICAgICAgICAgIGlmIChhdGNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgIT09IGF0Y0RhdGEucmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDEgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJbnZhbGlkIHJhdGUgZm9yIEFUQyAke2F0Y30uIEV4cGVjdGVkICR7YXRjRGF0YS5yYXRlfSUsIGJ1dCBnb3QgJHtwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSl9JS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQxIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgJyR7YXRjfScgaXMgbm90IHZhbGlkIGZvciBTY2hlZHVsZSAxLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFNjaGVkMSBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gUHJvY2VzcyBTY2hlZHVsZSAyIChFeGVtcHQpXG4gICAgY29uc3QgcHJvY2Vzc2VkU2NoZWQyRGF0YSA9IHNjaGVkMkRhdGFSb3dzXG4gICAgICAgIC5maWx0ZXIocm93ID0+IHJvdy5zb21lKGNlbGwgPT4gU3RyaW5nKGNlbGwpLnRyaW0oKSAhPT0gJycpKVxuICAgICAgICAubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFJvdyA9IFsuLi5yb3ddO1xuXG4gICAgICAgICAgICBpZiAoU3RyaW5nKHByb2Nlc3NlZFJvd1swXSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRUaW4gPSBvcmlnaW5hbFRpbi5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA+IDAgJiYgc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgU2NoZWQyIFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOICcke29yaWdpbmFsVGlufScgaXMgdG9vIHNob3J0LiBJdCBtdXN0IGJlIDkgZGlnaXRzIGlmIHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYnJhbmNoQ29kZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMV0gfHwgJycpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbMV0gPSBicmFuY2hDb2RlID8gYnJhbmNoQ29kZS5zbGljZSgtNCkucGFkU3RhcnQoNCwgJzAnKSA6IFwiMDAwMFwiO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMiwgbWF4TGVuZ3RoOiA1MCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXN0IE5hbWUnLCBpbmRleDogMywgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiA0LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNaWRkbGUgTmFtZScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBuYW1lRmllbGRzSW5mby5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGBTY2hlZDIgJHtmaWVsZC5uYW1lfWAsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0YyA9IFN0cmluZyhwcm9jZXNzZWRSb3dbNl0gfHwgJycpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s2XSA9IGF0YztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbN10sIGBTY2hlZDIgSW5jb21lIFBheW1lbnRgLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1s3XSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGF0Yykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0Y0RhdGEgPSBhdGNFeGVtcHQuZmluZChpdGVtID0+IGl0ZW0uYXRjID09PSBhdGMpO1xuICAgICAgICAgICAgICAgIGlmICghYXRjRGF0YSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSAnJHthdGN9JyBpcyBub3QgdmFsaWQgZm9yIFNjaGVkdWxlIDIuYCk7XG4gICAgICAgICAgICB9IGVsc2UgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBTY2hlZDIgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBVEMgY29kZSBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgICAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzIH07XG4gICAgXG4gICAgLy8gQWxsIHZhbGlkYXRpb25zIHBhc3NlZCwgbm93IGNoZWNrIGZvciBleGlzdGluZyBmaWxlXG4gICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59JHticmFuY2hDb2RlfSR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0ke3llYXJ9MTYwMUVRLkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gXCIxNjAxRVFcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuICAgIFxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmlsZUV4aXN0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkU2NoZWQxRGF0YS5zb3J0KChhLCBiKSA9PiBTdHJpbmcoYVsyXSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYlsyXSkpKTtcbiAgICBwcm9jZXNzZWRTY2hlZDJEYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzJdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzJdKSkpO1xuXG4gICAgY29uc3QgcmVwb3J0aW5nUGVyaW9kID0gYCR7bW9udGgucGFkU3RhcnQoMiwgJzAnKX0vJHt5ZWFyfWA7XG4gICAgbGV0IGRhdENvbnRlbnRQYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgICBcbiAgICAvLyBIZWFkZXIgUm93XG4gICAgY29uc3QgdGF4cGF5ZXJOYW1lID0gcHJvZmlsZS5lbnRpdHlUeXBlID09PSAnSW5kaXZpZHVhbCdcbiAgICAgICAgPyBgJHtwcm9maWxlLmxhc3ROYW1lfSAke3Byb2ZpbGUuZmlyc3ROYW1lfSAke3Byb2ZpbGUubWlkZGxlTmFtZX1gXG4gICAgICAgIDogcHJvZmlsZS5jb21wYW55TmFtZTtcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBbJ0hRQVAnLCAnSDE2MDFFUScsIHByb2ZpbGUudHBUSU4sIHByb2ZpbGUuYnJhbmNoQ29kZSwgcXVvdGVJZk5vdEVtcHR5KHRheHBheWVyTmFtZSksIHJlcG9ydGluZ1BlcmlvZCwgcHJvZmlsZS5yZG9Db2RlXS5qb2luKCcsJyk7XG4gICAgZGF0Q29udGVudFBhcnRzLnB1c2gobWFpbkhlYWRlcik7XG5cbiAgICBsZXQgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudCA9IDA7XG4gICAgbGV0IHRvdGFsV2l0aGhvbGRpbmdUYXggPSAwO1xuICAgIGxldCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQgPSAwO1xuXG4gICAgLy8gU2NoZWR1bGUgMSBDb250ZW50XG4gICAgaWYgKHByb2Nlc3NlZFNjaGVkMURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBkZXRhaWxSb3dzMSA9IHByb2Nlc3NlZFNjaGVkMURhdGEubWFwKChyb3csIGluZGV4KSA9PiBbJ0QxJywgJzE2MDFFUScsIGluZGV4ICsgMSwgcm93WzBdLCByb3dbMV0sIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLCByZXBvcnRpbmdQZXJpb2QsIHJvd1s2XSwgcm93WzddLCByb3dbOF0sIHJvd1s5XV0uam9pbignLCcpKS5qb2luKCdcXG4nKTtcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudCA9IHByb2Nlc3NlZFNjaGVkMURhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOF0pLCAwKTtcbiAgICAgICAgdG90YWxXaXRoaG9sZGluZ1RheCA9IHByb2Nlc3NlZFNjaGVkMURhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICAgICAgY29uc3QgZm9vdGVyUm93MSA9IFsnQzEnLCAnMTYwMUVRJywgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCByZXBvcnRpbmdQZXJpb2QsIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQudG9GaXhlZCgyKSwgdG90YWxXaXRoaG9sZGluZ1RheC50b0ZpeGVkKDIpXS5qb2luKCcsJyk7XG4gICAgICAgIGRhdENvbnRlbnRQYXJ0cy5wdXNoKGRldGFpbFJvd3MxLCBmb290ZXJSb3cxKTtcbiAgICB9XG5cbiAgICAvLyBTY2hlZHVsZSAyIENvbnRlbnRcbiAgICBpZiAocHJvY2Vzc2VkU2NoZWQyRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbFJvd3MyID0gcHJvY2Vzc2VkU2NoZWQyRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IFsnRDInLCAnMTYwMUVRJywgaW5kZXggKyAxLCByb3dbMF0sIHJvd1sxXSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksIHJlcG9ydGluZ1BlcmlvZCwgcm93WzZdLCByb3dbN11dLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCA9IHByb2Nlc3NlZFNjaGVkMkRhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICAgICAgY29uc3QgZm9vdGVyUm93MiA9IFsnQzInLCAnMTYwMUVRJywgcHJvZmlsZS50cFRJTiwgcHJvZmlsZS5icmFuY2hDb2RlLCByZXBvcnRpbmdQZXJpb2QsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudC50b0ZpeGVkKDIpXS5qb2luKCcsJyk7XG4gICAgICAgIGRhdENvbnRlbnRQYXJ0cy5wdXNoKGRldGFpbFJvd3MyLCBmb290ZXJSb3cyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRDb250ZW50ID0gZGF0Q29udGVudFBhcnRzLmpvaW4oJ1xcbicpO1xuICAgIHVwbG9hZEZpbGVUb0RyaXZlKGRhdEZpbGVOYW1lLCBkYXRDb250ZW50LCBmb2xkZXJJZCwgZHJpdmVQYXRoLCBvdmVyd3JpdGUpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdEVycm9yUmVzdWx0LFxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRDb250ZW50LFxuICAgICAgICBmaWxlTmFtZTogZGF0RmlsZU5hbWUsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQsXG4gICAgICAgIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudCxcbiAgICAgICAgdG90YWxXaXRoaG9sZGluZ1RheCxcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0RXhjZWxUb0RhdChmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcmVwb3J0VHlwZSA9IGZvcm1EYXRhLmdldCgncmVwb3J0VHlwZScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gZm9ybURhdGEuZ2V0KCdzY2hlZHVsZScpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKCFmaWxlIHx8ICFyZXBvcnRUeXBlIHx8ICFtb250aCB8fCAheWVhciB8fCAhcHJvZmlsZVN0cmluZyB8fCAhZm9sZGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVycyBmb3IgY29udmVyc2lvbi4nIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZTogVGF4UHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZVN0cmluZyk7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgUHVyY2hhc2VzIChTTFApXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB2YWxpZGF0ZUV4Y2VsRm9yUHVyY2hhc2VzKGZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwb3J0VHlwZSA9PT0gXCIxNjAxLUVRIChTY2hlZHVsZSAxIGFuZCAyKVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgQWxwaGFsaXN0IG9mIFdpdGhob2xkaW5nIFRheCAoU0FXVClcIikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdTQVdUIHNjaGVkdWxlIGlzIG1pc3NpbmcuJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHZhbGlkYXRlQW5kUHJvY2Vzc1NBV1QoZm9ybURhdGEsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvdmVyd3JpdGVEYXRGaWxlKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBjb25zdCByZXBvcnRUeXBlID0gZm9ybURhdGEuZ2V0KCdyZXBvcnRUeXBlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZm9ybURhdGEuZ2V0KCdmb2xkZXJJZCcpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvY2Vzc2VkRGF0YScpIGFzIHN0cmluZyB8IG51bGw7XG4gICAgY29uc3Qgbm9uQ3JlZGl0YWJsZVRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBzY2hlZHVsZSA9IGZvcm1EYXRhLmdldCgnc2NoZWR1bGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGwsXG4gICAgfTtcblxuICAgIGlmICghcmVwb3J0VHlwZSB8fCAhbW9udGggfHwgIXllYXIgfHwgIXByb2ZpbGVTdHJpbmcgfHwgIWZvbGRlcklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMgZm9yIG92ZXJ3cml0ZS4nIH07XG4gICAgfVxuICAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXBvcnRUeXBlID09PSBcIlN1bW1hcnkgb2YgU2FsZXMgKFNMUylcIikge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlU2FsZXNEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBQdXJjaGFzZXMgKFNMUClcIikge1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWREYXRhU3RyaW5nIHx8IG5vbkNyZWRpdGFibGVUYXhTdHJpbmcgPT09IG51bGwpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdNaXNzaW5nIHByb2Nlc3NlZCBkYXRhIGZvciBvdmVyd3JpdGUuJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVUYXhTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiMTYwMS1FUSAoU2NoZWR1bGUgMSBhbmQgMilcIikge1xuICAgICAgICAgICAgIGlmICghZmlsZSkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01pc3NpbmcgZmlsZSBmb3Igb3ZlcndyaXRlLicgfTtcbiAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGUxNjAxRVFEYXRGaWxlKGZpbGUsIHByb2ZpbGUsIG1vbnRoLCB5ZWFyLCBmb2xkZXJJZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBBbHBoYWxpc3Qgb2YgV2l0aGhvbGRpbmcgVGF4IChTQVdUKVwiKSB7XG4gICAgICAgICAgICBpZiAoIWZpbGUgfHwgIXNjaGVkdWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyBmaWxlIG9yIHNjaGVkdWxlIGZvciBTQVdUIG92ZXJ3cml0ZS4nIH07XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdmFsaWRhdGVBbmRQcm9jZXNzU0FXVChmb3JtRGF0YSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIG92ZXJ3cml0ZS5gIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgb3ZlcndyaXRlLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tvdmVyd3JpdGVEYXRGaWxlXSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYE92ZXJ3cml0ZSBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZWxGb3JQdXJjaGFzZXMoZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gICAgY29uc3QgcHJvZmlsZVN0cmluZyA9IGZvcm1EYXRhLmdldCgncHJvZmlsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcbiAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLCBlcnJvcjogbnVsbCxcbiAgICAgICAgdG90YWxFeGVtcHQ6IG51bGwsIHRvdGFsWmVyb1JhdGVkOiBudWxsLCB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLCB0b3RhbE90aGVyR29vZHM6IG51bGwsIHRvdGFsSW5wdXRUYXg6IG51bGwsXG4gICAgICAgIHRvdGFsVGF4YWJsZUluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsRXhlbXB0SW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxXaXRoaG9sZGluZ1RheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3B1cmNoYXNlc1wiKTtcbiAgICBpZiAoZmlsZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogZmlsZUVycm9ycyB9O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDUwLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ01pZGRsZSBOYW1lJywgaW5kZXg6IDQsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAxJywgaW5kZXg6IDUsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDInLCBpbmRleDogNiwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc2VkRGF0YS5zb3J0KChhLCBiKSA9PiBTdHJpbmcoYVsxXSkubG9jYWxlQ29tcGFyZShTdHJpbmcoYlsxXSkpKTtcblxuICAgIGNvbnN0IHRvdGFsSW5wdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEyXSksIDApO1xuXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBzdWNjZXNzOiB0cnVlLCB0b3RhbElucHV0VGF4LCBwcm9jZXNzZWREYXRhIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShcbiAgICBwcm9jZXNzZWREYXRhOiBhbnlbXVtdLFxuICAgIHByb2ZpbGU6IFRheFByb2ZpbGUsXG4gICAgbW9udGg6IHN0cmluZyxcbiAgICB5ZWFyOiBzdHJpbmcsXG4gICAgbm9uQ3JlZGl0YWJsZUlucHV0VGF4OiBudW1iZXIsXG4gICAgZm9sZGVySWQ6IHN0cmluZyxcbiAgICBvdmVyd3JpdGU6IGJvb2xlYW4gPSBmYWxzZVxuKTogUHJvbWlzZTxEYXRGaWxlUmVzdWx0PiB7XG4gICAgIGNvbnN0IHsgdHBUSU46IHRpbiB9ID0gcHJvZmlsZTtcbiAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gXCJQdXJjaGFzZXNcIjtcbiAgICBjb25zdCBkcml2ZVBhdGggPSBbdGluLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuICAgIFxuICAgIGlmICghb3ZlcndyaXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVFeGlzdHMgPSBhd2FpdCBjaGVja0ZpbGVFeGlzdHMoZGF0RmlsZU5hbWUsIGZvbGRlcklkLCBkcml2ZVBhdGgpO1xuICAgICAgICBpZiAoZmlsZUV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZmlsZUV4aXN0czogdHJ1ZSwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGRhdENvbnRlbnQ6IG51bGwsIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVTYWxlczogbnVsbCwgdG90YWxPdXRwdXRUYXg6IG51bGwsIHRvdGFsU2VydmljZXM6IG51bGwsIHRvdGFsQ2FwaXRhbEdvb2RzOiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICBjb25zdCBhZGRyZXNzMSA9IFtwcm9maWxlLnN1YlN0cmVldCwgcHJvZmlsZS5zdHJlZXQsIHByb2ZpbGUuYmFyYW5nYXldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBbcHJvZmlsZS5jaXR5TXVuaWNpcGFsaXR5LCBwcm9maWxlLnByb3ZpbmNlLCBwcm9maWxlLnppcENvZGVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IFsnRCcsICdQJywgcXVvdGVJZk5vdEVtcHR5KHJvd1swXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbMV0pLCBxdW90ZUlmTm90RW1wdHkocm93WzJdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s2XSksIHJvd1s3XSwgcm93WzhdLCByb3dbOV0sIHJvd1sxMF0sIHJvd1sxMV0sIHJvd1sxMl0sIHRpbiwgbGFzdERheURhdGVdLmpvaW4oJywnKSkuam9pbignXFxuJyk7XG4gICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgY29uc3QgdG90YWxaZXJvUmF0ZWQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzhdKSwgMCk7XG4gICAgY29uc3QgdG90YWxTZXJ2aWNlcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbOV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbENhcGl0YWxHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgY29uc3QgdG90YWxPdGhlckdvb2RzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMV0pLCAwKTtcbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcbiAgICBjb25zdCBjcmVkaXRhYmxlSW5wdXRUYXggPSB0b3RhbElucHV0VGF4IC0gbm9uQ3JlZGl0YWJsZUlucHV0VGF4O1xuXG4gICAgY29uc3QgaGVhZGVyUm93ID0gWydIJywgJ1AnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS50cmFkZU5hbWUpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczEpLCBxdW90ZUlmTm90RW1wdHkoYWRkcmVzczIpLCB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFNlcnZpY2VzLnRvRml4ZWQoMiksIHRvdGFsQ2FwaXRhbEdvb2RzLnRvRml4ZWQoMiksIHRvdGFsT3RoZXJHb29kcy50b0ZpeGVkKDIpLCB0b3RhbElucHV0VGF4LnRvRml4ZWQoMiksIGNyZWRpdGFibGVJbnB1dFRheC50b0ZpeGVkKDIpLCBub25DcmVkaXRhYmxlSW5wdXRUYXgudG9GaXhlZCgyKSwgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdF0uam9pbignLCcpO1xuICAgIGNvbnN0IGRhdENvbnRlbnQgPSBgJHtoZWFkZXJSb3d9XFxuJHtkZXRhaWxSb3dzfWA7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgZGF0Q29udGVudCwgZmlsZU5hbWU6IGRhdEZpbGVOYW1lLFxuICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsXG4gICAgICAgIHRvdGFsU2VydmljZXMsIHRvdGFsQ2FwaXRhbEdvb2RzLCB0b3RhbE90aGVyR29vZHMsIHRvdGFsSW5wdXRUYXgsXG4gICAgICAgIGVycm9yOiBudWxsLCBlcnJvcnM6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9jZXNzZWREYXRhJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyA9IGZvcm1EYXRhLmdldCgnbm9uQ3JlZGl0YWJsZUlucHV0VGF4JykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGZvcm1EYXRhLmdldCgnZm9sZGVySWQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgY29uc3QgZGVmYXVsdEVycm9yUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgZGF0Q29udGVudDogbnVsbCwgZmlsZU5hbWU6IG51bGwsIGVycm9yczogbnVsbCwgZXJyb3I6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFRheGFibGVJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbEV4ZW1wdEluY29tZVBheW1lbnQ6IG51bGwsIHRvdGFsV2l0aGhvbGRpbmdUYXg6IG51bGwsXG4gICAgICAgIHByb2Nlc3NlZERhdGE6IG51bGxcbiAgICB9O1xuICAgIFxuICAgIGlmICghcHJvY2Vzc2VkRGF0YVN0cmluZyB8fCAhcHJvZmlsZVN0cmluZyB8fCAhbW9udGggfHwgIXllYXIgfHwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4U3RyaW5nID09PSBudWxsIHx8ICFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXJzIGZvciBwdXJjaGFzZSBmaWxlIGNyZWF0aW9uLicgfTtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IEpTT04ucGFyc2UocHJvY2Vzc2VkRGF0YVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuICAgICAgICBjb25zdCBub25DcmVkaXRhYmxlSW5wdXRUYXggPSBwYXJzZUZsb2F0KG5vbkNyZWRpdGFibGVJbnB1dFRheFN0cmluZyk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGdlbmVyYXRlUHVyY2hhc2VzRGF0RmlsZShwcm9jZXNzZWREYXRhLCBwcm9maWxlLCBtb250aCwgeWVhciwgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LCBmb2xkZXJJZCwgZmFsc2UpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCBkdXJpbmcgREFUIGZpbGUgY3JlYXRpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVB1cmNoYXNlc0RhdEZpbGVdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgQ3JlYXRpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5cbmNvbnN0IERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZmlsZXM6IHouYXJyYXkoRGF0RmlsZVNjaGVtYSkubnVsbGFibGUoKSxcbiAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbn0pO1xudHlwZSBEYXRGaWxlTGlzdGluZ1Jlc3VsdCA9IHouaW5mZXI8dHlwZW9mIERhdEZpbGVMaXN0aW5nUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdEZpbGVzKGZvbGRlcklkOiBzdHJpbmcpOiBQcm9taXNlPERhdEZpbGVMaXN0aW5nUmVzdWx0PiB7XG4gICAgaWYgKCFmb2xkZXJJZCkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiAnVXNlciBmb2xkZXIgSUQgaXMgbWlzc2luZy4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgbGlzdERhdEZpbGVzKGZvbGRlcklkKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmlsZXMsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbZ2V0RGF0RmlsZXNdIENSSVRJQ0FMIEVSUk9SOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmlsZXM6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIHJldHJpZXZlIERBVCBmaWxlczogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuY29uc3QgRGF0RmlsZUNvbnRlbnRSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgY29udGVudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgRGF0RmlsZUNvbnRlbnRSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlQ29udGVudFJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRGaWxlQ29udGVudChmaWxlSWQ6IHN0cmluZyk6IFByb21pc2U8RGF0RmlsZUNvbnRlbnRSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoIWZpbGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiAnRmlsZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGRvd25sb2FkRmlsZUZyb21Ecml2ZShmaWxlSWQpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb250ZW50OiBjb250ZW50LCBlcnJvcjogbnVsbCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgW2dldERhdEZpbGVDb250ZW50XSBDUklUSUNBTCBFUlJPUiBmb3IgZmlsZUlkICR7ZmlsZUlkfTpgLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGNvbnRlbnQ6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIHJldHJpZXZlIGZpbGUgY29udGVudDogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlQW5kUHJvY2Vzc1NBV1QoZm9ybURhdGE6IEZvcm1EYXRhLCBvdmVyd3JpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gZm9ybURhdGEuZ2V0KCdzY2hlZHVsZScpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybURhdGEuZ2V0KCdtb250aCcpIGFzIHN0cmluZztcbiAgICBjb25zdCB5ZWFyID0gZm9ybURhdGEuZ2V0KCd5ZWFyJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZm9ybURhdGEuZ2V0KCdmb2xkZXJJZCcpIGFzIHN0cmluZztcblxuICAgIGNvbnN0IGRlZmF1bHRFcnJvclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsIGVycm9yOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogbnVsbCwgdG90YWxFeGVtcHRJbmNvbWVQYXltZW50OiBudWxsLCB0b3RhbFdpdGhob2xkaW5nVGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBwcm9maWxlOiBUYXhQcm9maWxlID0gSlNPTi5wYXJzZShwcm9maWxlU3RyaW5nKTtcblxuICAgIGNvbnN0IHNoZWV0TmFtZSA9IGBzYXd0XyR7c2NoZWR1bGV9YDtcbiAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIHNoZWV0TmFtZSk7XG4gICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IGZpbGVFcnJvcnMgfTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogZmFsc2UsIGVycm9yczogW2BObyBkYXRhIGZvdW5kIGluIHNoZWV0IFwiJHtzaGVldE5hbWV9XCIuYF0gfTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvbWJpbmVkQVRDID0gWy4uLmF0Y1dFLCAuLi5hdGNXR107XG5cbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gZGF0YVJvd3NcbiAgICAgICAgLmZpbHRlcihyb3cgPT4gcm93LnNvbWUoY2VsbCA9PiBTdHJpbmcoY2VsbCkudHJpbSgpICE9PSAnJykpXG4gICAgICAgIC5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUm93TnVtYmVyID0gaW5kZXggKyAyO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChTdHJpbmcocHJvY2Vzc2VkUm93WzBdIHx8ICcnKS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRpbiA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJykuc3Vic3RyaW5nKDAsIDkpO1xuICAgICAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoID4gMCAmJiBzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSA5IGRpZ2l0cyBpZiBwcm92aWRlZC5gKTtcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSBzYW5pdGl6ZWRUaW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBwcm9jZXNzZWRSb3dbMF0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGJyYW5jaENvZGUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzFdIHx8ICcnKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzFdID0gYnJhbmNoQ29kZSA/IGJyYW5jaENvZGUuc2xpY2UoLTQpLnBhZFN0YXJ0KDQsICcwJykgOiBcIjAwMDBcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkc0luZm8gPSBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUmVnaXN0ZXJlZCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogNTAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDMsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZVN0cmluZyhwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBmaWVsZC5tYXhMZW5ndGgsIG9yaWdpbmFsUm93TnVtYmVyLCBmaWVsZC5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBhdGMgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzZdIHx8ICcnKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBwcm9jZXNzZWRSb3dbNl0gPSBhdGM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG51bWVyaWNGaWVsZHMgPSBbeyBuYW1lOiAnUmF0ZScsIGluZGV4OiA3IH0sIHsgbmFtZTogJ0luY29tZSBQYXltZW50JywgaW5kZXg6IDggfSwgeyBuYW1lOiAnV2l0aGhvbGRpbmcgVGF4JywgaW5kZXg6IDkgfV07XG4gICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVOdW1iZXIocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgb3JpZ2luYWxSb3dOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGF0Yykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0Y0RhdGEgPSBjb21iaW5lZEFUQy5maW5kKGl0ZW0gPT4gaXRlbS5hdGMgPT09IGF0Yyk7XG4gICAgICAgICAgICAgICAgaWYgKGF0Y0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKSAhPT0gYXRjRGF0YS5yYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogSW52YWxpZCByYXRlIGZvciBBVEMgJHthdGN9LiBFeHBlY3RlZCAke2F0Y0RhdGEucmF0ZX0lLCBidXQgZ290ICR7cGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbN10pfSUuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogQVRDIGNvZGUgJyR7YXRjfScgaXMgbm90IHZhbGlkIGZvciBTQVdULmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEFUQyBjb2RlIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWRSb3c7XG4gICAgICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBwcm9jZXNzZWREYXRhLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhWzJdKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiWzJdKSkpO1xuICAgIFxuICAgIGNvbnN0IGRhdEZpbGVOYW1lID0gYCR7cHJvZmlsZS50cFRJTn0ke3Byb2ZpbGUuYnJhbmNoQ29kZX0ke21vbnRoLnBhZFN0YXJ0KDIsICcwJyl9JHt5ZWFyfSR7c2NoZWR1bGV9LkRBVGA7XG4gICAgY29uc3QgcmVwb3J0VHlwZVNob3J0ID0gYFNBV1RfJHtzY2hlZHVsZX1gO1xuICAgIGNvbnN0IGRyaXZlUGF0aCA9IFtwcm9maWxlLnRwVElOLCByZXBvcnRUeXBlU2hvcnQsIHllYXJdO1xuXG4gICAgaWYgKCFvdmVyd3JpdGUpIHtcbiAgICAgICAgY29uc3QgZmlsZUV4aXN0cyA9IGF3YWl0IGNoZWNrRmlsZUV4aXN0cyhkYXRGaWxlTmFtZSwgZm9sZGVySWQsIGRyaXZlUGF0aCk7XG4gICAgICAgIGlmIChmaWxlRXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmaWxlRXhpc3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXBvcnRpbmdQZXJpb2QgPSBgJHttb250aC5wYWRTdGFydCgyLCAnMCcpfS8ke3llYXJ9YDtcblxuICAgIGNvbnN0IHRheHBheWVyTmFtZSA9IHByb2ZpbGUuZW50aXR5VHlwZSA9PT0gJ0luZGl2aWR1YWwnIFxuICAgICAgICA/IGAke3Byb2ZpbGUubGFzdE5hbWV9ICR7cHJvZmlsZS5maXJzdE5hbWV9ICR7cHJvZmlsZS5taWRkbGVOYW1lfWBcbiAgICAgICAgOiBwcm9maWxlLmNvbXBhbnlOYW1lO1xuXG4gICAgY29uc3QgaGVhZGVyID0gWydIU0FXVCcsIGBIJHtzY2hlZHVsZX1gLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHF1b3RlSWZOb3RFbXB0eSh0YXhwYXllck5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLm1pZGRsZU5hbWUpLCByZXBvcnRpbmdQZXJpb2QsIHByb2ZpbGUucmRvQ29kZV0uam9pbignLCcpO1xuXG4gICAgY29uc3QgZGV0YWlsUm93cyA9IHByb2Nlc3NlZERhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAnRFNBV1QnLCBgRCR7c2NoZWR1bGV9YCwgaW5kZXggKyAxLCByb3dbMF0sIHJvd1sxXSxcbiAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShyb3dbMl0pLCBxdW90ZUlmTm90RW1wdHkocm93WzNdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s0XSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNV0pLFxuICAgICAgICAgICAgcmVwb3J0aW5nUGVyaW9kLCAnJywgcm93WzZdLCByb3dbN10sIHJvd1s4XSwgcm93WzldXG4gICAgICAgIF0uam9pbignLCcpO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuXG4gICAgY29uc3QgdG90YWxJbmNvbWVQYXltZW50ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgIGNvbnN0IHRvdGFsV2l0aGhvbGRpbmdUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgXG4gICAgY29uc3QgZm9vdGVyID0gWydDU0FXVCcsIGBDJHtzY2hlZHVsZX1gLCBwcm9maWxlLnRwVElOLCBwcm9maWxlLmJyYW5jaENvZGUsIHJlcG9ydGluZ1BlcmlvZCwgdG90YWxJbmNvbWVQYXltZW50LnRvRml4ZWQoMiksIHRvdGFsV2l0aGhvbGRpbmdUYXgudG9GaXhlZCgyKV0uam9pbignLCcpO1xuXG4gICAgY29uc3QgZGF0Q29udGVudCA9IFtoZWFkZXIsIGRldGFpbFJvd3MsIGZvb3Rlcl0uam9pbignXFxuJyk7XG4gICAgXG4gICAgdXBsb2FkRmlsZVRvRHJpdmUoZGF0RmlsZU5hbWUsIGRhdENvbnRlbnQsIGZvbGRlcklkLCBkcml2ZVBhdGgsIG92ZXJ3cml0ZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdENvbnRlbnQ6IGRhdENvbnRlbnQsXG4gICAgICAgIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgdG90YWxUYXhhYmxlSW5jb21lUGF5bWVudDogdG90YWxJbmNvbWVQYXltZW50LFxuICAgICAgICB0b3RhbFdpdGhob2xkaW5nVGF4LFxuICAgIH07XG59XG4gICAgXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQTBHc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-tax-profiles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaxProfileProvider": (()=>TaxProfileProvider),
    "useTaxProfiles": (()=>useTaxProfiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$08718a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:08718a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const TaxProfilesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const TaxProfileProvider = ({ children })=>{
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [initialFetchComplete, setInitialFetchComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProfile, setSelectedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TaxProfileProvider.useCallback[fetchProfiles]": (isManualRefresh = false)=>{
            // Prevent fetching if already in progress
            if (isPending) return;
            // For non-manual refreshes, only fetch if it hasn't been done before.
            if (!isManualRefresh && initialFetchComplete) return;
            startTransition({
                "TaxProfileProvider.useCallback[fetchProfiles]": async ()=>{
                    const databaseId = localStorage.getItem('databaseId');
                    if (databaseId) {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$08718a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserHeaderData"])(databaseId);
                        if (result.success && result.data) {
                            setProfiles(result.data);
                            if (isManualRefresh) {
                                toast({
                                    title: 'Refresh Successful',
                                    description: 'The data has been updated.'
                                });
                            }
                        } else {
                            toast({
                                title: 'Error',
                                description: result.error || 'Failed to fetch header data.',
                                variant: 'destructive'
                            });
                        }
                    }
                    if (!initialFetchComplete) {
                        setInitialFetchComplete(true);
                    }
                }
            }["TaxProfileProvider.useCallback[fetchProfiles]"]);
        }
    }["TaxProfileProvider.useCallback[fetchProfiles]"], [
        isPending,
        initialFetchComplete,
        toast
    ]);
    const addProfile = (profile)=>{
        setProfiles((prev)=>[
                ...prev,
                profile
            ]);
    };
    const updateProfile = (profile)=>{
        setProfiles((prev)=>prev.map((p)=>p.tpTIN === profile.tpTIN ? profile : p));
    };
    const removeProfile = (tin)=>{
        setProfiles((prev)=>prev.filter((p)=>p.tpTIN !== tin));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaxProfilesContext.Provider, {
        value: {
            profiles,
            isPending,
            initialFetchComplete,
            fetchProfiles,
            addProfile,
            updateProfile,
            removeProfile,
            selectedProfile,
            setSelectedProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-tax-profiles.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s(TaxProfileProvider, "XPQXaY2A3Ik7bEQMBBQt/6H0v/4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = TaxProfileProvider;
const useTaxProfiles = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TaxProfilesContext);
    if (context === undefined) {
        throw new Error('useTaxProfiles must be used within a TaxProfileProvider');
    }
    return context;
};
_s1(useTaxProfiles, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "TaxProfileProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(app)/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AppLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-refresh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-tax-profiles.tsx [app-client] (ecmascript)");
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
function AppLayoutContent({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const { refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const { fetchProfiles, initialFetchComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTaxProfiles"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppLayoutContent.useEffect": ()=>{
            if ("object" !== 'undefined' && !initialFetchComplete) {
                const databaseId = localStorage.getItem('databaseId');
                if (databaseId) {
                    fetchProfiles();
                }
            }
        }
    }["AppLayoutContent.useEffect"], [
        fetchProfiles,
        initialFetchComplete
    ]);
    const handleRefresh = ()=>{
        if (refresh) {
            startTransition(()=>{
                refresh(true);
            });
        } else {
            toast({
                title: 'No action to refresh',
                description: 'This page does not have a refresh action.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center ml-4 mr-6 space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "DATGenie"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/layout.tsx",
                                lineNumber: 66,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/layout.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                            asChild: true,
                                            isActive: pathname.startsWith('/home'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/home",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Home"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/layout.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                            asChild: true,
                                            isActive: pathname.startsWith('/tax-profiles'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tax-profiles",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Tax Profiles"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/layout.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 81,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                            asChild: true,
                                            isActive: pathname.startsWith('/template'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/template",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Template"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/layout.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                            asChild: true,
                                            isActive: pathname.startsWith('/dat-files'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dat-files",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this),
                                                    "DAT Files"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/layout.tsx",
                                                lineNumber: 99,
                                                columnNumber: 20
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/layout.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/layout.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(app)/layout.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "sticky top-0 z-40 w-full border-b bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center h-16 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTrigger"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-end flex-1 space-x-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "flex items-center space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: handleRefresh,
                                                    disabled: isPending,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isPending && "animate-spin")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: "Refresh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(app)/layout.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "ghost",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/login",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(app)/layout.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Logout"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(app)/layout.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/layout.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/layout.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarInset"], {
                            className: "flex flex-col flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                    className: "flex-1",
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/layout.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                    className: "py-4 border-t bg-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "container flex items-center justify-center h-8 px-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "© ",
                                                new Date().getFullYear(),
                                                " DATGenie. All Rights Reserved. Designed and Developed by Christian Baccay"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(app)/layout.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/layout.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(app)/layout.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(app)/layout.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(app)/layout.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(app)/layout.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(AppLayoutContent, "NvOzvLPN86HfMd6/iJ3ADjHTnC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTaxProfiles"]
    ];
});
_c = AppLayoutContent;
function AppLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$refresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$tax$2d$profiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxProfileProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppLayoutContent, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/layout.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/layout.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(app)/layout.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_c1 = AppLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppLayoutContent");
__turbopack_context__.k.register(_c1, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_304e3283._.js.map