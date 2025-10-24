document.addEventListener("DOMContentLoaded", function () {
  function loadAltmetricScript() {
    if (!document.getElementById("altmetric-script")) {
      var script = document.createElement("script");
      script.id = "altmetric-script";
      script.src = "https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadAltmetricScript();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".lazy-altmetric").forEach((el) => observer.observe(el));
});
