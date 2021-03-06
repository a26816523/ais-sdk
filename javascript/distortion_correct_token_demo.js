/**
 * 扭曲校正服务token 方式请求的使用示例
 */
var discor = require("./ais_sdk/distortion_correct");
var token = require("./ais_sdk/gettoken");
var utils = require("./ais_sdk/utils");

var username = "*******";        // 配置用户名
var domain_name = "*******";     // 配置用户名
var password = "*******";        // 密码
var region_name = "cn-north-1";  // 配置区域信息

var filepath = "./data/modeation_distortion.jpg";
var data = utils.changeFileToBase64(filepath);

demo_data_url = "https://ais-sample-data.obs.cn-north-1.myhwclouds.com/vat-invoice.jpg";

token.getToken(username, domain_name, password, region_name, function (token) {

    discor.distortion_correct(token, data, "", true, function (result) {
        var resultObj = JSON.parse(result);

        if (resultObj.result.data !== "") {
            utils.getFileByBase64Str("./data/modeation_distortion-token-1.jpg", resultObj.result.data);
        }else{
            console.log(result);
        }
    });

    discor.distortion_correct(token, "", demo_data_url, true, function (result) {
        var resultObj = JSON.parse(result);

        if (resultObj.result.data !== "") {
            utils.getFileByBase64Str("./data/modeation_distortion-token-2.jpg", resultObj.result.data);
        }else{
            console.log(result);
        }
    });
});