console.log('go');

'use strict';

// /* global THREE */

function main() {
    // you can also render with a canvas included as an element in the html
    // const canvas = document.querySelector('#c');
    // const renderer = new THREE.WebGLRenderer({canvas});

    // you can also render directly to the dom via js

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var scene = new THREE.Scene();

    const fov = 75; // the angle from the eye to the object (in degrees) 
    const aspect = 2;  // the canvas default - size of the display/ratio of the display
    const near = 0.1; // the distance from the front of the camera where the rendering will start
    const far = 5; // the distance from the front of the camera where the rendering will end

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2; // camera position '2' back from the origin so you can take in the whole image.

    // camera --> origin --> near point (start rendering) --> object --> far point (stop rendering)
    // the aspect calculates the width of the object based on the fov degrees from the origin - starts at the origin and goes outwards like a triangle

    // size and dimensions of the object
    const boxWidth = 2;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // color and material of the object - color hexcode starts with 0x
    const material = new THREE.MeshBasicMaterial({color: 0xee82ee});

    // puts the size and color together
    const cube = new THREE.Mesh(geometry, material);

    // add the cube to the scene and render the scene and camera
    scene.add(cube);

    // when you add animation this moves to the animation
    // renderer.render(scene, camera);

    // and here's the animation!!! :-D
    function render(time) {
        time *= 0.001;  // convert time to seconds
       
        cube.rotation.x = time;
        cube.rotation.y = time;
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);

};



main();