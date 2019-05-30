# puppeteer 테스트한 내용들

### reference
- [Puppeteer API Tip-Of-Tree](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)
- [Puppeteer examples](https://github.com/checkly/puppeteer-examples)
- [Puppeteer: Headless Chrome용 Node.js 라이브러리](https://blog.outsider.ne.kr/1318)

### 소스 환경 구성 방법
1. 반드시 `package.json`이 있는 상태여야 한다.
2. `npm i`
	- `package.json`을 기반으로 node의 module 및 dependency들을 설치하여 환경을 구성한다.
3. `node {{source name}}`
	- node 프로그램을 실행한다.