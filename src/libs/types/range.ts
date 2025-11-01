export type TRange<
  Start extends number,
  End extends number,
  Result extends unknown[] = [],
  Acc extends number = never
> = Result['length'] extends End
  ? Acc | End
  : TRange<
      Start,
      End,
      [...Result, unknown],
      Result['length'] extends Start
        ? Start
        : Acc | (Result['length'] extends Start ? never : Result['length'])
    >
