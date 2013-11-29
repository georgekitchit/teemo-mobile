"use strict";

window.Teemo = {};

$(function() {
    Teemo.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Teemo,
        
        defaultLayout: "navbar",
        navigation: [
          {
            title: "Activities",
            action: "#activities",
            icon: "home"
          },
          {
            title: "Friends",
            action: "#friends",
            icon: "info"
          }
        ]
    });
    Teemo.app.router.register(":view/:id", { view: "activities", id: undefined });
    Teemo.app.navigate();   
});