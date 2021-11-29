const tabItems = document.querySelectorAll('.tab-item'); //button only (x3)
const tabContentItems = document.querySelectorAll('.tab-content-item');  //actual tab content (x3)
// these are like arrays, so later we can use methods on them (forEach - to remove ALL)

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));