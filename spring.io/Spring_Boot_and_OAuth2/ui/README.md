### ui 프로젝트를 진행하면서 나온 여러가지 정리할 내용들

#### facebook 설정 내용을 github에서 숨기기
- application.yml에 facebook app 연동에 필요한 정보를 등록해야 하는데 github의 현재 repository는 public이므로 숨길 필요가 있다.
- facebook app은 facebook 개발자 사이트에서 등록해야 한다.
    - [facebook 개발자 사이트](https://developers.facebook.com)
- 숨겨야 하는 내용은 아래와 같다.
    - security.oauth2.client.clientId
    - security.oauth2.client.clientSecret
- ui 앱을 기동 시 아래와 같이 VM option을 통해 설정값을 주입할 수 있다.
    - -Dsecurity.oauth2.client.clientId={{clientId}} -Dsecurity.oauth2.client.clientSecret={{clientSecret}} 