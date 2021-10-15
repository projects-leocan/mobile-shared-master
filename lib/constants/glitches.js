import { createTypes } from 'reduxsauce';

export default createTypes(`
  GLITCHES_RESET

  GLITCHES_FETCH
  GLITCHES_SUCCESS
  GLITCHES_FAILURE

  GLITCHES_OPTIONS_FETCH
  GLITCHES_OPTIONS_SUCCESS
  GLITCHES_OPTIONS_FAILURE

  GLITCH_ACTIVATE
  GLITCH_DEACTIVATE

  GLITCH_NEW
  GLITCH_ACKNOWLEDGE
  GLITCH_ACKNOWLEDGE_OPTIMISTIC
  GLITCH_BATCH_ACKNOWLEDGE
  GLITCH_BATCH_ACKNOWLEDGE_OPTIMISTIC
  GLITCH_RECATEGORIZE
  GLITCH_START
  GLITCH_UPDATE
  GLITCH_HANDOVER
  GLITCH_EMAIL
  GLITCH_TASK
  GLITCH_CLOSE
`);