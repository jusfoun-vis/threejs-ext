const BlurShaderUtils = {

  createSampleWeights: function ( kernelRadius, stdDev ) {

    var gaussian = function ( x, stdDev ) {

      return Math.exp( - ( x * x ) / ( 2.0 * ( stdDev * stdDev ) ) ) / ( Math.sqrt( 2.0 * Math.PI ) * stdDev );

    };

    var weights = [];

    for ( var i = 0; i <= kernelRadius; i ++ ) {

      weights.push( gaussian( i, stdDev ) );

    }

    return weights;

  },

  createSampleOffsets: function ( kernelRadius, uvIncrement ) {

    var offsets = [];

    for ( var i = 0; i <= kernelRadius; i ++ ) {

      offsets.push( uvIncrement.clone().multiplyScalar( i ) );

    }

    return offsets;

  },

  configure: function ( material, kernelRadius, stdDev, uvIncrement ) {

    material.defines[ 'KERNEL_RADIUS' ] = kernelRadius;
    material.uniforms[ 'sampleUvOffsets' ].value = BlurShaderUtils.createSampleOffsets( kernelRadius, uvIncrement );
    material.uniforms[ 'sampleWeights' ].value = BlurShaderUtils.createSampleWeights( kernelRadius, stdDev );
    material.needsUpdate = true;

  }

};

export default BlurShaderUtils;
