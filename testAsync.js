/*
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
 
  run();
  console.log('Done !!!'); //동기
  */
/*
  function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
  }
 
  run();
  console.log('Done !!!'); //비동기 : Done 이후 run()
  */
 /*
  function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  run(() => {
    console.log('Done !!!');//비동기 : callback 으로 실행될 익명함수 퍼센트 함수 (순서 제어)
  });
*/
//promise 객체를 리턴할건데 성공하면 리졸브해줄게 어싱크 어웨이트 프로미스를 (콜백이 복잡해서 탄생?)
function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!'); //내부적 비동기
}
 
process();