# three.js ext

The three.js expansion library with official example modules.   

three.js 扩展，包含 three.js 官方 example 中的部分功能模块。   

All modules are implemented using standard ES6 syntax (Drudgery~😂).   

所有模块均采用标准 ES6 语法实现（苦力活😂）。   

Contact:   

* Molay Chen <molayc@gmail.com> https://github.com/molay
* Jusfoun Vis <vis@jusfoun.com> https://github.com/jusfoun-vis

```javascript
// Recommended usage: Use on demand.
// 推荐用法：按需使用。
import OrbitControls from 'threejs-ext/src/controls/OrbitControls';
// Not recommended usage: It will increase the size.
// 非推荐用法：会造成文件体积变大。
import {OrbitControls} from 'threejs-ext';

const orbitControls = new OrbitControls(object, domElement);
```

## controls 控制器

* DeviceOrientationControls
* DragControls
* EditorControls
* FirstPersonControls
* FlyControls
* OrbitControls
* OrthographicTrackballControls
* PointerLockControls
* TrackballControls
* TransformControls
* VRControls

## exporters 模型导出

* GLTFExporter
* MMDExporter
* OBJExporter
* PLYExporter
* STLBinaryExporter
* STLExporter
* TypedGeometryExporter

## loaders 模型解析

* ThreeMFLoader
* AMFLoader
* AssimpJSONLoader
* AssimpLoader
* AWDLoader
* BabylonLoader
* BinaryLoader
* BVHLoader
* ColladaLoader
* DDSLoader
* DRACOLoader
* EquiangularToCubeGenerator
* EXRLoader
* FBXLoader
* GCodeLoader
* GLTFLoader
* HDRCubeTextureLoader
* KMZLoader
* KTXLoader
* LoaderSupport
* MD2Loader
* MMDLoader
* MTLLoader
* NodeMaterialLoader
* NRRDLoader
* OBJLoader
* OBJLoader2
* PCDLoader
* PDBLoader
* PlayCanvasLoader
* PLYLoader
* PRWMLoader
* PVRLoader
* RGBELoader
* STLLoader
* SVGLoader
* TDSLoader
* TGALoader
* TTFLoader
* VRMLLoader
* VRMLoader
* UTF8Loader
* VTKLoader
* XLoader

## postprocessing 后期处理

* AdaptiveToneMappingPass
* BloomPass
* BokehPass
* ClearMaskPass
* ClearPass
* CubeTexturePass
* DotScreenPass
* EffectComposer
* FilmPass
* GlitchPass
* HalftonePass
* MaskPass
* OutlinePass
* Pass
* RenderPass
* SAOPass
* SavePass
* ShaderPass
* SMAAPass
* SSAARenderPass
* SSAOPass
* TAARenderPass
* TexturePass
* UnrealBloomPass

## shaders 着色器

* BasicShader
* BleachBypassShader
* BlendShader
* BlurShaderUtils
* BokehShader
* BokehShader2
* BrightnessContrastShader
* ColorCorrectionShader
* ColorifyShader
* ConvolutionShader
* CopyShader
* DepthLimitedBlurShader
* DigitalGlitch
* DOFMipMapShader
* DotScreenShader
* FilmShader
* FocusShader
* FreiChenShader
* FresnelShader
* FXAAShader
* GammaCorrectionShader
* HalftoneShader
* HorizontalBlurShader
* HorizontalTiltShiftShader
* HueSaturationShader
* KaleidoShader
* LuminosityHighPassShader
* LuminosityShader
* MirrorShader
* NormalMapShader
* <span style="color: #FF0000;">OceanShaders</span> <b>NOT YET STANDARDIZED</b>.
* ParallaxShader
* PixelShader
* RGBShiftShader
* SAOShader
* SepiaShader
* SMAAShader
* SobelOperatorShader
* SSAOShader
* TechnicolorShader
* ToneMapShader
* TriangleBlurShader
* UnpackDepthRGBAShader
* VerticalBlurShader
* VerticalTiltShiftShader
* VignetteShader
* WaterRefractionShader

## uncategories 未归类

* Volume

