console.log("Go");

("use strict");

function main() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const fov = 125;
  const aspect = 2;
  const near = 0.1;
  const far = 5;

  const scene = new THREE.Scene();

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 7;

  //   Cube
  //   const boxWidth = 1;
  //   const boxHeight = 1;
  //   const boxDepth = 1;
  //   const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  //   Circle
  //   const radius = 7;
  //   const segments = 24;
  //   const geometry = new THREE.CircleBufferGeometry(radius, segments);

  //   Cone
  //   const radius = 2;
  //   const height = 6;
  //   const segments = 9;
  //   const geometry = new THREE.ConeBufferGeometry(radius, height, segments);

  // 2d heart
  //   const shape = new THREE.Shape();
  //   const x = -2.5;
  //   const y = -5;
  //   shape.moveTo(x + 2.5, y + 2.5);
  //   shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  //   shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  //   shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  //   shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  //   shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  //   shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
  //   const geometry = new THREE.ShapeBufferGeometry(shape);

  //   Torus knot
  const radius = 3.5;
  const tube = 1.5;
  const radialSegments = 8;
  const tubularSegments = 64;
  const p = 2;
  const q = 3;
  const geometry = new THREE.TorusKnotBufferGeometry(
    radius,
    tube,
    tubularSegments,
    radialSegments,
    p,
    q
  );

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    // makeInstance(geometry, 0x00bbff, 0)
    makeInstance(geometry, 0x00bbff, 5)
    //   makeInstance(geometry, 0xee82ee, 2)
  ];

  function render(time) {
    time *= 0.001;

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
