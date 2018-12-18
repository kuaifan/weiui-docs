<?php

namespace api\Module;


class Array2xml
{
    var $xml;

    public static function a2x($array) {
        $dom = new Array2xml();
        $dom->array2xml($array);
        return $dom->getXml();
    }

    private function array2xml($array, $encoding = 'utf-8')
    {
        $this->xml = '<?xml version="1.0" encoding="' . $encoding . '"?>';
        $this->xml .= '<xml>';
        $this->xml .= $this->_array2xml($array);
        $this->xml .= '</xml>';
    }

    private function getXml()
    {
        return $this->xml;
    }

    private function _array2xml($array)
    {
        $xml = '';
        foreach ($array as $key => $val) {
            if (is_numeric($key)) {
                $key = "item id=\"$key\"";
            } else {
                //去掉空格，只取空格之前文字为key
                list($key,) = explode(' ', $key);
            }
            $xml .= "<$key>";
            $xml .= is_array($val) ? $this->_array2xml($val) : $val;
            //去掉空格，只取空格之前文字为key
            list($key,) = explode(' ', $key);
            $xml .= "</$key>";
        }
        return $xml;
    }
}
