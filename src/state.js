let defaultIndex = 0
try {
  if (localStorage.index) {
    defaultIndex = localStorage.index
  }
} catch (e) {}
