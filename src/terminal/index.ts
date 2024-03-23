import Youch from 'youch'
// @ts-ignore
import forTerminal from 'youch-terminal'


const Options = {
  // Defaults to false
  displayShortPath: false,

  // Defaults to single whitspace
  prefix: ' ',

  // Defaults to false
  hideErrorTitle: false,

  // Defaults to false
  hideMessage: false,

  // Defaults to false
  displayMainFrameOnly: false,

  // Defaults to 3
  framesMaxLimit: 3,
}

export const prettifyError = async (error: Error, options: Partial<typeof Options> = Options) => {
  const jsonFormat = await new Youch(error, {}).toJSON()
  console.log(forTerminal(jsonFormat, options))
}