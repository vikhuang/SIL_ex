
//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';
import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
//import ThreeGeo from 'https://cdn.jsdelivr.net/npm/three-geo@1.4.4/dist/three-geo.min.js';
			
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff, 1.0);
document.body.appendChild( renderer.domElement );


//----------------------------------------

const texture = new THREE.TextureLoader().load( 'textures/Taiwan trait.png' );

const geometry = new THREE.BoxGeometry( 60, 100, 0 );
const material = new THREE.MeshBasicMaterial( { map : texture } );
const cube = new THREE.Mesh( geometry, material ) ;
scene.add( cube );


// ----------------------------------------

//const curve = new THREE.CubicBezierCurve3(
//	new THREE.Vector3( -10, 0, 0 ),
//	new THREE.Vector3( -5, 15, 0 ),
//	new THREE.Vector3( 20, 15, 0 ),
//	new THREE.Vector3( 10, 0, 0 )
//);

//const points = curve.getPoints( 50 );
//const geometry_a = new THREE.BufferGeometry().setFromPoints( points );

// const material_a = new THREE.LineBasicMaterial( { color : 0x000000 } );

// Create the final object to add to the scene
// const curveObject = new THREE.Line( geometry_a, material_a );
//scene.add(curveObject);



// ----------------------------------------

const controls = new OrbitControls( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();
camera.position.z = 10;

const animate = function () {
    requestAnimationFrame( animate );

    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    cube.rotation.z += 0.01;
    controls.update()

    renderer.render( scene, camera );
};

animate();
