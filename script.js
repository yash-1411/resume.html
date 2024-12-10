function navigate(event, page) {
    event.preventDefault();
    alert(`Navigating to ${page} page`);
    window.location.href = `${page}.html`;
  }
  