
  function scrollTo('images') {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  document.getElementById("view-work").addEventListener('click', () => {
    scrollTo(document.getElementById("view-work"));
  });
