const paginations = [1, 2, 3, 4, 5];
let currentPage = 1;
function renderPagination() {
  let html = ` <a href="#" class="Prev">Prev</a>`;
  paginations.forEach((page) => {
    html += `

      <a href="#" class="${page === currentPage ? "active" : ""}">${page}</a>
    
     
    `;
  });

  html += ` <a href="#" class="Next">Next</a>`;

  document.querySelector(".pagination").innerHTML = html;
  const prev = document.querySelector(".Prev");
  prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      const sound = new Audio("dragon-studio-new-notification-3-398649.mp3");
      sound.play();
      renderPagination();
    }
  });
  const next = document.querySelector(".Next");
  next.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < paginations.length) {
      currentPage++;
      const sound = new Audio("dragon-studio-new-notification-3-398649.mp3");
      sound.play();
      renderPagination();
    } else if (currentPage > paginations.length - 1) {
      currentPage = 0;
    }
  });
  document.querySelectorAll(".pagination a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const page = Number(e.target.textContent);
      if (page) {
        currentPage = page;
        const sound = new Audio("dragon-studio-new-notification-3-398649.mp3");
        sound.play();
        renderPagination();
      }
    });
  });
}
renderPagination();
