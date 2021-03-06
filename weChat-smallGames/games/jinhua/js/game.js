
<!--
function ImagesPreloader() {
    function e() {
        var n = 0, r = 0, i;
        for (i in t.loadedImages)
            t.loadedImages[i].complete && n++, r++;
        n >= r ? t.endCallback && t.endCallback(t.loadedImages) : (t.processCallback && t.processCallback(Math.floor(n / r * 100)), setTimeout(e, 50))
    }
    var t = this;
    this.curItem =- 1;
    this.loadedImages = {};
    this.processCallback = this.endCallback = this.data = null;
    this.load = function(t, n, r) {
        this.data = t;
        this.endCallback = n;
        this.processCallback = r;
        for (t = 0; t < this.data.length; t++)
            n = this.data[t], r = new Image, r.src = n.src, this.loadedImages[n.name] = r;
        e()
    }
}
function Sprite(e, t, n, r, i) {
    this.uid = 0;
    this.stage = null;
    this.y = this.x = 0;
    this.width = t;
    this.height = n;
    this.offset = {
        left: 0,
        top: 0
    };
    this.anchor = {
        x: 0,
        y: 0
    };
    this.scaleY = this.scaleX = 1;
    this.zIndex = this.rotation = 0;
    this.visible=!0;
    this.opacity = 1;
    this.ignoreViewport = this["static"]=!1;
    this.animated=!0;
    this.currentFrame = 0;
    this.totalFrames = Math.max(1, ~~r);
    1 >= this.totalFrames && (this.animated=!1);
    this.currentLayer = 0;
    this.totalLayers = Math.max(1, ~~i);
    this.bitmap = e;
    this.mask = null;
    this.destroy = this.fillColor=!1;
    this.animStep = 0;
    this.animDelay = 1;
    this.dragged = this.drawAlways=!1;
    this.dragY = this.dragX = 0;
    this.getX = function() {
        return Math.round(this.x * Utils.globalScale)
    };
    this.getY = function() {
        return Math.round(this.y * Utils.globalScale)
    };
    this.getWidth = function() {
        return this.width * Math.abs(this.scaleX) * Utils.globalScale
    };
    this.getHeight = function() {
        return this.height * Math.abs(this.scaleY) * Utils.globalScale
    };
    this.startDrag = function(e, t) {
        this.dragged=!0;
        this.dragX = e;
        this.dragY = t
    };
    this.stopDrag = function() {
        this.dragged=!1;
        this.dragY = this.dragX = 0
    };
    this.play = function() {
        this.animated=!0
    };
    this.stop = function() {
        this.animated=!1
    };
    this.gotoAndStop = function(e) {
        this.currentFrame = e;
        this.stop()
    };
    this.gotoAndPlay = function(e) {
        this.currentFrame = e;
        this.play()
    };
    this.removeTweens = function() {
        this.stage && this.stage.clearObjectTweens(this)
    };
    this.addTween = function(e, t, n, r, i, s) {
        if (this.stage) {
            var o = this[e];
            if (!isNaN(o))
                return e = stage.createTween(this, e, o, t, n, r), e.onchange = s, e.onfinish = i, e
        }
    };
    this.moveTo = function(e, t, n, r, i, s) {
        n=~~n;
        0 >= n ? this.setPosition(e, t) : ((e = this.addTween("x", e, n, r, i, s)) && e.play(), (t = this.addTween("y", t, n, r, e ? null : i, e ? null : s)) && t.play());
        return this
    };
    this.moveBy = function(e, t, n, r, i, s) {
        return this.moveTo(this.x + e, this.y + t, n, r, i, s)
    };
    this.fadeTo = function(e, t, n, r, i) {
        t=~~t;
        0 >= t ? this.opacity = e : (e = this.addTween("opacity", e, t, n, r, i)) && e.play();
        return this
    };
    this.fadeBy = function(e, t, n, r, i) {
        e = Math.max(0, Math.min(1, this.opacity + e));
        return this.fadeTo(e, t, n, r, i)
    };
    this.rotateTo = function(e, t, n, r, i) {
        t=~~t;
        0 >= t ? this.rotation = e : (e = this.addTween("rotation", e, t, n, r, i)) && e.play();
        return this
    };
    this.rotateBy = function(e, t, n, r, i) {
        return this.rotateTo(this.rotation + e, t, n, r, i)
    };
    this.scaleTo = function(e, t, n, r, i) {
        t=~~t;
        if (0 >= t)
            this.scaleX = this.scaleY = e;
        else {
            var s = this.addTween("scaleX", e, t, n, r, i);
            s && s.play();
            (e = this.addTween("scaleY", e, t, n, s ? null : r, s ? null : i)) && e.play()
        }
        return this
    };
    this.nextFrame = function() {
        this.dispatchEvent("enterframe", {
            target: this
        });
        this.animated && (this.animStep++, this.animStep >= this.animDelay && (this.currentFrame++, this.animStep = 0), this.currentFrame >= this.totalFrames && (this.currentFrame = 0))
    };
    this.eventsWhenInvisible=!1;
    this.onbox2dsync = this.onremove = this.onadd = this.onrender = this.onprerender = this.onenterframe = this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onmouseout = this.onmouseover = null;
    this.mouseOn=!1;
    this.getPosition = function() {
        return {
            x: this.x,
            y: this.y
        }
    };
    this.setPosition = function(e, t) {
        if ("undefined" == typeof t && "undefined" != typeof e.x && "undefined" != typeof e.y)
            return this.setPosition(e.x, e.y);
        this.x = parseFloat(e);
        this.y = parseFloat(t)
    };
    this.getAnchor = function() {
        return this.anchor
    };
    this.setAnchor = function(e, t) {
        if ("undefined" == typeof t && "undefined" != typeof e.x && "undefined" != typeof e.y)
            return this.setAnchor(e.x, e.y);
        this.anchor.x = parseFloat(e);
        this.anchor.y = parseFloat(t)
    };
    this.alignAnchor = function(e, t) {
        e = parseInt(e);
        isNaN(e) && (e = ANCHOR_ALIGN_CENTER);
        0 > e && (e = ANCHOR_ALIGN_LEFT);
        0 < e && (e = ANCHOR_ALIGN_RIGHT);
        t = parseInt(t);
        isNaN(t) && (t = ANCHOR_VALIGN_MIDDLE);
        0 > t && (t = ANCHOR_VALIGN_TOP);
        0 < t && (t = ANCHOR_VALIGN_BOTTOM);
        this.anchor.x = this.width * e / 2;
        this.anchor.y = this.height * t / 2;
        return this.getAnchor()
    };
    this.getAbsoluteAnchor = function() {
        return this.getPosition()
    };
    this.getRelativeCenter = function() {
        var e = this.getAnchor();
        if (0 == e.x && 0 == e.y)
            return e;
        e = new Vector( - e.x * this.scaleX, - e.y * this.scaleY);
        e.rotate( - this.rotation);
        return e
    };
    this.getAbsoluteCenter = function() {
        var e = this.getRelativeCenter(), e = {
            x: e.x,
            y: e.y
        };
        e.x += this.x;
        e.y += this.y;
        return e
    };
    this.getCenter = function() {
        return this.getAbsoluteCenter()
    };
    this.getDrawRectangle = function() {
        var e = this.getCenter(), t = new Rectangle(0, 0, this.width * Math.abs(this.scaleX), this.height * Math.abs(this.scaleY), this.rotation);
        t.move(e.x, e.y);
        return t
    };
    this.getAABBRectangle = function() {
        var e = this.getDrawRectangle(), t = e.AABB[1].x - e.AABB[0].x, n = e.AABB[1].y - e.AABB[0].y;
        return new Rectangle(e.AABB[0].x + t / 2, e.AABB[0].y + n / 2, t, n, 0)
    };
    this.localToGlobal = function(e, t) {
        var n = "object" == typeof e && "undefined" != typeof e.x && "undefined" != typeof e.y ? new Vector(e.x + 0, e.y + 0): new Vector(e, t);
        n.rotate(this.rotation).add(this.getPosition());
        return n
    };
    this.globalToLocal = function(e, t) {
        var n = "object" == typeof e && "undefined" != typeof e.x && "undefined" != typeof e.y ? new Vector(e.x + 0, e.y + 0): new Vector(e, t);
        n.subtract(this.getPosition()).rotate( - this.rotation);
        return n
    };
    this.allowDebugDrawing=!0;
    this.debugDraw = function() {
        if (this.visible && this.allowDebugDrawing) {
            var e = this.getPosition(), t = this.getCenter(), n = this.getDrawRectangle(), r = this.getAABBRectangle();
            stage.drawCircle(e.x, e.y, 1, 1, "rgba(255,0,0,0.9)");
            stage.drawCircle(t.x, t.y, 1, 1, "rgba(0,255,0,0.9)");
            stage.drawLine(e.x, e.y, t.x, t.y, 1, "rgba(255,255,255,0.5)");
            stage.drawPolygon(n.vertices, .5, "rgba(255,0,255,0.5)", 1);
            stage.drawLine(r.vertices[0].x, r.vertices[0].y, r.vertices[2].x, r.vertices[2].y, .1, "rgba(255,255,255,0.5)");
            stage.drawLine(r.vertices[2].x, r.vertices[0].y, r.vertices[0].x, r.vertices[2].y, .1, "rgba(255,255,255,0.5)");
            stage.drawPolygon(r.vertices, .5, "rgba(255,255,255,0.5)")
        }
    };
    this.setZIndex = function(e) {
        this.zIndex=~~e;
        this.stage && this.stage.setZIndex(this, ~~e)
    };
    this.eventsListeners = [];
    this.addEventListener = function(e, t) {
        EventsManager.addEvent(this, e, t)
    };
    this.removeEventListener = function(e, t) {
        EventsManager.removeEvent(this, e, t)
    };
    this.dispatchEvent = function(e, t) {
        return EventsManager.dispatchEvent(this, e, t)
    };
    this.hitTestPoint = function(e, t, n, r, i) {
        return this.stage ? this.stage.hitTestPointObject(this, e, t, n, r, i) : !1
    }
}
function Tween(e, t, n, r, i, s) {
    var o = this;
    "object" != typeof e && (e = null);
    if (e) {
        if ("undefined" == typeof e[t])
            throw Error('Trying to tween undefined property "' + t + '"');
        if (isNaN(e[t]))
            throw Error("Tweened value can not be " + typeof e[t])
    } else if (isNaN(t))
        throw Error("Tweened value can not be " + typeof t);
    "function" != typeof s && (s = Easing.linear.easeIn);
    this.obj = e;
    this.prop = t;
    this.onfinish = this.onchange = null;
    this.start = n;
    this.end = r;
    this.duration=~~i;
    this.callback = s;
    this.playing=!1;
    this._pos =- 1;
    this.play = function() {
        o.playing=!0;
        o.tick()
    };
    this.pause = function() {
        o.playing=!1
    };
    this.rewind = function() {
        o._pos =- 1
    };
    this.forward = function() {
        o._pos = this.duration
    };
    this.stop = function() {
        o.rewind();
        o.tick();
        o.pause()
    };
    this.updateValue = function(e) {
        o.obj ? o.obj[o.prop] = e : o.prop = e
    };
    this.tick = function() {
        if (!o.playing)
            return !1;
        o._pos++;
        if (0 > o._pos)
            return !1;
        if (o._pos > o.duration)
            return o.finish();
        var e = o.callback, e = e(o._pos, o.start, o.end - o.start, o.duration);
        this.updateValue(e);
        o.dispatchEvent("change", {
            target: o,
            value: e
        });
        return !1
    };
    this.finish = function() {
        o.stop();
        o.updateValue(o.end);
        return o.dispatchEvent("finish", {
            target: o,
            value: o.end
        })
    };
    this.eventsListeners = [];
    this.addEventListener = function(e, t) {
        EventsManager.addEvent(this, e, t)
    };
    this.removeEventListener = function(e, t) {
        EventsManager.removeEvent(this, e, t)
    };
    this.dispatchEvent = function(e, t) {
        return EventsManager.dispatchEvent(this, e, t)
    }
}
function StageTimer(a, c, d) {
    this.repeat = d;
    this.timeout = this.initialTimeout = c;
    this.callback = a;
    this.paused=!1;
    this.update = function() {
        if (!this.paused) {
            this.timeout--;
            if (0 >= this.timeout)
                if ("function" == typeof this.callback && this.callback(), "string" == typeof this.callback && eval(this.callback)
                    , this.repeat)this.timeout = this.initialTimeout;
            else 
                return !0;
            return !1
        }
    };
    this.resume = function() {
        this.paused=!1
    };
    this.pause = function() {
        this.paused=!0
    }
}
function Stage(e, t, n) {
    function r() {
        s.lastFPS = s.fps;
        s.fps = 0;
        s.started && (s.tmFPS = setTimeout(r, 1e3))
    }
    function i() {
        clearTimeout(s.tmMain);
        var e = (new Date).getTime();
        s.updateTweens();
        s.updateTimers();
        s.dispatchEvent("pretick");
        s.drawScene(s.canvas, !1);
        s.showFPS && (s.setTextStyle("sans-serif", 10, "bold", "#fff", "#000"), s.drawText("FPS: " + s.lastFPS, 2, 10, 1, !0));
        s.dispatchEvent("posttick");
        e = (new Date).getTime() - e;
        e = s.delay - e-1;
        1 > e && (e = 1);
        s.fps++;
        s.started && (s.tmMain = setTimeout(i, e))
    }
    var s = this;
    this.canvas = null;
    e && (this.canvas = document.getElementById(e), this.canvas.ctx = this.canvas.getContext("2d"));
    this.backBuffer = null;
    this.screenWidth = t;
    this.screenHeight = n;
    this.viewport = {
        x: 0,
        y: 0
    };
    this.objects = [];
    this.objectsCounter = 0;
    try {
        this.buffer = document.createElement("canvas"), this.buffer.width = t * Utils.globalScale, this.buffer.height = n * Utils.globalScale, this.buffer.ctx = this.buffer.getContext("2d")
    } catch (o) {
        this.buffer = this.canvas
    }
    this.delay = 40;
    this.started = this.fillColor=!1;
    this.lastFPS = this.fps = 0;
    this.ceilSizes = this.pixelMouseMoveEvent = this.pixelMouseDownEvent = this.pixelMouseUpEvent = this.pixelClickEvent = this.showFPS=!1;
    this.tmMain;
    this.tmFPS;
    this.clearLock=!1;
    this.destroy = function() {
        clearTimeout(this.tmMain);
        clearTimeout(this.tmFPS);
        this.stop();
        this.clear();
        this.clearScreen(this.canvas)
    };
    this.clearScreen = function(e) {
        this.clearLock || e.ctx.clearRect(0, 0, this.screenWidth * Utils.globalScale * Utils.globalPixelScale, this.screenHeight * Utils.globalScale * Utils.globalPixelScale)
    };
    this.findMaxZIndex = function() {
        for (var e =- 1, t=!1, n = 0; n < this.objects.length; n++)
            this.objects[n].zIndex > e && (e = this.objects[n].zIndex, t = n);
        return {
            index: t,
            zIndex: e
        }
    };
    this.findMinZIndex = function() {
        for (var e =- 1, t=!1, n = 0; n < this.objects.length; n++)
            0 == n && (e = this.objects[n].zIndex, t = 0), this.objects[n].zIndex < e && (e = this.objects[n].zIndex, t = n);
        return {
            index: t,
            zIndex: e
        }
    };
    this.addChild = function(e) {
        var t = this.findMaxZIndex(), n = e.zIndex;
        e.zIndex=!1 !== t.index ? t.zIndex + 1 : 0;
        this.objectsCounter++;
        e.uid = this.objectsCounter;
        e.stage = this;
        this.objects.push(e);
        0 != n && this.setZIndex(e, ~~n);
        e.dispatchEvent("add", {
            target: e
        });
        return e
    };
    this.removeChild = function(e) {
        e && (this.clearObjectTweens(e), e.dispatchEvent("remove", {
            target : e
        }), e.stage = null, this.objects = Utils.removeFromArray(this.objects, e))
    };
    this.setZIndex = function(e, t) {
        e.zIndex = t;
        this.objects = this.objects.sort(function(e, t) {
            return e.zIndex == t.zIndex ? e.uid > t.uid ? 1 : -1 : e.zIndex > t.zIndex ? 1 : -1
        })
    };
    this.hitTestPointObject = function(e, t, n, r, i, s) {
        var o, u, a, f, l, c;
        a = e.width * Math.abs(e.scaleX);
        f = e.height * Math.abs(e.scaleY);
        o = e.x - a / 2;
        u = e.y - f / 2;
        l = t;
        c = n;
        e.ignoreViewport || (l += this.viewport.x, c += this.viewport.y);
        s=!1;
        0 == e.rotation ? o <= l && u <= c && o + a >= l && u + f >= c && (s=!0) : (o = e.getDrawRectangle(), o.hitTestPoint(new Vector(l, c)) && (s=!0));
        s && r && (this.buffer.width = this.screenWidth * Utils.globalScale * Utils.globalPixelScale, this.buffer.height = this.screenHeight * Utils.globalScale * Utils.globalPixelScale, this.clearScreen(this.buffer), this.renderObject(this.buffer, e), t = this.buffer.ctx.getImageData(Math.floor(t * Utils.globalScale * Utils.globalPixelScale), Math.floor(n * Utils.globalScale * Utils.globalPixelScale), 1, 1), 0 == t.data[3] && (s=!1));
        !s && i && e.dragged && (s=!0);
        return s
    };
    this.getObjectsStackByCoord = function(e, t, n, r, i) {
        for (var s, o = [], u = 0; u < this.objects.length; u++)
            if (this.objects[u].visible || this.objects[u].eventsWhenInvisible)
                s = this.objects[u], this.hitTestPointObject(s, e, t, n, r, i) && o.push(s);
        return o
    };
    this.getMaxZIndexInStack = function(e) {
        for (var t =- 1, n = 0, r = 0; r < e.length; r++)
            e[r].zIndex > t && (t = e[r].zIndex, n = r);
        return n
    };
    this.sortStack = function(e, t) {
        for (var n=!0, r, i; n;)
            for (n=!1, i = 0; i < e.length-1; i++)
                r=!1, e[i].zIndex < e[i + 1].zIndex&&!t && (r=!0), e[i].zIndex > e[i + 1].zIndex && t && (r=!0), r && (n = e[i], e[i] = e[i + 1], e[i + 1] = n, n=!0);
        return e
    };
    this.finalizeMouseCoords = function(e, t) {
        if (!e)
            return t;
        var n = this.prepareMouseCoord(t.x), r = this.prepareMouseCoord(t.y);
        e.ignoreViewport || (n += this.viewport.x, r += this.viewport.y);
        n -= e.x;
        r -= e.y;
        return {
            x: n,
            y: r
        }
    };
    this.prepareMouseCoord = function(e) {
        return e / Utils.globalScale / Utils.globalPixelScale
    };
    this.checkClick = function(e) {
        e = Utils.getMouseCoord(e, this.inputController);
        var t = this.getObjectsStackByCoord(this.prepareMouseCoord(e.x), this.prepareMouseCoord(e.y), this.pixelClickEvent, !1, !0), n;
        if (0 < t.length)
            for (var t = this.sortStack(t), r = 0; r < t.length && (n = this.finalizeMouseCoords(t[r], e), n = t[r].dispatchEvent("click", {
                target : t[r], x : n.x, y : n.y
            }), !1 !== n);
        r++);
    };
    this.checkContextMenu = function(e) {
        e = Utils.getMouseCoord(e, this.inputController);
        var t = this.getObjectsStackByCoord(this.prepareMouseCoord(e.x), this.prepareMouseCoord(e.y), this.pixelClickEvent), n;
        if (0 < t.length)
            for (var t = this.sortStack(t), r = 0; r < t.length && (n = this.finalizeMouseCoords(t[r], e), n = t[r].dispatchEvent("contextmenu", {
                target : t[r], x : n.x, y : n.y
            }), !1 !== n);
        r++);
    };
    this.checkMouseMove = function(e) {
        e = Utils.getMouseCoord(e, this.inputController);
        for (r = 0; r < this.objects.length; r++)
            if (this.objects[r].dragged) {
                var t = e.x / Utils.globalScale / Utils.globalPixelScale, n = e.y / Utils.globalScale / Utils.globalPixelScale;
                this.objects[r].ignoreViewport || (t += this.viewport.x, n += this.viewport.y);
                this.objects[r].x = t - this.objects[r].dragX;
                this.objects[r].y = n - this.objects[r].dragY
            }
        var t = this.getObjectsStackByCoord(this.prepareMouseCoord(e.x), this.prepareMouseCoord(e.y), this.pixelMouseMoveEvent), r, i, s, n = [];
        if (0 < t.length) {
            t = this.sortStack(t);
            for (r = 0; r < t.length && (n.push(t[r]), s = this.finalizeMouseCoords(t[r], e), t[r].mouseOn || (i = t[r].dispatchEvent("mouseover", {
                target : t[r], x : s.x, y : s.y
            })
                ), t[r].mouseOn=!0, !1 !== i);
            r++);
            for (r = 0; r < t.length && (s = this.finalizeMouseCoords(t[r], e), i = t[r].dispatchEvent("mousemove", {
                target : t[r], x : s.x, y : s.y
            }), !1 !== i);
            r++);
        }
        for (r = 0; r < this.objects.length; r++)
            if (this.objects[r].mouseOn) {
                s=!1;
                for (i = 0; i < n.length; i++)
                    n[i] == this.objects[r] && (s=!0);
                    if (!s && (this.objects[r].mouseOn=!1, s = this.finalizeMouseCoords(t[r], e), i = this.objects[r].dispatchEvent("mouseout", {
                        target : this.objects[r], x : s.x, y : s.y
                    })
                        , !1 === i))break
            }
    };
    this.checkMouseDown = function(e) {
        e = Utils.getMouseCoord(e, this.inputController);
        var t = this.getObjectsStackByCoord(this.prepareMouseCoord(e.x), this.prepareMouseCoord(e.y), this.pixelMouseDownEvent), n;
        if (0 < t.length)
            for (var t = this.sortStack(t), r = 0; r < t.length && (n = this.finalizeMouseCoords(t[r], e), n = t[r].dispatchEvent("mousedown", {
                target : t[r], x : n.x, y : n.y
            }), !1 !== n);
        r++);
    };
    this.checkMouseUp = function(e) {
        e = Utils.getMouseCoord(e, this.inputController);
        var t = this.getObjectsStackByCoord(this.prepareMouseCoord(e.x), this.prepareMouseCoord(e.y), this.pixelMouseUpEvent, !0), n;
        if (0 < t.length)
            for (var t = this.sortStack(t), r = 0; r < t.length && (n = this.finalizeMouseCoords(t[r], e), n = t[r].dispatchEvent("mouseup", {
                target : t[r], x : n.x, y : n.y
            }), !1 !== n);
        r++);
    };
    this.clear = function() {
        for (var e = 0; e < this.objects.length; e++)
            this.objects[e].dispatchEvent("remove", {
                target: this.objects[e]
            });
        this.objects = [];
        this.tweens = [];
        this.timers = [];
        this.eventsListeners = [];
        this.objectsCounter = 0
    };
    this.hitTest = function(e, t) {
        if (0 == e.rotation && 0 == t.rotation) {
            var n = e.getX() - e.getWidth() / 2, r = e.getY() - e.getHeight() / 2, i = t.getX() - t.getWidth() / 2, s = t.getY() - t.getHeight() / 2, o = Math.max(r, s), u = Math.max(n, i), n = Math.min(n + e.getWidth(), i + t.getWidth()), r = Math.min(r + e.getHeight(), s + t.getHeight()) - o;
            return 0 < n - u && 0 < r?!0 : !1
        }
        u = e.getDrawRectangle();
        r = t.getDrawRectangle();
        return u.hitTestRectangle(r)
    };
    this.drawRectangle = function(e, t, n, r, i, s, o, u) {
        var a = this.canvas;
        a.ctx.globalAlpha = "undefined" != typeof o ? o : 1;
        a.ctx.fillStyle = i;
        a.ctx.strokeStyle = i;
        u || (e -= this.viewport.x, t -= this.viewport.y);
        e = e * Utils.globalScale * Utils.globalPixelScale;
        t = t * Utils.globalScale * Utils.globalPixelScale;
        n = n * Utils.globalScale * Utils.globalPixelScale;
        r = r * Utils.globalScale * Utils.globalPixelScale;
        s ? a.ctx.fillRect(e - n / 2, t - r / 2, n, r) : a.ctx.strokeRect(e - n / 2, t - r / 2, n, r)
    };
    this.drawCircle = function(e, t, n, r, i, s, o) {
        this.drawArc(e, t, n, 0, 2 * Math.PI, !1, r, i, s, o)
    };
    this.drawArc = function(e, t, n, r, i, s, o, u, a, f) {
        var l = this.canvas, c = l.ctx.lineWidth;
        "undefined" == typeof u && (u = "#000");
        l.ctx.strokeStyle = u;
        "undefined" == typeof o && (o = 1);
        l.ctx.lineWidth = o * Utils.globalScale * Utils.globalPixelScale;
        "undefined" == typeof a && (a = 1);
        l.ctx.globalAlpha = a;
        f || (e -= this.viewport.x, t -= this.viewport.y);
        e = e * Utils.globalScale * Utils.globalPixelScale;
        t = t * Utils.globalScale * Utils.globalPixelScale;
        n = n * Utils.globalScale * Utils.globalPixelScale;
        l.ctx.beginPath();
        l.ctx.arc(e, t, n, r, i, s);
        l.ctx.stroke();
        l.ctx.lineWidth = c
    };
    this.drawPolygon = function(e, t, n, r, i) {
        if ("object" == typeof e && e instanceof Array&&!(2 > e.length)) {
            for (var s = 0; s < e.length-1; s++)
                this.drawLine(e[s].x, e[s].y, e[s + 1].x, e[s + 1].y, t, n, r, i);
            this.drawLine(e[s].x, e[s].y, e[0].x, e[0].y, t, n, r, i)
        }
    };
    this.drawLine = function(e, t, n, r, i, s, o, u) {
        var a = this.canvas, f = a.ctx.lineWidth;
        a.ctx.strokeStyle = s ? s : "#000";
        a.ctx.lineWidth = i ? i * Utils.globalScale * Utils.globalPixelScale : 1 * Utils.globalScale * Utils.globalPixelScale;
        a.ctx.globalAlpha = o ? o : 1;
        u || (e -= this.viewport.x, t -= this.viewport.y, n -= this.viewport.x, r -= this.viewport.y);
        e = e * Utils.globalScale * Utils.globalPixelScale;
        t = t * Utils.globalScale * Utils.globalPixelScale;
        n = n * Utils.globalScale * Utils.globalPixelScale;
        r = r * Utils.globalScale * Utils.globalPixelScale;
        a.ctx.beginPath();
        a.ctx.moveTo(e, t);
        a.ctx.lineTo(n, r);
        a.ctx.stroke();
        a.ctx.lineWidth = f
    };
    this.start = function() {
        this.started || (this.started=!0, r(), i())
    };
    this.forceRender = function() {
        this.started && i()
    };
    this.stop = function() {
        this.started=!1
    };
    this.setTextStyle = function(e, t, n, r, i, s) {
        s = s ? s : this.canvas;
        s.ctx.fillStyle = r;
        s.ctx.strokeStyle = i;
        r = "";
        n && (r += n + " ");
        t && (r += Math.floor(t * Utils.globalScale * Utils.globalPixelScale) + "px ");
        e && (r += e);
        s.ctx.font = r
    };
    this.drawText = function(e, t, n, r, i, s, o) {
        o = o ? o : this.canvas;
        o.ctx.globalAlpha = "undefined" == typeof r ? 1 : r;
        i || (t -= this.viewport.x, n -= this.viewport.y);
        t = t * Utils.globalScale * Utils.globalPixelScale;
        n = n * Utils.globalScale * Utils.globalPixelScale;
        s && (t -= this.getTextWidth(e) / 2);
        o.ctx.fillText(e, t, n)
    };
    this.strokeText = function(e, t, n, r, i, s, o) {
        o = o ? o : this.canvas;
        o.ctx.globalAlpha = "undefined" == typeof r ? 1 : r;
        i || (t -= this.viewport.x, n -= this.viewport.y);
        t = t * Utils.globalScale * Utils.globalPixelScale;
        n = n * Utils.globalScale * Utils.globalPixelScale;
        s && (t -= this.getTextWidth(e) / 2);
        o.ctx.strokeText(e, t, n)
    };
    this.getTextWidth = function(e, t) {
        return (t ? t : this.canvas).ctx.measureText(e).width
    };
    this.allowStaticDebugDrawing = this.allowDebugDrawing=!1;
    this.renderObject = function(e, t) {
        if (!1 !== t.dispatchEvent("prerender", {
            target: t,
            canvas: e
        })) {
            var n = t.getAbsoluteCenter();
            ow = t.width * Utils.globalScale;
            oh = t.height * Utils.globalScale;
            ox = n.x * Utils.globalPixelScale * Utils.globalScale - Math.floor(ow / 2);
            oy = n.y * Utils.globalPixelScale * Utils.globalScale - Math.floor(oh / 2);
            or = t.rotation;
            scX = t.scaleX * Utils.globalPixelScale;
            scY = t.scaleY * Utils.globalPixelScale;
            canvasMod = Boolean(0 != or || 1 != scX || 1 != scY);
            t.ignoreViewport || (ox -= this.viewport.x * Utils.globalPixelScale * Utils.globalScale, oy -= this.viewport.y * Utils.globalPixelScale * Utils.globalScale);
            canvasMod && (e.ctx.save(), e.ctx.translate(ox + Math.floor(ow / 2), oy + Math.floor(oh / 2)), e.ctx.rotate(or), e.ctx.scale(scX, scY), ox =- Math.floor(ow / 2), oy =- Math.floor(oh / 2));
            e.ctx.globalAlpha = t.opacity;
            this.ceilSizes && (ow = Math.ceil(ow), oh = Math.ceil(oh));
            t.fillColor && (e.ctx.fillStyle = t.fillColor, e.ctx.strokeStyle = t.fillColor, e.ctx.fillRect(ox, oy, ow, oh));
            if (t.bitmap) {
                var n = t.bitmap.width, r = t.bitmap.height, i = t.currentLayer * ow + t.offset.left * Utils.globalScale, s = t.currentFrame * oh + t.offset.top * Utils.globalScale;
                if (i < n && s < r) {
                    var o = ow, u = oh, a=!1;
                    i + o > n && (o = n - i);
                    s + u > r && (u = r - s);
                    t.mask && (this.buffer.ctx.save(), this.buffer.ctx.clearRect(0, 0, o, u), this.buffer.ctx.drawImage(t.bitmap, i, s, o, u, 0, 0, o, u), this.buffer.ctx.globalCompositeOperation = "destination-in", this.buffer.ctx.drawImage(t.mask, 0, 0), s = i = 0, a=!0);
                    try {
                        e.ctx.drawImage(a ? this.buffer : t.bitmap, ~~i, ~~s, ~~o, ~~u, ~~ox, ~~oy, ~~ow, ~~oh)
                    } catch (f) {}
                    a && this.buffer.ctx.restore()
                }
            }
            canvasMod && e.ctx.restore();
            this.allowDebugDrawing && t.allowDebugDrawing && (!this.allowStaticDebugDrawing && t.static || t.debugDraw());
            t.dispatchEvent("render", {
                target: t,
                canvas: e
            })
        }
    };
    this.drawBackAlways = Utils.mobileCheckBrokenGalaxyPhones();
    this.drawBackBuffer = function(e, t) {
        !t && this.backBuffer && this.drawBackAlways && e.ctx.drawImage(this.backBuffer, 0, 0, e.width, e.height)
    };
    this.drawScene = function(e, t) {
        var n, r;
        e&&!e.ctx && (e.ctx = e.getContext("2d"));
        this.fillColor ? (e.ctx.fillStyle = this.fillColor, e.ctx.fillRect(0, 0, this.screenWidth * Utils.globalScale * Utils.globalPixelScale, this.screenHeight * Utils.globalScale * Utils.globalPixelScale), this.drawBackBuffer(e, t)) : this.clearLock || (this.clearScreen(e), this.drawBackBuffer(e, t));
        for (var i = 0; i < this.objects.length; i++)
            n = this.objects[i], r=!1, t || n["static"] || (r=!0), t && n["static"] && (r=!0), r && (n.destroy ? (this.removeChild(n), i--) : (n.nextFrame(), n.visible && this.renderObject(e, n)));
        t && (this.backBuffer = e)
    };
    this.tweens = [];
    this.createTween = function(e, t, n, r, i, o) {
        e = new Tween(e, t, n, r, i, o);
        s.tweens.push(e);
        return e
    };
    this.removeTween = function(e) {
        var t = null;
        if (isNaN(e))
            for (var n = 0; n < s.tweens.length; n++) {
                if (s.tweens[n] === e) {
                    t = n;
                    break
                }
            } else 
                t = e;
        s.tweens[t].pause();
        s.tweens.splice(t, 1);
        return t
    };
    this.clearObjectTweens = function(e) {
        for (var t = 0; t < s.tweens.length; t++)
            s.tweens[t].obj === e && (t = s.removeTween(t), t--)
    };
    this.updateTweens = function() {
        for (var e = 0; e < s.tweens.length; e++)
            s.tweens[e].tick() && (e = s.removeTween(e))
    };
    this.timers = [];
    this.setTimeout = function(e, t) {
        var n = new StageTimer(e, t);
        this.timers.push(n);
        return n
    };
    this.clearTimeout = function(e) {
        this.timers = Utils.removeFromArray(this.timers, e)
    };
    this.setInterval = function(e, t) {
        var n = new StageTimer(e, t, !0);
        this.timers.push(n);
        return n
    };
    this.clearInterval = function(e) {
        this.clearTimeout(e)
    };
    this.updateTimers = function() {
        for (var e = 0; e < this.timers.length; e++)
            this.timers[e].update() && (this.clearTimeout(this.timers[e]), e--)
    };
    this.box2dSync = function(e) {
        for (b = e.m_bodyList; b; b = b.m_next)
            b.sprite && (b.sprite.rotation = b.GetRotation(), e = b.GetPosition(), b.sprite.x = e.x, b.sprite.y = e.y, b.sprite.dispatchEvent("box2dsync", {
            target: b.sprite
        }))
    };
    this.processTouchEvent = function(e, t) {
        for (var n = 0; n < e.length; n++)
            s[t]({
                clientX: e[n].clientX,
                clientY: e[n].clientY
            })
    };
    this.inputController = null;
    this.addInputListeners = function(e) {
        -1 != navigator.userAgent.toLowerCase().indexOf("firefox") && navigator.userAgent.toLowerCase().indexOf("mobile");
        this.inputController = e;
        "ontouchstart"in e ? (e.ontouchstart = function(e) {
            s.processTouchEvent(e.touches, "checkMouseDown");
            s.processTouchEvent(e.touches, "checkClick")
        }, e.ontouchmove = function(e) {
            s.processTouchEvent(e.touches, "checkMouseMove")
        }, e.ontouchend = function(e) {
            s.processTouchEvent(e.changedTouches, "checkMouseUp")
        }) : (e.onclick = function(e) {
            s.checkClick(e)
        }, e.onmousemove = function(e) {
            s.checkMouseMove(e)
        }, e.onmousedown = function(e) {
            0 == e.button && s.checkMouseDown(e)
        }, e.onmouseup = function(e) {
            0 == e.button && s.checkMouseUp(e)
        }, e.oncontextmenu = function(e) {
            s.checkContextMenu(e)
        })
    };
    this.canvas && this.addInputListeners(this.canvas);
    this.onposttick = this.onpretick = null;
    this.eventsListeners = [];
    this.addEventListener = function(e, t) {
        EventsManager.addEvent(this, e, t)
    };
    this.removeEventListener = function(e, t) {
        EventsManager.removeEvent(this, e, t)
    };
    this.dispatchEvent = function(e, t) {
        return EventsManager.dispatchEvent(this, e, t)
    }
}
function Vector(e, t) {
    "undefined" == typeof e && (e = 0);
    this.x = e;
    "undefined" == typeof t && (t = 0);
    this.y = t;
    this.isZero = function() {
        return 0 == this.x && 0 == this.y
    };
    this.clone = function() {
        return new Vector(this.x, this.y)
    };
    this.add = function(e) {
        this.x += e.x;
        this.y += e.y;
        return this
    };
    this.subtract = function(e) {
        this.x -= e.x;
        this.y -= e.y;
        return this
    };
    this.mult = function(e) {
        this.x*=e;
        this.y*=e;
        return this
    };
    this.invert = function() {
        this.mult(-1);
        return this
    };
    this.rotate = function(e, t) {
        "undefined" == typeof t && (t = new Vector(0, 0));
        var n = this.clone();
        n.subtract(t);
        n.x = this.x * Math.cos(e) + this.y * Math.sin(e);
        n.y = this.x*-Math.sin(e) + this.y * Math.cos(e);
        n.add(t);
        this.x = n.x;
        this.y = n.y;
        return this
    };
    this.normalize = function(e, t) {
        "undefined" == typeof t && (t = new Vector(0, 0));
        this.subtract(t);
        this.rotate( - e);
        return this
    };
    this.getLength = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    this.distanceTo = function(e) {
        p2 = this.clone();
        p2.subtract(e);
        return p2.getLength()
    }
}
function ChainFinder(e, t, n, r) {
    "undefined" == typeof e && (e = []);
    t = Math.max(2, ~~t);
    n = Math.max(1, ~~n);
    "undefined" == typeof r && (r=!1);
    this.items = e;
    this.length = t;
    this.cols = n;
    this.rows = Math.floor(e.length / n);
    this.diagonal = r;
    this.chains=!1;
    this.inField = function(e) {
        return 0 > e || e >= this.items.length?!1 : !0
    };
    this.idInChain = function(e) {
        for (var t = 0; t < this.chains.length; t++)
            if (0 <= this.chains[t].indexOf(e))
                return t;
        return -1
    };
    this.isNeighbour = function(e, t) {
        if (!this.inField(t) || 0 <= this.idInChain(e))
            return !1;
        var n = Math.floor(e / this.cols), r = Math.floor(t / this.cols), i = Math.abs(e%this.cols - t%this.cols), n = Math.abs(n - r);
        return this.diagonal ? 0 < i + n && 2 > i && 2 > n : 1 == i + n
    };
    this.getNeighbours = function(e, t) {
        "undefined" == typeof t && (t=!1);
        var n = [e-1, e + 1, e - this.cols, e + this.cols];
        this.diagonal && (n.push(e - (this.cols-1)), n.push(e - (this.cols + 1)), n.push(e + (this.cols-1)), n.push(e + (this.cols + 1)));
        for (var r = []; 0 < n.length;) {
            var i = n.shift();
            this.isNeighbour(e, i) && (t && 0 > this.ids.indexOf(i) || r.push(i))
        }
        return r
    };
    this.checkChainLength = function(e) {
        return e ? e.length >= this.length : !1
    };
    this.ids = [];
    this.prepare = function() {
        this.ids = [];
        this.chains = [];
        for (var e = 0; e < this.items.length; e++)
            0 <= this.idInChain(e) || this.ids.push(e)
    };
    this.findChains = function() {
        this.prepare();
        if (0 == this.items.length)
            return this.chains;
        for (; 0 < this.ids.length;) {
            var e = this.ids.shift(), e = this.getChain(e);
            this.checkChainLength(e) && this.chains.push(e)
        }
        return this.chains
    };
    this.getChain = function(e, t) {
        "undefined" == typeof t && (t = []);
        0 > t.indexOf(e) && t.push(e);
        for (var n = this.getNeighbours(e, !0); 0 < n.length;) {
            var r = n.shift();
            this.empty(this.items[r]) || 0 <= t.indexOf(r) ||!this.compare(this.items[r], this.items[e]) || (this.ids.splice(this.ids.indexOf(r), 1), t = this.getChain(r, t))
        }
        return t
    };
    this.findPossibleChains = function(e) {
        this.prepare();
        var t = this.items[e];
        if (!this.inField(e))
            return !1;
        for (var n = {}, r = this.getNeighbours(e, !0); 0 < r.length;) {
            this.prepare();
            var i = r.shift(), s = this.items[i];
            this.empty(s) || (this.items[e] = s, n[s] || (n[s] = []), n[s] = this.getChain(i, n[s]))
        }
        this.items[e] = t;
        return n
    };
    this.findMaxPossibleChain = function(e) {
        e = this.findPossibleChains(e);
        if (!e)
            return !1;
        var t=!1, n =- 1, r;
        for (r in e)
            this.checkChainLength(e[r])&&~~r > n && (t = e[r], n=~~r);
        return t
    };
    this.findMinPossibleChain = function(e) {
        e = this.findPossibleChains(e);
        if (!e)
            return !1;
        var t=!1, n = Number.MAX_VALUE, r;
        for (r in e)
            this.checkChainLength(e[r]) && r < n && (t = e[r], n = r);
        return t
    };
    this.findLongestPossibleChain = function(e) {
        e = this.findPossibleChains(e);
        if (!e)
            return !1;
        var t=!1, n =- 1, r;
        for (r in e)
            this.checkChainLength(e[r]) && e[r].length > n && (t = e[r], n = r);
        return t
    };
    this.findShortestPossibleChain = function(e) {
        e = this.findPossibleChains(e);
        if (!e)
            return !1;
        var t=!1, n = Number.MAX_VALUE, r;
        for (r in e)
            this.checkChainLength(e[r]) && e[r].length < n && (t = e[r], n = r);
        return t
    };
    this.getChainType = function(e) {
        if (!1 === e)
            return 0;
        for (var t = 0; t < e.length; t++)
            if (!this.empty(e[t]))
                return this.items[e[t]];
        return 0
    };
    this.compare_callback = null;
    this.compare = function(e, t) {
        return this.compare_callback ? this.compare_callback(e, t) : e == t
    };
    this.empty_callback = null;
    this.empty = function(e) {
        return this.empty_callback ? this.empty_callback(e) : 0==~~e
    }
}
function AudioPlayer() {
    var e = this;
    this.disabled=!1;
    this.basePath = "";
    this.mp3Support=!0;
    this.delayPlay = this.webAudioSupport=!1;
    this.audioWrapper = null;
    this.busy = this.locked=!1;
    this.startPlayTime = 0;
    this.onend = null;
    this.createNewAudio = function() {
        if (this.webAudioSupport) {
            var e = AudioMixer.waContext.createBufferSource();
            e.connect(AudioMixer.waContext.destination);
            return e
        }
        return document.createElement("audio")
    };
    this.init = function(e, t) {
        this.webAudioSupport = t;
        this.basePath = e ? e : "";
        this.delayPlay = "ontouchstart"in window;
        this.audioWrapper = this.createNewAudio();
        var n = document.createElement("audio");
        n.canPlayType ? this.mp3Support = "" != n.canPlayType("audio/mpeg") : this.disabled=!0;
        return !this.disabled
    };
    this.play = function(e, t) {
        if (this.disabled)
            return !1;
        var n = this.basePath + "/" + e + (this.mp3Support ? ".mp3" : ".ogg");
        this.stop();
        this.audioWrapper = this.createNewAudio();
        this.audioWrapper.doLoop = t?!0 : !1;
        if (this.webAudioSupport) {
            var r = this;
            this.loadSound(n, function(e) {
                r.audioWrapper.buffer = e;
                r.audioWrapper.noteOn(0);
                r.startPlayTime = (new Date).getTime();
                r.audioWrapper.loop = t;
                r.waCheckInterval = setInterval(function() {
                    r.audioWrapper ? r.audioWrapper.playbackState == r.audioWrapper.FINISHED_STATE && r.controlPlay() : clearInterval(r.waCheckInterval)
                }, 100)
            })
        } else 
            this.audioWrapper.src = n, this.audioWrapper.type = this.mp3Support ? "audio/mpeg" : "audio/ogg", this.audioWrapper.loop=!1, this.audioWrapper.preload = "auto", this.audioWrapper.load(), this.delayPlay ? this.audioWrapper.addEventListener("canplay", this.readyToPlay) : this.audioWrapper.play(), this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
        this.busy=!0;
        this.startPlayTime = (new Date).getTime()
    };
    this.loadSound = function(e, t) {
        if (AudioMixer.buffer[e])
            t && t(AudioMixer.buffer[e]);
        else {
            var n = new XMLHttpRequest;
            n.open("GET.html", e, !0);
            n.responseType = "arraybuffer";
            n.onload = function() {
                AudioMixer.waContext.decodeAudioData(this.response, function(n) {
                    AudioMixer.buffer[e] = n;
                    t && t(n)
                })
            };
            n.send()
        }
    };
    this.readyToPlay = function(e) {
        e.currentTarget.play()
    };
    this.stop = function() {
        this.busy=!1;
        try {
            this.webAudioSupport ? this.audioWrapper.noteOff(0) : (this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.pause(), this.audioWrapper.currentTime = 0), this.audioWrapper = null
        } catch (e) {}
    };
    this.pause = function() {
        this.webAudioSupport ? e.audioWrapper && e.audioWrapper.disconnect() : this.audioWrapper.pause()
    };
    this.resume = function() {
        this.webAudioSupport ? e.audioWrapper && e.audioWrapper.connect(AudioMixer.waContext.destination) : this.audioWrapper.play()
    };
    this.controlPlay = function() {
        if (e.audioWrapper.doLoop)
            this.webAudioSupport || (e.audioWrapper.pause(), e.audioWrapper.currentTime = 0, e.audioWrapper.play());
        else {
            e.busy=!1;
            if ("function" == typeof e.onend)
                e.onend();
            this.waCheckInterval && clearInterval(this.waCheckInterval)
        }
    };
    this.getPosition = function() {
        if (this.webAudioSupport) {
            if (!this.startPlayTime)
                return 0;
            var e = this.getDuration();
            if (!e)
                return 0;
            var t = ((new Date).getTime() - this.startPlayTime) / 1e3;
            return t <= e ? t : this.audioWrapper.doLoop ? t - Math.floor(t / e) * e : e
        }
        return this.audioWrapper.currentTime ? this.audioWrapper.currentTime : 0
    };
    this.getDuration = function() {
        return this.webAudioSupport ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration : 0 : this.audioWrapper.duration ? this.audioWrapper.duration : 0
    }
}
function AudioMixer(e, t) {
    this.singleChannelMode = this.webAudioSupport=!1;
    this.channels = [];
    this.init = function(e, t) {
        if (this.webAudioSupport = "webkitAudioContext"in window) {
            AudioMixer.waContext = new webkitAudioContext;
            var n = AudioMixer.waContext.createBuffer(1, 1, 22050);
            sound = AudioMixer.waContext.createBufferSource();
            sound.buffer = n;
            sound.connect(AudioMixer.waContext.destination);
            sound.noteOn(0)
        }
        this.webAudioSupport||-1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode=!0, t = 1);
        this.path = e;
        this.channels = [];
        for (n = 0; n < t; n++)
            this.channels[n] = new AudioPlayer, this.channels[n].init(e, this.webAudioSupport);
        var r, i;
        "undefined" !== typeof document.hidden ? (r = "hidden", i = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (r = "mozHidden", i = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (r = "msHidden", i = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (r = "webkitHidden", i = "webkitvisibilitychange");
        var s = this;
        document.addEventListener(i, function() {
            if (document[r])
                for (var e = 0; e < s.channels.length; e++)
                    s.channels[e].pause();
            else 
                for (e = 0; e < s.channels.length; e++)
                    s.channels[e].resume()
        }, !1)
    };
    this.play = function(e, t, n, r) {
        var i =- 1, i = "number" == typeof r ? r : this.getFreeChannel(n);
        0 <= i && i < this.channels.length && (this.channels[i].stop(), this.channels[i].play(e, t));
        return this.channels[i]
    };
    this.stop = function(e) {
        0 <= e && e < this.channels.length && this.channels[e].stop()
    };
    this.getFreeChannel = function(e) {
        for (var t =- 1, n = [], r =- 1, i = 0, s = 0; s < this.channels.length; s++)
            this.channels[s].locked || (this.channels[s].busy ? (i = (new Date).getTime(), i -= this.channels[s].startPlayTime, i > r && (r = i)) : n.push(s));
        0 == n.length?!e && 0 <= r && (t = r) : t = n[0];
        return t
    };
    this.init(e, t)
}
function gameButton(e, t, n) {
    var r = library.getSprite(e);
    r.x = t;
    r.y = n;
    r.gotoAndStop(1);
    r.onmousedown = function() {
        r.gotoAndStop(0)
    };
    r.onmouseout = function() {
        r.gotoAndStop(1)
    };
    r.onmouseup = function() {
        r.gotoAndStop(1);
        0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("button_click", !1, !1, 0)
    };
    return r
}
function startLoad() {
    var e = Utils.getMobileScreenResolution(landscape);
    Utils.globalScale = e.scale;
    Utils.createLayout(document.getElementById("main_container"), e, landscape);
    Utils.addEventListener("fitlayout", function() {
        stage && (stage.drawScene(document.getElementById("screen")), buildBackground());
        setBackgroundScale()
    });
    Utils.addEventListener("lockscreen", function() {
        stage && stage.started && stage.stop()
    });
    Utils.addEventListener("unlockscreen", function() {
        stage&&!stage.started && stage.start()
    });
    Utils.mobileHideAddressBar();
    Utils.checkOrientation(landscape);
    mixer = new AudioMixer("music", 1);
    mixer2 = new AudioMixer("music", 1);
    library = new AssetsLibrary("images", Utils.globalScale, assets);
    TTLoader.create(loadImagesEnd, !0);
    library.load(TTLoader.loadComplete, TTLoader.showLoadProgress)
}
function loadImagesEnd(e) {
    document.getElementById("progress_container").style.display = "none";
    document.getElementById("screen_container").style.display = "block";
    document.getElementById("screen_background_container").style.display = "block";
    FontManager.registerFont("baveuse", Charset.latin, 9, 14);
    gameState = STATE_MENU;
    iosMode =- 1 != navigator.userAgent.toLowerCase().indexOf("mac");
    android =- 1 != navigator.userAgent.toLowerCase().indexOf("android");
    createScene()
}
function showMenu() {
    gameState = STATE_MENU;
    createScene()
}
function createStage() {
    stage && (stage.destroy(), stage.stop());
    stage = new Stage("screen", 320, 480, !1);
    stage.delay = 1e3 / fps;
    stage.ceilSizes=!0;
    stage.onpretick = preTick;
    stage.onposttick = postTick;
    stage.showFPS=!1
}
function createScene() {
    createStage();
    gameState == STATE_MENU && createMenu();
    gameState == STATE_SELECT_DIFFICULTY && selectDifficulty();
    gameState == STATE_MISSION_INFO && showMissionInfo();
    gameState == STATE_GAME && createGame();
    gameState == STATE_VICTORY && showVictoryScreen();
    gameState == STATE_DEFEAT && showDefeatScreen();
    gameState == STATE_HIGHSCORES && goHome();
    gameState == STATE_CREDITS && showEvolution();
    gameState == STATE_TUTORIAL && showTutorialMenu();
    setBackground("#FFFFFF url('images/" + Utils.globalScale + "/gme-bg.jpg')");
    buildBackground();
    stage.start()
}
function setBackground(e) {
    e !== lastBackground && (document.getElementById("screen_background_container").style.background = e, document.getElementById("screen_background_container").style.backgroundRepeat = "no-repeat", document.getElementById("screen_background_container").style.backgroundPosition = "center top", lastBackground = e, setBackgroundScale())
}
function setBackgroundScale() {
    var e = Utils.globalScale * Utils.globalPixelScale;
    document.getElementById("screen_background_container").style.backgroundSize = 870 * e + "px " + 480 * e + "px"
}
function showDefeatScreen() {
    stage.addChild(library.getSprite("null", {
        x: 160,
        y: 240,
        "static": !0,
        onmouseup: function() {
            gameState = STATE_GAME;
            createScene()
        }
    }));
    stage.addChild(library.getSprite("popup_loose", {
        x: 160,
        y: 180
    }));
    var e = new gameButton("menu", 160, 455);
    e.addEventListener("mouseup", function() {
        showMenu();
        return !1
    });
    stage.addChild(e);
    checkAndSetHighscores()
}
function createMenu() {
    stage.addChild(library.getSprite("field-main-logo", {
        x: 160,
        y: 80
    }));
    stage.addChild(library.getSprite("field-main-btn-bg", {
        x: 160,
        y: 280
    }));
    var e = new gameButton("play", 158, 201);
    e.addEventListener("mouseup", function(e) {
        gameState = STATE_SELECT_DIFFICULTY;
        createScene();
        return !1
    });
    stage.addChild(e);
    e = new gameButton("highscores", 171, 302);
    e.addEventListener("mouseup", function(e) {
        gameState = STATE_HIGHSCORES;
        createScene()
    });
    stage.addChild(e);
    e = new gameButton("credits", 145, 375);
    e.addEventListener("mouseup", function(e) {
        gameState = STATE_CREDITS;
        createScene()
    });
    stage.addChild(e);
    e = new gameButton("qmark", 55, 450);
    e.addEventListener("mouseup", function(e) {
        gameState = STATE_TUTORIAL;
        createScene()
    });
    stage.addChild(e);
    1 == Utils.getCookie("soundOn") || ignoreMenuTheme || mixer2.play("main_theme", !0, !1, 0);
    addSoundIcon()
}
function testChance() {
    var e = rouletteProbability, t = 0, n;
    for (n in e)
        t += e[n].n;
    t = Math.floor(Math.random() * t);
    for (n in e)
        if (t -= e[n].n, 0 >= t)
            return e[n].v;
    return 1
}
function playRoulette() {
    for (var e = [], t = [], n = 0; 3 > n; n++) {
        t.push(testChance());
        var r = new GameElement(t[n]);
        r.x = 102 + 58 * n;
        r.y = 219;
        r.isRoulette=!0;
        e.push(r);
        r = library.getSprite("coin_rotate");
        r.x = 102 + 58 * n;
        r.y = 219;
        r.animDelay = 1;
        r.isRoulette=!0;
        r.gotoAndPlay(0);
        tempRouletteArray.push(r);
        stage.addChild(r)
    }
    setTimeout(function() {
        tempRouletteArray[0].onenterframe = function(t) {
            8 == t.target.currentFrame && (tempRouletteArray[0].destroy=!0, stage.addChild(e[0]), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_popup", !1, !1, 0))
        }
    }, 2e3);
    setTimeout(function() {
        tempRouletteArray[1].onenterframe = function(t) {
            8 == t.target.currentFrame && (tempRouletteArray[1].destroy=!0, stage.addChild(e[1]), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_popup", !1, !1, 0))
        }
    }, 4e3);
    setTimeout(function() {
        tempRouletteArray[2].onenterframe = function(t) {
            8 == t.target.currentFrame && (tempRouletteArray[2].destroy=!0, stage.addChild(e[2]), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_popup", !1, !1, 0))
        };
        setTimeout(function() {
            checkIfRouletteWon(t)
        }, 1e3)
    }, 6e3)
}
function checkIfRouletteWon(e) {
    if (e[0] == e[1] && e[0] != e[2] || e[0] == e[2] && e[0] != e[1] || e[1] == e[2] && e[0] != e[1])
        0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_nice", !1, !1, 0);
    e[0] == e[1] && e[0] == e[2] ? (coinsInc(), setUserCoins(), stage.addChild(library.getSprite("text2", {
        x : 160, y: 260
    })), drawHighscores(1, 140, 285), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_super_nice", !1, !1, 0)) : (stage.addChild(library.getSprite("text3", {
        x: 160,
        y: 260
    })), drawHighscores(0, 140, 285), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("roulette_not_nice", !1, !1, 0));
    stage.addChild(library.getSprite("text1", {
        x: 170,
        y: 285
    }))
}
function showVictoryScreen() {
    0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("victory", !1, !1, 0);
    var e, t = "ultimate" == currentDifficulty?!0 : !1, n;
    if (t && maxUnlockedItem.newUnlocked)
        maxUnlockedItem.newUnlocked && (e = 240, stage.addChild(library.getSprite("back_field_win_3", {
            x : 160, y : e-40
        })), e += 43, drawLevelScore(143), playRoulette());
    else {
        0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("victory", !1, !1, 0);
        n = LEVELS[current_game_mode].upgrades;
        n = t ? maxUnlockedItem.t : n[n.length-1];
        e = 240;
        stage.addChild(library.getSprite("back_field_win", {
            x: 160,
            y: e-40
        }));
        var r = library.getSprite("light_win");
        r.x = 160;
        r.y = 200;
        stage.addChild(r);
        stage.setInterval(function() {
            r.rotateBy(Math.PI / 160)
        }, 2);
        n = new GameElement(n, t);
        n.setPosition(160, 205);
        stage.addChild(n);
        drawLevelScore(265)
    }
    n = new gameButton("win_next", 243, e + 18);
    n.addEventListener("mouseup", function(e) {
        gameState = STATE_SELECT_DIFFICULTY;
        createScene()
    });
    stage.addChild(n);
    e = new gameButton("win_replay", 76, e + 18);
    e.addEventListener("mouseup", function(e) {
        gameState = STATE_GAME;
        createScene()
    });
    stage.addChild(e);
    t || levelCompleted();
    checkAndSetHighscores()
}
function addSoundIcon() {
    ignoreMenuTheme=!0;
    sound = library.getSprite("sound");
    sound.x = 275;
    sound.y = 455;
    1 == Utils.getCookie("soundOn") ? (sound.gotoAndStop(0), soundOn=!1) : (sound.gotoAndStop(1), soundOn=!0);
    sound.state = 1;
    sound.onmouseup = soundIconOnChange;
    stage.addChild(sound)
}
function showHighscores() {
    stage.addChild(library.getSprite("field_highscore", {
        x: 160,
        y: 240,
        "static": !0
    }));
    var e = new gameButton("menu", 160, 400);
    e.addEventListener("mouseup", showMenu);
    stage.addChild(e);
    addSoundIcon();
    for (var e = [], t = 1; 11 > t; t++) {
        var n = Utils.getCookie("maxScore" + t), n = null == n ? 0: n, n = parseInt(n);
        e.push(n)
    }
    e.sort(function(e, t) {
        return e > t?-1 : e < t ? 1 : 0
    });
    t = 0;
    for (n = e.length; t < n; t++)
        drawHighscores(t + 1, 60, 92 + 30 * t, "numbers"), drawHighscores(e[t], 265, 92 + 30 * t)
}
function drawHighscores(e, t, n, r) {
    var i = library.getAsset("font1", !0).bitmap;
    e += "";
    if ("numbers" == r)
        for (r = 0; r < e.length; r++)
            mc = new Sprite(i, 12, 20, 10), mc.gotoAndStop(e.substr(r, 1)), mc.x = t + 12 * r, mc.y = n, stage.addChild(mc);
    else 
        for (r = e.length; 0 < r; r--)
            mc = new Sprite(i, 12, 20, 10), mc.gotoAndStop(e.substr(e.length - r, 1)), mc.x = t-12 * r, mc.y = n, stage.addChild(mc)
}
function checkAndSetHighscores() {
    play68_submitScore(current_game_mode, gameScore);
    for (var e = [], t = 1; 11 > t; t++) {
        var n = Utils.getCookie("maxScore" + t);
        void 0 != n && e.push(n)
    }
    t = e.length;
    if (10 > t)
        t++, Utils.setCookie("maxScore" + t, gameScore);
    else 
        for (t = 0; 10 > t; t++)
            if (e[t] < gameScore) {
                t++;
                Utils.setCookie("maxScore" + t, gameScore);
                break
            }
}
function moveIconsVert(e, t) {
    for (var n, r = 0, i = stage.objects.length; r < i; r++) {
        var s = stage.objects[r];
        s.first && (n = s, 0 < e && 110 <= s.y + e && (e = 110 - s.y, t && (t[0].visible=!1)), 0 > e&&-660 >= s.y + e && (e =- 660 - s.y, t && (t[1].visible=!1)));
        if (s.first && 110 <= s.y && 0 < e)
            return t && (t[0].visible=!1), !1;
        if (s.first&&-660 >= s.y && 0 > e)
            return t && (t[1].visible=!1), !1;
        if (s.isMovable) {
            s.y += e;
            var o = s.y;
            s.visible = 90 >= o || 390 <= o?!1 : !0;
            s.opacity = 90 < o && 110 >= o ? (o-90) / 20 : 360 <= o && 390 > o ? Math.abs(390 - o) / 30 : 1
        }
    }
    t && (t[0].visible=!0, t[1].visible=!0);
    110 <= n.y && t && (t[0].visible=!1);
    -660 >= n.y && t && (t[1].visible=!1)
}
function showEvolution() {
    scrollLocked=!1;
    var e = new Sprite(null, 320, 480);
    e.x = 160;
    e.y = 240;
    e.static=!0;
    e.onmousedown = function() {
        startScrollPosition = window.event.pageY;
        scrollLocked=!0
    };
    e.onmouseup = function() {
        scrollLocked=!1
    };
    e.onmousemove = function() {
        if (scrollLocked) {
            var e = window.event.pageY;
            moveIconsVert((e - startScrollPosition) / 1.85, [t, n]);
            startScrollPosition = e
        }
    };
    stage.addChild(e);
    stage.addChild(library.getSprite("back", {
        x: 160,
        y: 235
    }));
    e = library.getSprite("evol_back", {
        x: 160,
        y: 230
    });
    stage.setZIndex(e, 100);
    stage.addChild(e);
    var t = new Sprite(library.getSprite("arrow_up").bitmap, 31, 12);
    t.x = 160;
    t.y = 70;
    t.onclick = function() {
        moveIconsVert(85, [t, n])
    };
    t.visible=!1;
    stage.setZIndex(t, 150);
    stage.addChild(t);
    var n = new Sprite(library.getSprite("arrow_down").bitmap, 31, 12);
    n.x = 160;
    n.y = 405;
    n.onclick = function() {
        moveIconsVert(-85, [t, n])
    };
    stage.setZIndex(n, 150);
    stage.addChild(n);
    e = new gameButton("menu", 160, 450);
    e.addEventListener("mousedown", function() {
        clickForbidden=!1
    });
    e.addEventListener("mouseup", function() {
        clickForbidden || (showMenu(), clickForbidden=!0)
    });
    stage.addChild(e);
    addSoundIcon();
    sound.addEventListener("mousedown", function() {
        clickForbidden=!1
    });
    sound.onmouseup = function(e) {
        clickForbidden || (clickForbidden=!0, soundIconOnChange())
    };
    stage.addChild(library.getSprite("Amoeba", {
        x: 160,
        y: 110,
        isMovable: !0,
        first: !0
    }));
    stage.addChild(library.getSprite("Jellyfish", {
        x: 160,
        y: 195,
        isMovable: !0
    }));
    stage.addChild(library.getSprite("Fish", {
        x: 160,
        y: 280,
        isMovable: !0
    }));
    e = Utils.getCookie("icon4ul") ? "lizard" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 365,
        isMovable: !0
    }));
    e = Utils.getCookie("icon5ul") ? "wolf" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 450,
        isMovable: !0
    }));
    e = Utils.getCookie("icon6ul") ? "ape" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 535,
        isMovable: !0
    }));
    e = Utils.getCookie("icon7ul") ? "human" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 620,
        isMovable: !0
    }));
    e = Utils.getCookie("icon11ul") ? "humanoid" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 705,
        isMovable: !0
    }));
    e = Utils.getCookie("icon12ul") ? "superhuman" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 790,
        isMovable: !0
    }));
    e = Utils.getCookie("icon13ul") ? "cyborg" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 875,
        isMovable: !0
    }));
    e = Utils.getCookie("icon14ul") ? "geek" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 960,
        isMovable: !0
    }));
    e = Utils.getCookie("icon15ul") ? "zombie" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 1045,
        isMovable: !0
    }));
    e = Utils.getCookie("icon16ul") ? "superbrains" : "Unknown";
    stage.addChild(library.getSprite(e, {
        x: 160,
        y: 1130,
        isMovable: !0
    }));
    moveIconsVert(0)
}
function setDifficulty(e) {
    e=~~e.target.mode;
    gameState = STATE_MISSION_INFO;
    current_game_mode = e = Math.max(0, Math.min(LEVELS.length, ~~e));
    createScene()
}
function selectDifficulty() {
    stage.addChild(library.getSprite("field-select-level-bg", {
        x: 161,
        y: 240
    }));
    var e = new gameButton("menu", 160, 455);
    e.addEventListener("mouseup", showMenu);
    stage.addChild(e);
    addLevelIcon("easy");
    addLevelIcon("medium");
    addLevelIcon("hard");
    addLevelIcon("expert");
    addLevelIcon("ultimate");
    addSoundIcon();
    showUnlockAnimation && (addUnlockAnimation(), showUnlockAnimation=!1)
}
function addUnlockAnimation() {
    var e;
    switch (currentDifficulty) {
    case"easy":
        e = 175;
        break;
    case"medium":
        e = 245;
        break;
    case"hard":
        e = 315;
        break;
    case"expert":
        e = 385
    }
    var t = library.getSprite("lock");
    t.x = 230;
    t.y = e;
    t.animDelay = 3;
    t.onenterframe = function(e) {
        10 == e.target.currentFrame && (e.target.destroy=!0)
    };
    stage.addChild(t)
}
function addLevelIcon(e) {
    var t = library.getSprite(e);
    t.x = 160;
    switch (e) {
    case"easy":
        t.y = 105;
        t.mode = D_SIMPLE;
        t.gotoAndStop(0);
        t.onmouseup = function(e) {
            currentDifficulty = "easy";
            setDifficulty(e)
        };
        break;
    case"medium":
        t.y = 175;
        t.mode = D_NORMAL;
        void 0 == Utils.getCookie("easy_level_completed") ? t.gotoAndStop(0) : (t.gotoAndStop(1), t.onmouseup = function(e) {
            currentDifficulty = "medium";
            setDifficulty(e)
        });
        break;
    case"hard":
        t.y = 245;
        t.mode = D_HARD;
        void 0 == Utils.getCookie("medium_level_completed") ? t.gotoAndStop(0) : (t.gotoAndStop(1), t.onmouseup = function(e) {
            currentDifficulty = "hard";
            setDifficulty(e)
        });
        break;
    case"expert":
        t.y = 315;
        t.mode = D_EXPERT;
        void 0 == Utils.getCookie("hard_level_completed") ? t.gotoAndStop(1) : (t.gotoAndStop(0), t.onmouseup = function(e) {
            currentDifficulty = "expert";
            setDifficulty(e)
        });
        break;
    case"ultimate":
        t.y = 385, t.mode = D_ULTIMATE, void 0 == Utils.getCookie("expert_level_completed") ? t.gotoAndStop(1) : (t.gotoAndStop(0), t.onmouseup = function(e) {
            currentDifficulty = "ultimate";
            setDifficulty(e)
        })
    }
    stage.addChild(t)
}
function levelCompleted() {
    Utils.getCookie(currentDifficulty + "_level_completed") || (Utils.setCookie(currentDifficulty + "_level_completed", !0), showUnlockAnimation=!0, "easy" == currentDifficulty && Utils.setCookie("icon4ul", !0), "medium" == currentDifficulty && Utils.setCookie("icon5ul", !0), "hard" == currentDifficulty && Utils.setCookie("icon6ul", !0), "expert" == currentDifficulty && Utils.setCookie("icon7ul", !0))
}
function createGame() {
    if (gameState != STATE_GAME)
        return !1;
    clearGame();
    stage.addChild(library.getSprite("field-play-playingfield", {
        x: 161,
        y: 260,
        tatic: !0
    }));
    stage.addChild(library.getSprite("field-play-score-bg", {
        x: 145,
        y: 111,
        "static": !0
    }));
    var e = new gameButton("menu", 80, 30);
    e.addEventListener("mouseup", showMenu);
    stage.addChild(e);
    e = new gameButton("replay", 240, 30);
    e.addEventListener("mouseup", createScene);
    stage.addChild(e);
    addSoundIcon();
    e = new gameButton("plus", 281, 106);
    e.addEventListener("mouseup", function() {
        tutorialActivated || showShop();
        tutorialActivated && tut14completed && (showShop(), tutDone())
    });
    stage.addChild(e);
    field = new GameField(LEVELS[current_game_mode]);
    field.create()
}
function clearGame() {
    score = field = null;
    maxUnlockedItem = {
        t: 3,
        newUnlocked: !1
    }
}
function showShop() {
    field.locked=!0;
    var e = new Sprite(null, 320, 480);
    e.x = 160;
    e.y = 240;
    e.isShopElement=!0;
    e.onmouseup = function() {
        destroyShop();
        return !1
    };
    stage.addChild(e);
    e = library.getSprite("popup_bg");
    e.x = 160;
    e.y = 240;
    e.isShopElement=!0;
    e.onmouseup = function() {
        return !1
    };
    stage.addChild(e);
    drawText("coins", 200, 180);
    e = library.getSprite("ether");
    e.x = 125;
    e.y = 217;
    e.isShopElement=!0;
    e.gametype = T_ETHER;
    e.onmouseup = buyItem;
    stage.addChild(e);
    e = library.getSprite("fire");
    e.x = 195;
    e.y = 217;
    e.gametype = T_FIRE;
    e.isShopElement=!0;
    e.onmouseup = buyItem;
    stage.addChild(e);
    e = new gameButton("buy", 160, 290);
    e.onmouseup = buyCoins;
    e.isShopElement=!0;
    stage.addChild(e)
}
function buyCoins() {}
function coinsInc() {
    coins++;
    0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("coin_add", !1, !1, 0)
}
function addCoins() {
    usedPoints -= 1e6;
    coinsInc();
    var e = library.getSprite("light_win");
    e.x = 281;
    e.y = 106;
    stage.addChild(e);
    var t = stage.setInterval(function() {
        e.rotateBy(Math.PI / 160)
    }, 3);
    setTimeout(function() {
        stage.clearInterval(t);
        e.destroy=!0
    }, 3500);
    setUserCoins();
    var n = library.getSprite("coin_rotate12");
    n.x = 160;
    n.y = 83;
    n.animDelay = 2;
    n.gotoAndPlay(0);
    n.onenterframe = function(e) {
        17 == e.target.currentFrame && (n.destroy=!0)
    };
    stage.addChild(n)
}
function buyItem(e) {
    var t = e.target.gametype;
    if (!(t == T_ETHER && 3 > coins || t == T_FIRE && 1 > coins)) {
        var n = new GameElement(t);
        n.setPosition(e.target.x, e.target.y);
        var r = new GameElement(field.storedElement.gametype);
        r.setPosition(field.storedElement.x, field.storedElement.y);
        stage.addChild(n);
        field.locked=!0;
        n.moveTo(field.storedElement.x, field.storedElement.y, 6, Easing.cubic.easeIn, function(e) {
            field.storedElement.setType(e.target.obj.gametype);
            field.storedElement.visible=!0;
            stage.removeChild(e.target.obj);
            field.locked=!1
        });
        r.gametype > T_EMPTY && (field.storedElement.visible=!1, stage.removeChild(e.target.obj));
        coins -= t == T_ETHER ? 3 : 1;
        setUserCoins();
        drawText("coins", 200, 180)
    }
}
function destroyShop() {
    for (var e = stage.objects.length, t = 0, e = stage.objects.length; t < e; t++) {
        var n = stage.objects[t];
        n.isShopElement && (n.destroy=!0)
    }
    field.locked=!1
}
function checkIfNeedPopup(e) {
    if (3 >= field.upgradeType || 8 == field.upgradeType || Utils.getCookie("icon" + field.upgradeType + "ul"))
        return e(), !1;
    if ("number" == typeof field.upgradeType)
        showEvolutionPopup(field.upgradeType, e);
    else 
        return e(), !0
}
function showEvolutionPopup(e, t) {
    field.locked=!0;
    var n = new Sprite(null, 320, 480);
    n.setPosition(160, 240);
    n.onmouseup = function() {
        n.destroy=!0;
        r.destroy=!0;
        s.destroy=!0;
        field.locked=!1;
        t();
        return !1
    };
    stage.addChild(n);
    var r = new Sprite(library.getAsset("back_field-evolution-popup").bitmap, 411, 313);
    r.setPosition(160, 240);
    stage.addChild(r);
    var i;
    switch (e) {
    case 4:
        i = "lizard";
        break;
    case 5:
        i = "wolf";
        break;
    case 6:
        i = "ape";
        break;
    case 7:
        i = "human";
        break;
    case 11:
        i = "humanoid";
        break;
    case 12:
        i = "superhuman";
        break;
    case 13:
        i = "cyborg";
        break;
    case 14:
        i = "geek";
        break;
    case 15:
        i = "zombie";
        break;
    case 16:
        i = "superbrains"
    }
    var s = new Sprite(library.getSprite(i).bitmap, 256, 80);
    s.setPosition(r.x + 6, r.y + 8);
    stage.addChild(s);
    Utils.setCookie("icon" + field.upgradeType + "ul", !0)
}
function shuffle(e) {
    for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n);
}
function initializeUserScore() {
    var e = Utils.getCookie("coins");
    void 0 != e && (coins = parseInt(e));
    gameScore = usedPoints = 0
}
function setUserCoins() {
    Utils.setCookie("coins", coins)
}
function getScore() {
    return score?~~score.getString() : 0
}
function setScore(e, t, n, r) {
    gameScore += e;
    usedPoints += e;
    1e6 <= usedPoints && addCoins();
    drawText("gameScore", 150, 110);
    void 0 != t && (t=~~t, r=~~r, 0 != t && (e = new GUIString("baveuse", !1, {
        align : STR_ALIGN_CENTER, valign : STR_VALIGN_MIDDLE, x : ~~n, y : r
    }), e.write((0 < t ? "+" : "") + t), t = stage.createTween(e, "y", r, r-30, 12, Easing.linear.easeIn), r = stage.createTween(e, "opacity", 1, 0, 18, Easing.linear.easeIn), t.onchange = function(e) {
        e.target.obj.setParams({
            y: e.target.obj.y
        })
    }, r.onchange = function(e) {
        e.target.obj.setParams({
            opacity: e.target.obj.opacity
        })
    }, r.onfinish = function(e) {
        e.target.obj.write("");
        e.target.obj = null
    }, t.play(), r.play()))
}
function buildBackground() {
    stage.drawScene(document.getElementById("screen_background"), !0)
}
function submitScores() {
    ExternalAPI.check() && ExternalAPI.checkUserLoggedIn() && insertScores()
}
function insertScores() {
    ExternalAPI.check() && ExternalAPI.submitScores(gameScore, function() {})
}
function preTick() {}
function postTick() {}
function Text(e, t, n) {
    this.ALIGN_LEFT = 0;
    this.ALIGN_RIGHT = 1;
    this.ALIGN_CENTER = 2;
    this.font = e;
    this.y = this.x = 0;
    this.width = t;
    this.height = n;
    this.align = this.ALIGN_LEFT;
    this.rotation = 0;
    this.static=!1;
    this.charMap = "0123456789:+".split("");
    this.sprites = [];
    this.text = "";
    this.manageSprites = function(e) {
        var t, n = e.length, r = this.sprites.length;
        if (r < n)
            for (e = 0; e < n - r; e++)
                t = new Sprite(this.font, this.width, this.height, this.charMap.length), this.sprites.push(t), stage.addChild(t);
        if (r > n) {
            for (e = 0; e < r - n; e++)
                stage.removeChild(this.sprites[e]);
            this.sprites.splice(0, r - n)
        }
    };
    this.write = function(e) {
        var t, n, r, i;
        this.text = e += "";
        this.manageSprites(e);
        t = this.x;
        this.align == this.ALIGN_CENTER && (t = this.x - (e.length-1) / 2 * this.width);
        this.align == this.ALIGN_RIGHT && (t = this.x - (e.length-1) * this.width);
        r = new Vector(t - this.x, 0);
        r.rotate( - this.rotation);
        t = r.x + this.x;
        n = r.y + this.y;
        r = new Vector(0, 0);
        for (var s = 0; s < e.length; s++)
            this.sprites[s].visible=!0, i = this.charMap.indexOf(e.substr(s, 1)), 0 > i ? this.sprites[s].visible=!1 : (this.sprites[s].gotoAndStop(i), i = r.clone(), i.rotate( - this.rotation), this.sprites[s].x = i.x + t, this.sprites[s].y = i.y + n, this.sprites[s].rotation = this.rotation, this.sprites[s].static = this.static, r.x += this.width)
    }
}
function clearText(e) {
    for (var t = 0, n = stage.objects.length; t < n; t++) {
        var r = stage.objects[t];
        r[e] && (r.destroy=!0)
    }
}
function drawLevelScore(e) {
    var t = 160, n = library.getAsset("font1", !0).bitmap;
    gameScore += "";
    for (var t = t - (gameScore.length-1) / 2 * 12, r = 0; r < gameScore.length; r++) {
        var i = new Sprite(n, 12, 20, 10);
        i.gotoAndStop(gameScore.substr(r, 1));
        i.x = t + 12 * r;
        i.y = e;
        stage.addChild(i)
    }
}
function soundIconOnChange() {
    1 == Utils.getCookie("soundOn") ? (soundOn=!1, sound.gotoAndStop(1), mixer2.play("main_theme", !0, !1, 0), Utils.setCookie("soundOn", 0)) : (soundOn=!0, sound.gotoAndStop(0), mixer2.stop(0), Utils.setCookie("soundOn", 1))
}
function drawText(e, t, n) {
    clearText(e);
    var r = library.getAsset("font1", !0).bitmap, i = "coins" == e ? coins: gameScore, i = i + "";
    t -= (i.length-1) / 2 * 12;
    for (var s = 0; s < i.length; s++)
        mc = new Sprite(r, 12, 20, 10), mc[e]=!0, "coins" == e && (mc.isShopElement=!0), mc.gotoAndStop(i.substr(s, 1)), mc.x = t + 12 * s, mc.y = n, stage.addChild(mc)
}
function moveIconsHor(e) {
    for (var t = 320 * (slidesNumber-1)-160, n = 0, r = stage.objects.length; n < r; n++) {
        var i = stage.objects[n];
        if (0 == i.id && i.x<=-t-20 && 0 < e || 0 == i.id && 180 <= i.x && 0 > e)
            return !1;
        i.isMovable && (i.x -= e)
    }
}
function checkClosestFigure() {
    for (var e = Number.POSITIVE_INFINITY, t = 0, n, r = 0, i = stage.objects.length; r < i; r++) {
        var s = stage.objects[r], o = Math.abs(s.x-160);
        s.isMovable && o <= e && (e = o, n = s.id, t = s.x-160)
    }
    return {
        l: t,
        n: n
    }
}
function moveSelector(e, t) {
    e.x = 160-8 * slidesNumber / 2 + 8 * t
}
function showTutorialMenu() {
    var e = new Sprite(library.getAsset("arrow_prev", !0).bitmap, 12, 31);
    e.x = 10;
    e.y = 285;
    e.visible=!1;
    e.onclick = function() {
        if (e.visible) {
            moveIconsHor(-320);
            showArrows(e, t);
            var n = checkClosestFigure();
            moveSelector(i, n.n)
        }
    };
    stage.addChild(e);
    var t = new Sprite(library.getAsset("arrow_frwd", !0).bitmap, 12, 31);
    t.x = 310;
    t.y = 285;
    t.onclick = function() {
        if (t.visible) {
            moveIconsHor(320);
            showArrows(e, t);
            var n = checkClosestFigure();
            moveSelector(i, n.n)
        }
    };
    stage.addChild(t);
    var n = new Sprite(null, 300, 480);
    n.x = 160;
    n.y = 240;
    n.static=!0;
    n.onmousedown = function() {
        startScrollPosition = window.event.pageX;
        scrollLocked=!0
    };
    n.onmouseup = function() {
        scrollLocked=!1;
        var n = checkClosestFigure();
        moveIconsHor(n.l);
        moveSelector(i, n.n);
        showArrows(e, t)
    };
    n.onmousemove = function() {
        if (scrollLocked) {
            var n = window.event.pageX;
            moveIconsHor(.8 * (startScrollPosition - n));
            startScrollPosition = n;
            t.visible = e.visible=!1
        }
    };
    n.onmouseout = function() {
        scrollLocked=!1;
        var n = checkClosestFigure();
        moveIconsHor(n.l);
        moveSelector(i, n.n);
        showArrows(e, t)
    };
    stage.addChild(n);
    n = new gameButton("menu", 160, 450);
    n.addEventListener("mouseup", showMenu);
    stage.addChild(n);
    addSoundIcon();
    slidesNumber = 4;
    n = new Sprite(library.getAsset("Help1", !0).bitmap, 320, 480);
    n.x = 160;
    n.y = 240;
    n.isMovable=!0;
    n.id = 0;
    showTutorialMenu.firstPage = n;
    stage.addChild(n);
    stage.addChild(library.getSprite("Help2", {
        x: 480,
        y: 240,
        isMovable: !0,
        id: 1
    }));
    stage.addChild(library.getSprite("Help3", {
        x: 800,
        y: 240,
        isMovable: !0,
        id: 2
    }));
    stage.addChild(library.getSprite("Help4", {
        x: 1120,
        y: 240,
        isMovable: !0,
        id: 3
    }));
    for (var n = 160-8 * slidesNumber / 2, r = 0; r < slidesNumber; r++)
        stage.addChild(library.getSprite("r1", {
            x: n + 8 * r,
            y: 473
        }));
    var i = new Sprite(library.getAsset("r2", !0).bitmap, 6, 6);
    i.x = n;
    i.y = 473;
    stage.addChild(i)
}
function showArrows(e, t) {
    var n = showTutorialMenu.firstPage.x;
    e.visible = 150 > n?!0 : !1;
    t.visible = n <= 180-320 * (slidesNumber-1)?!1 : !0
}
function showTutorial(e, t) {
    "easy" == currentDifficulty && (t[0].setType(22), t[1].setType(22), t[4].setType(22), t[21].setType(22), t[19].setType(1), t[5].setType(1), t[20].setType(1), t[15].setType(1), t[13].setType(2), t[16].setType(3), showTutorial_1());
    "medium" == currentDifficulty && (t[2].setType(22), t[10].setType(22), t[23].setType(22), t[9].setType(22), t[0].setType(1), t[8].setType(1), t[22].setType(1), t[16].setType(2), t[17].setType(2), showTutorial_10());
    "hard" == currentDifficulty && (t[23].setType(22), t[19].setType(22), t[5].setType(22), t[16].setType(1), t[17].setType(1), t[3].setType(1), t[6].setType(2), showTutorial_11());
    "ultimate" == currentDifficulty && showTutorial_14()
}
function fadeOut(e) {
    e.opacity = 1;
    e = e.addTween("opacity", 0, 10, Easing.linear.out, null, null);
    setTimeout(e.play, 100)
}
function clearTutorialSprites() {
    for (var e = 0, t = tutArray.length; e < t; e++)
        fadeOut(tutArray[e]);
    tutArray = []
}
function showTutorial_1() {
    var e = library.getSprite("txt_17");
    e.x = 170;
    e.y = 380;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    setTimeout(function() {
        fadeOut(e)
    }, 2e3);
    var n = library.getSprite("txt_18");
    n.x = 120;
    n.y = 170;
    n.opacity = 0;
    stage.addChild(n);
    t = n.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 3e3);
    setTimeout(function() {
        fadeOut(n)
    }, 5e3);
    t = library.getSprite("txt_16");
    t.x = 95;
    t.y = 175;
    t.opacity = 0;
    stage.addChild(t);
    var r = t.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(r.play, 6e3);
    tutArray.push(t);
    t = library.getSprite("txt_12");
    t.x = 215;
    t.y = 280;
    t.opacity = 0;
    stage.addChild(t);
    tutArray.push(t);
    fillGameElementArray();
    var i = t.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        i.play();
        gameElementArray[18].addEventListener("mouseup", tutDone)
    }, 8e3)
}
function tutDone() {
    clearTutorialSprites();
    tut01completed ? tut02completed ? tut04completed ? tut05completed ? tut06completed ? tut07completed ? tut08completed ? checkTurorial() : showTutorial_8() : checkTurorial() : checkTurorial() : (tut05completed=!0, showTutorial_5_1()) : (tut04completed=!0, checkTurorial()) : (tut02completed=!0, checkTurorial()) : (tut01completed=!0, checkTurorial())
}
function fillGameElementArray() {
    gameElementArray = [];
    for (var e = 0, t = stage.objects.length; e < t; e++)
        "gameCell" == stage.objects[e].type && gameElementArray.push(stage.objects[e])
}
function showTutorial_2() {
    var e = library.getSprite("txt_2");
    e.x = 160;
    e.y = 200;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_11");
    e.x = 160;
    e.y = 280;
    e.opacity = 0;
    stage.addChild(e);
    tutArray.push(e);
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        n.play();
        gameElementArray[17].addEventListener("mouseup", tutDone)
    }, 3e3)
}
function showTutorial_3() {
    var e = library.getSprite("txt_7");
    e.x = 265;
    e.y = 130;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    setTimeout(function() {
        fadeOut(e)
    }, 2500);
    tut03completed=!0;
    setTimeout(checkTurorial, 2500)
}
function showTutorial_4() {
    var e = library.getSprite("txt_6");
    e.x = 120;
    e.y = 170;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_10");
    e.x = 190;
    e.y = 230;
    e.opacity = 0;
    stage.addChild(e);
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    tutArray.push(e);
    setTimeout(function() {
        n.play();
        gameElementArray[4].addEventListener("mouseup", tutDone)
    }, 3e3)
}
function showTutorial_5() {
    var e = library.getSprite("txt_20");
    e.x = 180;
    e.y = 200;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e)
}
function showTutorial_5_1() {
    var e = library.getSprite("txt_13");
    e.x = 160;
    e.y = 195;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    tutArray.push(e);
    setTimeout(function() {
        t.play();
        gameElementArray[7].addEventListener("mouseup", tutDone)
    }, 100)
}
function showTutorial_6() {
    var e = library.getSprite("txt_13");
    e.x = 210;
    e.y = 200;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        t.play();
        gameElementArray[8].addEventListener("mouseup", tutDone)
    }, 100);
    tutArray.push(e)
}
function showTutorial_7() {
    var e = library.getSprite("txt_14");
    e.x = 170;
    e.y = 180;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e)
}
function showTutorial_8() {
    var e = library.getSprite("txt_13");
    e.x = 160;
    e.y = 250;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    tutArray.push(e);
    setTimeout(function() {
        t.play();
        gameElementArray[12].addEventListener("mouseup", checkTurorial)
    }, 100)
}
function checkTurorial() {
    if ("easy" == currentDifficulty) {
        if (!tut01completed) {
            showTutorial_1();
            return 
        }
        if (!tut02completed) {
            gameElementArray[18].removeEventListener("mouseup", tutDone);
            blockForTutorial=!1;
            gameElementArray[18].dispatchEvent("mouseup", {
                target: gameElementArray[18]
            });
            blockForTutorial=!0;
            showTutorial_2();
            return 
        }
        if (!tut03completed) {
            gameElementArray[17].removeEventListener("mouseup", tutDone);
            blockForTutorial=!1;
            gameElementArray[17].dispatchEvent("mouseup", {
                target: gameElementArray[17]
            });
            blockForTutorial=!0;
            setTimeout(showTutorial_3, 2500);
            return 
        }
        if (!tut04completed) {
            showTutorial_4();
            return 
        }
        if (!tut05completed) {
            gameElementArray[4].removeEventListener("mouseup", tutDone);
            blockForTutorial=!1;
            gameElementArray[4].dispatchEvent("mouseup", {
                target: gameElementArray[4]
            });
            blockForTutorial=!0;
            showTutorial_5();
            return 
        }
        if (!tut06completed) {
            gameElementArray[7].removeEventListener("mouseup", tutDone);
            blockForTutorial=!1;
            gameElementArray[7].dispatchEvent("mouseup", {
                target: gameElementArray[7]
            });
            tut06completed = blockForTutorial=!0;
            showTutorial_6();
            return 
        }
        if (!tut07completed) {
            gameElementArray[8].removeEventListener("mouseup", tutDone);
            blockForTutorial=!1;
            gameElementArray[8].dispatchEvent("mouseup", {
                target: gameElementArray[8]
            });
            tut07completed = blockForTutorial=!0;
            showTutorial_7();
            return 
        }
        if (!tut08completed) {
            clearTutorialSprites();
            gameElementArray[12].removeEventListener("mouseup", checkTurorial);
            blockForTutorial=!1;
            gameElementArray[12].dispatchEvent("mouseup", {
                target: gameElementArray[12]
            });
            tutorialActivated=!1;
            tut08completed=!0;
            levelTutorialCompleted();
            return 
        }
    }
    if ("medium" != currentDifficulty || tut10completed) {
        if ("hard" == currentDifficulty) {
            if (!tut11completed) {
                tut11completed=!0;
                gameElementArray[18].removeEventListener("mouseup", tutDone);
                blockForTutorial=!1;
                gameElementArray[18].dispatchEvent("mouseup", {
                    target: gameElementArray[18]
                });
                blockForTutorial=!0;
                showTutorial_12();
                return 
            }
            if (!tut12completed) {
                gameElementArray[13].removeEventListener("mouseup", tutDone);
                blockForTutorial=!1;
                gameElementArray[13].dispatchEvent("mouseup", {
                    target: gameElementArray[13]
                });
                tut12completed = blockForTutorial=!0;
                showTutorial_12_1();
                return 
            }
            if (!tut12_1completed) {
                gameElementArray[18].removeEventListener("mouseup", tutDone);
                blockForTutorial=!1;
                gameElementArray[18].dispatchEvent("mouseup", {
                    target: gameElementArray[18]
                });
                tut12_1completed = blockForTutorial=!0;
                showTutorial_13();
                return 
            }
            if (!tut13completed) {
                gameElementArray[24].removeEventListener("mouseup", tutDone);
                blockForTutorial=!1;
                gameElementArray[24].dispatchEvent("mouseup", {
                    target: gameElementArray[24]
                });
                tutorialActivated=!1;
                tut13completed=!0;
                levelTutorialCompleted();
                return 
            }
        }
        "ultimate" != currentDifficulty || tut15completed || (tutorialActivated = blockForTutorial=!1, tut15completed=!0, showTutorial_15(), levelTutorialCompleted())
    } else 
        gameElementArray[18].removeEventListener("mouseup", tutDone), blockForTutorial=!1, gameElementArray[18].dispatchEvent("mouseup", {
        target: gameElementArray[18]
    }), tutorialActivated=!1, tut10completed=!0, showTutorial_9(), levelTutorialCompleted()
}
function levelTutorialCompleted() {
    Utils.setCookie(currentDifficulty + "_tutorial_completed", !0)
}
function resetTutorialVariables() {
    tut01completed = tut02completed = tut03completed = tut04completed = tut05completed = tut06completed = tut07completed = tut08completed = tut09completed = tut10completed = tut11completed = tut12completed = tut12_1completed = tut13completed = tut14completed = tut15completed = blockForTutorial=!1
}
function checkDifficulty() {
    resetTutorialVariables();
    "easy" == currentDifficulty && void 0 == Utils.getCookie(currentDifficulty + "_tutorial_completed") ? blockForTutorial = tutorialActivated=!0 : "medium" == currentDifficulty && void 0 == Utils.getCookie(currentDifficulty + "_tutorial_completed") ? tut01completed = tut02completed = tut03completed = tut04completed = tut05completed = tut06completed = tut07completed = tut08completed = blockForTutorial = tutorialActivated=!0 : "hard" == currentDifficulty && void 0 == Utils.getCookie(currentDifficulty + "_tutorial_completed") ? tut01completed = tut02completed = tut03completed = tut04completed = tut05completed = tut06completed = tut07completed = tut08completed = tut09completed = tut10completed = blockForTutorial = tutorialActivated=!0 : ("expert" == currentDifficulty && void 0 == Utils.getCookie(currentDifficulty + "_tutorial_completed") && (tut01completed = tut02completed = tut03completed = tut04completed = tut05completed = tut06completed = tut07completed = tut08completed = tut09completed = tut10completed = tut11completed = tut12completed = tut12_1completed = tut13completed=!0), "ultimate" == currentDifficulty && void 0 == Utils.getCookie(currentDifficulty + "_tutorial_completed") ? (tut01completed = tut02completed = tut03completed = tut04completed = tut05completed = tut06completed = tut07completed = tut08completed = tut09completed = tut10completed = tut11completed = tut12completed = tut12_1completed = tut13completed = tutorialActivated=!0, coins++) : tutorialActivated=!1)
}
function showTutorial_10() {
    var e = library.getSprite("txt_5");
    e.x = 95;
    e.y = 192;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_13");
    e.x = 210;
    e.y = 295;
    e.opacity = 0;
    stage.addChild(e);
    fillGameElementArray();
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        n.play();
        gameElementArray[18].addEventListener("mouseup", tutDone)
    }, 3e3);
    tutArray.push(e)
}
function showTutorial_9() {
    var e = library.getSprite("txt_3");
    e.x = 160;
    e.y = 220;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    setTimeout(function() {
        fadeOut(e)
    }, 5e3)
}
function showTutorial_11() {
    var e = library.getSprite("txt_4");
    e.x = 120;
    e.y = 178;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_13");
    e.x = 210;
    e.y = 295;
    e.opacity = 0;
    stage.addChild(e);
    fillGameElementArray();
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        n.play();
        gameElementArray[18].addEventListener("mouseup", tutDone)
    }, 3e3);
    tutArray.push(e)
}
function showTutorial_12() {
    var e = library.getSprite("txt_8");
    e.x = 105;
    e.y = 320;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_13");
    e.x = 210;
    e.y = 250;
    e.opacity = 0;
    stage.addChild(e);
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        n.play();
        gameElementArray[13].addEventListener("mouseup", tutDone)
    }, 3e3);
    tutArray.push(e)
}
function showTutorial_12_1() {
    var e = library.getSprite("txt_13");
    e.x = 210;
    e.y = 300;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        t.play();
        gameElementArray[18].addEventListener("mouseup", tutDone)
    }, 1e3);
    tutArray.push(e)
}
function showTutorial_13() {
    var e = library.getSprite("txt_1");
    e.x = 155;
    e.y = 192;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 100);
    tutArray.push(e);
    e = library.getSprite("txt_9");
    e.x = 195;
    e.y = 330;
    e.opacity = 0;
    stage.addChild(e);
    var n = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(function() {
        n.play();
        gameElementArray[24].addEventListener("mouseup", tutDone)
    }, 3e3);
    tutArray.push(e)
}
function showTutorial_14() {
    blockForTutorial=!0;
    var e = library.getSprite("txt_19");
    e.x = 165;
    e.y = 175;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 1e3);
    tutArray.push(e);
    tut14completed=!0
}
function showTutorial_15() {
    var e = library.getSprite("txt_9");
    e.x = 130;
    e.y = 150;
    e.opacity = 0;
    stage.addChild(e);
    var t = e.addTween("opacity", 1, 10, Easing.linear.out, null, null);
    setTimeout(t.play, 1e3);
    setTimeout(clearTutorialSprites, 3e3);
    tutArray.push(e)
}
function showMissionInfo() {
    stage.stop();
    var e = new Sprite(null, 320, 480);
    e.x = 160;
    e.y = 240;
    e.isMissionElement=!0;
    e.onmouseup = function() {
        gameState = STATE_GAME;
        createScene();
        return !1
    };
    stage.addChild(e);
    stage.addChild(library.getSprite("mission_bg", {
        x: 160,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("unicellar", {
        x: 55,
        y: 240,
        isMissionElement: !0,
        first: !0
    }));
    stage.addChild(library.getSprite("meduze", {
        x: 120,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("fish", {
        x: 185,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 87,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 152,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 217,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 282,
        y: 240,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 37,
        y: 295,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 102,
        y: 295,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 167,
        y: 295,
        isMissionElement: !0
    }));
    stage.addChild(library.getSprite("arrow", {
        x: 232,
        y: 295,
        isMissionElement: !0
    }));
    "easy" == currentDifficulty ? (stage.addChild(library.getSprite("mission_untitled_b", {
        x: 250,
        y: 240,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x : 70, y : 295, isMissionElement : !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x : 135, y: 295, isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 200,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_create_1", {
        x: 160,
        y: 335,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 265,
        y: 295,
        isMissionElement: !0
    }))) : "medium" == currentDifficulty ? (stage.addChild(library.getSprite("pangolin", {
        x: 250,
        y: 240,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_b", {
        x : 70, y : 295, isMissionElement : !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x : 135, y: 295, isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 200,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_create_2", {
        x: 160,
        y: 335,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 265,
        y: 295,
        isMissionElement: !0
    }))) : "hard" == currentDifficulty ? (stage.addChild(library.getSprite("pangolin", {
        x: 250,
        y: 240,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mammal", {
        x : 70, y : 295, isMissionElement : !0
    })), stage.addChild(library.getSprite("mission_untitled_b", {
        x : 135, y: 295, isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 200,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_create_3", {
        x: 160,
        y: 335,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 265,
        y: 295,
        isMissionElement: !0
    }))) : "expert" == currentDifficulty ? (stage.addChild(library.getSprite("pangolin", {
        x: 250,
        y: 240,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mammal", {
        x : 70, y : 295, isMissionElement : !0
    })), stage.addChild(library.getSprite("people", {
        x : 135, y: 295, isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_b", {
        x: 200,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_create_4", {
        x: 160,
        y: 335,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_a", {
        x: 265,
        y: 295,
        isMissionElement: !0
    }))) : "ultimate" == currentDifficulty && (stage.addChild(library.getSprite("pangolin", {
        x: 250,
        y: 240,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mammal", {
        x : 70, y : 295, isMissionElement : !0
    })), stage.addChild(library.getSprite("people", {
        x: 135,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("uslon", {
        x: 200,
        y: 295,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_create_5", {
        x: 160,
        y: 335,
        isMissionElement: !0
    })), stage.addChild(library.getSprite("mission_untitled_b", {
        x: 265,
        y: 295,
        isMissionElement: !0
    })))
}
function checkIfNeedLaunchTutorial(e, t) {
    if ("easy" == currentDifficulty && tutorialActivated || "medium" == currentDifficulty && tutorialActivated || "hard" == currentDifficulty && tutorialActivated)
        return showTutorial(e, t), !0;
    if ("ultimate" == currentDifficulty && tutorialActivated)
        return showTutorial(e, t), !1
}
var CRENDER_DEBUG=!1;
var Utils = {
    touchScreen: "ontouchstart"in window,
    globalScale: 1,
    setCookie: function(e, t) {
        try {
            window.localStorage.setItem(e, t)
        } catch (n) {
            var r = new Date;
            r.setDate(r.getDate() + 3650);
            document.cookie = e + "=" + t + "; expires=" + r.toUTCString()
        }
    },
    getCookie: function(e) {
        var t;
        try {
            t = window.localStorage.getItem(e)
        } catch (n) {
            e += "=";
            t = document.cookie.indexOf(e);
            if (-1 == t)
                return null;
            var r = document.cookie.indexOf(";", t + e.length);
            -1 == r && (r = document.cookie.length);
            t = unescape(document.cookie.substring(t + e.length, r))
        }
        return t
    },
    bindEvent: function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    },
    getObjectLeft: function(e) {
        var t = e.offsetLeft;
        e.offsetParent && (t += Utils.getObjectLeft(e.offsetParent));
        return t
    },
    getObjectTop: function(e) {
        var t = e.offsetTop;
        e.offsetParent && (t += Utils.getObjectTop(e.offsetParent));
        return t
    },
    parseGet: function() {
        var e = {}, t = new String(window.location), n = t.indexOf("?");
        if (-1 != n)
            for (var t = t.substr(n + 1, t.length), n = t.split("&"), r = 0; r < n.length; r++)
                t = n[r].split("="), e[t[0]] = t[1];
        return e
    },
    globalPixelScale: 1,
    getMouseCoord: function(e, t) {
        var n = e || window.event;
        n.touches && (n = n.touches[0]);
        if (!n)
            return {
                x: 0,
                y: 0
            };
        var r = 0, i = 0, s = 0, o = 0;
        t && (r = Utils.getObjectLeft(t), i = Utils.getObjectTop(t));
        if (n.pageX || n.pageY)
            s = n.pageX, o = n.pageY;
        else if (n.clientX || n.clientY)
            s = n.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, o = n.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
        return {
            x: s - r,
            y: o - i
        }
    },
    extend: function(e, t) {
        var n = function() {};
        n.prototype = t.prototype;
        e.prototype = new n;
        e.prototype.constructor = e;
        e.superclass = t.prototype
    },
    removeFromArray: function(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
            e[r] != t && n.push(e[r]);
        return n
    },
    showLoadProgress: function(e) {
        var t = Utils.globalScale, n;
        n = "Loading: " + e + "%<br><br>";
        n += '<div style="display: block; background: #000; width: ' + e * t * 2 + "px; height: " + 10 * t + 'px;">&nbsp;</div>';
        document.getElementById("progress").innerHTML = n
    },
    hideAddressBarLock: !1,
    mobileHideAddressBar: function() {
        Utils.hideAddressBarLock || window.scrollTo(0, 1)
    },
    mobileCheckIphone4: function() {
        return window.devicePixelRatio&&-1 != navigator.userAgent.indexOf("iPhone") && 2 == window.devicePixelRatio?!0 : !1
    },
    mobileCheckBrokenGalaxyPhones: function() {
        return !window.devicePixelRatio||-1 == navigator.userAgent.indexOf("GT-I9300")&&-1 == navigator.userAgent.indexOf("GT-I8190")&&-1 == navigator.userAgent.indexOf("Android 4.")?!1 : !0
    },
    checkSpilgamesEnvironment: function() {
        return "undefined" != typeof ExternalAPI && "Spilgames" == ExternalAPI.type && ExternalAPI.check()
    },
    mobileCorrectPixelRatio: function() {
        var e = document.createElement("meta");
        e.name = "viewport";
        var t = "target-densitydpi=device-dpi, user-scalable=0", t = Utils.checkSpilgamesEnvironment() ? 1 < window.devicePixelRatio ? t + ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5": t + ", initial-scale=1, maximum-scale=1, minimum-scale=1": Utils.mobileCheckIphone4() ? t + ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5": t + ", initial-scale=1, maximum-scale=1, minimum-scale=1";
        e.content = t;
        document.getElementsByTagName("head")[0].appendChild(e)
    },
    getMobileScreenResolution: function(e) {
        var t = 1, n = [{
            scale: 1,
            width: 320,
            height: 480
        }, {
            scale: 1,
            width: 480,
            height: 720
        }, {
            scale: 2,
            width: 640,
            height: 960
        }
        ], r = {
            width: 0,
            height: 0
        }, i = "";
        Utils.touchScreen ? (r.width = Math.min(window.innerWidth, window.innerHeight), r.height = Math.max(window.innerWidth, window.innerHeight)) : (r.width = window.innerWidth, r.height = window.innerHeight);
        for (var i = "height", s = Number.MAX_VALUE, o = 0; o < n.length; o++) {
            var u = Math.abs(r[i] - n[o][i]);
            s > u && (s = u, t = n[o].scale)
        }
        return Utils.getScaleScreenResolution(t, e)
    },
    getScaleScreenResolution: function(e, t) {
        var n, r;
        n = Math.round(320 * e);
        r = Math.round(480 * e);
        if (t) {
            var i = n;
            n = r;
            r = i
        }
        return {
            width: n,
            height: r,
            scale: e
        }
    },
    imagesRoot: "images",
    initialResolution: {
        width: 320,
        height: 480,
        scale: 1
    },
    createLayout: function(e, t, n, r) {
        var i = Utils.globalScale;
        Utils.initialResolution = t;
        n = window.innerHeight;
        "orientation"in window ? n = 2048 : document.body.style.overflow = "hidden";
        i = "" + ('<div id="progress_container" align="center" style="width: 100%; height: ' + n + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">') + ('<table cellspacing="0" cellpadding="0"><tr><td id="progress" align="center" valign="middle" style="width: ' + t.width + "px; height: " + t.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * i + 'px; vertical-align: middle;"></td></tr></table>');
        i += "</div>";
        i += '<div id="screen_background_container" align="center" style="width: 100%; height: ' + n + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">';
        i += '<div id="screen_background_wrapper" style="width: ' + t.width + "px; height: " + t.height + 'px; overflow: hidden; position: relative;">';
        r || (i += '<canvas id="screen_background" width="' + t.width + '" height="' + t.height + '"></canvas>');
        i += "</div>";
        i += "</div>";
        i += '<div id="screen_container" align="center" style="width: 100%; height: ' + n + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
        i += '<div id="screen_wrapper" width="' + t.width + '" height="' + t.height + '" style="width: ' + t.width + "px; height: " + t.height + 'px; overflow: hidden; position: relative;">';
        r || (i += '<canvas id="screen" style="position: absolute; left: 0px; top: 0px; z-index: 100;" width="' + t.width + '" height="' + t.height + '">You browser does not support this application :(</canvas>');
        i += "</div>";
        i += "</div>";
        e.innerHTML = i;
        e = document.createElement("div");
        e.setAttribute("id", "p2l_container");
        e.setAttribute("align", "center");
        t = t.width;
        e.setAttribute("style", "width: 100%; height: " + n + "px; position: absolute; left: 0px; top: 0px; display: none; z-index: 10; background: #fff;");
        e.innerHTML = '<img id="p2l" src="' + Utils.imagesRoot + '/p2l.jpg" style="padding-top: ' + (t-240) / 2 + 'px" />';
        document.body.appendChild(e)
    },
    preventEvent: function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.cancelBubble=!0;
        return e.returnValue=!1
    },
    addMobileListeners: function(e, t) {
        !t && navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i) || Utils.bindEvent(document.getElementById("main_container"), "touchstart", Utils.preventEvent);
        Utils.bindEvent(window, "scroll", function(e) {
            setTimeout(Utils.mobileHideAddressBar, 300)
        });
        setInterval("Utils.checkOrientation(" + (e ? "true" : "false") + ")", 500);
        setTimeout(Utils.mobileHideAddressBar, 500)
    },
    storeOrient: null,
    noCheckOrient: !1,
    checkOrientation: function(e) {
        if (Utils.touchScreen && document.getElementById("screen_container")) {
            var t = Utils.parseGet();
            if (!Utils.noCheckOrient && 1 != t.nocheckorient) {
                t=!1;
                if (window == window.parent)
                    t = window.innerWidth > window.innerHeight;
                else 
                    var n = Math.max(screen.width, screen.height), t = Math.min(screen.width, screen.height), n = Math.abs(window.innerWidth - n), t = Math.abs(window.innerWidth - t), t = n < t;
                Utils.storeOrient !== t && (Utils.storeOrient = t, t != e ? (Utils.dispatchEvent("lockscreen"), document.getElementById("p2l_container").style.display = "block", document.getElementById("screen_background_container").style.display = "none", document.getElementById("screen_container").style.display = "none") : (Utils.dispatchEvent("unlockscreen"), document.getElementById("p2l_container").style.display = "none", document.getElementById("screen_background_container").style.display = "block", document.getElementById("screen_container").style.display = "block"), Utils.checkSpilgamesEnvironment() && (document.getElementById("p2l_container").style.display = "none"), setTimeout(Utils.mobileHideAddressBar, 1e3), setTimeout(Utils.fitLayoutToScreen, 1e3))
            }
        }
    },
    fitLayoutTimer: null,
    addFitLayoutListeners: function() {
        Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
    },
    removeFitLayoutListeners: function() {
        clearInterval(Utils.fitLayoutTimer)
    },
    fitLayoutLock: !1,
    fitLayoutCorrectHeight: 0,
    fitLayoutToScreen: function(e) {
        if (!Utils.fitLayoutLock) {
            var t, n, r;
            "object" == typeof e && e.width || (n = window.innerWidth, r = window.innerHeight, Utils.checkSpilgamesEnvironment() && (r -= 25), r += Utils.fitLayoutCorrectHeight, e = {
                width: n,
                height: r
            });
            if (t = document.getElementById("screen_wrapper")) {
                t.initWidth || (t.initWidth = Utils.initialResolution.width, t.initHeight = Utils.initialResolution.height);
                n = t.initWidth;
                r = t.initHeight;
                var i = 1, i = e.width / n;
                e = e.height / r;
                i = i < e ? i : e;
                Utils.globalPixelScale = i;
                n = Math.floor(n * i);
                r = Math.floor(r * i);
                if (t.lastWidth != n || t.lastHeight != r) {
                    t.lastWidth = n;
                    t.lastHeight = r;
                    Utils.resizeElement("screen", n, r);
                    Utils.resizeElement("screen_background", n, r);
                    if (t = document.getElementById("progress"))
                        t.style.width=~~n + "px", t.style.height=~~r + "px";
                    if (t = document.getElementById("screen_wrapper"))
                        t.style.width=~~n + "px", t.style.height=~~r + "px";
                    if (t = document.getElementById("screen_background_wrapper"))
                        t.style.width=~~n + "px", t.style.height=~~r + "px";
                    if (t = document.getElementById("p2l_container"))
                        t.style.width=~~window.innerWidth + "px", t.style.height = "2048px";
                    Utils.dispatchEvent("fitlayout");
                    setTimeout(Utils.mobileHideAddressBar, 50)
                }
            }
        }
    },
    resizeElement: function(e, t, n) {
        if (e = document.getElementById(e))
            e.setAttribute("width", t), e.setAttribute("height", n)
    },
    drawIphoneLimiter: function(e, t) {
        t ? e.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : e.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
    },
    drawGrid: function(e, t, n) {
        "undefined" == typeof t && (t=!1);
        "undefined" == typeof n && (n = "#FFF");
        var r = 1 / Utils.globalScale / Utils.globalPixelScale, i = t ? 480: 320;
        t = t ? 320 : 480;
        for (var s = 10; s < i; s += 10) {
            var o = .1 + (s-10) / 10%10 * .1;
            e.drawLine(s, 0, s, t, r, n, o)
        }
        for (s = 10; s < t; s += 10)
            o = .1 + (s-10) / 10%10 * .1, e.drawLine(0, s, i, s, r, n, o)
    },
    drawScaleFix: function(e, t) {
        .75 == Utils.globalScale && (t ? e.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : e.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0));
        1 == Utils.globalScale && (t ? e.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : e.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
    },
    grad2radian: function(e) {
        return e / (180 / Math.PI)
    },
    radian2grad: function(e) {
        return 180 / Math.PI * e
    },
    eventsListeners: [],
    onlockscreen: null,
    onunlockscreen: null,
    onfitlayout: null,
    addEventListener: function(e, t) {
        EventsManager.addEvent(Utils, e, t)
    },
    removeEventListener: function(e, t) {
        EventsManager.removeEvent(Utils, e, t)
    },
    dispatchEvent: function(e, t) {
        return EventsManager.dispatchEvent(Utils, e, t)
    }
}, EventsManager = {
    addEvent: function(e, t, n) {
        if (e.eventsListeners) {
            for (var r = 0; r < e.eventsListeners.length; r++)
                if (e.eventsListeners[r].type === t && e.eventsListeners[r].callback === n)
                    return;
            e.eventsListeners.push({
                type: t,
                callback: n
            })
        }
    },
    removeEvent: function(e, t, n) {
        if (e.eventsListeners)
            for (var r = 0; r < e.eventsListeners.length; r++)
                if (e.eventsListeners[r].type === t && e.eventsListeners[r].callback === n) {
                    e.eventsListeners = Utils.removeFromArray(e.eventsListeners, e.eventsListeners[r]);
                    break
                }
    },
    dispatchEvent: function(e, t, n) {
        if (e.eventsListeners) {
            var r;
            if ("function" == typeof e["on" + t] && (r = e["on" + t](n), !1 === r))
                return !1;
            for (var i = 0; i < e.eventsListeners.length; i++)
                if (e.eventsListeners[i].type === t && (r = e.eventsListeners[i].callback(n), !1 === r))
                    return !1
        }
    }
}, ANCHOR_ALIGN_LEFT =- 1, ANCHOR_ALIGN_CENTER = 0, ANCHOR_ALIGN_RIGHT = 1, ANCHOR_VALIGN_TOP =- 1, ANCHOR_VALIGN_MIDDLE = 0, ANCHOR_VALIGN_BOTTOM = 1;
var Easing = {
    back: {
        easeIn: function(e, t, n, r) {
            return n * (e/=r) * e * (2.70158 * e-1.70158) + t
        },
        easeOut: function(e, t, n, r) {
            return n * ((e = e / r-1) * e * (2.70158 * e + 1.70158) + 1) + t
        },
        easeInOut: function(e, t, n, r) {
            var i = 1.70158;
            return 1 > (e/=r / 2) ? n / 2 * e * e * (((i*=125) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i*=125) + 1) * e + i) + 2) + t
        }
    },
    bounce: {
        easeIn: function(e, t, n, r) {
            return n - Easing.bounce.easeOut(r - e, 0, n, r) + t
        },
        easeOut: function(e, t, n, r) {
            return (e/=r) < 1 / 2.75 ? 7.5625 * n * e * e + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOut: function(e, t, n, r) {
            return e < r / 2 ? .5 * Easing.bounce.easeIn(2 * e, 0, n, r) + t : .5 * Easing.bounce.easeOut(2 * e - r, 0, n, r) + .5 * n + t
        }
    },
    circular: {
        easeIn: function(e, t, n, r) {
            return - n * (Math.sqrt(1 - (e/=r) * e)-1) + t
        },
        easeOut: function(e, t, n, r) {
            return n * Math.sqrt(1 - (e = e / r-1) * e) + t
        },
        easeInOut: function(e, t, n, r) {
            return 1 > (e/=r / 2)?-n / 2 * (Math.sqrt(1 - e * e)-1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        }
    },
    cubic: {
        easeIn: function(e, t, n, r) {
            return n * (e/=r) * e * e + t
        },
        easeOut: function(e, t, n, r) {
            return n * ((e = e / r-1) * e * e + 1) + t
        },
        easeInOut: function(e, t, n, r) {
            return 1 > (e/=r / 2) ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
        }
    },
    exponential: {
        easeIn: function(e, t, n, r) {
            return 0 == e ? t : n * Math.pow(2, 10 * (e / r-1)) + t
        },
        easeOut: function(e, t, n, r) {
            return e == r ? t + n : n * ( - Math.pow(2, -10 * e / r) + 1) + t
        },
        easeInOut: function(e, t, n, r) {
            return 0 == e ? t : e == r ? t + n : 1 > (e/=r / 2) ? n / 2 * Math.pow(2, 10 * (e-1)) + t : n / 2 * ( - Math.pow(2, -10*--e) + 2) + t
        }
    },
    linear: {
        easeIn: function(e, t, n, r) {
            return n * e / r + t
        },
        easeOut: function(e, t, n, r) {
            return n * e / r + t
        },
        easeInOut: function(e, t, n, r) {
            return n * e / r + t
        }
    },
    quadratic: {
        easeIn: function(e, t, n, r) {
            return n * (e/=r) * e + t
        },
        easeOut: function(e, t, n, r) {
            return - n * (e/=r) * (e-2) + t
        },
        easeInOut: function(e, t, n, r) {
            return 1 > (e/=r / 2) ? n / 2 * e * e + t : - n / 2 * (--e * (e-2)-1) + t
        }
    },
    quartic: {
        easeIn: function(e, t, n, r) {
            return n * (e/=r) * e * e * e + t
        },
        easeOut: function(e, t, n, r) {
            return - n * ((e = e / r-1) * e * e * e-1) + t
        },
        easeInOut: function(e, t, n, r) {
            return 1 > (e/=r / 2) ? n / 2 * e * e * e * e + t : - n / 2 * ((e -= 2) * e * e * e-2) + t
        }
    },
    quintic: {
        easeIn: function(e, t, n, r) {
            return n * (e/=r) * e * e * e * e + t
        },
        easeOut: function(e, t, n, r) {
            return n * ((e = e / r-1) * e * e * e * e + 1) + t
        },
        easeInOut: function(e, t, n, r) {
            return 1 > (e/=r / 2) ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
        }
    },
    sine: {
        easeIn: function(e, t, n, r) {
            return - n * Math.cos(e / r * (Math.PI / 2)) + n + t
        },
        easeOut: function(e, t, n, r) {
            return n * Math.sin(e / r * (Math.PI / 2)) + t
        },
        easeInOut: function(e, t, n, r) {
            return - n / 2 * (Math.cos(Math.PI * e / r)-1) + t
        }
    }
};
var Rectangle = function(e, t, n, r, i) {
    this.center = new Vector(e, t);
    this.width = n;
    this.height = r;
    this.angle = i;
    this.vertices = [];
    this.AABB = [];
    this.clone = function() {
        return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
    };
    this.refreshVertices = function() {
        var e = this.width / 2, t = this.height / 2;
        this.vertices = [];
        this.vertices.push(new Vector( - e, t));
        this.vertices.push(new Vector(e, t));
        this.vertices.push(new Vector(e, - t));
        this.vertices.push(new Vector( - e, - t));
        this.AABB = [this.center.clone(), this.center.clone()];
        for (e = 0; 4 > e; e++)
            this.vertices[e].rotate( - this.angle, this.center), this.vertices[e].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[e].x), this.vertices[e].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[e].x), this.vertices[e].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[e].y), this.vertices[e].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[e].y)
    };
    this.move = function(e, t) {
        this.center.add(new Vector(e, t));
        this.refreshVertices()
    };
    this.rotate = function(e) {
        this.angle += e;
        this.refreshVertices()
    };
    this.hitTestPoint = function(e) {
        e = e.clone();
        e.normalize( - this.angle, this.center);
        return Math.abs(e.x) <= this.width / 2 && Math.abs(e.y) <= this.height / 2
    };
    this.hitTestRectangle = function(e) {
        var t = this.clone();
        e = e.clone();
        var n, r, i;
        t.move( - this.center.x, - this.center.y);
        e.move( - this.center.x, - this.center.y);
        e.center.rotate(this.angle);
        t.rotate( - this.angle);
        e.rotate( - this.angle);
        n = Math.max(t.AABB[0].x, t.AABB[1].x, e.AABB[0].x, e.AABB[1].x) - Math.min(t.AABB[0].x, t.AABB[1].x, e.AABB[0].x, e.AABB[1].x);
        r = t.AABB[1].x - t.AABB[0].x;
        i = e.AABB[1].x - e.AABB[0].x;
        if (n > r + i)
            return !1;
        n = Math.max(t.AABB[0].y, t.AABB[1].y, e.AABB[0].y, e.AABB[1].y) - Math.min(t.AABB[0].y, t.AABB[1].y, e.AABB[0].y, e.AABB[1].y);
        r = t.AABB[1].y - t.AABB[0].y;
        i = e.AABB[1].y - e.AABB[0].y;
        if (n > r + i)
            return !1;
        t.move( - e.center.x, - e.center.y);
        e.move( - e.center.x, - e.center.y);
        t.center.rotate(e.angle);
        t.refreshVertices();
        t.rotate( - e.angle);
        e.rotate( - e.angle);
        n = Math.max(t.AABB[0].x, t.AABB[1].x, e.AABB[0].x, e.AABB[1].x) - Math.min(t.AABB[0].x, t.AABB[1].x, e.AABB[0].x, e.AABB[1].x);
        r = t.AABB[1].x - t.AABB[0].x;
        i = e.AABB[1].x - e.AABB[0].x;
        if (n > r + i)
            return !1;
        n = Math.max(t.AABB[0].y, t.AABB[1].y, e.AABB[0].y, e.AABB[1].y) - Math.min(t.AABB[0].y, t.AABB[1].y, e.AABB[0].y, e.AABB[1].y);
        r = t.AABB[1].y - t.AABB[0].y;
        i = e.AABB[1].y - e.AABB[0].y;
        return n > r + i?!1 : !0
    };
    this.refreshVertices()
}, Asset = function(e, t, n, r, i, s) {
    this.name = e + "";
    this.src = t + "";
    this.width = n;
    this.height = r;
    this.frames = i;
    this.layers = s;
    this.object = this.bitmap = null;
    this.ready = this.width && this.height;
    this.detectSize = function() {
        if (!this.bitmap)
            return !1;
        try {
            isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0), isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
        } catch (e) {
            CRENDER_DEBUG && console.log(e)
        }
        return !isNaN(this.width)&&!isNaN(this.height)
    };
    this.normalize = function(e) {
        if (!this.ready && this.detectSize()) {
            if (isNaN(this.frames) || 1 > this.frames)
                this.frames = 1;
            if (isNaN(this.layers) || 1 > this.layers)
                this.layers = 1;
            this.width = Math.ceil(this.width / this.layers / e);
            this.height = Math.ceil(this.height / this.frames / e);
            this.ready=!0
        }
    }
}, AssetsLibrary = function(e, t, n) {
    var r = this;
    this.path = "images";
    this.scale = 1;
    this.items = {};
    this.bitmaps = {};
    this.loaded=!1;
    this.onloadprogress = this.onload = null;
    this.spriteClass = Sprite;
    this.init = function(e, t) {
        "undefined" != typeof e && (this.path = e + "");
        "undefined" != typeof t && (this.scale = parseFloat(t), isNaN(this.scale) && (this.scale = 1))
    };
    this.addAssets = function(e) {
        if ("undefined" != typeof e && "object" == typeof e)
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.noscale = "undefined" == typeof n.noscale?!1 : n.noscale;
                n.noscale || (n.src = "%SCALE%/" + n.src);
                this.addAsset(n.src, n.name, n.width, n.height, n.frames, n.layers)
            }
    };
    this.addAsset = function(e, t, n, r, i, s) {
        e = e.replace("%SCALE%", "%PATH%/" + this.scale);
        e = e.replace("%PATH%", this.path);
        "undefined" == typeof t && (t = e.split("http://resource.duopao.com/"), t = t.pop(), t = t.split("."), t = t.shift() + "");
        e = new Asset(t, e, n, r, i, s);
        return this.items[t] = e
    };
    this.addObject = function(e) {
        var t = this.addAsset("%SCALE%/" + e.image, e.name, e.width * this.scale, e.height * this.scale, e.frames, e.layers);
        t && (t.object = e);
        return t
    };
    this.load = function(e, t) {
        this.onload = e;
        this.onloadprogress = t;
        var n = new ImagesPreloader, i = [], s;
        for (s in this.items)
            i.push(this.items[s]);
        n.load(i, r.onLoadHandler, r.onLoadProgressHandler)
    };
    this.onLoadProgressHandler = function(e) {
        if ("function" == typeof r.onloadprogress)
            r.onloadprogress(e)
    };
    this.onLoadHandler = function(e) {
        r.loaded=!0;
        for (var t in e) {
            var n = r.items[t];
            n.bitmap = e[t];
            n.normalize(r.scale)
        }
        if ("function" == typeof r.onload)
            r.onload(r.items)
    };
    this.getAsset = function(e, t) {
        var n = null;
        "undefined" != typeof this.items[e] && this.items[e].bitmap && (n = "undefined" != typeof t&&!t || this.items[e].ready ? this.items[e] : null);
        if (!n)
            throw Error('Trying to get undefined asset "' + e + '"');
        return n
    };
    this.getSprite = function(e, t) {
        var n = null;
        try {
            var r = this.getAsset(e, !0), n = new this.spriteClass(r.bitmap, r.width, r.height, r.frames, r.layers)
        } catch (i) {
            n = new this.spriteClass(null, 1, 1, 1, 1)
        }
        if ("object" == typeof t)
            for (var s in t)
                n[s] = t[s];
        return n
    };
    this.getBitmap = function(e) {
        try {
            return this.getAsset(e, !0).bitmap
        } catch (t) {
            return null
        }
    };
    this.init(e, t);
    this.addAssets(n)
};
"undefined" == typeof console && (console = {
    log: function() {}
});
var TTLoader = {
    endCallback: null,
    loadedData: null,
    landscapeMode: !1,
    skipPlayButton: !1,
    create: function(e, t, n) {
        TTLoader.endCallback = e;
        TTLoader.landscapeMode = t;
        TTLoader.skipPlayButton = n;
        TTLoader.fillLogo();
        document.getElementById("progress_container").style.background = "#E9573F";
        document.getElementById("progress_container").style.zIndex = "100";
        e = document.getElementById("progress");
        e.setAttribute("valign", "top");
        e.style.verticalAlign = "top";
        e.style.background = "#E9573F";
        t = document.createElement("div");
        n = document.createElement("a");
        n.setAttribute("id", "tt_load_logo_c");
        n.setAttribute("href", "http://345.gd/");
        n.setAttribute("target", "_blank");
        var r = new Image;
        r.setAttribute("id", "tt_load_logo");
        r.setAttribute("border", "");
        r.src = TTLoader.logoSrc[0];
        r.style.cursor = "pointer";
        n.appendChild(r);
        t.appendChild(n);
        e.appendChild(t);
        t = document.createElement("div");
        t.setAttribute("id", "tt_load_progress_cont");
        t.setAttribute("align", "left");
        t.setAttribute("style", "padding: 1px; border: 2px solid #0478b8; background: #fff");
        n = document.createElement("div");
        n.setAttribute("id", "tt_load_progress");
        n.setAttribute("style", "width: 0px; background: #0088cd;");
        n.innerHTML = "&nbsp;";
        t.appendChild(n);
        e.appendChild(t);
        t = document.createElement("div");
        t.setAttribute("id", "tt_load_play");
        n = new Image;
        n.setAttribute("id", "tt_load_button");
        n.src = TTLoader.buttonDisabledSrc;
        t.appendChild(n);
        e.appendChild(t);
        Utils.addEventListener("fitlayout", TTLoader.setSizes);
        TTLoader.setSizes();
        TTLoader.animateLogo()
    },
    setSizes: function() {
        document.getElementById("progress_container").style.width = window.innerWidth + "px";
        document.getElementById("progress_container").style.height = "2048px";
        var e = Utils.globalScale * Utils.globalPixelScale;
        TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * e) + "px");
        document.getElementById("tt_load_progress_cont").style.width = Math.floor(200 * e) + "px";
        document.getElementById("tt_load_progress").style.height = Math.floor(12 * e) + "px";
        document.getElementById("tt_load_progress").style.width = e * TTLoader.progressVal * 2 + "px";
        document.getElementById("tt_load_logo").setAttribute("width", Math.floor(180 * e) + "px");
        document.getElementById("tt_load_logo").setAttribute("height", Math.floor(180 * e) + "px");
        document.getElementById("tt_load_button").setAttribute("height", Math.floor(29 * e) + "px");
        document.getElementById("tt_load_button").style.marginTop = Math.floor(20 * e) + "px"
    },
    progressVal: 0,
    showLoadProgress: function(e) {
        TTLoader.progressVal = e;
        TTLoader.setSizes()
    },
    loadComplete: function(e) {
        TTLoader.showLoadProgress(100);
        TTLoader.loadedData = e;
        e = document.getElementById("tt_load_button");
        Utils.touchScreen ? (document.getElementById("main_container").removeEventListener("touchstart", Utils.preventEvent), e.ontouchstart = TTLoader.close) : e.onclick = TTLoader.close;
        e.style.cursor = "pointer";
        e.src = TTLoader.buttonSrc;
        e = document.getElementById("tt_load_progress");
        e.style.background = "transparent";
        e = document.getElementById("tt_load_progress_cont");
        e.style.border = "2px solid transparent";
        e.style.background = "transparent";
        document.getElementById("tt_load_button").style.display = "block";
        TTLoader.skipPlayButton && TTLoader.close()
    },
    close: function() {
        TTLoader.endCallback(TTLoader.loadedData);
        Utils.touchScreen && document.getElementById("main_container").addEventListener("touchstart", Utils.preventEvent, !1)
    },
    logoSrc: [],
    currentLogoFrame: 0,
    logoOpacity: 0,
    animateLogo: function() {
        1 > TTLoader.logoOpacity && (TTLoader.logoOpacity += .33, document.getElementById("tt_load_logo").style.opacity = TTLoader.logoOpacity, document.getElementById("tt_load_logo").style.filter = "alpha(opacity=" + 10 * TTLoader.logoOpacity + ")");
        1 <= TTLoader.logoOpacity && (document.getElementById("tt_load_logo").src = TTLoader.logoSrc[TTLoader.currentLogoFrame], TTLoader.currentLogoFrame++, TTLoader.currentLogoFrame >= TTLoader.logoSrc.length && (TTLoader.currentLogoFrame = TTLoader.logoSrc.length-1));
        setTimeout(TTLoader.animateLogo, 100)
    },
    fillLogo: function() {
        var e = [];
        e.push("logo.png");
        TTLoader.logoSrc = e
    },
    buttonDisabledSrc: "tt_load_buttondisabled.png",
    buttonSrc: "tt_load_button.png"
};
var STR_ALIGN_LEFT = "left", STR_ALIGN_CENTER = "center", STR_ALIGN_RIGHT = "right", STR_VALIGN_TOP = "top", STR_VALIGN_MIDDLE = "middle", STR_VALIGN_BOTTOM = "bottom", GUIFont = function(e) {
    this.animated=!1;
    this.fontProperties = e;
    this.charmap = this.fontProperties.charmap;
    GUIFont.superclass.constructor.call(this, this.fontProperties.image.bitmap, this.fontProperties.image.width, this.fontProperties.image.height, this.fontProperties.image.frames, this.fontProperties.image.layers);
    GUIFont.prototype.validChar = function(e) {
        return 0 <= this.fontProperties.charmap.indexOf(e.toString())
    };
    GUIFont.prototype.setChar = function(e) {
        e = this.fontProperties.charmap.indexOf(e.toString());
        0 > e || (this.currentLayer = e%this.totalLayers, this.gotoAndStop(Math.floor(e / this.totalLayers)))
    };
    GUIFont.prototype.getChar = function() {
        return this.fontProperties.charmap[this.currentLayer + this.currentFrame * this.totalLayers]
    }
};
Utils.extend(GUIFont, Sprite);
var GUIString = function(e, t, n) {
    this.font = FontManager.getFont(e);
    if (!this.font)
        throw Error("Font '" + e + "' not found!");
    this.strings = [];
    this.chars = [];
    this.align = STR_ALIGN_CENTER;
    this.valign = STR_VALIGN_MIDDLE;
    e = new this.font;
    this.charWidth = e.fontProperties["char"].width;
    this.charHeight = e.fontProperties["char"].height;
    delete e;
    this.visible=!0;
    this.rotation = this.zIndex = this.y = this.x = 0;
    this.opacity = 1;
    this.width = this.height = 0;
    this["static"] = "undefined" == typeof t?!1 : t;
    this.getString = function() {
        return this.strings.join("\n")
    };
    this.getParams = function() {
        return {
            visible: this.visible,
            x: this.x,
            y: this.y,
            zIndex: this.zIndex,
            rotation: this.rotation,
            opacity: this.opacity,
            align: this.align,
            valign: this.valign,
            letterSpacing: this.charWidth,
            lineHeight: this.charHeight
        }
    };
    this.setParams = function(e, t) {
        "object" != typeof e && (e = {});
        "undefined" == typeof t && (t=!1);
        "undefined" == typeof e.visible && (e.visible = this.visible);
        "undefined" == typeof e.letterSpacing && (e.letterSpacing = this.charWidth);
        "undefined" == typeof e.lineHeight && (e.lineHeight = this.charHeight);
        "undefined" == typeof e.align && (e.align = this.align);
        "undefined" == typeof e.valign && (e.valign = this.valign);
        "undefined" == typeof e.x && (e.x = this.x);
        e.x = parseInt(e.x);
        isNaN(e.x) && (e.x = this.x);
        "undefined" == typeof e.y && (e.y = this.y);
        e.y = parseInt(e.y);
        isNaN(e.y) && (e.y = this.y);
        "undefined" == typeof e.zIndex && (e.zIndex = this.zIndex);
        e.zIndex = parseInt(e.zIndex);
        isNaN(e.zIndex) && (e.zIndex = this.zIndex);
        "undefined" == typeof e.rotation && (e.rotation = this.rotation);
        e.rotation = parseFloat(e.rotation);
        isNaN(e.rotation) && (e.rotation = this.rotation);
        "undefined" == typeof e.opacity && (e.opacity = this.opacity);
        e.opacity = parseFloat(e.opacity);
        isNaN(e.opacity) && (e.opacity = this.opacity);
        if (e.letterSpacing != this.charWidth || e.lineHeight != this.charHeight)
            this._setSpacing(e.letterSpacing, e.lineHeight), t=!0;
        if (e.align != this.align || e.valign != this.valign)
            this._setAlign(e.align, e.valign), t=!0;
        if (e.x != this.x || e.y != this.y || e.rotation != this.rotation || t)
            this._refreshSize(), this._setPosition(e.x, e.y), this._setRotation(e.rotation), this._setOpacity(e.opacity);
        e.zIndex != this.zIndex && this._setZIndex(e.zIndex);
        e.visible != this.visible && this._setVisible(e.visible)
    };
    this.refresh = function() {
        this.setParams(this.getParams())
    };
    this.write = function(e, t, n, r, i, s, o, u) {
        this.strings = e = this._prepareString(e);
        this._createStageChars();
        e = {
            align: r,
            valign: i,
            x: t,
            y: n,
            rotation: s,
            letterSpacing: o,
            lineHeight: u
        };
        0 < this.chars.length && (e.zIndex = 0 < this.zIndex ? this.zIndex : this.chars[0].zIndex);
        for (n = t = 0; n < this.strings.length; n++)
            for (r = 0; r < this.strings[n].length; r++)
                i = this.chars[t++], i["static"] = this["static"], i.setChar(this.strings[n].substring(r, r + 1));
        this.setParams(e, !0)
    };
    this.clear = function() {
        this.write("")
    };
    this._setVisible = function(e) {
        this.visible = e;
        for (e = 0; e < this.chars.length; e++)
            this.chars[e] && (this.chars[e].visible = this.visible)
    };
    this._setOpacity = function(e) {
        this.opacity = e;
        for (e = 0; e < this.chars.length; e++)
            this.chars[e] && (this.chars[e].opacity = this.opacity)
    };
    this._setZIndex = function(e) {
        "undefined" == typeof e && (e = this.zIndex);
        e=~~e;
        if (e != this.zIndex) {
            this.zIndex=~~e;
            for (var t = 0; t < this.chars.length; t++)
                this.chars[t] && this.chars[t].setZIndex(e)
        }
    };
    this._setSpacing = function(e, t) {
        "undefined" == typeof e && (e = this.charWidth);
        this.charWidth=~~e;
        "undefined" == typeof t && (t = this.charHeight);
        this.charHeight=~~t
    };
    this._setAlign = function(e, t) {
        "undefined" == typeof e && (e = this.align);
        this.align = e.toString().toLowerCase();
        "undefined" == typeof t && (t = this.valign);
        this.valign = t.toString().toLowerCase()
    };
    this._setPosition = function(e, t) {
        this.x = e;
        this.y = t;
        var n = Math.round(this.charHeight / 2);
        this.valign == STR_VALIGN_MIDDLE && (n -= Math.round(this.height / 2));
        this.valign == STR_VALIGN_BOTTOM && (n -= this.height);
        for (var r = 0, i = 0; i < this.strings.length; i++) {
            var s = this.charWidth * this.strings[i].length, o =- Math.round(this.charWidth / 2);
            this.align == STR_ALIGN_CENTER && (o -= Math.round(s / 2));
            this.align == STR_ALIGN_RIGHT && (o -= s);
            for (s = 0; s < this.strings[i].length; s++) {
                var u = this.chars[r++];
                u && (o += this.charWidth, u.x = this.x + o, u.y = this.y + n)
            }
            n += this.charHeight
        }
    };
    this._setRotation = function(e) {
        e >= 2 * Math.PI && (e -= 2 * Math.PI);
        0 > e && (e += 2 * Math.PI);
        this.rotation = e;
        if (0 != this.chars.length)
            for (e = 0; e < this.chars.length; e++)
                if (this.chars[e]) {
                    var t = new Vector(this.chars[e].x - this.x, this.chars[e].y - this.y);
                    t.rotate( - this.rotation);
                    this.chars[e].x = this.x + t.x;
                    this.chars[e].y = this.y + t.y;
                    this.chars[e].rotation = this.rotation
                }
    };
    this._validateString = function(e) {
        e = e.toString();
        for (var t = "", n = new this.font, r = 0; r < e.length; r++) {
            var i = e.substring(r, r + 1);
            n.validChar(i) && (t += i)
        }
        return t
    };
    this._refreshSize = function() {
        for (var e = 0, t = 0; t < this.strings.length; t++)
            e = Math.max(e, this.strings[t].length);
        this.width = this.charWidth * e;
        this.height = this.charHeight * this.strings.length
    };
    this._createStageChars = function() {
        var e = this.strings.join("").length, e = this.chars.length - e;
        if (0 != e) {
            for (; 0 != e;) {
                var t;
                0 > e ? (t = new this.font, t = stage.addChild(t), t.visible = this.visible, this.chars.push(t)) : (t = this.chars.pop(), stage.removeChild(t));
                e += 0 > e ? 1 : -1
            }
            this._refreshSize()
        }
    };
    this._prepareString = function(e) {
        e = String(e).split("\n");
        for (var t = 0; t < e.length; t++)
            e[t] = this._validateString(e[t]);
        return e
    };
    this.debugDraw = function(e) {
        "undefined" == typeof e && (e = "#FFF");
        this._debugDrawAnchor(e);
        this._debugDrawBox(e)
    };
    this._debugDrawBox = function(e) {};
    this._debugDrawAnchor = function(e) {
        stage.drawRectangle(this.x, this.y, 3, 3, e, !0, .8)
    };
    "object" == typeof n && this.setParams(n)
}, Charset = {
    getByName: function(e) {
        if ("undefined" == typeof Charset[e])
            throw Error("Character set ' " + e + " ' is not defined!");
        return Charset[e]
    },
    digits: '0123456789+-.,*/=()<>#$%&:;|№@~"'.split(""),
    full: " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ЁЂЃЄЅІЇЈЉЊЋЌЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџŠŽšžŸ¢£¥§©«®µ»ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ".split(""),
    latin: " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ".split("")
}, FontManager = {
    _fonts: {},
    defaultCharmap: Charset.full,
    fontNameFromBitmap: function(e) {
        e = "string" == typeof e ? e : e.src;
        e = e.replace("\\", "http://resource.duopao.com/").split("http://resource.duopao.com/").pop();
        return e = e.split(".").shift()
    },
    createAssetFromSprite: function(e, t) {
        var n = new Asset(e, t.bitmap.src, t.width, t.height, t.totalFrames, t.totalLayers);
        n.bitmap = t.bitmap;
        return n
    },
    createFontAsset: function(e, t, n, r) {
        var i, s;
        if ("string" == typeof e) {
            if ("undefined" == typeof library)
                throw Error("Bitmaps access by name works only with AssetsLibrary");
            try {
                s = e, i = library.getAsset(s)
            } catch (o) {
                throw Error("Sprite not found for font '" + s + "'")
            }
        } else if ("object" == typeof e) {
            i = ["bitmap", "width", "height", "totalFrames", "totalLayers"];
            for (s = 0; s < i.length; s++)
                if ("undefined" == typeof e[i[s]])
                    throw Error("Invalid image. Instance of Sprite expected.");
                    s = FontManager.fontNameFromBitmap(e.bitmap);
                    i = FontManager.createAssetFromSprite(s, e)
        } else 
            throw Error("Invalid image. Asset name or instance of Sprite expected.");
        i = new GUIFontAsset(s, i, t);
        n=~~n;
        r=~~r;
        0 < n && (i["char"].width = n);
        0 < r && (i["char"].height = r);
        return i
    },
    registerFont: function(e, t, n, r) {
        "string" == typeof t && (t = Charset.getByName(t));
        var i = FontManager.createFontAsset(e, t, n, r), s = function() {
            s.superclass.constructor.call(this, i)
        };
        Utils.extend(s, GUIFont);
        FontManager._fonts[i.name] = s;
        return i.name
    },
    getFont: function(e) {
        "undefined" == typeof FontManager._fonts[e] && FontManager.registerFont(e, FontManager.defaultCharmap);
        return FontManager._fonts[e]
    }
}, GUIFontAsset = function(e, t, n) {
    this.name = e;
    this.image = t;
    this.charmap = n;
    this["char"] = {
        width: t.width,
        height: t.height
    }
}, ExternalAPI = {
    type: "Spilgames",
    init: function(e) {
        "undefined" == typeof SpilGames && "undefined" != typeof window.parent && (SpilGames = window.parent.SpilGames);
        ExternalAPI.check() ? SpilGames.Events.subscribe("gamecontainer.resize", Utils.fitLayoutToScreen) : Utils.addFitLayoutListeners()
    },
    check: function() {
        return "undefined" != typeof SpilGames
    },
    checkUserLoggedIn: function() {
        return "NOT_AUTHENTICATED" == SpilGames.Auth.getAuthState()?!1 : !0
    },
    getUserInfo: function() {},
    addChangeLocaleListener: function(e) {
        SpilGames.Events.subscribe("game.language.change", e)
    },
    showLoginForm: function(e) {
        e || (e = function() {});
        SpilGames.Portal.forceAuthentication(e)
    },
    showScoreboard: function(e) {
        e || (e = function() {});
        SpilGames.Portal.showScoreboard(e)
    },
    submitScores: function(e, t) {
        t || (t = function() {});
        SpilGames.Highscores.insert({
            score: e
        }, t)
    }
};
if (!ExternalAPI.check())
    var SpilGames;
AudioMixer.buffer = {};
AudioMixer.waContext = null;
var stage, landscape=!1, fps = 24, bitmaps, GET, iosMode=!1, android=!1, usedPoints = 0, gameScore = 0, coins = 0, showUnlockAnimation=!1, ignoreMenuTheme=!1, soundOn, mixer2, STATE_LOAD = 0, STATE_LOGO = 1, STATE_MENU = 2, STATE_GAME = 3, STATE_SELECT_DIFFICULTY = 4, STATE_VICTORY = 5, STATE_DEFEAT = 6, STATE_HIGHSCORES = 7, STATE_CREDITS = 8, STATE_TUTORIAL = 9, STATE_MISSION_INFO = 10, D_SIMPLE = 0, D_NORMAL = 1, D_HARD = 2, D_EXPERT = 3, D_ULTIMATE = 4, currentDifficulty, gameState = STATE_LOAD, T_EMPTY = 0, T_AMOEBA = 1, T_JELLYFISH = 2, T_SMARTFISH = 3, T_LIZARD = 4, T_WOLF = 5, T_APE = 6, T_HOMOSAPIENS = 7, T_UNKNOWN = 8, T_ETHER = 20, T_FIRE = 21, T_ICE = 22, T_UFO = 23, easy_level = {
    init: {},
    elements: {},
    upgrades: [T_AMOEBA, T_JELLYFISH, T_SMARTFISH, T_LIZARD],
    field: {
        x: 5,
        y: 5
    },
    name: "easy"
};
easy_level.init[T_AMOEBA] = 4;
easy_level.init[T_JELLYFISH] = 1;
easy_level.init[T_SMARTFISH] = 1;
easy_level.init[T_ICE] = 6;
easy_level.elements[T_AMOEBA] = 30;
easy_level.elements[T_JELLYFISH] = 20;
easy_level.elements[T_FIRE] = 10;
easy_level.elements[T_ICE] = 10;
var medium_level = {
    init: {},
    elements: {},
    upgrades: [T_AMOEBA, T_JELLYFISH, T_SMARTFISH, T_LIZARD, T_WOLF],
    field: {
        x: 5,
        y: 5
    },
    name: "medium"
};
medium_level.init[T_AMOEBA] = 3;
medium_level.init[T_JELLYFISH] = 1;
medium_level.init[T_ICE] = 3;
medium_level.elements[T_AMOEBA] = 40;
medium_level.elements[T_JELLYFISH] = 30;
medium_level.elements[T_FIRE] = 10;
medium_level.elements[T_ICE] = 10;
medium_level.elements[T_ETHER] = 5;
var hard_level = {
    init: {},
    elements: {},
    upgrades: [T_AMOEBA, T_JELLYFISH, T_SMARTFISH, T_LIZARD, T_WOLF, T_APE],
    field: {
        x: 5,
        y: 5
    },
    name: "hard"
};
hard_level.init[T_AMOEBA] = 3;
hard_level.init[T_JELLYFISH] = 1;
hard_level.init[T_ICE] = 3;
hard_level.elements[T_AMOEBA] = 30;
hard_level.elements[T_JELLYFISH] = 20;
hard_level.elements[T_SMARTFISH] = 10;
hard_level.elements[T_FIRE] = 10;
hard_level.elements[T_ICE] = 5;
hard_level.elements[T_UFO] = 10;
var expert_level = {
    init: {},
    elements: {},
    upgrades: [T_AMOEBA, T_JELLYFISH, T_SMARTFISH, T_LIZARD, T_WOLF, T_APE, T_HOMOSAPIENS],
    field: {
        x: 5,
        y: 5
    },
    name: "expert"
};
expert_level.init[T_AMOEBA] = 5;
expert_level.init[T_JELLYFISH] = 3;
expert_level.init[T_ICE] = 3;
expert_level.elements[T_AMOEBA] = 30;
expert_level.elements[T_JELLYFISH] = 20;
expert_level.elements[T_SMARTFISH] = 10;
expert_level.elements[T_LIZARD] = 5;
expert_level.elements[T_WOLF] = 2;
expert_level.elements[T_APE] = 1;
expert_level.elements[T_FIRE] = 10;
expert_level.elements[T_ICE] = 5;
expert_level.elements[T_UFO] = 10;
var ultimate_level = {
    init: {},
    elements: {},
    upgrades: [T_AMOEBA, T_JELLYFISH, T_SMARTFISH, T_LIZARD, T_WOLF, T_APE, T_HOMOSAPIENS, T_UNKNOWN],
    field: {
        x: 5,
        y: 5
    },
    name: "ultimate"
};
ultimate_level.init[T_AMOEBA] = 2;
ultimate_level.init[T_JELLYFISH] = 2;
ultimate_level.init[T_SMARTFISH] = 3;
ultimate_level.init[T_ICE] = 4;
ultimate_level.elements[T_AMOEBA] = 10;
ultimate_level.elements[T_JELLYFISH] = 25;
ultimate_level.elements[T_SMARTFISH] = 15;
ultimate_level.elements[T_LIZARD] = 10;
ultimate_level.elements[T_WOLF] = 5;
ultimate_level.elements[T_APE] = 4;
ultimate_level.elements[T_FIRE] = 8;
ultimate_level.elements[T_ICE] = 9;
ultimate_level.elements[T_UFO] = 8;
ultimate_level.elements[T_HOMOSAPIENS] = 1;
var LEVELS = [easy_level, medium_level, hard_level, expert_level, ultimate_level], EL_BMP = {};
EL_BMP[T_EMPTY] = "element";
EL_BMP[T_AMOEBA] = "unicellar";
EL_BMP[T_JELLYFISH] = "meduze";
EL_BMP[T_SMARTFISH] = "fish";
EL_BMP[T_LIZARD] = "pangolin";
EL_BMP[T_WOLF] = "mammal";
EL_BMP[T_APE] = "people";
EL_BMP[T_HOMOSAPIENS] = "uslon";
EL_BMP[T_UNKNOWN] = "unknown";
EL_BMP[T_ETHER] = "ether";
EL_BMP[T_FIRE] = "fire";
EL_BMP[T_ICE] = "ice";
EL_BMP[T_UFO] = "ufo";
var EL_SCORE = {};
EL_SCORE[T_EMPTY] = 0;
EL_SCORE[T_AMOEBA] = 0;
EL_SCORE[T_JELLYFISH] = 100;
EL_SCORE[T_SMARTFISH] = 500;
EL_SCORE[T_LIZARD] = 3e3;
EL_SCORE[T_WOLF] = 15e3;
EL_SCORE[T_APE] = 3e4;
EL_SCORE[T_HOMOSAPIENS] = 1e5;
EL_SCORE[T_UNKNOWN] = 5e5;
EL_SCORE[T_ETHER] = 0;
EL_SCORE[T_FIRE] = 0;
EL_SCORE[T_ICE] = 0;
EL_SCORE[T_UFO] = 0;
var FIELD_SIZE = {
    x: 5,
    y: 5
}, CHAIN_LENGTH = 3, assets = [{
    name: "field-select-level-bg",
    src: "field-select-level-bg.png",
    width: 301,
    height: 432
}, {
    name: "easy",
    src: "easy.png",
    width: 248,
    height: 66,
    frames: 2
}, {
    name: "medium",
    src: "medium.png",
    width: 248,
    height: 66,
    frames: 2
}, {
    name: "hard",
    src: "hard.png",
    width: 248,
    height: 66,
    frames: 2
}, {
    name: "expert",
    src: "expert.png",
    width: 248,
    height: 66,
    frames: 2
}, {
    name: "ultimate",
    src: "ultimate.png",
    width: 248,
    height: 66,
    frames: 2
}, {
    name: "field-play-playingfield",
    src: "field-play-playingfield.png",
    width: 306,
    height: 378
}, {
    name: "buy",
    src: "buy.png",
    width: 78,
    height: 24,
    frames: 2
}, {
    name: "replay",
    src: "replay.png",
    width: 122,
    height: 46
}, {
    name: "menu",
    src: "menu.png",
    width: 122,
    height: 46
}, {
    name: "plus",
    src: "plus.png",
    width: 27,
    height: 26,
    frames: 2
}, {
    name: "field-play-score-bg",
    src: "field-play-score-bg.png",
    width: 135,
    height: 54
}, {
    name: "field_highscore",
    src: "field-highscore-bg.png",
    width: 301,
    height: 431
}, {
    name: "highscores",
    src: "highscores.png",
    width: 226,
    height: 78,
    frames: 2
}, {
    name: "popup_bg",
    src: "popup_bg.png",
    width: 165,
    height: 194
}, {
    name: "lock",
    src: "lock.png",
    width: 61,
    height: 56,
    frames: 11
}, {
    name: "evol_back",
    src: "evol_back.png",
    width: 302,
    height: 427
}, {
    name: "back_field-evolution-popup",
    src: "back_field-evolution-popup.png",
    width: 411,
    height: 313
}, {
    name: "light_win",
    src: "light_win.png",
    width: 101,
    height: 101
}, {
    name: "ether",
    src: "field-play-card-ether1.png",
    width: 50,
    height: 50
}, {
    name: "fire",
    src: "field-play-card-fire.png",
    width: 50,
    height: 50
}, {
    name: "fish",
    src: "field-play-card-fish.png",
    width: 50,
    height: 50
}, {
    name: "font1",
    src: "Numbers.png",
    width: 12,
    height: 200,
    frames: 10
}, {
    name: "ice",
    src: "field-play-card-ice.png",
    width: 50,
    height: 50
}, {
    name: "mammal",
    src: "field-play-card-wolf.png",
    width: 50,
    height: 50
}, {
    name: "meduze",
    src: "field-play-card-jellyfish.png",
    width: 50,
    height: 50
}, {
    name: "pangolin",
    src: "field-play-card-lizard.png",
    width: 50,
    height: 50
}, {
    name: "people",
    src: "field-play-card-monkey.png",
    width: 50,
    height: 50
}, {
    name: "uslon",
    src: "field-play-card-human.png",
    width: 50,
    height: 50
}, {
    name: "popup_loose",
    src: "popup_loose.png",
    width: 316,
    height: 186
}, {
    name: "ufo",
    src: "field-play-card-ufo.png",
    width: 50,
    height: 50
}, {
    name: "unicellar",
    src: "field-play-card-amoeba.png",
    width: 50,
    height: 50
}, {
    name: "baveuse",
    src: "fonts/baveuse_white.png",
    frames: 6,
    layers: 16,
    width: 15,
    height: 15
}, {
    name: "field-main-logo",
    src: "field-main-logo.png",
    width: 319,
    height: 141
}, {
    name: "field-main-btn-bg",
    src: "field-main-btn-bg.png",
    width: 261,
    height: 298
}, {
    name: "play",
    src: "play.png",
    width: 227,
    height: 120,
    frames: 2
}, {
    name: "light",
    src: "gme-bg-light.png",
    width: 320,
    height: 480
}, {
    name: "credits",
    src: "credits.png",
    width: 205,
    height: 69,
    frames: 2
}, {
    name: "sound",
    src: "sound.png",
    width: 56,
    height: 54,
    frames: 2
}, {
    name: "txt_1",
    src: "txt_1.png",
    width: 251,
    height: 47
}, {
    name: "txt_2",
    src: "txt_2.png",
    width: 200,
    height: 49
}, {
    name: "txt_3",
    src: "txt_3.png",
    width: 190,
    height: 152
}, {
    name: "txt_4",
    src: "txt_4.png",
    width: 198,
    height: 79
}, {
    name: "txt_5",
    src: "txt_5.png",
    width: 149,
    height: 104
}, {
    name: "txt_6",
    src: "txt_6.png",
    width: 179,
    height: 87
}, {
    name: "txt_7",
    src: "txt_7.png",
    width: 108,
    height: 94
}, {
    name: "txt_8",
    src: "txt_8.png",
    width: 174,
    height: 71
}, {
    name: "txt_9",
    src: "txt_9.png",
    width: 125,
    height: 111
}, {
    name: "txt_10",
    src: "txt_10.png",
    width: 156,
    height: 82
}, {
    name: "txt_11",
    src: "txt_11.png",
    width: 122,
    height: 115
}, {
    name: "txt_12",
    src: "txt_12.png",
    width: 135,
    height: 113
}, {
    name: "txt_13",
    src: "txt_13.png",
    width: 102,
    height: 69
}, {
    name: "txt_14",
    src: "txt_14.png",
    width: 167,
    height: 107
}, {
    name: "txt_15",
    src: "txt_15.png",
    width: 200,
    height: 78
}, {
    name: "txt_16",
    src: "txt_16.png",
    width: 151,
    height: 92
}, {
    name: "txt_17",
    src: "txt_17.png",
    width: 178,
    height: 53
}, {
    name: "txt_18",
    src: "txt_18.png",
    width: 189,
    height: 71
}, {
    name: "txt_19",
    src: "txt_19.png",
    width: 240,
    height: 133
}, {
    name: "txt_20",
    src: "txt_20.png",
    width: 187,
    height: 169
}, {
    name: "win_next",
    src: "win_next.png",
    width: 50,
    height: 50,
    frames: 2
}, {
    name: "win_replay",
    src: "win_replay.png",
    width: 50,
    height: 50,
    frames: 2
}, {
    name: "back_field_win",
    src: "back_field_win.png",
    width: 300,
    height: 195
}, {
    name: "unknown1",
    src: "unknown1.png",
    width: 49,
    height: 50
}, {
    name: "unknown2",
    src: "unknown2.png",
    width: 49,
    height: 50
}, {
    name: "unknown3",
    src: "unknown3.png",
    width: 49,
    height: 50
}, {
    name: "unknown4",
    src: "unknown4.png",
    width: 49,
    height: 50
}, {
    name: "unknown5",
    src: "unknown5.png",
    width: 49,
    height: 50
}, {
    name: "unknown6",
    src: "unknown6.png",
    width: 49,
    height: 50
}, {
    name: "arrow",
    src: "arrow.png",
    width: 13,
    height: 28
}, {
    name: "mission_bg",
    src: "mission-bg.png",
    width: 279,
    height: 256
}, {
    name: "mission_create_1",
    src: "mission-create-1.png",
    width: 150,
    height: 16
}, {
    name: "mission_create_2",
    src: "mission-create-2.png",
    width: 138,
    height: 16
}, {
    name: "mission_create_3",
    src: "mission-create-3.png",
    width: 126,
    height: 16
}, {
    name: "mission_create_4",
    src: "mission-create-4.png",
    width: 150,
    height: 16
}, {
    name: "mission_create_5",
    src: "mission-create-5.png",
    width: 103,
    height: 16
}, {
    name: "mission_untitled_a",
    src: "mission-untitled-a.png",
    width: 48,
    height: 48
}, {
    name: "mission_untitled_b",
    src: "mission-untitled-b.png",
    width: 48,
    height: 48
}, {
    name: "r1",
    src: "r1.png",
    width: 6,
    height: 6
}, {
    name: "r2",
    src: "r2.png",
    width: 6,
    height: 6
}, {
    name: "qmark",
    src: "qmark.png",
    width: 51,
    height: 57,
    frames: 2
}, {
    name: "coin_rotate",
    src: "coin_rotate.png",
    width: 46,
    height: 46,
    frames: 9
}, {
    name: "coin_rotate12",
    src: "coin_rotate12.png",
    width: 48,
    height: 24,
    frames: 18
}, {
    name: "Help1",
    src: "Help1.png",
    width: 320,
    height: 480
}, {
    name: "Help2",
    src: "Help2.png",
    width: 320,
    height: 480
}, {
    name: "Help3",
    src: "Help3.png",
    width: 320,
    height: 480
}, {
    name: "Help4",
    src: "Help4.png",
    width: 320,
    height: 480
}, {
    name: "arrow_frwd",
    src: "arrow_frwd.png",
    width: 12,
    height: 31
}, {
    name: "arrow_prev",
    src: "arrow_prev.png",
    width: 12,
    height: 31
}, {
    name: "arrow_down",
    src: "arrow_down.png",
    width: 31,
    height: 12
}, {
    name: "arrow_up",
    src: "arrow_up.png",
    width: 31,
    height: 12
}, {
    name: "back_field_win_3",
    src: "back_field-win-3.png",
    width: 300,
    height: 344
}, {
    name: "text1",
    src: "text1.png",
    width: 55,
    height: 18
}, {
    name: "text2",
    src: "text2.png",
    width: 157,
    height: 18
}, {
    name: "text3",
    src: "text3.png",
    width: 88,
    height: 18
}, {
    name: "Fish",
    src: "Fish.png",
    width: 256,
    height: 80
}, {
    name: "geek",
    src: "geek.png",
    width: 256,
    height: 80
}, {
    name: "human",
    src: "human.png",
    width: 256,
    height: 80
}, {
    name: "humanoid",
    src: "humanoid.png",
    width: 256,
    height: 80
}, {
    name: "Jellyfish",
    src: "Jellyfish.png",
    width: 256,
    height: 80
}, {
    name: "lizard",
    src: "lizard.png",
    width: 256,
    height: 80
}, {
    name: "superbrains",
    src: "superbrains.png",
    width: 256,
    height: 80
}, {
    name: "superhuman",
    src: "superhuman.png",
    width: 256,
    height: 80
}, {
    name: "Unknown",
    src: "Unknown.png",
    width: 256,
    height: 80
}, {
    name: "wolf",
    src: "wolf.png",
    width: 256,
    height: 80
}, {
    name: "zombie",
    src: "zombie.png",
    width: 256,
    height: 80
}, {
    name: "cyborg",
    src: "cyborg.png",
    width: 256,
    height: 80
}, {
    name: "ape",
    src: "ape.png",
    width: 256,
    height: 80
}, {
    name: "Amoeba",
    src: "Amoeba.png",
    width: 256,
    height: 80
}, {
    name: "back",
    src: "back.png",
    width: 257,
    height: 355
}
];
window.onload = function() {
    GET = Utils.parseGet();
    Utils.addMobileListeners();
    ExternalAPI.init();
    setTimeout(startLoad, 600)
};
var current_game_mode = 0;
var lastBackground = null;
var tempRouletteArray = [], rouletteProbability = {
    T_AMOEBA: {
        n: 30,
        v: 1
    },
    T_JELLYFISH: {
        n: 20,
        v: 2
    },
    T_SMARTFISH: {
        n: 17,
        v: 3
    },
    T_LIZARD: {
        n: 13,
        v: 4
    },
    T_WOLF: {
        n: 10,
        v: 5
    },
    T_APE: {
        n: 7,
        v: 6
    },
    T_HOMOSAPIENS: {
        n: 3,
        v: 7
    }
};
var startScrollPosition, scrollLocked=!1, clickForbidden=!0;
var field;
var maxUnlockedItem = {
    t: 3,
    newUnlocked: !1
}, GameElement = function(e, t) {
    var n = this;
    e=~~e;
    "ultimate" == currentDifficulty && e > maxUnlockedItem.t && 10 > e&&!maxUnlockedItem.newUnlocked && (maxUnlockedItem.t = e);
    if (8 == e) {
        var r = Math.ceil(6 * Math.random());
        maxUnlockedItem.t = r;
        maxUnlockedItem.newUnlocked=!0;
        EL_BMP[T_UNKNOWN] = "unknown" + r;
        Utils.getCookie("icon1" + r + "ul") || (Utils.setCookie("icon1" + r + "ul", !0), field.upgradeType = 10 + r, stage.setTimeout(function() {
            showEvolutionPopup(10 + r, function() {})
        }, 5))
    }
    var i = e == T_EMPTY ? new Sprite(null, 45, 45, 1, 1): library.getAsset(EL_BMP[e]);
    t && maxUnlockedItem.newUnlocked && (i = library.getAsset(EL_BMP[T_UNKNOWN]));
    GameElement.superclass.constructor.call(this, i.bitmap, ~~i.width, ~~i.height, ~~i.frames, ~~i.layers);
    this.gametype = e;
    this.currentLayer = this.currentFrame = 0;
    this.moved=!1;
    this.setType = function(e) {
        var t = e == T_EMPTY ? new Sprite(null, 45, 45, 1, 1): library.getAsset(EL_BMP[~~e]);
        this.gametype=~~e;
        this.bitmap = t.bitmap;
        this.width=~~t.width;
        this.height=~~t.height;
        this.totalFrames=~~t.frames;
        this.totalLayers=~~t.layers;
        this.currentLayer = this.currentFrame = 0
    };
    this.blink = function() {
        n.fadeTo(.3, 6, Easing.cubic.easeOut, function(e) {
            n.fadeTo(1, 1, Easing.linear.easeIn)
        })
    }
};
Utils.extend(GameElement, Sprite);
var GameField = function(e) {
    var t = this;
    GameField.superclass.constructor.call(this);
    this.level = e;
    this.size = e.field;
    this.nextElement = new GameElement;
    this.storedElement = new GameElement(T_EMPTY);
    this.getTypes = function() {
        for (var e = [], t = 0; t < this.length; t++)
            e.push(this[t].gametype);
        return e
    };
    this.setTypes = function(e) {
        for (var t = 0; t < e.length; t++)
            t < this.length && this[t].setType(~~e[t])
    };
    this.getElementId = function(e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] === e)
                return t
    };
    this.create = function() {
        for (var e = new Sprite(null, 45, 45, 1, 1), e = new Vector(e.width + 6, e.height + 6), n = new Vector(160 - t.size.x * e.x / 2 + e.x / 2, 282 - t.size.y * e.y / 2 + e.y / 2), r = 0; r < t.size.y; r++)
            for (var i = 0; i < t.size.x; i++) {
                var s = new GameElement;
                this.push(s);
                s.type = "gameCell";
                s.x = n.x + e.x * i;
                s.y = n.y + e.y * r;
                s.onmouseup = t.clickHandler;
                stage.addChild(s)
            }
        t.init();
        e = t.generateNextType();
        t.nextElement = new GameElement(e);
        t.nextElement.setPosition(57, 118);
        t.nextElement.onmouseup = function() {
            if (tutorialActivated)
                return !1;
            t.swapStack()
        };
        stage.addChild(t.nextElement);
        t.storedElement = new GameElement(T_EMPTY);
        t.storedElement.setPosition(235, 118);
        t.storedElement.onmouseup = function() {
            tutorialActivated || t.swapStack();
            if (tutorialActivated && (tut04completed&&!tut05completed || tut07completed&&!tut08completed))
                return t.swapStack(), tutDone(), !0
        };
        stage.addChild(t.storedElement);
        checkIfNeedLaunchTutorial(t.size.x * t.size.y, t)
    };
    this.init = function() {
        var e = t.size.x * t.size.y;
        initializeUserScore();
        currentDifficulty = t.level.name;
        checkDifficulty();
        if ("easy" != currentDifficulty ||!tutorialActivated)
            if ("medium" != currentDifficulty ||!tutorialActivated)
                if ("hard" != currentDifficulty ||!tutorialActivated)
                    for (var n in t.level.init)
                        for (var r = t.level.init[n]; 0 < r;) {
                            for (var i = Math.floor(Math.random() * e); t[i].gametype > T_EMPTY;)
                                i = Math.floor(Math.random() * e);
                                t[i].setType(n);
                                r--
                        }
    };
    this.generateNextType = function() {
        if (tutorialActivated)
            return tut02completed || "easy" != currentDifficulty ? tut03completed || "easy" != currentDifficulty ? tut06completed&&!tut07completed && "easy" == currentDifficulty ? T_ICE : tut10completed || "medium" != currentDifficulty ? tut11completed || "hard" != currentDifficulty ? tut12completed || "hard" != currentDifficulty ? tut13completed || "hard" != currentDifficulty ? T_AMOEBA : T_UFO : T_FIRE : T_UFO : T_ETHER : T_FIRE : T_AMOEBA;
        var e = t.level.elements, n = 0, r;
        for (r in e)
            n += e[r];
        n = Math.floor(Math.random() * n);
        for (r in e)
            if (n -= e[r], 0 >= n)
                return r;
        return T_AMOEBA
    };
    this.getUpgradeType = function(e) {
        for (var n = t.level.upgrades, r = 0; r < n.length; r++)
            if (n[r] == e)
                return field.upgradeType = n[r + 1], ++r < n.length ? n[r] : 0;
        return 0
    };
    this.locked=!1;
    this.swapStack = function(e) {
        if (t.locked || t.nextElement.gametype == T_UFO)
            return !1;
        e = new GameElement(t.nextElement.gametype);
        e.setPosition(t.nextElement.x, t.nextElement.y);
        var n = new GameElement(t.storedElement.gametype);
        n.setPosition(t.storedElement.x, t.storedElement.y);
        t.nextElement.visible=!1;
        stage.addChild(e);
        t.locked=!0;
        e.moveTo(t.storedElement.x, t.storedElement.y, 6, Easing.cubic.easeIn, function(e) {
            t.storedElement.setType(e.target.obj.gametype);
            t.storedElement.visible=!0;
            stage.removeChild(e.target.obj);
            t.locked=!1
        });
        n.gametype > T_EMPTY ? (t.storedElement.visible=!1, stage.addChild(n), n.moveTo(t.nextElement.x, t.nextElement.y, 6, Easing.cubic.easeIn, function(e) {
            t.nextElement.setType(e.target.obj.gametype);
            t.nextElement.visible=!0;
            stage.removeChild(e.target.obj)
        })) : (e = t.generateNextType(), t.nextElement.setType(e), t.nextElement.visible=!0);
        0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("swap_stack", !1, !1, 0)
    };
    this.clickHandler = function(e) {
        if (blockForTutorial)
            return !0;
        if (t.locked)
            return !1;
        var n = e.target;
        e = new GameElement(t.nextElement.gametype);
        e.setPosition(t.nextElement.x, t.nextElement.y);
        var r=!1;
        switch (n.gametype) {
        case T_EMPTY:
            if (e.gametype == T_FIRE) {
                n.blink();
                break
            }
            if (e.gametype == T_ETHER) {
                var r = t.getTypes(), r = new ChainFinder(r, CHAIN_LENGTH, t.size.x, !1), i = t.getElementId(n), i = r.findPossibleChains(i), s =- 1;
                if (i)
                    for (var o in i)
                        r.checkChainLength(i[o])&&~~o > s && 0 < t.getUpgradeType(~~o) && (s=~~o);
                e.gametype = 1 > s ? T_ICE : s
            }
            t.locked=!0;
            stage.addChild(e);
            e.moveTo(n.x, n.y, 12, Easing.circular.easeOut, function(e) {
                n.setType(e.target.obj.gametype);
                e.target.obj.removeTweens();
                stage.removeChild(e.target.obj);
                t.locked=!1;
                t.upgradeChains(n)
            });
            r=!0;
            e.gametype == T_ICE ? 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("ice_add", !1, !1, 0) : 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("element_add", !1, !1, 0);
            break;
        default:
            e.gametype == T_FIRE ? (stage.addChild(e), t.locked=!0, e.moveTo(n.x, n.y, 6, Easing.linear.easeOut, function(e) {
                e.target.obj.removeTweens();
                e.target.obj.fadeTo(0, 12, Easing.circular.easeOut, function(e) {
                    stage.removeChild(e.target.obj)
                });
                t.locked=!1;
                n.gametype == T_UFO ? (n.setType(T_EMPTY), e = new GameElement(T_UFO), e.setPosition(n.x, n.y), stage.addChild(e), t.nextElement.fadeTo(0, 12, Easing.linear.easeIn), e.moveTo(t.nextElement.x, t.nextElement.y, 12, Easing.cubic.easeOut, function(e) {
                    e.target.obj.fadeTo(0, 12, Easing.linear.easeIn, function(e) {
                        stage.removeChild(e.target.obj);
                        t.moveAliens()
                    });
                    t.nextElement.setType(T_ETHER);
                    t.nextElement.fadeTo(1, 12, Easing.linear.easeIn)
                }), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("alien_death", !1, !1, 0)) : (n.setType(T_EMPTY), 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("element_burn", !1, !1, 0));
                t.moveAliens()
            }), r=!0) : n.blink()
        }
        r && t.nextElement.setType(t.generateNextType())
    };
    this.upgradeChains = function(e) {
        t.locked=!0;
        for (var n = t.getTypes(), n = (new ChainFinder(n, CHAIN_LENGTH, t.size.x, !1)).findChains(), r = 0, i = 0; i < n.length; i++) {
            var s = n[i];
            if (!(0 > s.indexOf(t.getElementId(e)))) {
                var o = t.getUpgradeType(e.gametype);
                if (!(1 > o)) {
                    8 == o ? 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("new_superhuman", !1, !1, 0) : 0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("new_element", !1, !1, 0);
                    r++;
                    for (var u = 0; u < s.length; u++) {
                        var a = s[u];
                        if (t[a] !== e) {
                            var f = new GameElement(t[a].gametype);
                            f.setPosition(t[a].x, t[a].y);
                            stage.addChild(f);
                            t[a].setType(T_EMPTY);
                            f.moveTo(e.x, e.y, 6, Easing.linear.easeIn, function(e) {
                                e.target.obj.removeTweens();
                                stage.removeChild(e.target.obj)
                            })
                        }
                    }
                    s = new GameElement(o);
                    s.setPosition(e.x, e.y);
                    s.opacity = 0;
                    stage.addChild(s);
                    s.fadeTo(1, 12, Easing.linear.easeIn, function(n) {
                        e.setType(n.target.obj.gametype);
                        n.target.obj.removeTweens();
                        stage.removeChild(n.target.obj);
                        var r = getScore()+~~EL_SCORE[e.gametype];
                        checkIfNeedPopup(function() {
                            setScore(r, ~~EL_SCORE[e.gametype], e.x, e.y);
                            t.upgradeChains(e)
                        })
                    })
                }
            }
        }
        1 > r && (t.locked=!1, t.moveAliens())
    };
    this.moveAliens = function() {
        t.locked=!0;
        var e = function() {
            for (var e = 0; e < t.length; e++)
                if (t[e].gametype == T_UFO&&!t[e].moved)
                    return e;
            return -1
        }();
        if (0 > e) {
            for (e = 0; e < t.length; e++)
                t[e].gametype == T_UFO && (t[e].moved=!1);
            t.locked=!1;
            return t.checkGameOver()
        }
        var n = function(e, n) {
            var r = e%t.size.x, i = Math.floor(e / t.size.y), s = [];
            0 < r && (n && t[e-1].gametype !== T_EMPTY || s.push(e-1));
            r + 1 < t.size.x && (n && t[e + 1].gametype !== T_EMPTY || s.push(e + 1));
            0 < i && (n && t[e - t.size.y].gametype !== T_EMPTY || s.push(e - t.size.y));
            i + 1 < t.size.y && (n && t[e + t.size.y].gametype !== T_EMPTY || s.push(e + t.size.y));
            return s
        }(e, !0);
        if (1 > n.length) {
            t[e].setType(T_EMPTY);
            var r = new GameElement(T_UFO);
            r.setPosition(t[e].x, t[e].y);
            stage.addChild(r);
            t.nextElement.fadeTo(0, 12, Easing.linear.easeIn);
            r.moveTo(t.nextElement.x, t.nextElement.y, 12, Easing.cubic.easeOut, function(e) {
                e.target.obj.fadeTo(0, 12, Easing.linear.easeIn, function(e) {
                    stage.removeChild(e.target.obj);
                    t.moveAliens()
                });
                t.nextElement.setType(T_ETHER);
                t.nextElement.fadeTo(1, 12, Easing.linear.easeIn)
            })
        } else {
            var i = Math.floor(Math.random() * n.length);
            t[n[i]].gametype = null;
            t[e].setType(T_EMPTY);
            r = new GameElement(T_UFO);
            r.setPosition(t[e].x, t[e].y);
            stage.addChild(r);
            r.targetID = n[i];
            r.moveTo(t[n[i]].x, t[n[i]].y, 6, Easing.linear.easeIn, function(e) {
                t[e.target.obj.targetID].setType(T_UFO);
                t[e.target.obj.targetID].moved=!0;
                stage.removeChild(e.target.obj);
                t.moveAliens()
            })
        }
        0 != Utils.getCookie("soundOn") || iosMode || android || mixer.play("alien_move", !1, !1, 0)
    };
    this.checkGameOver = function() {
        for (var e = current_game_mode == D_ULTIMATE, n = t.level.upgrades[t.level.upgrades.length-1], r = t.length, i = 0; i < t.length; i++) {
            if (t[i].gametype === n&&!e) {
                gameState = STATE_VICTORY;
                createScene();
                return 
            }
            t[i].gametype !== T_EMPTY && r--
        }
        1 > r && (gameState = e ? STATE_VICTORY : STATE_DEFEAT, createScene())
    }
};
Utils.extend(GameField, Array);
var score;
var slidesNumber = 0;
var tutorialActivated=!1, tut01completed=!1, tut02completed=!1, tut03completed=!1, tut04completed=!1, tut05completed=!1, tut06completed=!1, tut07completed=!1, tut08completed=!1, tut09completed=!1, tut10completed=!1, tut11completed=!1, tut12completed=!1, tut12_1completed=!1, tut13completed=!1, tut14completed=!1, tut15completed=!1, blockForTutorial=!1, tutArray = [], gameElementArray = [];
-->


