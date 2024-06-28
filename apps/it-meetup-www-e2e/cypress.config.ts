import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run it-meetup-www:serve',
        production: 'nx run it-meetup-www:preview',
      },
      ciWebServerCommand: 'nx run it-meetup-www:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
