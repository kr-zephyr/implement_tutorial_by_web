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
        - Tutorial을 진행함에 따라 @EnableOAuth2Sso를 @EnableOAuth2Client으로 대체함으로써 개별 OAuth에 대한 구현을 가능하게 변경하였다.
        - 현재(2019.05.24)는 Facebook Client를 직접 구현하는 형태로 바뀌었으며, application.yml의 설정도 security.oauth2.client가 아닌 facebook.client로 변경하였으므로 아래와 같이 주입해야 한다.
        - -Dfacebook.client.clientId={{clientId}} -Dfacebook.client.clientSecret={{clientSecret}}
- github app은 github의 Settings > Developer settings > OAuth Apps에서 등록해야 한다.
    - [github OAuth Apps](https://github.com/settings/developers)
    - 숨겨야 하는 내용은 위의 facebook과 유사하다.
    - facebook app과는 달리 github OAuth App을 등록할 때는 callback url을 필수로 지정해야 하는데, github에서 인증 후 돌아오는 페이지를 지정해주면 된다. (이 예제에서는 http://localhost:8080)
    
#### application.yml의 spring.main.allow-bean-definition-overriding 옵션 추가 사유
- SpringBoot2.1부터는 Spring Bean의 Override 기능이 제거되었다. (제거된 사유는 찾아보자.)
- spring-boot-starter-security에는 `OAuth2ClientContextConfiguration`에 `oauth2ClientContext` Bean이 정의되어 있는데, tutorial 상에서 `@EnableOAuth2Sso`를 사용하기 위해 추가한 dependency `spring-security-oauth2-autoconfigure`에 `ClientContextConfiguration`에서 `oauth2ClientContext`를 Bean으로 사용하려고 한다.
- 위 사유 때문에 Bean Override로 인해 `BeanDefinitionOverrideException`이 발생한다.
- `BeanDefinitionOverrideException`으로 app 기동은 실패하게 될 것이며, spring.main.allow-bean-definition-overriding=true 옵션을 사용하도록 가이드가 출력된다.

#### SocialApplication.oauth2ClientContext이 IDE에서 경고로 표시될 수 있다.
- 코드 상으로는 아직 Dependency가 주입되지 않았기 때문인데, oauth2ClientContext가 여러곳에서 Bean으로 정의되어 있기 때문이다.
- qualifier의 이름으로 직접 Bean을 지정하거나 정확한 구현체를 주입할 수 있도록 셋팅하는 것으로 해결할 수 있으나, tutorial의 소스를 우선은 그대로 따라간다.
	- 추가로 oauth2ClientContext가 Bean으로 선언된 소스들(Spring Security2 v2.2.1)에서는 각각의 Bean 정의에 대해 Bean 이름을 지정하고 있지 않기 때문에 qualifier에 의한 Bean 이름으로 직접 지정은 할 수 없다.