# OS UI 시뮬레이터 v03

기존 정적 사이트에 2026-10-04 최신 스토리보드를 반영한 로컬 수정본입니다. **이번 변경은 GitHub Pages 배포 대상입니다.**

**node server.mjs** 실행 후 [로컬 화면](http://127.0.0.1:4173/#scenario=2&cut=3.1)을 여세요. 이미 서버가 실행 중이면 주소만 열면 됩니다.

- [최신 제작 명세](SPEC.md)
- [실행 및 파일 안내](LOCAL_RUN.md)
- [화면 검증 결과](SITE_VERIFICATION.md)
- [원문 동기화 검증](VALIDATION.md)

최신 I열 V.O를 전체 45컷에 적용했습니다. S2 씬3은 인사 → 주차·충전 → 컨디션 → 업무 순서입니다. 과거 링크 3.5는 최신 3.2로 안내합니다. 기존 3.2·3.3 링크는 최신 번호의 의미로 동작합니다.

원문 스냅샷·병합 범위는 data/storyboard-live-*.json, 추출 셀은 data/source-extract.json, 화면 데이터는 data/cuts.json과 display-demo.json에 있습니다. data/production-manifest.json은 실제 렌더 결과의 영역·주석·문구 내보내기입니다. 수정 전 자료는 verification/baseline-before-storyboard에 보관했습니다.

최초 생성 스크립트(create-demo, create-tracks 등)는 과거 제작 이력입니다. 실행하면 최신 데이터를 덮어쓸 수 있으므로 사용하지 마세요. 원문 동기화는 scripts/sync-storyboard.cjs, 화면 검증은 scripts/verify-v3.cjs 및 scripts/audit-v3.cjs, 명세 생성은 scripts/export-v3.cjs 순서입니다. 명세 생성은 검증된 production-manifest가 필요합니다.
