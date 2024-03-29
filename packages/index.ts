import { App } from "vue";
import chooseIcon from "./chooseIcon/index";
import chooseArea from "./chooseArea/index";
import trend from "./trend/index";
import menu from "./menu/index";
import progress from "./progress/index";
import chooseTime from "./chooseTime/index";
import chooseDate from "./chooseDate/index";
import chooseCity from "./chooseCity/index";
import form from "./form/index";
import modalForm from "./modalForm/index";
import table from "./table/index";
import calendar from "./calendar/index";
import notification from "./notification/index";
import "./styles/base.scss";
import "./styles/ui.scss";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";

const components = [
  chooseDate,
  chooseArea,
  chooseIcon,
  trend,
  menu,
  progress,
  chooseTime,
  chooseCity,
  form,
  modalForm,
  table,
  calendar,
  notification
];

export default {
  install(app: App) {
    for (const i in Icons) {
      // 注册全局组件
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
    }
    components.map((item) => {
      app.use(item);
    });
  },
};
