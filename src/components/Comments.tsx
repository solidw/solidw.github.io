import { useEffect, useRef } from "react";

export function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "solidw/solidw.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("label", "blog-comment");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
