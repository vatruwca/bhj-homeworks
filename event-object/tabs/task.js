const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

function tabClicks(event) {
	tabs.forEach(item => item.classList.remove('tab_active'));
  tabsContent.forEach(item => item.classList.remove('tab__content_active'));
  event.currentTarget.classList.add('tab_active');
  let tabIdx = tabs.indexOf(event.currentTarget);
  tabsContent[tabIdx].classList.add('tab__content_active');
};

tabs.forEach(item => {
  item.addEventListener('click', tabClicks);
});








