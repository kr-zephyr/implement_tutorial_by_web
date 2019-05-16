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
    
#### application.yml의 spring.main.allow-bean-definition-overriding 옵션 추가 사유
- SpringBoot2.1부터는 Spring Bean의 Override 기능이 제거되었다. (제거된 사유는 찾아보자.)
- spring-boot-starter-security에는 `OAuth2ClientContextConfiguration`에 `oauth2ClientContext` Bean이 정의되어 있는데, tutorial 상에서 `@EnableOAuth2Sso`를 사용하기 위해 추가한 dependency `spring-security-oauth2-autoconfigure`에 `ClientContextConfiguration`에서 `oauth2ClientContext`를 Bean으로 사용하려고 한다.
- 위 사유 때문에 Bean Override로 인해 `BeanDefinitionOverrideException`이 발생한다.
- `BeanDefinitionOverrideException`으로 app 기동은 실패하게 될 것이며, spring.main.allow-bean-definition-overriding=true 옵션을 사용하도록 가이드가 출력된다.