const items = document.querySelectorAll("#toc a");

const removeActiveClass = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let currentItem = document.querySelector(
        `#toc a[href='#${entry.target.id}']`
      );
      removeActiveClass();
      currentItem.classList.add("active");
    }
  });
};

const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll(".toc");

sections.forEach((section) => {
  observer.observe(section);
});


// 实现跳转偏移

function scrollToWithOffset(targetId, offset) {
  // 获取目标元素
  const targetElement = document.getElementById(targetId);

  // 如果元素存在
  if (targetElement) {
    // 计算元素顶部位置加上偏移量
    const targetPosition = targetElement.offsetTop - offset;

    // 滚动到指定位置
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // 可选参数，用于平滑滚动
    });
  }
}
