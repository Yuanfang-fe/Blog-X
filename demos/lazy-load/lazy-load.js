  // 使用 IntersectionObserver 实现
  class LazyLoad {
    constructor(images, options) {
      this.setting = Object.assign(
        {},
        { src: "data-src", srcset: "data-srcset" },
        options
      );
      this.images = images;
      this.observer = null;
      this.init();
    }

    init() {
      const config = {
        root: null,
        rootMargin: "0px",
        threshold: [0]
      };
      this.observer = this.intersectionObserver(config);
      this.images.forEach(image => this.observer.observe(image))
    }

    setImgsrc(target) {
      const src = target.getAttribute(this.setting.src);
      const srcset = target.getAttribute(this.setting.srcset);
      // 判断是否为img节点
      if ("img" === target.tagName.toLowerCase()) {
        if (src) {
          target.src = src;
        }
        if (srcset) {
          target.srcset = srcset;
        }
      } else {
        target.style.backgroundImage = `url(${src})`;
      }
    }

    intersectionObserver(config) {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          // 到元素出现在视图中
          if (entry.intersectionRatio > 0) {
            this.observer.unobserve(target);
            // 设置img真实src路径
            this.setImgsrc(target);
          }
        });
      }, config);
    }
  }
