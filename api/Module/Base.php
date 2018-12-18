<?php

namespace api\Module;

class Base
{

    /**
     * 随机字符串
     * @param int $length 随机字符长度
     * @param string $type
     * @return string 1数字、2大小写字母、21小写字母、22大写字母、默认全部;
     */
    public static function generatePassword($length = 8, $type = '')
    {
        // 密码字符集，可任意添加你需要的字符
        switch ($type) {
            case '1':
                $chars = '0123456789';
                break;
            case '2':
                $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case '21':
                $chars = 'abcdefghijklmnopqrstuvwxyz';
                break;
            case '22':
                $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            default:
                $chars = $type ? $type : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                break;
        }
        $passwordstr = '';
        $max = strlen($chars) - 1;
        for ($i = 0; $i < $length; $i++) {
            $passwordstr .= $chars[mt_rand(0, $max)];
        }
        return $passwordstr;
    }

    /**
     * 获取IP地址
     * @return string
     */
    public static function getIp()
    {
        if (getenv('HTTP_CLIENT_IP') and strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
            $onlineip = getenv('HTTP_CLIENT_IP');
        } elseif (getenv('HTTP_X_FORWARDED_FOR') and strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
            $onlineip = getenv('HTTP_X_FORWARDED_FOR');
        } elseif (getenv('REMOTE_ADDR') and strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
            $onlineip = getenv('REMOTE_ADDR');
        } elseif (isset($_SERVER['REMOTE_ADDR']) and $_SERVER['REMOTE_ADDR'] and strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
            $onlineip = $_SERVER['REMOTE_ADDR'];
        } else {
            $onlineip = '0,0,0,0';
        }
        preg_match("/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/", $onlineip, $match);
        return $match[0] ? $match[0] : 'unknown';
    }

    /**
     * 判断字符串存在(包含)
     * @param string $string
     * @param string $find
     * @return bool
     */
    public static function strExists($string, $find)
    {
        if (!is_string($string) || !is_string($find)) {
            return false;
        }
        return !(strpos($string, $find) === FALSE);
    }

    /**
     * 判断字符串开头包含
     * @param string $string //原字符串
     * @param string $find //判断字符串
     * @param bool|false $lower //是否不区分大小写
     * @return int
     */
    public static function leftExists($string, $find, $lower = false)
    {
        if (!is_string($string) || !is_string($find)) {
            return false;
        }
        if ($lower) {
            $string = strtolower($string);
            $find = strtolower($find);
        }
        return (substr($string, 0, strlen($find)) == $find);
    }

    /**
     * 判断字符串结尾包含
     * @param string $string //原字符串
     * @param string $find //判断字符串
     * @param bool|false $lower //是否不区分大小写
     * @return int
     */
    public static function rightExists($string, $find, $lower = false)
    {
        if (!is_string($string) || !is_string($find)) {
            return false;
        }
        if ($lower) {
            $string = strtolower($string);
            $find = strtolower($find);
        }
        return (substr($string, strlen($find) * -1) == $find);
    }

    /**
     * 删除开头指定字符串
     * @param $string
     * @param $find
     * @param bool $lower
     * @return string
     */
    public static function leftDelete($string, $find, $lower = false)
    {
        if (Base::leftExists($string, $find, $lower)) {
            $string = substr($string, strlen($find));
        }
        return $string ? $string : '';
    }

    /**
     * 删除结尾指定字符串
     * @param $string
     * @param $find
     * @param bool $lower
     * @return string
     */
    public static function rightDelete($string, $find, $lower = false)
    {
        if (Base::rightExists($string, $find, $lower)) {
            $string = substr($string, 0, strlen($find) * -1);
        }
        return $string;
    }

    /**
     * 截取指定字符串
     * @param $str
     * @param string $ta
     * @param string $tb
     * @return string
     */
    public static function getMiddle($str, $ta = '', $tb = ''){
        if ($ta && strpos($str, $ta) !== false){
            $str = substr($str, strpos($str, $ta) + strlen($ta));
        }
        if ($tb && strpos($str, $tb) !== false){
            $str = substr($str, 0, strpos($str, $tb));
        }
        return $str;
    }

    /**
     * 数组返回 正确
     * @param $msg
     * @param array $data
     * @param int $ret
     * @return array
     */
    public static function retSuccess($msg, $data = [], $ret = 1)
    {
        $param = array(
            'ret' => $ret,
            'msg' => $msg,
            'data' => $data
        );
        return $param;
    }

    /**
     * 数组返回 错误
     * @param $msg
     * @param array $data
     * @param int $ret
     * @return array
     */
    public static function retError($msg, $data = [], $ret = 0)
    {
        $param = array(
            'ret' => $ret,
            'msg' => $msg,
            'data' => $data
        );
        return $param;
    }

    /**
     * xml转json
     * @param string $source 传的是文件，还是xml的string的判断
     * @return string
     */
    public static function xml2json($source)
    {
        if (is_file($source)) {
            $xml_array = @simplexml_load_file($source);
        } else {
            $xml_array = @simplexml_load_string($source, NULL, LIBXML_NOCDATA);
        }
        $json = json_encode($xml_array);
        return $json;
    }

}
