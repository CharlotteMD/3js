console.log("Go");

function main() {
  // size and pov

  const aspect = window.innerWidth / window.innerHeight;

  // set up

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  // CUBE
  // cube set up - size and distance
  const cubeNear = 0.1;
  const cubeFar = 5;
  const cubeFov = 125;

  // cube camera
  const cubeCamera = new THREE.PerspectiveCamera(
    cubeFov,
    aspect,
    cubeNear,
    cubeFar
  );
  // set up how far the camera will be from object
  cubeCamera.position.z = 5;

  // draw object frame
  const cubeWidth = 1;
  const cubeHeight = 1;
  const cubeDepth = 1;
  const cubeGeometry = new THREE.BoxGeometry(cubeWidth, cubeHeight, cubeDepth);

  // fill object
  const cubeMaterial = new THREE.MeshNormalMaterial();

  // put the dimensions and fill together to create the object
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.y = 0;
  cube.position.x = 3;

  // append object to scene
  scene.add(cube);

  function cubeRender() {
    requestAnimationFrame(cubeRender);
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    renderer.render(scene, cubeCamera);
  }

  cubeRender();

  // CIRCLE

  const circleNear = 0.1;
  const circleFar = 4;
  const circleFov = 150;

  const circleCamera = new THREE.PerspectiveCamera(
    circleFov,
    aspect,
    circleNear,
    circleFar
  );

  circleCamera.position.z = 2;

  var circleGeometry = new THREE.IcosahedronGeometry();
  var circleMaterial = new THREE.MeshNormalMaterial();
  var circle = new THREE.Mesh(circleGeometry, circleMaterial);

  circle.position.y = -2;
  scene.add(circle);

  function circleRender() {
    requestAnimationFrame(circleRender);
    circle.rotation.x += 0.05;
    circle.rotation.y += 0.05;
    renderer.render(scene, circleCamera);
  }

  circleRender();

  // Cone

  const coneNear = 0.1;
  const coneFar = 4;
  const coneFov = 150;

  const coneCamera = new THREE.PerspectiveCamera(
    coneFov,
    aspect,
    coneNear,
    coneFar
  );

  coneCamera.position.z = 2;

  var coneGeometry = new THREE.ConeGeometry(3, 3, 8);
  var coneMaterial = new THREE.MeshNormalMaterial();
  var cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.x = -2;
  cone.position.y = 2;
  scene.add(cone);

  function coneRender() {
    requestAnimationFrame(coneRender);
    cone.rotation.x += 0.05;
    cone.rotation.y += 0.05;
    renderer.render(scene, coneCamera);
  }

  coneRender();
}

main();
