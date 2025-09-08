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
"[project]/src/lib/data:3138bb [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b2e571cd0cb75ab827e90db3316b90dd461882f2":"getUserHeaderData"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "getUserHeaderData": (()=>getUserHeaderData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getUserHeaderData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b2e571cd0cb75ab827e90db3316b90dd461882f2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserHeaderData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZXhjZWxFcnJvckRldGVjdGlvbiB9IGZyb20gJ0AvYWkvZmxvd3MvZXhjZWwtZXJyb3ItZGV0ZWN0aW9uJztcbmltcG9ydCB0eXBlIHsgRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dCB9IGZyb20gJ0AvYWkvc2NoZW1hcyc7XG5pbXBvcnQgeyBFeGNlbEVycm9yRGV0ZWN0aW9uT3V0cHV0U2NoZW1hIH0gZnJvbSAnQC9haS9zY2hlbWFzJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgYXBwZW5kVXNlclRvU2hlZXQsIGdldEFsbFVzZXJzLCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0LCBhcHBlbmRIZWFkZXJEYXRhVG9TaGVldCwgdXBkYXRlSGVhZGVyRGF0YUluU2hlZXQsIHR5cGUgU2lnbnVwRGF0YSwgdHlwZSBMb2dpbkRhdGEsIGRlbGV0ZUhlYWRlckRhdGFSb3dJblNoZWV0LCB1cGRhdGVVc2VyRm9sZGVySWQgfSBmcm9tICcuL2dvb2dsZXNoZWV0cyc7XG5pbXBvcnQgdHlwZSB7IFRheFByb2ZpbGUgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0IHsgVGF4UHJvZmlsZVNjaGVtYSwgTXV0YXRpb25SZXN1bHRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMnO1xuaW1wb3J0ICogYXMgeGxzeCBmcm9tICd4bHN4JztcbmltcG9ydCB7IHVwbG9hZEZpbGVUb0RyaXZlLCBjcmVhdGVGb2xkZXJJbkRyaXZlIH0gZnJvbSAnLi9kcml2ZSc7XG5cbmNvbnN0IEFuYWx5emVGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKSxcbiAgZGF0YTogRXhjZWxFcnJvckRldGVjdGlvbk91dHB1dFNjaGVtYS5udWxsYWJsZSgpLFxuICBlcnJvcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxufSk7XG5cbnR5cGUgQW5hbHl6ZUZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplRmlsZVJlc3VsdFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplRXhjZWxGaWxlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8QW5hbHl6ZUZpbGVSZXN1bHQ+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGUgfCBudWxsO1xuXG4gIGlmICghZmlsZSkge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ05vIGZpbGUgdXBsb2FkZWQuJyB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZmlsZSB0eXBlXG4gIGlmIChmaWxlLnR5cGUgIT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcgJiYgZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGFuIEV4Y2VsIGZpbGUuJyB9O1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZygnYmFzZTY0Jyl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGV4Y2VsRXJyb3JEZXRlY3Rpb24oeyBleGNlbERhdGFVcmk6IGRhdGFVcmkgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBgRmFpbGVkIHRvIGFuYWx5emUgZmlsZTogJHtlcnJvck1lc3NhZ2V9YCB9O1xuICB9XG59XG5cbmNvbnN0IEF1dGhSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAgc3VjY2Vzczogei5ib29sZWFuKCksXG4gICAgZXJyb3I6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICB1c2VyOiB6Lm9iamVjdCh7XG4gICAgICAgIHVzZXJOYW1lOiB6LnN0cmluZygpLFxuICAgICAgICBkYXRhYmFzZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICAgIGZvbGRlcklkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgfSkubnVsbGFibGUoKSxcbn0pO1xuXG50eXBlIEF1dGhSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBBdXRoUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25VcFVzZXIodXNlckRhdGE6IFNpZ251cERhdGEpOiBQcm9taXNlPEF1dGhSZXN1bHQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGF3YWl0IGNyZWF0ZUZvbGRlckluRHJpdmUoYERBVEdlbmllXyR7dXNlckRhdGEudXNlck5hbWV9YCk7XG4gICAgYXdhaXQgYXBwZW5kVXNlclRvU2hlZXQoeyAuLi51c2VyRGF0YSwgZm9sZGVySWQgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IG51bGwsIHVzZXI6IG51bGwgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgdXAgdXNlcjonLCBlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYEZhaWxlZCB0byBzaWduIHVwOiAke2Vycm9yTWVzc2FnZX1gLCB1c2VyOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihjcmVkZW50aWFsczogTG9naW5EYXRhKTogUHJvbWlzZTxBdXRoUmVzdWx0PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlck5hbWUgPT09IGNyZWRlbnRpYWxzLnVzZXJOYW1lICYmIHUucHdkID09PSBjcmVkZW50aWFscy5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJJZCA9IHVzZXIuZm9sZGVySWQ7XG4gICAgICAgICAgICBpZiAoIWZvbGRlcklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgJHt1c2VyLnVzZXJOYW1lfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVySWQuIENyZWF0aW5nIG9uZSBub3cuYCk7XG4gICAgICAgICAgICAgICAgZm9sZGVySWQgPSBhd2FpdCBjcmVhdGVGb2xkZXJJbkRyaXZlKGBEQVRHZW5pZV8ke3VzZXIudXNlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVXNlckZvbGRlcklkKHVzZXIudXNlck5hbWUsIGZvbGRlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIGFzc2lnbmVkIGZvbGRlcklkICR7Zm9sZGVySWR9IHRvIHVzZXIgJHt1c2VyLnVzZXJOYW1lfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCB1c2VyOiB7IHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLCBkYXRhYmFzZUlkOiB1c2VyLmRhdGFiYXNlSWQsIGZvbGRlcklkOiBmb2xkZXJJZCB9IH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicsIHVzZXI6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbiB1c2VyOicsIGUpO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGBGYWlsZWQgdG8gbG9naW46ICR7ZXJyb3JNZXNzYWdlfWAsIHVzZXI6IG51bGwgfTtcbiAgICB9XG59XG5cbmNvbnN0IFRheFByb2ZpbGVSZXN1bHRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICBkYXRhOiB6LmFycmF5KFRheFByb2ZpbGVTY2hlbWEpLm51bGxhYmxlKCksXG4gIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgVGF4UHJvZmlsZVJlc3VsdCA9IHouaW5mZXI8dHlwZW9mIFRheFByb2ZpbGVSZXN1bHRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckhlYWRlckRhdGEoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxUYXhQcm9maWxlUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhYmFzZUlkKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdEYXRhYmFzZSBJRCBpcyByZXF1aXJlZC4nIH07XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlckRhdGEgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhlYWRlckRhdGEsIGVycm9yOiBudWxsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaGVhZGVyIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGBGYWlsZWQgdG8gZmV0Y2ggaGVhZGVyIGRhdGE6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5cbnR5cGUgTXV0YXRpb25SZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBNdXRhdGlvblJlc3VsdFNjaGVtYT47XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvVXBwZXJjYXNlKGRhdGE6IFRheFByb2ZpbGUpOiBUYXhQcm9maWxlIHtcbiAgY29uc3QgdXBwZXJjYXNlZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXkgYXMga2V5b2YgVGF4UHJvZmlsZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSAnZW50aXR5VHlwZScgJiYga2V5ICE9PSAnY3ljbGVUeXBlJyAmJiBrZXkgIT09ICdtb250aFNlbGVjdCcgJiYga2V5ICE9PSAncmRvQ29kZScpIHtcbiAgICAgIHVwcGVyY2FzZWREYXRhW2tleV0gPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cHBlcmNhc2VkRGF0YVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cHBlcmNhc2VkRGF0YSBhcyBUYXhQcm9maWxlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUHJvZmlsZXMgPSBhd2FpdCBnZXRBbGxIZWFkZXJEYXRhRnJvbVNoZWV0KGRhdGFiYXNlSWQpO1xuICAgIGNvbnN0IHRpbkV4aXN0cyA9IGV4aXN0aW5nUHJvZmlsZXMuc29tZShwID0+IHAudHBUSU4gPT09IHZhbGlkYXRlZERhdGEudHBUSU4pO1xuXG4gICAgaWYgKHRpbkV4aXN0cykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcbiAgICAgICAgICAgIGVycm9yOiAnVGhpcyBUSU4gYWxyZWFkeSBoYXMgYSBwcm9maWxlLiBQbGVhc2UgY2hlY2sgeW91ciBkYXRhIG9yIHJlZnJlc2ggdGhlIHBhZ2UuJywgXG4gICAgICAgICAgICBkYXRhOiBudWxsIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyY2FzZWREYXRhID0gdHJhbnNmb3JtVG9VcHBlcmNhc2UodmFsaWRhdGVkRGF0YSk7XG4gICAgYXdhaXQgYXBwZW5kSGVhZGVyRGF0YVRvU2hlZXQodXBwZXJjYXNlZERhdGEsIGRhdGFiYXNlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsLCBkYXRhOiB1cHBlcmNhc2VkRGF0YSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGFkZCBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGF4UHJvZmlsZShwcm9maWxlRGF0YTogVGF4UHJvZmlsZSwgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxNdXRhdGlvblJlc3VsdD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBUYXhQcm9maWxlU2NoZW1hLnBhcnNlKHByb2ZpbGVEYXRhKTtcbiAgICBjb25zdCB1cHBlcmNhc2VkRGF0YSA9IHRyYW5zZm9ybVRvVXBwZXJjYXNlKHZhbGlkYXRlZERhdGEpO1xuICAgIGF3YWl0IHVwZGF0ZUhlYWRlckRhdGFJblNoZWV0KHVwcGVyY2FzZWREYXRhLCBkYXRhYmFzZUlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCwgZGF0YTogdXBwZXJjYXNlZERhdGEgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHRheCBwcm9maWxlOicsIGUpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gLCBkYXRhOiBudWxsIH07XG4gIH1cbn1cblxuY29uc3QgU2ltcGxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG59KTtcbnR5cGUgU2ltcGxlUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgU2ltcGxlUmVzdWx0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRheFByb2ZpbGUodHBUSU46IHN0cmluZywgZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxTaW1wbGVSZXN1bHQ+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxldGVIZWFkZXJEYXRhUm93SW5TaGVldCh0cFRJTiwgZGF0YWJhc2VJZCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXggcHJvZmlsZTonLCBlKTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9maWxlOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5jb25zdCBEYXRGaWxlUmVzdWx0U2NoZW1hID0gei5vYmplY3Qoe1xuICAgIHN1Y2Nlc3M6IHouYm9vbGVhbigpLFxuICAgIGRhdENvbnRlbnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgICBmaWxlTmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICAgIGVycm9yOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gICAgZXJyb3JzOiB6LmFycmF5KHouc3RyaW5nKCkpLm51bGxhYmxlKCksXG4gICAgLy8gU2FsZXMgVG90YWxzXG4gICAgdG90YWxFeGVtcHQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbFplcm9SYXRlZDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICAgIHRvdGFsVGF4YWJsZVNhbGVzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxPdXRwdXRUYXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICAvLyBQdXJjaGFzZSBUb3RhbHNcbiAgICB0b3RhbFNlcnZpY2VzOiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgdG90YWxDYXBpdGFsR29vZHM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbE90aGVyR29vZHM6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgICB0b3RhbElucHV0VGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gICAgcHJvY2Vzc2VkRGF0YTogei5hbnkoKS5udWxsYWJsZSgpLFxufSk7XG50eXBlIERhdEZpbGVSZXN1bHQgPSB6LmluZmVyPHR5cGVvZiBEYXRGaWxlUmVzdWx0U2NoZW1hPjtcblxuXG5mdW5jdGlvbiBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKGlucHV0OiBhbnksIGZpZWxkTmFtZTogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlciwgcm93TnVtYmVyOiBudW1iZXIsIGlzUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHsgdmFsdWU6IHN0cmluZywgZXJyb3I6IHN0cmluZyB8IG51bGwgfSB7XG4gICAgbGV0IHZhbHVlID0gKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB1bmRlZmluZWQpID8gJycgOiBTdHJpbmcoaW5wdXQpLnRyaW0oKTtcbiAgICBcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogJycsIGVycm9yOiBgUm93ICR7cm93TnVtYmVyfTogJHtmaWVsZE5hbWV9IGlzIG1pc3NpbmcuYCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiAnJywgZXJyb3I6IG51bGwgfTtcbiAgICB9XG5cbiAgICBsZXQgcHJvY2Vzc2VkU3RyaW5nID0gdmFsdWVcbiAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJ0FORCcpXG4gICAgICAgIC5yZXBsYWNlKC/DkS9nLCAnTicpXG4gICAgICAgIC5yZXBsYWNlKC9cXHNcXHMrL2csICcgJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvW15BLVowLTlcXHMtXS9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKVxuICAgICAgICAudHJpbSgpO1xuXG4gICAgaWYgKHByb2Nlc3NlZFN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHByb2Nlc3NlZFN0cmluZywgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gbXVzdCBiZSAke21heExlbmd0aH0gY2hhcmFjdGVycyBvciBsZXNzLiBJdCBpcyBjdXJyZW50bHkgJHtwcm9jZXNzZWRTdHJpbmcubGVuZ3RofSBjaGFyYWN0ZXJzLmAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB2YWx1ZTogcHJvY2Vzc2VkU3RyaW5nLCBlcnJvcjogbnVsbCB9O1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKGlucHV0OiBhbnksIGZpZWxkTmFtZTogc3RyaW5nLCByb3dOdW1iZXI6IG51bWJlcik6IHsgdmFsdWU6IHN0cmluZywgZXJyb3I6IHN0cmluZyB8IG51bGwgfSB7XG4gICAgaWYgKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB1bmRlZmluZWQgfHwgU3RyaW5nKGlucHV0KS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiAnMCcsIGVycm9yOiBudWxsIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSBTdHJpbmcoaW5wdXQpLnJlcGxhY2UoLywvZywgJycpO1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWVBc1N0cmluZyk7XG5cbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogU3RyaW5nKGlucHV0KSwgZXJyb3I6IGBSb3cgJHtyb3dOdW1iZXJ9OiAke2ZpZWxkTmFtZX0gY29udGFpbnMgYW4gaW52YWxpZCBudW1iZXIuYCB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb3VuZGVkTnVtID0gTWF0aC5yb3VuZChudW0gKiAxMDApIC8gMTAwO1xuICAgIFxuICAgIGlmIChyb3VuZGVkTnVtID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiAnMCcsIGVycm9yOiBudWxsIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdmFsdWU6IHJvdW5kZWROdW0udG9GaXhlZCgyKSwgZXJyb3I6IG51bGwgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTGFzdERheSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vIEdldCB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIGxlYXAgeWVhcnMuXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICBcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgIGNvbnN0IG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgZGQgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIHJldHVybiBgJHttbX0vJHtkZH0vJHt5eXl5fWA7XG59XG5cbmNvbnN0IHF1b3RlSWZOb3RFbXB0eSA9ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkgPT4ge1xuICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUgfHwgJycpLnRyaW0oKTtcbiAgcmV0dXJuIHN0ciA/IGBcIiR7c3RyfVwiYCA6ICcnO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0V4Y2VsRmlsZShmaWxlOiBGaWxlLCBzaGVldE5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBkYXRhOiBhbnlbXVtdLCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSB9PiB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3Qgd29ya2Jvb2sgPSB4bHN4LnJlYWQoYnl0ZXMsIHsgdHlwZTogJ2FycmF5JyB9KTtcblxuICAgIGlmICghd29ya2Jvb2suU2hlZXROYW1lcy5pbmNsdWRlcyhzaGVldE5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IFtdLCB2YWxpZGF0aW9uRXJyb3JzOiBbYFNoZWV0IFwiJHtzaGVldE5hbWV9XCIgbm90IGZvdW5kIGluIHRoZSB1cGxvYWRlZCBmaWxlLmBdIH07XG4gICAgfVxuXG4gICAgY29uc3Qgd29ya3NoZWV0ID0gd29ya2Jvb2suU2hlZXRzW3NoZWV0TmFtZV07XG4gICAgY29uc3QgZGF0YTogYW55W11bXSA9IHhsc3gudXRpbHMuc2hlZXRfdG9fanNvbih3b3Jrc2hlZXQsIHtcbiAgICAgICAgaGVhZGVyOiAxLFxuICAgICAgICBkZWZ2YWw6ICcnLFxuICAgICAgICByYXc6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogW10sIHZhbGlkYXRpb25FcnJvcnM6IFtcIlRoZSBzaGVldCBoYXMgbm8gZGF0YSB0byBwcm9jZXNzLlwiXSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IGRhdGE6IGRhdGEuc2xpY2UoMSksIHZhbGlkYXRpb25FcnJvcnM6IFtdIH07XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRFeGNlbFRvRGF0KGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8RGF0RmlsZVJlc3VsdD4ge1xuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlIHwgbnVsbDtcbiAgICBjb25zdCByZXBvcnRUeXBlID0gZm9ybURhdGEuZ2V0KCdyZXBvcnRUeXBlJykgYXMgc3RyaW5nIHwgbnVsbDtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHllYXIgPSBmb3JtRGF0YS5nZXQoJ3llYXInKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IHByb2ZpbGVTdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ3Byb2ZpbGUnKSBhcyBzdHJpbmcgfCBudWxsO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZm9ybURhdGEuZ2V0KCdmb2xkZXJJZCcpIGFzIHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdCBkZWZhdWx0RXJyb3JSZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBkYXRDb250ZW50OiBudWxsLCBmaWxlTmFtZTogbnVsbCwgZXJyb3JzOiBudWxsLFxuICAgICAgICB0b3RhbEV4ZW1wdDogbnVsbCwgdG90YWxaZXJvUmF0ZWQ6IG51bGwsIHRvdGFsVGF4YWJsZVNhbGVzOiBudWxsLCB0b3RhbE91dHB1dFRheDogbnVsbCxcbiAgICAgICAgdG90YWxTZXJ2aWNlczogbnVsbCwgdG90YWxDYXBpdGFsR29vZHM6IG51bGwsIHRvdGFsT3RoZXJHb29kczogbnVsbCwgdG90YWxJbnB1dFRheDogbnVsbCxcbiAgICAgICAgcHJvY2Vzc2VkRGF0YTogbnVsbCxcbiAgICB9O1xuXG4gICAgaWYgKCFmaWxlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZC4nIH07XG4gICAgaWYgKCFyZXBvcnRUeXBlKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnUmVwb3J0IHR5cGUgbm90IHNwZWNpZmllZC4nIH07XG4gICAgaWYgKCFtb250aCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ01vbnRoIG5vdCBzcGVjaWZpZWQuJyB9O1xuICAgIGlmICgheWVhcikgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogJ1llYXIgbm90IHNwZWNpZmllZC4nIH07XG4gICAgaWYgKCFwcm9maWxlU3RyaW5nKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiAnUHJvZmlsZSBub3QgcHJvdmlkZWQuJyB9O1xuICAgIGlmICghZm9sZGVySWQpIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6ICdVc2VyIGZvbGRlciBub3QgZm91bmQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uJyB9O1xuXG4gICAgY29uc3QgcHJvZmlsZTogVGF4UHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZVN0cmluZyk7XG4gICAgY29uc3QgeyB0cFRJTjogdGluIH0gPSBwcm9maWxlO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcG9ydFR5cGUgPT09IFwiU3VtbWFyeSBvZiBTYWxlcyAoU0xTKVwiKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGRhdGFSb3dzLCB2YWxpZGF0aW9uRXJyb3JzOiBmaWxlRXJyb3JzIH0gPSBhd2FpdCBwcm9jZXNzRXhjZWxGaWxlKGZpbGUsIFwidmF0X3NhbGVzXCIpO1xuICAgICAgICAgICAgaWYgKGZpbGVFcnJvcnMubGVuZ3RoID4gMCkgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogZmlsZUVycm9yc1swXSB9O1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gZGF0YVJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSb3dOdW1iZXIgPSBpbmRleCArIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc2VkUm93Lmxlbmd0aCA+IDAgJiYgU3RyaW5nKHByb2Nlc3NlZFJvd1swXSkudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGluID0gU3RyaW5nKHByb2Nlc3NlZFJvd1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSkgPT09IHRpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRoZSBUSU4gbWF0Y2hlcyB0aGUgc2VsZWN0ZWQgcHJvZmlsZSdzIFRJTi4gQSBjb21wYW55IGNhbm5vdCBtYWtlIGEgc2FsZSB0byBpdHNlbGYuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLmxlbmd0aCA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBUSU4gJyR7b3JpZ2luYWxUaW59JyBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgOSBkaWdpdHMuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93WzBdID0gc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiBpcyBtaXNzaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZHNJbmZvID0gW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWdpc3RlcmVkIE5hbWUnLCBpbmRleDogMSwgbWF4TGVuZ3RoOiAxNTAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xhc3QgTmFtZScsIGluZGV4OiAyLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FkZHJlc3MgMScsIGluZGV4OiA1LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnQWRkcmVzcyAyJywgaW5kZXg6IDYsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNhbml0aXplQW5kVmFsaWRhdGVTdHJpbmcocHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSwgZmllbGQubmFtZSwgZmllbGQubWF4TGVuZ3RoLCBvcmlnaW5hbFJvd051bWJlciwgZmllbGQucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNGaXJzdE5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzNdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNMYXN0TmFtZSA9IFN0cmluZyhwcm9jZXNzZWRSb3dbMl0pLnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBpZiAoKGhhc0ZpcnN0TmFtZSAmJiAhaGFzTGFzdE5hbWUpIHx8ICghaGFzRmlyc3ROYW1lICYmIGhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IEZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBtdXN0IGJlIHByb3ZpZGVkIHRvZ2V0aGVyLmApO1xuICAgICAgICAgICAgICAgIGlmIChoYXNNaWRkbGVOYW1lICYmICghaGFzRmlyc3ROYW1lIHx8ICFoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBJZiBNaWRkbGUgTmFtZSBpcyBwcm92aWRlZCwgRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIGFyZSBhbHNvIHJlcXVpcmVkLmApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnRXhlbXB0IFNhbGVzJywgaW5kZXg6IDcgfSwgeyBuYW1lOiAnWmVyby1SYXRlZCBTYWxlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ1RheGFibGUgU2FsZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdPdXRwdXQgVGF4JywgaW5kZXg6IDEwIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlTnVtYmVyKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIG9yaWdpbmFsUm93TnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdmFsaWRhdGlvbkVycm9ycy5wdXNoKHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzddKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s4XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOV0pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgc2FsZXMgYW1vdW50IChFeGVtcHQsIFplcm8tUmF0ZWQsIG9yIFRheGFibGUpIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZFJvdztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJWYWxpZGF0aW9uIGZhaWxlZC5cIiwgZXJyb3JzOiB2YWxpZGF0aW9uRXJyb3JzIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MxID0gW3Byb2ZpbGUuc3ViU3RyZWV0LCBwcm9maWxlLnN0cmVldCwgcHJvZmlsZS5iYXJhbmdheV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MyID0gW3Byb2ZpbGUuY2l0eU11bmljaXBhbGl0eSwgcHJvZmlsZS5wcm92aW5jZSwgcHJvZmlsZS56aXBDb2RlXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFJvdyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ0QnLCAnUycsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShyb3dbM10pLCBxdW90ZUlmTm90RW1wdHkocm93WzRdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1s1XSksXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShyb3dbNl0pLFxuICAgICAgICAgICAgICAgICAgICByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLFxuICAgICAgICAgICAgICAgICAgICB0aW4sIGxhc3REYXlEYXRlLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsUm93LmpvaW4oJywnKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b3RhbEV4ZW1wdCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbN10pLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgICAgICAgICAgY29uc3QgdG90YWxUYXhhYmxlU2FsZXMgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzldKSwgMCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbE91dHB1dFRheCA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IFtcbiAgICAgICAgICAgICAgICAnSCcsICdTJywgcXVvdGVJZk5vdEVtcHR5KHRpbiksXG4gICAgICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5sYXN0TmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLmZpcnN0TmFtZSksXG4gICAgICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubWlkZGxlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLnRyYWRlTmFtZSksXG4gICAgICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MxKSwgcXVvdGVJZk5vdEVtcHR5KGFkZHJlc3MyKSxcbiAgICAgICAgICAgICAgICB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFRheGFibGVTYWxlcy50b0ZpeGVkKDIpLCB0b3RhbE91dHB1dFRheC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUucmRvQ29kZSwgbGFzdERheURhdGUsIHByb2ZpbGUubW9udGhTZWxlY3RcbiAgICAgICAgICAgIF0uam9pbignLCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgICAgICAgICAgY29uc3QgZGF0RmlsZU5hbWUgPSBgJHt0aW59UyR7bW9udGh9JHt5ZWFyfS5EQVRgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIlNhbGVzXCI7XG4gICAgICAgICAgICBjb25zdCBkcml2ZVBhdGggPSBbXCJEQVRGaWxlc1wiLCB0aW4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG4gICAgICAgICAgICBhd2FpdCB1cGxvYWRGaWxlVG9Ecml2ZShkYXRGaWxlTmFtZSwgZGF0Q29udGVudCwgZm9sZGVySWQsIGRyaXZlUGF0aCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgICAgICAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IHRydWUsIGRhdENvbnRlbnQsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICB0b3RhbEV4ZW1wdCwgdG90YWxaZXJvUmF0ZWQsIHRvdGFsVGF4YWJsZVNhbGVzLCB0b3RhbE91dHB1dFRheFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIGVycm9yOiBgUmVwb3J0IHR5cGUgXCIke3JlcG9ydFR5cGV9XCIgaXMgbm90IHlldCBzdXBwb3J0ZWQuYCB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGNvbnZlcnNpb24uJztcbiAgICAgICAgY29uc29sZS5lcnJvcignW2NvbnZlcnRFeGNlbFRvRGF0XSBDUklUSUNBTCBFUlJPUjonLCBlKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdEVycm9yUmVzdWx0LCBlcnJvcjogYENvbnZlcnNpb24gZmFpbGVkOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVFeGNlbEZvclB1cmNoYXNlcyhmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZTtcbiAgICBjb25zdCBwcm9maWxlU3RyaW5nID0gZm9ybURhdGEuZ2V0KCdwcm9maWxlJykgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHByb2ZpbGU6IFRheFByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGVTdHJpbmcpO1xuICAgIGNvbnN0IHsgdHBUSU46IHRpbiB9ID0gcHJvZmlsZTtcblxuICAgIGNvbnN0IGRlZmF1bHRFcnJvclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZGF0YTogZGF0YVJvd3MsIHZhbGlkYXRpb25FcnJvcnM6IGZpbGVFcnJvcnMgfSA9IGF3YWl0IHByb2Nlc3NFeGNlbEZpbGUoZmlsZSwgXCJ2YXRfcHVyY2hhc2VzXCIpO1xuICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6IGZpbGVFcnJvcnNbMF0gfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGRhdGFSb3dzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJvd051bWJlciA9IGluZGV4ICsgMjtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkUm93ID0gWy4uLnJvd107XG5cbiAgICAgICAgaWYgKFN0cmluZyhwcm9jZXNzZWRSb3dbMF0gfHwgJycpLnRyaW0oKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxUaW4gPSBTdHJpbmcocHJvY2Vzc2VkUm93WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZFRpbiA9IG9yaWdpbmFsVGluLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkVGluLnN1YnN0cmluZygwLCA5KSA9PT0gdGluKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVGhlIFRJTiBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9maWxlJ3MgVElOLiBBIGNvbXBhbnkgY2Fubm90IGhhdmUgYSBwdXJjaGFzZSBmcm9tIGl0c2VsZi5gKTtcbiAgICAgICAgICAgIGlmIChzYW5pdGl6ZWRUaW4ubGVuZ3RoIDwgOSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IFRJTiAnJHtvcmlnaW5hbFRpbn0nIGlzIHRvbyBzaG9ydC4gSXQgbXVzdCBiZSBhdCBsZWFzdCA5IGRpZ2l0cy5gKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1swXSA9IHNhbml0aXplZFRpbi5zdWJzdHJpbmcoMCwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnB1c2goYFJvdyAke29yaWdpbmFsUm93TnVtYmVyfTogVElOIGlzIG1pc3NpbmcuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lRmllbGRzSW5mbyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ1JlZ2lzdGVyZWQgTmFtZScsIGluZGV4OiAxLCBtYXhMZW5ndGg6IDE1MCwgcmVxdWlyZWQ6IHRydWUgfSwgeyBuYW1lOiAnTGFzdCBOYW1lJywgaW5kZXg6IDIsIG1heExlbmd0aDogMzAsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRmlyc3QgTmFtZScsIGluZGV4OiAzLCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSwgeyBuYW1lOiAnTWlkZGxlIE5hbWUnLCBpbmRleDogNCwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdBZGRyZXNzIDEnLCBpbmRleDogNSwgbWF4TGVuZ3RoOiAzMCwgcmVxdWlyZWQ6IGZhbHNlIH0sIHsgbmFtZTogJ0FkZHJlc3MgMicsIGluZGV4OiA2LCBtYXhMZW5ndGg6IDMwLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgbmFtZUZpZWxkc0luZm8uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzYW5pdGl6ZUFuZFZhbGlkYXRlU3RyaW5nKHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0sIGZpZWxkLm5hbWUsIGZpZWxkLm1heExlbmd0aCwgb3JpZ2luYWxSb3dOdW1iZXIsIGZpZWxkLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHZhbGlkYXRpb25FcnJvcnMucHVzaChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgcHJvY2Vzc2VkUm93W2ZpZWxkLmluZGV4XSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFzRmlyc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1szXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc0xhc3ROYW1lID0gU3RyaW5nKHByb2Nlc3NlZFJvd1syXSkudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIGNvbnN0IGhhc01pZGRsZU5hbWUgPSBTdHJpbmcocHJvY2Vzc2VkUm93WzRdKS50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKChoYXNGaXJzdE5hbWUgJiYgIWhhc0xhc3ROYW1lKSB8fCAoIWhhc0ZpcnN0TmFtZSAmJiBoYXNMYXN0TmFtZSkpIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgbXVzdCBiZSBwcm92aWRlZCB0b2dldGhlci5gKTtcbiAgICAgICAgaWYgKGhhc01pZGRsZU5hbWUgJiYgKCFoYXNGaXJzdE5hbWUgfHwgIWhhc0xhc3ROYW1lKSkgdmFsaWRhdGlvbkVycm9ycy5wdXNoKGBSb3cgJHtvcmlnaW5hbFJvd051bWJlcn06IElmIE1pZGRsZSBOYW1lIGlzIHByb3ZpZGVkLCBGaXJzdCBOYW1lIGFuZCBMYXN0IE5hbWUgYXJlIGFsc28gcmVxdWlyZWQuYCk7XG5cbiAgICAgICAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0V4ZW1wdCBQdXJjaGFzZXMnLCBpbmRleDogNyB9LCB7IG5hbWU6ICdaZXJvLVJhdGVkIFB1cmNoYXNlcycsIGluZGV4OiA4IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgU2VydmljZXMnLCBpbmRleDogOSB9LCB7IG5hbWU6ICdQdXJjaGFzZXMgb2YgQ2FwaXRhbCBHb29kcycsIGluZGV4OiAxMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUHVyY2hhc2VzIG9mIE90aGVyIEdvb2RzJywgaW5kZXg6IDExIH0sIHsgbmFtZTogJ0lucHV0IFRheCcsIGluZGV4OiAxMiB9LFxuICAgICAgICBdO1xuICAgICAgICBudW1lcmljRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc2FuaXRpemVBbmRWYWxpZGF0ZU51bWJlcihwcm9jZXNzZWRSb3dbZmllbGQuaW5kZXhdLCBmaWVsZC5uYW1lLCBvcmlnaW5hbFJvd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB2YWxpZGF0aW9uRXJyb3JzLnB1c2gocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFJvd1tmaWVsZC5pbmRleF0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1s3XSkgPT09IDAgJiYgcGFyc2VGbG9hdChwcm9jZXNzZWRSb3dbOF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzldKSA9PT0gMCAmJiBwYXJzZUZsb2F0KHByb2Nlc3NlZFJvd1sxMF0pID09PSAwICYmIHBhcnNlRmxvYXQocHJvY2Vzc2VkUm93WzExXSkgPT09IDApIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnMucHVzaChgUm93ICR7b3JpZ2luYWxSb3dOdW1iZXJ9OiBBdCBsZWFzdCBvbmUgcHVyY2hhc2UgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvY2Vzc2VkUm93O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5kZWZhdWx0RXJyb3JSZXN1bHQsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb25FcnJvcnMgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbElucHV0VGF4ID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1sxMl0pLCAwKTtcblxuICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgc3VjY2VzczogdHJ1ZSwgdG90YWxJbnB1dFRheCwgcHJvY2Vzc2VkRGF0YSB9O1xufVxuXG5pbnRlcmZhY2UgQ3JlYXRlUHVyY2hhc2VzRGF0RmlsZUFyZ3Mge1xuICAgIHByb2Nlc3NlZERhdGE6IGFueVtdW107XG4gICAgcHJvZmlsZTogVGF4UHJvZmlsZTtcbiAgICBtb250aDogc3RyaW5nO1xuICAgIHllYXI6IHN0cmluZztcbiAgICBub25DcmVkaXRhYmxlSW5wdXRUYXg6IG51bWJlcjtcbiAgICBmb2xkZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHVyY2hhc2VzRGF0RmlsZSh7XG4gICAgcHJvY2Vzc2VkRGF0YSxcbiAgICBwcm9maWxlLFxuICAgIG1vbnRoLFxuICAgIHllYXIsXG4gICAgbm9uQ3JlZGl0YWJsZUlucHV0VGF4LFxuICAgIGZvbGRlcklkLFxufTogQ3JlYXRlUHVyY2hhc2VzRGF0RmlsZUFyZ3MpOiBQcm9taXNlPERhdEZpbGVSZXN1bHQ+IHtcblxuICAgIGNvbnN0IGRlZmF1bHRFcnJvclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIGRhdENvbnRlbnQ6IG51bGwsIGZpbGVOYW1lOiBudWxsLCBlcnJvcnM6IG51bGwsXG4gICAgICAgIHRvdGFsRXhlbXB0OiBudWxsLCB0b3RhbFplcm9SYXRlZDogbnVsbCwgdG90YWxUYXhhYmxlU2FsZXM6IG51bGwsIHRvdGFsT3V0cHV0VGF4OiBudWxsLFxuICAgICAgICB0b3RhbFNlcnZpY2VzOiBudWxsLCB0b3RhbENhcGl0YWxHb29kczogbnVsbCwgdG90YWxPdGhlckdvb2RzOiBudWxsLCB0b3RhbElucHV0VGF4OiBudWxsLFxuICAgICAgICBwcm9jZXNzZWREYXRhOiBudWxsXG4gICAgfTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHRwVElOOiB0aW4gfSA9IHByb2ZpbGU7XG4gICAgICAgIGNvbnN0IGxhc3REYXlEYXRlID0gZ2V0Rm9ybWF0dGVkTGFzdERheShwYXJzZUludCh5ZWFyKSwgcGFyc2VJbnQobW9udGgpKTtcbiAgICAgICAgY29uc3QgYWRkcmVzczEgPSBbcHJvZmlsZS5zdWJTdHJlZXQsIHByb2ZpbGUuc3RyZWV0LCBwcm9maWxlLmJhcmFuZ2F5XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuICAgICAgICBjb25zdCBhZGRyZXNzMiA9IFtwcm9maWxlLmNpdHlNdW5pY2lwYWxpdHksIHByb2ZpbGUucHJvdmluY2UsIHByb2ZpbGUuemlwQ29kZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxSb3dzID0gcHJvY2Vzc2VkRGF0YS5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUm93ID0gW1xuICAgICAgICAgICAgICAgICdEJywgJ1AnLFxuICAgICAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShyb3dbMF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzFdKSwgcXVvdGVJZk5vdEVtcHR5KHJvd1syXSksXG4gICAgICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHJvd1szXSksIHF1b3RlSWZOb3RFbXB0eShyb3dbNF0pLCBxdW90ZUlmTm90RW1wdHkocm93WzVdKSxcbiAgICAgICAgICAgICAgICBxdW90ZUlmTm90RW1wdHkocm93WzZdKSxcbiAgICAgICAgICAgICAgICByb3dbN10sIHJvd1s4XSwgcm93WzldLCByb3dbMTBdLCByb3dbMTFdLCByb3dbMTJdLFxuICAgICAgICAgICAgICAgIHRpbiwgbGFzdERheURhdGUsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUm93LmpvaW4oJywnKTtcbiAgICAgICAgfSkuam9pbignXFxuJyk7XG5cbiAgICAgICAgY29uc3QgdG90YWxFeGVtcHQgPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzddKSwgMCk7XG4gICAgICAgIGNvbnN0IHRvdGFsWmVyb1JhdGVkID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s4XSksIDApO1xuICAgICAgICBjb25zdCB0b3RhbFNlcnZpY2VzID0gcHJvY2Vzc2VkRGF0YS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvd1s5XSksIDApO1xuICAgICAgICBjb25zdCB0b3RhbENhcGl0YWxHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTBdKSwgMCk7XG4gICAgICAgIGNvbnN0IHRvdGFsT3RoZXJHb29kcyA9IHByb2Nlc3NlZERhdGEucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcGFyc2VGbG9hdChyb3dbMTFdKSwgMCk7XG4gICAgICAgIGNvbnN0IHRvdGFsSW5wdXRUYXggPSBwcm9jZXNzZWREYXRhLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93WzEyXSksIDApO1xuICAgICAgICBjb25zdCBjcmVkaXRhYmxlSW5wdXRUYXggPSB0b3RhbElucHV0VGF4IC0gbm9uQ3JlZGl0YWJsZUlucHV0VGF4O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IFtcbiAgICAgICAgICAgICdIJywgJ1AnLCBxdW90ZUlmTm90RW1wdHkodGluKSwgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUuY29tcGFueU5hbWUpLFxuICAgICAgICAgICAgcXVvdGVJZk5vdEVtcHR5KHByb2ZpbGUubGFzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5maXJzdE5hbWUpLCBxdW90ZUlmTm90RW1wdHkocHJvZmlsZS5taWRkbGVOYW1lKSxcbiAgICAgICAgICAgIHF1b3RlSWZOb3RFbXB0eShwcm9maWxlLnRyYWRlTmFtZSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMSksIHF1b3RlSWZOb3RFbXB0eShhZGRyZXNzMiksXG4gICAgICAgICAgICB0b3RhbEV4ZW1wdC50b0ZpeGVkKDIpLCB0b3RhbFplcm9SYXRlZC50b0ZpeGVkKDIpLCB0b3RhbFNlcnZpY2VzLnRvRml4ZWQoMiksIHRvdGFsQ2FwaXRhbEdvb2RzLnRvRml4ZWQoMiksIHRvdGFsT3RoZXJHb29kcy50b0ZpeGVkKDIpLCBcbiAgICAgICAgICAgIHRvdGFsSW5wdXRUYXgudG9GaXhlZCgyKSwgY3JlZGl0YWJsZUlucHV0VGF4LnRvRml4ZWQoMiksIG5vbkNyZWRpdGFibGVJbnB1dFRheC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgcHJvZmlsZS5yZG9Db2RlLCBsYXN0RGF5RGF0ZSwgcHJvZmlsZS5tb250aFNlbGVjdFxuICAgICAgICBdLmpvaW4oJywnKTtcblxuICAgICAgICBjb25zdCBkYXRDb250ZW50ID0gYCR7aGVhZGVyUm93fVxcbiR7ZGV0YWlsUm93c31gO1xuICAgICAgICBjb25zdCBkYXRGaWxlTmFtZSA9IGAke3Rpbn1QJHttb250aH0ke3llYXJ9LkRBVGA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXBvcnRUeXBlU2hvcnQgPSBcIlB1cmNoYXNlc1wiO1xuICAgICAgICBjb25zdCBkcml2ZVBhdGggPSBbXCJEQVRGaWxlc1wiLCB0aW4sIHJlcG9ydFR5cGVTaG9ydCwgeWVhcl07XG4gICAgICAgIGF3YWl0IHVwbG9hZEZpbGVUb0RyaXZlKGRhdEZpbGVOYW1lLCBkYXRDb250ZW50LCBmb2xkZXJJZCwgZHJpdmVQYXRoKTtcblxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIC4uLmRlZmF1bHRFcnJvclJlc3VsdCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsIGRhdENvbnRlbnQsIGZpbGVOYW1lOiBkYXRGaWxlTmFtZSxcbiAgICAgICAgICAgIHRvdGFsRXhlbXB0LCB0b3RhbFplcm9SYXRlZCxcbiAgICAgICAgICAgIHRvdGFsU2VydmljZXMsIHRvdGFsQ2FwaXRhbEdvb2RzLCB0b3RhbE90aGVyR29vZHMsIHRvdGFsSW5wdXRUYXhcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkIGR1cmluZyBEQVQgZmlsZSBjcmVhdGlvbi4nO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlUHVyY2hhc2VzRGF0RmlsZV0gQ1JJVElDQUwgRVJST1I6JywgZSk7XG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRFcnJvclJlc3VsdCwgZXJyb3I6IGBDcmVhdGlvbiBmYWlsZWQ6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQXlHc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3138bb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:3138bb [app-client] (ecmascript) <text/javascript>");
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
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$3138bb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserHeaderData"])(databaseId);
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
                            children: [
                                children,
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
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/layout.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(app)/layout.tsx",
                                    lineNumber: 133,
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
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(app)/layout.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(app)/layout.tsx",
        lineNumber: 154,
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

//# sourceMappingURL=src_c98c8317._.js.map