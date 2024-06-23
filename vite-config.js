import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                png: {
                    // https://sharp.pixelplumbing.com/api-output#png
                    quality: 99,
                },
                jpeg: {
                    // https://sharp.pixelplumbing.com/api-output#jpeg
                    quality: 99,
                },
                jpg: {
                    // https://sharp.pixelplumbing.com/api-output#jpeg
                    quality: 99,
                },
                tiff: {
                    // https://sharp.pixelplumbing.com/api-output#tiff
                    quality: 99,
                },
                // gif does not support lossless compression
                // https://sharp.pixelplumbing.com/api-output#gif
                gif: {},
                webp: {
                    // https://sharp.pixelplumbing.com/api-output#webp
                    lossless: false,
                },
                avif: {
                    // https://sharp.pixelplumbing.com/api-output#avif
                    lossless: true,
                },
                cache: false,
                cacheLocation: undefined,
            })
        ]
    }
})