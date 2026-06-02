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
function Navigation() {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "nav-logo",
                    children: "P. JADHAV"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 21,
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
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                children: "Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                children: "Build"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 19,
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
        description: 'Began my Bachelor of Engineering in Computer Science. Stepped into the world of computational thinking, algorithms, and systems architecture.',
        details: 'Immersed myself in foundational engineering mathematics, logical reasoning, and structured programming paradigms.'
    },
    {
        id: 2,
        year: '2022',
        title: 'THE FIRST LINE OF CODE',
        description: 'Wrote my very first "Hello World" program. This small print statement ignited a passion for building complex software systems.',
        details: 'Started building command-line utilities and scripts, exploring data structures and debugging processes.'
    },
    {
        id: 3,
        year: '2023',
        title: 'MASTERING CS FUNDAMENTALS',
        description: 'Delved deep into Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).',
        details: 'Designed custom relational database schemas and optimized algorithmic complexities for academic projects.'
    },
    {
        id: 4,
        year: '2024',
        title: 'DATA SCIENCE INTERNSHIP',
        description: 'Joined Uptricks Services Pvt. Ltd. as a Data Science Intern. Learned to handle, preprocess, and model complex datasets in Python.',
        details: 'Utilized pandas, numpy, and scikit-learn to analyze and draw actionable patterns from multi-dimensional datasets.'
    },
    {
        id: 5,
        year: '2024',
        title: 'SYSTEMS-LEVEL PIPELINES',
        description: 'Architected automated preprocessing pipelines to streamline machine learning workflows and database ingestion.',
        details: 'Significantly minimized data cleanup time and enhanced throughput, bridging raw data engineering with predictive modeling.'
    },
    {
        id: 6,
        year: '2025',
        title: 'GENAI & INTELLIGENT APIs',
        description: 'Engineered custom Retrieval-Augmented Generation (RAG) pipelines and automated AI-driven Code Review Chatbots.',
        details: 'Designed highly secure, low-latency RESTful API architectures using FastAPI and Node.js to serve LLM inferences.'
    },
    {
        id: 7,
        year: '2026',
        title: 'ENGINEERING GRADUATION',
        description: 'Graduated with a Bachelor of Engineering in Computer Science, maintaining a strong CGPA of 7.8.',
        details: 'Successfully built and defended a Clinical Decision Support System (CDSS) capstone project integrating multi-modal clinical data.'
    },
    {
        id: 8,
        year: '2026',
        title: 'NUROSEARCH & DPI ENGINE',
        description: 'Designed and implemented NuroSearch, a custom HNSW-indexed vector database, and DPI Engine, a multi-threaded network packet analysis tool.',
        details: 'Focused on low-latency vector operations, high-concurrency systems, and custom memory management configurations.'
    }
];
function AboutSection() {
    _s();
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2022');
    const [activeCardId, setActiveCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
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
                                    setActiveCardId(parseInt(id, 10));
                                }
                            }
                        }
                    }["AboutSection.useEffect"]);
                }
            }["AboutSection.useEffect"], {
                root: null,
                rootMargin: '-25% 0px -45% 0px',
                threshold: 0.05
            });
            const cards = sectionRef.current?.querySelectorAll('.timeline-card');
            cards?.forEach({
                "AboutSection.useEffect": (card)=>timelineObserver.observe(card)
            }["AboutSection.useEffect"]);
            return ({
                "AboutSection.useEffect": ()=>{
                    revealObserver.disconnect();
                    timelineObserver.disconnect();
                }
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
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
                        lineNumber: 142,
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
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--accent-amber, #ffb400)'
                                                        },
                                                        children: "THINGS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    "THAT MATTER."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 165,
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
                                                        lineNumber: 193,
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
                                                        lineNumber: 205,
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
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 164,
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
                                        children: "// Interactive Journey & Milestones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "timeline-container",
                                        children: timelineEvents.map((event)=>{
                                            const isActive = activeCardId === event.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-year": event.year,
                                                "data-id": event.id,
                                                className: `timeline-card ${isActive ? 'active' : ''}`,
                                                onClick: ()=>{
                                                    const cardEl = document.querySelector(`[data-id="${event.id}"]`);
                                                    cardEl?.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'center'
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mobile-year-badge",
                                                        children: event.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `timeline-dot ${isActive ? 'active' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "timeline-card-title",
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "timeline-card-desc",
                                                        children: event.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    event.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "timeline-card-details",
                                                        children: event.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, event.id, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 162,
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
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timeline-year-display",
                                            children: activeYear
                                        }, activeYear, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky-year-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// 19.0760° N, 72.8777° E"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// CORE_SYSTEM_INDEXING: ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// INDEX: HNSW_INDEX_FOUND"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 140,
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
          gap: 2.5rem;
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
          padding: 2.2rem;
          background: rgba(245, 245, 245, 0.012);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.3;
          transform: scale(0.97);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.active {
          opacity: 1;
          transform: scale(1);
          background: rgba(255, 180, 0, 0.015) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(2.2rem - 2px) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.08), inset 0 1px 0px rgba(255, 255, 255, 0.05);
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.12);
          background: rgba(245, 245, 245, 0.02);
        }

        .timeline-card.active:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.85);
          margin-bottom: 0.8rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          transition: color 0.4s ease;
          margin-bottom: 0.6rem;
        }

        .timeline-card.active .timeline-card-desc {
          color: rgba(245, 245, 245, 0.85);
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.25);
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-details {
          color: rgba(245, 245, 245, 0.55);
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
            opacity: 0.85;
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
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "fGPOuuZ64Ag/OvYe4c85OAYEuvI=");
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDrawer",
    ()=>ProjectDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
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
    if (id === '01') {
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
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "300",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "200",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "330",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "140",
                            x2: "150",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "150",
                            y1: "140",
                            x2: "250",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "250",
                            y1: "140",
                            x2: "350",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "70",
                            y2: "90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "40",
                            x2: "330",
                            y2: "90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "150",
                            y2: "140",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "250",
                            y2: "140",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "100",
                    cy: "40",
                    r: "5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "300",
                    cy: "40",
                    r: "5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "70",
                    cy: "90",
                    r: "4.5",
                    fill: "#f5f5f5",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "90",
                    r: "4.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "330",
                    cy: "90",
                    r: "4.5",
                    fill: "#f5f5f5",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "140",
                    r: "4",
                    fill: "#f5f5f5",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "150",
                    cy: "140",
                    r: "4",
                    fill: "#f5f5f5",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "250",
                    cy: "140",
                    r: "4",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "350",
                    cy: "140",
                    r: "4",
                    fill: "#f5f5f5",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "HNSW LAYERED SEARCH TOPOLOGY"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "105",
                    y: "35",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "ENTRY LAYER"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "255",
                    y: "152",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "NEAREST NEIGHBOR"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDrawer.tsx",
            lineNumber: 119,
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
                            y: "60",
                            width: "70",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "150",
                            y: "60",
                            width: "90",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "300",
                            y: "60",
                            width: "80",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 90 77 L 150 77",
                            stroke: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 240 77 L 300 77",
                            stroke: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "55",
                    y: "81",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "libpcap"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "195",
                    y: "81",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "parser-queue"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "340",
                    y: "81",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "TLS SNI"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "110",
                    cy: "77",
                    r: "2.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "130",
                    cy: "77",
                    r: "2.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "260",
                    cy: "77",
                    r: "2.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "280",
                    cy: "77",
                    r: "2.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "DPI STREAM INGESTION FLOW"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "150",
                    y: "130",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "// Multi-threaded circular packet buffer"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDrawer.tsx",
            lineNumber: 149,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255,180,0,0.15)",
                    strokeWidth: "1",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "30",
                            width: "360",
                            height: "18",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "60",
                            width: "105",
                            height: "100",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "147",
                            y: "60",
                            width: "105",
                            height: "100",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "275",
                            y: "60",
                            width: "105",
                            height: "100",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "147",
                    y: "60",
                    width: "105",
                    height: "100",
                    rx: "3",
                    fill: "rgba(255,180,0,0.02)",
                    stroke: "#ffb400",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "110",
                    r: "7",
                    fill: "#ffb400",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "IMMERSIVE MEDIA CATALOG GRID"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "42",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    children: "SEARCH ENTERTAINMENT TITLE..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDrawer.tsx",
            lineNumber: 171,
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
                    stroke: "rgba(245,245,245,0.03)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "40",
                            x2: "360",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "80",
                            x2: "360",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "120",
                            x2: "360",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "40",
                    y1: "20",
                    x2: "40",
                    y2: "150",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "40",
                    y1: "150",
                    x2: "370",
                    y2: "150",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 40 130 Q 90 110 140 90 T 240 60 T 340 30",
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: "30",
                    r: "3.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "15",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "WEALTH GROWTH RATE PREVIEW"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "345",
                    y: "24",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "BALANCE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDrawer.tsx",
            lineNumber: 187,
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
                    stroke: "rgba(245,245,245,0.1)",
                    strokeWidth: "1.5",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 30 90 L 370 90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 100 90 C 140 90, 160 45, 200 45 L 300 45 C 330 45, 340 90, 360 90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "90",
                    r: "4.5",
                    fill: "#f5f5f5",
                    opacity: "0.3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "100",
                    cy: "90",
                    r: "4.5",
                    fill: "#f5f5f5",
                    opacity: "0.3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "160",
                    cy: "45",
                    r: "4.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "240",
                    cy: "45",
                    r: "4.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "360",
                    cy: "90",
                    r: "5.5",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "180",
                    y: "80",
                    width: "130",
                    height: "35",
                    rx: "3",
                    fill: "#181818",
                    stroke: "#ffb400",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 240 45 L 240 80",
                    stroke: "#ffb400",
                    strokeDasharray: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "190",
                    y: "93",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "LLM PR REVIEW: ACTIVE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "190",
                    y: "106",
                    fill: "rgba(245,245,245,0.6)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    children: '"Optimize lines 12-25..."'
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "20",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "GITHUB PR WEBHOOK PIPELINE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectDrawer.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = ProjectSchematic;
function ProjectDrawer({ project, isOpen, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDrawer.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "ProjectDrawer.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["ProjectDrawer.useEffect"];
        }
    }["ProjectDrawer.useEffect"], [
        isOpen
    ]);
    if (!project) return null;
    const details = caseStudiesData[project.id];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 5000,
            pointerEvents: isOpen ? 'all' : 'none',
            display: 'flex',
            justifyContent: 'flex-end'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 10, 10, 0.75)',
                    backdropFilter: 'blur(10px)',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDrawer.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drawer-panel",
                "data-lenis-prevent": true,
                style: {
                    position: 'relative',
                    width: 'clamp(350px, 45vw, 600px)',
                    height: '100%',
                    backgroundColor: '#0a0a0a',
                    borderLeft: '1px solid rgba(245, 245, 245, 0.08)',
                    boxShadow: '-10px 0px 40px rgba(0, 0, 0, 0.5)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 5001
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '2rem 2.5rem',
                            borderBottom: '1px solid rgba(245, 245, 245, 0.06)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.2em',
                                    color: 'var(--accent-amber, #ffb400)'
                                },
                                children: [
                                    "PROJECT // ",
                                    project.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                range: 40,
                                strength: 0.35,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        color: 'rgba(245, 245, 245, 0.5)',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        fontFamily: 'monospace',
                                        padding: '0.5rem',
                                        transition: 'color 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#ffb400',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(245, 245, 245, 0.5)',
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectDrawer.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '2.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: 'var(--font-bebas-neue, sans-serif)',
                                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                    lineHeight: 0.9,
                                    color: '#f5f5f5',
                                    marginBottom: '1rem',
                                    letterSpacing: '0.02em'
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.8rem',
                                    flexWrap: 'wrap',
                                    marginBottom: '1.5rem'
                                },
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                            fontSize: '0.55rem',
                                            letterSpacing: '0.1em',
                                            color: 'rgba(245, 245, 245, 0.5)',
                                            border: '1px solid rgba(245, 245, 245, 0.08)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px',
                                            textTransform: 'uppercase'
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'var(--font-inter, sans-serif)',
                                    fontWeight: 300,
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    color: 'rgba(245, 245, 245, 0.6)',
                                    marginBottom: '1.5rem'
                                },
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSchematic, {
                                id: project.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem',
                                    marginTop: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "detail-section-title",
                                                children: "ROLE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "detail-section-text",
                                                style: {
                                                    color: '#f5f5f5',
                                                    fontWeight: 400
                                                },
                                                children: details.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "detail-section-title",
                                                children: "KEY CHALLENGES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "detail-section-list",
                                                children: details.challenges.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: c
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "detail-section-title",
                                                children: "SOLUTIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "detail-section-list",
                                                children: details.solutions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: s
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "detail-section-title",
                                                children: "OUTCOMES & METRICS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "detail-section-list",
                                                style: {
                                                    color: 'var(--accent-amber, #ffb400)'
                                                },
                                                children: details.metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: m
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "detail-section-title",
                                                children: "SYSTEM SPECIFICATION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '0.5rem',
                                                    flexWrap: 'wrap',
                                                    marginTop: '0.5rem'
                                                },
                                                children: details.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                                            fontSize: '0.6rem',
                                                            letterSpacing: '0.08em',
                                                            color: 'var(--accent-amber, #ffb400)',
                                                            background: 'rgba(255, 180, 0, 0.04)',
                                                            border: '1px solid rgba(255, 180, 0, 0.15)',
                                                            borderRadius: '3px',
                                                            padding: '0.3rem 0.6rem',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '1.5rem',
                                            marginBottom: '2rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                            range: 50,
                                            strength: 0.3,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: details.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "drawer-cta",
                                                style: {
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    border: '1px solid var(--accent-amber, #ffb400)',
                                                    background: 'transparent',
                                                    color: 'var(--accent-amber, #ffb400)',
                                                    fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                                    fontSize: '0.7rem',
                                                    letterSpacing: '0.15em',
                                                    padding: '0.8rem 2rem',
                                                    textTransform: 'uppercase',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.3s ease'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = 'var(--accent-amber, #ffb400)';
                                                    e.currentTarget.style.color = '#0a0a0a';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.color = 'var(--accent-amber, #ffb400)';
                                                },
                                                children: "EXPLORE CODEBASE   →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectDrawer.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectDrawer.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectDrawer.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectDrawer.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .detail-section-title {
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .detail-section-text {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        .detail-section-list {
          padding-left: 1.2rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-section-list li {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        @media (max-width: 768px) {
          .drawer-panel {
            width: 100vw !important;
            border-left: none !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectDrawer.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectDrawer.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s(ProjectDrawer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = ProjectDrawer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectSchematic");
__turbopack_context__.k.register(_c1, "ProjectDrawer");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectDrawer.tsx [app-client] (ecmascript)");
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
function ProjectCard({ project, index, onOpen }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "ProjectCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        // Stagger each card slightly
                        setTimeout({
                            "ProjectCard.useEffect": ()=>setVisible(true)
                        }["ProjectCard.useEffect"], index * 120);
                        observer.disconnect();
                    }
                }
            }["ProjectCard.useEffect"], {
                threshold: 0.15
            });
            observer.observe(el);
            return ({
                "ProjectCard.useEffect": ()=>observer.disconnect()
            })["ProjectCard.useEffect"];
        }
    }["ProjectCard.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onClick: ()=>onOpen(project),
        style: {
            borderTop: '1px solid rgba(245,245,245,0.08)',
            padding: '2.5rem 0',
            cursor: 'pointer',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '2rem',
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.15em',
                                    color: 'rgba(245,245,245,0.3)',
                                    flexShrink: 0
                                },
                                children: project.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Bebas Neue, sans-serif',
                                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                    lineHeight: 1,
                                    color: hovered ? '#ffb400' : '#f5f5f5',
                                    transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
                                    letterSpacing: '0.02em'
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '0.85rem',
                                    color: 'rgba(245,245,245,0.4)',
                                    display: 'none'
                                },
                                className: "project-desc",
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-end'
                                },
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.15em',
                                            color: 'rgba(245,245,245,0.4)',
                                            border: '1px solid rgba(245,245,245,0.12)',
                                            borderRadius: '999px',
                                            padding: '0.25rem 0.75rem',
                                            textTransform: 'uppercase',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.1em',
                                    color: 'rgba(245,245,245,0.3)',
                                    minWidth: '3rem',
                                    textAlign: 'right'
                                },
                                children: project.year
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                style: {
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '1.2rem',
                                    color: '#ffb400',
                                    opacity: hovered ? 1 : 0,
                                    transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
                                    transition: 'opacity 0.35s cubic-bezier(0.65, 0, 0.35, 1), transform 0.35s cubic-bezier(0.65, 0, 0.35, 1)',
                                    minWidth: '1.5rem',
                                    display: 'inline-block'
                                },
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: 'calc(2rem + 2ch + 2rem)',
                    marginTop: '0.75rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.8rem',
                        color: hovered ? 'rgba(245,245,245,0.55)' : 'rgba(245,245,245,0.3)',
                        transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
                        letterSpacing: '0.01em'
                    },
                    children: project.description
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = ProjectCard;
function ProjectsSection() {
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDrawerOpen, setIsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpenDrawer = (project)=>{
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            const el = headerRef.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "ProjectsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                        observer.disconnect();
                    }
                }
            }["ProjectsSection.useEffect"], {
                threshold: 0.2
            });
            observer.observe(el);
            return ({
                "ProjectsSection.useEffect": ()=>observer.disconnect()
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        style: {
            padding: '8rem 2rem',
            backgroundColor: '#0a0a0a'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1400px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        style: {
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.7rem',
                            letterSpacing: '0.3em',
                            color: '#ffb400',
                            marginBottom: '3rem',
                            textTransform: 'uppercase',
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "02 / Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'Bebas Neue, sans-serif',
                            fontSize: 'clamp(3rem, 6vw, 6rem)',
                            lineHeight: 0.9,
                            color: '#f5f5f5',
                            margin: '0 0 5rem 0',
                            letterSpacing: '0.02em',
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "SELECTED WORK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                    project: project,
                                    index: index,
                                    onOpen: handleOpenDrawer
                                }, project.id, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: '1px solid rgba(245,245,245,0.08)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDrawer"], {
                project: selectedProject,
                isOpen: isDrawerOpen,
                onClose: ()=>setIsDrawerOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s1(ProjectsSection, "BvyS3EB27EkbL3KO5gYpoMGSWdA=");
_c1 = ProjectsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "ProjectsSection");
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
function Home() {
    _s();
    const [loaderDone, setLoaderDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startReveal, setStartReveal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !loaderDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                onComplete: ()=>setLoaderDone(true),
                onStartTransition: ()=>setStartReveal(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseOverlay"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            startReveal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "dHL+24ZO4NrWQ3Hq+lcaVqMWWQg=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0z-~z7v._.js.map