// 요청이 들어왔을 때 임의의 응답을 해주는 핸들러 코드 작성
// REST API 모킹할 때는 msw 모듈의 rest 객체 사용

import { rest } from "msw";

const todos = ["여행계획 세우기", "KTX 예매하기", "숙소 예약하기"];

export const handlers = [
  // 할 일 목록
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할 일 추가
  rest.post("/todos", (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
