// @see https://stackblitz.com/edit/axios-actions-ts?file=src%2Flib.ts,index.html,src%2Fmain.ts

type Actions = Record<string, string>
type Params = Record<string, any>
type Endpoint = (params: Params) => Promise<any>

// return an object of the form { key => async function (params) { } }
export function create<A extends Actions, E = Record<keyof A, Endpoint>>(actions: A): E {
  return Object.keys(actions).reduce(function (output: Record<string, any>, action: string) {
    output[action] = (params: Record<string, any>) => {
      return Promise.resolve(params)
    }
    return output
  }, {}) as E
}

const endpoints = create({
  foo: 'GET foo',
  bar: 'GET bar',
})
