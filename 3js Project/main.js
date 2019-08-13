console.log("Go");

function main() {
  // size and pov
  const fov = 125;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 5;

  // set up
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // draw object frame
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // fill object
  const material = new THREE.MeshNormalMaterial();

  // put the dimensions and fill together to create the object
  const object = new THREE.Mesh(geometry, material);

  // append objetct to scene
  scene.add(object);

  // set up how far the camera will be from object
  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);
    object.rotation.x += 0.05;
    object.rotation.y += 0.05;
    renderer.render(scene, camera);
  }

  render();
}

main();
