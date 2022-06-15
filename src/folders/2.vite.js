// this runs only under vite
const modules = import.meta.glob('./modules/*.js')

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
