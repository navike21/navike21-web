export type Range<
  Start extends number,
  End extends number,
  Result extends unknown[] = [],
  Acc extends number = never
> = Result['length'] extends End
  ? Acc | End
  : Range<
      Start,
      End,
      [...Result, unknown],
      Result['length'] extends Start
        ? Start
        : Acc | (Result['length'] extends Start ? never : Result['length'])
    >
