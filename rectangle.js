/* global $: true */
$(function(){
    var $width = $('#width'),
        $heigth = $('#heigth'),
        $btn = $('#calculate'),
        $per = $('#perimeter'),
        $area = $('#area');
    function decimalSave(num, n){
        return Math.round(num*Math.pow(10, n))/Math.pow(10,n);
    }
    $btn.click(function(){
        var w = Number($width.val());
        var h = Number($heigth.val());
        var p = 2*(w+h);
        var a = w*h;
        p = decimalSave(p, 2);
        a = decimalSave(a, 2);
        $per.val(p);
        $area.val(a);
    });
});
