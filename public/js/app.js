requirejs(['js/world'],
  function(world) {
  var bodyElement = document.body
      , $container = $('#container')
      , $instructions = $('#instructions')

  var pointerlockchange = function(event) {
    if(document.pointerLockElement === bodyElement) {
      // entering pointer lock
      world.enable();
      $container.hide();
    } else {
      // leaving pointer lock
      world.disable();
      $container.show();
    }
  };

  var pointerlockerror = function(event) {
    $container.show();
  };

  document.addEventListener('pointerlockchange', pointerlockchange, false);
  document.addEventListener('pointerlockerror', pointerlockerror, false);

  $instructions.click(function(event) {
    document.body.requestPointerLock();
  });

  world.setup();

  var lastTime = Date.now();
  var render = function () {
    requestAnimationFrame(render);

    world.update(Date.now() - lastTime);

    lastTime = Date.now();
  };

  render();
});