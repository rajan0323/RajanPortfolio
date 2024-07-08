import { DataTexture } from 'three';
import { EXR } from 'three/examples/jsm/loaders/EXRLoader';
import { LogLuv } from 'three/examples/jsm/loaders/LogLuvLoader';
import { RGBE } from 'three/examples/jsm/loaders/RGBELoader';
/**
 * Utility function to obtain a `DataTexture` from various input formats
 *
 * @category Utility
 * @group Utility
 *
 * @param image
 * @returns
 */
export declare const getDataTexture: (image: EXR | RGBE | LogLuv | DataTexture) => DataTexture;
