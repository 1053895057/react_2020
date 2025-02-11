const { override, fixBabelImports,addLessLoader } = require('customize-cra');
const theme=require('./antd-theme.json')

module.exports = override(
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
            modifyVars:theme,
        }
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
    }),
);