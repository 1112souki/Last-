'use strict';
{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");
  const hidden = document.querySelectorAll(".hidden");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  hidden.forEach(item => {
    item.addEventListener("click", () => {

      overlay.classList.remove("show");
      open.classList.remove("hide");
    })

  });
}

{

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {  // !は否定形（画面上にいないとき）
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll(".abc");



  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });

}

{
  const dts = document.querySelectorAll("dt");

  dts.forEach(dt => {
    dt.addEventListener("click", () => {
      dt.parentNode.classList.toggle("appear");

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove("appear");
        }
      });
    });
  });

}