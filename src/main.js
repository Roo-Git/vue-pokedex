import { createApp } from "vue";
import App from "./App.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseWrapper from "./components/UI/BaseWrapper.vue";
import BaseButton from "./components/UI/BaseButton.vue";

import "./assets/tailwind.css";

const app = createApp(App);

app.component("BaseBadge", BaseBadge);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("BaseWrapper", BaseWrapper);
app.component("BaseButton", BaseButton);

app.mount("#app");
