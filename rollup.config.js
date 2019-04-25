import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

const externalModules = ['ramda', '@bundled-es-modules/axios']

function isImportExternal (importStr) {
  let external = false

  // Check for each of the external modules defined above
  externalModules.forEach(externalModule => {
    if (importStr.indexOf(externalModule) >= 0) external = true
  })

  return external
}

export default {
  input: 'lib/apisauce.js',
  output: {
    file: 'dist/apisauce.js',
    format: 'es',
    exports: 'named',
  },
  plugins: [
    babel({ babelrc: false }),
    uglify(),
    filesize()
  ],
  external: isImportExternal
}
