$(function(){
  // get dom elem
  var $width = $('#width'),
      $heigth = $('#heigth'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  /*calc button click event */
  $btnCal.click(function(){
      // get value
      var w = Number($width.val()),
          h = Number($heigth.val());
          
      //calculate
      /*
      var p = 2*(w+h),
          a = w*h;
      */
      var rect = rectangle();

      //output
      $perimeter.val(rect.perimeter(w,h));
      $area.val(rect.area(w,h));
  });
});