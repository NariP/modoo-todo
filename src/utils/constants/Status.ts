export const STATUS = {
  ALL: '전체',
  FINISHED: '완료',
  ONGOING: '진행',
  NOT_STARTED: '대기',
};

export const IMPORTANT = {
  ALL: '전체',
  HIGH: '높음',
  MIDDLE: '보통',
  LOW: '낮음',
};
interface ISelect {
  [key: string]: string[];
}
export const SELECT: ISelect = {
  STATUS: [STATUS.ALL, STATUS.FINISHED, STATUS.ONGOING, STATUS.NOT_STARTED],
  IMPORTANT: [IMPORTANT.ALL, IMPORTANT.HIGH, IMPORTANT.MIDDLE, IMPORTANT.LOW],
};
