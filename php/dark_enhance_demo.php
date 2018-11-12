<?php
/**
 * 低光照增强服务示例
 */
require "./ais_sdk/gettoken.php";
require "./ais_sdk/dark_enhance.php";
require "./ais_sdk/utils.php";

$filepath = "./data/dark-enhance-demo.bmp";
$image = fileToBase64($filepath);

/**
 * token 方式请求
 */
$username = "********";      // 配置用户名
$password = "********";      // 密码
$domainName = "*********";   // 配置用户名
$regionName = "********";    // 配置区域信息

$token = gettoken($username, $password, $domainName, $regionName);

$result = dark_enhance($token, $image, 0.9);
print_r($result);
$resultobj = json_decode($result, true);
$basestr = $resultobj["result"];
base64ToFile("data/dark-enhance-demo-token.bmp", $basestr);

/**
 * ak,sk 方式请求
 */
$app_key = "*************";
$app_secret = "*************";

$result = dark_enhance_aksk($app_key, $app_secret, $image, 0.9);
print_r($result);
$resultobj = json_decode($result, true);
$basestr = $resultobj["result"];
base64ToFile("data/dark-enhance-demo-aksk.bmp", $basestr);
