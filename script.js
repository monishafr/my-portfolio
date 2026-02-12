/* document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.1
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }); */

  document.addEventListener('DOMContentLoaded', () => {
  // Fade in sections
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Resume password gate
  const RESUME_PASSWORD = "MPResume2026!";
  const RESUME_URL = "Resume/MonishaPatro.pdf";

  const btn = document.getElementById("downloadResumeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const entered = window.prompt("Enter the resume access code:");
      if (!entered) return;

      if (entered.trim() === RESUME_PASSWORD) {
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      } else {
        alert("Incorrect access code.");
      }
    });
  }
});

  