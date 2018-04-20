import $ from "jquery";
import { Menu } from "../ui/menu.js";

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.menu = new Menu(this.title);
    this.defaultRoute = null;
    this.routeMap = {};
  }

  addRoute(id, pageObject, defaultRoute = false) {
    this.menu.addLink(id, '');

    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }

  activateRoute(route) {
    let content = this.menu.element.find('.page-content');
    content.empty();

    this.routeMap[route].appendToElement(content);
  }

  start(element) {
    this.menu.appendToElement(element);

    this.menu.element.find('.mdl-navigation__link').click(event => {
      let route = event.target.innerHTML;
      this.activateRoute(route);
    });

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }
}
