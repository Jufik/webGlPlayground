define((function() {
  var view = CES.Component.extend({
    name: 'view',
    init: function (scene, camera) {
      this.camera = camera;
      this.camera.rotation.set( 0, 0, 0 );

      this.pitchObject = new THREE.Object3D();
      this.pitchObject.add( camera );

      this.yawObject = new THREE.Object3D();
      this.yawObject.position.y = 10;
      this.yawObject.add( this.pitchObject );

      scene.add(this.yawObject);

      this.PI_2 = Math.PI / 2;
    },
    updateYaw: function(radians) {
      this.yawObject.rotation.y += radians;
    },
    updatePitch: function(radians) {
      this.pitchObject.rotation.x += radians;
      this.pitchObject.rotation.x = Math.max( - this.PI_2, Math.min( this.PI_2, this.pitchObject.rotation.x ) );
    },
    getObject: function() {
      return this.yawObject;
    }
  });

  return function() {
    return view;
  }
})());