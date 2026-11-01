# Hyewon Jung — personal site

Astro static site, deployed to GitHub Pages. English + Korean.

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
```

## 후기 추가하기

1. `src/content/reviews/en/` (또는 `ko/`)에 `show-name.md` 파일을 만든다. 파일 이름이 URL이 된다: `/en/reviews/show-name/`.
2. 위쪽 정보(frontmatter)를 채운다:

   | 필드 | 필수 | 예시 |
   |---|---|---|
   | `title` | ✅ | `Hadestown` |
   | `kind` | ✅ | `musical` 또는 `play` |
   | `seen` | ✅ | `2026-10-18` |
   | `venue`, `city` | ✅ | `Benedum Center`, `Pittsburgh, PA` |
   | `rating` | ✅ | 0–5, 0.5 단위 |
   | `summary` | ✅ | 목록 티켓에 보이는 한 문장 |
   | `seat`, `cast`, `tags` | | `Orch G-104`, `[A, B]` |

3. 아래에 마크다운으로 본문을 쓴다.
4. 번역본은 다른 언어 폴더에 **같은 파일 이름**으로 둔다. 그러면 상단 언어 전환 버튼이 두 글을 연결한다. 번역이 없으면 버튼은 그 언어의 후기 목록으로 간다.

샘플 파일(`sample-*.md`)은 실제 후기를 올린 뒤 지우면 된다.

## 그림 추가하기

1. 그림 파일(jpg/png/webp)을 `src/content/drawings/images/`에 넣는다. 크기는 자동으로 최적화된다.
2. `src/content/drawings/`에 `그림이름.md`를 만든다. 한 파일에 한/영 둘 다 쓴다:

   ```yaml
   ---
   image: ./images/hadestown-orpheus.jpg
   date: 2026-11-01
   show: Hadestown            # 선택: 관련 공연. 없으면 줄 삭제
   title:
     en: Orpheus, act two
     ko: 2막의 오르페우스
   caption:
     en: One or two sentences about the drawing.
     ko: 그림에 대한 한두 문장.
   alt:                       # 선택: 화면 낭독기용 그림 설명
     en: Pencil sketch of a singer with a guitar
     ko: 기타를 든 가수를 그린 연필 스케치
   ---
   ```

3. 최신 날짜 순으로 그림 페이지와 홈의 "인터미션" 섹션에 나온다. 샘플(`sample-*.md`, `images/sample-*.png`)은 진짜 그림을 올린 뒤 지우면 된다.

## 프로젝트 추가하기

`src/content/projects/{en,ko}/`에 같은 방식으로. `order`가 작을수록 위에 나온다.

## 배포

`main`에 push하면 `.github/workflows/deploy.yml`이 빌드해서 GitHub Pages로 올린다.
저장소 Settings → Pages → Source를 **GitHub Actions**로 설정해야 한다.
저장소 이름이 `<username>.github.io`가 아니면 workflow에 `BASE_PATH: /저장소이름` 환경변수를 추가한다.
