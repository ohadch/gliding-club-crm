type ValueOf<T> = T[keyof T];

export default class UtilsService {
  public static enumStringValuesIterator<T>(_enum: T): ValueOf<T>[] {
    return Object.values(_enum).filter(value => typeof value === "string") as ValueOf<T>[];
  }

  public static shuffle<T = any>(array: Array<T>) {
    let currentIndex = array.length; let
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  public static randomChoice<T>(array: Array<T>) {
    const cloneArr = [...array];
    UtilsService.shuffle(cloneArr);
    return cloneArr[0];
  }
}
