<?php
namespace api;

use api\Module\Array2xml;
use api\Module\Base;
use api\Module\Ihttp;

require_once 'Module/Array2xml.php';
require_once 'Module/Base.php';
require_once 'Module/Ihttp.php';

$appid = 'wx76cd9902f7e09bf3';
$mch_id = '1369601202';
$key = 'F66DD7AA88F23DDAF59B33B99A85E26E';

$data = [
    'appid' => $appid,
    'mch_id' => $mch_id,
    'nonce_str' => Base::generatePassword(16),
    'body' => '测试',
    'out_trade_no' => date("ymdHis") . Base::generatePassword(8, 1),
    'total_fee' => 1,
    'spbill_create_ip' => Base::getIp(),
    'notify_url' => 'http://baidu.com',
    'trade_type' => 'APP',
];
ksort($data);
$string = "";
foreach ($data as $k => $v) {
    if ($v) {
        $string .= $k . "=" . $v . "&";
    }
}
$data['sign'] = strtoupper(md5($string . 'key=' . $key));
$res = Ihttp::ihttp_request("https://api.mch.weixin.qq.com/pay/unifiedorder", Array2xml::a2x($data));
$array = json_decode(Base::xml2json($res['data']), true);
if ($array['return_code'] == 'SUCCESS') {
    $data = [
        'appid' => $array['appid'],
        'partnerid' => $array['mch_id'],
        'prepayid' => $array['prepay_id'],
        'package' => 'Sign=WXPay',
        'noncestr' => Base::generatePassword(16),
        'timestamp' => time(),
    ];
    ksort($data);
    $string = "";
    foreach ($data as $k => $v) {
        if ($v) {
            $string .= $k . "=" . $v . "&";
        }
    }
    $data['sign'] = strtoupper(md5($string . 'key=' . $key));
    echo json_encode($data, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
    exit();
}
echo "error";



