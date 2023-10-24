import {MainObject} from "../../core/main/main-object"
import Lakes from "src/js/state/Lakes"

/**
 * Sets up the default lake if it doesn't exist
 */
export function initialize(main: MainObject) {
  const port = main.args.lakePort
  const user = main.appMeta.userName
  const lake = Lakes.getDefaultLake(port, user)

  const exists = Lakes.id(lake.id)(main.store.getState())
  if (exists) return

  main.store.dispatch(Lakes.add(lake))
}
