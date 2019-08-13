console.log("go");

("use strict");

// /* global THREE */

function main() {
  // you can also render with a canvas included as an element in the html
  // const canvas = document.querySelector("#c");
  // const renderer = new THREE.WebGLRenderer({ canvas });

  // you can also render directly to the dom via js

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const fov = 100; // the angle from the eye to the object (in degrees) (the smaller the number the bigger the cube/closer to the eye)
  const aspect = 2; // the canvas default - size of the display/ratio of the display
  const near = 0.1; // the distance from the front of the camera where the rendering will start
  const far = 5; // the distance from the front of the camera where the rendering will end

  const scene = new THREE.Scene();

  // here's the lighting! this makes each side of the cube a slightly different shade
  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2; // camera position '2' back from the origin so you can take in the whole image.

  // camera --> origin --> near point (start rendering) --> object --> far point (stop rendering)
  // the aspect calculates the width of the object based on the fov degrees from the origin - starts at the origin and goes outwards like a triangle

  // size and dimensions of the object
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // make additional cubes
  function makeInstance(geometry, color, x) {
    // color and material of the object - color hexcode starts with 0x
    // const material = new THREE.MeshBasicMaterial({color: 0xee82ee});
    // the MeshBasicMaterial doesnt work with light so use:
    const material = new THREE.MeshPhongMaterial({ color });

    // puts the size and color together
    const cube = new THREE.Mesh(geometry, material);

    // add the cube to the scene and render the scene and camera
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0x80ff00, -3),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0x00bbff, -1),
    makeInstance(geometry, 0xee82ee, 0),
    makeInstance(geometry, 0x00bbff, 1),
    makeInstance(geometry, 0x80ff00, 2),
    makeInstance(geometry, 0x8844aa, 3)
  ];

  // and here's the animation!!! :-D
  function render(time) {
    time *= 0.001; // convert time to seconds

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    // this is three.js' function that draws the object
    renderer.render(scene, camera);

    //
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
