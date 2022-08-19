import Notification from "~/components/Notification";

const NotificationPlugin = {};

NotificationPlugin.install = function (Vue, _) {
  let vm = null;

  const Notify = Vue.extend(Notification);

  Vue.prototype.$notification = {
    show(options) {
      const appEl = document.querySelector(".app");

      if (!vm) {
        const selector = "#notification-group";

        if (!document.querySelector(selector)) {
          const el = document.createElement("div");

          el.setAttribute("id", "notification-group");
          appEl.appendChild(el);
        }

        vm = new Notify({
          data: () => ({
            notices: [],
          }),
        }).$mount(selector);
      }

      vm.$data.notices.push({
        id: Date.now(),
        message: options.message,
        class: this.getClass(options),
      });

      setTimeout(() => {
        vm.$data.notices.shift();
      }, 2000);
    },

    getClass({ type }) {
      return {
        error: "notification__inner--error",
        success: "notification__inner--success",
      }[type];
    },

    // error(options) {
    //   this.show(Object.assign(options, { type: "error" }));
    // },

    success(options) {
      this.show(Object.assign(options, { type: "success" }));
    },

    close(noticeId) {
      vm.$data.notices = noticeId
        ? vm.$data.notices.filter((notice, _) => notice.id !== noticeId)
        : [];
    },
  };
};

export default NotificationPlugin;
