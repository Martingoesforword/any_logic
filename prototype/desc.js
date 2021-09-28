const any_logic = require("any_logic");
//vurl功能调用

//example:
//构建一个app
/*
实现图像识别
传入图像png文件
获取识别到的所有信息集合数组
展示在列表里面
 */
var new_app = any_logic.createApp();

new_app.runWith({
    "os": "windows10",
    "os_dependences": {
        //依赖的具体windows10版本信息
    },
    "vm": "jvm",
    "while1": function () {
        //app具体执行内容
        var pngFilePath = "";
        var logic_png = any_logic.request("com.png.file.getPngFromOs").get(pngFilePath);
        var ai_infoes = any_logic.request("com.ai.see.png.getAllThingsInfo").get(logic_png);
        var ui_client = any_logic.request("com.windows.ui.window.createNewWindow").get();
        var ui_list = any_logic.request("com.windows.ui.window.list.createNewListFromAnyData").get(ai_infoes);
        ui_client.contains(ui_list);
        any_logic.request("com.ui.layout.beautify").get(ui_client);
        ui_client.show();
    }
})

