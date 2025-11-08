uniform float uTime;
uniform sampler2D uPerlinTexture;

attribute float aProgress;
attribute float aSize;
attribute float aAlpha;
attribute float aIndex;

varying float vAlpha;
varying float vAIndex;

void main() {
    vec3 newPosition = position;

    // 비처럼 빠르게 떨어지는 속도
    float fallSpeed = mix(8.0, 10.0, aIndex); // aIndex별로 속도 다양화
    float resetHeight = 10.0;

    // 일정 범위에서 루프되며 떨어짐
    float y = mod(newPosition.y - uTime * fallSpeed, resetHeight);
    newPosition.y = y;

    // 바람: 살짝만 흔들리게
    float windStrength = 0.05; // 눈보다 훨씬 약함
    vec2 windOffset = vec2(
        texture(uPerlinTexture, vec2(0.3, uTime * 0.2)).r - 0.5,
        texture(uPerlinTexture, vec2(0.7, uTime * 0.2)).r - 0.5
    ) * windStrength;

    newPosition.xz += windOffset*10.0;

    // 기본 변환
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;

    // 비는 작고 빠르게 — 점 크기 작게
    gl_PointSize = aSize * (1.0 / -viewPosition.z) * 25.0;

    vAlpha = aAlpha;
    vAIndex = aIndex;
}
