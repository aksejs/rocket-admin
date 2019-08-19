const path = require('path');

module.exports = {
    // main
    'app': path.join(__dirname, '../../app/src/'),

    // Project aliases
    "@styles": path.resolve(__dirname, '../../app/src/styles/'),
    "@features": path.resolve(__dirname, '../../app/src/features/'),
    "@pages": path.resolve(__dirname, '../../app/src/pages/'),
    "@assets": path.resolve(__dirname, '../../app/assets/'),
    "@api": path.resolve(__dirname, '../../app/src/api/'),
    "@utils": path.resolve(__dirname, '../../app/src/utils/'),
    "@common": path.resolve(__dirname, '../../app/src/common/'),

    // service

    'entryPoint': path.join(__dirname, '../../app/main.tsx'),
    "appRoot": path.join(__dirname, '../../app/')
};
