//resize the background image
function resizeImage($selection,$container){
  var imageRatio = $selection.width() / $selection.height(); //get the image ratio w/h
  /*console.log("image ratio: " + imageRatio);*/
  
  var containerRatio = $container.width() / $container.height(); //get the 
  /*console.log("container ratio: " + containerRatio);*/
  
  if(imageRatio > containerRatio){
  	$selection.height($container.height());
  	$selection.width($container.height()*imageRatio);
  }
  else{
  	$selection.width($container.width());
  	$selection.height($container.width()/imageRatio);
  }
}
