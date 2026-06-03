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
"[project]/src/components/ui/ScramblerText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParagraphScrambler",
    ()=>ParagraphScrambler,
    "ScramblerText",
    ()=>ScramblerText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScramblerText({ text, className }) {
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScramblerText.useEffect": ()=>{
            if (!isHovered) {
                setDisplayText(text);
                return;
            }
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let iterations = 0;
            const interval = setInterval({
                "ScramblerText.useEffect.interval": ()=>{
                    setDisplayText({
                        "ScramblerText.useEffect.interval": (prev)=>text.split('').map({
                                "ScramblerText.useEffect.interval": (char, index)=>{
                                    if (char === ' ' || char === '.' || char === '/' || char === '-' || char === '_') return char;
                                    if (index < iterations) return text[index];
                                    return chars[Math.floor(Math.random() * chars.length)];
                                }
                            }["ScramblerText.useEffect.interval"]).join('')
                    }["ScramblerText.useEffect.interval"]);
                    iterations += 1 / 3;
                    if (iterations >= text.length) {
                        clearInterval(interval);
                        setDisplayText(text);
                    }
                }
            }["ScramblerText.useEffect.interval"], 25);
            return ({
                "ScramblerText.useEffect": ()=>clearInterval(interval)
            })["ScramblerText.useEffect"];
        }
    }["ScramblerText.useEffect"], [
        isHovered,
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: className,
        style: {
            position: 'relative',
            display: 'inline-block',
            cursor: 'default',
            userSelect: 'none',
            WebkitUserSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ScramblerText.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    whiteSpace: 'nowrap'
                },
                children: displayText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ScramblerText.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ScramblerText.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ScramblerText, "mTAJxUgCdWt52WJmwiL6JfqZruI=");
_c = ScramblerText;
function ParagraphScrambler({ text, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        style: {
            display: 'inline'
        },
        children: text.split(' ').map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'inline-block',
                    marginRight: '0.25em'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScramblerText, {
                    text: word
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/ScramblerText.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            }, idx, false, {
                fileName: "[project]/src/components/ui/ScramblerText.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScramblerText.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c1 = ParagraphScrambler;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScramblerText");
__turbopack_context__.k.register(_c1, "ParagraphScrambler");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScramblerText.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "P. JADHAV"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo-tooltip",
                                children: "[DBL-CLICK FOR SHELL]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "Origin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 48,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#projects",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "Work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 51,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 54,
                                        columnNumber: 32
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 25,
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
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 24,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Magnetic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScramblerText.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function ParticleBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animationFrameId;
            let particles = [];
            const resizeCanvas = {
                "ParticleBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    initParticles();
                }
            }["ParticleBackground.useEffect.resizeCanvas"];
            const initParticles = {
                "ParticleBackground.useEffect.initParticles": ()=>{
                    particles = [];
                    const count = Math.min(60, Math.floor(canvas.width * canvas.height / 25000));
                    for(let i = 0; i < count; i++){
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: (Math.random() - 0.5) * 0.3,
                            vy: (Math.random() - 0.5) * 0.3,
                            radius: Math.random() * 1.5 + 0.8
                        });
                    }
                }
            }["ParticleBackground.useEffect.initParticles"];
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            const handleMouseMove = {
                "ParticleBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["ParticleBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "ParticleBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current = {
                        x: -1000,
                        y: -1000
                    };
                }
            }["ParticleBackground.useEffect.handleMouseLeave"];
            window.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
            const animate = {
                "ParticleBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw subtle background grid lines
                    ctx.strokeStyle = 'rgba(255, 180, 0, 0.015)';
                    ctx.lineWidth = 1;
                    const gridSize = 80;
                    for(let x = 0; x < canvas.width; x += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvas.height);
                        ctx.stroke();
                    }
                    for(let y = 0; y < canvas.height; y += gridSize){
                        ctx.beginPath();
                        ctx.moveTo(0, y);
                        ctx.lineTo(canvas.width, y);
                        ctx.stroke();
                    }
                    // Draw and update particles
                    for(let i = 0; i < particles.length; i++){
                        const p = particles[i];
                        p.x += p.vx;
                        p.y += p.vy;
                        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                        const dxMouse = mouseRef.current.x - p.x;
                        const dyMouse = mouseRef.current.y - p.y;
                        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                        if (distMouse < 200) {
                            p.x += dxMouse / distMouse * 0.3;
                            p.y += dyMouse / distMouse * 0.3;
                        }
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255, 180, 0, 0.15)';
                        ctx.fill();
                        for(let j = i + 1; j < particles.length; j++){
                            const p2 = particles[j];
                            const dx = p.x - p2.x;
                            const dy = p.y - p2.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 130) {
                                const alpha = (130 - dist) / 130 * 0.07;
                                ctx.strokeStyle = `rgba(255, 180, 0, ${alpha})`;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                        if (distMouse < 180) {
                            const alpha = (180 - distMouse) / 180 * 0.15;
                            ctx.strokeStyle = `rgba(255, 180, 0, ${alpha})`;
                            ctx.lineWidth = 0.6;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                            ctx.stroke();
                        }
                    }
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["ParticleBackground.useEffect.animate"];
            animate();
            return ({
                "ParticleBackground.useEffect": ()=>{
                    window.removeEventListener('resize', resizeCanvas);
                    window.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    cancelAnimationFrame(animationFrameId);
                }
            })["ParticleBackground.useEffect"];
        }
    }["ParticleBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2
        }
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(ParticleBackground, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = ParticleBackground;
function SystemLogsHUD() {
    _s1();
    const [latency, setLatency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemLogsHUD.useEffect": ()=>{
            const latencyInterval = setInterval({
                "SystemLogsHUD.useEffect.latencyInterval": ()=>{
                    setLatency(Math.floor(Math.random() * 6) + 10);
                }
            }["SystemLogsHUD.useEffect.latencyInterval"], 2000);
            const clockInterval = setInterval({
                "SystemLogsHUD.useEffect.clockInterval": ()=>{
                    const now = new Date();
                    const pad = {
                        "SystemLogsHUD.useEffect.clockInterval.pad": (n)=>n.toString().padStart(2, '0')
                    }["SystemLogsHUD.useEffect.clockInterval.pad"];
                    setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
                }
            }["SystemLogsHUD.useEffect.clockInterval"], 1000);
            return ({
                "SystemLogsHUD.useEffect": ()=>{
                    clearInterval(latencyInterval);
                    clearInterval(clockInterval);
                }
            })["SystemLogsHUD.useEffect"];
        }
    }["SystemLogsHUD.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-hud-logs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-line",
                children: "// PRATHAMESH_JADHAV_PORTFOLIO"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-line",
                children: [
                    "SYSTEM STATUS: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "green-glow",
                        children: "OPERATIONAL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 184,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-line",
                children: [
                    "CORE LATENCY: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            latency,
                            "ms"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 185,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-line",
                children: [
                    "ACTIVE NODE: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "NODE_AI_26_01"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 186,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-line",
                children: [
                    "SYS_TIME: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: time || '--:--:--'
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 187,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s1(SystemLogsHUD, "rBjcn7AOAWz/RNMjo5QehqPK4wg=");
_c1 = SystemLogsHUD;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "full-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleBackground, {}, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SystemLogsHUD, {}, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
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
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-text-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                range: 30,
                                strength: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "year-badge",
                                    style: {
                                        display: 'inline-block'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "EST. 2022"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 219,
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
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "I SHIP."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "I OPTIMIZE."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtext",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                    text: "AI/ML Developer. Data Scientist. GenAI Engineer."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                        range: 40,
                        strength: 0.3,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scroll-explore",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScramblerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScramblerText"], {
                                        text: "SCROLL TO EXPLORE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scroll-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 217,
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
          margin-top: 1.5rem !important; /* Lowered position slightly */
          margin-bottom: 2rem !important; /* Added space before title */
          cursor: pointer;
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
        }

        .hero-hud-logs {
          position: absolute;
          top: 5rem;
          right: 5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.15em;
          border-left: 2px solid rgba(255, 180, 0, 0.25);
          padding-left: 1rem;
          z-index: 10;
          pointer-events: none;
          text-transform: uppercase;
        }

        .hero-hud-logs .green-glow {
          color: #00ff66;
          text-shadow: 0 0 10px rgba(0, 255, 102, 0.4);
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
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

        @media (max-width: 992px) {
          .hero-hud-logs {
            display: none !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_c2 = HeroSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ParticleBackground");
__turbopack_context__.k.register(_c1, "SystemLogsHUD");
__turbopack_context__.k.register(_c2, "HeroSection");
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const timelineEvents = [
    {
        id: 1,
        year: '2022',
        title: 'ACADEMIC CONCEPTS & LOGICAL FOUNDATIONS',
        teaser: 'Initiated formal academic study in Computer Science, mastering core computational paradigms.',
        description: 'Acquired rigorous knowledge of data structures, classical algorithms, discrete mathematics, and computer architecture. Established fundamental habits in algorithm design, compiler constraints, and complexity analysis.',
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
        title: 'FIRST PYTHON & C SYSTEM ENGINE CONSTRUCTS',
        teaser: 'Programmed core console logic, shell algorithms, and procedural scripting models.',
        description: 'Built command-line tools and custom memory buffers. Practiced memory layout debugging, manual pointer reference handling, and clean modular development principles.',
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
        title: 'SCALABLE WEB & DISTRIBUTED DATA FLOWS',
        teaser: 'Architected secure database pipelines, server-side handlers, and state management.',
        description: 'Designed relational schemas and high-throughput server backends. Addressed distributed application bottlenecks, database transaction constraints, and web browser rendering performance.',
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
        title: 'DATA SCIENCE INTERNSHIP — UPTRICKS SERVICES',
        teaser: 'Engineered data preprocessing engines and mathematical prediction pipelines.',
        description: 'Processed complex logistics datasets. Conducted feature engineering, multi-collinearity checks, and statistical modeling to generate production-ready predictive insights.',
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
        title: 'HIGH-VOLUME DATA INGESTION & ETL ENGINES',
        teaser: 'Streamlined data automation systems, reducing query processing latencies.',
        description: 'Optimized extract-transform-load data paths. Automated pipeline triggers using custom shell automation scripts, decreasing system load times and streamlining database ingest.',
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
        title: 'CONTEXTUAL AI ENGINES & RETRIEVAL-AUGMENTED GENERATION',
        teaser: 'Engineered LangChain agent pipelines and real-time semantic search layers.',
        description: 'Developed Retrieval-Augmented Generation (RAG) models using vector indexes. Designed low-latency contextual embeddings integration to feed LLM completions with enterprise security.',
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
        title: 'BACHELOR OF COMPUTER SCIENCE — CGPA 7.8',
        teaser: 'Successfully graduated. Researched clinical decision networks for prediction.',
        description: 'Defended B.E. Thesis in Computer Science. Focused coursework on advanced machine learning, concurrent systems, and database engineering, maintaining a competitive cumulative CGPA of 7.8.',
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
        title: 'NUROSEARCH VECTOR STORAGE & HIGH-SPEED PACKET CAPTURE',
        teaser: 'Engineered custom graph-based vector storage indexing (HNSW) and C-based DPI listener.',
        description: 'Designed NuroSearch, a custom HNSW graph indexing vector database for semantic search. Built a high-performance network packet sniffer utilising multithreaded raw socket streams and C libraries.',
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
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes nodePulse { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255,180,0,0.2)); } 50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(255,180,0,0.6)); } }
          @keyframes flowLine { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
          .tree-node { animation: nodePulse 3s infinite ease-in-out; transform-origin: 200px 30px; }
          .tree-node-delay1 { animation: nodePulse 3s infinite ease-in-out 1s; transform-origin: 120px 65px; }
          .tree-node-delay2 { animation: nodePulse 3s infinite ease-in-out 2s; transform-origin: 80px 100px; }
          .flow-link { stroke-dasharray: 6 3; animation: flowLine 1.5s linear infinite; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255,180,0,0.02)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "20",
                            x2: "400",
                            y2: "20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "400",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "60",
                            x2: "400",
                            y2: "60"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "80",
                            x2: "400",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "100",
                            x2: "400",
                            y2: "100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "0",
                            x2: "50",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "0",
                            x2: "100",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "150",
                            y1: "0",
                            x2: "150",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "0",
                            x2: "200",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "250",
                            y1: "0",
                            x2: "250",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "0",
                            x2: "300",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "350",
                            y1: "0",
                            x2: "350",
                            y2: "130"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255, 180, 0, 0.2)",
                    strokeWidth: "1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "30",
                            x2: "120",
                            y2: "65",
                            className: "flow-link",
                            stroke: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "30",
                            x2: "280",
                            y2: "65",
                            className: "flow-link"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "120",
                            y1: "65",
                            x2: "80",
                            y2: "100",
                            className: "flow-link",
                            stroke: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "120",
                            y1: "65",
                            x2: "160",
                            y2: "100",
                            className: "flow-link"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "30",
                    r: "10",
                    fill: "#090909",
                    stroke: "#ffb400",
                    strokeWidth: "1.5",
                    className: "tree-node"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "33",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    fontWeight: "bold",
                    children: "ROOT"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "120",
                    cy: "65",
                    r: "10",
                    fill: "#090909",
                    stroke: "#ffb400",
                    strokeWidth: "1.5",
                    className: "tree-node-delay1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "120",
                    y: "68",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "L_01"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "280",
                    cy: "65",
                    r: "10",
                    fill: "#090909",
                    stroke: "rgba(245,245,245,0.3)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "280",
                    y: "68",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "R_01"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "80",
                    cy: "100",
                    r: "10",
                    fill: "#090909",
                    stroke: "#ffb400",
                    strokeWidth: "1.5",
                    className: "tree-node-delay2"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "103",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "0x3A"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "160",
                    cy: "100",
                    r: "10",
                    fill: "#090909",
                    stroke: "rgba(245,245,245,0.2)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "160",
                    y: "103",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "0x7B"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "DATA_STRUCTURE: HIERARCHICAL_INDEX"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "18",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "O(log N) SEARCH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 145,
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
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes cursorBlink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
          @keyframes textType1 {
            0% { content: ""; }
            10% { content: "c"; }
            20% { content: "ch"; }
            30% { content: "char"; }
            40% { content: "char*"; }
            50% { content: "char* pt"; }
            60% { content: "char* ptr "; }
            70% { content: "char* ptr = "; }
            80% { content: "char* ptr = ma"; }
            90% { content: "char* ptr = malloc"; }
            100% { content: "char* ptr = malloc(16);"; }
          }
          .typewriter::after {
            display: inline-block;
            content: "";
            animation: textType1 4s steps(11) infinite alternate;
          }
          .cursor { animation: cursorBlink 1s infinite; fill: #ffb400; }
          .memory-box { transition: fill 0.3s; }
          .memory-box:hover { fill: rgba(255,180,0,0.08); }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    fill: "rgba(245,245,245,0.15)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "15",
                            y: "45",
                            children: "0x007FFF01: [ 0x3F ]  -- ptr"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "15",
                            y: "65",
                            children: "0x007FFF02: [ 0x4E ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "15",
                            y: "85",
                            children: "0x007FFF03: [ 0x00 ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 120 42 L 180 42 L 180 65 L 210 65",
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "210,65 205,62 205,68",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "215",
                    y: "35",
                    width: "150",
                    height: "75",
                    rx: "4",
                    fill: "rgba(255,255,255,0.01)",
                    stroke: "rgba(245,245,245,0.1)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "225",
                    y: "48",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    children: "HEAP MEMORY MAP"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "225",
                    y: "58",
                    width: "30",
                    height: "20",
                    rx: "2",
                    fill: "rgba(255,180,0,0.05)",
                    stroke: "#ffb400",
                    strokeWidth: "1",
                    className: "memory-box"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "240",
                    y: "70",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "16B"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "260",
                    y: "58",
                    width: "45",
                    height: "20",
                    rx: "2",
                    fill: "none",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1",
                    className: "memory-box"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "282",
                    y: "70",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "32B"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "310",
                    y: "58",
                    width: "45",
                    height: "20",
                    rx: "2",
                    fill: "rgba(245,245,245,0.02)",
                    stroke: "rgba(245,245,245,0.1)",
                    strokeWidth: "1",
                    className: "memory-box"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "332",
                    y: "70",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "FREE"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "LOW-LEVEL REGISTER & MEMORY LEAK WATCH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "112",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    className: "typewriter",
                    children: "guest@kernel:~$ "
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "180",
                    y: "104",
                    width: "4",
                    height: "8",
                    fill: "#ffb400",
                    className: "cursor"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this);
    }
    if (id === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes dataStream {
            0% { stroke-dashoffset: 40; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes hitFlash {
            0%, 100% { fill: rgba(74, 222, 128, 0.05); stroke: rgba(74, 222, 128, 0.4); }
            50% { fill: rgba(74, 222, 128, 0.25); stroke: rgba(74, 222, 128, 1); }
          }
          .stream-path { stroke-dasharray: 8 4; animation: dataStream 1s linear infinite; }
          .redis-node { animation: hitFlash 2s infinite ease-in-out; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.1)",
                    fill: "rgba(245,245,245,0.01)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "45",
                            width: "55",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "110",
                            y: "45",
                            width: "65",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "210",
                            y: "25",
                            width: "70",
                            height: "30",
                            rx: "3",
                            className: "redis-node"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "210",
                            y: "70",
                            width: "70",
                            height: "30",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "315",
                            y: "45",
                            width: "65",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 75 62 L 110 62",
                    stroke: "#58c4dc",
                    strokeWidth: "1.5",
                    className: "stream-path"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 175 62 L 195 62 L 195 40 L 210 40",
                    stroke: "#ffb400",
                    strokeWidth: "1",
                    strokeDasharray: "4 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 175 62 L 195 62 L 195 85 L 210 85",
                    stroke: "#cbd5e1",
                    strokeWidth: "1",
                    strokeDasharray: "4 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 280 40 L 295 40 L 295 62 L 315 62",
                    stroke: "#ffb400",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 280 85 L 295 85 L 295 62 L 315 62",
                    stroke: "#cbd5e1",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "47",
                    y: "66",
                    fill: "rgba(245,245,245,0.8)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "CLIENT"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "142",
                    y: "66",
                    fill: "rgba(245,245,245,0.8)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "GATEWAY"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "245",
                    y: "43",
                    fill: "#4ade80",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "REDIS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "245",
                    y: "88",
                    fill: "rgba(245,245,245,0.6)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "NODE_API"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "347",
                    y: "66",
                    fill: "#58c4dc",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    children: "POSTGRES"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "DISTRIBUTED SYSTEMS AND CACHING LAYERS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "245",
                    y: "52",
                    fill: "#4ade80",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "5.5",
                    textAnchor: "middle",
                    children: "CACHE_HIT (2ms)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 209,
            columnNumber: 7
        }, this);
    }
    if (id === 4) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes dropPoint {
            0% { transform: translateY(-5px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(60px); opacity: 0; }
          }
          .data-drop { animation: dropPoint 2.5s infinite linear; }
          .data-drop-d1 { animation: dropPoint 2.5s infinite linear 0.8s; }
          .data-drop-d2 { animation: dropPoint 2.5s infinite linear 1.6s; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.06)",
                    fill: "rgba(245,245,245,0.02)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "20",
                            y: "30",
                            width: "80",
                            height: "85",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "50",
                            x2: "100",
                            y2: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "70",
                            x2: "100",
                            y2: "70"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "90",
                            x2: "100",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "42",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "RAW_COLUMNS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "62",
                    fill: "rgba(245,245,245,0.7)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "Logistics_Data"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "82",
                    fill: "rgba(245,245,245,0.7)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "Geo_Lat_Lon"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "102",
                    fill: "rgba(245,245,245,0.7)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "Transit_Time"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 100 72 L 150 72",
                    stroke: "rgba(255,180,0,0.4)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "150",
                    y: "45",
                    width: "80",
                    height: "50",
                    rx: "4",
                    fill: "rgba(255,180,0,0.03)",
                    stroke: "#ffb400",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "190",
                    y: "65",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    fontWeight: "bold",
                    children: "COV_MATRIX"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "190",
                    y: "78",
                    fill: "rgba(245,245,245,0.5)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "VIF FILTERS > 5.0"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 230 72 L 275 72",
                    stroke: "rgba(255,180,0,0.4)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.1)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "285",
                            y1: "105",
                            x2: "375",
                            y2: "105"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "285",
                            y1: "35",
                            x2: "285",
                            y2: "105"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 285 95 L 365 45",
                    stroke: "#fb923c",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "305",
                    cy: "80",
                    r: "2",
                    fill: "#60a5fa"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "325",
                    cy: "72",
                    r: "2",
                    fill: "#60a5fa"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: "55",
                    r: "2",
                    fill: "#60a5fa"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "310",
                    cy: "92",
                    r: "2",
                    fill: "#60a5fa"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "FEATURE ENGINEERING & COLLINEARITY PREDICTION"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "375",
                    y: "42",
                    fill: "#fb923c",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "end",
                    children: "MODEL FIT"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    }
    if (id === 5) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes liquidFlow { 0% { stroke-dashoffset: 32; } 100% { stroke-dashoffset: 0; } }
          .flow-liquid { stroke-dasharray: 8 8; animation: liquidFlow 2s linear infinite; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 30 65 L 120 65",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "8",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 30 65 L 120 65",
                    stroke: "#10b981",
                    strokeWidth: "2",
                    className: "flow-liquid"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "30",
                    cy: "65",
                    r: "16",
                    fill: "#090909",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "30",
                    y: "68",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "CRON"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "150",
                    y: "35",
                    width: "100",
                    height: "60",
                    rx: "4",
                    fill: "rgba(16,185,129,0.02)",
                    stroke: "#10b981",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "52",
                    fill: "#10b981",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    textAnchor: "middle",
                    fontWeight: "bold",
                    children: "TRANSFORMER"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "66",
                    fill: "rgba(245,245,245,0.5)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "CSV --> PARQUET"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "80",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "GZIP COMPRESSION"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 250 65 L 340 65",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "8",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 250 65 L 340 65",
                    stroke: "#10b981",
                    strokeWidth: "2",
                    className: "flow-liquid"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "340",
                    y: "45",
                    width: "40",
                    height: "40",
                    rx: "3",
                    fill: "#090909",
                    stroke: "rgba(245,245,245,0.15)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "360",
                    y: "62",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "DB"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "360",
                    y: "74",
                    fill: "#10b981",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "LOAD"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "DATA INTEGRATION & BATCH ETL PIPELINING"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "112",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "middle",
                    children: "throughput: 25.4 MB/s"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, this);
    }
    if (id === 6) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes pulseSonar {
            0% { r: 5px; opacity: 0.9; }
            100% { r: 60px; opacity: 0; }
          }
          .sonar { animation: pulseSonar 3s infinite cubic-bezier(0.1, 0.8, 0.3, 1); }
          .query-pt { filter: drop-shadow(0 0 4px var(--accent-amber, #ffb400)); }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "65",
                    r: "5",
                    fill: "#ffb400",
                    className: "query-pt"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "65",
                    r: "30",
                    fill: "none",
                    stroke: "rgba(255,180,0,0.2)",
                    strokeWidth: "0.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "65",
                    r: "55",
                    fill: "none",
                    stroke: "rgba(255,180,0,0.15)",
                    strokeWidth: "0.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "65",
                    r: "5",
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "1",
                    className: "sonar"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "160",
                    cy: "45",
                    r: "3",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "200",
                    y1: "65",
                    x2: "160",
                    y2: "45",
                    stroke: "rgba(255,180,0,0.5)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "153",
                    y: "42",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    children: "chunk_09 (sim=0.88)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "245",
                    cy: "50",
                    r: "3",
                    fill: "#ffb400"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "200",
                    y1: "65",
                    x2: "245",
                    y2: "50",
                    stroke: "rgba(255,180,0,0.5)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "252",
                    y: "48",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    children: "chunk_14 (sim=0.84)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "140",
                    cy: "85",
                    r: "2",
                    fill: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "260",
                    cy: "85",
                    r: "2",
                    fill: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "190",
                    cy: "110",
                    r: "2",
                    fill: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "215",
                    cy: "25",
                    r: "2",
                    fill: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "SEMANTIC RAG VECTOR NEAREST-NEIGHBORS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 372,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "18",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "API LATENCY: 28ms"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: 'Query: "vector database optimization" --> Embedding Ingest'
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 342,
            columnNumber: 7
        }, this);
    }
    if (id === 7) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(245,245,245,0.05)",
                    strokeWidth: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: "100",
                            x2: "370",
                            y2: "100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: "30",
                            x2: "370",
                            y2: "30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "50",
                    y: "55",
                    width: "20",
                    height: "45",
                    fill: "rgba(245,245,245,0.15)",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "SEM_I"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "50",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "7.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "90",
                    y: "50",
                    width: "20",
                    height: "50",
                    fill: "rgba(245,245,245,0.15)",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "100",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "SEM_II"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "100",
                    y: "45",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "7.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "130",
                    y: "47",
                    width: "20",
                    height: "53",
                    fill: "rgba(245,245,245,0.2)",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "140",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "SEM_III"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "140",
                    y: "42",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "7.7"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "170",
                    y: "44",
                    width: "20",
                    height: "56",
                    fill: "rgba(245,245,245,0.2)",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "180",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "SEM_IV"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "180",
                    y: "39",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "7.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "210",
                    y: "42",
                    width: "20",
                    height: "58",
                    fill: "rgba(255,180,0,0.15)",
                    stroke: "#ffb400",
                    strokeWidth: "0.5",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "220",
                    y: "112",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "SEM_V"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "220",
                    y: "37",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "8.0"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "260",
                    y: "35",
                    width: "110",
                    height: "65",
                    rx: "3",
                    fill: "rgba(245,245,245,0.01)",
                    stroke: "rgba(245,245,245,0.08)"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "315",
                    y: "48",
                    fill: "rgba(245,245,245,0.7)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    textAnchor: "middle",
                    children: "CAPSTONE THESIS"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "315",
                    y: "62",
                    fill: "#ffb400",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    textAnchor: "middle",
                    fontWeight: "bold",
                    children: "CLINICAL ML NET"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "315",
                    y: "78",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "middle",
                    children: "VERDICT: APPROVED // GRADE A"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "18",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "ACADEMIC TRACKING AND GRADE ENGINE"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "18",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "CGPA: 7.80"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 380,
            columnNumber: 7
        }, this);
    }
    if (id === 8) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "130",
            viewBox: "0 0 400 130",
            style: {
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.12)',
                borderRadius: '6px',
                margin: '1rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes oscil1 {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .oscilloscope-trace { stroke-dasharray: 200; stroke-dashoffset: 200; animation: oscil1 2.5s infinite linear; }
          .oscilloscope-trace-secondary { opacity: 0.15; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(239,68,68,0.03)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "65",
                            x2: "380",
                            y2: "65"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "35",
                            x2: "380",
                            y2: "35"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "95",
                            x2: "380",
                            y2: "95"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "10",
                            x2: "200",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "10",
                            x2: "100",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "10",
                            x2: "300",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "15",
                    y: "10",
                    width: "370",
                    height: "110",
                    fill: "none",
                    stroke: "rgba(239,68,68,0.08)",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65",
                    fill: "none",
                    stroke: "rgba(239,68,68,0.2)",
                    strokeWidth: "1",
                    className: "oscilloscope-trace-secondary"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65",
                    fill: "none",
                    stroke: "#ef4444",
                    strokeWidth: "1.5",
                    className: "oscilloscope-trace"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "95",
                    r: "3",
                    fill: "#cbd5e1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "80",
                    cy: "105",
                    r: "3",
                    fill: "#cbd5e1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "65",
                    cy: "85",
                    r: "3",
                    fill: "#cbd5e1"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "50",
                    y1: "95",
                    x2: "80",
                    y2: "105",
                    stroke: "rgba(245,245,245,0.3)",
                    strokeWidth: "0.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "50",
                    y1: "95",
                    x2: "65",
                    y2: "85",
                    stroke: "rgba(245,245,245,0.3)",
                    strokeWidth: "0.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "80",
                    y1: "105",
                    x2: "65",
                    y2: "85",
                    stroke: "rgba(245,245,245,0.3)",
                    strokeWidth: "0.75"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "80",
                    y: "82",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "5.5",
                    children: "HNSW_L0_GRAPH"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "375",
                    y: "22",
                    fill: "#ef4444",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "end",
                    children: "DPI BUFFER: 99.8% INGEST"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 460,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "375",
                    y: "32",
                    fill: "#ef4444",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6",
                    textAnchor: "end",
                    children: "RAW CAPTURE STREAM: 10Gbps"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "25",
                    y: "22",
                    fill: "rgba(255,180,0,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    letterSpacing: "0.05em",
                    children: "C RAW SOCKET CAPTURE & MULTITHREADED PACKET PARSING"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "115",
                    fill: "#ef4444",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "6.5",
                    textAnchor: "middle",
                    children: "MT_INGEST_THREAD [ID: 0x7000B2A3] -- RUNNING"
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 421,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = ProjectSchematic;
const skillsList = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Python',
    'Rust',
    'C Language',
    'C++',
    'FastAPI',
    'LangChain',
    'OpenAI API',
    'HNSW Graph',
    'Vector DB',
    'RAG Pipelines',
    'SQL Databases',
    'NoSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Git',
    'Linux',
    'Shell Scripting',
    'ETL Pipelines',
    'Scikit-Learn',
    'Pandas',
    'NumPy',
    'Multithreading',
    'Scapy',
    'Network Protocols'
];
const skills = Array.from(new Set(skillsList));
// Precompute static meta properties for tag styling to prevent repeated calculations per frame
const tagsMeta = skills.map((text)=>{
    const isBasicWeb = [
        'HTML',
        'CSS',
        'JavaScript'
    ].includes(text);
    const isFrontendWeb = [
        'React',
        'Next.js',
        'TypeScript'
    ].includes(text);
    const isBackendDB = [
        'Node.js',
        'FastAPI',
        'SQL Databases',
        'NoSQL',
        'MongoDB',
        'Redis'
    ].includes(text);
    const isAIML = [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-Learn',
        'LangChain',
        'OpenAI API',
        'HNSW Graph',
        'Vector DB',
        'RAG Pipelines',
        'ETL Pipelines'
    ].includes(text);
    const isSystemsDevOps = [
        'Rust',
        'C Language',
        'C++',
        'Docker',
        'Git',
        'Linux',
        'Shell Scripting',
        'Multithreading',
        'Scapy',
        'Network Protocols'
    ].includes(text);
    let activeColor = '#cbd5e1'; // Fallback Slate
    let activeBg = 'rgba(203, 213, 225, 0.05)';
    let activeBorder = '1px solid rgba(203, 213, 225, 0.25)';
    let activeGlow = 'none';
    if (isBasicWeb) {
        if (text === 'HTML') {
            activeColor = '#ff6d3b'; // Coral/Orange HTML
        } else if (text === 'CSS') {
            activeColor = '#ffb33b'; // Warm Yellow-Orange CSS
        } else {
            activeColor = '#f5e050'; // Bright Yellow JavaScript
        }
        const rgb = activeColor === '#ff6d3b' ? '255, 109, 59' : activeColor === '#ffb33b' ? '255, 179, 59' : '245, 224, 80';
        activeBg = `rgba(${rgb}, 0.05)`;
        activeBorder = `1px solid rgba(${rgb}, 0.25)`;
        activeGlow = `0 0 15px rgba(${rgb}, 0.15)`;
    } else if (isFrontendWeb) {
        if (text === 'React') {
            activeColor = '#58c4dc'; // React Cyan
        } else if (text === 'Next.js') {
            activeColor = '#a5f3fc'; // Bright Cyan-white
        } else {
            activeColor = '#3178c6'; // TypeScript Royal Blue
        }
        const rgb = activeColor === '#58c4dc' ? '88, 196, 220' : activeColor === '#a5f3fc' ? '165, 243, 252' : '49, 120, 198';
        activeBg = `rgba(${rgb}, 0.05)`;
        activeBorder = `1px solid rgba(${rgb}, 0.25)`;
        activeGlow = `0 0 15px rgba(${rgb}, 0.15)`;
    } else if (isBackendDB) {
        if (text === 'Redis') {
            activeColor = '#f87171'; // Redis Coral Red
        } else if (text === 'MongoDB') {
            activeColor = '#10b981'; // Mongo Emerald Green
        } else if (text === 'FastAPI') {
            activeColor = '#2dd4bf'; // Teal
        } else {
            activeColor = '#4ade80'; // Node/SQL Bright Green
        }
        const rgb = activeColor === '#f87171' ? '248, 113, 113' : activeColor === '#10b981' ? '16, 185, 129' : activeColor === '#2dd4bf' ? '45, 212, 191' : '74, 222, 128';
        activeBg = `rgba(${rgb}, 0.05)`;
        activeBorder = `1px solid rgba(${rgb}, 0.25)`;
        activeGlow = `0 0 15px rgba(${rgb}, 0.15)`;
    } else if (isAIML) {
        if (text === 'Python') {
            activeColor = '#60a5fa'; // Soft Sky Blue
        } else if (text === 'RAG Pipelines' || text === 'Vector DB') {
            activeColor = '#fb923c'; // Warm Orange
        } else {
            activeColor = 'var(--accent-amber, #ffb400)'; // Signature Amber
        }
        const rgb = activeColor === '#60a5fa' ? '96, 165, 250' : activeColor === '#fb923c' ? '251, 146, 60' : '255, 180, 0';
        activeBg = `rgba(${rgb}, 0.05)`;
        activeBorder = `1px solid rgba(${rgb}, 0.25)`;
        activeGlow = `0 0 15px rgba(${rgb}, 0.15)`;
    } else if (isSystemsDevOps) {
        if (text === 'Rust') {
            activeColor = '#ef4444'; // Crimson Rust
        } else if (text === 'Docker' || text === 'Git') {
            activeColor = '#818cf8'; // Soft Indigo
        } else if (text === 'Linux' || text === 'Shell Scripting') {
            activeColor = '#c084fc'; // Purple
        } else {
            activeColor = '#a78bfa'; // Lavender/Violet
        }
        const rgb = activeColor === '#ef4444' ? '239, 68, 68' : activeColor === '#818cf8' ? '129, 140, 248' : activeColor === '#c084fc' ? '192, 132, 252' : '167, 139, 250';
        activeBg = `rgba(${rgb}, 0.05)`;
        activeBorder = `1px solid rgba(${rgb}, 0.25)`;
        activeGlow = `0 0 15px rgba(${rgb}, 0.15)`;
    }
    return {
        text,
        activeColor,
        activeBg,
        activeBorder,
        activeGlow
    };
});
function TechSphere({ onHoverChange }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const dragStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Store coordinates in a mutable ref to bypass React state cycles
    const tagsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Store DOM references to update tag styles directly
    const elementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rotateSphere = (angX, angY)=>{
        if (tagsRef.current.length === 0) return;
        const cosX = Math.cos(angX);
        const sinX = Math.sin(angX);
        const cosY = Math.cos(angY);
        const sinY = Math.sin(angY);
        const radius = 130;
        const depth = 280;
        tagsRef.current.forEach((tag, idx)=>{
            const y1 = tag.y * cosX - tag.z * sinX;
            const z1 = tag.y * sinX + tag.z * cosX;
            const x2 = tag.x * cosY + z1 * sinY;
            const z2 = -tag.x * sinY + z1 * cosY;
            tag.x = x2;
            tag.y = y1;
            tag.z = z2;
            const el = elementsRef.current[idx];
            if (el) {
                const meta = tagsMeta[idx];
                const scale = (depth + tag.z) / depth;
                const left = 160 + tag.x * scale;
                const top = 160 + tag.y * scale;
                const opacity = (tag.z + radius) / (2 * radius) * 0.8 + 0.2;
                const zIndex = Math.round(tag.z + radius);
                const isFront = tag.z > 0;
                let blurAmount = 0;
                if (tag.z < -20) {
                    blurAmount = Math.min(2.5, (Math.abs(tag.z) - 20) * 0.015);
                }
                el.style.left = `${left}px`;
                el.style.top = `${top}px`;
                el.style.transform = `translate(-50%, -50%) scale(${scale})`;
                el.style.opacity = `${opacity}`;
                el.style.zIndex = `${zIndex}`;
                el.style.fontWeight = isFront ? '500' : '300';
                el.style.color = isFront ? meta.activeColor : 'rgba(245, 245, 245, 0.25)';
                el.style.pointerEvents = isFront ? 'auto' : 'none';
                el.style.background = isFront ? meta.activeBg : 'transparent';
                el.style.border = isFront ? meta.activeBorder : '1px solid transparent';
                el.style.boxShadow = isFront ? meta.activeGlow : 'none';
                el.style.filter = blurAmount > 0 ? `blur(${blurAmount}px)` : 'none';
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechSphere.useEffect": ()=>{
            const radius = 130;
            const N = skills.length;
            const initialTags = skills.map({
                "TechSphere.useEffect.initialTags": (text, i)=>{
                    const k = -1 + (2 * (i + 1) - 1) / N;
                    const phi = Math.acos(k);
                    const theta = Math.sqrt(N * Math.PI) * phi;
                    return {
                        text,
                        x: radius * Math.sin(phi) * Math.cos(theta),
                        y: radius * Math.sin(phi) * Math.sin(theta),
                        z: radius * Math.cos(phi)
                    };
                }
            }["TechSphere.useEffect.initialTags"]);
            tagsRef.current = initialTags;
            rotateSphere(0, 0);
        }
    }["TechSphere.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechSphere.useEffect": ()=>{
            let rafId;
            let angleX = 0.002;
            let angleY = 0.002;
            const update = {
                "TechSphere.useEffect.update": ()=>{
                    if (isDraggingRef.current) {
                        rafId = requestAnimationFrame(update);
                        return;
                    }
                    if (isHoveredRef.current) {
                        angleX = -mouseRef.current.y * 0.00004;
                        angleY = mouseRef.current.x * 0.00004;
                    } else {
                        angleX = angleX * 0.98 + 0.001 * 0.02;
                        angleY = angleY * 0.98 + 0.0015 * 0.02;
                    }
                    rotateSphere(angleX, angleY);
                    rafId = requestAnimationFrame(update);
                }
            }["TechSphere.useEffect.update"];
            rafId = requestAnimationFrame(update);
            return ({
                "TechSphere.useEffect": ()=>cancelAnimationFrame(rafId)
            })["TechSphere.useEffect"];
        }
    }["TechSphere.useEffect"], []);
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        isDraggingRef.current = true;
        dragStartRef.current = {
            x: e.clientX,
            y: e.clientY
        };
    };
    const handleMouseUp = ()=>{
        setIsDragging(false);
        isDraggingRef.current = false;
    };
    const handleTouchStart = (e)=>{
        isDraggingRef.current = true;
        setIsDragging(true);
        if (e.touches.length > 0) {
            dragStartRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
    };
    const handleTouchMove = (e)=>{
        if (!containerRef.current || e.touches.length === 0) return;
        const rect = containerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const clientX = e.touches[0].clientX;
        const clientY = e.touches[0].clientY;
        mouseRef.current = {
            x: clientX - cx,
            y: clientY - cy
        };
        if (isDraggingRef.current) {
            const deltaX = clientX - dragStartRef.current.x;
            const deltaY = clientY - dragStartRef.current.y;
            dragStartRef.current = {
                x: clientX,
                y: clientY
            };
            const dragFactor = 0.006;
            const angleXVal = -deltaY * dragFactor;
            const angleYVal = deltaX * dragFactor;
            rotateSphere(angleXVal, angleYVal);
        }
    };
    const handleMouseMove = (e)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseRef.current = {
            x: e.clientX - cx,
            y: e.clientY - cy
        };
        if (isDraggingRef.current) {
            const deltaX = e.clientX - dragStartRef.current.x;
            const deltaY = e.clientY - dragStartRef.current.y;
            dragStartRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            const dragFactor = 0.005;
            const angleXVal = -deltaY * dragFactor;
            const angleYVal = deltaX * dragFactor;
            rotateSphere(angleXVal, angleYVal);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onMouseMove: handleMouseMove,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseLeave: ()=>{
            isHoveredRef.current = false;
            onHoverChange(false);
            handleMouseUp();
        },
        onMouseEnter: ()=>{
            isHoveredRef.current = true;
            onHoverChange(true);
        },
        onTouchStart: (e)=>{
            onHoverChange(true);
            handleTouchStart(e);
        },
        onTouchMove: handleTouchMove,
        onTouchEnd: ()=>{
            onHoverChange(false);
            handleMouseUp();
        },
        onDragStart: (e)=>e.preventDefault(),
        style: {
            position: 'relative',
            width: '320px',
            height: '320px',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            touchAction: 'none'
        },
        children: skills.map((text, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: (el)=>{
                    elementsRef.current[idx] = el;
                },
                className: "sphere-tag",
                style: {
                    position: 'absolute',
                    fontSize: '0.72rem',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    padding: '0.2rem 0.5rem',
                    transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, filter 0.3s ease',
                    left: '160px',
                    top: '160px',
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                children: text
            }, idx, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 805,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 771,
        columnNumber: 5
    }, this);
}
_s(TechSphere, "BWMbQpxjQPi+EI6AiGc7G3Tx1Z0=");
_c1 = TechSphere;
function DynamicHUDVisualizer({ activeId }) {
    const getTheme = ()=>{
        switch(activeId){
            case 1:
                return {
                    color: '#ffb400',
                    rgb: '255, 180, 0',
                    label: 'CS_FOUNDATION_INDEX'
                };
            case 2:
                return {
                    color: '#ffb400',
                    rgb: '255, 180, 0',
                    label: 'COMPILER_SHELL_EXEC'
                };
            case 3:
                return {
                    color: '#58c4dc',
                    rgb: '88, 196, 220',
                    label: 'RELATIONAL_DB_SCHEMA'
                };
            case 4:
                return {
                    color: '#fb923c',
                    rgb: '251, 146, 60',
                    label: 'MODEL_REGRESSION_PLOT'
                };
            case 5:
                return {
                    color: '#10b981',
                    rgb: '16, 185, 129',
                    label: 'ETL_DATA_PIPELINE'
                };
            case 6:
                return {
                    color: '#ffb400',
                    rgb: '255, 180, 0',
                    label: 'VECTOR_SIMILARITY_RAG'
                };
            case 7:
                return {
                    color: '#a78bfa',
                    rgb: '167, 139, 250',
                    label: 'NEURAL_NET_CAPSTONE'
                };
            case 8:
                return {
                    color: '#ef4444',
                    rgb: '239, 68, 68',
                    label: 'RAW_PACKET_DPI_ENGINE'
                };
            default:
                return {
                    color: '#ffb400',
                    rgb: '255, 180, 0',
                    label: 'SYSTEM_SCHEMATIC'
                };
        }
    };
    const theme = getTheme();
    const getVisualizer = ()=>{
        switch(activeId){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes scanline {
                0% { transform: translateY(-100px); }
                100% { transform: translateY(100px); }
              }
              .binary-text {
                font-family: var(--font-jetbrains-mono, monospace);
                font-size: 6px;
                fill: rgba(255, 180, 0, 0.45);
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 855,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "20",
                            className: "binary-text",
                            children: "01010100 01000101"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 866,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "35",
                            className: "binary-text",
                            children: "01000011 01001000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "50",
                            className: "binary-text",
                            children: "01001111 01010010"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 868,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "65",
                            className: "binary-text",
                            children: "01000111 01001001"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 869,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "80",
                            className: "binary-text",
                            children: "01001110 01010011"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 870,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "200",
                            height: "100",
                            fill: "rgba(255,180,0,0.01)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 871,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "0",
                            x2: "200",
                            y2: "0",
                            stroke: "rgba(255,180,0,0.3)",
                            strokeWidth: "1",
                            style: {
                                animation: 'scanline 3s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 872,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 854,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes blink-cursor {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
              }
              .shell-text {
                font-family: var(--font-jetbrains-mono, monospace);
                font-size: 6px;
                fill: #ffffff;
              }
              .prompt-symbol {
                fill: var(--accent-amber, #ffb400);
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "25",
                            className: "shell-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                    className: "prompt-symbol",
                                    children: "guest@system:~$"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 892,
                                    columnNumber: 56
                                }, this),
                                " gcc engine.c -o out"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 892,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "42",
                            className: "shell-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                    className: "prompt-symbol",
                                    children: "guest@system:~$"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 893,
                                    columnNumber: 56
                                }, this),
                                " ./out"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 893,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "58",
                            className: "shell-text",
                            fill: "var(--accent-amber, #ffb400)",
                            children: ">> STACK CORE LOADED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 894,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "10",
                            y: "75",
                            className: "shell-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                    className: "prompt-symbol",
                                    children: "guest@system:~$"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 895,
                                    columnNumber: 56
                                }, this),
                                " _"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 895,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "73",
                            y: "69",
                            width: "3",
                            height: "6",
                            fill: "#ffb400",
                            style: {
                                animation: 'blink-cursor 0.8s infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 896,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 877,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes pulse-node {
                0%, 100% { r: 3px; opacity: 0.4; }
                50% { r: 5px; opacity: 1; }
              }
              @keyframes dash {
                to { stroke-dashoffset: -20; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 902,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "50",
                            r: "4",
                            fill: "#58c4dc",
                            style: {
                                animation: 'pulse-node 1.5s infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 911,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "25",
                            r: "4",
                            fill: "#a5f3fc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 912,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "75",
                            r: "4",
                            fill: "#a5f3fc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 913,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "150",
                            cy: "50",
                            r: "4",
                            fill: "#58c4dc",
                            style: {
                                animation: 'pulse-node 1.5s infinite 0.75s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 914,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "50",
                            x2: "100",
                            y2: "25",
                            stroke: "rgba(88,196,220,0.3)",
                            strokeWidth: "1",
                            strokeDasharray: "4",
                            style: {
                                animation: 'dash 1s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 915,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "50",
                            x2: "100",
                            y2: "75",
                            stroke: "rgba(88,196,220,0.3)",
                            strokeWidth: "1",
                            strokeDasharray: "4",
                            style: {
                                animation: 'dash 1s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 916,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "25",
                            x2: "150",
                            y2: "50",
                            stroke: "rgba(245,245,245,0.2)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 917,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "75",
                            x2: "150",
                            y2: "50",
                            stroke: "rgba(245,245,245,0.2)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 918,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "100",
                            y: "16",
                            fill: "rgba(245,245,245,0.4)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "CLIENT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 919,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "100",
                            y: "90",
                            fill: "rgba(245,245,245,0.4)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "DATABASE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 920,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 901,
                    columnNumber: 11
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes draw-line {
                to { stroke-dashoffset: 0; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 926,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "80",
                            x2: "180",
                            y2: "80",
                            stroke: "rgba(245,245,245,0.1)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 931,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "20",
                            x2: "20",
                            y2: "80",
                            stroke: "rgba(245,245,245,0.1)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 932,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "70",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 933,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "55",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 934,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "80",
                            cy: "62",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 935,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "45",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 936,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "120",
                            cy: "38",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 937,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "42",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 938,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "160",
                            cy: "25",
                            r: "2.5",
                            fill: "#fb923c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 939,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: "75",
                            x2: "170",
                            y2: "22",
                            stroke: "#60a5fa",
                            strokeWidth: "1.5",
                            strokeDasharray: "200",
                            strokeDashoffset: "200",
                            style: {
                                animation: 'draw-line 2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 940,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "75",
                            fill: "rgba(245,245,245,0.3)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "end",
                            children: "R² = 0.942"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 941,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 925,
                    columnNumber: 11
                }, this);
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes etl-flow {
                0% { stroke-dashoffset: 20; }
                100% { stroke-dashoffset: 0; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 947,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "25",
                            y: "35",
                            width: "40",
                            height: "30",
                            rx: "3",
                            fill: "none",
                            stroke: "rgba(245,245,245,0.15)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 953,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "135",
                            y: "35",
                            width: "40",
                            height: "30",
                            rx: "3",
                            fill: "none",
                            stroke: "rgba(245,245,245,0.15)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 954,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 65 50 L 135 50",
                            stroke: "#10b981",
                            strokeWidth: "1.5",
                            strokeDasharray: "6 4",
                            style: {
                                animation: 'etl-flow 0.8s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 955,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "50",
                            r: "6",
                            fill: "#10b981"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 956,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "45",
                            y: "52",
                            fill: "rgba(245,245,245,0.5)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "6",
                            textAnchor: "middle",
                            children: "IN"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 957,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "155",
                            y: "52",
                            fill: "rgba(245,245,245,0.5)",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "6",
                            textAnchor: "middle",
                            children: "OUT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 958,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "100",
                            y: "24",
                            fill: "#10b981",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "FILTER NODE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 959,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 946,
                    columnNumber: 11
                }, this);
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes pulse-ring {
                0% { r: 5px; opacity: 1; }
                100% { r: 25px; opacity: 0; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 965,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "50",
                            r: "3",
                            fill: "#ffb400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 971,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "50",
                            r: "5",
                            fill: "none",
                            stroke: "#ffb400",
                            strokeWidth: "0.75",
                            style: {
                                animation: 'pulse-ring 2s cubic-bezier(0.16, 1, 0.3, 1) infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 972,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "85",
                            cy: "40",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.4)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 973,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "118",
                            cy: "62",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.4)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 974,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "112",
                            cy: "38",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.4)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 975,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "92",
                            cy: "65",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.4)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 976,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "70",
                            cy: "55",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.15)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 977,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "130",
                            cy: "45",
                            r: "1.5",
                            fill: "rgba(245,245,245,0.15)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 978,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "50",
                            x2: "85",
                            y2: "40",
                            stroke: "rgba(255,180,0,0.3)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 979,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "50",
                            x2: "118",
                            y2: "62",
                            stroke: "rgba(255,180,0,0.3)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 980,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "50",
                            x2: "112",
                            y2: "38",
                            stroke: "rgba(255,180,0,0.3)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 981,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "50",
                            x2: "92",
                            y2: "65",
                            stroke: "rgba(255,180,0,0.3)",
                            strokeWidth: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 982,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "100",
                            y: "85",
                            fill: "#ffb400",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "COSINE SIMILARITY CORE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 983,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 964,
                    columnNumber: 11
                }, this);
            case 7:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes neuro-pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.95; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 989,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "25",
                            r: "3.5",
                            fill: "#f5f5f5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 995,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "50",
                            r: "3.5",
                            fill: "#f5f5f5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 996,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "75",
                            r: "3.5",
                            fill: "#f5f5f5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 997,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "20",
                            r: "3.5",
                            fill: "#c084fc",
                            style: {
                                animation: 'neuro-pulse 2s infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 998,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "40",
                            r: "3.5",
                            fill: "#c084fc",
                            style: {
                                animation: 'neuro-pulse 2s infinite 0.5s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 999,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "60",
                            r: "3.5",
                            fill: "#c084fc",
                            style: {
                                animation: 'neuro-pulse 2s infinite 1s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1000,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "80",
                            r: "3.5",
                            fill: "#c084fc",
                            style: {
                                animation: 'neuro-pulse 2s infinite 1.5s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1001,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "160",
                            cy: "50",
                            r: "4.5",
                            fill: "#a78bfa"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1002,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 25 L 100 20 M 40 25 L 100 40 M 40 50 L 100 40 M 40 50 L 100 60 M 40 75 L 100 60 M 40 75 L 100 80",
                            stroke: "rgba(245,245,245,0.08)",
                            strokeWidth: "0.75"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1003,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 100 20 L 160 50 M 100 40 L 160 50 M 100 60 L 160 50 M 100 80 L 160 50",
                            stroke: "rgba(192,132,252,0.15)",
                            strokeWidth: "0.75"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1004,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "38",
                            fill: "#a78bfa",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "OUTPUT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1005,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 988,
                    columnNumber: 11
                }, this);
            case 8:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 200 100",
                    className: "hud-svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
              @keyframes sniffer-wave {
                0% { stroke-dashoffset: 40; }
                100% { stroke-dashoffset: 0; }
              }
            `
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1011,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 20 50 Q 40 20, 60 50 T 100 50 T 140 50 T 180 50",
                            fill: "none",
                            stroke: "rgba(239,68,68,0.15)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1017,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 20 50 Q 40 10, 60 50 T 100 50 T 140 50 T 180 50",
                            fill: "none",
                            stroke: "#ef4444",
                            strokeWidth: "1.5",
                            strokeDasharray: "8 6",
                            style: {
                                animation: 'sniffer-wave 1.5s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1018,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "100",
                            cy: "50",
                            r: "4.5",
                            fill: "#ef4444"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1019,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "50",
                            r: "3",
                            fill: "#cbd5e1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1020,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "140",
                            cy: "50",
                            r: "3",
                            fill: "#cbd5e1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1021,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "100",
                            y: "85",
                            fill: "#ef4444",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "5.5",
                            textAnchor: "middle",
                            children: "RAW PACKET STREAM / C INGEST"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 1022,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 1010,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hud-visualizer-card animate-on-scroll",
        style: {
            borderColor: `rgba(${theme.rgb}, 0.12)`,
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(${theme.rgb}, 0.03)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-visualizer-header",
                style: {
                    borderBottomColor: `rgba(${theme.rgb}, 0.08)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hud-indicator",
                        style: {
                            color: `rgba(${theme.rgb}, 0.5)`
                        },
                        children: [
                            "// ",
                            theme.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 1039,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hud-status-dot",
                        style: {
                            backgroundColor: theme.color,
                            boxShadow: `0 0 8px ${theme.color}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 1040,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 1038,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-visualizer-body",
                style: {
                    borderColor: `rgba(${theme.rgb}, 0.06)`
                },
                children: getVisualizer()
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 1042,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 1031,
        columnNumber: 5
    }, this);
}
_c2 = DynamicHUDVisualizer;
function AboutSection() {
    _s1();
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2022');
    const [activeCardId, setActiveCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [expandedCardId, setExpandedCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSectionInView, setIsSectionInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHoveringSphere, setIsHoveringSphere] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    // Auto-scroll snapping disabled to prevent scroll hijacking
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
                        lineNumber: 1165,
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
                                                        lineNumber: 1202,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--accent-amber, #ffb400)'
                                                        },
                                                        children: "THINGS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1203,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1204,
                                                        columnNumber: 17
                                                    }, this),
                                                    "THAT MATTER."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 1188,
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
                                                            fontWeight: 300,
                                                            fontSize: '1.1rem',
                                                            lineHeight: 1.8,
                                                            color: 'var(--text-dim, rgba(245,245,245,0.5))',
                                                            marginBottom: '1.5rem'
                                                        },
                                                        children: "I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontWeight: 300,
                                                            fontSize: '1.1rem',
                                                            lineHeight: 1.8,
                                                            color: 'var(--text-dim, rgba(245,245,245,0.5))',
                                                            marginBottom: '2rem'
                                                        },
                                                        children: "From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "about-tech-sphere-container",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sphere-hud-label",
                                                                children: "// DRAG & ORBIT TECHNICAL CORE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sphere-holo-backdrop",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 400 400",
                                                                    className: "holo-svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "200",
                                                                            cy: "200",
                                                                            r: "180",
                                                                            stroke: "rgba(255, 180, 0, 0.02)",
                                                                            strokeWidth: "1",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1244,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "200",
                                                                            cy: "200",
                                                                            r: "150",
                                                                            stroke: "rgba(255, 180, 0, 0.03)",
                                                                            strokeWidth: "1",
                                                                            strokeDasharray: "6 30",
                                                                            fill: "none",
                                                                            className: "rotate-clockwise",
                                                                            style: {
                                                                                transformOrigin: '200px 200px'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1245,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "200",
                                                                            cy: "200",
                                                                            r: "130",
                                                                            stroke: "rgba(245, 245, 245, 0.02)",
                                                                            strokeWidth: "1",
                                                                            strokeDasharray: "40 120",
                                                                            fill: "none",
                                                                            className: "rotate-counter-clockwise",
                                                                            style: {
                                                                                transformOrigin: '200px 200px'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1246,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "200",
                                                                            cy: "200",
                                                                            r: "100",
                                                                            stroke: "rgba(255, 180, 0, 0.04)",
                                                                            strokeWidth: "0.5",
                                                                            strokeDasharray: "2 6",
                                                                            fill: "none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1247,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "200",
                                                                            y1: "10",
                                                                            x2: "200",
                                                                            y2: "390",
                                                                            stroke: "rgba(245, 245, 245, 0.015)",
                                                                            strokeWidth: "0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1249,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "10",
                                                                            y1: "200",
                                                                            x2: "390",
                                                                            y2: "200",
                                                                            stroke: "rgba(245, 245, 245, 0.015)",
                                                                            strokeWidth: "0.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1250,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M 180 200 A 20 20 0 0 1 220 200",
                                                                            fill: "none",
                                                                            stroke: "rgba(255, 180, 0, 0.15)",
                                                                            strokeWidth: "0.75"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1252,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M 200 180 A 20 20 0 0 1 200 220",
                                                                            fill: "none",
                                                                            stroke: "rgba(255, 180, 0, 0.15)",
                                                                            strokeWidth: "0.75"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1253,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "200",
                                                                            y1: "20",
                                                                            x2: "200",
                                                                            y2: "28",
                                                                            stroke: "rgba(255, 180, 0, 0.3)",
                                                                            strokeWidth: "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1256,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "200",
                                                                            y1: "380",
                                                                            x2: "200",
                                                                            y2: "372",
                                                                            stroke: "rgba(255, 180, 0, 0.3)",
                                                                            strokeWidth: "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1257,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "20",
                                                                            y1: "200",
                                                                            x2: "28",
                                                                            y2: "200",
                                                                            stroke: "rgba(255, 180, 0, 0.3)",
                                                                            strokeWidth: "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1258,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "380",
                                                                            y1: "200",
                                                                            x2: "372",
                                                                            y2: "200",
                                                                            stroke: "rgba(255, 180, 0, 0.3)",
                                                                            strokeWidth: "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1259,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "210",
                                                                            y: "35",
                                                                            fill: "rgba(255, 180, 0, 0.25)",
                                                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                                                            fontSize: "6",
                                                                            children: "ROTATION: ACTIVE"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1262,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                            x: "210",
                                                                            y: "375",
                                                                            fill: "rgba(245, 245, 245, 0.15)",
                                                                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                                                                            fontSize: "6",
                                                                            children: "LOC: 19.0760° N"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                                            lineNumber: 1263,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 1243,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1242,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechSphere, {
                                                                onHoverChange: setIsHoveringSphere
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1266,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 1208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 1187,
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
                                        lineNumber: 1272,
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mobile-year-badge",
                                                                children: event.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1306,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `timeline-dot ${isActive ? 'active' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1311,
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
                                                                        lineNumber: 1314,
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
                                                                        lineNumber: 1317,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1313,
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
                                                                        lineNumber: 1323,
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
                                                                        lineNumber: 1328,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                                lineNumber: 1322,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline-card-expandable-panel",
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
                                                                    lineNumber: 1354,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSchematic, {
                                                                    id: event.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 1359,
                                                                    columnNumber: 25
                                                                }, this),
                                                                event.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "timeline-card-details",
                                                                    children: event.details
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 1362,
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
                                                                            lineNumber: 1370,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                                    lineNumber: 1368,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AboutSection.tsx",
                                                            lineNumber: 1353,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.tsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, event.id, true, {
                                                fileName: "[project]/src/components/AboutSection.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.tsx",
                                        lineNumber: 1290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 1185,
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
                                            lineNumber: 1398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timeline-year-display",
                                            children: activeYear
                                        }, activeYear, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 1399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicHUDVisualizer, {
                                            activeId: activeCardId
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 1404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sticky-year-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// 19.0760° N, 72.8777° E"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// CORE_SYSTEM_INDEXING: ACTIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 1408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// INDEX: HNSW_INDEX_FOUND"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AboutSection.tsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AboutSection.tsx",
                                            lineNumber: 1406,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AboutSection.tsx",
                                    lineNumber: 1397,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutSection.tsx",
                                lineNumber: 1396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 1183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 1163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .about-tech-sphere-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          padding: 2.5rem 1rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          width: 100%;
          user-select: none;
        }

        .sphere-holo-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .holo-svg {
          width: 100%;
          height: 100%;
        }

        @keyframes cwSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ccwSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .rotate-clockwise {
          animation: cwSpin 30s linear infinite;
        }
        .rotate-counter-clockwise {
          animation: ccwSpin 20s linear infinite;
        }

        /* High-tech sci-fi corner brackets for expanded cards */
        .timeline-card.expanded::before,
        .timeline-card.expanded::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(245, 245, 245, 0.2);
          border-style: solid;
          pointer-events: none;
          transition: border-color 0.4s ease;
        }
        .timeline-card.expanded::before {
          top: 8px;
          left: 8px;
          border-width: 1px 0 0 1px;
        }
        .timeline-card.expanded::after {
          bottom: 8px;
          right: 8px;
          border-width: 0 1px 1px 0;
        }
        .timeline-card.active.expanded::before,
        .timeline-card.active.expanded::after {
          border-color: var(--accent-amber, #ffb400);
        }

        .sphere-hud-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.2);
          text-transform: uppercase;
          margin-bottom: 2rem;
          pointer-events: none;
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
          display: grid;
          grid-template-rows: auto 0fr;
          overflow: hidden;
          transition: 
            grid-template-rows 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.expanded {
          opacity: 1;
          transform: scale(1);
          grid-template-rows: auto 1fr;
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

        /* Inner Expandable Panel Transition */
        .timeline-card-expandable-panel {
          min-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.96) translateY(5px);
          transition: 
            opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center top;
        }

        .timeline-card.expanded .timeline-card-expandable-panel {
          opacity: 1;
          transform: scale(1) translateY(0);
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

        .hud-visualizer-card {
          margin-top: 2rem;
          width: 280px;
          background: rgba(245, 245, 245, 0.015);
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 6px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02);
          transform: translateX(-15px);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .hud-visualizer-card:hover {
          border-color: rgba(255, 180, 0, 0.15);
          box-shadow: 0 25px 60px rgba(255, 180, 0, 0.02), 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .hud-visualizer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 245, 245, 0.05);
          padding-bottom: 0.5rem;
        }

        .hud-indicator {
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: rgba(245, 245, 245, 0.3);
          text-transform: uppercase;
        }

        .hud-status-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00ff66;
          box-shadow: 0 0 8px #00ff66;
          animation: pulse-dot 1s infinite alternate;
        }

        @keyframes pulse-dot {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .hud-visualizer-body {
          width: 100%;
          height: 120px;
          background: #070707;
          border: 1px solid rgba(245, 245, 245, 0.02);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hud-svg {
          width: 100%;
          height: 100%;
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
                lineNumber: 1416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 1150,
        columnNumber: 5
    }, this);
}
_s1(AboutSection, "2GxmLgvXrP5tLMfY2dddTbm7IIM=");
_c3 = AboutSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ProjectSchematic");
__turbopack_context__.k.register(_c1, "TechSphere");
__turbopack_context__.k.register(_c2, "DynamicHUDVisualizer");
__turbopack_context__.k.register(_c3, "AboutSection");
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
                background: '#090909',
                border: '1px solid rgba(255,180,0,0.15)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                cursor: 'crosshair',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes glowPulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(255,180,0,0.4)); opacity: 0.8; }
            50% { filter: drop-shadow(0 0 10px rgba(255,180,0,0.9)); opacity: 1; }
          }
          .active-node-glow { animation: glowPulse 2s infinite ease-in-out; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255,180,0,0.03)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "20",
                            x2: "400",
                            y2: "20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "400",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "65",
                            x2: "400",
                            y2: "65"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "90",
                            x2: "400",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "115",
                            x2: "400",
                            y2: "115"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "140",
                            x2: "400",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "0",
                            x2: "50",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "0",
                            x2: "100",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "150",
                            y1: "0",
                            x2: "150",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "0",
                            x2: "200",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "250",
                            y1: "0",
                            x2: "250",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "0",
                            x2: "300",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "350",
                            y1: "0",
                            x2: "350",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "390",
                    y: "43",
                    fill: "rgba(255,180,0,0.15)",
                    fontFamily: "monospace",
                    fontSize: "5.5",
                    textAnchor: "end",
                    children: "LAYER_2 (COARSE)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "390",
                    y: "93",
                    fill: "rgba(255,180,0,0.15)",
                    fontFamily: "monospace",
                    fontSize: "5.5",
                    textAnchor: "end",
                    children: "LAYER_1 (INTER)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "390",
                    y: "143",
                    fill: "rgba(255,180,0,0.15)",
                    fontFamily: "monospace",
                    fontSize: "5.5",
                    textAnchor: "end",
                    children: "LAYER_0 (FINE)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 341,
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
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "200",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "40",
                            x2: "200",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "40",
                            x2: "330",
                            y2: "90"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "50",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "150",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "150",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "250",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "330",
                            y1: "90",
                            x2: "250",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "330",
                            y1: "90",
                            x2: "350",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "40",
                            x2: "300",
                            y2: "40",
                            strokeDasharray: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "90",
                            x2: "200",
                            y2: "90",
                            strokeDasharray: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "90",
                            x2: "330",
                            y2: "90",
                            strokeDasharray: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this),
                mousePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "var(--accent-amber, #ffb400)",
                    strokeWidth: "1.5",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: activeE.x,
                            y1: activeE.y,
                            x2: activeH.x,
                            y2: activeH.y,
                            style: {
                                filter: 'drop-shadow(0 0 4px rgba(255,180,0,0.6))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: activeH.x,
                            y1: activeH.y,
                            x2: activeG.x,
                            y2: activeG.y,
                            style: {
                                filter: 'drop-shadow(0 0 4px rgba(255,180,0,0.6))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 367,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "100",
                    cy: "40",
                    r: "7",
                    fill: activeE.label === 'E1' ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeE.label === 'E1' ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeE.label === 'E1' ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "300",
                    cy: "40",
                    r: "7",
                    fill: activeE.label === 'E2' ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeE.label === 'E2' ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeE.label === 'E2' ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "70",
                    cy: "90",
                    r: "6",
                    fill: activeH.label === 'H1' ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeH.label === 'H1' ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeH.label === 'H1' ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "200",
                    cy: "90",
                    r: "6",
                    fill: activeH.label === 'H2' ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeH.label === 'H2' ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeH.label === 'H2' ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "330",
                    cy: "90",
                    r: "6",
                    fill: activeH.label === 'H3' ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeH.label === 'H3' ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeH.label === 'H3' ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "140",
                    r: "5",
                    fill: activeG.id === 1 ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeG.id === 1 ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeG.id === 1 ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "150",
                    cy: "140",
                    r: "5",
                    fill: activeG.id === 2 ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeG.id === 2 ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeG.id === 2 ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "250",
                    cy: "140",
                    r: "5",
                    fill: activeG.id === 3 ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeG.id === 3 ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeG.id === 3 ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "350",
                    cy: "140",
                    r: "5",
                    fill: activeG.id === 4 ? 'var(--accent-amber, #ffb400)' : '#181818',
                    stroke: activeG.id === 4 ? '#ffb400' : 'rgba(255,255,255,0.1)',
                    strokeWidth: "1",
                    className: activeG.id === 4 ? 'active-node-glow' : ''
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                mousePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: mousePos.x,
                            y1: "0",
                            x2: mousePos.x,
                            y2: "180",
                            stroke: "rgba(255,180,0,0.18)",
                            strokeWidth: "0.75",
                            strokeDasharray: "3 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: mousePos.y,
                            x2: "400",
                            y2: mousePos.y,
                            stroke: "rgba(255,180,0,0.18)",
                            strokeWidth: "0.75",
                            strokeDasharray: "3 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 393,
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
                            lineNumber: 394,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "22",
                    fill: "rgba(255,180,0,0.45)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    letterSpacing: "0.05em",
                    children: "HNSW INDEX TRAVERSAL CONSOLE [MOVE CURSOR]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "22",
                    fill: "rgba(245,245,245,0.2)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "NURO_INDEX: ACTIVE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "160",
                    width: "400",
                    height: "20",
                    fill: "#050505",
                    opacity: "0.95"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "0",
                    y1: "160",
                    x2: "400",
                    y2: "160",
                    stroke: "rgba(255,255,255,0.05)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                mousePos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "173",
                    fill: "var(--accent-amber, #ffb400)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: [
                        "SEARCH_VEC: [",
                        Math.round(mousePos.x),
                        ", ",
                        Math.round(mousePos.y),
                        "] // PATH: ",
                        activeE.label,
                        " ➔ ",
                        activeH.label,
                        " ➔ ",
                        activeG.label,
                        " // SIMILARITY: ",
                        sim.toFixed(4)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 406,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "173",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: "HOVER GRAPH TO RUN NEAREST-NEIGHBOR HNSW INDEXING"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 410,
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
                background: '#090909',
                border: '1px solid rgba(239,68,68,0.15)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes pulseDpiNode { 0%, 100% { fill: rgba(239,68,68,0.08); stroke: rgba(239,68,68,0.3); } 50% { fill: rgba(239,68,68,0.2); stroke: rgba(239,68,68,0.85); } }
          @keyframes packetDash { to { stroke-dashoffset: -20; } }
          .queue-node { animation: pulseDpiNode 2s infinite ease-in-out; }
          .dpi-stream-dash { stroke-dasharray: 6 3; animation: packetDash 0.8s linear infinite; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(239,68,68,0.02)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "400",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "80",
                            x2: "400",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "120",
                            x2: "400",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "0",
                            x2: "100",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "0",
                            x2: "200",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "0",
                            x2: "300",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(239,68,68,0.2)",
                    strokeWidth: "1",
                    fill: "rgba(239,68,68,0.01)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "25",
                            y: "45",
                            width: "70",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "155",
                            y: "45",
                            width: "90",
                            height: "35",
                            rx: "3",
                            className: "queue-node"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "305",
                            y: "45",
                            width: "70",
                            height: "35",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 95 62 L 155 62",
                    stroke: "#ef4444",
                    strokeWidth: "1.5",
                    className: "dpi-stream-dash"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 245 62 L 305 62",
                    stroke: "#ef4444",
                    strokeWidth: "1.5",
                    className: "dpi-stream-dash"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "66",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "LIBPCAP"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "200",
                    y: "66",
                    fill: "#ef4444",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "RING_BUFFER"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "340",
                    y: "66",
                    fill: "#f5f5f5",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    children: "TLS_SNI"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                packets.map((p)=>{
                    let px = 60;
                    if (p.progress < 50) {
                        px = 60 + p.progress / 50 * 95;
                    } else {
                        px = 155 + (p.progress - 50) / 50 * 150;
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: px,
                        cy: "62",
                        r: "4.5",
                        fill: p.type === 'TLS' ? '#ef4444' : '#f5f5f5',
                        style: {
                            filter: 'drop-shadow(0 0 4px #ef4444)'
                        }
                    }, p.id, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 466,
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
                            y: "98",
                            width: "120",
                            height: "22",
                            rx: "3",
                            fill: "#111",
                            stroke: "#ef4444",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "200",
                            y: "112",
                            fill: "#ef4444",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "8",
                            fontWeight: "bold",
                            textAnchor: "middle",
                            children: "[ INJECT PACKET ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "25",
                    y: "132",
                    width: "350",
                    height: "36",
                    fill: "#050505",
                    stroke: "rgba(239,68,68,0.06)",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "35",
                    y: "144",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: dpiLogs[1]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "35",
                    y: "157",
                    fill: "#ef4444",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    fontWeight: "bold",
                    children: dpiLogs[0]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "22",
                    fill: "rgba(239,68,68,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "DPI PACKET PARSING CORE [CLICK INJECT]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "385",
                    y: "22",
                    fill: "rgba(245,245,245,0.25)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    textAnchor: "end",
                    children: "CAPTURING"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 419,
            columnNumber: 7
        }, this);
    }
    if (id === '03') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#090909',
                border: '1px solid rgba(88,196,220,0.15)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes glowCyanCard {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(88,196,220,0.2)); }
            50% { filter: drop-shadow(0 0 10px rgba(88,196,220,0.6)); }
          }
          .cyan-card-glow { animation: glowCyanCard 2s infinite ease-in-out; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "35",
                    width: "360",
                    height: "18",
                    rx: "2",
                    fill: "#111",
                    stroke: "rgba(88,196,220,0.1)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "32",
                    y: "46",
                    fill: hoveredCard ? '#58c4dc' : 'rgba(245,245,245,0.3)',
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7.5",
                    style: {
                        transition: 'color 0.3s ease',
                        fontWeight: hoveredCard ? 'bold' : 'normal'
                    },
                    children: [
                        hoveredCard === 'left' && 'MATCH: "SPIDERMAN: INTO THE MULTIVERSE" (REDIS_CACHE)',
                        hoveredCard === 'middle' && 'MATCH: "ATTACK ON TITAN: SEASON 4" (JIKAN_API_FETCH)',
                        hoveredCard === 'right' && 'MATCH: "THE DARK KNIGHT" (TMDB_V3_DB)',
                        !hoveredCard && 'HOVER DISCOVERY CARDS FOR MEDIA GRAPH FETCH...'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 517,
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
                                    fill: hoveredCard === 'left' ? 'rgba(88,196,220,0.03)' : '#111',
                                    stroke: hoveredCard === 'left' ? '#58c4dc' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    },
                                    className: hoveredCard === 'left' ? 'cyan-card-glow' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "35",
                                    y: "75",
                                    width: "75",
                                    height: "40",
                                    fill: "none",
                                    stroke: hoveredCard === 'left' ? 'rgba(88,196,220,0.3)' : 'rgba(245,245,245,0.08)',
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "67,88 67,102 79,95",
                                    fill: hoveredCard === 'left' ? '#58c4dc' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "72",
                                    y: "132",
                                    fill: hoveredCard === 'left' ? '#58c4dc' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "01 / SCI-FI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 527,
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
                                    fill: hoveredCard === 'middle' ? 'rgba(88,196,220,0.03)' : '#111',
                                    stroke: hoveredCard === 'middle' ? '#58c4dc' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    },
                                    className: hoveredCard === 'middle' ? 'cyan-card-glow' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "162",
                                    y: "75",
                                    width: "75",
                                    height: "40",
                                    fill: "none",
                                    stroke: hoveredCard === 'middle' ? 'rgba(88,196,220,0.3)' : 'rgba(245,245,245,0.08)',
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "194,88 194,102 206,95",
                                    fill: hoveredCard === 'middle' ? '#58c4dc' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "200",
                                    y: "132",
                                    fill: hoveredCard === 'middle' ? '#58c4dc' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "02 / ANIME"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 568,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 550,
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
                                    fill: hoveredCard === 'right' ? 'rgba(88,196,220,0.03)' : '#111',
                                    stroke: hoveredCard === 'right' ? '#58c4dc' : 'rgba(245,245,245,0.06)',
                                    strokeWidth: "1",
                                    style: {
                                        transition: 'all 0.3s ease'
                                    },
                                    className: hoveredCard === 'right' ? 'cyan-card-glow' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "290",
                                    y: "75",
                                    width: "75",
                                    height: "40",
                                    fill: "none",
                                    stroke: hoveredCard === 'right' ? 'rgba(88,196,220,0.3)' : 'rgba(245,245,245,0.08)',
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "322,88 322,102 334,95",
                                    fill: hoveredCard === 'right' ? '#58c4dc' : 'rgba(245,245,245,0.2)',
                                    style: {
                                        transition: 'fill 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "327",
                                    y: "132",
                                    fill: hoveredCard === 'right' ? '#58c4dc' : 'rgba(245,245,245,0.4)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7",
                                    textAnchor: "middle",
                                    style: {
                                        transition: 'color 0.3s ease'
                                    },
                                    children: "03 / ACTION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "160",
                    width: "400",
                    height: "20",
                    fill: "#050505"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 595,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "0",
                    y1: "160",
                    x2: "400",
                    y2: "160",
                    stroke: "rgba(255,255,255,0.05)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "173",
                    fill: hoveredCard ? '#58c4dc' : 'rgba(245,245,245,0.4)',
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: [
                        hoveredCard === 'left' && 'API_DISCOVERY: REDIS_CACHE HIT // LATENCY: 3ms // STATS: CACHE_HEALTH_100%',
                        hoveredCard === 'middle' && 'API_DISCOVERY: JIKAN_V4 ROUTE // LATENCY: 220ms // REST_PAYLOAD: 42KB',
                        hoveredCard === 'right' && 'API_DISCOVERY: TMDB_V3 ROUTE // LATENCY: 140ms // MATCH_CONFIDENCE: 98%',
                        !hoveredCard && 'DISCOVERY_ROUTING: SERVICE LISTENING // REDIS KEY_SPACER: STANDBY'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 597,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "22",
                    fill: "rgba(88,196,220,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "IMMERSIVE MEDIA CATALOG GATEWAY [HOVER CARDS]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 502,
            columnNumber: 7
        }, this);
    }
    if (id === '04') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#090909',
                border: '1px solid rgba(16,185,129,0.15)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes chartPulse { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.35; } }
          .chart-area { animation: chartPulse 3s infinite ease-in-out; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(16,185,129,0.02)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "40",
                            x2: "360",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 622,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "80",
                            x2: "360",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "120",
                            x2: "360",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "120",
                            y1: "20",
                            x2: "120",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 625,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "20",
                            x2: "200",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "280",
                            y1: "20",
                            x2: "280",
                            y2: "140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 621,
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
                    lineNumber: 629,
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
                    lineNumber: 630,
                    columnNumber: 9
                }, this),
                activeMode === 'SAVE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 L 100 115 L 180 100 L 260 88 L 340 75 L 340 140 L 40 140 Z",
                            fill: "rgba(16,185,129,0.03)",
                            className: "chart-area"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 635,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 L 100 115 L 180 100 L 260 88 L 340 75",
                            fill: "none",
                            stroke: "#10b981",
                            strokeWidth: "2.5",
                            style: {
                                transition: 'all 0.5s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                activeMode === 'BALANCE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 Q 90 110 140 90 T 240 60 T 340 30 L 340 140 L 40 140 Z",
                            fill: "rgba(16,185,129,0.03)",
                            className: "chart-area"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 Q 90 110 140 90 T 240 60 T 340 30",
                            fill: "none",
                            stroke: "#10b981",
                            strokeWidth: "2.5",
                            style: {
                                transition: 'all 0.5s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 642,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                activeMode === 'INVEST' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 Q 90 125 140 120 T 240 70 T 340 15 L 340 140 L 40 140 Z",
                            fill: "rgba(16,185,129,0.03)",
                            className: "chart-area"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 647,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 130 Q 90 125 140 120 T 240 70 T 340 15",
                            fill: "none",
                            stroke: "#10b981",
                            strokeWidth: "2.5",
                            style: {
                                transition: 'all 0.5s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 648,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: activeMode === 'SAVE' ? 75 : activeMode === 'BALANCE' ? 30 : 15,
                    r: "4.5",
                    fill: "#10b981",
                    style: {
                        filter: 'drop-shadow(0 0 5px #10b981)',
                        transition: 'cy 0.5s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 653,
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
                                    fill: activeMode === 'SAVE' ? '#10b981' : '#111',
                                    stroke: "rgba(16,185,129,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "107.5",
                                    y: "160",
                                    fill: activeMode === 'SAVE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "SAVINGS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 666,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 664,
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
                                    fill: activeMode === 'BALANCE' ? '#10b981' : '#111',
                                    stroke: "rgba(16,185,129,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "192.5",
                                    y: "160",
                                    fill: activeMode === 'BALANCE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "BALANCED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 672,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 670,
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
                                    fill: activeMode === 'INVEST' ? '#10b981' : '#111',
                                    stroke: "rgba(16,185,129,0.2)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 677,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "282.5",
                                    y: "160",
                                    fill: activeMode === 'INVEST' ? '#0a0a0a' : 'rgba(245,245,245,0.5)',
                                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                                    fontSize: "7.5",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    children: "AGGRESSIVE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                    lineNumber: 678,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 676,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 662,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "22",
                    fill: "rgba(16,185,129,0.45)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "WEALTH COMPOUND GROWTH PREVIEW [CLICK PRESETS]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 682,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "345",
                    y: "25",
                    fill: "#10b981",
                    fontFamily: "var(--font-bebas-neue, sans-serif)",
                    fontSize: "9",
                    letterSpacing: "0.05em",
                    children: "GROWTH"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 683,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "132",
                    fill: "rgba(245,245,245,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: [
                        activeMode === 'SAVE' && 'STRATEGY: LIQUID ASSETS // YIELD APY: +4.8% // RISK PROFILE: LOW',
                        activeMode === 'BALANCE' && 'STRATEGY: EQUITIES INDEX & CASH // YIELD APY: +8.5% // RISK PROFILE: MODERATE',
                        activeMode === 'INVEST' && 'STRATEGY: ALPHA STOCKS & HIGH-MUTABLE DBs // YIELD APY: +24.6% // RISK PROFILE: HIGH'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 686,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 610,
            columnNumber: 7
        }, this);
    }
    if (id === '05') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "180",
            viewBox: "0 0 400 180",
            style: {
                background: '#090909',
                border: '1px solid rgba(129,140,248,0.15)',
                borderRadius: '6px',
                margin: '1.5rem 0',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes prFlowPulse {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .pr-stream-dash { stroke-dasharray: 5 3; animation: prFlowPulse 1s linear infinite; }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 702,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(129,140,248,0.02)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "400",
                            y2: "40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "80",
                            x2: "400",
                            y2: "80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 712,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "120",
                            x2: "400",
                            y2: "120"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 713,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "100",
                            y1: "0",
                            x2: "100",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "200",
                            y1: "0",
                            x2: "200",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "300",
                            y1: "0",
                            x2: "300",
                            y2: "180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 710,
                    columnNumber: 9
                }, this),
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
                            lineNumber: 721,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 120 90 C 140 90, 160 45, 180 45 L 280 45 C 300 45, 320 90, 340 90",
                            strokeDasharray: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 722,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "120",
                    cy: "90",
                    r: "5.5",
                    fill: "#181818",
                    stroke: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 726,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "340",
                    cy: "90",
                    r: "5.5",
                    fill: "#181818",
                    stroke: "rgba(245,245,245,0.2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "180",
                    y: "27",
                    width: "100",
                    height: "35",
                    rx: "3",
                    fill: "#111",
                    stroke: prTriggered ? '#818cf8' : 'rgba(245,245,245,0.08)',
                    strokeWidth: "1.5",
                    style: {
                        transition: 'border-color 0.3s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 730,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "230",
                    y: "48",
                    fill: prTriggered ? '#818cf8' : 'rgba(245,245,245,0.3)',
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8.5",
                    fontWeight: "bold",
                    textAnchor: "middle",
                    style: {
                        transition: 'color 0.3s ease'
                    },
                    children: prTriggered ? `SCANNING: ${prProgress}%` : 'LLM_AGENT_CORE'
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 731,
                    columnNumber: 9
                }, this),
                prTriggered && prProgress > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: prProgress < 40 ? 30 + prProgress / 40 * 90 : prProgress < 85 ? 120 + (prProgress - 40) / 45 * 110 : 230 + (prProgress - 85) / 15 * 110,
                    cy: prProgress < 40 ? 90 : prProgress < 85 ? 90 - (prProgress - 40) / 45 * 45 : 45 + (prProgress - 85) / 15 * 45,
                    r: "5",
                    fill: "#818cf8",
                    style: {
                        filter: 'drop-shadow(0 0 5px #818cf8)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 737,
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
                            fill: "#111",
                            stroke: "#818cf8",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 763,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "200",
                            y: "121",
                            fill: "#818cf8",
                            fontFamily: "var(--font-jetbrains-mono, monospace)",
                            fontSize: "7.5",
                            fontWeight: "bold",
                            textAnchor: "middle",
                            children: "[ SEND WEBHOOK EVENT ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsSection.tsx",
                            lineNumber: 764,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 759,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "25",
                    y: "132",
                    width: "350",
                    height: "36",
                    fill: "#050505",
                    stroke: "rgba(129,140,248,0.06)",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 768,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "35",
                    y: "144",
                    fill: "rgba(245,245,245,0.3)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    children: prLogs[1]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 769,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "35",
                    y: "157",
                    fill: "#818cf8",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "7",
                    fontWeight: "bold",
                    children: prLogs[0]
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 772,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "15",
                    y: "22",
                    fill: "rgba(129,140,248,0.4)",
                    fontFamily: "var(--font-jetbrains-mono, monospace)",
                    fontSize: "8",
                    children: "GITHUB WEBHOOK PR AUTOMATION PIPELINE"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 776,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 696,
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
const projectThemes = {
    '01': {
        primary: '#ffb400',
        primaryMuted: 'rgba(255, 180, 0, 0.15)',
        primaryMutedLight: 'rgba(255, 180, 0, 0.03)',
        primaryMutedDeep: 'rgba(255, 180, 0, 0.3)',
        accent: '#ffb400',
        glow: 'rgba(255, 180, 0, 0.4)',
        glowDeep: 'rgba(255, 180, 0, 0.8)'
    },
    '02': {
        primary: '#ef4444',
        primaryMuted: 'rgba(239, 68, 68, 0.15)',
        primaryMutedLight: 'rgba(239, 68, 68, 0.03)',
        primaryMutedDeep: 'rgba(239, 68, 68, 0.3)',
        accent: '#ef4444',
        glow: 'rgba(239, 68, 68, 0.4)',
        glowDeep: 'rgba(239, 68, 68, 0.8)'
    },
    '03': {
        primary: '#58c4dc',
        primaryMuted: 'rgba(88, 196, 220, 0.15)',
        primaryMutedLight: 'rgba(88, 196, 220, 0.03)',
        primaryMutedDeep: 'rgba(88, 196, 220, 0.3)',
        accent: '#58c4dc',
        glow: 'rgba(88, 196, 220, 0.4)',
        glowDeep: 'rgba(88, 196, 220, 0.8)'
    },
    '04': {
        primary: '#10b981',
        primaryMuted: 'rgba(16, 185, 129, 0.15)',
        primaryMutedLight: 'rgba(16, 185, 129, 0.03)',
        primaryMutedDeep: 'rgba(16, 185, 129, 0.3)',
        accent: '#10b981',
        glow: 'rgba(16, 185, 129, 0.4)',
        glowDeep: 'rgba(16, 185, 129, 0.8)'
    },
    '05': {
        primary: '#818cf8',
        primaryMuted: 'rgba(129, 140, 248, 0.15)',
        primaryMutedLight: 'rgba(129, 140, 248, 0.03)',
        primaryMutedDeep: 'rgba(129, 140, 248, 0.3)',
        accent: '#818cf8',
        glow: 'rgba(129, 140, 248, 0.4)',
        glowDeep: 'rgba(129, 140, 248, 0.8)'
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
            let ticking = false;
            let rafId = null;
            const update = {
                "ProjectsSection.useEffect.update": ()=>{
                    const track = sectionRef.current;
                    if (track) {
                        const rect = track.getBoundingClientRect();
                        const viewHeight = window.innerHeight;
                        const totalScrollableHeight = rect.height - viewHeight;
                        if (totalScrollableHeight > 0) {
                            let progress = -rect.top / totalScrollableHeight;
                            progress = Math.max(0, Math.min(1, progress));
                            setScrollProgress(progress);
                            // Set active project index
                            const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length * 0.999));
                            setActiveProjectId(projects[idx].id);
                        }
                    }
                    ticking = false;
                }
            }["ProjectsSection.useEffect.update"];
            const handleScroll = {
                "ProjectsSection.useEffect.handleScroll": ()=>{
                    if (!ticking) {
                        rafId = window.requestAnimationFrame(update);
                        ticking = true;
                    }
                }
            }["ProjectsSection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', handleScroll);
            // Initial run
            const track = sectionRef.current;
            if (track) {
                const rect = track.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                const totalScrollableHeight = rect.height - viewHeight;
                if (totalScrollableHeight > 0) {
                    let progress = -rect.top / totalScrollableHeight;
                    progress = Math.max(0, Math.min(1, progress));
                    setScrollProgress(progress);
                    const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length * 0.999));
                    setActiveProjectId(projects[idx].id);
                }
            }
            return ({
                "ProjectsSection.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleScroll);
                    if (rafId) {
                        window.cancelAnimationFrame(rafId);
                    }
                }
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], []);
    const activeIndex = Math.min(projects.length - 1, Math.floor(scrollProgress * projects.length * 0.999));
    const activeTheme = projectThemes[activeProjectId] || projectThemes['01'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        className: "projects-scroll-section",
        style: {
            '--active-primary': activeTheme.primary,
            '--active-primary-muted': activeTheme.primaryMuted,
            '--active-primary-muted-deep': activeTheme.primaryMutedDeep,
            '--active-glow': activeTheme.glow
        },
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
                                lineNumber: 988,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "projects-hud-title",
                                children: "SELECTED WORK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 989,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 979,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-horizontal-rail",
                        style: {
                            transform: `translateX(-${scrollProgress * (projects.length - 1) * 100}vw)`
                        },
                        children: projects.map((project, idx)=>{
                            const details = caseStudiesData[project.id];
                            const theme = projectThemes[project.id];
                            // Calculate parallax bgOffset
                            const panelCenterProgress = idx / (projects.length - 1);
                            const offsetFromCenter = scrollProgress - panelCenterProgress;
                            const bgOffset = -offsetFromCenter * 100; // max 100px shift
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-slide-panel",
                                style: {
                                    '--theme-primary': theme.primary,
                                    '--theme-primary-muted': theme.primaryMuted,
                                    '--theme-primary-muted-light': theme.primaryMutedLight,
                                    '--theme-primary-muted-deep': theme.primaryMutedDeep,
                                    '--theme-accent': theme.accent,
                                    '--theme-glow': theme.glow,
                                    '--theme-glow-deep': theme.glowDeep
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-bg",
                                        style: {
                                            backgroundImage: `url(${getProjectBgImage(project.id)})`,
                                            transform: `translateX(${bgOffset}px) scale(1.15)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-bg-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-panel-grid-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 1028,
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
                                                                lineNumber: 1034,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "project-panel-title",
                                                                children: project.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "project-panel-teaser",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 1038,
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
                                                                lineNumber: 1041,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSchematic, {
                                                                id: project.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 1042,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 1040,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 1032,
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
                                                                    lineNumber: 1052,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "detail-meta-val",
                                                                    children: details.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 1051,
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
                                                                            lineNumber: 1058,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list",
                                                                            children: details.challenges.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: c
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 1060,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 1059,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 1057,
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
                                                                            lineNumber: 1065,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list",
                                                                            children: details.solutions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: s
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 1067,
                                                                                    columnNumber: 64
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 1064,
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
                                                                            lineNumber: 1072,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "detail-sec-list theme-text",
                                                                            children: details.metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: m
                                                                                }, i, false, {
                                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                                    lineNumber: 1074,
                                                                                    columnNumber: 62
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 1073,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 1071,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 1056,
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
                                                                    lineNumber: 1080,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "detail-badge-group",
                                                                    children: details.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "detail-badge",
                                                                            children: t
                                                                        }, t, false, {
                                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                            lineNumber: 1083,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                    lineNumber: 1081,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 1079,
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
                                                                    lineNumber: 1090,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectsSection.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectsSection.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 1007,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 993,
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
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 1113,
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
                                                lineNumber: 1129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tick-title",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 1119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 1112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 976,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .projects-scroll-section {
          position: relative;
          height: 500vh; /* 5 projects * 100vh runway */
          background-color: #0a0a0a;
          box-sizing: border-box;
          transition: background-color 0.6s ease;
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
          color: var(--active-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          transition: color 0.4s ease;
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
          transition: transform 0.1s ease-out;
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

        .project-panel-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(var(--theme-primary-muted-light) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.45;
          pointer-events: none;
          z-index: 2;
          transition: background-image 0.6s ease;
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
          color: var(--theme-primary);
          letter-spacing: 0.1em;
          transition: color 0.4s ease;
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
          color: var(--theme-primary);
          transition: color 0.4s ease;
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

        .detail-sec-list.theme-text li {
          color: var(--theme-primary) !important;
          font-weight: 400;
          transition: color 0.4s ease;
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
          color: var(--theme-primary);
          border: 1px solid var(--theme-primary-muted-deep);
          background: transparent;
          border-radius: 4px;
          padding: 0.7rem 1.6rem;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .detail-github-btn:hover {
          background: var(--theme-primary) !important;
          color: #0a0a0a !important;
          box-shadow: 0 0 15px var(--theme-glow);
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
          background: var(--active-primary);
          box-shadow: 0 0 10px var(--active-glow);
          position: absolute;
          left: 0;
          top: 0;
          transition: width 0.1s ease-out, background 0.4s ease, box-shadow 0.4s ease;
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
          background: var(--active-primary);
          box-shadow: 0 0 8px var(--active-glow);
        }

        .hud-tick-item.current::before {
          transform: scale(1.4);
          background: var(--active-primary);
          box-shadow: 0 0 12px var(--active-glow);
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
          color: var(--active-primary);
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
          color: var(--active-primary);
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
                lineNumber: 1139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 964,
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
            className: "social-console-btn",
            children: [
                link.icon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: link.label
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "btn-terminal-tag",
                    children: hovered ? '➔ STACK' : '// LINK'
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 69,
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
function Oscilloscope() {
    _s1();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Oscilloscope Animation Frame loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Oscilloscope.useEffect": ()=>{
            let frameId;
            const update = {
                "Oscilloscope.useEffect.update": ()=>{
                    setTime({
                        "Oscilloscope.useEffect.update": (t)=>(t + 0.04) % (Math.PI * 2)
                    }["Oscilloscope.useEffect.update"]);
                    frameId = requestAnimationFrame(update);
                }
            }["Oscilloscope.useEffect.update"];
            frameId = requestAnimationFrame(update);
            return ({
                "Oscilloscope.useEffect": ()=>cancelAnimationFrame(frameId)
            })["Oscilloscope.useEffect"];
        }
    }["Oscilloscope.useEffect"], []);
    const getWavePath1 = ()=>{
        let points = [];
        for(let x = 0; x <= 220; x += 4){
            const y = 25 + Math.sin(x * 0.055 + time * 1.8) * 8;
            points.push(`${x},${y}`);
        }
        return `M ${points.join(' L ')}`;
    };
    const getWavePath2 = ()=>{
        let points = [];
        for(let x = 0; x <= 220; x += 4){
            const y = 25 + Math.sin(x * 0.045 - time * 1.4 + Math.PI / 3) * 5;
            points.push(`${x},${y}`);
        }
        return `M ${points.join(' L ')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "console-oscilloscope-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "50",
            viewBox: "0 0 220 50",
            preserveAspectRatio: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "rgba(255, 180, 0, 0.04)",
                    strokeWidth: "0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "12.5",
                            x2: "220",
                            y2: "12.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "25",
                            x2: "220",
                            y2: "25"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "37.5",
                            x2: "220",
                            y2: "37.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "55",
                            y1: "0",
                            x2: "55",
                            y2: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "110",
                            y1: "0",
                            x2: "110",
                            y2: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "165",
                            y1: "0",
                            x2: "165",
                            y2: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: getWavePath2(),
                    fill: "none",
                    stroke: "rgba(255, 180, 0, 0.2)",
                    strokeWidth: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: getWavePath1(),
                    fill: "none",
                    stroke: "#ffb400",
                    strokeWidth: "1.2",
                    style: {
                        filter: 'drop-shadow(0 0 3px rgba(255, 180, 0, 0.5))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactSection.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactSection.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s1(Oscilloscope, "5hWQWrdOaoNaY+yZN4rUVWF/ZFM=");
_c3 = Oscilloscope;
function ContactSection() {
    _s2();
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
    // Unique connection telemetry node generated on client mount
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Transmission terminal logs
    const [transmittingLogs, setTransmittingLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
    // Generate session node ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const rand = Math.random().toString(16).substring(2, 8).toUpperCase();
            setSessionId(`LINK-NODE-${rand}`);
        }
    }["ContactSection.useEffect"], []);
    // Simulated transmission pipeline logs stepper
    const logSteps = [
        '// INITIALIZING PIPELINE INGESTION TO ETH0...',
        '// SSL HANDSHAKE SECURE WITH GATEWAY: SUCCESS',
        '// SERIALIZING PAYLOAD BLOCKS INTO JSON_STREAM...',
        '// TRANSMITTING PACKET OVER ENCRYPTED UDP TUNNEL...',
        '// VERIFYING CHECKSUM WITH REMOTE INSTANCE...',
        '// ACK RECEIVED: 200 OK (SAVED TO QUEUE)'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            if (status !== 'sending') return;
            setTransmittingLogs([
                logSteps[0]
            ]);
            const timers = logSteps.map({
                "ContactSection.useEffect.timers": (log, index)=>{
                    if (index === 0) return null;
                    return setTimeout({
                        "ContactSection.useEffect.timers": ()=>{
                            setTransmittingLogs({
                                "ContactSection.useEffect.timers": (prev)=>[
                                        ...prev,
                                        log
                                    ]
                            }["ContactSection.useEffect.timers"]);
                        }
                    }["ContactSection.useEffect.timers"], index * 180);
                }
            }["ContactSection.useEffect.timers"]);
            return ({
                "ContactSection.useEffect": ()=>{
                    timers.forEach({
                        "ContactSection.useEffect": (t)=>t && clearTimeout(t)
                    }["ContactSection.useEffect"]);
                }
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], [
        status
    ]);
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
            // Allow visual logging to complete before showing success
            setTimeout(()=>{
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 1300);
        } catch (err) {
            console.error(err);
            setTimeout(()=>{
                setErrorMsg(err.message || 'Something went wrong. Please try again.');
                setStatus('error');
            }, 1300);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "contact-section-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-grid-overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "contact-inner-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-dashboard-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `contact-telemetry-panel ${visible ? 'fade-in-up' : ''}`,
                                style: {
                                    transitionDelay: '0.1s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-hud-label",
                                        children: "// 03 / BUILD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "contact-hud-title",
                                        children: "ESTABLISH SECURE LINK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "contact-hud-teaser",
                                        children: "Have an architectural challenge or scaling requirement? Initialize a secure socket transmission below."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hardware-console-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "console-card-header",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "terminal-title",
                                                        children: "// LOG_RECEIVER_TELEMETRY.conf"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "blinking-dot-container",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "blinking-dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 19
                                                            }, this),
                                                            "STATUS: ESTABLISHED"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Oscilloscope, {}, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "console-readout-rows",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readout-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-label",
                                                                children: "SYSTEM STATE:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-val color-green",
                                                                children: "NOMINAL (99.8%)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readout-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-label",
                                                                children: "SESSION ID:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-val monospace",
                                                                children: sessionId || 'LINKING...'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readout-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-label",
                                                                children: "CRYPTO SUITE:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-val monospace",
                                                                children: "ECDH_P256 / AES-GCM-256"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "readout-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-label",
                                                                children: "PING METRIC:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "readout-val color-amber",
                                                                children: "14ms (RTT_OPTIMAL)"
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
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "social-gateways-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gateways-label",
                                                children: "// PUBLIC KEY ENDPOINTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "social-links-grid",
                                                children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                                                        link: link
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `contact-form-panel ${visible ? 'fade-in-up' : ''}`,
                                style: {
                                    transitionDelay: '0.2s'
                                },
                                children: status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-result-card success",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "terminal-result-header",
                                            children: "// TRANSACTION_VERIFIED"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "terminal-result-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "success-code-log",
                                                    children: "[VERIFIED] TRANSMISSION ESTABLISHED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "success-heading",
                                                    children: "MESSAGE INGESTED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "terminal-logs-window font-mono",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "terminal-log-line color-green",
                                                            children: "> Packet checksum verified: 0xFD8E42"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "terminal-log-line color-green",
                                                            children: "> Ingesting message stream payloads..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "terminal-log-line color-green",
                                                            children: "> Writing record block to PostgreSQL DB..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "terminal-log-line",
                                                            children: "> Pipeline shutdown. Connection standby mode."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "success-subtext",
                                                    children: "Your transmission was saved securely. Prathamesh will review your packet nodes and respond shortly."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                    strength: 0.2,
                                                    range: 60,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setStatus('idle'),
                                                        className: "transmit-submit-btn cursor-pointer",
                                                        children: "[ NEW_TRANSMISSION() ]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this) : status === 'sending' ? /* Sending/Transmitting logs View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-result-card transmitting",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "terminal-result-header",
                                            children: "// PIPELINE_ACTIVE (TRANSMITTING)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "terminal-result-body flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "success-code-log animate-pulse",
                                                            children: "TRANSMITTING PACKETS..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "terminal-logs-window font-mono min-h-[140px] mt-4",
                                                            children: transmittingLogs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "terminal-log-line",
                                                                    children: log
                                                                }, index, false, {
                                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress-bar-container mt-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "progress-bar-fill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this) : /* Core Form Telemetry inputs */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "console-form-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "console-form-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "// STREAM_INGEST_FORM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "SECURE CHANNEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-inputs-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "console-form-group-header",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "param-label",
                                                                    children: "[PARAM: name]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "param-type",
                                                                    children: "string"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "name",
                                                            name: "name",
                                                            required: true,
                                                            value: formData.name,
                                                            onChange: handleInputChange,
                                                            className: "console-input",
                                                            placeholder: "Enter name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "console-focus-underline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "console-form-group-header",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "param-label",
                                                                    children: "[PARAM: email]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "param-type",
                                                                    children: "email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            id: "email",
                                                            name: "email",
                                                            required: true,
                                                            value: formData.email,
                                                            onChange: handleInputChange,
                                                            className: "console-input",
                                                            placeholder: "name@domain.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "console-focus-underline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "console-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-form-group-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "param-label",
                                                            children: "[PARAM: subject]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "param-type",
                                                            children: "string"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "subject",
                                                    name: "subject",
                                                    required: true,
                                                    value: formData.subject,
                                                    onChange: handleInputChange,
                                                    className: "console-input",
                                                    placeholder: "Enter subject header"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-focus-underline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 414,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "console-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-form-group-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "param-label",
                                                            children: "[PARAM: message]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "param-type",
                                                            children: "text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    required: true,
                                                    value: formData.message,
                                                    onChange: handleInputChange,
                                                    className: "console-textarea",
                                                    placeholder: "Enter project specs, pipeline requirements, or message details..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "console-focus-underline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "terminal-error-log font-mono",
                                            children: [
                                                "// [CRITICAL ERROR] Failed to transmit packet: ",
                                                errorMsg
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 451,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "submit-btn-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Magnetic"], {
                                                strength: 0.15,
                                                range: 60,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "transmit-submit-btn cursor-pointer",
                                                    children: "[ EXECUTE TRANSMIT_MESSAGE() ]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.tsx",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `contact-footer-line ${visible ? 'fade-in-up' : ''}`,
                        style: {
                            transitionDelay: '0.4s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "footer-copyright-text",
                            children: "© 2026 PRATHAMESH JADHAV. BUILT WITH SYSTEMS FOCUS & SOLID INFRASTRUCTURE."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .contact-section-container {
          position: relative;
          padding: 8rem 5rem 4rem 5rem;
          background-color: #0a0a0a;
          box-sizing: border-box;
          border-top: 1px solid rgba(245, 245, 245, 0.05);
          overflow: hidden;
        }

        .contact-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(rgba(255, 180, 0, 0.02) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255,255,255,0.008) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.008) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
        }

        .contact-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          z-index: 3;
        }

        .contact-dashboard-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 6rem;
          align-items: start;
        }

        .contact-telemetry-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .contact-hud-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #ffb400;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .contact-hud-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 4.5vw, 4.5rem);
          line-height: 0.95;
          color: #f5f5f5;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .contact-hud-teaser {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          margin: 1.5rem 0 2rem 0;
        }

        /* Telemetry Box Card */
        .hardware-console-card {
          width: 100%;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 180, 0, 0.12);
          border-radius: 6px;
          padding: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .console-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
        }

        .terminal-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.35);
        }

        .blinking-dot-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          font-weight: bold;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        .blinking-dot {
          width: 5px;
          height: 5px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: terminalBlink 1.4s infinite ease-in-out;
        }

        @keyframes terminalBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .console-oscilloscope-container {
          width: 100%;
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          overflow: hidden;
          padding: 0.25rem 0;
        }

        .console-readout-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .readout-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }

        .readout-label {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(245, 245, 245, 0.3);
        }

        .readout-val {
          font-family: 'Inter', sans-serif;
          color: #f5f5f5;
        }

        .readout-val.monospace {
          font-family: 'JetBrains Mono', monospace;
        }

        .readout-val.color-green {
          color: #10b981;
          font-weight: 600;
        }

        .readout-val.color-amber {
          color: #ffb400;
        }

        /* Gateways container */
        .social-gateways-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .gateways-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.1em;
        }

        .social-links-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .social-console-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(245,245,245,0.4);
          background: rgba(245, 245, 245, 0.02);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 4px;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          padding: 0.7rem 1.2rem;
          justify-content: space-between;
          min-width: 150px;
        }

        .social-console-btn:hover {
          color: #ffb400;
          border-color: rgba(255, 180, 0, 0.3);
          background: rgba(255, 180, 0, 0.02);
        }

        .btn-terminal-tag {
          font-size: 0.55rem;
          color: rgba(245, 245, 245, 0.2);
          transition: color 0.3s ease;
        }

        .social-console-btn:hover .btn-terminal-tag {
          color: #ffb400;
        }

        /* Form styling */
        .contact-form-panel {
          width: 100%;
        }

        .console-form-container {
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(245, 245, 245, 0.06);
          border-radius: 6px;
          padding: 2.5rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .console-form-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(245, 245, 245, 0.25);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .contact-inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .console-form-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .console-form-group-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .param-label {
          color: rgba(245, 245, 245, 0.3);
          transition: color 0.3s ease;
        }

        .param-type {
          color: rgba(255, 180, 0, 0.35);
        }

        .console-input, .console-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
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

        .console-focus-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ffb400;
          box-shadow: 0 0 6px #ffb400;
          transition: width 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .console-input:focus ~ .console-focus-underline,
        .console-textarea:focus ~ .console-focus-underline {
          width: 100%;
        }

        .console-form-group:focus-within .param-label {
          color: #ffb400;
        }

        .console-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .terminal-error-log {
          font-size: 0.7rem;
          color: #ef4444;
          letter-spacing: 0.05em;
        }

        .submit-btn-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .transmit-submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1.1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          border-radius: 4px;
        }

        .transmit-submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.4);
        }

        /* Result cards styling (Transmitting and Success States) */
        .terminal-result-card {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 6px;
          padding: 3rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .terminal-result-card.success {
          border-color: rgba(16, 185, 129, 0.2);
          box-shadow: 0 15px 45px -15px rgba(16, 185, 129, 0.1);
        }

        .terminal-result-card.transmitting {
          border-color: rgba(255, 180, 0, 0.2);
          box-shadow: 0 15px 45px -15px rgba(255, 180, 0, 0.1);
        }

        .terminal-result-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .terminal-result-card.success .terminal-result-header {
          color: #10b981;
        }

        .terminal-result-card.transmitting .terminal-result-header {
          color: #ffb400;
        }

        .terminal-result-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .success-code-log {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #ffb400;
          margin-bottom: 0.75rem;
        }

        .terminal-result-card.success .success-code-log {
          color: #10b981;
        }

        .success-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .terminal-logs-window {
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .terminal-log-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(245, 245, 245, 0.55);
          letter-spacing: 0.02em;
          line-height: 1.4;
        }

        .terminal-log-line.color-green {
          color: #10b981;
        }

        .success-subtext {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.6);
          margin-bottom: 2rem;
        }

        .progress-bar-container {
          width: 100%;
          height: 3px;
          background-color: rgba(245, 245, 245, 0.04);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #ffb400;
          width: 0%;
          animation: transmitProgressBar 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          box-shadow: 0 0 6px #ffb400;
        }

        @keyframes transmitProgressBar {
          to { width: 100%; }
        }

        /* Footer line */
        .contact-footer-line {
          margin-top: 8rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(245, 245, 245, 0.06);
          text-align: center;
        }

        .footer-copyright-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(245, 245, 245, 0.25);
          text-transform: uppercase;
        }

        /* Intersection Observer entry animations */
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .contact-telemetry-panel, .contact-form-panel, .contact-footer-line {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
        }

        @media (max-width: 992px) {
          .contact-section-container {
            padding: 6rem 2rem 4rem 2rem;
          }

          .contact-dashboard-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-hud-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-inputs-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .terminal-result-card {
            padding: 2rem;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s2(ContactSection, "2DUvpg+UhRm7jXS04/x+i+of3KY=");
_c4 = ContactSection;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "LinkedInIcon");
__turbopack_context__.k.register(_c2, "SocialButton");
__turbopack_context__.k.register(_c3, "Oscilloscope");
__turbopack_context__.k.register(_c4, "ContactSection");
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

//# sourceMappingURL=src_0xka37u._.js.map