<?php
/**
 * Created by PhpStorm.
 * User: lukejohnstone
 * Date: 2016/08/17
 * Time: 10:36
 * ignore me
 */

$json = json_decode(file_get_contents('searchResults.json'), true);

$newJson = [];

foreach ($json as $value) {
    $newJson[] = [
        "value" => $value['value'],
        "display" => $value['display']
    ];
}

file_put_contents('newJson.json', json_encode($newJson));