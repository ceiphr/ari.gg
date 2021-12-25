// post processing
export const firstPassFs = `
  precision mediump float;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;
  uniform sampler2D displacementTexture;

  uniform float uDisplacement;

  void main( void ) {
    vec2 textureCoords = vTextureCoord;
    vec4 displacement = texture2D(displacementTexture, textureCoords);

    // displace along Y axis
    textureCoords.y += (sin(displacement.r) / 5.0) * uDisplacement;
    
    gl_FragColor = texture2D(uRenderTexture, textureCoords);
  }
`;

export const secondPassFs = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;

  uniform float uScrollEffect;

  void main() {
    vec2 textureCoords = vTextureCoord;
    vec2 texCenter = vec2(0.5, 0.5);

    // distort around scene center
    textureCoords += vec2(texCenter - textureCoords).xy * sin(distance(texCenter, textureCoords)) * uScrollEffect / 175.0;

    gl_FragColor = texture2D(uRenderTexture, textureCoords);
  }
`;

export const vertexShader = `
  precision mediump float;
  // default mandatory variables
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  // our texture matrix uniform
  uniform mat4 simplePlaneTextureMatrix;
  // custom variables
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMousePosition;
  uniform float uMouseMoveStrength;
  void main() {
    vec3 vertexPosition = aVertexPosition;
    // get the distance between our vertex and the mouse position
    float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));
    // calculate our wave effect
    float waveSinusoid = cos(5.0 * (distanceFromMouse - (uTime / 75.0)));
    // attenuate the effect based on mouse distance
    float distanceStrength = (0.4 / (distanceFromMouse + 0.4));
    // calculate our distortion effect
    float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength;
    // apply it to our vertex position
    vertexPosition.z +=  distortionEffect / 30.0;
    vertexPosition.x +=  (distortionEffect / 30.0 * (uResolution.x / uResolution.y) * (uMousePosition.x - vertexPosition.x));
    vertexPosition.y +=  distortionEffect / 30.0 * (uMousePosition.y - vertexPosition.y);
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    // varyings
    vTextureCoord = (simplePlaneTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vVertexPosition = vertexPosition;
  }
`;

export const fragmentShader = `
  precision mediump float;
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  uniform sampler2D simplePlaneTexture;
  void main() {
    // apply our texture
    vec4 finalColor = texture2D(simplePlaneTexture, vTextureCoord);
    // fake shadows based on vertex position along Z axis
    finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
    // fake lights based on vertex position along Z axis
    finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);
    // handling premultiplied alpha (useful if we were using a png with transparency)
    finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
    gl_FragColor = finalColor;
  }
`;
