var porgressbar = (function() {
  // 变量提取方便压缩
  var log, css, porgressbarFun;
  /*
   *定义工具函数
   */
  //打印函数
  log = function(str) {
      console.log(str);
    }
    // css函数
  css = function(target, json) {
      var attr;
      for (attr in json) {
        target.style[attr] = json[attr];
      }
    }
    // 函数主体
  porgressbarFun = function(mconfig) {
    var defaultconfig = {
      height: "4px",
      background: "rgb(18, 134, 134)"
    }
    var config = mconfig || defaultconfig;
    this.render(config)
  };
  porgressbarFun.prototype = {
    render: function(config) {
      var body = document.getElementsByTagName("body")[0];
      var parent = document.createElement("div");
      parent.id = "porgress-container";
      body.appendChild(parent);
      css(parent, config);
      css(parent, {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": 0
      });
      this.addevent();
    },
    scroll: function() {
      var orginBody = document.body;
      var bodyHeight = orginBody.scrollHeight; //页面高度
      var scrollTop = orginBody.scrollTop; //可视区域距顶部高度
      var clientHeight = document.documentElement.clientHeight; //可视化区域高度(屏幕高度)
      var distance = 0;
      if (clientHeight + 200 <= bodyHeight) {
        distance = 100 - (bodyHeight - scrollTop) / bodyHeight * 100;
        if (bodyHeight <= scrollTop + clientHeight + 20) {
          distance = 100;
        }
      } else {
        distance = scrollTop < clientHeight ? 100 - (bodyHeight - scrollTop) / bodyHeight * 100 : 100 - (bodyHeight - scrollTop - clientHeight) / bodyHeight * 100;
      }
      var parent = document.getElementById("porgress-container");
      console.log(distance.toFixed(2));
      css(parent, {
        "width": distance.toFixed(2) + "%"
      });
    },
    addevent: function() {
      var _this = this;
      window.onscroll = function() {
        _this.scroll();
      }
    }
  }

  return porgressbarFun;
})()
