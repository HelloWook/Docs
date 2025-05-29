### ✅ 1. 개요 요약

```
GitHub Actions = 자동화 도구 + CI/CD 플랫폼
```

#### pr이 생기면

- `빌드`, `테스트`, `배포` 가능
- `github` 에서 제공하는 `VM`이나 직접 만든 실행기에서 실행 가능

#### 🔁 워크플로 (workflow)

- 자동화 프로세스
- `.github/workflows/` 디렉토리에 YAML 파일로 정의됨
- 이벤트 기반으로 실행되며 수동 실행도 가능

#### 🔔 이벤트 (event)

- 워크플로 실행 트리거

- 종류:

  - PR, 푸시, 이슈 생성 등
  - 수동 실행 (workflow_dispatch)
  - 정기 실행 (cron)
  - REST API로 트리거

#### 🔹 단계 (step)

- 셸 명령어나 uses:로 액션 실행
- 순서대로 실행됨
- 같은 job 안에서는 캐시나 변수 공유 가능

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps: ...
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps: ...
```

#### 🧱 액션 (action)

- 반복되는 일을 묶은 모듈화된 기능 블록

```
예: actions/checkout, setup-node, upload-artifact
```

- 직접 만들 수도 있고, GitHub Marketplace에서 가져올 수도 있음
