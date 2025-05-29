### ✅ 연속 통합(CI)이란?

- 코드를 자주 공용 리포지토리에 커밋하는 개발 방식
- 커밋할 때마다 자동으로 빌드 + 테스트
  → 버그나 충돌을 초기에 발견할 수 있음
- 개발자는 기능 개발에 집중하고
  디버깅이나 병합 충돌 해결에 쓰는 시간을 줄일 수 있음

#### ⚙️ GitHub Actions으로 CI 하는 방법

- GitHub Actions 워크플로로
  커밋 발생 시 자동 빌드 + 테스트

- 워크플로는 아래에서 실행 가능:
  - GitHub 제공 VM (Linux, Windows, macOS)
  - 직접 설치한 머신 (self-hosted runner)
- 실행 트리거 방법:
  - `push`, `pull_request` 등의 GitHub 이벤트
  - 예약된 시간 `(cron)`
  - 외부 이벤트 `(웹훅)`

#### 🧪 테스트 예시 (CI 워크플로 내용)

- 코드 스타일 검사 (Linter)
- 보안 취약점 검사
- 단위/통합 테스트
- 커스텀 테스트 스크립트

#### 🧰 워크플로 템플릿

- GitHub가 언어별 워크플로 템플릿 추천해줌
  - 예: `Node.js → npm install && npm test`
