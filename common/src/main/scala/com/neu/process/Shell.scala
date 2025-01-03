package com.neu.process

/**
 * Call operating system's script interpreter to run a script.
 */
object Shell {

  /**
   * Run a script using operating system's script interpreter. Currently only support *nix operating
   * systems.
   */
  def apply(script: String, interpreter: String = "/bin/sh")(implicit env: Env): Proc =
    System.getProperty("os.name").toLowerCase match {
      // noinspection ScalaStyle
      case os if os.contains("nux") || os.contains("sun") || os.contains("mac") =>
        new Proc(interpreter, "-c", script)(env)
      case _                                                                    => throw new UnsupportedOperationException("Interpret does not work in your OS")
    }
}
