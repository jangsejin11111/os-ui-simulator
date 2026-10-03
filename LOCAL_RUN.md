# 로컬 실행과 구성

프로젝트 폴더에서 **node server.mjs** 실행 후 http://127.0.0.1:4173/ 을 엽니다. 별도 빌드 없이 상대 경로로 로드하는 정적 사이트입니다. /preview/ 하위 경로도 같은 사이트를 제공합니다.

상시 보기에서는 현재 컷만 반복합니다. 좌우 버튼·방향키·컷 선택으로 이동하며, 스페이스로 멈춤/재개합니다. 타이밍 검토는 보조 기능이고, 정적 보기는 정보를 갖춘 고정 상태를 보여 줍니다. 주석과 원문은 작품 UI와 별도입니다.

| 파일 | 역할 |
|---|---|
| src/app.js | 공통 재생 시계, 최신 URL·호환 링크, 한국어 조작·V.O·원문 보기 |
| src/render.js / scene.css | 화면·상태·반복 동작 |
| data/cuts.json | 최신 번호, 의미 ID, I열 V.O, 출처·제작 메모, 실제 화면 명세 |
| data/display-demo.json | 영문 시연 카피·값·루프 프로파일 |
| data/source-extract.json | 최신 B–L 원문 셀과 병합 출처 |
| data/preview-tracks.json | 현재 타이밍·상태 내보내기 |
| data/production-manifest.json | 브라우저에서 추출한 영역·주석·문구·모션 |
| data/storyboard-live-*.json | 확인 시점 Google Sheets 원문·XLSX 병합/이미지 연결 |
| assets/sample / references | 작품 그래픽 / 최신 원문 참고 이미지 |

## 정적 배포 구조

기존 GitHub Pages용 index.html, .nojekyll, src/, data/, assets/, references/ 상대경로 구조를 유지했습니다. 이번 수정본은 최신 스토리보드를 반영한 GitHub Pages 배포 대상입니다.
