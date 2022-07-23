import { createStore, action } from "easy-peasy";

const project = {};

const store = createStore({
  dialogs: [
    { id: 1, name: "About Me", open: false },
    { id: 2, name: "Contact", open: false },
  ],
  pages: {
    homePage: {
      title1: "",
      title2: "",
      title3: "",
      link1: "",
      link2: "",
    },
    aboutPage: {
      title1: "Hello",
      title2: "",
      text1: "",
    },
    contactPage: {
      title1: "",
      title2: "",
      text1: "",
      email: "",
      phone: "",
    },
  },
  site: {
    siteName: "",
    siteUrl: "",
    category: "",
    status: "",
    previewUrl: "",
  },
  setDialog: action((state, payload) => {
    state.dialogs.forEach((dialog) => {
      if (dialog.id === payload.id) {
        dialog.open = payload.open;
      }
    });
  }),
  setSite: action((state, payload) => {
    state.site = payload;
  }),
  setPages: action((state, payload) => {
    state.pages = payload;
  }),
  setHomePage: action((state, payload) => {
    switch (payload.type) {
      case "title1":
        state.pages.homePage.title1 = payload.value;
        break;
      case "title2":
        state.pages.homePage.title2 = payload.value;
        break;
      case "title3":
        state.pages.homePage.title3 = payload.value;
        break;
      case "link1":
        state.pages.homePage.link1 = payload.value;
        break;
      case "link2":
        state.pages.homePage.link2 = payload.value;
        break;
      default:
        break;
    }
  }),
  setAboutPage: action((state, payload) => {
    switch (payload.type) {
      case "title1":
        state.pages.aboutPage.title1 = payload.value;
        break;
      case "title2":
        state.pages.aboutPage.title2 = payload.value;
        break;
      case "text1":
        state.pages.aboutPage.text1 = payload.value;
        break;
      default:
        break;
    }
  }),
  setContactPage: action((state, payload) => {
    switch (payload.type) {
      case "title1":
        state.pages.contactPage.title1 = payload.value;
        break;
      case "title2":
        state.pages.contactPage.title2 = payload.value;
        break;
      case "text1":
        state.pages.contactPage.text1 = payload.value;
        break;
      case "email":
        state.pages.contactPage.email = payload.value;
        break;
      case "phone":
        state.pages.contactPage.phone = payload.value;
        break;
      default:
        break;
    }
  }),
  project,
  setProject: action((state, payload) => {
    state.project = payload;
  }),
});

export default store;
