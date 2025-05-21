### 개요

- 워킹 디렉토리는 크게 `Tracked` , `Untracked`로 나뉜다.

#### 커밋할 데이터 선택

```bash
git add [이름]
```

- 파일을 이제 커밋할 것임을 `STAGED` 한 상태
- `add` 한 상태는 최신이여야한다 그렇지 않다면 `MODIFEID` 상태가 변경된다.

#### 커밋

```bash
git commit -m[메시지]  "배고프다"
```

- `git`을 커밋하는 방법
- `-m`을 사용하지 않을 시 `ㅎvim`에서 편집을 할 수 있다.
- `-ammend` 는 이전 커밋을 수정하거나 삭제할 수 있도록한다. / 또한 편집된 커밋은 히스토리에 남지 않는다.

#### clone

```bash
git clone [url][저장할 폴더명]
```

- url의 레포를 클론해 로컬에 저장한다.
- 저장할 폴더명을 가지면 그 폴더명으로 저장한다.

#### 상태 확인

```bash
git status
```

- 현재 `git`으로 받아온 상태를 확인한다.

```
git status
```

- 현재 상태가 어떤 상태인지 판단한다.

#### git ignore 규칙

- `.gitignore` 파일에 입력하는 패턴은 아래 규칙을 따른다.

- 아무것도 없는 라인이나, # 로 시작하는 라인은 무시한다.

- 표준 Glob 패턴을 사용한다. 이는 프로젝트 전체에 적용된다.

- `슬래시(/)`로 시작하면 하위 디렉토리에 적용되지(Recursivity) 않는다.

- 디렉토리는 `슬래시(/)`를 끝에 사용하는 것으로 표현한다.

- `느낌표(!)`로 시작하는 패턴의 파일은 무시하지 않는다.

#### git 비교

```bash
git diff [--staged]
```

- 변경사항을 확인하는 명령어이다.
- staged와 unstaged 비교
- 뒤에 `--staged`를 붙이면 staged된 상태와 원격 저장소 비교

#### git 로그 확인

```bash
git log
```

- 커밋 히스토리를 확인하는 명령어이다.
- 뒤에 `-p`는 각 커밋의 `diff`한 결과를 보여준다.
- `--stat` 각 커밋의 통계 정보를 조회할 수 있다.
- `--pretty`를 이용해 불러올 정보의 포맷을 결정할 수 있다.
- `--format`를 불러온 포맷을 결과를 출력하고 싶을 때 사용한다.
- `--since` 나 `--until` 같은 시간을 기준으로 조회하는 옵션을 할 수 있다.

#### 파일 상태를 Unstage로 변경하기

- `add`한 파일을 이전 하기 전으로 되돌린다.

```bash
 git restore --staged <파일 이름>
 git reset  HEAD  <파일 이름>
```

#### Modified 파일 되돌리기

- `checkout`을 이용해 이전의 파일의 수정을 없었던 것으로 할 수 있다. 다만 이 방식은 매우 위험하다..

```
git checkout -- CONTRIBUTING.md
```

#### 리모트 사용하기

- 기본 `romote` 저장소는 `origin`이다.
- 원격 저장소 등록을 위해선 `git remote add <단축이름> <url>`를 사용한다.
- 삭제를 위해선 `remove`를 사용한다.

```bash
git remote
```

#### 깃헙 연동해서 레포 만들기 및 첫 커밋

```
echo "# tesst-git" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/HelloWook/tesst-git.git
git push -u origin main
```

#### git 태그 확인

- 밑 명령어를 이용해 이미 만들어진 태그가 있는지 확인한다.

###### 태그 왜 사용?

1. 릴리즈 관리
2. 배포 자동화 용도

```bash
git tag
```

#### git alias

- 커맨드 라인을 좀 더 심플하게 사용할 수 있다.
- `config`파일로 만드는 그 친구가 맞당..
