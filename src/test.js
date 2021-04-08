
//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';
import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
//import ThreeGeo from 'https://cdn.jsdelivr.net/npm/three-geo@1.4.4/dist/three-geo.min.js';
			
(async () => {
    window.THREE = await import('https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.min.js');

    const ThreeGeo = (await import('https://cdn.jsdelivr.net/npm/three-geo@1.4.4/dist/three-geo.min.js')).default;

    //

    THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

    const canvas = document.getElementById("canvas");
    const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000);
    camera.position.set(0, 0, 1.5);

    const renderer = new THREE.WebGLRenderer({ canvas });
    const controls = new OrbitControls(camera, renderer.domElement);

    const scene = new THREE.Scene();
    const walls = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(1, 1, 1)),
        new THREE.LineBasicMaterial({color: 0xcccccc}));
    walls.position.set(0, 0, 0);
    scene.add(walls);
    scene.add(new THREE.AxesHelper(1));

    const stats = new Stats();
    stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
    const render = () => {
        stats.update();
        renderer.render(scene, camera);
    };

    controls.addEventListener('change', render);
    render(); // first time

    const tgeo = new ThreeGeo({
        tokenMapbox: 'pk.eyJ1Ijoidmlra3lodWFuZyIsImEiOiJjaXpxZGFwejkwMGh6MnBvYWU4amNmbnlmIn0._kb6jGtKy9mU8jbVmOvrcQ', // <---- set your Mapbox API token here
    });

    if (tgeo.tokenMapbox === 'pk.eyJ1Ijoidmlra3lodWFuZyIsImEiOiJjaXpxZGFwejkwMGh6MnBvYWU4amNmbnlmIn0._kb6jGtKy9mU8jbVmOvrcQ') {
        const warning = 'Please set your Mapbox API token in ThreeGeo constructor.';
        alert(warning);
        throw warning;
    }

    const terrain = await tgeo.getTerrainRgb(
        [46.5763, 7.9904], // [lat, lng]
        5.0,               // radius of bounding circle (km)
        12);               // zoom resolution

    scene.add(terrain);

    render();
})();