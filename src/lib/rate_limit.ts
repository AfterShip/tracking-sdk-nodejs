/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
interface _RateLimit {
  x_ratelimit_reset: string;
  x_ratelimit_limit: string;
  x_ratelimit_remaining: string;
}

export class RateLimit {
  protected _ratelimit?: _RateLimit;

  set ratelimit(r: _RateLimit) {
    this._ratelimit = r;
  }

  public isExceeded(): boolean {
    if (!this._ratelimit) {
      return false;
    }
    return (
      this._ratelimit.x_ratelimit_remaining === "0" &&
      this._ratelimit.x_ratelimit_reset >= new Date().valueOf().toString()
    );
  }
}
