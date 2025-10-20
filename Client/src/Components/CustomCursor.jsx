import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y });

  // disable on touch devices
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // immediate small dot follows directly for sharper feel
      dot.style.transform = `translate3d(${
        e.clientX - dot.offsetWidth / 2
      }px, ${e.clientY - dot.offsetHeight / 2}px, 0)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const interactiveEnter = () => {
      ring.classList.add("cursor--hover");
      dot.classList.add("cursor--hover-dot");
    };
    const interactiveLeave = () => {
      ring.classList.remove("cursor--hover");
      dot.classList.remove("cursor--hover-dot");
    };

    const interactiveSelector =
      'a, button, input, textarea, select, label, .cursor-pointer, [role="button"], img';
    const interactiveEls = Array.from(
      document.querySelectorAll(interactiveSelector)
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", interactiveEnter);
      el.addEventListener("mouseleave", interactiveLeave);
      el.addEventListener("focus", interactiveEnter);
      el.addEventListener("blur", interactiveLeave);
    });

    const onMouseDown = () => {
      ring.classList.add("cursor--down");
      dot.classList.add("cursor--down");
    };
    const onMouseUp = () => {
      ring.classList.remove("cursor--down");
      dot.classList.remove("cursor--down");
    };

    const render = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.18);
      ring.style.transform = `translate3d(${
        pos.current.x - ring.offsetWidth / 2
      }px, ${pos.current.y - ring.offsetHeight / 2}px, 0)`;
      requestRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    requestRef.current = requestAnimationFrame(render);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", interactiveEnter);
        el.removeEventListener("mouseleave", interactiveLeave);
        el.removeEventListener("focus", interactiveEnter);
        el.removeEventListener("blur", interactiveLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring pointer-events-none fixed z-[9999] top-0 left-0 w-9 h-9 rounded-full border border-blue-500/60 opacity-0"
        aria-hidden
      />

      <div
        ref={dotRef}
        className="custom-cursor-dot pointer-events-none fixed z-[9999] top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-900 opacity-0"
        aria-hidden
      />
    </>
  );
};

export default CustomCursor;
