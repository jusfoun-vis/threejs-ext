import * as THREE from 'three';
import Pass from './Pass';
import HalftoneShader from '../shaders/HalftoneShader';

/**
 * @author meatbags / xavierburrow.com, github/meatbags
 *
 * RGB Halftone pass for three.js effects composer. Requires THREE.HalftoneShader.
 *
 */

const HalftonePass = function ( width, height, params ) {

	Pass.call( this );

 	if ( HalftoneShader === undefined ) {

 		console.error( 'THREE.HalftonePass requires THREE.HalftoneShader' );

 	}

 	this.uniforms = THREE.UniformsUtils.clone( HalftoneShader.uniforms );
 	this.material = new THREE.ShaderMaterial( {
 		uniforms: this.uniforms,
 		fragmentShader: HalftoneShader.fragmentShader,
 		vertexShader: HalftoneShader.vertexShader
 	} );

	// set params
	this.uniforms.width.value = width;
	this.uniforms.height.value = height;

	for ( var key in params ) {

		if ( params.hasOwnProperty( key ) && this.uniforms.hasOwnProperty( key ) ) {

			this.uniforms[key].value = params[key];

		}

	}

 	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
 	this.scene = new THREE.Scene();
 	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
 	this.quad.frustumCulled = false;
 	this.scene.add( this.quad );

 };

 HalftonePass.prototype = Object.assign( Object.create( Pass.prototype ), {

	constructor: HalftonePass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

 		this.material.uniforms[ "tDiffuse" ].value = readBuffer.texture;
 		this.quad.material = this.material;

 		if ( this.renderToScreen ) {

 			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

 	},

 	setSize: function ( width, height ) {

 		this.uniforms.width.value = width;
 		this.uniforms.height.value = height;

 	}
} );

export default HalftonePass;
