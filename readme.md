# tiny-progress(网页顶部进度条)

最近看阮一峰的[技术博客](http://es6.ruanyifeng.com/)看到的一个插件，自己实现了一波。第一个小轮子，轻喷。

## Preview(预览)
http://output.jsbin.com/lokiro
## usage（使用）
```javascript
<script src="tiny-progress.js"></script>
```

```javascript
  new porgressbar();
```

## Config（配置）

```Javascript
var defaultconfig = {
  height: "4px", //进度条高度
  background: "rgb(18, 134, 134)" //进度条颜色
}
new porgressbar(defaultconfig);
```
