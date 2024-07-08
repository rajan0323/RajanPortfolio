import { DataTexture, WebGLRenderer } from 'three';
import { EXR } from 'three/examples/jsm/loaders/EXRLoader';
import { LogLuv } from 'three/examples/jsm/loaders/LogLuvLoader';
import { RGBE } from 'three/examples/jsm/loaders/RGBELoader';
/**
 *
 * @category Utility
 * @group Utility
 *
 * @param srcTex
 * @param mode
 * @param renderer
 * @returns
 */
export declare const findTextureMinMax: (image: EXR | RGBE | LogLuv | DataTexture, mode?: 'min' | 'max', renderer?: WebGLRenderer) => number[];
