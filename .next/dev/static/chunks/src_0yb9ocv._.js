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
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-links",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            children: "Origin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            children: "Build"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 18,
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
"[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
function ProjectCard({ project, index }) {
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
                                lineNumber: 100,
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
                                lineNumber: 113,
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
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 98,
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
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 151,
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
                                lineNumber: 173,
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
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 89,
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
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = ProjectCard;
function ProjectsSection() {
    _s1();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 261,
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
                    lineNumber: 279,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project,
                                index: index
                            }, project.id, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderTop: '1px solid rgba(245,245,245,0.08)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s1(ProjectsSection, "o2hg/lymq321eeLT069yIvJmCVg=");
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
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 13,
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
            lineNumber: 45,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/prathamesh-jadhav04',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInIcon, {}, void 0, false, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 50,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function SocialButton({ link }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(SocialButton, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c2 = SocialButton;
function ContactSection() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [btnHovered, setBtnHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                threshold: 0.2
            });
            observer.observe(el);
            return ({
                "ContactSection.useEffect": ()=>observer.disconnect()
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            padding: '8rem 2rem',
            borderTop: '1px solid rgba(245,245,245,0.08)',
            backgroundColor: '#0a0a0a'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 126,
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
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                        color: 'rgba(245,245,245,0.5)',
                        margin: '0',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)'
                    },
                    children: "Have an idea? Let's make it real."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s 0.3s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.3s cubic-bezier(0.65, 0, 0.35, 1)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:Prathamesh.Jadhav.Office@gmail.com",
                        onMouseEnter: ()=>setBtnHovered(true),
                        onMouseLeave: ()=>setBtnHovered(false),
                        style: {
                            border: '1px solid #ffb400',
                            color: btnHovered ? '#0a0a0a' : '#ffb400',
                            backgroundColor: btnHovered ? '#ffb400' : 'transparent',
                            padding: '1rem 3rem',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.75rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            display: 'inline-block',
                            marginTop: '3rem',
                            transition: 'all 0.3s cubic-bezier(0.65, 0, 0.35, 1)'
                        },
                        children: "GET IN TOUCH"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        marginTop: '4rem',
                        flexWrap: 'wrap',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)'
                    },
                    children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                            link: link
                        }, link.label, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 210,
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
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s1(ContactSection, "ENWdELyXUk0QX7bLT0Ts7myS9ao=");
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

//# sourceMappingURL=src_0yb9ocv._.js.map