export default class ObjectHelper {
  public static IsNullOrEmpty(obj?: object) {
    if (!obj) {
      return true;
    }

    return (
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    );
  }
}
