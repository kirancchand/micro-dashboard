import React from 'react';
import * as THREE from 'three';
import '../style.css'
import * as dat from 'dat.gui';
import TestA from './TestA';
export default function LandingHome(){
//scene    
const scene = new THREE.Scene();
const gui=new dat.GUI()
//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//object
const geometry = new THREE.SphereGeometry( .5, 64, 64 );
// const geometry = new THREE.TorusGeometry( .7, .2, 16,100 );


const textureLoader=new THREE.TextureLoader();
const normalTexture=textureLoader.load('../../images/textures/NormalMap.png')

//material
const material = new THREE.MeshStandardMaterial();
material.roughness=0.2
material.metalness=0.7
material.color=new THREE.Color(0x00ff00)
material.normalMap=normalTexture;
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );


//mesh
const sphere = new THREE.Mesh(geometry,material);
scene.add(sphere)
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );



const pointLight = new THREE.PointLight(0xffffff,0.1)
pointLight.position.x=2;
pointLight.position.y=3;
pointLight.position.z=4;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xff0000,0.1)
pointLight2.position.set(-1.86,1,-1.65);
pointLight2.intensity=1;
scene.add(pointLight2);
const light1=gui.addFolder('Light 1')
light1.add(pointLight2.position,'y').min(-3).max(3).step(0.01);
light1.add(pointLight2.position,'x').min(-6).max(6).step(0.01);
light1.add(pointLight2.position,'z').min(-3).max(3).step(0.01);
light1.add(pointLight2,'intensity').min(0).max(10).step(0.01);
// gui.add(pointLight2,'intensity').min(0).max(10).step(0.01);

const pointLightHelper=new THREE.PointLightHelper(pointLight2,1)
scene.add(pointLightHelper)

const pointLight3 = new THREE.PointLight(0xe1ff,0.1)
pointLight3.position.set(.69,-3,-1.98);
pointLight3.intensity=6.8;
scene.add(pointLight3);
const light2=gui.addFolder('Light 2')
light2.add(pointLight3.position,'y').min(-3).max(3).step(0.01);
light2.add(pointLight3.position,'x').min(-6).max(6).step(0.01);
light2.add(pointLight3.position,'z').min(-3).max(3).step(0.01);
light2.add(pointLight3,'intensity').min(0).max(10).step(0.01);
const pointLightHelper3=new THREE.PointLightHelper(pointLight3,1)
scene.add(pointLightHelper3)


const light2Color={
    color:0xff0000
}
light2.addColor(light2Color,'color').onChange(()=>{
    pointLight3.color.set(light2Color.color)
})


const clock=new THREE.Clock()

function animate() {

    const elapsedTime=clock.getElapsedTime()
    sphere.rotation.y = .5 * elapsedTime;
	requestAnimationFrame( animate );

	// sphere.rotation.x += 0.01;
	// sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

    return <>
            {animate()}
            {/* <TestA/> */}
    </>

}