// @ts-ignore
function n(e) {
  // @ts-ignore
  this.init(e || {});
}
n.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.phase = e.phase || 0;
    // @ts-ignore
    this.offset = e.offset || 0;
    // @ts-ignore
    this.frequency = e.frequency || 0.001;
    // @ts-ignore
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    return (
      // @ts-ignore
      (this.phase += this.frequency),
      // @ts-ignore
      (e = this.offset + Math.sin(this.phase) * this.amplitude)
    );
  },
  value: function () {
    return e;
  },
};

// @ts-ignore
function Line(e) {
  // @ts-ignore
  this.init(e || {});
}

Line.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    // @ts-ignore
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    // @ts-ignore
    this.nodes = [];
    for (var t, n = 0; n < E.size; n++) {
      t = new Node();
      // @ts-ignore
      t.x = pos.x;
      // @ts-ignore
      t.y = pos.y;
      // @ts-ignore
      this.nodes.push(t);
    }
  },
  update: function () {
    // @ts-ignore
    let e = this.spring,
      // @ts-ignore
      t = this.nodes[0];
    // @ts-ignore
    t.vx += (pos.x - t.x) * e;
    // @ts-ignore
    t.vy += (pos.y - t.y) * e;
    // @ts-ignore
    for (var n, i = 0, a = this.nodes.length; i < a; i++)
      // @ts-ignore
      (t = this.nodes[i]),
        0 < i &&
          // @ts-ignore
          ((n = this.nodes[i - 1]),
          (t.vx += (n.x - t.x) * e),
          (t.vy += (n.y - t.y) * e),
          (t.vx += n.vx * E.dampening),
          (t.vy += n.vy * E.dampening)),
        // @ts-ignore
        (t.vx *= this.friction),
        // @ts-ignore
        (t.vy *= this.friction),
        (t.x += t.vx),
        (t.y += t.vy),
        (e *= E.tension);
  },
  draw: function () {
    let e,
      t,
      // @ts-ignore
      n = this.nodes[0].x,
      // @ts-ignore
      i = this.nodes[0].y;
    // @ts-ignore
    ctx.beginPath();
    // @ts-ignore
    ctx.moveTo(n, i);
    // @ts-ignore
    for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
      // @ts-ignore
      e = this.nodes[a];
      // @ts-ignore
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      // @ts-ignore
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    // @ts-ignore
    e = this.nodes[a];
    // @ts-ignore
    t = this.nodes[a + 1];
    // @ts-ignore
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    // @ts-ignore
    ctx.stroke();
    // @ts-ignore
    ctx.closePath();
  },
};

// @ts-ignore
function onMousemove(e) {
  function c(e) {
    e.touches
      ? // @ts-ignore
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
      : // @ts-ignore
        ((pos.x = e.clientX), (pos.y = e.clientY)),
      e.preventDefault();
  }
  
  function l(e) {
    // @ts-ignore
    1 == e.touches.length &&
      ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
  }
  
  document.removeEventListener("mousemove", onMousemove),
  document.removeEventListener("touchstart", onMousemove),
  document.addEventListener("mousemove", c),
  document.addEventListener("touchmove", c),
  document.addEventListener("touchstart", l),
  c(e);
}

function render() {
  // @ts-ignore
  if (ctx.running) {
    // @ts-ignore
    ctx.globalCompositeOperation = "source-over";
    // @ts-ignore
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // @ts-ignore
    ctx.globalCompositeOperation = "lighter";
    // @ts-ignore
    // Use red tones for the particle animation (HSL with hue in red range)
    ctx.strokeStyle = "hsla(" + (0 + Math.random() * 20) + ",100%,65%,0.1)"; // Red tones (0-20 on HSL scale)
    // @ts-ignore
    ctx.lineWidth = 5;
    
    // Only attempt to draw lines if they exist
    if (lines && lines.length > 0) {
      for (var e, t = 0; t < E.trails; t++) {
        // @ts-ignore
        if (lines[t]) {
          (e = lines[t]).update();
          e.draw();
        }
      }
    }
    
    // @ts-ignore
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  // @ts-ignore
  const canvas = ctx.canvas;
  
  // Make sure canvas covers the entire container
  if (canvas) {
    const container = canvas.parentElement;
    
    if (container) {
      // Set canvas size to container size
      // @ts-ignore
      canvas.width = container.offsetWidth;
      // @ts-ignore 
      canvas.height = container.offsetHeight;
      
      // Initial position for animation
      if (typeof pos.x === 'undefined' || typeof pos.y === 'undefined') {
        pos.x = canvas.width / 2;
        pos.y = canvas.height / 2;
      }
    } else {
      // Fallback
      // @ts-ignore
      canvas.width = window.innerWidth;
      // @ts-ignore
      canvas.height = window.innerHeight;
      
      if (typeof pos.x === 'undefined' || typeof pos.y === 'undefined') {
        pos.x = canvas.width / 2;
        pos.y = canvas.height / 2;
      }
    }
  }
}

// @ts-ignore
var ctx,
  // @ts-ignore
  f,
  e = 0,
  pos = {},
  // @ts-ignore
  lines = [],
  E = {
    debug: true,
    friction: 0.4,
    trails: 150,
    size: 30,
    dampening: 0.02,
    tension: 0.97,
  };
function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

// Initialize lines array function
function initLines() {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

export const renderCanvas = function () {
  // Get canvas with ID
  // @ts-ignore
  const canvasElement = document.getElementById("canvas");
  
  if (!canvasElement) {
    console.error("Canvas element not found");
    return;
  }
  
  // @ts-ignore
  ctx = canvasElement.getContext("2d");
  
  if (!ctx) {
    console.error("Could not get 2D context");
    return;
  }
  
  ctx.running = true;
  ctx.frame = 1;
  
  f = new n({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  
  // Set initial position to center
  pos.x = canvasElement.width / 2;
  pos.y = canvasElement.height / 2;
  
  // Initialize lines before starting to render
  initLines();
  
  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("touchstart", onMousemove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    // @ts-ignore
    if (!ctx.running) {
      // @ts-ignore
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    // @ts-ignore
    ctx.running = true;
  });
  
  // Initial resize
  resizeCanvas();
  
  // Start rendering
  render();
}; 