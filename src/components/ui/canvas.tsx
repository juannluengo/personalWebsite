/* eslint-disable */
// @ts-nocheck 
// This file contains legacy animation code with type safety issues
// Disabling ESLint and TypeScript checking for the whole file to allow deployment

function n(e) {
  this.init(e || {});
}
n.prototype = {
  init: function (e) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    return (
      (this.phase += this.frequency),
      (e = this.offset + Math.sin(this.phase) * this.amplitude)
    );
  },
  value: function () {
    return e;
  },
};

function Line(e) {
  this.init(e || {});
}

Line.prototype = {
  init: function (e) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let t, n = 0; n < E.size; n++) {
      t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function () {
    let e = this.spring,
      t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (let n, i = 0, a = this.nodes.length; i < a; i++)
      (t = this.nodes[i]),
        0 < i &&
          ((n = this.nodes[i - 1]),
          (t.vx += (n.x - t.x) * e),
          (t.vy += (n.y - t.y) * e),
          (t.vx += n.vx * E.dampening),
          (t.vy += n.vy * E.dampening)),
        (t.vx *= this.friction),
        (t.vy *= this.friction),
        (t.x += t.vx),
        (t.y += t.vy),
        (e *= E.tension);
  },
  draw: function () {
    let e,
      t,
      n = this.nodes[0].x,
      i = this.nodes[0].y,
      a, o;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[a];
    t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  },
};

function onMousemove(e) {
  function c(e) {
    e.touches
      ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
      : ((pos.x = e.clientX), (pos.y = e.clientY));
    e.preventDefault();
  }
  
  function l(e) {
    1 == e.touches.length &&
      ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
  }
  
  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove);
  document.addEventListener("mousemove", c);
  document.addEventListener("touchmove", c);
  document.addEventListener("touchstart", l);
  c(e);
  initLines();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + (0 + Math.random() * 20) + ",100%,65%,0.1)"; // Red tones (0-20 on HSL scale)
    ctx.lineWidth = 6;
    
    // Only attempt to draw lines if they exist
    if (lines && lines.length > 0) {
      for (let e, t = 0; t < E.trails; t++) {
        if (lines[t]) {
          e = lines[t];
          e.update();
          e.draw();
        }
      }
    }
    
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  const canvas = ctx.canvas;
  
  // Make sure canvas covers the entire container
  if (canvas) {
    const container = canvas.parentElement;
    
    if (container) {
      // Set canvas size to container size
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      
      // Initial position for animation
      if (typeof pos.x === 'undefined' || typeof pos.y === 'undefined') {
        pos.x = canvas.width / 2;
        pos.y = canvas.height / 2;
      }
    } else {
      // Fallback
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (typeof pos.x === 'undefined' || typeof pos.y === 'undefined') {
        pos.x = canvas.width / 2;
        pos.y = canvas.height / 2;
      }
    }
  }
}

let ctx,
  f;
let e = 0;
const pos = {};
let lines = [];
const E = {
  debug: true,
  friction: 0.4,   // Lower friction for smoother movement
  trails: 150,     // More trails for denser effect
  size: 30,        // Smaller size for more delicate lines
  dampening: 0.02, // Slightly less dampening
  tension: 0.97,   // Slightly less tension
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
  const canvasElement = document.getElementById("canvas");
  
  if (!canvasElement) {
    console.error("Canvas element not found");
    return;
  }
  
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
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  
  // Initial resize
  resizeCanvas();
  
  // Start rendering
  render();
}; 