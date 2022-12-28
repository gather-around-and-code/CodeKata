# What is Code kata
> Code Kata는 Coding dojo (도장) 에서 사용하는 훈련방법 입니다.  
> 같은 문제를 머리가 아니라 손이 기억할 때까지 반복하는 훈련입니다.

* 개발 방법론

사용 되는 개발 방법론으로는 OOP (Object Oriented Programming) 진영의 Agile 방식을 사용 합니다.

[Agile Software Development](https://ko.wikipedia.org/wiki/%EC%95%A0%EC%9E%90%EC%9D%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C) 

- Unit testing

Unit testing은 Xunit을 기본으로 사용합니다. 지원되지 않는 경우 해당 언어의 unit test 방법론을 따릅니다.  
Code kata + Agile 을 사용하여 프로젝트와 공부도 같이 할 수 있는 방법입니다. TDD를 사용하여 프로젝트를 진행 합니다.

# How to play kata

1. 요구사항 분석
2. 이슈 작성
3. Test 코드 작성
4. Product 코드 작성
5. Merge
6. Issue close

요구사항 분을 통해서 이슈를 작성합니다. 이후 모두 모여서 테스트코드를 작성합니다.  
3명에서 진행 한다면, 1명은 Keyboard, 2명은 Brain이 되어야 합니다. (제일 좋은 것은 2명씩 짝짓는 것입니다.)  
3명 모두 코드에 대해서 의견을 나누면서 Test code를 작성합니다 (TDD 기반 프로젝트 진행)  
모두가 동의한 코드에 대해서 Merge를 진행 합니다. 이후 완료된 Issue를 닫고 다음 Issue를 진행 합니다.  

# Commit Message Format

```bash
git commit -am "✨ <type>(ticket_number): <description>
# git commit -am "✨ new(#2):  decription.."
```

|    |     Types     |                             Description                            |
|:--:|:-------------:|:------------------------------------------------------------------:|
|  1 |     `new`     | 새로운 기능 구현                                                   |
|  2 |   `feature`   |                                                                    |
|  3 |    `update`   | 업데이트                                                           |
|  4 |     `bug`     | 버그 수정                                                          |
|  5 |   `security`  | 보안 문제 수정                                                     |
|  6 | `performance` | 성능 문제 수정                                                     |
|  7 | `improvement` | 역호환성(backwards-compatible) 향상                                |
|  8 |   `breaking`  | 이전 버전과 호환되지 않는(backwards-incompatible) 향상             |
|  9 |  `deprecated` | 사용되지 않는 기능                                                 |
| 10 |     `i18n`    | i18n (국제화)                                                      |
| 11 |     `a11y`    | a11y (접근성)                                                      |
| 12 |  `reafactor`  | 리팩토링                                                           |
| 13 |     `docs`    | 참고 문서                                                          |
| 14 |   `example`   | 예제 코드                                                          |
| 15 |     `test`    | 테스트                                                             |
| 16 |     `deps`    | 종속성(dependencies)업그레이드 또는 다운그레이드(downgrading) 커밋 |
| 17 |    `config`   | 구성(configuration)                                                |
| 18 |    `build`    | 패키지(packaging) 또는 번들링(bundling)                            |
| 19 |   `release`   | 배포                                                               |
| 20 |     `wip`     | 진행 중인 작업                                                     |
| 21 |    `chore`    | 다른 작업                                                          |

## 참조

- The Pro Git book, by Scott Chacon and Ben Straub, includes a section on "Commit Messages" (https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#Commit-Messages) that discusses best practices for writing commit messages.
- The Git documentation also has a section on "Writing good commit messages" (https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#Commit-Messages) that provides guidelines for writing clear and informative commit messages.
- The AngularJS project has a detailed style guide for commit messages (https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w) that includes examples of good and bad commit messages.
