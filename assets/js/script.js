document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle functionality
  const sidebar = document.querySelector(".sidebar");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  const mainContent = document.querySelector(".main-content");

  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("sidebar-active");
  });

  // Navigation functionality
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetPage = this.textContent.toLowerCase();

      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");

      pages.forEach(page => {
        if (page.classList.contains(targetPage)) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    });
  });

  // Project filtering functionality
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const projects = document.querySelectorAll("[data-filter-item]");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const filter = this.textContent.toLowerCase();

      filterBtns.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      projects.forEach(project => {
        if (filter === "all" || project.dataset.category.includes(filter)) {
          project.classList.add("active");
        } else {
          project.classList.remove("active");
        }
      });
    });
  });

  // Filter select box functionality
  const filterSelect = document.querySelector("[data-select]");
  const selectList = document.querySelector(".select-list");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");

  filterSelect.addEventListener("click", function () {
    selectList.classList.toggle("active");
  });

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const value = this.textContent.toLowerCase();

      selectValue.textContent = this.textContent;
      selectList.classList.remove("active");

      filterBtns.forEach(btn => btn.classList.remove("active"));
      filterBtns.forEach(btn => {
        if (btn.textContent.toLowerCase() === value) {
          btn.classList.add("active");
        }
      });

      projects.forEach(project => {
        if (value === "all" || project.dataset.category.includes(value)) {
          project.classList.add("active");
        } else {
          project.classList.remove("active");
        }
      });
    });
  });

  // Close the select dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!filterSelect.contains(event.target) && !selectList.contains(event.target)) {
      selectList.classList.remove("active");
    }
  });
});
