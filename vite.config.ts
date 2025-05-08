import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv, UserConfigExport} from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import {chunkSplitPlugin} from 'vite-plugin-chunk-split';

// @ts-ignore
export default defineConfig(({command, mode}: UserConfigExport) => {
    // @ts-ignore
    const env = loadEnv(mode, process.cwd(), '');
    // @ts-ignore
    return {
        mode: env.NODE_ENV,
        plugins: [
            react({include: /\.(mdx|ts|tsx)$/}),
            viteTsconfigPaths(),
            chunkSplitPlugin()
        ],
        server: {
            port: 8090,
            https: false,
            open: './index.html',
            watch: {
                ignored: ['**/node_modules/**']
            }
        },
        esbuild: {
            treeShaking: true,
            minify: false,
            loader: 'tsx',
            target: 'es2020',
            minifyWhitespace: true,
            minifySyntax: false,
            platform: 'browser',
            sourcemap: false
        },
        build: {
            watch: false,
            manifest: 'manifest.json',
            minify: false,
            target: 'es2020',
            sourcemap: true,
            commonjsOptions: {transformMixedEsModules: true},
            rollupOptions: {
                shimMissingExports: true,
                treeshake: true,
                external: ['./.idea', './.git', '.storybook', 'node_modules'],
                perf: true,
                jsx: true,
                logLevel: 'error'
            }
        }
    };
});
