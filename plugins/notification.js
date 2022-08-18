import Notification from "~/components/Notification";

const NotificationPlugin = {};

NotificationPlugin.install = function (Vue, _) {
  let vm = null;

  const Notify = Vue.extend(Notification);
  console.log(Notify);
  Vue.prototype.$notification = {
    show(options) {
      const appEl = document.querySelector(".app");

      const bgColor = {
        error: "#C82642",
        success: "#86C149",
      }[options.type];

      const defStyle = {
        width: "300px",
        height: "100px",
        backgroundColor: bgColor,
        color: "#fff",
        right: "30px",
        bottom: "30px",
      };

      if (!vm) {
        const selector = "#notification";

        if (!document.querySelector(selector)) {
          const el = document.createElement("div");

          el.setAttribute("id", "notification");
          appEl.appendChild(el);
        }

        vm = new Notify({
          data: () => ({
            notices: [],
          }),
        }).$mount(selector);
      }

      vm.$data.notices.push({
        message: options.message,
        style: defStyle,
      });

      setTimeout(() => {
        vm.$data.notices.shift();
        vm.$data.notices.forEach((notice) => {
          notice.style.top = `${
            parseInt(notice.style.top, 10) - notice.style.height
          }px`;
        });
      }, 5000);
    },

    error(options) {
      this.show(Object.assign(options, { type: "error" }));
    },

    success(options) {
      this.show(Object.assign(options, { type: "success" }));
    },

    close(noticeIdx) {
      vm.$data.notices = noticeIdx
        ? vm.$data.notices.filter((_, idx) => idx !== noticeIdx)
        : [];

      const noticesLen = vm.$data.notices.length;

      for (let i = noticeIdx; i < noticesLen; i += 1) {
        const notice = vm.$data.notices[i];
        notice.style.top = `${
          parseInt(notice.style.top, 10) - notice.style.height
        }px`;
      }
    },
  };
};

export default NotificationPlugin;
