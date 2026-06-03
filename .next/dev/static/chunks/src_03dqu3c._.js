(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Loader({ onComplete, onStartTransition }) {
    _s();
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loader.useEffect": ()=>{
            const loader = loaderRef.current;
            const text = textRef.current;
            const bar = barRef.current;
            if (!loader || !text || !bar) return;
            const t1 = setTimeout({
                "Loader.useEffect.t1": ()=>{
                    text.classList.add('visible');
                }
            }["Loader.useEffect.t1"], 100);
            const t2 = setTimeout({
                "Loader.useEffect.t2": ()=>{
                    bar.classList.add('loaded');
                }
            }["Loader.useEffect.t2"], 200);
            const t3 = setTimeout({
                "Loader.useEffect.t3": ()=>{
                    loader.classList.add('hidden');
                    if (onStartTransition) onStartTransition();
                }
            }["Loader.useEffect.t3"], 1800);
            const t4 = setTimeout({
                "Loader.useEffect.t4": ()=>{
                    onComplete();
                }
            }["Loader.useEffect.t4"], 3600);
            return ({
                "Loader.useEffect": ()=>{
                    clearTimeout(t1);
                    clearTimeout(t2);
                    clearTimeout(t3);
                    clearTimeout(t4);
                }
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: loaderRef,
        className: "loader",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: textRef,
                    className: "loader-text",
                    children: "PRATHAMESH JADHAV"
                }, void 0, false, {
                    fileName: "[project]/src/components/Loader.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: barRef,
                    className: "loader-bar"
                }, void 0, false, {
                    fileName: "[project]/src/components/Loader.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Loader.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Loader.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Loader, "h9ZNsh2kup8APtVRJe6uMjB1kCQ=");
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const cursor = cursorRef.current;
            if (!cursor) return;
            let mouseX = 0;
            let mouseY = 0;
            let hovered = false;
            const updateTransform = {
                "CustomCursor.useEffect.updateTransform": ()=>{
                    const scale = hovered ? 'scale(2.5)' : 'scale(1)';
                    cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%)) ${scale}`;
                }
            }["CustomCursor.useEffect.updateTransform"];
            const onMouseMove = {
                "CustomCursor.useEffect.onMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    updateTransform();
                }
            }["CustomCursor.useEffect.onMouseMove"];
            const onMouseOver = {
                "CustomCursor.useEffect.onMouseOver": (e)=>{
                    const target = e.target;
                    if (target instanceof Element && target.closest('[data-magnetic]')) {
                        hovered = true;
                        updateTransform();
                    }
                }
            }["CustomCursor.useEffect.onMouseOver"];
            const onMouseOut = {
                "CustomCursor.useEffect.onMouseOut": (e)=>{
                    const target = e.target;
                    if (target instanceof Element && target.closest('[data-magnetic]')) {
                        hovered = false;
                        updateTransform();
                    }
                }
            }["CustomCursor.useEffect.onMouseOut"];
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseover', onMouseOver);
            document.addEventListener('mouseout', onMouseOut);
            return ({
                "CustomCursor.useEffect": ()=>{
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseover', onMouseOver);
                    document.removeEventListener('mouseout', onMouseOut);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cursorRef,
        "aria-hidden": "true",
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#f5f5f5',
            mixBlendMode: 'difference',
            zIndex: 10000,
            pointerEvents: 'none',
            transition: 'transform 0.1s, scale 0.2s',
            willChange: 'transform'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "BAOXNtFTrLv46f15Gc0vVLC8KO4=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NoiseOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoiseOverlay",
    ()=>NoiseOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function NoiseOverlay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "noise",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/NoiseOverlay.tsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
_c = NoiseOverlay;
var _c;
__turbopack_context__.k.register(_c, "NoiseOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Magnetic",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function Magnetic({ children, range = 60, strength = 0.35 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Magnetic.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const handleMouseMove = {
                "Magnetic.useEffect.handleMouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    const rect = el.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    // Distance from mouse to center of element
                    const dx = clientX - centerX;
                    const dy = clientY - centerY;
                    const distance = Math.hypot(dx, dy);
                    if (distance < range) {
                        // Pull towards cursor
                        const x = dx * strength;
                        const y = dy * strength;
                        setPosition({
                            x,
                            y
                        });
                    } else {
                        // Reset position
                        setPosition({
                            x: 0,
                            y: 0
                        });
                    }
                }
            }["Magnetic.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "Magnetic.useEffect.handleMouseLeave": ()=>{
                    setPosition({
                        x: 0,
                        y: 0
                    });
                }
            }["Magnetic.useEffect.handleMouseLeave"];
            window.addEventListener('mousemove', handleMouseMove);
            el.addEventListener('mouseleave', handleMouseLeave);
            return ({
                "Magnetic.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                }
            })["Magnetic.useEffect"];
        }
    }["Magnetic.useEffect"], [
        range,
        strength
    ]);
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
        ref,
        style: {
            ...child.props.style,
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out',
            willChange: 'transform',
            display: child.props.style?.display || 'inline-block'
        }
    });
}
_s(Magnetic, "k9sYle2GtuNncLkZJeF1OB7iVY8=");
_c = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navigation({ onLogoDoubleClick }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `sticky-nav${scrolled ? ' scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                range: 40,
                                strength: 0.35,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-logo",
                                    onDoubleClick: onLogoDoubleClick,
                                    style: {
                                        cursor: 'pointer',
                                        userSelect: 'none',
                                        display: 'inline-block'
                                    },
                                    children: "P. JADHAV"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo-tooltip",
                                children: "[DBL-CLICK FOR SHELL]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    children: "Origin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#projects",
                                    children: "Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    children: "Build"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .logo-group {
          position: relative;
          display: inline-block;
        }

        .logo-tooltip {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(0);
          background: #050505;
          border: 1px solid rgba(255, 180, 0, 0.2);
          color: var(--accent-amber, #ffb400);
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0.8;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          z-index: 1001;
        }

        .logo-group:hover .logo-tooltip {
          opacity: 1;
          border-color: rgba(255, 180, 0, 0.45);
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Navigation, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "full-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        className: "bg-video",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 5,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-text-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "year-badge",
                                children: "EST. 2022"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-headline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "I BUILD."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "I SHIP."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "I OPTIMIZE."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtext",
                                children: "AI/ML Developer. Data Scientist. GenAI Engineer."
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-explore",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SCROLL TO EXPLORE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scroll-line"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .year-badge {
          border: 1px solid rgba(255, 180, 0, 0.15) !important;
          background: rgba(255, 180, 0, 0.02) !important;
          padding: 0.35rem 0.85rem !important;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
          transform: translateY(-2px) !important;
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
          transform: translateY(3px);
        }

        .scroll-explore:hover .scroll-line {
          background: var(--accent-amber, #ffb400) !important;
          animation: lineStretch 0.8s infinite alternate ease-in-out;
        }

        @keyframes lineStretch {
          from {
            width: 30px;
          }
          to {
            width: 55px;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const timelineEvents = [
    {
        id: 1,
        year: '2022',
        title: 'COMMENCEMENT OF ENGINEERING JOURNEY',
        teaser: 'Entered Computer Science foundations, diving into algorithms and core computing logic.',
        description: 'Stepped into the world of computational thinking, logical structures, and database principles. Immersed myself in learning foundational engineering mathematics and digital electronics.',
        details: 'Acquired core logic and basic troubleshooting patterns early on.',
        technologies: [
            'C Language',
            'CS Fundamentals',
            'Boolean Logic'
        ]
    },
    {
        id: 2,
        year: '2022',
        title: 'THE FIRST LINE OF CODE',
        teaser: 'Wrote my very first "Hello World" terminal program, igniting a passion for software construction.',
        description: 'Began building basic terminal games, calculators, and automation scripts. Explored control flow structure, debugging routines, and compiling mechanics.',
        details: 'Spent hours debugging pointer offsets and system syntax anomalies.',
        technologies: [
            'Python',
            'C Language',
            'Scripting'
        ]
    },
    {
        id: 3,
        year: '2023',
        title: 'FIRST FULL-STACK WEB APPLICATION',
        teaser: 'Designed, coded, and deployed my first database-driven live server site.',
        description: 'Mastered standard relational database structures, SQL query structures, and server routing. Deployed first responsive media portal hosting, resolving client-server data flows.',
        details: 'Optimized page load configurations and local caching schemas.',
        technologies: [
            'React',
            'Node.js',
            'Express',
            'SQL Databases'
        ]
    },
    {
        id: 4,
        year: '2024',
        title: 'DATA SCIENCE INTERNSHIP',
        teaser: 'Joined Uptricks Services Pvt. Ltd. to run statistical modeling and pre-processing.',
        description: 'Processed high-dimensional tabular datasets. Evaluated predictive machine learning models to capture actionable analytics patterns.',
        details: 'Wrote robust validation suites to filter noisy logistics dataset entries.',
        technologies: [
            'Python',
            'Pandas',
            'NumPy',
            'Scikit-Learn',
            'Statistical Modeling'
        ]
    },
    {
        id: 5,
        year: '2024',
        title: 'SYSTEMS-LEVEL PIPELINES',
        teaser: 'Architected automated data ingest workflows, reducing database import overheads.',
        description: 'Designed and deployed automated pre-processing pipelines to optimize model ingest latency.',
        details: 'Gained hands-on exposure to CI/CD triggers and Linux deployment environments.',
        technologies: [
            'Python',
            'Shell Scripting',
            'ETL Pipelines',
            'Database Optimization'
        ]
    },
    {
        id: 6,
        year: '2025',
        title: 'GENAI & LLM API INTEGRATIONS',
        teaser: 'Engineered FastAPI endpoints and LangChain RAG pipelines for contextual bots.',
        description: 'Built secure webhook aggregators to review git diffs. Designed vector search integration layers serving low-latency context injections to LLM prompts.',
        details: 'Engineered prompt templates with metadata filters to prevent context leaks.',
        technologies: [
            'FastAPI',
            'LangChain',
            'OpenAI APIs',
            'Vector Embeddings'
        ]
    },
    {
        id: 7,
        year: '2026',
        title: 'ENGINEERING GRADUATION (CGPA 7.8)',
        teaser: 'Successfully completed degree. Built a Capstone Clinical Decision Support System.',
        description: 'Completed Bachelor of Engineering in Computer Science. Designed and defended CDSS capstone model merging multi-modal clinical markers for prognosis analytics.',
        details: 'Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.',
        technologies: [
            'Predictive Modeling',
            'Data Visualization',
            'Capstone Project'
        ]
    },
    {
        id: 8,
        year: '2026',
        title: 'PRODUCTION SYSTEMS DEVELOPMENT',
        teaser: 'Built custom HNSW vector database (NuroSearch) & packet inspector (DPI Engine).',
        description: 'Implemented low-latency index graphs and multi-threaded raw network packet capturing listeners. Focused on memory allocations and concurrent graph insertions.',
        details: 'Architected custom scalar quantization scripts to compress memory footprints.',
        technologies: [
            'Rust',
            'Python',
            'C Language',
            'HNSW Graph',
            'Multithreading',
            'Scapy'
        ]
    }
];
function ProjectSchematic({ id }) {
    if (id === 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "80",
                    cy: "60",
                    r: "12",
                    fill: "rgba(255,180,0,0.08)",
                    stroke: "#ffb400",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "60",
                    r: "12",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "320",
                    cy: "60",
                    r: "12",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "92",
                    y1: "60",
                    x2: "188",
                    y2: "60",
                    stroke: "rgba(245,245,245,0.08)",
                    strokeDasharray: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "212",
                    y1: "60",
                    x2: "308",
                    y2: "60",
                    stroke: "rgba(245,245,245,0.08)",
                    strokeDasharray: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "63",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "CS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "63",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "DS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "320",
                    y: "63",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "AI"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "CS FOUNDATION INDEX"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    if (id === 2) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "25",
                    y: "25",
                    width: "350",
                    height: "70",
                    rx: "4",
                    fill: "#050505",
                    stroke: "rgba(245,245,245,0.05)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "40",
                    y: "52",
                    fill: "rgba(245,245,245,0.35)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    children: '>>> print("Hello World")'
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "40",
                    y: "72",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    children: "Hello World"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "110",
                    y: "62",
                    width: "5",
                    height: "10",
                    fill: "#ffb400",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "COMPILER SHELL EXECUTION"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    if (id === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "35",
                    y: "35",
                    width: "90",
                    height: "45",
                    rx: "3",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.12)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "275",
                    y: "35",
                    width: "90",
                    height: "45",
                    rx: "3",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.12)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 125 58 L 275 58",
                    stroke: "#ffb400",
                    strokeDasharray: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "53",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "USERS_DB"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "65",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "PK: user_id"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "320",
                    y: "53",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "POSTS_DB"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "320",
                    y: "65",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "FK: author_id"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "50",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "RELATIONAL MAP"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "DATABASE SCHEMA"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    if (id === 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 40 60 L 140 60 M 260 60 L 360 60",
                    stroke: "rgba(245,245,245,0.15)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "140",
                    y: "42",
                    width: "120",
                    height: "36",
                    rx: "3",
                    fill: "none",
                    stroke: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "64",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "CLEANSE & MODEL"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "90",
                    cy: "60",
                    r: "3",
                    fill: "#f5f5f5",
                    opacity: "0.3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "310",
                    cy: "60",
                    r: "3",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "UPTRICKS DATA REFINEMENT FLOW"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    }
    if (id === 5) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.1)",
                    strokeWidth: "1",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "40",
                            y: "45",
                            width: "60",
                            height: "28",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "170",
                            y: "45",
                            width: "60",
                            height: "28",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "300",
                            y: "45",
                            width: "60",
                            height: "28",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 100 59 L 170 59 M 230 59 L 300 59",
                            stroke: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "70",
                    y: "62",
                    fill: "rgba(245,245,245,0.5)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "RAW"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "62",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "FILTER"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "330",
                    y: "62",
                    fill: "rgba(245,245,245,0.5)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "STORE"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "AUTOMATED PIPELINE LOAD (ETL)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    }
    if (id === 6) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "30",
                    y: "40",
                    width: "80",
                    height: "36",
                    rx: "3",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.12)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "160",
                    y: "40",
                    width: "80",
                    height: "36",
                    rx: "3",
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "290",
                    y: "40",
                    width: "80",
                    height: "36",
                    rx: "3",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.12)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 110 58 L 160 58 M 240 58 L 290 58",
                    stroke: "rgba(245,245,245,0.12)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "70",
                    y: "62",
                    fill: "rgba(245,245,245,0.6)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "PROMPT"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "62",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "RAG MODEL"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "330",
                    y: "62",
                    fill: "rgba(245,245,245,0.6)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "OUTPUT"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "SEMANTIC CONTEXT RETRIEVAL LAYER"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 162,
            columnNumber: 7
        }, this);
    }
    if (id === 7) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "150",
                    y: "35",
                    width: "100",
                    height: "36",
                    rx: "4",
                    fill: "rgba(255,180,0,0.02)",
                    stroke: "#ffb400",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "57",
                    fill: "#ffb400",
                    fontFamily: "var(--font-bebas-neue, sans-serif)",
                    fontSize: "14",
                    letterSpacing: "0.05em",
                    textAnchor: "middle",
                    children: "B.E. GRADUATE"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "94",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "CGPA: 7.8 // CAPSTONE DEPLOYED"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "ACADEMIC DEGREE VERIFICATION"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this);
    }
    if (id === 8) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "120",
            viewBox: "0 0 400 120",
            style: {
                background: '#111',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "110",
                    cy: "60",
                    r: "18",
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "290",
                    cy: "60",
                    r: "18",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "128",
                    y1: "60",
                    x2: "272",
                    y2: "60",
                    stroke: "#ffb400",
                    strokeDasharray: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "110",
                    y: "63",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "NUROSEARCH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "290",
                    y: "63",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "DPI_ENGINE"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "50",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "SYSTEMS ARCH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "CUSTOM ENGINE GRAPH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = ProjectSchematic;
function AboutSection() {
    _s();
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2022');
    const [activeCardId, setActiveCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [expandedCardId, setExpandedCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSectionInView, setIsSectionInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            // Section visibility tracker to prevent scroll wars when section is offscreen
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;
            const sectionObserver = new IntersectionObserver({
                "AboutSection.useEffect": ([entry])=>{
                    setIsSectionInView(entry.isIntersecting);
                }
            }["AboutSection.useEffect"], {
                root: null,
                rootMargin: '0px',
                threshold: 0.05
            });
            sectionObserver.observe(sectionEl);
            // Reveal animation observer for main headers
            const revealObserver = new IntersectionObserver({
                "AboutSection.useEffect": (entries)=>{
                    entries.forEach({
                        "AboutSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('in-view');
                            }
                        }
                    }["AboutSection.useEffect"]);
                }
            }["AboutSection.useEffect"], {
                threshold: 0.1,
                rootMargin: '-10% 0px'
            });
            const animatables = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatables?.forEach({
                "AboutSection.useEffect": (el)=>revealObserver.observe(el)
            }["AboutSection.useEffect"]);
            // Timeline scroll tracker observer
            // Targets a horizontal strip in the middle-upper part of the screen
            const timelineObserver = new IntersectionObserver({
                "AboutSection.useEffect": (entries)=>{
                    entries.forEach({
                        "AboutSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const year = entry.target.getAttribute('data-year');
                                const id = entry.target.getAttribute('data-id');
                                if (year) {
                                    setActiveYear(year);
                                }
                                if (id) {
                                    const parsedId = parseInt(id, 10);
                                    setActiveCardId(parsedId);
                                    setExpandedCardId(parsedId);
                                }
                            }
                        }
                    }["AboutSection.useEffect"]);
                }
            }["AboutSection.useEffect"], {
                root: null,
                rootMargin: '-10% 0px -20% 0px',
                threshold: 0.05
            });
            const cards = sectionRef.current?.querySelectorAll('.timeline-card');
            cards?.forEach({
                "AboutSection.useEffect": (card)=>timelineObserver.observe(card)
            }["AboutSection.useEffect"]);
            return ({
                "AboutSection.useEffect": ()=>{
                    sectionObserver.disconnect();
                    revealObserver.disconnect();
                    timelineObserver.disconnect();
                }
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            if (!isSectionInView) return;
            // Scroll stop snap-alignment handler - runs only when section is active in viewport
            let scrollTimeout;
            const handleScrollSnap = {
                "AboutSection.useEffect.handleScrollSnap": ()=>{
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout({
                        "AboutSection.useEffect.handleScrollSnap": ()=>{
                            const activeCard = sectionRef.current?.querySelector('.timeline-card.active');
                            if (activeCard) {
                                const rect = activeCard.getBoundingClientRect();
                                const targetOffset = window.innerHeight * 0.25;
                                const targetTop = window.scrollY + rect.top - targetOffset;
                                // Only scroll if we are not already close to the target alignment (within 8px)
                                if (Math.abs(rect.top - targetOffset) > 8) {
                                    window.scrollTo({
                                        top: targetTop,
                                        behavior: 'smooth'
                                    });
                                }
                            }
                        }
                    }["AboutSection.useEffect.handleScrollSnap"], 200);
                }
            }["AboutSection.useEffect.handleScrollSnap"];
            window.addEventListener('scroll', handleScrollSnap);
            return ({
                "AboutSection.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScrollSnap);
                    clearTimeout(scrollTimeout);
                }
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], [
        isSectionInView
    ]);
    const toggleExpand = (id, e)=>{
        e.stopPropagation();
        const isCollapsing = expandedCardId === id;
        setExpandedCardId(isCollapsing ? null : id);
        // Smooth scroll the clicked card to line up with the year display (25vh offset)
        if (!isCollapsing) {
            setTimeout(()=>{
                const cardEl = sectionRef.current?.querySelector(`[data-id="${id}"]`);
                if (cardEl) {
                    const rect = cardEl.getBoundingClientRect();
                    const targetOffset = window.innerHeight * 0.25;
                    const targetTop = window.scrollY + rect.top - targetOffset;
                    window.scrollTo({
                        top: targetTop,
                        behavior: 'smooth'
                    });
                }
            }, 120); // wait for layout height transition to begin
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        style: {
            padding: '8rem 2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-on-scroll",
                        style: {
                            fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                            fontSize: '0.7rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'var(--accent-amber, #ffb400)',
                            marginBottom: '3rem',
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)'
                        },
                        children: "01 / Origin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "animate-on-scroll",
                                                style: {
                                                    fontFamily: 'var(--font-bebas-neue, "Bebas Neue", cursive)',
                                                    fontSize: 'clamp(3rem, 6vw, 6rem)',
                                                    lineHeight: 0.9,
                                                    color: 'var(--text-color, #f5f5f5)',
                                                    opacity: 0,
                                                    transform: 'translateY(30px)',
                                                    transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s',
                                                    marginBottom: '2rem'
                                                },
                                                children: [
                                                    "BUILDING",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--accent-amber, #ffb400)'
                                                        },
                                                        children: "THINGS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    "THAT MATTER."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-on-scroll",
                                                style: {
                                                    opacity: 0,
                                                    transform: 'translateY(20px)',
                                                    transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'var(--font-inter, "Inter", sans-serif)',
                                                            fontWeight: 300,
                                                            fontSize: '1.1rem',
                                                            lineHeight: 1.8,
                                                            color: 'var(--text-dim, rgba(245,245,245,0.5))',
                                                            marginBottom: '1.5rem'
                                                        },
                                                        children: "I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: 'var(--font-inter, "Inter", sans-serif)',
                                                            fontWeight: 300,
                                                            fontSize: '1.1rem',
                                                            lineHeight: 1.8,
                                                            color: 'var(--text-dim, rgba(245,245,245,0.5))',
                                                            marginBottom: '2rem'
                                                        },
                                                        children: "From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '0.5rem',
                                                            flexWrap: 'wrap',
                                                            marginBottom: '3rem'
                                                        },
                                                        children: [
                                                            'Vector Search',
                                                            'RAG Pipelines',
                                                            'GenAI APIs',
                                                            'Network Systems',
                                                            'Performance Tuning'
                                                        ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                                                                    fontSize: '0.65rem',
                                                                    letterSpacing: '0.08em',
                                                                    color: 'var(--accent-amber, #ffb400)',
                                                                    background: 'rgba(255, 180, 0, 0.05)',
                                                                    border: '1px solid rgba(255, 180, 0, 0.12)',
                                                                    borderRadius: '4px',
                                                                    padding: '0.35rem 0.75rem',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: skill
                                                            }, skill, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-on-scroll",
                                        style: {
                                            fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.2em',
                                            color: 'rgba(245, 245, 245, 0.3)',
                                            textTransform: 'uppercase',
                                            marginBottom: '2.5rem',
                                            opacity: 0,
                                            transform: 'translateY(15px)',
                                            transition: 'opacity 0.6s ease, transform 0.6s ease'
                                        },
                                        children: "// Interactive Journey & Milestones (Click Overview to Expand)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-container",
                                        children: timelineEvents.map((event)=>{
                                            const isActive = activeCardId === event.id;
                                            const isExpanded = expandedCardId === event.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-year": event.year,
                                                "data-id": event.id,
                                                className: `timeline-card ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`,
                                                onClick: (e)=>toggleExpand(event.id, e),
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateRows: isExpanded ? 'auto 1fr' : 'auto 0fr',
                                                    overflow: 'hidden'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mobile-year-badge",
                                                                children: event.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `timeline-dot ${isActive ? 'active' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'baseline',
                                                                    justifyContent: 'space-between',
                                                                    gap: '1rem'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "timeline-card-title",
                                                                        children: event.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "card-index",
                                                                        style: {
                                                                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                                                            fontSize: '0.6rem',
                                                                            color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.2)',
                                                                            transition: 'color 0.4s ease'
                                                                        },
                                                                        children: [
                                                                            "0",
                                                                            event.id
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 492,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'space-between',
                                                                    gap: '2rem',
                                                                    marginTop: '0.2rem'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "timeline-card-teaser",
                                                                        style: {
                                                                            fontFamily: 'var(--font-inter, sans-serif)',
                                                                            fontWeight: 300,
                                                                            fontSize: '0.9rem',
                                                                            color: isActive ? 'rgba(245, 245, 245, 0.75)' : 'rgba(245, 245, 245, 0.35)',
                                                                            transition: 'color 0.4s ease',
                                                                            margin: 0,
                                                                            flex: 1
                                                                        },
                                                                        children: event.teaser
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>toggleExpand(event.id, e),
                                                                        className: "expand-trigger-btn",
                                                                        style: {
                                                                            background: 'none',
                                                                            color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.4)',
                                                                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                                                            fontSize: '0.6rem',
                                                                            letterSpacing: '0.1em',
                                                                            cursor: 'pointer',
                                                                            padding: '0.35rem 0.75rem',
                                                                            border: isExpanded ? '1px solid rgba(255, 180, 0, 0.25)' : '1px solid rgba(245, 245, 245, 0.1)',
                                                                            borderRadius: '4px',
                                                                            textTransform: 'uppercase',
                                                                            transition: 'all 0.3s ease',
                                                                            flexShrink: 0
                                                                        },
                                                                        children: isExpanded ? '[ - CLOSE ]' : '[ + OVERVIEW ]'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                                        lineNumber: 507,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minHeight: '0',
                                                            overflow: 'hidden',
                                                            opacity: isExpanded ? 1 : 0,
                                                            transition: 'opacity 0.4s ease'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                paddingTop: '1.2rem',
                                                                borderTop: '1px solid rgba(245,245,245,0.04)',
                                                                marginTop: '1.2rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "timeline-card-desc",
                                                                    children: event.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSchematic, {
                                                                    id: event.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 25
                                                                }, this),
                                                                event.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "timeline-card-details",
                                                                    children: event.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: '0.4rem',
                                                                        flexWrap: 'wrap',
                                                                        marginTop: '1rem'
                                                                    },
                                                                    children: event.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                                                                fontSize: '0.55rem',
                                                                                color: 'rgba(245, 245, 245, 0.5)',
                                                                                background: 'rgba(245, 245, 245, 0.03)',
                                                                                border: '1px solid rgba(245, 245, 245, 0.08)',
                                                                                padding: '0.2rem 0.5rem',
                                                                                borderRadius: '3px',
                                                                                textTransform: 'uppercase'
                                                                            },
                                                                            children: t
                                                                        }, t, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, event.id, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky-year-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky-year-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sticky-year-label",
                                            children: "YEAR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timeline-year-display",
                                            children: activeYear
                                        }, activeYear, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky-year-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// 19.0760° N, 72.8777° E"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// CORE_SYSTEM_INDEXING: ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// INDEX: HNSW_INDEX_FOUND"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 581,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* 2-column Grid configuration */
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 6rem;
          align-items: start;
          position: relative;
        }

        /* Timeline vertical line */
        .timeline-container {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(245, 245, 245, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Dot aligned with vertical line */
        .timeline-dot {
          position: absolute;
          left: -2.55rem;
          top: 2.3rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.2);
          border: 2px solid #000000;
          transform: translateX(-50%);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .timeline-dot.active {
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 14px var(--accent-amber, #ffb400);
          transform: translateX(-50%) scale(1.5);
        }

        /* Individual Card styles */
        .timeline-card {
          position: relative;
          padding: 1.8rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.025);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.35;
          transform: scale(0.985);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.expanded {
          opacity: 1;
          transform: scale(1);
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          box-shadow: 0 10px 40px -25px rgba(0, 0, 0, 0.5);
        }

        .timeline-card.active {
          opacity: 0.85;
          border-color: rgba(245, 245, 245, 0.06);
        }

        .timeline-card.active.expanded {
          opacity: 1;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(1.8rem - 2px) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          background: rgba(255, 180, 0, 0.015) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.06), inset 0 1px 0px rgba(255, 255, 255, 0.05) !important;
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.1);
          background: rgba(245, 245, 245, 0.015);
          opacity: 0.85;
        }

        .timeline-card.expanded:hover {
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          opacity: 1;
        }

        .timeline-card.active:hover {
          opacity: 1;
        }

        .timeline-card.active.expanded:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        /* Hover behavior for inner trigger button */
        .timeline-card:hover .expand-trigger-btn {
          color: rgba(245, 245, 245, 0.8);
          border-color: rgba(245, 245, 245, 0.25);
        }

        .timeline-card:hover .expand-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.7);
          margin-bottom: 0.4rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: rgba(245, 245, 245, 0.95);
        }

        .timeline-card.active.expanded .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.8);
          margin-bottom: 0.6rem;
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.5);
        }

        /* Sticky container for desktop */
        .sticky-year-container {
          position: sticky;
          top: 25vh;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .sticky-year-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sticky-year-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.4em;
          color: rgba(245, 245, 245, 0.2);
          margin-bottom: 0.5rem;
          transform: translateX(-15px);
        }

        /* Giant Year Slide-in animation */
        @keyframes yearSlideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.95;
          }
        }

        .timeline-year-display {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: clamp(10rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 900;
          background: linear-gradient(180deg, var(--accent-amber, #ffb400) 40%, rgba(255, 180, 0, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          letter-spacing: -0.04em;
          filter: drop-shadow(0 0 40px rgba(255, 180, 0, 0.15));
          animation: yearSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          user-select: none;
        }

        .sticky-year-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.25);
          margin-top: 1.5rem;
          transform: translateX(-15px);
        }

        /* Mobile layout styling fallback */
        .mobile-year-badge {
          display: none;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-year-container {
            display: none !important;
          }
          
          .mobile-year-badge {
            display: inline-block;
            font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
            font-size: 0.7rem;
            color: var(--accent-amber, #ffb400);
            border: 1px solid rgba(255, 180, 0, 0.25);
            background: rgba(255, 180, 0, 0.06);
            padding: 0.25rem 0.6rem;
            border-radius: 4px;
            margin-bottom: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          
          .timeline-card {
            opacity: 1 !important;
            transform: none !important;
            padding: 1.8rem !important;
          }

          .timeline-dot {
            top: 4.2rem !important; /* adjust for the badge space */
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "uvIYewDkRi8G3w51dEGGgTtSVP4=");
_c1 = AboutSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectSchematic");
__turbopack_context__.k.register(_c1, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const projects = [
    {
        id: '01',
        title: 'NUROSEARCH',
        year: '2026',
        tags: [
            'AI/ML',
            'Vector DB',
            'RAG'
        ],
        description: 'Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline.'
    },
    {
        id: '02',
        title: 'DPI ENGINE',
        year: '2026',
        tags: [
            'Systems',
            'Python',
            'Networking'
        ],
        description: 'Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction.'
    },
    {
        id: '03',
        title: 'KOZUMIHUB',
        year: '2026',
        tags: [
            'TypeScript',
            'Next.js',
            'Web App'
        ],
        description: 'Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI.'
    },
    {
        id: '04',
        title: 'SPENDSTRACK',
        year: '2026',
        tags: [
            'Finance',
            'TypeScript',
            'Dashboard'
        ],
        description: 'Personal wealth tracking application with dynamic visualization and category analytics.'
    },
    {
        id: '05',
        title: 'CODE CHATBOT',
        year: '2025',
        tags: [
            'AI',
            'Python',
            'LLM'
        ],
        description: 'Automated AI assistant built to review pull requests and provide constructive feedback on code structure.'
    }
];
const caseStudiesData = {
    '01': {
        role: 'Lead AI Systems Architect',
        challenges: [
            'Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.',
            'Ensuring thread safety and low latency during concurrent index builds and query phases.'
        ],
        solutions: [
            'Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).',
            'Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.',
            'Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings.'
        ],
        metrics: [
            'Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.',
            'Achieved a 35% memory footprint reduction through scalar quantization codecs.'
        ],
        technologies: [
            'Python',
            'Rust',
            'FastAPI',
            'NumPy',
            'OpenAI API',
            'HNSW Indexing'
        ],
        githubUrl: 'https://github.com/Prathamesh-Jadhav04/NuroSearch'
    },
    '02': {
        role: 'Backend & Networking Systems Engineer',
        challenges: [
            'Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.',
            'Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture.'
        ],
        solutions: [
            'Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.',
            'Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.',
            'Engineered an SNI extraction filter isolating client hello packets.'
        ],
        metrics: [
            'Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.',
            'Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices.'
        ],
        technologies: [
            'Python',
            'C Language',
            'Scapy',
            'Network Protocols',
            'Multithreading',
            'pcap'
        ],
        githubUrl: 'https://github.com/Prathamesh-Jadhav04/DPI-Engine'
    },
    '03': {
        role: 'Full-Stack Developer',
        challenges: [
            'Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).',
            'Minimizing frontend layout cumulative shifts while dynamically rendering card images.'
        ],
        solutions: [
            'Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.',
            'Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.',
            'Configured static asset prefetching rules inside Next.js middleware layers.'
        ],
        metrics: [
            'Achieved dynamic gallery page rendering times of <200ms.',
            'Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps.'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'TailwindCSS',
            'Framer Motion',
            'REST APIs',
            'Node.js'
        ],
        githubUrl: 'https://github.com/Prathamesh-Jadhav04/KozumiHub'
    },
    '04': {
        role: 'Frontend & Analytics Developer',
        challenges: [
            'Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.',
            'Ensuring secure offline database capability with smooth transaction synchronization.'
        ],
        solutions: [
            'Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.',
            'Designed transactional state engines syncing automatically to structured local storage stores.',
            'Engineered dynamic category filtering rules for instantaneous chart redraw triggers.'
        ],
        metrics: [
            'Instantly updates interactive graphs with zero animation lags.',
            'Supports complete offline capability with zero transaction sync conflicts.'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'Chart.js',
            'LocalStorage API',
            'CSS Grid',
            'TailwindCSS'
        ],
        githubUrl: 'https://github.com/Prathamesh-Jadhav04/SpendsTrack'
    },
    '05': {
        role: 'DevOps & AI Integration Engineer',
        challenges: [
            'LLM context limits require chunking diffs while retaining context of pull request logic flow.',
            'Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers.'
        ],
        solutions: [
            'Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.',
            'Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.',
            'Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines.'
        ],
        metrics: [
            'Reviews and comments on pull requests in <8 seconds from commit push.',
            'Achieved 85% satisfaction rating from developers using the automated reviews.'
        ],
        technologies: [
            'Python',
            'FastAPI',
            'LangChain',
            'LLM APIs',
            'GitHub Webhooks',
            'CI/CD Pipelines'
        ],
        githubUrl: 'https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot'
    }
};
function ProjectSchematic({ id }) {
    _s();
    // --- '01' NUROSEARCH: HNSW Traversal Simulation ---
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 200,
        y: 140
    });
    const handleMouseMove01 = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 400;
        const y = (e.clientY - rect.top) / rect.height * 180;
        setMousePos({
            x,
            y
        });
    };
    // --- '02' DPI ENGINE: Packet Ingestor ---
    const [packets, setPackets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dpiLogs, setDpiLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '// LISTENER ONLINE: READY ON ETH0',
        '// WAITING FOR WEB REQUESTS...'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectSchematic.useEffect": ()=>{
            if (packets.length === 0) return;
            const timer = setInterval({
                "ProjectSchematic.useEffect.timer": ()=>{
                    setPackets({
                        "ProjectSchematic.useEffect.timer": (prev)=>{
                            const next = prev.map({
                                "ProjectSchematic.useEffect.timer.next": (p)=>{
                                    const nextProgress = p.progress + 3;
                                    if (nextProgress >= 15 && p.progress < 15) {
                                        setDpiLogs({
                                            "ProjectSchematic.useEffect.timer.next": (logs)=>[
                                                    `[INGEST] size: 1024B -> Queuing Frame`,
                                                    logs[0]
                                                ].slice(0, 2)
                                        }["ProjectSchematic.useEffect.timer.next"]);
                                    } else if (nextProgress >= 55 && p.progress < 55) {
                                        setDpiLogs({
                                            "ProjectSchematic.useEffect.timer.next": (logs)=>[
                                                    `[QUEUE] Parsing SNI Header (Proto: TLS)`,
                                                    logs[0]
                                                ].slice(0, 2)
                                        }["ProjectSchematic.useEffect.timer.next"]);
                                    } else if (nextProgress >= 90 && p.progress < 90) {
                                        setDpiLogs({
                                            "ProjectSchematic.useEffect.timer.next": (logs)=>[
                                                    `[DPI] HOST: ${p.domain || '192.168.1.100'} | Port: 443`,
                                                    logs[0]
                                                ].slice(0, 2)
                                        }["ProjectSchematic.useEffect.timer.next"]);
                                    }
                                    return {
                                        ...p,
                                        progress: nextProgress
                                    };
                                }
                            }["ProjectSchematic.useEffect.timer.next"]);
                            return next.filter({
                                "ProjectSchematic.useEffect.timer": (p)=>p.progress < 100
                            }["ProjectSchematic.useEffect.timer"]);
                        }
                    }["ProjectSchematic.useEffect.timer"]);
                }
            }["ProjectSchematic.useEffect.timer"], 40);
            return ({
                "ProjectSchematic.useEffect": ()=>clearInterval(timer)
            })["ProjectSchematic.useEffect"];
        }
    }["ProjectSchematic.useEffect"], [
        packets.length
    ]);
    const handleInjectPacket = (e)=>{
        e.stopPropagation();
        const mockDomains = [
            'github.com',
            'google.com',
            'openai.com',
            'spotify.com'
        ];
        const mockTypes = [
            'TLS',
            'TCP',
            'UDP'
        ];
        const type = mockTypes[Math.floor(Math.random() * mockTypes.length)];
        const domain = type === 'TLS' ? mockDomains[Math.floor(Math.random() * mockDomains.length)] : '';
        setPackets((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    progress: 0,
                    type,
                    domain
                }
            ]);
    };
    // --- '03' KOZUMIHUB: Immersive Catalog Grid ---
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- '04' SPENDSTRACK: Wealth Compounder Mode ---
    const [activeMode, setActiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('BALANCE');
    // --- '05' CODE CHATBOT: PR reviewer trigger ---
    const [prTriggered, setPrTriggered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prProgress, setPrProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prLogs, setPrLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '// GIT HOOK LISTENER ACTIVE',
        '// WAITING FOR COMMIT PUSH...'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectSchematic.useEffect": ()=>{
            if (!prTriggered) return;
            const timer = setInterval({
                "ProjectSchematic.useEffect.timer": ()=>{
                    setPrProgress({
                        "ProjectSchematic.useEffect.timer": (prev)=>{
                            const next = prev + 5;
                            if (next >= 20 && prev < 20) {
                                setPrLogs({
                                    "ProjectSchematic.useEffect.timer": (logs)=>[
                                            `[GIT] Webhook captured. Extracting branch diffs...`,
                                            logs[0]
                                        ].slice(0, 2)
                                }["ProjectSchematic.useEffect.timer"]);
                            } else if (next >= 60 && prev < 60) {
                                setPrLogs({
                                    "ProjectSchematic.useEffect.timer": (logs)=>[
                                            `[LLM] AST Code Analysis in progress...`,
                                            logs[0]
                                        ].slice(0, 2)
                                }["ProjectSchematic.useEffect.timer"]);
                            } else if (next >= 100) {
                                setPrLogs({
                                    "ProjectSchematic.useEffect.timer": (logs)=>[
                                            `[BOT] Commented on PR: "Optimize mutex lock in DPI engine"`,
                                            logs[0]
                                        ].slice(0, 2)
                                }["ProjectSchematic.useEffect.timer"]);
                                clearInterval(timer);
                                return 100;
                            }
                            return next;
                        }
                    }["ProjectSchematic.useEffect.timer"]);
                }
            }["ProjectSchematic.useEffect.timer"], 80);
            return ({
                "ProjectSchematic.useEffect": ()=>clearInterval(timer)
            })["ProjectSchematic.useEffect"];
        }
    }["ProjectSchematic.useEffect"], [
        prTriggered
    ]);
    const handleTriggerWebhook = (e)=>{
        e.stopPropagation();
        setPrTriggered(true);
        setPrProgress(0);
        setPrLogs([
            '// CAPTURED: WEBHOOK PUSH EVENT ON main',
            '// INITIALIZING DOCKER WORKER...'
        ]);
    };
    if (id === '01') {
        const gNodes = [
            {
                id: 1,
                x: 60,
                y: 140,
                label: 'G1'
            },
            {
                id: 2,
                x: 150,
                y: 140,
                label: 'G2'
            },
            {
                id: 3,
                x: 250,
                y: 140,
                label: 'G3'
            },
            {
                id: 4,
                x: 340,
                y: 140,
                label: 'G4'
            }
        ];
        const hNodes = [
            {
                id: 1,
                x: 70,
                y: 90,
                label: 'H1'
            },
            {
                id: 2,
                x: 200,
                y: 90,
                label: 'H2'
            },
            {
                id: 3,
                x: 330,
                y: 90,
                label: 'H3'
            }
        ];
        const eNodes = [
            {
                id: 1,
                x: 100,
                y: 40,
                label: 'E1'
            },
            {
                id: 2,
                x: 300,
                y: 40,
                label: 'E2'
            }
        ];
        let activeGIdx = 0;
        if (mousePos) {
            let minGDist = Infinity;
            gNodes.forEach((node, idx)=>{
                const dist = Math.abs(node.x - mousePos.x);
                if (dist < minGDist) {
                    minGDist = dist;
                    activeGIdx = idx;
                }
            });
        }
        let activeHIdx = 0;
        if (mousePos) {
            if (activeGIdx === 0) {
                activeHIdx = 0;
            } else if (activeGIdx === 1) {
                activeHIdx = Math.abs(hNodes[0].x - mousePos.x) < Math.abs(hNodes[1].x - mousePos.x) ? 0 : 1;
            } else if (activeGIdx === 2) {
                activeHIdx = Math.abs(hNodes[1].x - mousePos.x) < Math.abs(hNodes[2].x - mousePos.x) ? 1 : 2;
            } else {
                activeHIdx = 2;
            }
        }
        let activeEIdx = 0;
        if (mousePos) {
            if (activeHIdx === 0) {
                activeEIdx = 0;
            } else if (activeHIdx === 1) {
                activeEIdx = Math.abs(eNodes[0].x - mousePos.x) < Math.abs(eNodes[1].x - mousePos.x) ? 0 : 1;
            } else {
                activeEIdx = 1;
            }
        }
        const activeG = gNodes[activeGIdx];
        const activeH = hNodes[activeHIdx];
        const activeE = eNodes[activeEIdx];
        const distToG = mousePos ? Math.sqrt(Math.pow(activeG.x - mousePos.x, 2) + Math.pow(activeG.y - mousePos.y, 2)) : 0;
        const sim = mousePos ? Math.max(0.45, 0.999 - distToG / 300 * 0.5) : 0.984;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            onMouseMove: handleMouseMove01,
            onMouseLeave: ()=>setMousePos({
                    x: 200,
                    y: 140
                }),
            style: {
                background: '#121212',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                cursor: 'crosshair'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.02)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "400",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "90",
                            x2: "400",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "140",
                            x2: "400",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245, 245, 245, 0.05)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "70",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "200",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "40",
                            x2: "200",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "40",
                            x2: "330",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "50",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "150",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "150",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "250",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "330",
                            y1: "90",
                            x2: "250",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "330",
                            y1: "90",
                            x2: "350",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "300",
                            y2: "40",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "200",
                            y2: "90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "330",
                            y2: "90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "140",
                            x2: "150",
                            y2: "140",
                            strokeDasharray: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "150",
                            y1: "140",
                            x2: "250",
                            y2: "140",
                            strokeDasharray: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "250",
                            y1: "140",
                            x2: "350",
                            y2: "140",
                            strokeDasharray: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                mousePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "var(--accent-amber, #ffb400)",
                    strokeWidth: "2",
                    fill: "none",
                    style: {
                        filter: 'drop-shadow(0 0 3px rgba(255,180,0,0.4))'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: activeE.x,
                            y1: activeE.y,
                            x2: activeH.x,
                            y2: activeH.y
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: activeH.x,
                            y1: activeH.y,
                            x2: activeG.x,
                            y2: activeG.y
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 348,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "100",
                    cy: "40",
                    r: "6",
                    fill: activeE.label === 'E1' ? 'var(--accent-amber, #ffb400)' : '#333',
                    stroke: "#121212",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "300",
                    cy: "40",
                    r: "6",
                    fill: activeE.label === 'E2' ? 'var(--accent-amber, #ffb400)' : '#333',
                    stroke: "#121212",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "70",
                    cy: "90",
                    r: "5",
                    fill: activeH.label === 'H1' ? 'var(--accent-amber, #ffb400)' : '#444',
                    stroke: "#121212",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "90",
                    r: "5",
                    fill: activeH.label === 'H2' ? 'var(--accent-amber, #ffb400)' : '#444',
                    stroke: "#121212",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "330",
                    cy: "90",
                    r: "5",
                    fill: activeH.label === 'H3' ? 'var(--accent-amber, #ffb400)' : '#444',
                    stroke: "#121212",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "140",
                    r: "4.5",
                    fill: activeG.id === 1 ? 'var(--accent-amber, #ffb400)' : '#555',
                    stroke: "#121212",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "150",
                    cy: "140",
                    r: "4.5",
                    fill: activeG.id === 2 ? 'var(--accent-amber, #ffb400)' : '#555',
                    stroke: "#121212",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "250",
                    cy: "140",
                    r: "4.5",
                    fill: activeG.id === 3 ? 'var(--accent-amber, #ffb400)' : '#555',
                    stroke: "#121212",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "350",
                    cy: "140",
                    r: "4.5",
                    fill: activeG.id === 4 ? 'var(--accent-amber, #ffb400)' : '#555',
                    stroke: "#121212",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                mousePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: mousePos.x,
                            y1: "0",
                            x2: mousePos.x,
                            y2: "180",
                            stroke: "rgba(255,180,0,0.15)",
                            strokeWidth: "0.5",
                            strokeDasharray: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: mousePos.y,
                            x2: "400",
                            y2: mousePos.y,
                            stroke: "rgba(255,180,0,0.15)",
                            strokeWidth: "0.5",
                            strokeDasharray: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 376,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: mousePos.x,
                            cy: mousePos.y,
                            r: "3",
                            fill: "#ffffff",
                            style: {
                                filter: 'drop-shadow(0 0 5px #fff)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "monospace",
                    fontSize: "8",
                    children: "HNSW LAYERED SEARCH TOPOLOGY [MOVE CURSOR]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "20",
                    fill: "rgba(245,245,245,0.2)",
                    fontFamily: "monospace",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "NURO_INDEX: ACTIVE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "160",
                    width: "400",
                    height: "20",
                    fill: "#0c0c0c",
                    opacity: "0.9"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "0",
                    y1: "160",
                    x2: "400",
                    y2: "160",
                    stroke: "rgba(255,255,255,0.03)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                mousePos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "172",
                    fill: "var(--accent-amber, #ffb400)",
                    fontFamily: "monospace",
                    fontSize: "6.8",
                    children: [
                        "SEARCH_VEC: [",
                        Math.round(mousePos.x),
                        ", ",
                        Math.round(mousePos.y),
                        "] // PATH: ",
                        activeE.label,
                        "➔",
                        activeH.label,
                        "➔",
                        activeG.label,
                        " // COS_SIM: ",
                        sim.toFixed(4)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 389,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "172",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "monospace",
                    fontSize: "6.8",
                    children: "HOVER GRAPH TO INITIATE COARSE-TO-FINE VECTOR TRAVERSAL"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 393,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 306,
            columnNumber: 7
        }, this);
    }
    if (id === '02') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#121212',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1.5rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255,180,0,0.15)",
                    strokeWidth: "1",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "50",
                            width: "80",
                            height: "40",
                            rx: "4",
                            fill: "#151515"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "150",
                            y: "50",
                            width: "100",
                            height: "40",
                            rx: "4",
                            fill: "#151515"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "300",
                            y: "50",
                            width: "80",
                            height: "40",
                            rx: "4",
                            fill: "#151515"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 100 70 L 150 70",
                            stroke: "#ffb400",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 250 70 L 300 70",
                            stroke: "#ffb400",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "74",
                    fill: "#f5f5f5",
                    fontFamily: "monospace",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "libpcap"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 418,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "74",
                    fill: "var(--accent-amber, #ffb400)",
                    fontFamily: "monospace",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "parser-queue"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "340",
                    y: "74",
                    fill: "#f5f5f5",
                    fontFamily: "monospace",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "TLS SNI"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                packets.map((p)=>{
                    let px = 60;
                    if (p.progress < 50) {
                        px = 60 + p.progress / 50 * 140;
                    } else {
                        px = 200 + (p.progress - 50) / 50 * 140;
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: px,
                        cy: "70",
                        r: "4.5",
                        fill: p.type === 'TLS' ? 'var(--accent-amber, #ffb400)' : '#f5f5f5',
                        style: {
                            filter: 'drop-shadow(0 0 3px var(--accent-amber, #ffb400))'
                        }
                    }, p.id, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 431,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    onClick: handleInjectPacket,
                    style: {
                        cursor: 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "140",
                            y: "105",
                            width: "120",
                            height: "22",
                            rx: "3",
                            fill: "#181818",
                            stroke: "var(--accent-amber, #ffb400)",
                            strokeWidth: "1",
                            style: {
                                transition: 'all 0.2s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "200",
                            y: "119",
                            fill: "var(--accent-amber, #ffb400)",
                            fontFamily: "monospace",
                            fontSize: "8",
                            fontWeight: "bold",
                            textAnchor: "middle",
                            children: "[ INJECT PACKET ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "137",
                    width: "360",
                    height: "34",
                    fill: "#080808",
                    stroke: "rgba(245,245,245,0.03)",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "148",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "monospace",
                    fontSize: "6.5",
                    children: dpiLogs[1]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "160",
                    fill: "var(--accent-amber, #ffb400)",
                    fontFamily: "monospace",
                    fontSize: "6.5",
                    children: dpiLogs[0]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "monospace",
                    fontSize: "8",
                    children: "DPI STREAM INGESTION FLOW"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 460,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "20",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "monospace",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "STATUS: CAPTURING"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 402,
            columnNumber: 7
        }, this);
    }
    if (id === '03') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#121212',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1.5rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "35",
                    width: "360",
                    height: "18",
                    rx: "2",
                    fill: "#181818",
                    stroke: "rgba(245,245,245,0.05)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 474,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "32",
                    y: "46",
                    fill: hoveredCard ? '#f5f5f5' : 'rgba(245,245,245,0.25)',
                    fontFamily: "monospace",
                    fontSize: "7",
                    style: {
                        transition: 'color 0.3s ease'
                    },
                    children: [
                        hoveredCard === 'left' && 'SEARCH MATCH: "SPIDERMAN: INTO THE MULTIVERSE" (2018)',
                        hoveredCard === 'middle' && 'SEARCH MATCH: "ATTACK ON TITAN: SEASON 4" (2020)',
                        hoveredCard === 'right' && 'SEARCH MATCH: "THE DARK KNIGHT" (2008)',
                        !hoveredCard && 'HOVER CARDS BELOW TO RUN DISCOVERY PIPELINE...'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    style: {
                        cursor: 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onMouseEnter: ()=>setHoveredCard('left'),
                            onMouseLeave: ()=>setHoveredCard(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "20",
                                    y: "62",
                                    width: "105",
                                    height: "85",
                                    rx: "4",
                                    fill: hoveredCard === 'left' ? 'rgba(255,180,0,0.03)' : '#151515',
                                    stroke: hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "67,98 67,112 79,105",
                                    fill: hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "72",
                                    y: "80",
                                    fill: hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "monospace",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "01 / SCI-FI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onMouseEnter: ()=>setHoveredCard('middle'),
                            onMouseLeave: ()=>setHoveredCard(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "147",
                                    y: "62",
                                    width: "105",
                                    height: "85",
                                    rx: "4",
                                    fill: hoveredCard === 'middle' ? 'rgba(255,180,0,0.03)' : '#151515',
                                    stroke: hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "194,98 194,112 206,105",
                                    fill: hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "200",
                                    y: "80",
                                    fill: hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "monospace",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "02 / ANIME"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onMouseEnter: ()=>setHoveredCard('right'),
                            onMouseLeave: ()=>setHoveredCard(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "275",
                                    y: "62",
                                    width: "105",
                                    height: "85",
                                    rx: "4",
                                    fill: hoveredCard === 'right' ? 'rgba(255,180,0,0.03)' : '#151515',
                                    stroke: hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "322,98 322,112 334,105",
                                    fill: hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "327",
                                    y: "80",
                                    fill: hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "monospace",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "03 / ACTION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "160",
                    width: "400",
                    height: "20",
                    fill: "#0c0c0c"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "0",
                    y1: "160",
                    x2: "400",
                    y2: "160",
                    stroke: "rgba(255,255,255,0.03)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 548,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "172",
                    fill: hoveredCard ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.3)',
                    fontFamily: "monospace",
                    fontSize: "6.8",
                    children: [
                        hoveredCard === 'left' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.1 // RESP: 142ms',
                        hoveredCard === 'middle' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.5 // RESP: 189ms',
                        hoveredCard === 'right' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.0 // RESP: 110ms',
                        !hoveredCard && 'DISCOVERY_ROUTING: LISTENER ONLINE // REDIS CACHE: INLINE'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "monospace",
                    fontSize: "8",
                    children: "IMMERSIVE MEDIA CATALOG GRID"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 556,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 467,
            columnNumber: 7
        }, this);
    }
    if (id === '04') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#121212',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1.5rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.02)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "40",
                            x2: "360",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 570,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "80",
                            x2: "360",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "120",
                            x2: "360",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "40",
                    y1: "20",
                    x2: "40",
                    y2: "140",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "40",
                    y1: "140",
                    x2: "370",
                    y2: "140",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 575,
                    columnNumber: 9
                }, this),
                activeMode === 'SAVE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 40 130 L 100 115 L 180 100 L 260 88 L 340 75",
                    fill: "none",
                    stroke: "var(--accent-amber, #ffb400)",
                    strokeWidth: "2.5",
                    style: {
                        transition: 'all 0.5s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 579,
                    columnNumber: 11
                }, this),
                activeMode === 'BALANCE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 40 130 Q 90 110 140 90 T 240 60 T 340 30",
                    fill: "none",
                    stroke: "var(--accent-amber, #ffb400)",
                    strokeWidth: "2.5",
                    style: {
                        transition: 'all 0.5s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 582,
                    columnNumber: 11
                }, this),
                activeMode === 'INVEST' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 40 130 Q 90 125 140 120 T 240 70 T 340 15",
                    fill: "none",
                    stroke: "var(--accent-amber, #ffb400)",
                    strokeWidth: "2.5",
                    style: {
                        transition: 'all 0.5s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 585,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: activeMode === 'SAVE' ? 75 : activeMode === 'BALANCE' ? 30 : 15,
                    r: "4.5",
                    fill: "var(--accent-amber, #ffb400)",
                    style: {
                        filter: 'drop-shadow(0 0 4px var(--accent-amber, #ffb400))',
                        transition: 'cy 0.5s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 589,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    style: {
                        cursor: 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setActiveMode('SAVE');
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "75",
                                    y: "148",
                                    width: "65",
                                    height: "18",
                                    rx: "2",
                                    fill: activeMode === 'SAVE' ? 'var(--accent-amber, #ffb400)' : '#181818',
                                    stroke: "rgba(255,180,0,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "107.5",
                                    y: "160",
                                    fill: activeMode === 'SAVE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "monospace",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "SAVINGS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setActiveMode('BALANCE');
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "155",
                                    y: "148",
                                    width: "75",
                                    height: "18",
                                    rx: "2",
                                    fill: activeMode === 'BALANCE' ? 'var(--accent-amber, #ffb400)' : '#181818',
                                    stroke: "rgba(255,180,0,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "192.5",
                                    y: "160",
                                    fill: activeMode === 'BALANCE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "monospace",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "BALANCED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                setActiveMode('INVEST');
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "245",
                                    y: "148",
                                    width: "75",
                                    height: "18",
                                    rx: "2",
                                    fill: activeMode === 'INVEST' ? 'var(--accent-amber, #ffb400)' : '#181818',
                                    stroke: "rgba(255,180,0,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "282.5",
                                    y: "160",
                                    fill: activeMode === 'INVEST' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "monospace",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "AGGRESSIVE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "monospace",
                    fontSize: "8",
                    children: "WEALTH GROWTH RATE PREVIEW"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 618,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "345",
                    y: "25",
                    fill: "#ffb400",
                    fontFamily: "monospace",
                    fontSize: "7",
                    children: "GROWTH"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 619,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "132",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "monospace",
                    fontSize: "6.5",
                    children: [
                        activeMode === 'SAVE' && 'PLAN: SAFE SAVINGS // GROWTH APY: +4.5% // STABILITY: 100%',
                        activeMode === 'BALANCE' && 'PLAN: EQUITIES & SAVINGS // GROWTH APY: +8.2% // STABILITY: 70%',
                        activeMode === 'INVEST' && 'PLAN: ALPHA STOCKS & VECTOR ASSETS // GROWTH APY: +22.4% // STABILITY: 30%'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 562,
            columnNumber: 7
        }, this);
    }
    if (id === '05') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#121212',
                border: '1px solid rgba(255,180,0,0.1)',
                borderRadius: '6px',
                margin: '1.5rem 0'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.06)",
                    strokeWidth: "1.5",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: "90",
                            x2: "370",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 120 90 C 140 90, 160 45, 180 45 L 280 45 C 300 45, 320 90, 340 90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 639,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "120",
                    cy: "90",
                    r: "4.5",
                    fill: "#555"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: "90",
                    r: "4.5",
                    fill: "#555"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "180",
                    y: "27",
                    width: "100",
                    height: "35",
                    rx: "3",
                    fill: "#181818",
                    stroke: prTriggered ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.08)',
                    strokeWidth: "1.5",
                    style: {
                        transition: 'border-color 0.3s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "230",
                    y: "47",
                    fill: prTriggered ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.3)',
                    fontFamily: "monospace",
                    fontSize: "8",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    style: {
                        transition: 'color 0.3s ease'
                    },
                    children: prTriggered ? `LLM SCAN: ${prProgress}%` : 'LLM ANALYZER'
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this),
                prTriggered && prProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: prProgress < 40 ? 30 + prProgress / 40 * 90 : prProgress < 85 ? 120 + (prProgress - 40) / 45 * 110 : 230 + (prProgress - 85) / 15 * 110,
                    cy: prProgress < 40 ? 90 : prProgress < 85 ? 90 - (prProgress - 40) / 45 * 45 : 45 + (prProgress - 85) / 15 * 45,
                    r: "4.5",
                    fill: "var(--accent-amber, #ffb400)",
                    style: {
                        filter: 'drop-shadow(0 0 4px var(--accent-amber, #ffb400))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 656,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    onClick: handleTriggerWebhook,
                    style: {
                        cursor: prTriggered && prProgress < 100 ? 'not-allowed' : 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "135",
                            y: "108",
                            width: "130",
                            height: "20",
                            rx: "3",
                            fill: "#181818",
                            stroke: "var(--accent-amber, #ffb400)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "200",
                            y: "121",
                            fill: "var(--accent-amber, #ffb400)",
                            fontFamily: "monospace",
                            fontSize: "7.5",
                            fontWeight: "bold",
                            textAnchor: "middle",
                            children: "[ PUSH WEBHOOK EVENT ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "137",
                    width: "360",
                    height: "34",
                    fill: "#080808",
                    stroke: "rgba(245,245,245,0.03)",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 687,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "148",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "monospace",
                    fontSize: "6.5",
                    children: prLogs[1]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 688,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "160",
                    fill: "var(--accent-amber, #ffb400)",
                    fontFamily: "monospace",
                    fontSize: "6.5",
                    children: prLogs[0]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 691,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "monospace",
                    fontSize: "8",
                    children: "GITHUB PR WEBHOOK PIPELINE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 695,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 632,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(ProjectSchematic, "/mMPVOlFID9lRnEwM00G1/QII7E=");
_c = ProjectSchematic;
const getProjectCode = (id)=>{
    switch(id){
        case '01':
            return 'AI-26-01';
        case '02':
            return 'SYS-26-02';
        case '03':
            return 'WEB-26-03';
        case '04':
            return 'FIN-26-04';
        case '05':
            return 'LLM-25-05';
        default:
            return `PROJ-${id}`;
    }
};
const getProjectBgImage = (id)=>{
    switch(id){
        case '01':
            return '/nurosearch_bg.png';
        case '02':
            return '/dpi_bg.png';
        case '03':
            return '/kozumi_bg.png';
        case '04':
            return '/spendstrack_bg.png';
        case '05':
            return '/code_chatbot_bg.png';
        default:
            return '';
    }
};
function ProjectsSection() {
    _s1();
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeProjectId, setActiveProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('01');
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            // Header reveal observer
            const headerEl = headerRef.current;
            if (headerEl) {
                const headerObserver = new IntersectionObserver({
                    "ProjectsSection.useEffect": ([entry])=>{
                        if (entry.isIntersecting) {
                            setHeaderVisible(true);
                            headerObserver.disconnect();
                        }
                    }
                }["ProjectsSection.useEffect"], {
                    threshold: 0.1
                });
                headerObserver.observe(headerEl);
                return ({
                    "ProjectsSection.useEffect": ()=>{
                        headerObserver.disconnect();
                    }
                })["ProjectsSection.useEffect"];
            }
        }
    }["ProjectsSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            const handleScroll = {
                "ProjectsSection.useEffect.handleScroll": ()=>{
                    const track = sectionRef.current;
                    if (!track) return;
                    const rect = track.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    const totalScrollableHeight = rect.height - viewHeight;
                    if (totalScrollableHeight <= 0) return;
                    let progress = -rect.top / totalScrollableHeight;
                    progress = Math.max(0, Math.min(1, progress));
                    setScrollProgress(progress);
                    // Set active project index
                    const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length * 0.999));
                    setActiveProjectId(projects[idx].id);
                }
            }["ProjectsSection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', handleScroll);
            handleScroll();
            return ({
                "ProjectsSection.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleScroll);
                }
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], []);
    const activeIndex = Math.min(projects.length - 1, Math.floor(scrollProgress * projects.length * 0.999));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        className: "projects-scroll-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "projects-sticky-viewport",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "projects-hud-header",
                        style: {
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "projects-hud-label",
                                children: "// 02 / WORK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "projects-hud-title",
                                children: "SELECTED WORK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 811,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 801,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-horizontal-rail",
                        style: {
                            transform: `translateX(-${scrollProgress * (projects.length - 1) * 100}vw)`
                        },
                        children: projects.map((project)=>{
                            const details = caseStudiesData[project.id];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-slide-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-bg",
                                        style: {
                                            backgroundImage: `url(${getProjectBgImage(project.id)})`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 823,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-bg-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 827,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "project-panel-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "project-panel-header",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "project-panel-code",
                                                                children: getProjectCode(project.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 833,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "project-panel-title",
                                                                children: project.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "project-panel-teaser",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "project-panel-schematic-box",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "schematic-label",
                                                                children: "// CORE DIAGRAM & SIMULATION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSchematic, {
                                                                id: project.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 841,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 831,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "project-panel-right",
                                                children: details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "project-panel-details",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "detail-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "detail-meta-label",
                                                                    children: "// ROLE:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "detail-meta-val",
                                                                    children: details.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "details-scrollable-area",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "detail-section",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "detail-sec-title",
                                                                            children: "KEY CHALLENGES"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 857,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list",
                                                                            children: details.challenges.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: c
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 858,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 856,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "detail-section",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "detail-sec-title",
                                                                            children: "SOLUTIONS"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 864,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list",
                                                                            children: details.solutions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: s
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 866,
                                                                                    columnNumber: 64
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 865,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 863,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "detail-section",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "detail-sec-title",
                                                                            children: "OUTCOMES & METRICS"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 871,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list amber-text",
                                                                            children: details.metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: m
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 873,
                                                                                    columnNumber: 62
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 872,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 870,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "detail-section specs-section",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "detail-sec-title",
                                                                    children: "SYSTEM SPECIFICATION"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "detail-badge-group",
                                                                    children: details.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "detail-badge",
                                                                            children: t
                                                                        }, t, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 882,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 880,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 878,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "detail-github-wrapper",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                                range: 50,
                                                                strength: 0.3,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: details.githubUrl,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "detail-github-btn",
                                                                    children: "EXPLORE CODEBASE   →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 846,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 828,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 822,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 815,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-progress-hud",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-track-line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-fill-line",
                                    style: {
                                        width: `${scrollProgress * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 913,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 912,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-ticks-container",
                                children: projects.map((p, idx)=>{
                                    const isPassed = idx <= activeIndex;
                                    const isCurrent = idx === activeIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `hud-tick-item ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`,
                                        style: {
                                            left: `${idx / (projects.length - 1) * 100}%`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tick-number",
                                                children: p.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tick-title",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 929,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 923,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 918,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 911,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 798,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .projects-scroll-section {
          position: relative;
          height: 500vh; /* 5 projects * 100vh runway */
          background-color: #0a0a0a;
          box-sizing: border-box;
        }

        .projects-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          justify-content: center;
        }

        .projects-hud-header {
          position: absolute;
          top: 5rem;
          left: 5rem;
          z-index: 10;
          pointer-events: none;
        }

        .projects-hud-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #ffb400;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .projects-hud-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 0.9;
          color: #f5f5f5;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .projects-horizontal-rail {
          display: flex;
          flex-direction: row;
          width: 500vw; /* 5 projects */
          height: 100%;
          will-change: transform;
          box-sizing: border-box;
        }

        .project-slide-panel {
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          box-sizing: border-box;
          padding: 12rem 5rem 6rem 5rem; /* Padding to clear headers & HUD */
          display: flex;
          align-items: center;
          background-color: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .project-panel-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.12;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 1;
        }

        .project-panel-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(10, 10, 10, 0.4) 30%, rgba(10, 10, 10, 0.95) 90%);
          pointer-events: none;
          z-index: 2;
        }

        .project-panel-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 5rem;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          align-items: center;
          position: relative;
          z-index: 3;
        }

        .project-panel-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        .project-panel-header {
          display: flex;
          align-items: baseline;
          gap: 2rem;
        }

        .project-panel-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffb400;
          letter-spacing: 0.1em;
        }

        .project-panel-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          line-height: 0.9;
          font-weight: 900;
          background: linear-gradient(180deg, #f5f5f5 40%, rgba(245,245,245,0.4) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.02em;
        }

        .project-panel-teaser {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.6);
          margin: 0;
          max-width: 95%;
        }

        .project-panel-schematic-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .schematic-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.2);
          text-transform: uppercase;
        }

        .project-panel-right {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .project-panel-details {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 1.5rem;
          height: 100%;
          justify-content: center;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .detail-meta-label {
          color: rgba(245, 245, 245, 0.25);
        }

        .detail-meta-val {
          color: #ffb400;
        }

        .details-scrollable-area {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 38vh; /* Scrollable if screen height is short */
          overflow-y: auto;
          padding-right: 1rem;
        }

        .details-scrollable-area::-webkit-scrollbar {
          width: 3px;
        }
        .details-scrollable-area::-webkit-scrollbar-track {
          background: rgba(245, 245, 245, 0.01);
        }
        .details-scrollable-area::-webkit-scrollbar-thumb {
          background: rgba(245, 245, 245, 0.1);
          border-radius: 1.5px;
        }

        .detail-section {
          display: flex;
          flex-direction: column;
        }

        .detail-sec-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }

        .detail-sec-list {
          padding-left: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .detail-sec-list li {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.4;
          color: rgba(245, 245, 245, 0.65);
        }

        .detail-sec-list.amber-text li {
          color: #ffb400 !important;
          font-weight: 400;
        }

        .specs-section {
          margin-top: 0.5rem;
        }

        .detail-badge-group {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: 0.35rem;
        }

        .detail-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          color: rgba(245, 245, 245, 0.5);
          background: rgba(245, 245, 245, 0.03);
          border: 1px solid rgba(245, 245, 245, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .detail-github-wrapper {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .detail-github-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: #ffb400;
          border: 1px solid rgba(255, 180, 0, 0.3);
          background: transparent;
          border-radius: 4px;
          padding: 0.7rem 1.6rem;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .detail-github-btn:hover {
          background: #ffb400 !important;
          color: #0a0a0a !important;
        }

        /* Progress HUD styling */
        .projects-progress-hud {
          position: absolute;
          bottom: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 1100px;
          height: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
        }

        .hud-track-line {
          width: 100%;
          height: 1px;
          background: rgba(245, 245, 245, 0.08);
          position: relative;
        }

        .hud-fill-line {
          height: 100%;
          background: #ffb400;
          box-shadow: 0 0 8px rgba(255, 180, 0, 0.5);
          position: absolute;
          left: 0;
          top: 0;
          transition: width 0.1s ease-out;
        }

        .hud-ticks-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hud-tick-item {
          position: absolute;
          top: -3px; /* Center circle on line */
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.4s ease;
        }

        .hud-tick-item::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.25);
          border: 1px solid #000000;
          margin-bottom: 0.5rem;
          transition: all 0.4s ease;
        }

        .hud-tick-item.passed::before {
          background: #ffb400;
          box-shadow: 0 0 8px #ffb400;
        }

        .hud-tick-item.current::before {
          transform: scale(1.4);
          background: #ffb400;
          box-shadow: 0 0 12px #ffb400;
        }

        .tick-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.2);
          transition: color 0.4s ease;
        }

        .hud-tick-item.passed .tick-number {
          color: rgba(245, 245, 245, 0.6);
        }

        .hud-tick-item.current .tick-number {
          color: #ffb400;
          font-weight: 700;
        }

        .tick-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.15);
          position: absolute;
          top: -1.5rem;
          white-space: nowrap;
          transition: color 0.4s ease;
        }

        .hud-tick-item.passed .tick-title {
          color: rgba(245, 245, 245, 0.55);
        }

        .hud-tick-item.current .tick-title {
          color: #ffb400;
          font-size: 1.05rem;
        }

        @media (max-width: 992px) {
          .projects-scroll-section {
            height: auto !important; /* Standard vertical height */
          }

          .projects-sticky-viewport {
            position: relative !important;
            height: auto !important;
            width: 100% !important;
            overflow: visible !important;
            padding: 4rem 1.5rem !important;
            justify-content: flex-start !important;
          }

          .projects-hud-header {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            margin-bottom: 3rem !important;
            pointer-events: auto !important;
          }

          .projects-hud-title {
            font-size: 3.5rem !important;
          }

          .projects-horizontal-rail {
            flex-direction: column !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
            gap: 5rem !important;
          }

          .project-slide-panel {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
          }

          .project-panel-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            height: auto !important;
            padding: 0 !important;
          }

          .project-panel-teaser {
            max-width: 100% !important;
          }

          .details-scrollable-area {
            max-height: none !important; /* Allow natural page scroll */
            overflow-y: visible !important;
            padding-right: 0 !important;
          }

          .projects-progress-hud {
            display: none !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 938,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 792,
        columnNumber: 5
    }, this);
}
_s1(ProjectsSection, "aWqUVqhtyLGXcT9Q6m6pbBlGR/c=");
_c1 = ProjectsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectSchematic");
__turbopack_context__.k.register(_c1, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DeveloperConsole.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperConsole",
    ()=>DeveloperConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function DeveloperConsole({ isOpen, onClose }) {
    _s();
    const [inputVal, setInputVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            type: 'welcome',
            text: '=================================================='
        },
        {
            type: 'welcome',
            text: 'PRATHAMESH JADHAV // AI & SYSTEMS DEVELOPMENT CORE'
        },
        {
            type: 'welcome',
            text: '=================================================='
        },
        {
            type: 'welcome',
            text: 'Type "help" for a list of registered queries.'
        },
        {
            type: 'welcome',
            text: 'Type "exit" or click outside to close system shell.'
        },
        {
            type: 'welcome',
            text: ' '
        }
    ]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Focus input automatically when console opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeveloperConsole.useEffect": ()=>{
            if (isOpen) {
                setTimeout({
                    "DeveloperConsole.useEffect": ()=>{
                        inputRef.current?.focus();
                    }
                }["DeveloperConsole.useEffect"], 100);
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "DeveloperConsole.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["DeveloperConsole.useEffect"];
        }
    }["DeveloperConsole.useEffect"], [
        isOpen
    ]);
    // Handle ESC key to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeveloperConsole.useEffect": ()=>{
            const handleKeyDown = {
                "DeveloperConsole.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen) {
                        onClose();
                    }
                }
            }["DeveloperConsole.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "DeveloperConsole.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["DeveloperConsole.useEffect"];
        }
    }["DeveloperConsole.useEffect"], [
        isOpen,
        onClose
    ]);
    // Auto-scroll to bottom of terminal output
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeveloperConsole.useEffect": ()=>{
            if (streamRef.current) {
                streamRef.current.scrollTop = streamRef.current.scrollHeight;
            }
        }
    }["DeveloperConsole.useEffect"], [
        history
    ]);
    if (!isOpen) return null;
    const handleTerminalClick = (e)=>{
        // Prevent closing when clicking inside the panel
        e.stopPropagation();
        inputRef.current?.focus();
    };
    const handleCommandSubmit = (e)=>{
        e.preventDefault();
        const cmd = inputVal.trim().toLowerCase();
        if (!cmd) return;
        // Append user input to history
        const updatedHistory = [
            ...history,
            {
                type: 'input',
                text: `guest@prathamesh:~$ ${inputVal}`
            }
        ];
        // Command Router
        switch(cmd){
            case 'help':
                updatedHistory.push({
                    type: 'output',
                    text: `
Registered system queries:
  about    - Displays profile summary and systems focus
  skills   - Lists technical framework & algorithm specs
  projects - Displays active production-grade directories
  contact  - Outputs secure mailbox and connection channels
  neofetch - Shows system hardware and configuration
  exit     - Shuts down system shell
  clear    - Flushes console output log history
          `.trim()
                });
                break;
            case 'about':
                updatedHistory.push({
                    type: 'output',
                    text: `
Prathamesh Jadhav — Engineering-focused AI/ML developer.
Specializing in building production-grade vector databases, low-latency RAG architectures, and multi-threaded systems-level network analysis.
Focus: Custom indexing (HNSW), concurrency control, and data throughput optimizations.
          `.trim()
                });
                break;
            case 'skills':
                updatedHistory.push({
                    type: 'output',
                    text: `
Technical Competencies:
  [Vector Engines]     HNSW Graph Indexing, Scalar Quantization
  [Systems & Networking] Multithreading, C, Python (Scapy, pcap)
  [GenAI / RAG]          FastAPI, LangChain, OpenAI APIs
  [Web Frameworks]       Next.js, React 19, TypeScript, CSS Grid
          `.trim()
                });
                break;
            case 'projects':
                updatedHistory.push({
                    type: 'output',
                    text: `
Production Repositories:
  01 / NUROSEARCH   - HNSW-indexed vector database [Rust/Python/FastAPI]
  02 / DPI ENGINE   - Multi-threaded raw packet interceptor [C/Python/Scapy]
  03 / KOZUMIHUB    - Entertainment indexing orchestrator [TypeScript/NextJS]
  04 / SPENDSTRACK  - Offline-first transactional dashboard [TypeScript]
  05 / PR REVIEWER  - Automated AI code reviewing webhook chatbot [FastAPI]
          `.trim()
                });
                break;
            case 'contact':
                updatedHistory.push({
                    type: 'output',
                    text: `
Ingestion Gateways:
  Email:    Prathamesh.Jadhav.Office@gmail.com
  GitHub:   https://github.com/Prathamesh-Jadhav04
  LinkedIn: https://linkedin.com/in/prathamesh-jadhav04
          `.trim()
                });
                break;
            case 'neofetch':
                updatedHistory.push({
                    type: 'output',
                    text: `
 _  _              guest@prathamesh-jadhav
 |  |  _|_  |_|    -----------------------
 |__|   |_  | |    OS: NextJS Core OS (Windows WSL2)
 _                 KERNEL: React 19.2.4 (Turbopack)
 |_) ._ _._|_|_    UPTIME: 22h 45m
 |   | (_| |_| |   SHELL: jsh v1.0.0
                   RESOLUTION: 1920x1080
                   THEME: Dark Brutalist Amber
                   COMPILER: TypeScript v5
          `.trim()
                });
                break;
            case 'clear':
                setHistory([]);
                setInputVal('');
                return;
            case 'exit':
                onClose();
                setInputVal('');
                return;
            default:
                updatedHistory.push({
                    type: 'output',
                    text: `jsh: command not recognized: "${cmd}". Type "help" for instructions.`
                });
                break;
        }
        setHistory(updatedHistory);
        setInputVal('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClose,
        style: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 6000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleTerminalClick,
                style: {
                    width: '100%',
                    maxWidth: '850px',
                    backgroundColor: '#050505',
                    border: '1px solid rgba(245,245,245,0.08)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
                    cursor: 'text'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0.75rem 1.25rem',
                            backgroundColor: 'rgba(245,245,245,0.015)',
                            borderBottom: '1px solid rgba(245,245,245,0.04)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.4rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        style: {
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(245,245,245,0.1)',
                                            border: 'none',
                                            cursor: 'pointer'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#ff4444',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'rgba(245,245,245,0.1)'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--accent-amber, #ffb400)',
                                            opacity: 0.6
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(245,245,245,0.1)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DeveloperConsole.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.25em',
                                    color: 'rgba(245,245,245,0.3)',
                                    textTransform: 'uppercase'
                                },
                                children: "guest@prathamesh-jadhav: ~ (DOUBLE-CLICK BRAND TO EXIT)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DeveloperConsole.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: 'rgba(245,245,245,0.3)',
                                    fontFamily: 'monospace',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = '#ffb400',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(245,245,245,0.3)',
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DeveloperConsole.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: streamRef,
                        className: "terminal-stream",
                        style: {
                            height: '380px',
                            overflowY: 'auto',
                            padding: '1.5rem',
                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            color: 'rgba(245,245,245,0.7)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                            textAlign: 'left',
                            position: 'relative'
                        },
                        "data-lenis-prevent": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-scanlines"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DeveloperConsole.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            history.map((log, index)=>{
                                if (log.type === 'welcome') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'rgba(245,245,245,0.4)',
                                            whiteSpace: 'pre'
                                        },
                                        children: log.text
                                    }, index, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this);
                                }
                                if (log.type === 'input') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-amber, #ffb400)',
                                            fontWeight: 500
                                        },
                                        children: log.text
                                    }, index, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        whiteSpace: 'pre-wrap',
                                        color: 'rgba(245,245,245,0.75)',
                                        marginBottom: '0.5rem'
                                    },
                                    children: log.text
                                }, index, false, {
                                    fileName: "[project]/src/components/DeveloperConsole.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleCommandSubmit,
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-amber, #ffb400)',
                                            marginRight: '0.5rem',
                                            flexShrink: 0
                                        },
                                        children: "guest@prathamesh:~$"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: inputVal,
                                        onChange: (e)=>setInputVal(e.target.value),
                                        autoComplete: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false",
                                        style: {
                                            flex: 1,
                                            background: 'transparent',
                                            border: 'none',
                                            outline: 'none',
                                            color: '#f5f5f5',
                                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                            fontSize: '0.85rem',
                                            padding: 0,
                                            caretColor: 'var(--accent-amber, #ffb400)',
                                            cursor: 'text'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DeveloperConsole.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DeveloperConsole.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DeveloperConsole.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .terminal-stream::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-stream::-webkit-scrollbar-track {
          background: rgba(245,245,245,0.01);
        }
        .terminal-stream::-webkit-scrollbar-thumb {
          background: rgba(245,245,245,0.08);
          border-radius: 2px;
        }
        
        .terminal-scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
          z-index: 10;
          pointer-events: none;
          opacity: 0.15;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/DeveloperConsole.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DeveloperConsole.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(DeveloperConsole, "Bw6zaSj7HRJv4d+Glx64f80XKfU=");
_c = DeveloperConsole;
var _c;
__turbopack_context__.k.register(_c, "DeveloperConsole");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
function GitHubIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = GitHubIcon;
function LinkedInIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c1 = LinkedInIcon;
const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/Prathamesh-Jadhav04',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 44,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/prathamesh-jadhav04',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInIcon, {}, void 0, false, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 49,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function SocialButton({ link }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": link.label,
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: hovered ? '#ffb400' : 'rgba(245,245,245,0.4)',
                textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
                padding: '0.5rem'
            },
            children: [
                link.icon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: link.label
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(SocialButton, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c2 = SocialButton;
function ContactSection() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const el = sectionRef.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "ContactSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                }
            }["ContactSection.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "ContactSection.useEffect": ()=>observer.disconnect()
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setErrorMsg('All fields are required.');
            setStatus('error');
            return;
        }
        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Failed to transmit message.');
            }
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            console.error(err);
            setErrorMsg(err.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            padding: '8rem 2rem',
            borderTop: '1px solid rgba(245,245,245,0.08)',
            backgroundColor: '#0a0a0a'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                style: {
                    maxWidth: '1400px',
                    margin: '0 auto',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.7rem',
                            letterSpacing: '0.3em',
                            color: '#ffb400',
                            marginBottom: '2rem',
                            textTransform: 'uppercase',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "03 / Build"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
                            lineHeight: 0.9,
                            color: '#f5f5f5',
                            margin: '0 0 2rem 0',
                            letterSpacing: '0.02em',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "LET'S BUILD SOMETHING."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                            color: 'rgba(245,245,245,0.5)',
                            margin: '0 0 4rem 0',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "Have an idea? Let's make it real."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '650px',
                            margin: '0 auto',
                            textAlign: 'left',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'rgba(255, 180, 0, 0.02)',
                                border: '1px solid rgba(255, 180, 0, 0.2)',
                                borderRadius: '8px',
                                padding: '3rem 2rem',
                                textAlign: 'center',
                                boxShadow: '0 15px 40px -15px rgba(255, 180, 0, 0.05)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.25em',
                                        color: '#ffb400',
                                        marginBottom: '1rem'
                                    },
                                    children: "[SUCCESS] TRANSMISSION ESTABLISHED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: 'Bebas Neue, sans-serif',
                                        fontSize: '2.5rem',
                                        color: '#f5f5f5',
                                        marginBottom: '1rem',
                                        letterSpacing: '0.02em'
                                    },
                                    children: "MESSAGE LOGGED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 300,
                                        fontSize: '0.95rem',
                                        lineHeight: 1.6,
                                        color: 'rgba(245,245,245,0.6)',
                                        marginBottom: '2rem'
                                    },
                                    children: "Thank you. Your message has been ingested securely. Prathamesh will review your query and reply shortly."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                    strength: 0.2,
                                    range: 60,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStatus('idle'),
                                        className: "submit-btn",
                                        children: "SEND ANOTHER MESSAGE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-form-grid",
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '2rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    className: "contact-label",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    required: true,
                                                    value: formData.name,
                                                    onChange: handleInputChange,
                                                    className: "contact-input",
                                                    placeholder: "Enter your name",
                                                    disabled: status === 'sending'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "contact-label",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    required: true,
                                                    value: formData.email,
                                                    onChange: handleInputChange,
                                                    className: "contact-input",
                                                    placeholder: "Enter your email",
                                                    disabled: status === 'sending'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "subject",
                                            className: "contact-label",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "subject",
                                            name: "subject",
                                            required: true,
                                            value: formData.subject,
                                            onChange: handleInputChange,
                                            className: "contact-input",
                                            placeholder: "Enter message subject",
                                            disabled: status === 'sending'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "message",
                                            className: "contact-label",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            name: "message",
                                            required: true,
                                            value: formData.message,
                                            onChange: handleInputChange,
                                            className: "contact-textarea",
                                            placeholder: "Enter details of your project or query...",
                                            disabled: status === 'sending'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '0.7rem',
                                        color: '#ff4444',
                                        marginBottom: '1.5rem',
                                        letterSpacing: '0.05em'
                                    },
                                    children: [
                                        "// [ERROR]: ",
                                        errorMsg
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        marginTop: '1rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                        strength: 0.2,
                                        range: 80,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === 'sending',
                                            className: "submit-btn",
                                            children: status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 370,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '2rem',
                            justifyContent: 'center',
                            marginTop: '5rem',
                            flexWrap: 'wrap',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                                link: link
                            }, link.label, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '6rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(245,245,245,0.08)',
                            opacity: visible ? 1 : 0,
                            transition: 'opacity 0.7s 0.5s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.65rem',
                                letterSpacing: '0.2em',
                                color: 'rgba(245,245,245,0.3)',
                                textTransform: 'uppercase'
                            },
                            children: "© 2026 PRATHAMESH JADHAV. BUILT WITH PURPOSE."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .contact-form-group {
          position: relative;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          transition: color 0.3s ease;
        }

        .contact-input, .contact-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          color: #f5f5f5;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(245, 245, 245, 0.12);
          padding: 0.8rem 0;
          transition: all 0.3s ease;
          width: 100%;
          outline: none;
          cursor: text !important;
        }

        .contact-input:focus, .contact-textarea:focus {
          border-bottom-color: var(--accent-amber, #ffb400);
        }

        .contact-form-group:focus-within .contact-label {
          color: var(--accent-amber, #ffb400);
        }

        .contact-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          display: inline-block;
        }

        .submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
        }
        
        .submit-btn:disabled {
          border-color: rgba(245, 245, 245, 0.2);
          color: rgba(245, 245, 245, 0.3);
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s1(ContactSection, "S9ZX2ZTOFvQm4pAZR1JbaMwcWMk=");
_c3 = ContactSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "LinkedInIcon");
__turbopack_context__.k.register(_c2, "SocialButton");
__turbopack_context__.k.register(_c3, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NoiseOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeveloperConsole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeveloperConsole.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactSection.tsx [app-client] (ecmascript)");
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
function Home() {
    _s();
    const [loaderDone, setLoaderDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startReveal, setStartReveal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [terminalOpen, setTerminalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !loaderDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                onComplete: ()=>setLoaderDone(true),
                onStartTransition: ()=>setStartReveal(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseOverlay"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            startReveal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {
                        onLogoDoubleClick: ()=>setTerminalOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeveloperConsole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperConsole"], {
                        isOpen: terminalOpen,
                        onClose: ()=>setTerminalOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "82wg+Gk+v/9Gg7GuXpaiSYdURgA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_03dqu3c._.js.map