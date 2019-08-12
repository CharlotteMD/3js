'use strict';

// /* global THREE */

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 75; // the angle from the eye to the object (in degrees) 
    const aspect = 2;  // the canvas default - size of the display/ratio of the display
    const near = 0.1; // the distance from the front of the camera where the rendering will start
    const far = 5; // the distance from the front of the camera where the rendering will end
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2; // camera position '2' back from the origin so you can take in the whole image.

    // camera --> origin --> near point (start rendering) --> object --> far point (stop rendering)
    // the aspect calculates the width of the object based on the fov degrees from the origin - starts at the origin and goes outwards like a triangle

    const scene = new THREE.Scene();

    // size and dimensions of the object
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // color and material of the object
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

    // puts the size and color together
    const cube = new THREE.Mesh(geometry, material);

    // add the cube to the scene and render the scene and camera
    scene.add(cube);

    renderer.render(scene, camera);

};

main();