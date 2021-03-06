import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 5000 },
    { duration: '30s', target: 50 }
  ]
};

export default function () {
  let getReq = http.get('http://localhost:8080/');
  check(getReq, {
    'get: status was 200': r => r.status === 200,
    'get: transaction time OK': r => r.timings.duration < 2000
  });
  sleep(1);
}