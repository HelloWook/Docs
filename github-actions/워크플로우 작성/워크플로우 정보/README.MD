## 고급 워크플로우 기능

#### 비밀 저장

```yml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```

#### 종속작업

- 기본적으로 `gitub-action`은 병렬 작업이다.
- 종속 작업 특정 작업이 끝난 후 작업을 실행 할 수 있다.

```yaml
name: GitHub Actions Demo
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
on: [push, pull_request]
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "🎉 hello world"
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: echo "🐧setup"
```
